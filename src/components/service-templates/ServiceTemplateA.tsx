// Service Template A — "Process-Forward / Split Hero"
// Hero: split layout with image on the right.
// Section order: hero → trust → intro → process → divider → what+signs (2-col) → safety band → pricing → FAQ → cities → CTA.

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

export function ServiceTemplateA({ service }: { service: Service }) {
  const img = images[service.image];

  return (
    <>
      {/* Split Hero */}
      <section className="relative bg-brand-green text-white overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-10 sm:py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-tan-light">
              {service.shortName}
            </p>
            <h1 className="mt-3 text-3xl sm:text-5xl md:text-6xl text-white">
              {service.name} in Eureka, MO
            </h1>
            <p className="mt-6 max-w-xl text-lg text-brand-cream/90 leading-relaxed">
              {service.tagline}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PhoneButton variant="primary" />
              <Link
                href="/service-areas"
                className="inline-flex items-center gap-2 rounded-full border border-brand-tan-light/60 px-6 py-3 font-semibold text-brand-cream hover:bg-white/10 transition-colors"
              >
                <ShieldIcon className="h-4 w-4" /> See Service Areas
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

      {/* Intro */}
      <section className="mx-auto max-w-3xl px-6 py-12 sm:py-20">
        <div className="space-y-5 text-base leading-relaxed text-brand-charcoal/90">
          {service.intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {/* Process (cards) */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-12 sm:py-20">
          <p className="eyebrow text-center">How Roger&apos;s treats it</p>
          <h2 className="mt-2 text-center text-3xl sm:text-4xl text-brand-green">
            A simple, transparent process.
          </h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-3">
            {service.process.map((step, i) => (
              <li
                key={step.title}
                className="rounded-lg border border-brand-tan/40 bg-brand-cream p-6"
              >
                <div className="font-display text-3xl text-brand-tan">
                  0{i + 1}
                </div>
                <h3 className="mt-2 font-display text-xl text-brand-green">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-charcoal/80">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <SectionDivider />

      {/* What we treat | Signs (2-col) */}
      <section className="mx-auto max-w-5xl px-6 py-10 sm:py-16 grid gap-12 md:grid-cols-2">
        <div>
          <p className="eyebrow">What we treat</p>
          <h2 className="mt-2 font-display text-3xl text-brand-green">
            Specific pests, specific solutions.
          </h2>
          <ul className="mt-6 space-y-3">
            {service.whatWeTreat.map((item) => (
              <li key={item} className="flex gap-3 text-sm">
                <ShieldIcon className="h-5 w-5 mt-0.5 flex-shrink-0 text-brand-tan" />
                <span className="text-brand-charcoal/90">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow">Signs you have a problem</p>
          <h2 className="mt-2 font-display text-3xl text-brand-green">
            What to watch for.
          </h2>
          <ul className="mt-6 space-y-3">
            {service.signs.map((item) => (
              <li key={item} className="flex gap-3 text-sm">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-cta" />
                <span className="text-brand-charcoal/90">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Safety band */}
      <section className="bg-brand-cream-dark">
        <div className="mx-auto max-w-3xl px-6 py-10 sm:py-16 flex gap-4 items-start">
          <ShieldIcon className="h-8 w-8 text-brand-green flex-shrink-0" />
          <div>
            <p className="eyebrow">Safety</p>
            <h2 className="mt-2 font-display text-2xl text-brand-green">
              Safe for pets, kids, and gardens.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-brand-charcoal/90">
              {service.safety}
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="mx-auto max-w-3xl px-6 py-10 sm:py-16 text-center">
        <p className="eyebrow">Pricing</p>
        <h2 className="mt-2 font-display text-2xl text-brand-green">
          Free inspection. Written quote. No surprises.
        </h2>
        <p className="mt-3 text-brand-charcoal/80">
          Every property is different, so we don&apos;t give prices over the
          phone. The inspection is free and the quote is written.
        </p>
      </section>

      {/* FAQ */}
      <FAQ items={service.faq} heading={`${service.shortName} questions`} />

      <SectionDivider />

      {/* Cities */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-10 sm:py-16">
          <p className="eyebrow text-center">Where we work</p>
          <h2 className="mt-2 text-center text-3xl text-brand-green">
            {service.name} across our service area.
          </h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {cities.map((c) => (
              <Link
                key={c.slug}
                href={`/service-areas/${c.slug}`}
                className="rounded-md border border-brand-tan/40 bg-brand-cream px-4 py-3 text-sm font-semibold text-brand-green hover:bg-brand-green hover:text-white transition-colors text-center"
              >
                {service.shortName} in {c.name} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
