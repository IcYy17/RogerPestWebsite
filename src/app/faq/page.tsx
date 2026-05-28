import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { CTASection } from "@/components/CTASection";
import { SectionDivider } from "@/components/SectionDivider";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/jsonld";
import { faqGroups, allFaqs } from "@/content/faqs";
import { business } from "@/content/business";

export const metadata: Metadata = {
  title: "Pest Control FAQ — Termites, Rodents & More in Missouri",
  description:
    "Straight answers about termites, ants, rodents, mosquitoes, and bed bugs in Eureka, MO and St. Louis County — from a family-owned pest control company in business since 1970.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "FAQ", url: "/faq" },
        ])}
      />
      {/* One FAQPage schema covering every Q&A on the page */}
      <JsonLd data={faqSchema(allFaqs)} />

      <Hero
        eyebrow="Answers"
        title="Pest Control Questions, Answered."
        subtitle={`Honest, Missouri-specific answers about termites, rodents, mosquitoes, and more — from a family-owned company that's done this work in the St. Louis area since ${business.foundedYear}.`}
        ctaSecondary={{ label: "See Our Services", href: "/services" }}
      />

      {/* Quick category jump links — helps both readers and AI parse structure */}
      <section className="mx-auto max-w-4xl px-5 sm:px-6 py-8">
        <nav aria-label="FAQ categories" className="flex flex-wrap gap-2 justify-center">
          {faqGroups.map((g) => (
            <a
              key={g.category}
              href={`#${slugify(g.category)}`}
              className="rounded-full border border-brand-tan/50 bg-white px-4 py-1.5 text-sm font-semibold text-brand-green hover:bg-brand-green hover:text-white transition-colors"
            >
              {g.category}
            </a>
          ))}
        </nav>
      </section>

      {/* Grouped Q&A. Plain semantic markup so answer engines extract cleanly. */}
      <div className="mx-auto max-w-3xl px-5 sm:px-6 pb-8">
        {faqGroups.map((g) => (
          <section
            key={g.category}
            id={slugify(g.category)}
            className="scroll-mt-28 py-10"
          >
            <p className="eyebrow">{g.category}</p>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl text-brand-green">
              {g.category}
            </h2>
            <dl className="mt-6 divide-y divide-brand-tan/40 border-y border-brand-tan/40">
              {g.faqs.map((f) => (
                <div key={f.q} className="py-5">
                  <dt className="font-semibold text-brand-charcoal">{f.q}</dt>
                  <dd className="mt-2 leading-relaxed text-brand-charcoal/85">
                    {f.a}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        ))}
      </div>

      <SectionDivider />

      <section className="mx-auto max-w-3xl px-5 sm:px-6 py-12 text-center">
        <p className="text-brand-charcoal/80">
          Didn&apos;t find your question? Call Roger&apos;s at{" "}
          <a
            href={business.phoneHref}
            className="font-semibold text-brand-cta hover:text-brand-cta-hover tnum"
          >
            {business.phone}
          </a>{" "}
          — we answer our own phone and we&apos;ll give you a straight answer.
        </p>
      </section>

      <CTASection
        title="Still have a pest problem? Let's solve it."
        subtitle="Free inspection. Honest quote. No contracts."
      />
    </>
  );
}

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
