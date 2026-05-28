import Link from "next/link";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/components/FAQ";
import { SectionDivider } from "@/components/SectionDivider";
import { ShieldIcon } from "@/components/ShieldBadge";
import { getPestIcon } from "@/components/PestIcons";
import { JsonLd } from "@/components/JsonLd";
import { business } from "@/content/business";
import { headerServices, services } from "@/content/services";
import { cities } from "@/content/cities";
import { testimonials } from "@/content/testimonials";
import { siteFaqs } from "@/content/faqs";
import { images } from "@/content/images";
import { faqSchema } from "@/lib/jsonld";

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(siteFaqs)} />

      <Hero
        eyebrow={`Family-Owned · Eureka, MO · Since ${business.foundedYear}`}
        title="Pest Control in Eureka, MO"
        subtitle={`Family-owned since ${business.foundedYear}. Free inspections. Honest pricing. Serving St. Louis County and Jefferson County since before your house had termites.`}
        ctaSecondary={{ label: "See Service Areas", href: "/service-areas" }}
        image={images.homeHero}
        mobileDualPhone
      />

      <TrustStrip variant="light" />

      {/* Pest emergency strip — quick router to top services */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <p className="eyebrow text-center">What's bugging you?</p>
        <h2 className="mt-2 text-center text-3xl text-brand-green">
          Tap a pest, get the help you need.
        </h2>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {services.map((s) => {
            const Icon = getPestIcon(s.slug) ?? ShieldIcon;
            return (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group flex flex-col items-center justify-center rounded-lg border border-brand-tan/40 bg-white p-4 hover:border-brand-green hover:shadow-md hover:-translate-y-0.5 transition-all text-center"
              >
                <Icon className="h-9 w-9 text-brand-green transition-colors group-hover:text-brand-cta" />
                <span className="mt-3 text-xs font-semibold text-brand-charcoal group-hover:text-brand-green">
                  {s.shortName}
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <SectionDivider />

      {/* Why Roger's — 3 feature columns */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 sm:py-20">
          <div className="text-center">
            <p className="eyebrow">Why Roger's</p>
            <h2 className="mt-2 text-3xl sm:text-4xl text-brand-green">
              Three generations of the same family, on the same streets.
            </h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <Feature
              title={`${business.yearsInBusiness} Years, One Family`}
              body={`Local since ${business.foundedYear}. We've seen everything Missouri throws at houses — and we've already figured out what to do about it.`}
            />
            <Feature
              title="Free Inspections & Honest Quotes"
              body="No high-pressure sales. No contracts you can't get out of. We tell you what we find, what we recommend, and what it costs — in writing."
            />
            <Feature
              title="Licensed, Insured, and Local"
              body="Based in Eureka. We answer our own phone. The tech who shows up at your house actually works here, not a rotating roster of strangers."
            />
          </div>
        </div>
      </section>

      {/* Top 5 services */}
      <section className="mx-auto max-w-7xl px-6 py-12 sm:py-20">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <p className="eyebrow">Top Services</p>
            <h2 className="mt-2 text-3xl sm:text-4xl text-brand-green">
              What we treat most.
            </h2>
          </div>
          <Link
            href="/services"
            className="text-sm font-semibold text-brand-cta hover:text-brand-cta-hover"
          >
            See all services →
          </Link>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {headerServices.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* Service area teaser */}
      <section className="bg-brand-cream-dark">
        <div className="mx-auto max-w-7xl px-6 py-12 sm:py-20">
          <div className="text-center">
            <p className="eyebrow">Service Areas</p>
            <h2 className="mt-2 text-3xl sm:text-4xl text-brand-green">
              Serving Eureka and St. Louis County.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-brand-charcoal/80">
              Based in Eureka, with regular routes through the surrounding
              cities. Free inspections in all of them — no travel charge.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {cities.map((c) => (
              <Link
                key={c.slug}
                href={`/service-areas/${c.slug}`}
                className="rounded-full border border-brand-green/30 bg-white px-5 py-2 text-sm font-semibold text-brand-green hover:bg-brand-green hover:text-white transition-colors"
              >
                {c.name}, {c.state}
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/service-areas"
              className="text-sm font-semibold text-brand-cta hover:text-brand-cta-hover"
            >
              See all service areas →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-6 py-12 sm:py-20">
        <div className="text-center">
          <p className="eyebrow">What customers say</p>
          <h2 className="mt-2 text-3xl sm:text-4xl text-brand-green">
            Local trust, earned over decades.
          </h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.slice(0, 3).map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-brand-charcoal/60 italic">
          Sample testimonials shown — Roger&apos;s actual Google reviews will replace these at launch.
        </p>
      </section>

      <SectionDivider />

      {/* How it works */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-12 sm:py-20">
          <div className="text-center">
            <p className="eyebrow">How it works</p>
            <h2 className="mt-2 text-3xl sm:text-4xl text-brand-green">
              Three steps. No surprises.
            </h2>
          </div>
          <ol className="mt-12 grid gap-8 md:grid-cols-3">
            <Step
              n="1"
              title="Free Inspection"
              body="We come out, walk the property, and document what's there. Written report on the spot."
            />
            <Step
              n="2"
              title="Honest Quote"
              body="Flat written pricing. Recommendations explained in plain English. No high-pressure sales."
            />
            <Step
              n="3"
              title="Treatment & Follow-Up"
              body="We do the work. We check back. If something's not right, we come back at no charge."
            />
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={siteFaqs} heading="Common questions" />

      <CTASection />
    </>
  );
}

function Feature({ title, body }: { title: string; body: string }) {
  return (
    <div className="text-center">
      <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-green text-white">
        <ShieldIcon className="h-6 w-6" />
      </div>
      <h3 className="mt-4 font-display text-2xl text-brand-green">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-brand-charcoal/80">{body}</p>
    </div>
  );
}

function Step({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <li className="text-center">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-tan text-brand-green font-display text-xl font-bold">
        {n}
      </div>
      <h3 className="mt-4 font-display text-xl text-brand-green">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-brand-charcoal/80">
        {body}
      </p>
    </li>
  );
}
