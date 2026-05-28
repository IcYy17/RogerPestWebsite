// JSON-LD helpers — typed schema.org objects for LocalBusiness/PestControl,
// Service, FAQPage, BreadcrumbList, Person, and WebSite. Tuned for both
// traditional rich results AND answer-engine optimization (AEO): dense
// entity linking via @id, knowsAbout topics, founder Person, areaServed.

import { business } from "@/content/business";

const SITE_URL = business.siteUrl;
const BUSINESS_ID = `${SITE_URL}/#business`;
const FOUNDER_ID = `${SITE_URL}/#roger`;

// Topics the business demonstrably covers — feeds AI "what is this entity
// an authority on" understanding. Kept specific to the local trade.
const KNOWS_ABOUT = [
  "Termite control",
  "Subterranean termite treatment",
  "General pest control",
  "Rodent control",
  "Mosquito control",
  "Bed bug treatment",
  "Wildlife removal",
  "Wasp and hornet removal",
  "Commercial pest control",
  "Integrated pest management",
  "Pest control in Eureka, Missouri",
  "Pest control in St. Louis County, Missouri",
];

const DEFAULT_AREA = [
  "Eureka",
  "Wildwood",
  "Pacific",
  "Ballwin",
  "Chesterfield",
  "St. Louis County",
  "Jefferson County",
  "Franklin County",
];

// The founder/owner as a schema.org Person — establishes E-E-A-T: a real,
// named expert behind the content. AI engines weight named expertise.
export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": FOUNDER_ID,
    name: "Roger",
    jobTitle: "Owner & Licensed Pest Control Operator",
    worksFor: { "@id": BUSINESS_ID },
    knowsAbout: KNOWS_ABOUT,
    description:
      "Owner of Roger's Termite & Pest Control, a family-run pest control company serving Eureka, MO and the western St. Louis metro since 1970.",
  };
}

export function localBusinessSchema(opts: { areaServed?: string[] } = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "PestControl",
    "@id": BUSINESS_ID,
    name: business.name,
    legalName: business.legalName,
    description: business.tagline,
    slogan: "Family-owned pest control you can actually reach.",
    url: SITE_URL,
    telephone: business.phone,
    email: business.email,
    foundingDate: `${business.foundedYear}`,
    founder: { "@id": FOUNDER_ID },
    knowsAbout: KNOWS_ABOUT,
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
    hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      business.address.full
    )}`,
    openingHoursSpecification: business.hours
      .filter((h) => h.open && h.close)
      .map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: h.day,
        opens: h.open,
        closes: h.close,
      })),
    areaServed: (opts.areaServed ?? DEFAULT_AREA).map((name) => ({
      "@type": name.includes("County") ? "AdministrativeArea" : "City",
      name,
    })),
    sameAs: Object.values(business.sameAs),
    image: `${SITE_URL}/logo.png`,
    logo: `${SITE_URL}/logo.png`,
    priceRange: "$$",
    paymentAccepted: "Cash, Check, Credit Card",
    currenciesAccepted: "USD",
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
    category: "Pest Control",
    provider: { "@id": BUSINESS_ID },
    areaServed: (s.areaServed ?? DEFAULT_AREA).map((name) => ({
      "@type": name.includes("County") ? "AdministrativeArea" : "City",
      name,
    })),
    audience: {
      "@type": "Audience",
      audienceType: "Homeowners and businesses in the St. Louis metro area",
    },
    hoursAvailable: business.hours
      .filter((h) => h.open && h.close)
      .map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: h.day,
        opens: h.open,
        closes: h.close,
      })),
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      areaServed: "Eureka, MO and St. Louis County",
      description: "Free inspection and written estimate. No contracts.",
    },
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

// WebSite schema — helps AI/search understand the site entity and enables
// sitelinks. Injected once site-wide in layout.
export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: business.name,
    publisher: { "@id": BUSINESS_ID },
    inLanguage: "en-US",
  };
}
