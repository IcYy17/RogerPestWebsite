// Reads this site's published AEO blog posts from the shared Neon `aeo.articles`
// table (written by the Drumroll AEO Content Engine). Uses the Neon HTTP driver
// (no pooling) — ideal for Next.js server components / ISR.
//
// Env required (set on the Vercel project — see .env.local.example):
//   DATABASE_URL          shared Neon connection string (read-only role recommended)
//   AEO_COMPANY_ID        this site's Drumroll company id
//
// Graceful fallback: if either env var is missing, every reader returns an
// empty result instead of throwing. That keeps `next build` working without a
// DB (e.g. CI/local) and prevents the live site from erroring if the blog
// isn't configured yet — /blog simply shows an empty state.

import { neon } from "@neondatabase/serverless";

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
const COMPANY_ID = process.env.AEO_COMPANY_ID;

/** True only when the blog is fully configured. */
export function blogConfigured(): boolean {
  return Boolean(DATABASE_URL && COMPANY_ID);
}

// Lazily construct the client so an unset DATABASE_URL never throws at import.
function client() {
  if (!DATABASE_URL) return null;
  return neon(DATABASE_URL);
}

export async function getPublishedPosts(): Promise<BlogPostSummary[]> {
  const sql = client();
  if (!sql || !COMPANY_ID) return [];
  try {
    const rows = (await sql`
      select slug, title, description, published_at
      from aeo.articles
      where company_id = ${COMPANY_ID}
        and status = 'published'
        and slug is not null
        and delivery_status is distinct from 'emailed'
      order by published_at desc
    `) as BlogPostSummary[];
    return rows;
  } catch (err) {
    console.error("[aeo-blog] getPublishedPosts failed:", err);
    return [];
  }
}

export async function getPost(slug: string): Promise<BlogPost | null> {
  const sql = client();
  if (!sql || !COMPANY_ID) return null;
  try {
    const rows = (await sql`
      select slug, title, description, content, tldr, faq_json,
             hero_image, read_time, author, published_at, updated_at
      from aeo.articles
      where company_id = ${COMPANY_ID}
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
