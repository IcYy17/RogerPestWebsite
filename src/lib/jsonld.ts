// JSON-LD helpers — typed schema.org objects for LocalBusiness, Service,
// FAQPage, BreadcrumbList. Used across home/services/cities pages.

import { business } from "@/content/business";

const SITE_URL = business.siteUrl;

export function localBusinessSchema(opts: { areaServed?: string[] } = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "PestControl",
    "@id": `${SITE_URL}/#business`,
    name: business.name,
    legalName: business.legalName,
    description: business.tagline,
    url: SITE_URL,
    telephone: business.phone,
    foundingDate: `${business.foundedYear}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      postalCode: business.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    openingHoursSpecification: business.hours
      .filter((h) => h.open && h.close)
      .map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: h.day,
        opens: h.open,
        closes: h.close,
      })),
    areaServed:
      opts.areaServed?.map((name) => ({ "@type": "City", name })) ??
      ["Eureka", "Wildwood", "Pacific", "Ballwin", "Chesterfield"].map(
        (name) => ({ "@type": "City", name })
      ),
    sameAs: Object.values(business.sameAs),
    image: `${SITE_URL}/logo.png`,
    priceRange: "$$",
  };
}

export function serviceSchema(s: {
  name: string;
  description: string;
  slug: string;
  areaServed?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    description: s.description,
    serviceType: s.name,
    provider: { "@id": `${SITE_URL}/#business` },
    areaServed:
      s.areaServed?.map((name) => ({ "@type": "City", name })) ??
      ["Eureka", "Wildwood", "Pacific", "Ballwin", "Chesterfield"].map(
        (name) => ({ "@type": "City", name })
      ),
    url: `${SITE_URL}/services/${s.slug}`,
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}
