# Roger's Termite & Pest Control — Website Build Plan

A local-SEO–first marketing site for Roger's Termite & Pest Control, Eureka, MO. This plan follows the [Whitespark Service Area Landing Page](https://whitespark.ca/guides/guide-to-the-perfect-service-area-landing-page/) framework and takes visual/structural inspiration from [temeculaconstruction.com](https://www.temeculaconstruction.com/) (owner-led trust, project galleries, neighborhood pages, transparent credentials) and [beesmartbeeremoval.com](https://beesmartbeeremoval.com/) (clear pest-by-pest service cards, "Cities Served" with per-city pages, friendly approachable voice).

---

## 1. Business facts (researched, please confirm)


| Field             | Value                                                                                        |
| ----------------- | -------------------------------------------------------------------------------------------- |
| Company name      | Roger's Termite and Pest Control                                                             |
| Phone             | **(573) 883-0863**                                                                           |
| Address           | 5261 Sunflower Dr, Eureka, MO 63025                                                          |
| Hours             | Mon–Fri 8:30 AM – 5:30 PM, Sat/Sun closed                                                    |
| Years in business | 56 (family-owned)                                                                            |
| Service style     | Residential + light commercial, "no job too big or too small," free inspection and estimates |


> Action: Roger needs to confirm phone, hours, years, license #, insurance status, and whether he wants commercial called out. Anything wrong above gets fixed before launch.

---

## 2. Stack & tooling decision

**Next.js 15 (App Router) + Tailwind CSS + TypeScript, deployed on Vercel.**

Why this stack:

- **SEO is the whole point of the site.** Next App Router gives us static generation (`generateStaticParams`) for each service and city page, per-page `<title>` / `<meta description>` via the `metadata` export, automatic `sitemap.xml` and `robots.txt` generation, and effortless JSON-LD injection. Out-of-the-box Lighthouse scores in the high 90s.
- **File-based routing maps cleanly to our URL structure.** Each service and each city becomes its own folder under `app/services/[slug]/page.tsx` and `app/service-areas/[city]/page.tsx` — every page is its own indexable URL, exactly what Whitespark prescribes.
- **Tailwind** keeps the styling fast to write and easy to hand off; no design-system overhead for a site this size.
- **Vercel** deploy is a `git push` away, with free SSL, edge caching, and an analytics tab. Roger could also host on Netlify or Cloudflare Pages with no code changes.
- **TypeScript** because the service and city data are typed JSON-ish records — catching a missing field at build time beats catching it in production.

Trade-offs we accepted: Roger can't edit copy without touching code (or a future headless-CMS plug-in like Sanity/Contentful). For a small site that updates 1–2x per year, that's fine. If editorial frequency increases later, we can swap content from co-located TS files to a CMS without touching components.

---

## 3. Site structure & URLs

```
/                              Home
/services                      Services index (all 8 services, grid)
/services/termite-control      ┐
/services/general-pest-control │
/services/rodent-control       │  Service detail pages — every one indexable
/services/mosquito-control     │  with city-specific cross-links to /service-areas
/services/bed-bug-treatment    │
/services/wildlife-removal     │
/services/stinging-insects     │
/services/commercial-pest      ┘
/about                         About / family-owned story / credentials
/service-areas                 Cities-served index with map
/service-areas/eureka-mo       ┐
/service-areas/wildwood-mo     │  City landing pages — Whitespark spec
/service-areas/pacific-mo      │  Each one localized: pests common in that
/service-areas/ballwin-mo      │  city, neighborhoods, landmarks, reviews
/service-areas/chesterfield-mo ┘
/contact                       Contact / hours / phone / map
```

**13 indexable pages total** (1 home + 1 services index + 8 service pages + 1 about + 1 cities index + 5 city pages + 1 contact). Solid surface area for local SEO without thin-content risk.

URL convention: kebab-case slugs, hyphenated, with `-mo` on city pages to disambiguate from out-of-state Eureka/Pacific/Wildwood.

---

## 4. Header & navigation (sitewide)

Sticky top bar. Two rows on desktop, collapses to hamburger under 768px.

