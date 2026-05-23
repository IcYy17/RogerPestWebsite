// Service Template C — "Editorial / Long-Form"
// Hero: narrow centered text, image break beneath.
// Section order: hero → image break → intro (article style w/ drop cap) → 2-col grid (what + signs) → process (numbered vertical) → safety+pricing band → FAQ → cities → CTA.

import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/content/services";
import { images } from "@/content/images";
import { PhoneButton } from "@/components/PhoneButton";
import { TrustStrip } from "@/components/TrustStrip";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";
import { SectionDivider } from "@/components/SectionDivider";
import { ShieldIcon } from "@/components/ShieldBadge";
import { cities } from "@/content/cities";

export function ServiceTemplateC({ service }: { service: Service }) {
  const img = images[service.image];
  const [firstPara, ...restParas] = service.intro;

  return (
    <>
      {/* Narrow centered hero (no image yet — image break follows) */}
      <section className="relative bg-brand-green text-white">
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <svg
            className="absolute -right-32 top-1/2 h-[140%] w-auto -translate-y-1/2"
            viewBox="0 0 200 200"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="100" cy="100" r="90" />
            <circle cx="100" cy="100" r="78" />
          </svg>
        </div>
        <div className="relative mx-auto max-w-3xl px-6 py-20 md:py-28 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-tan-light">
            {service.shortName} · Eureka, MO
          </p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl md:text-6xl">
            {service.name} in Eureka, MO
          </h1>
          <p className="mt-6 text-lg md:text-xl leading-relaxed text-brand-cream/95 italic">
            “{service.tagline}”
          </p>
          <div className="mt-8 flex justify-center">
            <PhoneButton variant="primary" />
          </div>
        </div>
      </section>

      {/* Full-width image break — appears immediately after hero */}
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

      {/* Intro — article style with drop cap on first paragraph */}
      <section className="mx-auto max-w-2xl px-6 py-20">
        <p className="eyebrow text-center">Why this matters in Missouri</p>
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

      {/* What + Signs (alternating layout, asymmetric grid) */}
      <section className="bg-brand-cream-dark">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-12 lg:grid-cols-12 items-start">
            <div className="lg:col-span-7">
              <p className="eyebrow">What we treat</p>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl text-brand-green">
                Specifically. Locally. Knowledgeably.
              </h2>
              <ul className="mt-6 space-y-3">
                {service.whatWeTreat.map((item) => (
                  <li key={item} className="flex gap-3 text-base">
                    <ShieldIcon className="h-5 w-5 mt-1 flex-shrink-0 text-brand-tan" />
                    <span className="text-brand-charcoal/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <aside className="lg:col-span-5 rounded-lg border-l-4 border-brand-cta bg-white p-6 shadow-sm">
              <p className="eyebrow">Signs</p>
              <h3 className="mt-2 font-display text-2xl text-brand-green">
                Watch for these.
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm text-brand-charcoal/90">
                {service.signs.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span className="text-brand-cta font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* Process — numbered vertical list */}
      <section className="mx-auto max-w-3xl px-6 py-20">
        <p className="eyebrow">How Roger&apos;s treats it</p>
        <h2 className="mt-2 font-display text-3xl sm:text-4xl text-brand-green">
          The process, plainly.
        </h2>
        <ol className="mt-10 space-y-10">
          {service.process.map((step, i) => (
            <li key={step.title} className="grid grid-cols-[auto_1fr] gap-6 items-start">
              <div className="font-display text-6xl text-brand-tan leading-none tnum">
                {i + 1}
              </div>
              <div>
                <h3 className="font-display text-2xl text-brand-green">
                  {step.title}
                </h3>
                <p className="mt-2 text-brand-charcoal/85 leading-relaxed">
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Safety + Pricing band */}
      <section className="bg-brand-green text-brand-cream">
        <div className="mx-auto max-w-5xl px-6 py-16 grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-tan-light">
              Safety
            </p>
            <h3 className="mt-1 font-display text-2xl text-white">
              Safe for pets, kids, gardens.
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-brand-cream/90">
              {service.safety}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-tan-light">
              Pricing
            </p>
            <h3 className="mt-1 font-display text-2xl text-white">
              Free inspection. Written quote.
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-brand-cream/90">
              We don&apos;t quote pest jobs over the phone. The inspection is
              free, the price is written, and you decide what happens next.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={service.faq} heading={`${service.shortName} questions`} />

      {/* Cities — list style */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <p className="eyebrow text-center">Service areas</p>
          <h2 className="mt-2 text-center font-display text-3xl text-brand-green">
            {service.name} across the region.
          </h2>
          <ul className="mt-8 divide-y divide-brand-tan/30 border-y border-brand-tan/30">
            {cities.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/service-areas/${c.slug}`}
                  className="flex items-center justify-between gap-4 py-4 hover:text-brand-cta transition-colors"
                >
                  <span className="font-display text-lg text-brand-green hover:text-brand-cta">
                    {service.shortName} in {c.name}, {c.state}
                  </span>
                  <span className="text-sm font-semibold text-brand-cta">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection />
    </>
  );
}
