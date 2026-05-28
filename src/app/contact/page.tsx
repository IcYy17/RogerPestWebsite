import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { MapEmbed } from "@/components/MapEmbed";
import { CTASection } from "@/components/CTASection";
import { SectionDivider } from "@/components/SectionDivider";
import { PhoneButton } from "@/components/PhoneButton";
import { ShieldIcon } from "@/components/ShieldBadge";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/jsonld";
import { business } from "@/content/business";

export const metadata: Metadata = {
  title: "Contact Roger's Termite & Pest Control",
  description: `Call Roger's Termite & Pest Control at ${business.phone}. ${business.hoursDisplay}. Office at ${business.address.full}.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" },
        ])}
      />

      <Hero
        eyebrow="Contact"
        title="Call Roger's."
        subtitle="Free inspection, honest quote, no high-pressure sales. We answer our own phone."
      />

      {/* Phone-first contact block */}
      <section className="mx-auto max-w-5xl px-6 py-12 sm:py-20">
        <div className="grid gap-12 md:grid-cols-2 items-start">
          <div>
            <p className="eyebrow">Call us</p>
            <a
              href={business.phoneHref}
              className="mt-3 block font-display text-4xl sm:text-5xl md:text-6xl text-brand-cta hover:text-brand-cta-hover tnum break-words"
            >
              {business.phone}
            </a>
            <p className="mt-3 text-brand-charcoal/80">
              The fastest way to get help. We answer the phone during business
              hours and return voicemails first thing every morning.
            </p>
            <div className="mt-6">
              <PhoneButton variant="primary" />
            </div>

            <div className="mt-12">
              <p className="eyebrow">Hours</p>
              <ul className="mt-3 space-y-1 text-sm">
                {business.hours.map((h) => (
                  <li key={h.day} className="flex justify-between gap-4 tnum">
                    <span className="font-semibold">{h.day}</span>
                    <span className="text-brand-charcoal/80">
                      {h.open ? `${formatTime(h.open)} – ${formatTime(h.close!)}` : "Closed"}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-sm italic text-brand-charcoal/70">
                Outside our hours? Leave a voicemail — we&apos;ll call you back first thing.
              </p>
            </div>

            <div className="mt-12">
              <p className="eyebrow">Email</p>
              <a
                href={`mailto:${business.email}`}
                className="mt-3 block text-brand-green font-semibold hover:text-brand-cta"
              >
                {business.email}
              </a>
              <p className="mt-2 text-xs text-brand-charcoal/60 italic">
                Email is for non-urgent questions. For service, please call.
              </p>
            </div>
          </div>

          <div>
            <p className="eyebrow">Our office</p>
            <h3 className="mt-2 font-display text-2xl text-brand-green">
              {business.address.street}
            </h3>
            <p className="text-brand-charcoal/80">
              {business.address.city}, {business.address.state} {business.address.zip}
            </p>
            <div className="mt-6 h-80">
              <MapEmbed className="h-full" />
            </div>
            <div className="mt-6 flex items-center gap-3 rounded-md border border-brand-tan/40 bg-white p-4">
              <ShieldIcon className="h-6 w-6 text-brand-green flex-shrink-0" />
              <p className="text-sm text-brand-charcoal/80">
                We&apos;re a family-owned local business — there&apos;s a real human at this address. No call center, no overseas help desk.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      <CTASection
        title="Ready to talk?"
        subtitle={`We're standing by ${business.hoursDisplay}.`}
      />
    </>
  );
}

function formatTime(t: string): string {
  // "08:30" -> "8:30 AM"
  const [h, m] = t.split(":").map(Number);
  const period = h >= 12 ? "PM" : "AM";
  const display = h % 12 === 0 ? 12 : h % 12;
  return `${display}:${m.toString().padStart(2, "0")} ${period}`;
}
