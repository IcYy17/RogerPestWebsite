import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/jsonld";
import { getPublishedPosts } from "@/lib/aeo-blog";

export const metadata: Metadata = {
  title: "Pest Control Blog — Tips & Guides for Missouri Homeowners",
  description:
    "Practical pest control advice for Eureka, MO and the St. Louis area — termites, rodents, mosquitoes, bed bugs, and more, from a family-owned company in business since 1970.",
  alternates: { canonical: "/blog" },
};

// Hourly ISR; the engine also pings /api/revalidate on publish for instant updates.
export const revalidate = 3600;

function formatDate(iso: string): string {
  const d = new Date(iso);
  if (isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogIndex() {
  const posts = await getPublishedPosts();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
        ])}
      />

      <Hero
        eyebrow="Blog"
        title="Pest Control Tips for Missouri Homeowners"
        subtitle="Straight-talking guides on the termites, rodents, mosquitoes, and other pests we deal with every day across Eureka and the St. Louis area."
        ctaSecondary={{ label: "See Our Services", href: "/services" }}
      />

      <section className="mx-auto max-w-5xl px-5 sm:px-6 py-12 sm:py-20">
        {posts.length === 0 ? (
          <div className="mx-auto max-w-xl text-center">
            <p className="eyebrow">Coming soon</p>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl text-brand-green">
              Fresh pest control guides are on the way.
            </h2>
            <p className="mt-4 text-brand-charcoal/80">
              We&apos;re publishing new, Missouri-specific pest control articles
              regularly. In the meantime, our{" "}
              <Link
                href="/faq"
                className="font-semibold text-brand-cta hover:text-brand-cta-hover"
              >
                FAQ
              </Link>{" "}
              answers the questions we hear most — or just call and ask.
            </p>
          </div>
        ) : (
          <ul className="grid gap-6 sm:grid-cols-2">
            {posts.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="group flex h-full flex-col rounded-lg border border-brand-tan/40 bg-white p-6 hover:border-brand-green hover:shadow-md transition-all"
                >
                  {p.published_at && (
                    <time
                      dateTime={p.published_at}
                      className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-tan"
                    >
                      {formatDate(p.published_at)}
                    </time>
                  )}
                  <h2 className="mt-2 font-display text-xl text-brand-green group-hover:text-brand-cta transition-colors">
                    {p.title}
                  </h2>
                  {p.description && (
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-charcoal/80">
                      {p.description}
                    </p>
                  )}
                  <span className="mt-4 text-sm font-semibold text-brand-cta group-hover:text-brand-cta-hover">
                    Read more →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>

      <CTASection />
    </>
  );
}
