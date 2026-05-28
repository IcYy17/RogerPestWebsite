import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { TrustStrip } from "@/components/TrustStrip";
import { CTASection } from "@/components/CTASection";
import { SectionDivider } from "@/components/SectionDivider";
import { ShieldIcon } from "@/components/ShieldBadge";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/jsonld";
import { services } from "@/content/services";
import { images } from "@/content/images";

export const metadata: Metadata = {
  title: "Pest Control Services in Eureka & St. Louis County",
  description:
    "Full-service pest control in Eureka, MO and St. Louis County: termite, ant, rodent, mosquito, bed bug, wildlife, stinging insects, and commercial. Free inspections.",
  alternates: { canonical: "/services" },
};

export default function ServicesIndexPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
        ])}
      />

      <Hero
        eyebrow="Services"
        title="Pest Control Services in Eureka & St. Louis County"
        subtitle="From the everyday ants and spiders to the serious termite, rodent, and wildlife work — we handle the full spectrum of pest pressure that Missouri homes and businesses see."
        image={images.servicesHero}
      />

      <TrustStrip variant="light" />

      <section className="mx-auto max-w-7xl px-6 py-12 sm:py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* Why hire local */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-12 sm:py-20">
          <p className="eyebrow text-center">Why hire a local company</p>
          <h2 className="mt-2 text-center text-3xl sm:text-4xl text-brand-green">
            The chain pest control companies aren't from Missouri.
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Reason
              title="We know the houses."
              body="Older Eureka and Ballwin construction has specific weak points. We've been treating them for over five decades."
            />
            <Reason
              title="We know the pests."
              body="Eastern subterranean termites in Missouri behave differently than the species national companies train on."
            />
            <Reason
              title="We answer our own phone."
              body="When you call, you talk to someone who knows the work. No call centers, no scripts."
            />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

function Reason({ title, body }: { title: string; body: string }) {
  return (
    <div className="text-center">
      <ShieldIcon className="mx-auto h-8 w-8 text-brand-green" />
      <h3 className="mt-4 font-display text-xl text-brand-green">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-brand-charcoal/80">{body}</p>
    </div>
  );
}
