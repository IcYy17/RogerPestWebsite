// Service Template B — "Full-Bleed Hero / Visual"
// Hero: full-bleed image with overlay text.
// Section order: hero → trust → signs-with-image → intro → what-we-treat (green band cards) → process (vertical timeline) → safety inline → pricing → FAQ → cities → CTA.

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

export function ServiceTemplateB({ service }: { service: Service }) {
  const img = images[service.image];

  return (
    <>
      {/* Full-bleed hero */}
      <section className="relative h-[70vh] min-h-[480px] w-full text-white">
        <Image
          src={img.src}
          alt={img.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-green/95 via-brand-green/75 to-brand-green/35" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-tan-light">
              {service.shortName} · Eureka, MO
            </p>
            <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl">
              {service.name} in Eureka & St. Louis County
            </h1>
            <p className="mt-6 text-lg md:text-xl leading-relaxed text-brand-cream/95">
              {service.tagline}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PhoneButton variant="primary" />
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-brand-tan-light/70 px-6 py-3 font-semibold hover:bg-white/10 transition-colors"
              >
                All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TrustStrip variant="light" />

      {/* Signs FIRST — split with image */}
      <section className="bg-brand-cream">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-5 items-center">
          <div className="lg:col-span-2 relative aspect-square rounded-lg overflow-hidden ring-1 ring-brand-tan/40">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width:1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
          <div className="lg:col-span-3">
            <p className="eyebrow">Signs you have a problem</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl text-brand-green">
              Spot the trouble early.
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {service.signs.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm rounded-md bg-white border border-brand-tan/30 px-4 py-3"
                >
                  <span className="text-brand-cta mt-0.5 flex-shrink-0">
                    <CheckIcon />
                  </span>
                  <span className="text-brand-charcoal/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-3xl px-6 py-20">
        <p className="eyebrow text-center">Why this matters</p>
        <div className="mt-6 space-y-5 text-base leading-relaxed text-brand-charcoal/90">
          {service.intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {/* What we treat — green band */}
      <section className="bg-brand-green text-brand-cream">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-tan-light text-center">
            What we treat
          </p>
          <h2 className="mt-2 text-center font-display text-3xl sm:text-4xl text-white">
            Specifically. Not generically.
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.whatWeTreat.map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-md border border-brand-green-light/40 bg-brand-green-dark/40 p-4"
              >
                <ShieldIcon className="h-5 w-5 mt-0.5 flex-shrink-0 text-brand-tan-light" />
                <span className="text-sm text-brand-cream/95">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process — vertical timeline */}
      <section className="mx-auto max-w-3xl px-6 py-20">
        <p className="eyebrow text-center">How Roger&apos;s treats it</p>
        <h2 className="mt-2 text-center font-display text-3xl sm:text-4xl text-brand-green">
          Three honest steps.
        </h2>
        <ol className="mt-12 space-y-8 border-l-2 border-brand-tan/50 pl-8">
          {service.process.map((step) => (
            <li key={step.title}>
              <h3 className="font-display text-2xl text-brand-green">
                {step.title}
              </h3>
              <p className="mt-2 text-brand-charcoal/85 leading-relaxed">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <SectionDivider />

      {/* Safety + Pricing combined */}
      <section className="bg-brand-cream-dark">
        <div className="mx-auto max-w-6xl px-6 py-16 grid gap-12 md:grid-cols-2">
          <div className="flex gap-4 items-start">
            <ShieldIcon className="h-8 w-8 text-brand-green flex-shrink-0" />
            <div>
              <p className="eyebrow">Safety</p>
              <h3 className="mt-1 font-display text-2xl text-brand-green">
                Pets, kids, gardens — all welcome.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-charcoal/90">
                {service.safety}
              </p>
            </div>
          </div>
          <div className="border-l-2 border-brand-tan/50 pl-6">
            <p className="eyebrow">Pricing</p>
            <h3 className="mt-1 font-display text-2xl text-brand-green">
              Free inspection. Written quote.
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-brand-charcoal/90">
              We don&apos;t give prices over the phone — every property is different.
              The inspection is free; the quote is written; you decide.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={service.faq} heading={`${service.shortName} questions`} />

      {/* Cities — alternating tag style */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center">
          <p className="eyebrow">Where we work</p>
          <h2 className="mt-2 font-display text-3xl text-brand-green">
            {service.name} in our service cities.
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {cities.map((c) => (
              <Link
                key={c.slug}
                href={`/service-areas/${c.slug}`}
                className="rounded-full border border-brand-green/40 px-5 py-2 text-sm font-semibold text-brand-green hover:bg-brand-green hover:text-white transition-colors"
              >
                {service.shortName} in {c.name}, {c.state}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
