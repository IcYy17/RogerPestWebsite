// City Template A — "Authority / Split Hero"
// Hero: split with image right. NAP band immediately following.
// Section order: hero → trust → NAP green band → about → pest profile + top pests → all services grid → why us → testimonials → neighborhoods/ZIPs split → FAQ → CTA.

import Image from "next/image";
import Link from "next/link";
import type { City } from "@/content/cities";
import { images } from "@/content/images";
import { PhoneButton } from "@/components/PhoneButton";
import { TrustStrip } from "@/components/TrustStrip";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";
import { SectionDivider } from "@/components/SectionDivider";
import { ShieldIcon } from "@/components/ShieldBadge";
import { NAPBlock } from "@/components/NAPBlock";
import { TestimonialCard } from "@/components/TestimonialCard";
import { services, getService } from "@/content/services";
import { testimonialsForCity } from "@/content/testimonials";

export function CityTemplateA({ city }: { city: City }) {
  const img = images[city.image];
  const topPests = city.topPestSlugs
    .map((slug) => getService(slug))
    .filter((s): s is NonNullable<typeof s> => s !== undefined);
  const cityTestimonials = testimonialsForCity(city.name);

  return (
    <>
      {/* Split hero */}
      <section className="relative bg-brand-green text-white overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-tan-light">
              {city.name}, {city.state}
            </p>
            <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl text-white">
              Pest Control in {city.name}, {city.state}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-brand-cream/90 leading-relaxed">
              {city.heroSubhead}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PhoneButton variant="primary" />
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-brand-tan-light/60 px-6 py-3 font-semibold text-brand-cream hover:bg-white/10 transition-colors"
              >
                <ShieldIcon className="h-4 w-4" /> See All Services
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl ring-1 ring-brand-tan/30">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              priority
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <TrustStrip variant="light" />

      {/* NAP band */}
      <section className="bg-brand-green text-brand-cream">
        <div className="mx-auto max-w-5xl px-6 py-12 grid gap-8 md:grid-cols-2 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-tan-light">
              Pest Control Serving {city.name}, {city.state}
            </p>
            <h2 className="mt-2 font-display text-3xl">
              Based in Eureka. Just a short drive to {city.name}.
            </h2>
            <p className="mt-3 text-brand-cream/85 text-sm leading-relaxed">
              Our office is on Sunflower Drive in Eureka — most {city.name} service calls
              get same-day or next-day visits.
            </p>
          </div>
          <div>
            <NAPBlock heading={`Roger's serving ${city.name}`} />
          </div>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-3xl px-6 py-20">
        <p className="eyebrow">About {city.name}</p>
        <h2 className="mt-2 font-display text-3xl sm:text-4xl text-brand-green">
          We know {city.name}.
        </h2>
        <div className="mt-8 space-y-5 text-base leading-relaxed text-brand-charcoal/90">
          {city.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* Pest profile + top pests */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="eyebrow">Pests common in {city.name}</p>
          <h2 className="mt-2 font-display text-3xl text-brand-green">
            What we see most around {city.zips.join(", ")}.
          </h2>
          <p className="mt-4 text-brand-charcoal/80 leading-relaxed max-w-3xl">
            {city.pestProfile}
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {topPests.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group rounded-lg border border-brand-tan/40 bg-brand-cream p-5 hover:border-brand-green hover:shadow-sm transition-all"
              >
                <ShieldIcon className="h-6 w-6 text-brand-green" />
                <h3 className="mt-3 font-display text-lg text-brand-green">
                  {s.name} in {city.name}
                </h3>
                <span className="mt-2 inline-block text-xs font-semibold text-brand-cta group-hover:text-brand-cta-hover">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All services in city */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="eyebrow">All services in {city.name}</p>
        <h2 className="mt-2 font-display text-3xl text-brand-green">
          Full-service pest control for {city.name}, {city.state}.
        </h2>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="rounded-md border border-brand-tan/40 bg-white px-4 py-3 text-sm font-semibold text-brand-green hover:bg-brand-green hover:text-white transition-colors"
            >
              {s.name} in {city.name} →
            </Link>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* Why us */}
      <section className="bg-brand-cream-dark">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="eyebrow text-center">Why {city.name} chooses Roger&apos;s</p>
          <h2 className="mt-2 text-center font-display text-3xl text-brand-green">
            Local matters when it&apos;s your house.
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {city.whyUs.map((line, i) => (
              <div key={i} className="text-center">
                <ShieldIcon className="mx-auto h-7 w-7 text-brand-green" />
                <p className="mt-3 text-sm leading-relaxed text-brand-charcoal/90">
                  {line}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* City testimonials */}
      {cityTestimonials.length > 0 && (
        <section className="mx-auto max-w-5xl px-6 py-20">
          <p className="eyebrow text-center">From {city.name} customers</p>
          <h2 className="mt-2 text-center font-display text-3xl text-brand-green">
            What people in {city.name} are saying.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {cityTestimonials.map((t, i) => (
              <TestimonialCard key={i} t={t} />
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-brand-charcoal/60 italic">
            Sample testimonials shown — real {city.name} Google reviews replace these at launch.
          </p>
        </section>
      )}

      {/* Neighborhoods + ZIPs split */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20 grid gap-12 md:grid-cols-2">
          <div>
            <p className="eyebrow">Neighborhoods we serve</p>
            <h2 className="mt-2 font-display text-2xl text-brand-green">
              {city.name} neighborhoods.
            </h2>
            <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-brand-charcoal/90">
              {city.neighborhoods.map((n) => (
                <li key={n} className="flex gap-2 items-baseline">
                  <span className="h-1 w-1 rounded-full bg-brand-tan flex-shrink-0" />
                  {n}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">ZIP codes served</p>
            <h2 className="mt-2 font-display text-2xl text-brand-green">
              {city.name} ZIP codes.
            </h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {city.zips.map((z) => (
                <span
                  key={z}
                  className="rounded-full bg-brand-green text-white px-4 py-1.5 text-sm font-semibold tnum"
                >
                  {z}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm text-brand-charcoal/80">
              Outside these ZIPs but still in {city.name}? Give us a call.
            </p>
          </div>
        </div>
      </section>

      <FAQ items={city.faq} heading={`Questions from ${city.name} homeowners`} />

      <CTASection
        title={`Pest problem in ${city.name}? Let's solve it.`}
        subtitle="Free inspection. Honest quote. Local crew."
      />
    </>
  );
}
