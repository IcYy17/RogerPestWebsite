import type { MetadataRoute } from "next";
import { business } from "@/content/business";
import { services } from "@/content/services";
import { cities } from "@/content/cities";

const BASE = business.siteUrl;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified, changeFrequency: "monthly", priority: 1.0 },
    { url: `${BASE}/services`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/service-areas`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/about`, lastModified, changeFrequency: "yearly", priority: 0.6 },
    { url: `${BASE}/faq`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/contact`, lastModified, changeFrequency: "yearly", priority: 0.7 },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${BASE}/services/${s.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const cityPages: MetadataRoute.Sitemap = cities.map((c) => ({
    url: `${BASE}/service-areas/${c.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...servicePages, ...cityPages];
}