**Top utility strip** (slim, dark background, white text):

- Phone: `(573) 883-0863` (click-to-call on mobile)
- Hours blurb: "Mon–Fri 8:30 – 5:30"
- "Free Inspection" CTA pill on the right

**Main nav row** (white background, larger logo, larger links):


| Item                | Behavior                                                                                                                                                                                                                                         |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Home**            | Link to `/`                                                                                                                                                                                                                                      |
| **Services**        | Hover dropdown on desktop (top 5 services), tap-to-expand on mobile. Dropdown links: Termite Control, General Pest Control, Rodent Control, Mosquito Control, Bed Bug Treatment. Footer of dropdown: "See all services →" linking to `/services` |
| **About**           | Link to `/about`                                                                                                                                                                                                                                 |
| **Cities Served**   | Hover dropdown: Eureka, Wildwood, Pacific, Ballwin, Chesterfield. Footer of dropdown: "All service areas →" to `/service-areas`                                                                                                                  |
| **Contact**         | Link to `/contact`                                                                                                                                                                                                                               |
| **Call Now button** | Always-visible orange/green CTA, `tel:` link                                                                                                                                                                                                     |


The dropdown is a real `<nav>` with anchor tags — not JS-only — so crawlers see every link from every page. This satisfies Whitespark's "ensure crawlability via main menu" point.

---

## 5. Footer (sitewide)

Four-column grid on desktop, stacked on mobile:

1. **Logo + tagline + NAP block** — name, address, phone, hours. This is the canonical NAP that must match Google Business Profile, Yelp, BBB, Nextdoor character-for-character.
2. **Services column** — all 8 service pages linked.
3. **Service Areas column** — all 5 city pages linked.
4. **Quick links** — Home, About, Contact, plus "Leave a Review" link to Google.

Bottom strip: copyright, "Family-owned since 1968" (assuming 56 years from 2026 launch), social icons if Roger has them.

Why repeat everything in the footer: search engines weight site-wide internal links, and Whitespark explicitly calls out building internal links "from product, about, contact pages."

---

## 6. Page-by-page detail

### 6.1 Home (`/`)

The home page is the **trust + conversion entry point**, not a service-area landing page (the city pages handle that). Its job: communicate competence in 3 seconds, route the visitor to the right next page.

Sections in order:

1. **Hero** — full-width, ~80vh on desktop.
  - Background: hero image of a Roger's tech in uniform / branded truck if available, otherwise a clean exterior-home shot (stock placeholder).
  - H1: `"Pest Control in Eureka, MO — Roger's Termite & Pest Control"` (geo + brand in the most important on-page element).
  - Subhead: `"Family-owned since 1968. Free inspections. Honest pricing. Serving St. Louis County and Jefferson County since before your house had termites."`
  - Two CTAs side-by-side: `Call (573) 883-0863` (primary, orange) and `See Service Areas` (secondary, outlined).
  - Trust strip beneath: three shield-outlined badges (echoing the logo) — ★★★★★ rating · "Family-Owned Since 1968" · "Licensed & Insured in Missouri."
2. **Pest emergency strip** — horizontal scroll of pest icons with names (Termites, Ants, Mice, Mosquitoes, Roaches, Bed Bugs, Wasps, Spiders). Each is a link to its service page. Mobile-friendly tap targets, mimics how BeeSmart surfaces pest types as a quick router.
3. **Why Roger's** — 3-column feature row:
  - **56 Years, One Family.** Local since 1968 — we've seen what Missouri throws at houses.
  - **Free Inspections & Honest Quotes.** No high-pressure sales, no contracts you can't get out of.
  - **Licensed, Insured, and Local.** Based in Eureka. We answer our own phone.
