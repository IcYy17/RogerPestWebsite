import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { CityCard } from "@/components/CityCard";
import { TrustStrip } from "@/components/TrustStrip";
import { MapEmbed } from "@/components/MapEmbed";
import { CTASection } from "@/components/CTASection";
import { SectionDivider } from "@/components/SectionDivider";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/jsonld";
import { cities } from "@/content/cities";
import { images } from "@/content/images";

export const metadata: Metadata = {
  title: "Service Areas — Eureka, MO & St. Louis County",
  description:
    "Roger's serves Eureka, Wildwood, Pacific, Ballwin, and Chesterfield, MO. Family-owned pest control with free inspections in all our service areas.",
  alternates: { canonical: "/service-areas" },
};

export default function ServiceAreasIndexPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Service Areas", url: "/service-areas" },
        ])}
      />

      <Hero
        eyebrow="Service Areas"
        title="Serving Eureka, MO and St. Louis County."
        subtitle="Based in Eureka with regular routes through Wildwood, Pacific, Ballwin, and Chesterfield. Outside these cities? Call us — we cover much of the surrounding area too."
        image={images.serviceAreasHero}
      />

      <TrustStrip variant="light" />

      <section className="mx-auto max-w-7xl px-6 py-12 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <p className="eyebrow">Our coverage</p>
            <h2 className="mt-2 font-display text-3xl text-brand-green">
              Five cities, one local crew.
            </h2>
            <p className="mt-4 text-brand-charcoal/80 leading-relaxed">
              We&apos;re based at our office in Eureka and serve customers
              across southwest St. Louis County and northern Jefferson
              County. Free inspections in all of our service cities — no
              travel charge, no minimum.
            </p>
            <p className="mt-4 text-brand-charcoal/80 leading-relaxed">
              Don&apos;t see your city? Call us. We routinely take work in
              House Springs, Glencoe, Grover, Byrnes Mill, Imperial,
              Maryland Heights, and other surrounding communities — we
              just don&apos;t have dedicated pages for them yet.
            </p>
          </div>
          <div className="lg:col-span-2 h-80 lg:h-auto">
            <MapEmbed className="h-full" />
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <p className="eyebrow text-center">Cities served</p>
        <h2 className="mt-2 text-center text-3xl sm:text-4xl text-brand-green">
          Tap your city for local details.
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cities.map((c) => (
            <CityCard key={c.slug} city={c} />
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
