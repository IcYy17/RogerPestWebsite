// All 8 service offerings. Order here drives the order in /services index.
// `inHeaderDropdown: true` flags the top 5 that appear in the main nav.

import type { ImageKey } from "./images";

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  inHeaderDropdown: boolean;
  // Image key from images.ts — drives hero + feature images for this service
  image: ImageKey;
  // Used on cards and hero subheads
  tagline: string;
  // SEO meta description (~155 chars). Geo + pest specifics.
  metaDescription: string;
  // Below-hero "What we treat" — bullet list
  whatWeTreat: string[];
  // "Signs you have a problem" educational bullets
  signs: string[];
  // 3-step treatment overview
  process: { title: string; body: string }[];
  // Service-specific FAQ
  faq: { q: string; a: string }[];
  // Long-form intro paragraph(s) — the heart of the page's unique content
  intro: string[];
  // Safety note
  safety: string;
};

export const services: Service[] = [
  // ─────────────────────────────────────────────────────────────
  {
    slug: "termite-control",
    name: "Termite Control",
    shortName: "Termite",
    inHeaderDropdown: true,
    image: "serviceTermite",
    tagline:
      "Termites cause more home damage in Missouri than fire and storms combined.",
    metaDescription:
      "Termite control & treatment in Eureka, MO and St. Louis County. Free inspections, honest quotes, family-owned since 1968. Call (573) 883-0863.",
    intro: [
      "Missouri sits squarely in the heaviest termite pressure zone in the United States. Eastern subterranean termites — the species responsible for nearly every infestation around Eureka, Wildwood, Pacific, Ballwin, and Chesterfield — work silently for years before homeowners notice a problem. By the time you see mud tubes on a foundation wall or a hollow-sounding floor joist, the colony has already done its work.",
      "Roger's has been treating termites in St. Louis County since 1968. Three generations have walked the same crawl spaces and basements, and we know every place a colony is likely to hide in a Missouri home — the sill plate, the floor joists above the foundation, behind finished basement walls, around the bath trap, inside porch piers. A real termite inspection means crawling, probing, and pulling back insulation. It is not a 10-minute walk-around.",
    ],
    whatWeTreat: [
      "Eastern subterranean termites (the species responsible for the vast majority of MO infestations)",
      "Swarmers / reproductive termites (often confused with flying ants in spring)",
      "Drywood termites (rare in our region but identified and treated when present)",
      "Active mud tubes on foundation walls, sill plates, and floor joists",
      "Damaged or hollow-sounding wood members",
      "Conducive conditions: wood-to-soil contact, moisture issues, mulch against siding",
    ],
    signs: [
      "Mud tubes — pencil-thin tunnels of dirt on foundation walls or in the crawl space",
      "Discarded wings near windowsills or light fixtures, especially in March–May",
      "Wood that sounds hollow when tapped, or floors and trim that feel soft",
      "Bubbling or rippling paint on baseboards (looks like water damage)",
      "Frass — small piles of pellet-like debris near wood surfaces",
      "Stuck windows and doors that suddenly won't close right",
    ],
    process: [
      {
        title: "1. Free Inspection",
        body: "We crawl, probe, and document. You get a written report showing exactly where activity is, where conducive conditions exist, and what the treatment plan looks like. No high-pressure sales, no surprises.",
      },
      {
        title: "2. Targeted Treatment",
        body: "Liquid termiticide applied to the soil around the foundation creates a continuous treated zone. For active interior galleries, we treat directly. Where appropriate, we install in-ground bait stations for long-term monitoring.",
      },
      {
        title: "3. Annual Re-inspection",
        body: "Most Missouri termite treatments include an annual inspection. We come back, re-check the treated zone, look for any new activity, and document everything in writing for your records.",
      },
    ],
    safety:
      "All termiticides we use are EPA-registered and applied by Missouri-licensed technicians. Liquid treatments are placed below grade where pets and kids never come into contact with them. Bait stations are sealed, locking, and tamper-resistant.",
    faq: [
      {
        q: "How much does termite treatment cost in Missouri?",
        a: "Most full-home termite treatments in our area run between $900 and $2,500, depending on house size, foundation type, and whether finished basements need access. We give you a written quote after the free inspection — never a price over the phone, because every home is different.",
      },
      {
        q: "Will my homeowner's insurance cover termite damage?",
        a: "Almost certainly not. Standard homeowner's policies in Missouri exclude termite damage as a maintenance issue. That's exactly why prevention and annual inspections matter — and why we include written re-inspection reports.",
      },
      {
        q: "Do I need a termite treatment when selling my home?",
        a: "Most mortgage lenders in MO require a WDIR (Wood Destroying Insect Report) before closing, especially for FHA and VA loans. We do these inspections and can treat any active findings before closing.",
      },
      {
        q: "How long does termite treatment last?",
        a: "A properly applied liquid termiticide barrier lasts 5–10 years depending on the product and soil conditions. Bait stations are an ongoing monitoring system. We tell you up front which is right for your home.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: "general-pest-control",
    name: "General Pest Control",
    shortName: "General Pest",
    inHeaderDropdown: true,
    image: "serviceGeneralPest",
    tagline:
      "Ants in the kitchen. Spiders in the basement. We handle the everyday stuff.",
    metaDescription:
      "General pest control in Eureka, MO — ants, roaches, spiders, silverfish, and more. Family-owned since 1968. Free inspection. Call (573) 883-0863.",
    intro: [
      "Most pest control calls in St. Louis County aren't dramatic emergencies — they're the steady, low-grade nuisance of ants on the counter every spring, spiders in the basement every fall, the occasional silverfish under the kitchen sink. Our general pest control service is built to handle all of it on one quarterly visit.",
      "We're not a national chain that hands you a binder and a contract. Roger's has been doing this since 1968, which means we know which ants you actually have (in MO it's usually odorous house ants or pavement ants — not what most homeowners assume), which spiders are worth worrying about (brown recluse and black widow get real attention; cellar spiders don't), and which treatments actually work for older Missouri housing stock.",
    ],
    whatWeTreat: [
      "Ants — odorous house ants, pavement ants, carpenter ants, acrobat ants",
      "Cockroaches — German, American, Oriental, brown-banded",
      "Spiders — including brown recluse and black widow",
      "Silverfish and firebrats",
      "Earwigs, centipedes, millipedes",
      "Crickets, sowbugs, pillbugs",
      "Boxelder bugs and stink bugs (seasonal invaders)",
    ],
    signs: [
      "Ant trails on counters, baseboards, or along the foundation",
      "Live or dead roaches in cabinets, behind appliances, or in the basement",
      "Spider webs in corners, crawl spaces, garages, or basements",
      "Small dark droppings in pantries or cabinets",
      "Damaged paper, books, or starches (silverfish)",
      "Sudden seasonal invasions in fall as outdoor pests look for shelter",
    ],
    process: [
      {
        title: "1. Inspect",
        body: "First visit is a full walk-through — exterior perimeter, interior trouble spots, basement, attic if accessible. We identify the specific species and the pressure points.",
      },
      {
        title: "2. Treat",
        body: "Targeted applications inside, exterior perimeter band outside, plus dust and granular treatments in voids, weep holes, and entry points. Modern materials — no chemical smell, dry quickly.",
      },
      {
        title: "3. Maintain",
        body: "Quarterly service keeps the perimeter barrier in place and catches new pressure before it becomes an infestation. Most homes need 3–4 visits a year; we'll tell you honestly if you need less.",
      },
    ],
    safety:
      "All products are applied per label and EPA regulations by licensed Missouri pest technicians. Treatments inside are kept to cracks, crevices, and voids — not open surfaces. Most are dry within 30 minutes. Pet- and child-conscious — we'll tell you exactly when it's safe to walk where.",
    faq: [
      {
        q: "Do I really need quarterly service, or can I just call when there's a problem?",
        a: "Both work. One-time service is fine for a single problem like a bed bug or a wasp nest. But for the everyday ant/spider/roach pressure that Missouri homes get year-round, quarterly is cheaper than fixing a full infestation later — and it stops most problems before you ever see them.",
      },
      {
        q: "Are your treatments safe for kids and pets?",
        a: "Yes — we use the same materials every reputable pest control company uses, applied where children and pets don't make contact (cracks, voids, exterior perimeter). We'll tell you which rooms to keep pets out of for the 30-minute dry time.",
      },
      {
        q: "Do you make me sign a contract?",
        a: "No. We don't lock anyone into anything. If our service isn't working for you, you cancel — no fee, no hassle.",
      },
      {
        q: "How fast can you get to me?",
        a: "Usually within a few business days, sometimes same-day for true emergencies. Call (573) 883-0863 and we'll tell you straight.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: "rodent-control",
    name: "Rodent Control",
    shortName: "Rodent",
    inHeaderDropdown: true,
    image: "serviceRodent",
    tagline:
      "Mice and rats find their way in every fall. We seal them out and clear them out.",
    metaDescription:
      "Rodent control and removal in Eureka, MO. Mouse and rat exclusion, trapping, and prevention. Family-owned since 1968. Call (573) 883-0863.",
    intro: [
      "Mice and Norway rats are a fact of life around St. Louis County, especially as temperatures drop in October and November. A house mouse can squeeze through a hole the diameter of a pencil; a young rat can squeeze through a half-inch gap. Older Missouri housing stock — and even newer construction with sloppy utility penetrations — has plenty of both.",
      "Trapping alone doesn't fix a rodent problem. The trick is finding how they got in, sealing it, and then clearing whatever's already inside. That's the work. We've been doing it in Eureka, Ballwin, Wildwood, and the surrounding cities for over five decades.",
    ],
    whatWeTreat: [
      "House mice (the species behind 90% of MO indoor calls)",
      "Norway rats (basements, garages, sheds, areas near water)",
      "Roof rats (less common in our region but present)",
      "Voles and field mice (lawn and outbuilding issues)",
    ],
    signs: [
      "Droppings in pantries, drawers, under sinks, or along baseboards",
      "Gnaw marks on food packaging, wiring, or wood trim",
      "Scratching or scampering sounds in walls or ceilings, especially at night",
      "Greasy rub marks along walls where rodents travel the same paths",
      "Nesting material — shredded paper, insulation, fabric — in hidden spots",
      "A musky, ammonia-like smell in enclosed spaces",
    ],
    process: [
      {
        title: "1. Inspect & Identify Entry Points",
        body: "We do a full exterior and interior walk-through to find every gap, crack, vent, and utility penetration rodents could be using. You can't trap your way out of an unsealed house.",
      },
      {
        title: "2. Exclude & Trap",
        body: "We seal entry points with rodent-proof materials (steel mesh, copper wool, sealants). Inside, we set traps and monitoring stations — not poison in open spaces where pets could find it.",
      },
      {
        title: "3. Monitor & Maintain",
        body: "Follow-up visits clear out captured rodents, confirm activity has stopped, and adjust the strategy if needed. We don't leave traps sitting indefinitely.",
      },
    ],
    safety:
      "Rodent stations outside are tamper-resistant and locked. Inside, we use snap traps in concealed locations — not poison in living spaces. We'll discuss bait stations only where appropriate and only with your informed go-ahead.",
    faq: [
      {
        q: "How do I know if I have mice or rats?",
        a: "Mouse droppings are rice-grain sized; rat droppings are closer to a raisin. Mice are everywhere; rats prefer ground-floor and basement-level spaces near food and water. We'll confirm during the free inspection.",
      },
      {
        q: "I have pets — what about poison?",
        a: "We default to traps and exclusion. Bait stations are used only outdoors in locked, tamper-resistant boxes, or in specific cases where we discuss it with you first.",
      },
      {
        q: "Will sealing entry points actually stop them?",
        a: "Yes — combined with trapping. A mouse needs a 1/4-inch gap and a rat needs a 1/2-inch gap. If we seal every gap that size or larger, they have nowhere to come back in.",
      },
      {
        q: "How long does it take to get rid of them?",
        a: "Most infestations resolve in 2–4 weeks. Severe cases take longer; truly isolated entry points sometimes clear in a single visit.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: "mosquito-control",
    name: "Mosquito Control",
    shortName: "Mosquito",
    inHeaderDropdown: true,
    image: "serviceMosquito",
    tagline: "Take your backyard back. Seasonal treatments that actually work.",
    metaDescription:
      "Mosquito control in Eureka, MO and St. Louis County. Seasonal yard treatments that reduce mosquitoes 80%+. Family-owned. Call (573) 883-0863.",
    intro: [
      "Missouri summers are humid, warm, and full of standing water — which means full of mosquitoes. Properties near the Meramec River, along Chesterfield Valley, and anywhere with mature landscaping or low spots get hit hardest. We've watched residents try citronella candles, bug zappers, and homemade sprays for fifty years — none of it makes a real dent.",
      "What actually works is a recurring barrier treatment of the resting spots mosquitoes use during the day: dense shrubs, the undersides of leaves, fence lines, woodpiles. Treat those, and mosquito populations on your property drop dramatically within a week. We schedule treatments roughly every 21 days from late April through early October.",
    ],
    whatWeTreat: [
      "Common adult mosquitoes that bother homeowners in MO yards",
      "Mosquito resting sites — landscape beds, shrubs, fence lines, tall grass edges",
      "Larval breeding sites — corrugated drain pipes, gutters, low spots, planters",
      "Properties near water features, woodlines, and bottomland",
    ],
    signs: [
      "You can't sit on the patio after 6 PM without getting bitten",
      "Kids and pets covered in bites after backyard time",
      "Visible swarms in shaded landscape areas during the day",
      "Standing water you can't drain (corrugated pipe, sump discharge, low spots)",
    ],
    process: [
      {
        title: "1. Site Survey",
        body: "We walk your yard, identify resting sites, breeding sources, and the highest-pressure zones. Sometimes a quick drainage fix kills 80% of the problem before we spray anything.",
      },
      {
        title: "2. Barrier Application",
        body: "Targeted treatment of foliage and resting surfaces around the property perimeter. Quick-drying. Knocks down the existing population and leaves a residual that kills new arrivals.",
      },
      {
        title: "3. Recurring Service",
        body: "Re-treat every ~21 days through mosquito season (late April through early October). Most yards see a 80–90% reduction within the first 7–14 days and stay there as long as we keep showing up.",
      },
    ],
    safety:
      "We apply EPA-registered mosquito control products per label. Treatments are dry within an hour. Kids and pets stay off treated areas until dry. We avoid pollinator plants while in bloom and treat outside the heat of the day when bees are most active.",
    faq: [
      {
        q: "How long does a mosquito treatment last?",
        a: "Roughly three weeks under normal MO summer conditions. Heavy rainfall can shorten that — we'll re-spot-treat between regular visits if a major storm rinses things off.",
      },
      {
        q: "Can you guarantee no mosquitoes?",
        a: "No reputable company can promise zero mosquitoes — they fly in from neighbors' yards constantly. What we can promise is a dramatic reduction in resident population and bite pressure.",
      },
      {
        q: "Is it safe for my bees / butterfly garden?",
        a: "We can avoid pollinator-attractive plants and time applications to minimize impact. Tell us where they are on the first visit and we'll work around them.",
      },
      {
        q: "When should I start the season?",
        a: "Mid-to-late April for full-season coverage. Wait until you're already getting bitten and you're starting behind a population that's already established.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: "bed-bug-treatment",
    name: "Bed Bug Treatment",
    shortName: "Bed Bug",
    inHeaderDropdown: true,
    image: "serviceBedBug",
    tagline: "Discreet, thorough, and effective — usually one or two visits.",
    metaDescription:
      "Bed bug treatment in Eureka, MO. Discreet, thorough inspections and treatments. Family-owned since 1968. Call (573) 883-0863 for a free quote.",
    intro: [
      "Bed bugs aren't a hygiene problem and they're not a moral failing — they're a hitchhiker. They come home from hotels, secondhand furniture, even rideshares. Once they're in, they're stubborn. Over-the-counter sprays mostly don't work, and the bugs are smart enough to scatter when a homeowner starts treating, which can turn a bedroom problem into a whole-house problem.",
      "We do this discreetly. Unmarked vehicle if you ask. We tell you exactly how to prep so we only have to come twice. We don't oversell — most legitimate bed bug treatments take one or two professional visits, not the eight or ten some chains will quote you.",
    ],
    whatWeTreat: [
      "Live bed bugs at all life stages — eggs, nymphs, adults",
      "Eggs hidden in seams, behind baseboards, in electrical outlets",
      "Infestations in mattresses, box springs, bed frames",
      "Spread into adjacent furniture, picture frames, baseboards",
      "Apartment / multi-unit situations (coordinated treatment matters)",
    ],
    signs: [
      "Small, itchy bites in lines or clusters on exposed skin (often morning-after)",
      "Tiny dark spots (digested blood) on sheets, mattress seams, or near where you sleep",
      "Live bugs in mattress seams, box spring crevices, or behind the headboard",
      "Translucent shed skins from molting nymphs",
      "A sweet, musty smell in heavily infested rooms",
    ],
    process: [
      {
        title: "1. Confirm & Inspect",
        body: "We confirm the species (often the bug isn't actually a bed bug) and find the harborage points. Bed bugs hide in seams, behind baseboards, and inside furniture joints — a thorough inspection takes time.",
      },
      {
        title: "2. Prep & Treat",
        body: "You'll get a written prep sheet — laundry, decluttering, what to bag and what to leave. We treat with a combination of residual products targeted to harborage points, plus mattress and box spring encasements where appropriate.",
      },
      {
        title: "3. Follow-Up",
        body: "We come back about 14 days later to catch any eggs that hatched after the first treatment. Most jobs resolve in two visits. Severe cases occasionally need a third.",
      },
    ],
    safety:
      "We use EPA-registered products applied per label by licensed Missouri technicians. We will tell you exactly which rooms and surfaces to avoid for the four-hour dry time and which laundering steps to follow.",
    faq: [
      {
        q: "How much does bed bug treatment cost?",
        a: "Most single-room bed bug treatments run $400–$800. Whole-house treatments range higher depending on size and severity. We give you a flat written quote after the free inspection — no hourly billing, no surprises.",
      },
      {
        q: "Do I need to throw out my mattress?",
        a: "Usually no. Properly treated mattresses can be encased and saved. Throwing furniture out without treatment first risks spreading the infestation to wherever you drag it.",
      },
      {
        q: "Will my neighbors / landlord know?",
        a: "Not from us. Unmarked vehicle on request. We treat this professionally and discreetly.",
      },
      {
        q: "Is heat treatment better than chemical treatment?",
        a: "Heat works but it's expensive, requires moving electronics and heat-sensitive items, and doesn't leave residual protection. For most homes, a targeted chemical treatment with a follow-up is just as effective and a lot less disruptive.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: "wildlife-removal",
    name: "Wildlife Removal",
    shortName: "Wildlife",
    inHeaderDropdown: false,
    image: "serviceWildlife",
    tagline:
      "Raccoons in the attic. Squirrels in the soffit. Bats in the chimney. We handle it.",
    metaDescription:
      "Wildlife removal in Eureka, MO. Humane raccoon, squirrel, bat, and opossum removal and exclusion. Family-owned. Call (573) 883-0863.",
    intro: [
      "Wildlife in your attic isn't a pest problem — it's a structural problem. Raccoons can tear holes through a soffit overnight. A mother squirrel will chew through wiring to nest. A bat colony in the chimney is a serious health issue and is governed by Missouri Department of Conservation rules.",
      "We handle wildlife humanely and legally — trapping or one-way excluding the animals, then sealing every entry point so they can't get back in. We don't leave you with the same hole and the next family of raccoons.",
    ],
    whatWeTreat: [
      "Raccoons (in attics, soffits, chimneys, sheds)",
      "Squirrels (gray and fox squirrels, attics and soffits)",
      "Bats (chimneys and attics — governed by MDC seasonal rules)",
      "Opossums (under decks, in crawl spaces, in sheds)",
      "Skunks (under decks and porches)",
      "Birds (in vents, attics, dryer exhausts)",
    ],
    signs: [
      "Scratching, thumping, or scurrying sounds from attic, walls, or ceiling",
      "Damaged soffit, vent screens, or roofline",
      "Droppings in attic insulation or on attic floor",
      "Strong ammonia smell (bats, urine concentrations)",
      "Visible animal coming or going at dusk or dawn",
    ],
    process: [
      {
        title: "1. Inspect & Identify",
        body: "We confirm the species, find the entry points, and assess any damage. Wildlife removal handled wrong creates bigger problems — the wrong technique on bats, for example, can leave you with a sealed-in colony.",
      },
      {
        title: "2. Remove",
        body: "Trapping or one-way exclusion devices — whichever is right for the species and the situation. Done in compliance with Missouri Department of Conservation regulations.",
      },
      {
        title: "3. Exclude & Repair",
        body: "Once the animals are out, we seal every entry point with materials they can't chew through, and recommend any structural repairs needed. The job isn't done until the house is closed up.",
      },
    ],
    safety:
      "All wildlife work is done in accordance with Missouri Department of Conservation rules and humane handling practices. We do not work outside of legal seasonal windows for protected species (e.g. summer bat exclusions).",
    faq: [
      {
        q: "Why can't I just trap and release the animal myself?",
        a: "Missouri has specific rules about trapping and releasing nuisance wildlife — you can get fined, and many homeowners end up releasing animals that turn around and come right back. Bats in particular are protected during summer maternity season.",
      },
      {
        q: "How much does wildlife removal cost?",
        a: "Ranges widely — a single raccoon trap-and-release might run $250–$500, while a full bat exclusion with structural repair can be $1,500+. We give you a written quote after the inspection.",
      },
      {
        q: "Will my insurance cover the damage?",
        a: "Sometimes — depends on policy and species. Raccoon damage is often covered; rodent damage usually isn't. We document everything in writing so you can submit a claim.",
      },
      {
        q: "Do you handle dead animals in the wall or attic?",
        a: "Yes. We remove the carcass, treat the area, and locate the original entry point so it doesn't happen again.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: "stinging-insects",
    name: "Wasp, Hornet & Bee Removal",
    shortName: "Stinging Insects",
    inHeaderDropdown: false,
    image: "serviceStinging",
    tagline:
      "Same-day removal for nests on your house. We protect honeybees when we can.",
    metaDescription:
      "Wasp, hornet, and bee removal in Eureka, MO. Same-day service for nests near your home. Family-owned since 1968. Call (573) 883-0863.",
    intro: [
      "Paper wasps, yellow jackets, bald-faced hornets — they all get aggressive in late summer. A nest tucked under an eave or in a soffit is a real problem, especially with kids and pets around. Most calls we get are same-day urgent: customers spot a nest, want it gone before someone gets stung.",
      "We handle wasps and hornets directly and quickly. Honeybees are different — they're pollinators we don't want to kill if we can avoid it. When a honeybee swarm or established colony shows up, we work with local beekeepers to relocate when feasible.",
    ],
    whatWeTreat: [
      "Paper wasps (umbrella-shaped open-comb nests under eaves)",
      "Yellow jackets (often nest in the ground or in wall voids)",
      "Bald-faced hornets (large gray football-shaped nests in trees and on structures)",
      "Cicada killers (large, intimidating but mostly harmless ground nesters)",
      "Mud daubers (solitary, generally non-aggressive)",
      "Honeybee swarms and established colonies (relocated when feasible)",
    ],
    signs: [
      "Visible nest under eaves, in soffits, in shrubs, or in trees",
      "Wasps or hornets flying repeatedly to the same spot on the house",
      "Ground holes with constant insect traffic (yellow jackets)",
      "Increased aggression near the nest area in late summer",
    ],
    process: [
      {
        title: "1. Identify",
        body: "We confirm the species — yellow jackets and honeybees in particular look similar to homeowners but require very different handling.",
      },
      {
        title: "2. Treat or Relocate",
        body: "For wasps and hornets: targeted treatment at the nest, usually evening or early morning when insects are inside. For honeybees: we coordinate with local beekeepers for relocation when possible.",
      },
      {
        title: "3. Remove the Nest",
        body: "Once the nest is no longer active, we knock it down so it doesn't get re-occupied. We also identify any structural vulnerabilities (gaps, voids) where new colonies could establish next year.",
      },
    ],
    safety:
      "We treat in protective gear at safer times of day (evening or early morning). We tell you exactly when it's safe for kids and pets to be in the treated area — usually within a few hours.",
    faq: [
      {
        q: "Can you come today?",
        a: "Often yes for stinging insect calls — it's the most urgent kind of pest pressure. Call (573) 883-0863 and we'll tell you straight what we can do same-day.",
      },
      {
        q: "What if it's a honeybee swarm?",
        a: "Tell us when you call. Honeybee swarms are temporary (often a few days) and we often can connect you with a local beekeeper who will collect them at no cost.",
      },
      {
        q: "How do I tell wasps from yellow jackets from honeybees?",
        a: "Honeybees are fuzzy and golden-brown; yellow jackets are smooth, shiny, and bright yellow-and-black; paper wasps are long-legged with a pinched waist. Send us a photo when you call and we'll confirm.",
      },
      {
        q: "Will they come back next year?",
        a: "Paper wasps and hornets generally don't re-use old nests, but they will re-colonize the same favorable spot. We can recommend exclusion work on common problem areas.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: "commercial-pest",
    name: "Commercial Pest Control",
    shortName: "Commercial",
    inHeaderDropdown: false,
    image: "serviceCommercial",
    tagline:
      "Restaurants, offices, warehouses, retail. Discreet visits and audit-ready records.",
    metaDescription:
      "Commercial pest control in Eureka, MO and St. Louis County. Restaurants, offices, retail, warehouses. Family-owned since 1968. Call (573) 883-0863.",
    intro: [
      "Commercial pest control is a different job from residential. Restaurants need health-inspection-ready service records. Warehouses need exterior rodent stations on documented schedules. Offices need treatments scheduled outside business hours. We've been doing this work for local businesses since the 1970s.",
      "Every commercial account gets a service log book on site, documented monthly visits, and a single point of contact who knows your property. No call centers, no rotating techs you've never met. The same Roger's tech who handles your account this year will handle it next year.",
    ],
    whatWeTreat: [
      "Restaurants and food service — kitchens, dish pits, dry storage, dining areas",
      "Retail and grocery — back rooms, loading docks, customer-facing areas",
      "Warehouses and distribution centers — rodent station programs, perimeter pest control",
      "Offices and professional buildings — discreet after-hours service available",
      "Schools, daycares, and assisted living — low-impact IPM programs",
      "Multi-family and apartment complexes",
    ],
    signs: [
      "Health inspection citations for pest activity",
      "Customer or employee complaints",
      "Visible activity in food storage, dining, or production areas",
      "Existing service is reactive only, not preventive",
      "Service records aren't audit-ready",
    ],
    process: [
      {
        title: "1. Site Survey & Program Design",
        body: "We walk the property with the manager, identify pressure points, and design a service program that fits the operation — frequency, materials, time of day, documentation requirements.",
      },
      {
        title: "2. Treat & Monitor",
        body: "Scheduled monthly (or more frequent for high-risk facilities) service visits. Exterior rodent stations on documented schedules. Interior monitoring. Every visit logged in your on-site service book.",
      },
      {
        title: "3. Document & Report",
        body: "Audit-ready service logs, materials used, areas treated, and any findings — all on file at your facility and with us. If the health inspector asks, you hand them the binder.",
      },
    ],
    safety:
      "All commercial work follows IPM (Integrated Pest Management) principles — least-toxic effective approach, with chemical control as one tool among many. We follow all label and EPA requirements and food-handling protocols.",
    faq: [
      {
        q: "Can you come after hours?",
        a: "Yes. We schedule restaurants and food service before or after operating hours. Offices we often schedule weeknights or weekends.",
      },
      {
        q: "Do you provide service logs for health inspections?",
        a: "Yes — we keep an on-site log book at every commercial account, plus our own records. Inspectors typically want to see recent service history and that's exactly what the log shows them.",
      },
      {
        q: "Do you do month-to-month, or do I have to sign a contract?",
        a: "Month-to-month. We've never lost a commercial account because we made them feel trapped, and we don't intend to start.",
      },
      {
        q: "How much does it cost?",
        a: "Depends entirely on facility type, size, and frequency. Most small restaurants run $80–$150/month; warehouses and large facilities scale from there. We quote in writing after the site survey.",
      },
    ],
  },
];

export const headerServices = services.filter((s) => s.inHeaderDropdown);

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