4. **Top 5 services** — card grid (matches dropdown). Each card: pest illustration, service name, 1-sentence description, "Learn more →" to the service page.
5. **Service area teaser** — small embedded Google Map (or static map image) of the coverage radius, with the 5 city names as link pills below: Eureka · Wildwood · Pacific · Ballwin · Chesterfield. "See all service areas" link.
6. **Testimonials** — 3 sample 5-star reviews (clearly marked as samples in code comments; Roger replaces with real Google reviews). Names + city. Per Whitespark, prioritize reviews that name the city.
7. **How it works** — 3-step strip: 1. Free Inspection → 2. Honest Quote → 3. Treatment & Follow-up. Builds trust per Whitespark's "How It Works Section."
8. **FAQ** — 5–6 collapsibles covering the highest-intent local questions:
  - "Do termites really cause that much damage in Missouri?"
  - "Are your treatments safe for pets and kids?"
  - "Do I need a contract?"
  - "How fast can you get to me?"
  - "Do you treat commercial buildings?"
  - "Is the inspection really free?"
9. **Final CTA band** — full-width colored band: "Bugs in your house? Let's get them out. Call (573) 883-0863 today." Big phone button.

**SEO targets for home:**

- Title: `Pest Control Eureka, MO | Termite & Pest Removal | Roger's`
- Meta description: 155 chars, names Eureka + key services + "family-owned since 1968."
- JSON-LD: `LocalBusiness` with full NAP, hours, areaServed, sameAs (Yelp, BBB), aggregateRating placeholder.

---

### 6.2 Services index (`/services`)

A pure hub page. Job: route to all 8 service detail pages, capture broad "pest control near me" intent.

Sections:

1. **Header band** — H1 "Pest Control Services in Eureka & St. Louis County," intro paragraph (~80 words) framing Roger's as a full-service local exterminator.
2. **Service grid** — 8 cards, identical visual treatment. Each card: large pest icon, name, 2-line description, "Get a free inspection →".
3. **Why hire local** — short 3-bullet block explaining why a 56-year local outfit beats a national chain.
4. **Call to action band** — phone CTA, repeats the home page's final band.

JSON-LD: `BreadcrumbList` + a `Service`-list schema.

---

### 6.3 Service detail pages (`/services/[service-slug]`)

There are 8 of these. They share a template but each is genuinely unique in copy, pest biology, signs-to-watch-for, treatment approach, and a service-specific FAQ. Whitespark warns against thin duplicate pages; we avoid this by writing pest-specific content, not Mad-Libs swaps.

Template (in render order):

