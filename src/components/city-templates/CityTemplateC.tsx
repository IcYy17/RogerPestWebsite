// City Template C — "Editorial / Long-form"
// Hero: narrow centered. Full-width image break beneath. Drop-cap article.
// Section order: hero → image break → trust → pull-quote → about (article with drop cap) → ZIP big visual → pest profile (2-col panel) → services vertical list with thumbnails → why us (3-col cards) → testimonials → neighborhoods → city FAQ → CTA.

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
import { TestimonialCard } from "@/components/TestimonialCard";
import { services, getService } from "@/content/services";
import { testimonialsForCity } from "@/content/testimonials";

export function CityTemplateC({ city }: { city: City }) {
  const img = images[city.image];
  const topPests = city.topPestSlugs
    .map((slug) => getService(slug))
    .filter((s): s is NonNullable<typeof s> => s !== undefined);
  const cityTestimonials = testimonialsForCity(city.name);
  const [firstPara, ...restParas] = city.about;

  return (
    <>
      {/* Narrow centered hero */}
      <section className="relative bg-brand-green text-white">
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <svg
            className="absolute -left-32 top-1/2 h-[140%] w-auto -translate-y-1/2"
            viewBox="0 0 200 200"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="100" cy="100" r="90" />
            <circle cx="100" cy="100" r="78" />
          </svg>
        </div>
        <div className="relative mx-auto max-w-3xl px-6 py-12 sm:py-20 md:py-28 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-tan-light">
            {city.name}, {city.state} · {city.zips.join(" · ")}
          </p>
          <h1 className="mt-3 font-display text-3xl sm:text-5xl md:text-6xl">
            Pest Control in {city.name}, {city.state}
          </h1>
          <p className="mt-6 text-lg md:text-xl leading-relaxed text-brand-cream/95 italic">
            “{city.heroSubhead}”
          </p>
          <div className="mt-8 flex justify-center">
            <PhoneButton variant="primary" />
          </div>
        </div>
      </section>

      {/* Full-width image break */}
      <div className="relative h-72 md:h-96 w-full overflow-hidden">
        <Image
          src={img.src}
          alt={img.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <TrustStrip variant="light" />

      {/* About — article style with drop cap */}
      <section className="mx-auto max-w-2xl px-6 py-12 sm:py-20">
        <p className="eyebrow text-center">About {city.name}</p>
        <SectionDivider className="!my-6" />
        <article className="space-y-5 text-lg leading-[1.75] text-brand-charcoal/90">
          {firstPara && (
            <p className="first-letter:font-display first-letter:text-6xl first-letter:font-bold first-letter:text-brand-green first-letter:mr-2 first-letter:float-left first-letter:leading-[0.85]">
              {firstPara}
            </p>
          )}
          {restParas.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </article>
      </section>

      {/* ZIPs as huge visual */}
      <section className="bg-brand-cream-dark">
        <div className="mx-auto max-w-5xl px-6 py-10 sm:py-16 text-center">
          <p className="eyebrow">ZIP codes covered</p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            {city.zips.map((z) => (
              <span
                key={z}
                className="font-display text-3xl sm:text-4xl text-brand-green tnum rounded-md border-2 border-brand-tan bg-white px-6 py-3"
              >
                {z}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Pest profile — 2-col panel */}
      <section className="mx-auto max-w-6xl px-6 py-12 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-12 items-start">
          <div className="lg:col-span-5">
            <p className="eyebrow">Pest profile</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl text-brand-green">
              What pressure {city.name} really sees.
            </h2>
            <p className="mt-4 text-brand-charcoal/85 leading-relaxed">
              {city.pestProfile}
            </p>
          </div>
          <div className="lg:col-span-7 grid gap-4 sm:grid-cols-2">
            {topPests.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group rounded-lg border border-brand-tan/40 bg-white p-5 hover:border-brand-green hover:shadow-md transition-all"
              >
                <ShieldIcon className="h-6 w-6 text-brand-green" />
                <h3 className="mt-3 font-display text-lg text-brand-green">
                  {s.name}
                </h3>
                <p className="mt-1 text-xs text-brand-charcoal/70">
                  in {city.name}
                </p>
                <span className="mt-2 inline-block text-xs font-semibold text-brand-cta">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services as vertical list with thumbnails */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-12 sm:py-20">
          <p className="eyebrow text-center">All services</p>
          <h2 className="mt-2 text-center font-display text-3xl text-brand-green">
            Full-service pest control in {city.name}.
          </h2>
          <ul className="mt-10 divide-y divide-brand-tan/40 border-y border-brand-tan/40">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="flex items-center gap-5 py-4 group"
                >
                  <div className="relative h-16 w-20 flex-shrink-0 rounded overflow-hidden ring-1 ring-brand-tan/30">
                    <Image
                      src={images[s.image].src}
                      alt={images[s.image].alt}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="font-display text-lg text-brand-green group-hover:text-brand-cta transition-colors">
                      {s.name} in {city.name}
                    </div>
                    <div className="text-xs text-brand-charcoal/70 mt-0.5">
                      {s.tagline}
                    </div>
                  </div>
                  <span className="text-brand-cta font-semibold flex-shrink-0">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why us — 3-col cards */}
      <section className="bg-brand-cream-dark">
        <div className="mx-auto max-w-5xl px-6 py-12 sm:py-20">
          <p className="eyebrow text-center">Why {city.name} chooses Roger&apos;s</p>
          <h2 className="mt-2 text-center font-display text-3xl text-brand-green">
            Local. Family. Forty-plus years of {city.name} pest pressure.
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {city.whyUs.map((line, i) => (
              <div
                key={i}
                className="rounded-lg bg-white p-6 border border-brand-tan/40"
              >
                <ShieldIcon className="h-7 w-7 text-brand-green" />
                <p className="mt-4 text-sm leading-relaxed text-brand-charcoal/90">
                  {line}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {cityTestimonials.length > 0 && (
        <section className="mx-auto max-w-5xl px-6 py-12 sm:py-20">
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
            Sample testimonials — real {city.name} Google reviews replace these at launch.
          </p>
        </section>
      )}

      {/* Neighborhoods */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-10 sm:py-16">
          <p className="eyebrow text-center">Neighborhoods served</p>
          <h2 className="mt-2 text-center font-display text-2xl text-brand-green">
            We work all over {city.name}.
          </h2>
          <ul className="mt-6 flex flex-wrap justify-center gap-x-3 gap-y-2 text-sm text-brand-charcoal/85">
            {city.neighborhoods.map((n, i) => (
              <li key={n}>
                {n}
                {i < city.neighborhoods.length - 1 && (
                  <span className="ml-3 text-brand-tan">·</span>
                )}
              </li>
            ))}
          </ul>
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
