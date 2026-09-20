// Reads this site's Recent Work (gigs the crew posted from the Drumroll app and
// sent to the Website destination) from the shared Neon `aeo.recent_work` view.
//
// A gig is NOT a blog post: it lives in the platform's publication + job tables
// and reaches us through this read-only view (aeo_reader can select it). Same
// scoping as aeo-blog.ts: the site's own company_id, resolved by domain, so
// DATABASE_URL stays the only required env var.
//
// Graceful fallback: no DATABASE_URL, no matching company or a query error
// returns empty, so /recent-work shows an empty state and the build is unaffected.

import { cache } from "react";
import { neon } from "@neondatabase/serverless";
import { resolveCompanyId } from "./aeo-blog";

export interface WorkItem {
  slug: string;
  headline: string;
  /** Markdown, no frontmatter. */
  bodyMd: string;
  costSection: string | null;
  photos: string[];
  service: string;
  city: string | null;
  priceBand: string | null;
  complexity: number | null;
  postedAt: string;
  gbpPostUrl: string | null;
}

const DATABASE_URL = process.env.DATABASE_URL;

type Row = {
  slug: string;
  headline: string | null;
  body_md: string | null;
  cost_section: string | null;
  photos: unknown;
  service: string | null;
  city: string | null;
  price_band: string | null;
  complexity: number | null;
  posted_at: string;
  gbp_post_url: string | null;
};

function toItem(r: Row): WorkItem {
  return {
    slug: String(r.slug),
    headline: String(r.headline ?? r.service ?? "Recent work"),
    bodyMd: String(r.body_md ?? ""),
    costSection: r.cost_section || null,
    photos: Array.isArray(r.photos) ? (r.photos as unknown[]).map(String).filter(Boolean) : [],
    service: String(r.service ?? "Recent work"),
    city: r.city || null,
    priceBand: r.price_band || null,
    complexity: r.complexity == null ? null : Number(r.complexity),
    postedAt: new Date(r.posted_at).toISOString(),
    gbpPostUrl: r.gbp_post_url || null,
  };
}

// One query per render pass (footer, page and sitemap all ask).
export const getRecentWork = cache(async (): Promise<WorkItem[]> => {
  const companyId = await resolveCompanyId();
  if (!DATABASE_URL || !companyId) return [];
  try {
    const sql = neon(DATABASE_URL);
    const rows = (await sql`
      select slug, headline, body_md, cost_section, photos, service, city,
             price_band, complexity, posted_at, gbp_post_url
      from aeo.recent_work
      where company_id = ${companyId}
      order by posted_at desc
    `) as Row[];
    return rows.map(toItem);
  } catch (err) {
    console.error("[recent-work] getRecentWork failed:", err);
    return [];
  }
});

export async function getWorkItem(slug: string): Promise<WorkItem | null> {
  const items = await getRecentWork();
  return items.find((i) => i.slug === slug) ?? null;
}

// "Bee Removal" matches "Bee Removal & Relocation"; case and punctuation ignored.
function norm(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}
export function serviceMatches(gigService: string, siteService: string): boolean {
  const a = norm(gigService);
  const b = norm(siteService);
  return Boolean(a && b) && (a === b || a.includes(b) || b.includes(a));
}

/** Gigs for one of this site's services, newest first. */
export async function getRecentWorkForService(serviceName: string, limit = 3): Promise<WorkItem[]> {
  const items = await getRecentWork();
  return items.filter((i) => serviceMatches(i.service, serviceName)).slice(0, limit);
}

/** Human label for the stored price band; never an exact price. */
export function priceBandLabel(band: string | null): string | null {
  switch (band) {
    case "under_250": return "Under $250";
    case "250_500": return "$250 to $500";
    case "500_1000": return "$500 to $1,000";
    case "1000_2500": return "$1,000 to $2,500";
    case "2500_plus": return "$2,500 and up";
    default: return null;
  }
}

/** URL-safe anchor for a service group on the index page. */
export function serviceAnchor(service: string): string {
  return norm(service).replace(/\s+/g, "-") || "work";
}

/**
 * Article about a Service performed at a Place, provided by the LocalBusiness.
 * `orgId` is the site's LocalBusiness/Organization @id so the graph links up.
 */
export function workSchema(item: WorkItem, pageUrl: string, orgId: string) {
  const where = item.city ? ` in ${item.city}` : "";
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: item.headline,
    datePublished: item.postedAt,
    dateModified: item.postedAt,
    mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
    image: item.photos.map((url) => ({ "@type": "ImageObject", url, caption: `${item.service}${where}` })),
    about: { "@type": "Service", name: item.service, provider: { "@id": orgId } },
    ...(item.city ? { contentLocation: { "@type": "Place", name: item.city } } : {}),
    author: { "@id": orgId },
    publisher: { "@id": orgId },
  };
}
