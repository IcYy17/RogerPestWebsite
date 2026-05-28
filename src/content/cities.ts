// The five service-area cities. Each has unique, localized content per the
// Whitespark guide — these are NOT Mad-Libs templates. The intro paragraphs
// and neighborhood lists are the most important SEO surface on the site.

import type { ImageKey } from "./images";

export type City = {
  slug: string;
  name: string;
  state: string;
  // Image key from images.ts — drives hero + feature images for this city
  image: ImageKey;
  // SEO meta description (~155 chars)
  metaDescription: string;
  // Hero subhead — short, geo-anchored
  heroSubhead: string;
  // 2–3 paragraphs of localized content. THE most important SEO content.
  about: string[];
  // Why pests pressure this city specifically
  pestProfile: string;
  // Most-reported pests in this city (linked to /services/[slug])
  topPestSlugs: string[];
  // Neighborhoods / subdivisions in this city (helps long-tail SEO)
  neighborhoods: string[];
  // ZIP codes served
  zips: string[];
  // City-specific FAQ
  faq: { q: string; a: string }[];
  // 3 short "why us" lines tied to this city
  whyUs: string[];
};

export const cities: City[] = [
  // ─────────────────────────────────────────────────────────────
  {
    slug: "eureka-mo",
    name: "Eureka",
    state: "MO",
    image: "cityEureka",
    metaDescription:
      "Pest control in Eureka, MO. Family-owned since 1970 — termite, ant, rodent, mosquito, and bed bug service. Free inspections. Call (573) 883-0863.",
    heroSubhead:
      "We're based here. Family-owned in Eureka, MO since 1970 — and we'll be at your door faster than anyone from out of town.",
    about: [
      "Eureka is home. Roger's has run out of Eureka since 1970 — the office is on Sunflower Drive, ten minutes from the Six Flags exit on I-44, and we know this town the way only a multi-generation local business can. Every street between Allenton Road and the Pacific city limit, every subdivision off Highway 109, every older home with a stone foundation on Central Avenue.",
      "Eureka's housing stock is a mix that creates a specific pest profile. Older homes in town — many built in the 1940s through 1970s — have stone or block basements and crawl spaces that are termite, rodent, and spider havens. Newer construction in subdivisions like Legends, Vintage Oaks, and the Wildhorse Creek corridor sits on slabs or poured walls but is surrounded by mature trees and woodland edges that bring carpenter ants, mosquitoes, and seasonal invaders. Meramec River bottom properties get heavy mosquito pressure every summer.",
      "Because we're physically in Eureka, we get to your door fast. Most calls inside the 63025 zip get same-day or next-day service. We're not driving in from O'Fallon or Wentzville — we're driving in from down the street.",
    ],
    pestProfile:
      "Termites are the dominant pressure in Eureka — older homes with crawl spaces and mature woods make this prime subterranean termite country. Ants and spiders are year-round. Mosquitoes are heavy from May through September, especially along Williams Creek and the Meramec bottoms. Mice get serious in October as temperatures drop and woods-adjacent homes get the first cold nights.",
    topPestSlugs: [
      "termite-control",
      "general-pest-control",
      "rodent-control",
      "mosquito-control",
    ],
    neighborhoods: [
      "Legends",
      "Vintage Oaks",
      "Wildhorse Creek",
      "Allenton",
      "Forest Park",
      "Sherwood Estates",
      "Eureka Estates",
      "Olde Towne Eureka",
    ],
    zips: ["63025"],
    whyUs: [
      "Based in Eureka — same-day service is usually possible.",
      "Three generations have walked Eureka crawl spaces. We know every common entry point in older 63025 housing.",
      "Free inspections in the 63025 zip — no travel charge, no minimum.",
    ],
    faq: [
      {
        q: "Are you really based in Eureka?",
        a: "Yes — 5261 Sunflower Drive, in town. Not a national chain with a 1-800 number; just us.",
      },
      {
        q: "How fast can you get to my house in Eureka?",
        a: "Most 63025 calls get same-day or next-day service. For true emergencies (a hornet nest by a door, swarmers in the basement) we'll often come within a few hours.",
      },
      {
        q: "Do you treat properties along the Meramec River bottom?",
        a: "Yes — those properties have the heaviest mosquito pressure in town and we have customers from Allenton to Times Beach. Bottom properties also see more termites and more spring termite swarmers.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: "wildwood-mo",
    name: "Wildwood",
    state: "MO",
    image: "cityWildwood",
    metaDescription:
      "Pest control in Wildwood, MO. Termite, mosquito, rodent, and wildlife service across 63005, 63011, 63021, 63038, 63040. Call (573) 883-0863.",
    heroSubhead:
      "Wooded lots, mature landscaping, and big homes — Wildwood has every pest pressure a Missouri yard can produce. We handle them all.",
    about: [
      "Wildwood is the largest city by area in west St. Louis County, which means the pest profile is enormous. The character of the place — wooded lots, mature trees, conservation areas, generous setbacks — is exactly what termites, mosquitoes, wildlife, and stinging insects love. We've been treating Wildwood properties since long before it incorporated in 1995, back when these were unincorporated St. Louis County subdivisions tucked into Pond, Glencoe, and Grover.",
      "Wildwood's housing stock is mostly newer than Eureka's — primarily 1980s–2010s construction — but the natural setting overwhelms the construction-age advantage. Mature trees mean carpenter ants and squirrels. Wooded lots mean more termite swarmer activity in spring. Deep landscaping beds mean mosquito breeding sites. Conservation-area-adjacent properties see raccoons, opossums, and the occasional skunk.",
      "We have customers across every Wildwood zip — 63005, 63011, 63021, 63038, and 63040 — from the older Pond and Glencoe corners to the newer Wildhorse Creek developments. Wildwood's size means it pays to have a local company that knows the neighborhoods; a tech who only handles Wildwood once a month won't know where the trouble spots are.",
    ],
    pestProfile:
      "Mosquito control and wildlife removal are the two biggest Wildwood-specific calls. Termites are everywhere — wooded lots dramatically increase swarmer pressure in March–May. Carpenter ants are common in mature-tree neighborhoods. Mice are routine in fall. Yellow jacket nests in landscape beds and ground are a late-summer staple.",
    topPestSlugs: [
      "mosquito-control",
      "termite-control",
      "wildlife-removal",
      "general-pest-control",
    ],
    neighborhoods: [
      "Wildhorse",
      "Pond",
      "Glencoe",
      "Cherry Hills",
      "Babler State Park area",
      "Kelpe Estates",
      "Greentrails",
      "Wildwood Forest",
      "Castlewood",
    ],
    zips: ["63005", "63011", "63021", "63038", "63040"],
    whyUs: [
      "We know every Wildwood subdivision — Wildhorse to Pond to Glencoe.",
      "Wildwood's wooded lots create above-average pest pressure. We size treatments to actual conditions, not a generic template.",
      "Wildlife removal experience matters in Wildwood — we handle it legally, humanely, and with proper exclusion.",
    ],
    faq: [
      {
        q: "Do you service all of Wildwood, including 63038 and 63040?",
        a: "Yes — every Wildwood ZIP. Properties near Babler, Pond, Glencoe, Cherry Hills, and Wildhorse are all regular routes for us.",
      },
      {
        q: "My yard backs up to woods — what's different about my treatment?",
        a: "More termite pressure, more mosquitoes, more carpenter ant activity, and a higher chance of wildlife issues. We adjust the perimeter treatment and inspection cadence accordingly.",
      },
      {
        q: "How much is mosquito control for a half-acre Wildwood lot?",
        a: "Most half-to-one-acre Wildwood properties run $75–$110 per treatment, with a recurring schedule running roughly every three weeks through mosquito season.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: "pacific-mo",
    name: "Pacific",
    state: "MO",
    image: "cityPacific",
    metaDescription:
      "Pest control in Pacific, MO. Termite, ant, rodent, and mosquito treatment for Pacific and Gray Summit area homes. Family-owned. Call (573) 883-0863.",
    heroSubhead:
      "Right next door — we run Pacific calls daily from our Eureka office, just minutes up I-44.",
    about: [
      "Pacific sits just west of Eureka along I-44, straddling the Franklin and St. Louis County line. We've been doing pest control work in Pacific for as long as we've been in business — geographically, it's closer to our Sunflower Drive office than half of Wildwood is.",
      "Pacific's character is a mix that creates a specific pest situation: historic downtown housing dating back over a century, mid-century neighborhoods that fan out from the old town center, newer subdivisions on the city's growing edges, and the Meramec River running right along the south side of town. The historic homes have all the termite, mouse, and crawl-space pressures you'd expect from old stone foundations. The newer parts of town sit closer to the Meramec bottoms and see heavy summer mosquito pressure.",
      "We're not Pacific's only option — but most of our Pacific competitors are based out of St. Louis County or Franklin County's Washington area. We're a 15-minute drive away, and most Pacific calls get same-day or next-day visits.",
    ],
    pestProfile:
      "Termites in older downtown housing stock are a constant. Mosquitoes are heavy along the Meramec River corridor and in the lower-lying parts of town. Mice and rats are common in older neighborhoods with detached garages and outbuildings. Brown recluse spiders show up in the older homes more than in newer construction.",
    topPestSlugs: [
      "termite-control",
      "mosquito-control",
      "general-pest-control",
      "rodent-control",
    ],
    neighborhoods: [
      "Historic Downtown Pacific",
      "Gray Summit area",
      "Brush Creek",
      "Allenton Road corridor",
      "Pacific Park area",
      "South Pacific (Meramec bottoms)",
    ],
    zips: ["63069"],
    whyUs: [
      "15 minutes up I-44 — Pacific is one of our most-served cities outside Eureka itself.",
      "We know historic Pacific housing — stone foundations, older crawl spaces, and the specific termite history of those properties.",
      "Meramec-bottom mosquito control is a regular part of our Pacific routes.",
    ],
    faq: [
      {
        q: "Do you cover Gray Summit?",
        a: "Yes — Gray Summit and the area west toward Robertsville is part of our regular Pacific service area.",
      },
      {
        q: "My Pacific home is over 100 years old. Do you handle stone foundations?",
        a: "Yes — most of our older-home work in this region involves stone or rubble foundations. They take more careful inspection but standard liquid termite treatments still work.",
      },
      {
        q: "We're near the river — what about mosquitoes?",
        a: "Heavy. We run regular mosquito routes through the lower parts of Pacific from late April through October.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: "ballwin-mo",
    name: "Ballwin",
    state: "MO",
    image: "cityBallwin",
    metaDescription:
      "Pest control in Ballwin, MO. Termite, ant, roach, and rodent treatment for older Ballwin homes. Family-owned since 1970. Call (573) 883-0863.",
    heroSubhead:
      "Ballwin's mature 1960s–80s housing stock means termites, ants, and mice. We've been treating it since it was built.",
    about: [
      "Ballwin is a dense, established suburb with a housing stock that's mostly 1960s through 1980s — exactly the era and the construction style that produces consistent pest pressure. Brick-on-block foundations with crawl spaces or basements, attached garages with side-of-foundation entry points, mature landscape beds against siding, and the gradual settling of fifty-plus-year-old structures all create the conditions termites, carpenter ants, and mice love.",
      "We've been working Ballwin since most of these homes were brand new. That's not marketing copy — we've literally treated original-buyer customers' homes, then their children's homes, in the same subdivisions. The neighborhoods we know best run from Holloway Road through the Claymont, Reinke, and Manchester Meadows corridors out toward Manchester Road.",
      "Ballwin pest control work is precise. The houses are close together, the yards are landscaped, and most calls are not new construction but managing the same chronic pressure points over time. That's what we do.",
    ],
    pestProfile:
      "Termites and ants are the two dominant Ballwin issues. Older brick-on-block construction with crawl spaces creates ideal termite conditions. Pavement and odorous house ants find their way in through expansion joints and slab penetrations. Brown recluse spiders appear in basements. Mice are constant in fall. Cockroaches show up occasionally — usually German roaches brought in via grocery bags or pre-owned appliances.",
    topPestSlugs: [
      "termite-control",
      "general-pest-control",
      "rodent-control",
      "bed-bug-treatment",
    ],
    neighborhoods: [
      "Claymont",
      "Reinke",
      "Manchester Meadows",
      "Holloway Estates",
      "Ballwin Hills",
      "Old Ballwin",
      "Westglen Farms",
      "Big Bend Woods",
    ],
    zips: ["63011", "63021", "63022"],
    whyUs: [
      "We've treated Ballwin homes since most of them were built. Three generations of pest control on the same streets.",
      "Older Ballwin construction has specific weak points — we know where to look.",
      "Same techs come back to the same routes. You won't get a rotation of strangers.",
    ],
    faq: [
      {
        q: "My Ballwin home is from 1968 and has a finished basement. Can you still inspect for termites?",
        a: "Yes — finished basements complicate the inspection but don't prevent it. We look at every accessible area, identify any signs at the sill plate, and tell you honestly what we can't see and what that means for risk.",
      },
      {
        q: "We have ants every spring. Is that a treatment problem or a moisture problem?",
        a: "Usually moisture plus access — leaky outdoor faucets, mulch against siding, or clogged gutters create ideal conditions. We treat the colony and tell you the conducive conditions to fix.",
      },
      {
        q: "Do you serve all three Ballwin ZIPs?",
        a: "Yes — 63011, 63021, and 63022 are all on our regular routes.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: "chesterfield-mo",
    name: "Chesterfield",
    state: "MO",
    image: "cityChesterfield",
    metaDescription:
      "Pest control in Chesterfield, MO. Termite, mosquito, rodent, and commercial pest service across Chesterfield. Family-owned. Call (573) 883-0863.",
    heroSubhead:
      "From the Valley flood plain to the bluffs — Chesterfield pest pressure varies block to block, and we know the difference.",
    about: [
      "Chesterfield is two very different cities for pest control purposes. North Chesterfield — the bluff-top neighborhoods and the older 1960s–80s housing along Olive and Clayton — has roughly the same profile as Ballwin: termites in mature housing, ants, mice in fall, the usual spider and silverfish background pressure. Chesterfield Valley — the flood plain along the Missouri River — is its own world.",
      "The Valley sits on hundreds of feet of river sediment, has standing water during wet seasons, and has been built into a commercial corridor over the last thirty years. Mosquito pressure in the Valley is among the worst in St. Louis County. Rodent pressure around the Valley's commercial buildings is constant. The mix of restaurants, retail, and warehouse space makes the Valley a major commercial pest control market.",
      "We work both sides of Chesterfield — bluff residential, Valley commercial, and the mid-range Wildhorse and Chesterfield Lakes residential areas in between. The treatment plans look different in each zone, and that's the right way to do it.",
    ],
    pestProfile:
      "Chesterfield Valley is a mosquito and rodent zone — flood-plain water and dense commercial activity create year-round pressure. North Chesterfield bluff residential is more typical termite-and-ant work. Affluent neighborhoods see more wildlife and stinging-insect calls because of larger lots and more landscape complexity.",
    topPestSlugs: [
      "mosquito-control",
      "termite-control",
      "commercial-pest",
      "rodent-control",
    ],
    neighborhoods: [
      "Chesterfield Valley",
      "Chesterfield Lakes",
      "Wildhorse",
      "Schoettler Estates",
      "Hardt Farms",
      "Old Chesterfield Village",
      "Spirit of St. Louis area",
      "Riverbend",
    ],
    zips: ["63005", "63006", "63017"],
    whyUs: [
      "We know Chesterfield Valley pest pressure intimately — both residential and the heavy commercial mosquito and rodent work.",
      "Family-owned and local — we're not a national chain rotating techs through this market.",
      "Commercial accounts get a single point of contact and audit-ready service logs.",
    ],
    faq: [
      {
        q: "We're in Chesterfield Valley. How bad is mosquito pressure really?",
        a: "Bad — among the worst in St. Louis County. A barrier treatment every three weeks through the season is what most Valley homeowners need. We'll be honest with you about expectations.",
      },
      {
        q: "Do you do commercial pest control in the Chesterfield retail corridor?",
        a: "Yes — restaurants, retail, and warehouse accounts in the Valley are a regular part of our commercial work. Monthly service with health-inspection-ready documentation.",
      },
      {
        q: "What about the bluff neighborhoods — are pests different up there?",
        a: "Yes — less mosquito pressure, more typical termite/ant/rodent pressure for mature residential. We adjust treatment accordingly.",
      },
    ],
  },
];

export const cityNames = cities.map((c) => c.name);

export function getCity(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}