1. **Hero** — H1 `"{Service} in Eureka & St. Louis County, MO"`. Subhead in 1 sentence with the service's pain hook ("Termites cause more home damage in Missouri than fire and storms combined."). Phone CTA + "Schedule Inspection" CTA.
2. **What we treat** — for "General Pest," lists the actual bugs (ants, roaches, spiders, silverfish, earwigs). For "Termite," covers subterranean + Formosan. Bullets with small pest illustrations.
3. **Signs you have a problem** — 4–6 bullet symptoms. Educational, builds authority (Whitespark's "How It Works / build trust" element).
4. **How Roger's treats it** — 3-step process (Inspect → Treat → Monitor). Mentions integrated pest management and named product categories without trade-secrets oversharing.
5. **Safety section** — short paragraph on pet/child/garden safety. Big trust lever in pest control.
6. **Pricing note** — no fixed prices (Whitespark allows pricing optional). Instead: "Free inspection, honest quote, no surprises. Most one-time treatments run $X–$Y; recurring plans available."
7. **Service-specific FAQ** — 4–5 questions targeting long-tail queries (e.g., for termite: "How much does termite treatment cost in Missouri?" "Will my homeowner's insurance cover termite damage?" — answered honestly).
8. **Cities we serve for this service** — link strip to all 5 city pages, anchored as "{Service} in {City} →." Internal-linking gold per Whitespark.
9. **Final CTA band** — phone CTA.

**SEO targets per service page:**

- Title pattern: `"{Service} Eureka MO | Roger's Termite & Pest Control"`
- Meta: pest-specific, geo-tagged, 150–160 chars.
- JSON-LD: `Service` schema with `provider` = the LocalBusiness, `areaServed` = the 5 cities.

The 8 service pages and their headline H1 hook:


| Slug                   | H1                                       | Hook                                                                                 |
| ---------------------- | ---------------------------------------- | ------------------------------------------------------------------------------------ |
| `termite-control`      | Termite Control in Eureka, MO            | "Termites cause more damage to MO homes than fire and storms combined."              |
| `general-pest-control` | General Pest Control in Eureka, MO       | "Ants in the kitchen. Spiders in the basement. We handle the everyday stuff."        |
| `rodent-control`       | Rodent Control & Removal in Eureka, MO   | "Mice and rats find their way in every fall. We seal them out and clear them out."   |
| `mosquito-control`     | Mosquito Control in Eureka, MO           | "Take your backyard back. Seasonal treatments that actually work."                   |
| `bed-bug-treatment`    | Bed Bug Treatment in Eureka, MO          | "Discreet, thorough, and effective — usually one or two visits."                     |
| `wildlife-removal`     | Wildlife Removal in Eureka, MO           | "Raccoons in the attic. Squirrels in the soffit. Bats in the chimney. We handle it." |
| `stinging-insects`     | Wasp, Hornet & Bee Removal in Eureka, MO | "Same-day removal for nests on your house. We protect honeybees when we can."        |
| `commercial-pest`      | Commercial Pest Control in Eureka, MO    | "Restaurants, offices, warehouses, retail. Discreet visits and audit-ready records." |


---

### 6.4 About (`/about`)

Trust-building page. Inspired by Temecula's "Ivan is on every project" owner-led narrative.

Sections:

1. **H1** — "About Roger's Termite & Pest Control."
2. **The story** — 3–4 paragraphs covering family-owned since 1968, multigenerational, why they stayed in Eureka, what they refuse to do (high-pressure sales, lock-in contracts).
3. **Meet the team** — placeholder photo cards for owner + key techs. (Real photos go in later.)
4. **Credentials strip** — Missouri Department of Agriculture pest control license placeholder, insurance, BBB, any associations (MPMA — Missouri Pest Management Association — placeholder).
5. **Community involvement** — Whitespark calls this out specifically; placeholder copy about local sponsorships (Roger to fill in real items).
6. **CTA band**.

---

### 6.5 Service areas index (`/service-areas`)

Inspired by BeeSmart's two-region layout.

Sections:

1. **H1** — "Service Areas — Eureka, MO and St. Louis County."
2. **Intro** — 1 paragraph: based in Eureka, serving SW St. Louis County and northern Jefferson County, X-mile radius, free inspection in all of them.
3. **Map** — embedded Google Map with all 5 cities pinned, or a simple SVG region map.
4. **City cards** — 5 cards (Eureka, Wildwood, Pacific, Ballwin, Chesterfield). Each: city name as H3, 1-sentence localized blurb ("Roger's has been treating Wildwood homes for ZIP codes 63005, 63011, and 63040 for over two decades"), "See {City} pest control →" link.
5. **Note about expanding** — short "Outside these cities? Call us — we cover the surrounding area too" line. Captures intent without making promises we can't keep.
6. **CTA band**.

---

### 6.6 City landing pages (`/service-areas/[city]-mo`)

This is where Whitespark's guide lives in full. Each city page is ~600–900 words of **genuinely localized** content. Same template, different content — never copy-paste.

Template (render order — maps to Whitespark's 20 essential elements):

1. **Hero**
  - H1: `"Pest Control in {City}, MO"`
  - Subhead with USP: `"Family-owned, Eureka-based pest control, serving {City} since 1968."`
  - CTAs: Call + Schedule Inspection.
  - Local trust strip: "★★★★★ from {City} customers" + license + insurance.
  - Hero image: ideally city-specific landmark photo (placeholder until Roger has real ones).
2. **NAP block** — repeats sitewide footer NAP but with city name in the heading ("Pest Control Serving {City}") and a sentence about distance/response time from Eureka.
3. **About this city** — 2–3 paragraphs of genuine local content: neighborhoods served (West Wildwood, Pond, etc.), housing stock characteristics (older brick in Ballwin, newer subdivisions in Wildwood), why local pest pressure is what it is. This is the hardest part to write but the highest-leverage for SEO — generic city pages are penalized.
4. **Pests common in {City}** — bullet list of the 4–6 pests most reported in that city, each linking to its service page. Termites and ants in every city; mosquito heavy near the Meramec River; rodent issues in older housing stock.
5. **Our services in {City}** — grid of all 8 services with "{Service} in {City} →" anchors.
6. **Why {City} homeowners choose Roger's** — 3 bullets, city-specific.
7. **Testimonials from {City}** — 2–3 reviews specifically attributed to that city (sample testimonials, marked as such for replacement).
8. **Neighborhoods we serve in {City}** — bulleted list of 4–8 neighborhood/subdivision names. Whitespark explicitly recommends neighborhood-level granularity for metro areas — and it dramatically helps long-tail "pest control [neighborhood]" searches.
9. **ZIP codes served** — list (Eureka: 63025; Wildwood: 63005, 63011, 63021, 63038, 63040; Pacific: 63069; Ballwin: 63011, 63021, 63022; Chesterfield: 63005, 63006, 63017).
10. **City-specific FAQ** — 3–4 questions referencing the city by name.
11. **Final CTA band** — phone + form-less "Call now" framing.

**SEO targets per city:**

- URL: `/service-areas/{city}-mo`
- Title: `"Pest Control {City}, MO | Roger's Termite & Pest Control"`
- Meta: 150–160 chars, names city + services + 1968.
- JSON-LD: `LocalBusiness` with `areaServed` = the city, plus `BreadcrumbList`.
- Internal links: every city page links to every service page; every service page links to every city page. ~40 cross-links total — a tight, crawlable mesh.

The 5 cities and what makes each unique to write about:


| City         | Slug              | Local hooks                                                                                                                                 |
| ------------ | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Eureka       | `eureka-mo`       | Home base. Six Flags, Route 66 State Park, Meramec River, older homes in town vs. newer in subdivisions. ZIP 63025.                         |
| Wildwood     | `wildwood-mo`     | Largest city in west county by area, lots of wooded lots (= termites, ticks, wildlife), upscale newer construction. ZIPs 63005/11/21/38/40. |
| Pacific      | `pacific-mo`      | Franklin County edge, mix of historic downtown and newer development, Meramec River bottoms (mosquitoes). ZIP 63069.                        |
| Ballwin      | `ballwin-mo`      | Dense suburban, older 1960s-80s housing stock (= ant/roach/termite city), high-density rodent. ZIPs 63011/21/22.                            |
| Chesterfield | `chesterfield-mo` | Affluent, Chesterfield Valley flood plain (huge mosquito + rodent), commercial corridor opportunities. ZIPs 63005/06/17.                    |


---

### 6.7 Contact (`/contact`)

Per user decision: **no contact form.** Phone-first.

Sections:

1. **H1** — "Contact Roger's Termite & Pest Control."
2. **Giant phone CTA** — `(573) 883-0863` as the page's centerpiece, click-to-call.
3. **Hours block** — Mon–Fri 8:30 AM – 5:30 PM, Sat/Sun closed.
4. **Address** + embedded Google Map of 5261 Sunflower Dr, Eureka, MO 63025.
5. **mailto link** — secondary, for non-urgent inquiries.
6. **"Outside our hours?"** — short note: "Leave a voicemail and we'll call you first thing in the morning."
7. **Repeat NAP** for schema purposes.

JSON-LD: `LocalBusiness` with `contactPoint`.

---

## 7. Components inventory

Reusable React components (under `components/`):

- `SiteHeader.tsx` — sticky header with dropdowns. Receives `services` and `cities` arrays from a shared data file.
- `SiteFooter.tsx`
- `Hero.tsx` — prop-driven (title, subtitle, image, ctas).
- `CTASection.tsx` — the bottom-of-page colored band.
- `PhoneButton.tsx` — `tel:` button used everywhere.
- `ServiceCard.tsx`
- `CityCard.tsx`
- `TestimonialCard.tsx`
- `FAQ.tsx` — accordion, accepts array of `{ q, a }`.
- `TrustStrip.tsx` — the 56-years / licensed / insured horizontal bar (renders items inside shield-outlined badges echoing the logo).
- `ShieldBadge.tsx` — small reusable SVG shield wrapper used in `TrustStrip`, in service-card icons, and around the "Free Inspection" CTA. Pulls the shield motif straight from the logo.
- `SectionDivider.tsx` — the double-rule tan-on-tan divider used between major page sections, echoing the logo's circle border.
- `NAPBlock.tsx` — name, address, phone, hours. Used in footer and on city/contact pages. Schema-friendly markup.
- `Map.tsx` — wraps a static or iframe Google Map.
- `JsonLd.tsx` — small component that serializes a schema object into a `<script type="application/ld+json">`.

---

## 8. Data layer

All content lives in typed TS files under `content/` (not a CMS, not a JSON blob — TS gives us autocompletion and build-time errors).

```
content/
  business.ts         // canonical NAP, hours, license #, social URLs
  services.ts         // array of 8 services with slug, name, h1, hooks, FAQ, etc.
  cities.ts           // array of 5 cities with slug, ZIPs, neighborhoods, hooks
  testimonials.ts     // sample testimonials (clearly marked)
  faqs.ts             // shared sitewide FAQ + per-service + per-city FAQs
```

Pages import from these. Replacing copy = editing a TS file. Adding a city = appending one object to `cities.ts` and Next auto-generates the page via `generateStaticParams`.

---

## 9. SEO / technical checklist

Mapped from the Whitespark essential 20 to where each lives in our build:


| Whitespark element         | Where it lives                                                                |
| -------------------------- | ----------------------------------------------------------------------------- |
| Logo                       | Header, footer, favicon                                                       |
| Slogan                     | Sitewide header utility strip, hero subheads                                  |
| Service area finder        | "Cities Served" dropdown, `/service-areas` map                                |
| Navigation menu            | `SiteHeader` (all pages, all dropdowns crawlable)                             |
| Comprehensive contact info | Footer + `/contact` + every city page's NAP block                             |
| Orientation video          | Optional v2 — placeholder slot in hero with image fallback for v1             |
| Booking button             | `tel:` button site-wide (since no form)                                       |
| Unique sales/value prop    | "Family-owned since 1968" + free inspection messaging, surfaces on every hero |
| Service menu + pricing     | `/services` index + per-service pages, honest "free inspection" framing       |
| Gallery                    | Placeholder gallery on `/about` + per-service before/after slot               |
| How it works               | Home section #7 + per-service "How Roger's treats it"                         |
| Service area map           | `/service-areas` + `/contact`                                                 |
| Reviews                    | Home + every city page + dedicated testimonial slots (samples for v1)         |
| Review request links       | Footer "Leave a Review" link to Google Business Profile                       |
| Satisfaction guarantee     | Placeholder slot in hero trust strip — Roger to confirm exact wording         |
| Community involvement      | `/about` section + placeholder for sponsorships                               |
| Awards/associations        | `/about` credentials strip — BBB, MPMA placeholders                           |
| Related media              | Optional v2                                                                   |
| Location-specific offers   | Per-city page CTA band — placeholder for any city-specific promos             |
| Final CTA                  | Every page ends with `CTASection`                                             |


Technical SEO:

- `app/sitemap.ts` — generates sitemap.xml listing all 13+ pages with priorities.
- `app/robots.ts` — allows all, points at sitemap.
- Per-page `metadata` export with title, description, OpenGraph, Twitter card.
- JSON-LD on home (`LocalBusiness`), services (`Service`), cities (`LocalBusiness` with areaServed), about (`Organization`).
- Image alt text everywhere with pest/service/city keywords (no stuffing).
- `loading="lazy"` on below-the-fold imagery, Next `<Image>` with priority on heroes.
- Internal linking mesh: every service ↔ every city.
- Lighthouse target: 95+ Performance, 100 SEO, 100 Accessibility.

---

## 10. Design system

**Driven directly by Roger's logo.** The logo establishes brand: established, formal, family-trade, "shield protecting your home." Visual direction echoes that — closer to Temecula's clean-professional than BeeSmart's cartoon-friendly. Pest control needs to feel *trustworthy* and *traditional*, not chemical-scary.

**Color palette** (sampled from logo):


| Role                    | Hex       | Use                                                                                                                                        |
| ----------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Primary — Forest Green  | `#1F4A2E` | Logo ring, "Roger's" wordmark, primary buttons, headings on light, headers, footer                                                         |
| Accent — Tan / Old Gold | `#B89968` | Inner logo ring + shield outline. Used for dividers, hover states, "56 years" badges, subtle borders                                       |
| Termite Brown           | `#7A4E2A` | Sparingly — small accents, icons. Anchors the palette to the logo's termite color                                                          |
| Charcoal                | `#1C1C1E` | Body text, "TERMITE & PEST CONTROL" wordmark match                                                                                         |
| Cream / Paper           | `#FAF7F2` | Backgrounds — slightly off-white, matches the logo's surround                                                                              |
| Pure white              | `#FFFFFF` | Cards, the shield interior                                                                                                                 |
| Alert / CTA red         | `#B33A2A` | **Used only on the click-to-call phone CTA** to break out from green/tan and signal urgency. Otherwise the palette is monochrome-on-green. |


The dominant pairing is **forest green on cream** with **tan as the accent rule/border**. The red CTA is a small but deliberate violation to make the phone button impossible to miss against an otherwise calm palette.

**Typography**:

- **Display / "Roger's" matching**: `Playfair Display` (free, Google Fonts) — high-contrast serif that visually matches the logo's "Roger's" wordmark. Used for H1s and the largest hero text.
- **Headings (H2–H4)**: `Fraunces` or `Playfair Display` continued — same serif family for hierarchy.
- **Body & UI**: `Inter` — clean sans-serif pairs with the formal serif headings the same way the logo pairs serif "Roger's" with the all-caps "TERMITE & PEST CONTROL" lockup.
- **All-caps subheadings / eyebrow labels**: `Inter` semibold, tracked +0.08em, charcoal or tan — directly mimics the "TERMITE & PEST CONTROL" treatment from the logo.
- Phone numbers: tabular numerals, oversized, in the red CTA color.

**Visual motifs** (carried from the logo):

- **The shield**. The shield element from the logo becomes a recurring icon container — e.g. trust badges ("Licensed & Insured," "Family-Owned Since 1968," "Free Inspection Guarantee") render inside shield outlines in tan. Reuses the brand's central metaphor: Roger's protects your home.
- **The double rule**. The double-line border on the logo's circle reappears as a section-divider treatment — a thin tan line above a thinner one — separating major page sections. Subtle but reinforces the brand on every scroll.
- **House silhouette**. The roofline from the logo's house can show up as a small decorative motif in section headers and the footer top edge.

**Voice**:

- First-person plural ("we"), warm but plain, no jargon, no "synergy."
- "Family-owned since 1968" leaned on hard — it's the brand's biggest differentiator and the logo's formality reinforces it.
- No fear-mongering. Plain stats ("termites cause more MO home damage than fire and storms combined") beat scare copy.
- Slight Midwestern restraint in copy — confident, not flashy. Reads like a handshake, not a sales pitch.

**Logo asset**:

- Save the master logo as `public/logo.png` (full) and `public/logo-mark.png` (the circular crest only, no wordmark — for compact spots like the favicon, mobile header, and the back-to-top button).
- Generate `favicon.ico`, `apple-touch-icon.png` (180×180), and `og-image.png` (1200×630, logo + "Pest Control in Eureka, MO" + phone) from the same source.

---

## 11. Build phases

1. **Phase 0 — scaffold** *(1 step)*
  - `npx create-next-app@latest` with TS + Tailwind + App Router. Init git.
  - Drop logo PNG into `public/logo.png`; generate `logo-mark.png`, `favicon.ico`, `apple-touch-icon.png`, and a 1200×630 `og-image.png`.
  - Wire Tailwind theme: extract the 7 logo-derived colors into `tailwind.config.ts` as named tokens (`green`, `tan`, `brown`, `charcoal`, `cream`, `white`, `cta-red`), plus `font-display: Playfair Display`, `font-sans: Inter`.
  - Load fonts via `next/font/google` for performance.
2. **Phase 1 — data & layout** *(content/, components/)*
  - Write `content/business.ts`, `services.ts`, `cities.ts` with full real copy.
  - Build `SiteHeader`, `SiteFooter`, `Hero`, `CTASection`, `PhoneButton`, `NAPBlock`, `FAQ`, `JsonLd`.
3. **Phase 2 — home + about + contact**
  - Build the three "framework" pages first; they validate the design system before we duplicate it 13 times.
4. **Phase 3 — services hub + 8 service detail pages**
  - Services index, then dynamic `[slug]` route with `generateStaticParams`. Author all 8 sets of copy in `content/services.ts`.
5. **Phase 4 — service-areas hub + 5 city pages**
  - Same pattern as services. Author all 5 city copy blocks with real localized content (this is the slowest, most important phase — no shortcuts).
6. **Phase 5 — SEO surface**
  - `sitemap.ts`, `robots.ts`, JSON-LD on every page, OpenGraph images (auto-generated via Next OG API or designed static), favicon set.
7. **Phase 6 — polish & QA**
  - Lighthouse pass on every page.
  - Link check (no broken internal links).
  - Mobile pass at 375px / 768px / 1280px.
  - Crosslink mesh verified (every service ↔ every city).
  - 404 page + basic error boundary.
8. **Phase 7 — handoff doc**
  - `README.md` covering: how to edit copy (point at `content/`), how to add a city, how to swap stock images, how to deploy to Vercel, how to wire a real Google Business Profile + reviews later.

---

## 12. Deployment

- Repo: local git, optionally pushed to GitHub.
- Hosting: Vercel (free Hobby tier easily handles this). Connect repo → auto-deploy on push.
- Domain: Roger needs a domain. Suggestion: `rogerspestcontrol.com` or `rogerstermite.com` (verify availability before launch).
- SSL: automatic via Vercel.
- DNS: A/CNAME records once domain is purchased.
- Google Business Profile: must be claimed and linked to the live domain — Whitespark calls this out as step 1 of the implementation sequence.

---

## 13. Open questions for Roger (post-build)

These aren't blockers for the v1 build — placeholders ship — but Roger should fill them in before going live:

1. Confirm phone `(573) 883-0863` and hours.
2. Missouri pest control license number?
3. Exact founding year — search results say "56 years" → 1968/1970 depending on date source.
4. BBB rating / accreditation status?
5. MPMA or other association memberships?
6. Real Google reviews to replace the 3 sample testimonials.
7. Photos: Roger, the truck, the team, any before/after work.
8. ~~Logo. If none, we design a simple wordmark.~~ **✓ Received.**
9. Domain name = rogerstermiteandpest.com (primary; termiterogers.com redirects to it)
10. Any current promos / coupons / new-customer offers?
11. Does he want commercial work or strictly residential? (Currently we include `/services/commercial-pest`.)
12. Service guarantee — what does he stand behind, in his own words?

---

## 14. Out of scope for v1

- CMS integration.
- Blog (great for SEO long-term, but adds editorial overhead; v2 candidate).
- Real online booking / scheduling.
- Live chat.
- Multi-language.
- Customer portal.
- E-commerce.
- Email newsletter signup.

These are all fine ideas — they're just not what gets a high-converting SEO-first site live in v1.

---

## 15. Definition of done for v1

- 13 unique indexable pages live and crawlable.
- Lighthouse: Performance ≥95, SEO 100, Accessibility ≥95, Best Practices 100 on every page.
- `sitemap.xml` and `robots.txt` valid.
- JSON-LD passes Google Rich Results Test on home + a sample service + a sample city.
- Every service ↔ every city cross-linked (5 × 8 = 40 cross-link pairs minimum).
- Every page has a click-to-call phone CTA above the fold.
- All sample/placeholder content is clearly marked in code comments so Roger or whoever takes over knows what to replace.
- README explains how to edit, add cities, deploy.

---

*Plan ready for review. Walk through any section that needs adjustment before we scaffold.*