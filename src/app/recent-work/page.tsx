import type { Metadata } from "next";
import Link from "next/link";
import { business } from "@/content/business";
import { getRecentWork, serviceAnchor } from "@/lib/recent-work";
import { Hero } from "@/components/Hero";
import { WorkCard } from "@/components/WorkCard";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Recent Work: Real Pest Control Jobs in Eureka, MO",
  description:
    "Recent jobs from Roger's crew, posted from the field: what the pest problem was, what we did about it, and what it typically costs.",
  alternates: { canonical: "/recent-work" },
};

// Hourly ISR; a new gig also pings the deploy hook or /api/revalidate.
export const revalidate = 3600;

export default async function RecentWorkPage() {
  const items = await getRecentWork();
  const services = [...new Set(items.map((i) => i.service))];

  const listSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Recent work",
    itemListElement: items.slice(0, 50).map((i, n) => ({
      "@type": "ListItem",
      position: n + 1,
      url: `${business.siteUrl}/recent-work/${i.slug}`,
      name: i.headline,
    })),
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Recent Work", url: "/recent-work" }])} />
      {items.length > 0 && <JsonLd data={listSchema} />}

      <Hero
        eyebrow="From the field"
        title="Recent Work"
        subtitle={`Real jobs, posted by the ${business.name} crew the day they happened. What the pest problem was, what we did, and what it typically costs.`}
        ctaSecondary={{ label: "See Our Services", href: "/services" }}
      />

      <section className="mx-auto max-w-5xl px-5 sm:px-6 py-12 sm:py-20">
        {items.length === 0 ? (
          <div className="mx-auto max-w-xl text-center">
            <p className="eyebrow">Coming soon</p>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl text-brand-green">Our latest jobs will show up here.</h2>
            <p className="mt-4 text-brand-charcoal/80">
              The crew posts jobs from the field as they finish them. Until then, see our{" "}
              <Link href="/services" className="font-semibold text-brand-cta hover:text-brand-cta-hover">services</Link>{" "}
              or just call and ask.
            </p>
          </div>
        ) : (
          <>
            {services.length > 1 && (
              <nav aria-label="Filter by service" className="mb-10 flex flex-wrap gap-2">
                {services.map((s) => (
                  <a key={s} href={`#${serviceAnchor(s)}`} className="rounded-full border border-brand-tan/50 bg-white px-4 py-1.5 text-sm font-semibold text-brand-green transition hover:border-brand-green hover:bg-brand-cream">
                    {s}
                  </a>
                ))}
              </nav>
            )}
            <div className="space-y-16">
              {services.map((s) => (
                <section key={s} id={serviceAnchor(s)} className="scroll-mt-28">
                  <h2 className="font-display text-2xl sm:text-3xl text-brand-green">Recent {s.toLowerCase()} work</h2>
                  <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {items.filter((i) => i.service === s).map((item) => <li key={item.slug}><WorkCard item={item} /></li>)}
                  </ul>
                </section>
              ))}
            </div>
          </>
        )}
      </section>

      <CTASection />
    </>
  );
}
