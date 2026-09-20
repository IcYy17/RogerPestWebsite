import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Hero } from "@/components/Hero";
import { CTASection } from "@/components/CTASection";
import { SectionDivider } from "@/components/SectionDivider";
import { WorkCard } from "@/components/WorkCard";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/jsonld";
import { getRecentWork, getWorkItem, priceBandLabel, serviceMatches, workSchema } from "@/lib/recent-work";
import { business } from "@/content/business";
import { services } from "@/content/services";

type Params = { slug: string };

// Hourly ISR + on-demand revalidation. dynamicParams lets a gig posted after
// the last build render on first request.
export const revalidate = 3600;
export const dynamicParams = true;

export async function generateStaticParams(): Promise<Params[]> {
  return (await getRecentWork()).map((i) => ({ slug: i.slug }));
}

function firstParagraph(md: string): string {
  return md.replace(/\s+/g, " ").trim().slice(0, 155);
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const item = await getWorkItem(slug);
  if (!item) return { title: "Job not found" };
  const where = item.city ? ` in ${item.city}` : "";
  const description = `${item.service}${where}: ${firstParagraph(item.bodyMd)}`;
  return {
    title: item.headline,
    description,
    alternates: { canonical: `/recent-work/${item.slug}` },
    openGraph: {
      type: "article",
      title: item.headline,
      description,
      url: `${business.siteUrl}/recent-work/${item.slug}`,
      images: item.photos[0] ? [item.photos[0]] : undefined,
      publishedTime: item.postedAt,
    },
  };
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  if (isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
}

const mdComponents = {
  h2: (props: React.ComponentProps<"h2">) => <h2 className="mt-10 mb-3 font-display text-2xl sm:text-3xl text-brand-green" {...props} />,
  h3: (props: React.ComponentProps<"h3">) => <h3 className="mt-8 mb-2 font-display text-xl text-brand-green" {...props} />,
  p: (props: React.ComponentProps<"p">) => <p className="my-4 leading-[1.75] text-brand-charcoal/90" {...props} />,
  ul: (props: React.ComponentProps<"ul">) => <ul className="my-4 list-disc space-y-2 pl-6 text-brand-charcoal/90" {...props} />,
  ol: (props: React.ComponentProps<"ol">) => <ol className="my-4 list-decimal space-y-2 pl-6 text-brand-charcoal/90" {...props} />,
  a: (props: React.ComponentProps<"a">) => <a className="font-semibold text-brand-cta underline underline-offset-2 hover:text-brand-cta-hover" {...props} />,
  strong: (props: React.ComponentProps<"strong">) => <strong className="font-semibold text-brand-green" {...props} />,
};

export default async function RecentWorkItemPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const item = await getWorkItem(slug);
  if (!item) notFound();

  const all = await getRecentWork();
  const related = all.filter((i) => i.slug !== item.slug && i.service === item.service).slice(0, 3);
  const servicePage = services.find((s) => serviceMatches(item.service, s.name));
  const url = `${business.siteUrl}/recent-work/${item.slug}`;
  const where = item.city ? ` in ${item.city}` : "";
  const price = priceBandLabel(item.priceBand);

  return (
    <>
      <JsonLd data={workSchema(item, url, `${business.siteUrl}/#business`)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Recent Work", url: "/recent-work" },
          { name: item.headline, url: `/recent-work/${item.slug}` },
        ])}
      />

      <Hero eyebrow={item.service} title={item.headline} subtitle={`${item.service}${where}, posted from the job by our crew.`} />

      <article className="mx-auto max-w-3xl px-5 sm:px-6 py-12 sm:py-16">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-brand-charcoal/70">
          <time dateTime={item.postedAt}>{formatDate(item.postedAt)}</time>
          {item.city && (<><span aria-hidden="true">·</span><span>{item.city}</span></>)}
          {price && (<><span aria-hidden="true">·</span><span>{price}</span></>)}
        </div>

        {item.photos[0] && (
          // Photos come from the Drumroll CDN (external host): plain img.
          // eslint-disable-next-line @next/next/no-img-element
          <img src={item.photos[0]} alt={`${item.service}${where}`} className="mt-6 aspect-[4/3] w-full rounded-lg border border-brand-tan/30 object-cover" />
        )}

        <div className="mt-6">
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={mdComponents}>{item.bodyMd}</ReactMarkdown>
        </div>

        {item.costSection && (
          <aside className="mt-8 rounded-lg border-l-4 border-brand-green bg-brand-cream-dark/60 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-tan">What does it cost?</p>
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={mdComponents}>{item.costSection}</ReactMarkdown>
            <p className="mt-2 text-sm text-brand-charcoal/60">Every job is different; this is the typical range, never an exact quote.</p>
          </aside>
        )}

        {item.photos.length > 1 && (
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {item.photos.slice(1).map((src, n) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={src} src={src} alt={`${item.service}${where}, photo ${n + 2}`} loading="lazy" className="aspect-[4/3] w-full rounded-lg border border-brand-tan/30 object-cover" />
            ))}
          </div>
        )}

        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-brand-tan/30 pt-6 text-sm font-semibold">
          <Link href="/recent-work" className="text-brand-cta hover:text-brand-cta-hover">← All recent work</Link>
          {servicePage && <Link href={`/services/${servicePage.slug}`} className="text-brand-cta hover:text-brand-cta-hover">Our {servicePage.name.toLowerCase()} service →</Link>}
          {item.gbpPostUrl && <a href={item.gbpPostUrl} target="_blank" rel="noopener noreferrer" className="text-brand-cta hover:text-brand-cta-hover">See it on Google →</a>}
        </div>
      </article>

      {related.length > 0 && (
        <>
          <SectionDivider />
          <section className="mx-auto max-w-5xl px-5 sm:px-6 py-12 sm:py-16">
            <p className="eyebrow">More from the field</p>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl text-brand-green">Recent {item.service.toLowerCase()} work</h2>
            <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => <li key={r.slug}><WorkCard item={r} /></li>)}
            </ul>
          </section>
        </>
      )}

      <CTASection />
    </>
  );
}
