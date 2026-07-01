# Roger's Termite & Pest Control — Website

Local-SEO–first marketing site for Roger's Termite & Pest Control, Eureka, MO.

- **13 indexable pages**: home, services index + 8 service detail pages, service-areas index + 5 city pages, about, contact.
- **Stack**: Next.js 16 (App Router) · React 19 · Tailwind CSS v4 · TypeScript.
- **Hosting target**: Vercel.
- **Domain (primary)**: rogerstermiteandpest.com (apex is canonical; `www` redirects to it). `termiterogers.com` is a secondary domain that 301-redirects to the primary.

See [plan.md](./plan.md) for the full build spec, SEO checklist, and design rationale.

---

## Quick start

```bash
npm install      # already done on first scaffold
npm run dev      # http://localhost:3000
npm run build    # production build, generates all static pages
npm run start    # serve the production build locally
npm run lint     # eslint
```

The site is fully static — every page is prerendered at build time.

---

## Editing copy

All content lives in plain TypeScript files under `src/content/`. **You don't need to touch React components to edit the site's words.**

| File | What it controls |
|---|---|
| [`src/content/business.ts`](src/content/business.ts) | Phone, address, hours, email, founding year, external listings (Google, Yelp, BBB). The canonical NAP — this is what shows up sitewide. |
| [`src/content/services.ts`](src/content/services.ts) | All 8 services. Each has slug, name, tagline, meta description, "what we treat" bullets, "signs" bullets, 3-step process, safety note, and per-service FAQ. Toggle `inHeaderDropdown: true/false` to control which 5 show in the main nav. |
| [`src/content/cities.ts`](src/content/cities.ts) | All 5 city pages: Eureka, Wildwood, Pacific, Ballwin, Chesterfield. Each has slug, name, meta description, hero subhead, multi-paragraph about, pest profile, neighborhoods, ZIP codes, city-specific FAQ. **These long-form paragraphs are the most important SEO content on the site — keep them unique per city.** |
| [`src/content/testimonials.ts`](src/content/testimonials.ts) | Sample testimonials (clearly marked). **Replace with real Google reviews before launch.** |
| [`src/content/faqs.ts`](src/content/faqs.ts) | Sitewide FAQ on the home page. (Service-specific and city-specific FAQs live in their respective content files.) |

After editing any content file, rebuild (`npm run build`) and the changes flow through automatically. Pages, sitemap, and JSON-LD all derive from this data.

---

## Adding a new city page

1. Open [`src/content/cities.ts`](src/content/cities.ts).
2. Append a new object to the `cities` array with a unique `slug` (use `kebab-case-mo` format).
3. Fill out every field — write 2–3 paragraphs of genuinely local content for `about`; don't copy-paste from another city or Google will treat it as thin/duplicate content and the page won't rank.
4. Run `npm run build`. Next.js auto-generates the page at `/service-areas/{slug}` and adds it to the sitemap. Add the city to the header/footer manually if you want it surfaced.

---

## Adding a new service page

Same pattern: append to `services` in [`src/content/services.ts`](src/content/services.ts). To put it in the header dropdown, set `inHeaderDropdown: true` (the rest still live at `/services` and on each city page).

---

## Swapping the logo and stock images

- **Logo**: replace `public/logo.png`, `src/app/icon.png` (32×32 favicon), and `src/app/apple-icon.png` (180×180). Keep the same file paths.
- **OG image**: currently not set as a static asset. Add `src/app/opengraph-image.png` (1200×630) and Next will auto-wire it as the social-share image.

---

## SEO surface (what's already wired)

