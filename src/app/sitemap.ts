import type { MetadataRoute } from "next";
import { business } from "@/content/business";
import { services } from "@/content/services";
import { cities } from "@/content/cities";
import { getPublishedPosts } from "@/lib/aeo-blog";

const BASE = business.siteUrl;

// Regenerate hourly so newly published blog posts enter the sitemap without a
// redeploy (the revalidate webhook also pings /sitemap.xml on publish).
export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified, changeFrequency: "monthly", priority: 1.0 },
    { url: `${BASE}/services`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/service-areas`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/about`, lastModified, changeFrequency: "yearly", priority: 0.6 },
    { url: `${BASE}/faq`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/blog`, lastModified, changeFrequency: "weekly", priority: 0.8 },
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

  // Blog posts are DB-driven; include whatever is published. Returns [] if the
  // blog isn't configured or the DB is unreachable, so the sitemap never breaks.
  const posts = await getPublishedPosts();
  const blogPages: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: p.published_at ? new Date(p.published_at) : lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...cityPages, ...blogPages];
}
