// Canonical business facts. This file is the single source of truth for NAP
// (name, address, phone) — it MUST match the Google Business Profile,
// Yelp, BBB, and Nextdoor listings character-for-character.

export const business = {
  name: "Roger's Termite & Pest Control",
  legalName: "Roger's Termite and Pest Control Co., LLC",
  shortName: "Roger's",
  tagline: "Family-owned pest control. Eureka, MO since 1970.",

  // Primary phone — used everywhere EXCEPT the header utility strip
  // (which surfaces both South + North numbers). The 573 line is the
  // canonical NAP number for Google Business Profile, Yelp, BBB, schema.
  phone: "(573) 883-0863",
  phoneHref: "tel:+15738830863",

  // Header dual-line numbers — South office (Eureka) + North coverage line
  phones: [
    {
      label: "South",
      number: "(573) 883-0863",
      href: "tel:+15738830863",
    },
    {
      label: "North",
      number: "(314) 896-5568",
      href: "tel:+13148965568",
    },
  ],

  email: "info@rogerstermiteandpest.com", // placeholder — confirm with Roger

  address: {
    street: "5261 Sunflower Dr",
    city: "Eureka",
    state: "MO",
    zip: "63025",
    full: "5261 Sunflower Dr, Eureka, MO 63025",
  },

  // Coordinates for embedded maps + LocalBusiness JSON-LD
  geo: {
    latitude: 38.5034,
    longitude: -90.6249,
  },

  hours: [
    { day: "Monday", open: "08:30", close: "17:30" },
    { day: "Tuesday", open: "08:30", close: "17:30" },
    { day: "Wednesday", open: "08:30", close: "17:30" },
    { day: "Thursday", open: "08:30", close: "17:30" },
    { day: "Friday", open: "08:30", close: "17:30" },
    { day: "Saturday", open: null, close: null },
    { day: "Sunday", open: null, close: null },
  ],
  hoursDisplay: "Mon–Fri 8:30 AM – 5:30 PM",

  foundedYear: 1970,
  yearsInBusiness: new Date().getFullYear() - 1970,

  // Differentiators surfaced in hero, trust strips, footers
  differentiators: [
    "Family-Owned Since 1970",
    "Free Inspections & Honest Quotes",
    "Licensed & Insured in Missouri",
    "Local Family Business — We Answer Our Own Phone",
  ],

  // Canonical domain. rogerstermiteandpest.com is the primary; the apex
  // (non-www) is canonical because www.rogerstermiteandpest.com redirects
  // to it. termiterogers.com is a secondary domain that 301-redirects here.
  domain: "rogerstermiteandpest.com",
  siteUrl: "https://rogerstermiteandpest.com",

  // External listings — used in footer "Leave a Review" + JSON-LD sameAs
  sameAs: {
    google: "https://www.google.com/search?q=Roger%27s+Termite+and+Pest+Control+Eureka+MO",
    yelp: "https://www.yelp.com/biz/roger-s-termite-and-pest-control-eureka",
    bbb: "https://www.bbb.org/us/mo/eureka/category/pest-control",
    nextdoor: "https://nextdoor.com/pages/rogers-pest-control-eureka-mo/",
  },
} as const;

export type Business = typeof business;