- **Per-page `<title>`, meta description, canonical URL** — set via the `metadata` export in each `page.tsx`.
- **JSON-LD structured data** — every page emits `LocalBusiness` (sitewide), plus `BreadcrumbList`, `Service`, `FAQPage`, and city-scoped `LocalBusiness` where applicable. Validate with [Google's Rich Results Test](https://search.google.com/test/rich-results).
- **`sitemap.xml`** — auto-generated at `/sitemap.xml`, lists all 13 pages with priorities. ([src/app/sitemap.ts](src/app/sitemap.ts))
- **`robots.txt`** — auto-generated at `/robots.txt`, allows all crawlers and points at sitemap. ([src/app/robots.ts](src/app/robots.ts))
- **OpenGraph + Twitter card metadata** — defaults in `src/app/layout.tsx`, overridable per page.
- **Internal-linking mesh** — every service detail page links to every city, every city page links to every service. ~40 cross-links total.

---

## Domain & deployment

The site builds and deploys without a domain — Vercel will give you a free `*.vercel.app` preview URL on first push.

**At launch:**
1. Primary domain is `rogerstermiteandpest.com` (already registered). `termiterogers.com` is kept as a secondary that 301-redirects to it.
2. In Vercel: project settings → Domains → `rogerstermiteandpest.com` is the primary; `www.rogerstermiteandpest.com` redirects to the apex; `termiterogers.com` + `www.termiterogers.com` redirect to the primary. Vercel walks you through DNS.
3. If the canonical domain ever changes, update one line in [`src/content/business.ts`](src/content/business.ts) (`siteUrl`) and the URLs in [`public/llms.txt`](public/llms.txt), then redeploy. All sitemap URLs, canonicals, and JSON-LD `url` fields update automatically from `siteUrl`.
4. Submit `/sitemap.xml` in [Google Search Console](https://search.google.com/search-console).
5. Claim & verify the [Google Business Profile](https://www.google.com/business/), set its website to the live domain. Per Whitespark, this is the single highest-leverage SEO step.

---

## Pre-launch checklist (for Roger)

These items in [plan.md §13](./plan.md) need real data before going live:

- [ ] Confirm phone `(573) 883-0863` and hours.
- [ ] Missouri pest control license number — add to About credentials section.
- [ ] Exact founding year — confirm 1968 (research said "56 years in business").
- [ ] BBB rating / accreditation status — update About credentials.
- [ ] MPMA or other association memberships — confirm in About.
- [ ] **Real Google reviews** to replace sample testimonials in `src/content/testimonials.ts`.
- [ ] Photos: Roger, the team, the truck, any before/after work. Drop into `public/` and reference in pages.
- [ ] Domain registered and DNS pointed at Vercel.
- [ ] Current promos / coupons / new-customer offers — add to home page if desired.
- [ ] Confirm commercial vs strictly residential — currently includes `/services/commercial-pest`.
- [ ] Service guarantee wording — currently placeholder in About credentials.
- [ ] Real `info@rogerstermiteandpest.com` mailbox set up (or update the contact page email).

---

## Project structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout: fonts, header, footer, sitewide JSON-LD
│   ├── page.tsx                # Home
│   ├── globals.css             # Tailwind v4 @theme with brand tokens
│   ├── icon.png                # Favicon (auto-handled by Next)
│   ├── apple-icon.png          # Apple touch icon (auto-handled)
│   ├── not-found.tsx           # 404
│   ├── sitemap.ts              # /sitemap.xml
│   ├── robots.ts               # /robots.txt
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── services/
│   │   ├── page.tsx            # Services index (all 8)
│   │   └── [slug]/page.tsx     # Dynamic service detail (8 pages)
│   └── service-areas/
│       ├── page.tsx            # Cities index
│       └── [city]/page.tsx     # Dynamic city detail (5 pages)
├── components/                 # Reusable UI primitives
│   ├── SiteHeader.tsx          # Sticky nav, hover dropdowns, mobile menu
│   ├── MobileMenu.tsx          # Hamburger panel for <lg
│   ├── SiteFooter.tsx          # 4-col footer with full link mesh
│   ├── Hero.tsx                # Page hero (prop-driven)
│   ├── CTASection.tsx          # Bottom-of-page green CTA band
│   ├── PhoneButton.tsx         # tel: button — primary/ghost/compact variants
│   ├── TrustStrip.tsx          # 56-years / licensed / insured horizontal bar
│   ├── ShieldBadge.tsx         # Shield icon/badge — echoes the logo motif
│   ├── SectionDivider.tsx      # Double-rule divider — echoes the logo
│   ├── NAPBlock.tsx            # Canonical name/address/phone with microdata
│   ├── ServiceCard.tsx
│   ├── CityCard.tsx
│   ├── TestimonialCard.tsx
│   ├── FAQ.tsx                 # Native <details> accordion
│   ├── MapEmbed.tsx            # Google Maps iframe
│   └── JsonLd.tsx              # Renders JSON-LD <script>
├── content/                    # All editable copy lives here
│   ├── business.ts
│   ├── services.ts
│   ├── cities.ts
│   ├── testimonials.ts
│   └── faqs.ts
└── lib/
    └── jsonld.ts               # Schema.org helpers (LocalBusiness, Service, FAQ, Breadcrumb)
```

---

## Brand & design

- **Palette** is sampled from the logo and lives as Tailwind tokens in [`src/app/globals.css`](src/app/globals.css): `brand-green` (#1F4A2E), `brand-tan` (#B89968), `brand-brown` (#7A4E2A), `brand-charcoal`, `brand-cream`, `brand-cta` (red, used only on the phone CTA).
- **Typography**: `font-display` = Playfair Display (matches the "Roger's" wordmark serif). `font-sans` = Inter. All-caps eyebrow labels use the `.eyebrow` utility class.
- **Logo motifs carried into design**: the shield ([`ShieldBadge.tsx`](src/components/ShieldBadge.tsx)), the double rule ([`SectionDivider.tsx`](src/components/SectionDivider.tsx)), and the house silhouette (used as background watermarks in CTAs).
