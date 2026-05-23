import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import {
  breadcrumbSchema,
  faqSchema,
  localBusinessSchema,
} from "@/lib/jsonld";
import { cities, getCity } from "@/content/cities";
import { CityTemplateA } from "@/components/city-templates/CityTemplateA";
import { CityTemplateB } from "@/components/city-templates/CityTemplateB";
import { CityTemplateC } from "@/components/city-templates/CityTemplateC";

type Params = { city: string };

export async function generateStaticParams(): Promise<Params[]> {
  return cities.map((c) => ({ city: c.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { city } = await params;
  const c = getCity(city);
  if (!c) return {};
  return {
    title: `Pest Control ${c.name}, ${c.state}`,
    description: c.metaDescription,
    alternates: { canonical: `/service-areas/${c.slug}` },
  };
}

// Three structurally distinct templates, alternated across the 5 cities.
// Index 0,3 → A · 1,4 → B · 2 → C
const TEMPLATES = [CityTemplateA, CityTemplateB, CityTemplateC];

export default async function CityPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { city } = await params;
  const c = getCity(city);
  if (!c) notFound();

  const index = cities.findIndex((x) => x.slug === c.slug);
  const Template = TEMPLATES[index % 3];

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Service Areas", url: "/service-areas" },
          { name: c.name, url: `/service-areas/${c.slug}` },
        ])}
      />
      <JsonLd data={localBusinessSchema({ areaServed: [c.name] })} />
      <JsonLd data={faqSchema(c.faq)} />
      <Template city={c} />
    </>
  );
}
