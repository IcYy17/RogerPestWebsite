// Reads this site's published AEO blog posts from the shared Neon `aeo.articles`
// table (written by the Drumroll AEO Content Engine), using the Neon HTTP driver.
//
// Scoping: the shared DB holds every customer's posts, keyed by `company_id`.
// This site resolves its OWN company_id by matching its domain against
// `aeo.brand_settings.domain` — so the ONLY required env var is DATABASE_URL,
// matching the rest of the Drumroll fleet. (Set AEO_COMPANY_ID to override the
// domain lookup if ever needed.)
//
// Graceful fallback: if DATABASE_URL is missing or the domain isn't enrolled,
// every reader returns empty instead of throwing — /blog shows an empty state
// and the build/site are unaffected.

import { neon } from "@neondatabase/serverless";
import { business } from "@/content/business";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BlogPostSummary {
  slug: string;
  title: string;
  description: string;
  published_at: string;
}

export interface BlogPost extends BlogPostSummary {
  content: string;
  tldr: string | null;
  faq_json: FaqItem[] | null;
  hero_image: string | null;
  read_time: string | null;
  author: string | null;
  updated_at: string;
}

const DATABASE_URL = process.env.DATABASE_URL;

export function blogConfigured(): boolean {
  return Boolean(DATABASE_URL);
}

function client() {
  return DATABASE_URL ? neon(DATABASE_URL) : null;
}

// Normalize a domain for comparison: drop protocol, leading www, path, case.
function normDomain(d: string | null | undefined): string {
  if (!d) return "";
  return d
    .replace(/^https?:\/\//i, "")
    .replace(/^www\./i, "")
    .replace(/\/.*$/, "")
    .trim()
    .toLowerCase();
}

// Resolve this site's company_id once and cache it for the server instance.
let companyIdPromise: Promise<string | null> | null = null;

function resolveCompanyId(): Promise<string | null> {
  if (companyIdPromise) return companyIdPromise;
  companyIdPromise = (async () => {
    // Explicit override wins.
    if (process.env.AEO_COMPANY_ID) return process.env.AEO_COMPANY_ID;
    const sql = client();
    if (!sql) return null;
    const target = normDomain(business.domain || business.siteUrl);
    try {
      const rows = (await sql`
        select company_id, domain from aeo.brand_settings
      `) as { company_id: string; domain: string | null }[];
      const match = rows.find((r) => normDomain(r.domain) === target);
      if (!match) {
        console.warn(
          `[aeo-blog] no brand_settings row matches domain "${target}" — /blog will be empty`
        );
        return null;
      }
      return match.company_id;
    } catch (err) {
      console.error("[aeo-blog] resolveCompanyId failed:", err);
      return null;
    }
  })();
  return companyIdPromise;
}

export async function getPublishedPosts(): Promise<BlogPostSummary[]> {
  const sql = client();
  const companyId = await resolveCompanyId();
  if (!sql || !companyId) return [];
  try {
    return (await sql`
      select slug, title, description, published_at
      from aeo.articles
      where company_id = ${companyId}
        and status = 'published'
        and slug is not null
        and delivery_status is distinct from 'emailed'
      order by published_at desc
    `) as BlogPostSummary[];
  } catch (err) {
    console.error("[aeo-blog] getPublishedPosts failed:", err);
    return [];
  }
}

export async function getPost(slug: string): Promise<BlogPost | null> {
  const sql = client();
  const companyId = await resolveCompanyId();
  if (!sql || !companyId) return null;
  try {
    const rows = (await sql`
      select slug, title, description, content, tldr, faq_json,
             hero_image, read_time, author, published_at, updated_at
      from aeo.articles
      where company_id = ${companyId}
        and slug = ${slug}
        and status = 'published'
        and delivery_status is distinct from 'emailed'
      limit 1
    `) as BlogPost[];
    return rows[0] ?? null;
  } catch (err) {
    console.error("[aeo-blog] getPost failed:", err);
    return null;
  }
}
