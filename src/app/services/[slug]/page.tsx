import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import {
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
} from "@/lib/jsonld";
import { services, getService } from "@/content/services";
import { ServiceTemplateA } from "@/components/service-templates/ServiceTemplateA";
import { ServiceTemplateB } from "@/components/service-templates/ServiceTemplateB";
import { ServiceTemplateC } from "@/components/service-templates/ServiceTemplateC";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return services.map((s) => ({ slug: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.name} in Eureka, MO`,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

// Three structurally distinct templates, alternated across the 8 services.
// Index 0,3,6 → A · 1,4,7 → B · 2,5 → C
const TEMPLATES = [ServiceTemplateA, ServiceTemplateB, ServiceTemplateC];

export default async function ServicePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const index = services.findIndex((s) => s.slug === service.slug);
  const Template = TEMPLATES[index % 3];

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: service.name, url: `/services/${service.slug}` },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          name: service.name,
          description: service.tagline,
          slug: service.slug,
        })}
      />
      <JsonLd data={faqSchema(service.faq)} />
      <Template service={service} />
    </>
  );
}
