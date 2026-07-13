import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Hero } from "@/components/Hero";
import { CTASection } from "@/components/CTASection";
import { SectionDivider } from "@/components/SectionDivider";
import { FAQ } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/jsonld";
import { getPost, getPublishedPosts } from "@/lib/aeo-blog";
import { business } from "@/content/business";

type Params = { slug: string };

// Hourly ISR + on-demand revalidation via /api/revalidate on publish.
export const revalidate = 3600;

export async function generateStaticParams(): Promise<Params[]> {
  const posts = await getPublishedPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Post not found" };
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      images: post.hero_image ? [post.hero_image] : undefined,
      publishedTime: post.published_at,
      modifiedTime: post.updated_at,
    },
  };
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  if (isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Brand-styled markdown renderers (no typography plugin — explicit control).
const mdComponents = {
  h2: (props: React.ComponentProps<"h2">) => (
    <h2
      className="mt-10 mb-3 font-display text-2xl sm:text-3xl text-brand-green"
      {...props}
    />
  ),
  h3: (props: React.ComponentProps<"h3">) => (
    <h3
      className="mt-8 mb-2 font-display text-xl text-brand-green"
      {...props}
    />
  ),
  p: (props: React.ComponentProps<"p">) => (
    <p className="my-4 leading-[1.75] text-brand-charcoal/90" {...props} />
  ),
  ul: (props: React.ComponentProps<"ul">) => (
    <ul className="my-4 list-disc space-y-2 pl-6 text-brand-charcoal/90" {...props} />
  ),
  ol: (props: React.ComponentProps<"ol">) => (
    <ol className="my-4 list-decimal space-y-2 pl-6 text-brand-charcoal/90" {...props} />
  ),
  li: (props: React.ComponentProps<"li">) => (
    <li className="leading-[1.7]" {...props} />
  ),
  a: (props: React.ComponentProps<"a">) => (
    <a className="font-semibold text-brand-cta underline hover:text-brand-cta-hover" {...props} />
  ),
  strong: (props: React.ComponentProps<"strong">) => (
    <strong className="font-semibold text-brand-charcoal" {...props} />
  ),
  blockquote: (props: React.ComponentProps<"blockquote">) => (
    <blockquote
      className="my-6 border-l-4 border-brand-tan bg-brand-cream-dark/60 px-5 py-3 italic text-brand-charcoal/90"
      {...props}
    />
  ),
  table: (props: React.ComponentProps<"table">) => (
    <div className="my-6 overflow-x-auto">
      <table className="w-full border-collapse text-sm" {...props} />
    </div>
  ),
  th: (props: React.ComponentProps<"th">) => (
    <th className="border border-brand-tan/40 bg-brand-cream-dark px-3 py-2 text-left font-semibold text-brand-green" {...props} />
  ),
  td: (props: React.ComponentProps<"td">) => (
    <td className="border border-brand-tan/40 px-3 py-2 text-brand-charcoal/90" {...props} />
  ),
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const faq = post.faq_json ?? [];
  const url = `${business.siteUrl}/blog/${post.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: post.hero_image || `${business.siteUrl}/logo.png`,
    datePublished: post.published_at,
    dateModified: post.updated_at,
    author: {
      "@type": "Organization",
      name: post.author || business.name,
      url: business.siteUrl,
    },
    publisher: { "@id": `${business.siteUrl}/#business` },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: post.title, url: `/blog/${post.slug}` },
        ])}
      />
      {faq.length > 0 && (
        <JsonLd
          data={faqSchema(faq.map((f) => ({ q: f.question, a: f.answer })))}
        />
      )}

      <Hero
        eyebrow="Roger's Blog"
        title={post.title}
        subtitle={post.description}
      />

      <article className="mx-auto max-w-3xl px-5 sm:px-6 py-12 sm:py-16">
        {/* Byline / meta */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-brand-charcoal/70">
          {post.published_at && (
            <time dateTime={post.published_at}>{formatDate(post.published_at)}</time>
          )}
          {post.read_time && (
            <>
              <span aria-hidden="true">·</span>
              <span>{post.read_time}</span>
            </>
          )}
          <>
            <span aria-hidden="true">·</span>
            <span>{post.author || business.name}</span>
          </>
        </div>

        {/* Hero image (from the engine; host is unknown, so plain img) */}
        {post.hero_image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={post.hero_image}
            alt={post.title}
            className="mt-6 w-full rounded-lg border border-brand-tan/30 object-cover"
          />
        )}

        {/* TL;DR — the "quick answer" block answer engines love to quote */}
        {post.tldr && (
          <div className="mt-8 rounded-lg border-l-4 border-brand-green bg-brand-cream-dark/60 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-tan">
              Quick answer
            </p>
            <p className="mt-2 leading-relaxed text-brand-charcoal/90">
              {post.tldr}
            </p>
          </div>
        )}

        {/* Body */}
        <div className="mt-6">
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={mdComponents}>
            {post.content}
          </ReactMarkdown>
        </div>
      </article>

      {/* FAQ — reuses the site's accordion + gets FAQPage schema above */}
      {faq.length > 0 && (
        <FAQ
          items={faq.map((f) => ({ q: f.question, a: f.answer }))}
          heading="Frequently asked questions"
        />
      )}

      <SectionDivider />

      <section className="mx-auto max-w-3xl px-5 sm:px-6 py-12 text-center">
        <Link
          href="/blog"
          className="text-sm font-semibold text-brand-cta hover:text-brand-cta-hover"
        >
          ← Back to all posts
        </Link>
      </section>

      <CTASection />
    </>
  );
}
