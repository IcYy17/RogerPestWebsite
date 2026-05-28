// City Template B — "Visual / Full-Bleed Hero"
// Hero: full-bleed image with overlay text.
// Section order: hero → trust → about with image (split) → ZIP/neighborhood band → pest profile (top pests grid) → all services as alternating image-row → big featured testimonial → why us (numbered) → city FAQ → NAP footer band → CTA.

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

export function CityTemplateB({ city }: { city: City }) {
  const img = images[city.image];
  const topPests = city.topPestSlugs
    .map((slug) => getService(slug))
    .filter((s): s is NonNullable<typeof s> => s !== undefined);
  const cityTestimonials = testimonialsForCity(city.name);
  const featuredTestimonial = cityTestimonials[0];

  return (
    <>
      {/* Full-bleed hero */}
      <section className="relative h-[70vh] min-h-[500px] w-full text-white">
        <Image
          src={img.src}
          alt={img.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-green/95 via-brand-green/85 to-brand-green/45 sm:via-brand-green/70 sm:to-brand-green/20" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-tan-light">
              Pest Control · {city.zips.join(" · ")}
            </p>
            <h1 className="mt-3 text-3xl sm:text-5xl md:text-6xl">
              {city.name}, {city.state}
            </h1>
            <p className="mt-6 text-lg md:text-xl leading-relaxed text-brand-cream/95 max-w-xl">
              {city.heroSubhead}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PhoneButton variant="primary" />
              <Link
                href="/service-areas"
                className="inline-flex items-center gap-2 rounded-full border border-brand-tan-light/70 px-6 py-3 font-semibold hover:bg-white/10 transition-colors"
              >
                All Service Areas
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TrustStrip variant="light" />

      {/* About with image */}
      <section className="bg-brand-cream">
        <div className="mx-auto max-w-6xl px-6 py-12 sm:py-20 grid gap-12 lg:grid-cols-5 items-center">
          <div className="lg:col-span-2 relative aspect-[4/5] rounded-lg overflow-hidden ring-1 ring-brand-tan/40">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width:1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
          <div className="lg:col-span-3">
            <p className="eyebrow">About {city.name}</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl text-brand-green">
              We know {city.name}.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-brand-charcoal/90">
              {city.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ZIP / Neighborhood band */}
      <section className="bg-brand-green text-brand-cream">
        <div className="mx-auto max-w-6xl px-6 py-10 sm:py-16">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-tan-light">
                ZIPs served
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {city.zips.map((z) => (
                  <span
                    key={z}
                    className="rounded-full bg-brand-green-dark border border-brand-tan/40 px-4 py-1.5 text-sm font-semibold tnum"
                  >
                    {z}
                  </span>
                ))}
              </div>
            </div>
            <div className="md:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-tan-light">
                Neighborhoods we serve in {city.name}
              </p>
              <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm">
                {city.neighborhoods.map((n, i) => (
                  <li key={n} className="flex items-baseline gap-1">
                    {i > 0 && <span className="text-brand-tan-light">·</span>}
                    <span>{n}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pest profile */}
      <section className="mx-auto max-w-5xl px-6 py-12 sm:py-20">
        <p className="eyebrow text-center">Pests in {city.name}</p>
        <h2 className="mt-2 text-center font-display text-3xl sm:text-4xl text-brand-green">
          What we see most around here.
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-brand-charcoal/80 leading-relaxed">
          {city.pestProfile}
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {topPests.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group relative aspect-square overflow-hidden rounded-lg ring-1 ring-brand-tan/40"
            >
              <Image
                src={images[s.image].src}
                alt={images[s.image].alt}
                fill
                sizes="(max-width:640px) 50vw, 25vw"
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-green/95 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                <h3 className="font-display text-lg">{s.shortName}</h3>
                <p className="text-xs text-brand-cream/80 mt-1">
                  in {city.name} →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* All services as alternating list */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-12 sm:py-20">
          <p className="eyebrow text-center">All services</p>
          <h2 className="mt-2 text-center font-display text-3xl sm:text-4xl text-brand-green">
            Full-service pest control in {city.name}.
          </h2>
          <ul className="mt-10 grid gap-2 md:grid-cols-2">
            {services.map((s, i) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className={`flex items-center gap-4 rounded-md px-5 py-4 transition-colors ${
                    i % 2 === 0
                      ? "bg-brand-cream-dark hover:bg-brand-green hover:text-white"
                      : "bg-brand-cream hover:bg-brand-green hover:text-white"
                  }`}
                >
                  <ShieldIcon className="h-5 w-5 text-brand-green group-hover:text-white flex-shrink-0" />
                  <span className="font-semibold text-brand-green">
                    {s.name} in {city.name}
                  </span>
                  <span className="ml-auto text-brand-cta">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <SectionDivider />

      {/* Featured testimonial */}
      {featuredTestimonial && (
        <section className="bg-brand-cream-dark">
          <div className="mx-auto max-w-3xl px-6 py-12 sm:py-20 text-center">
            <p className="eyebrow">From a {city.name} customer</p>
            <blockquote className="mt-6 font-display text-2xl sm:text-3xl text-brand-green leading-relaxed">
              “{featuredTestimonial.body}”
            </blockquote>
            <div className="mt-6 text-sm">
              <div className="font-semibold text-brand-charcoal">
                {featuredTestimonial.name}
              </div>
              <div className="text-brand-charcoal/70">
                {featuredTestimonial.city}, MO
              </div>
              <div className="mt-1 text-brand-tan">★★★★★</div>
            </div>
            {cityTestimonials.length > 1 && (
              <div className="mt-12 grid gap-5 md:grid-cols-2 text-left">
                {cityTestimonials.slice(1).map((t, i) => (
                  <TestimonialCard key={i} t={t} />
                ))}
              </div>
            )}
            <p className="mt-8 text-xs text-brand-charcoal/60 italic">
              Sample testimonials shown — Roger&apos;s real reviews replace these at launch.
            </p>
          </div>
        </section>
      )}

      {/* Why us — numbered */}
      <section className="mx-auto max-w-3xl px-6 py-12 sm:py-20">
        <p className="eyebrow text-center">Why {city.name} chooses Roger&apos;s</p>
        <h2 className="mt-2 text-center font-display text-3xl text-brand-green">
          Local matters.
        </h2>
        <ol className="mt-10 space-y-6">
          {city.whyUs.map((line, i) => (
            <li
              key={i}
              className="grid grid-cols-[auto_1fr] gap-5 items-start rounded-md border border-brand-tan/40 bg-white p-5"
            >
              <div className="font-display text-3xl text-brand-tan leading-none">
                0{i + 1}
              </div>
              <p className="text-brand-charcoal/90 leading-relaxed">{line}</p>
            </li>
          ))}
        </ol>
      </section>

      <FAQ items={city.faq} heading={`Questions from ${city.name} homeowners`} />

      {/* NAP band before CTA */}
      <section className="bg-brand-green text-brand-cream border-t border-brand-green-light/30">
        <div className="mx-auto max-w-3xl px-6 py-12 text-center">
          <NAPBlock heading={`Roger's serving ${city.name}`} />
        </div>
      </section>

      <CTASection
        title={`Pest problem in ${city.name}? Let's solve it.`}
        subtitle="Free inspection. Honest quote. Local crew."
      />
    </>
  );
}
