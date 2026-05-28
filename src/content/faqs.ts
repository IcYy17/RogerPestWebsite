// FAQ content.
//   `siteFaqs`  — the short set shown on the home page.
//   `faqGroups` — the full, categorized library shown on /faq. This is the
//                 highest-leverage AEO surface on the site: dense, specific,
//                 Missouri-grounded Q&A that answer engines can quote and
//                 attribute. Facts are kept to well-established, citable
//                 figures (NPMA, EPA, CDC, University of Missouri Extension,
//                 Missouri Dept. of Health & Senior Services).

export type Faq = { q: string; a: string };
export type FaqGroup = { category: string; faqs: Faq[] };

export const siteFaqs: Faq[] = [
  {
    q: "Do termites really cause that much damage in Missouri?",
    a: "Yes. Most of Missouri falls in a moderate-to-heavy termite pressure zone on the International Residential Code Termite Infestation Probability Map, and subterranean termites are the most destructive type in the state. Nationwide, the National Pest Management Association estimates termites cause about $5 billion in property damage each year — and standard homeowner's insurance almost never covers it. That's why an annual termite inspection is the cheapest insurance a Missouri homeowner can buy.",
  },
  {
    q: "Are your treatments safe for pets and kids?",
    a: "Yes. We use EPA-registered products applied strictly per label by licensed Missouri technicians, and we keep most material in cracks, voids, and the exterior perimeter rather than on open living surfaces. Most products are dry within about 30 minutes. We'll always tell you exactly which areas to keep pets and kids away from and for how long.",
  },
  {
    q: "Do I have to sign a contract?",
    a: "No. We don't lock customers into contracts. If our service isn't working for you, you cancel — no fee, no hassle. Most of our customers stay because they want to, not because they're obligated to.",
  },
  {
    q: "How fast can you get to me?",
    a: "Most calls inside our service area get same-day or next-day service. For true emergencies — hornet nests near doorways, termite swarmers, immediate health concerns — we'll usually be there within a few hours. Call (573) 883-0863 and we'll tell you straight.",
  },
  {
    q: "Do you treat commercial buildings?",
    a: "Yes — restaurants, offices, retail, warehouses, and multi-family. Commercial accounts get audit-ready service logs, after-hours scheduling, and a single point of contact who knows your property. Month-to-month, no contracts.",
  },
  {
    q: "Is the inspection really free?",
    a: "Yes, in our normal service area. No travel charge, no minimum, no obligation. If there's no problem, we'll tell you. If there is, you get a written quote on the spot.",
  },
];

export const faqGroups: FaqGroup[] = [
  {
    category: "Termites",
    faqs: [
      {
        q: "What kind of termites are in Missouri?",
        a: "The eastern subterranean termite (Reticulitermes flavipes) is by far the most common and most destructive termite in Missouri. Subterranean termites nest in the soil and build mud tubes to reach the wood in your home. Missouri does not have significant drywood or Formosan termite populations the way Gulf Coast states do, so nearly all local termite treatment is aimed at subterranean colonies.",
      },
      {
        q: "When do termites swarm in Missouri?",
        a: "Subterranean termite swarms in Missouri typically happen on warm, humid days in spring — most often March through May, frequently the day after rain. Swarmers (winged reproductives) inside your home are one of the clearest signs of an active infestation. If you see them, save a few in a bag and call for an inspection.",
      },
      {
        q: "How can I tell termites from flying ants?",
        a: "Termite swarmers have straight antennae, a thick waist with no pinch, and four wings of equal length. Flying ants have bent (elbowed) antennae, a pinched waist, and front wings longer than the back. The easiest tell at home: termite wings break off easily and you'll often find piles of equal-length wings on windowsills.",
      },
      {
        q: "What are the signs of a termite infestation?",
        a: "Watch for pencil-width mud tubes on foundation walls or piers, wood that sounds hollow when tapped, blistered or sagging floors, doors and windows that suddenly stick, piles of discarded wings near windows, and tiny pinholes in drywall with dried mud. Subterranean termites usually hide damage behind surfaces, so the most reliable detection is a professional inspection.",
      },
      {
        q: "How much does termite treatment cost in Missouri?",
        a: "It depends on the size of the home, the foundation type, and the severity of the infestation. A liquid perimeter treatment on an average single-family home commonly runs in the low-to-mid four figures; bait-system installs are priced differently and include ongoing monitoring. We don't quote termite work over the phone because every structure is different — the inspection is free and the written quote is exact.",
      },
      {
        q: "Does homeowner's insurance cover termite damage?",
        a: "Almost never. Insurers treat termite damage as preventable maintenance, not a sudden covered peril, so the cost of repairs and treatment falls on the homeowner. That's the practical reason annual inspections matter: a yearly check is far cheaper than the structural repairs from an infestation that ran unchecked.",
      },
      {
        q: "How long does termite treatment last?",
        a: "A properly applied liquid soil treatment generally protects a home for several years before it needs renewal, and many treatments are backed by an annual renewable warranty. Bait systems work continuously as long as the stations are monitored and maintained. We'll lay out the expected lifespan and any renewal in writing before you commit.",
      },
    ],
  },
  {
    category: "General Pests (Ants, Roaches, Spiders)",
    faqs: [
      {
        q: "What ants are most common in Missouri homes?",
        a: "Odorous house ants and pavement ants are the two most common indoor nuisance ants in the St. Louis area — not the carpenter ants most homeowners assume. Correct identification matters because the bait and treatment strategy is different for each. Carpenter ants do occur here too and, like termites, can damage wood, so it's worth confirming which you actually have.",
      },
      {
        q: "Which spiders in Missouri are actually dangerous?",
        a: "Only two Missouri spiders are of real medical concern: the brown recluse and the black widow. The brown recluse is especially common in Missouri and likes quiet, undisturbed spaces — closets, basements, boxes, behind furniture. The vast majority of other spiders in your home (cellar spiders, wolf spiders, orb weavers) are harmless and actually help control other insects.",
      },
      {
        q: "How do German cockroaches spread so fast?",
        a: "German cockroaches reproduce extremely quickly — a single female and her offspring can produce several hundred roaches in a year under good conditions. They also hitchhike in on boxes, groceries, and used appliances. Because of that reproductive speed, DIY sprays usually knock down what you see while the population rebounds; effective control combines targeted gel baits, sanitation, and follow-up.",
      },
      {
        q: "Why do I get more bugs in late summer?",
        a: "Late summer in Missouri brings warm nights and high humidity, which pushes pest populations to their seasonal peak. It's also when many insects begin seeking shelter ahead of fall, so ants, spiders, and occasional invaders show up indoors more often. A perimeter treatment in late summer heads off the fall push-in.",
      },
    ],
  },
  {
    category: "Rodents & Wildlife",
    faqs: [
      {
        q: "How small a gap can a mouse get through?",
        a: "A house mouse can squeeze through a gap about a quarter inch wide — roughly the diameter of a pencil. Rats need about a half inch. That's why effective rodent control is as much about exclusion (sealing gaps around pipes, vents, garage doors, and the foundation) as it is about trapping.",
      },
      {
        q: "When do mice come indoors in Missouri?",
        a: "Rodents move indoors as temperatures drop in fall and winter, seeking warmth, food, and nesting sites. A single female house mouse can produce several litters a year, so a couple of mice in October can become an established population by winter. Sealing entry points before the cold sets in is the most effective prevention.",
      },
      {
        q: "What wildlife problems are common around Eureka?",
        a: "Because western St. Louis County and the Meramec River valley are heavily wooded, raccoons, squirrels, and bats are the most common structural wildlife issues — typically getting into attics, soffits, chimneys, and crawl spaces. Wildlife work is different from insect control: it focuses on humane removal, sealing entry points, and cleaning up contamination.",
      },
    ],
  },
  {
    category: "Mosquitoes & Stinging Insects",
    faqs: [
      {
        q: "How do mosquito treatments work?",
        a: "Barrier treatments target the shaded resting areas where adult mosquitoes spend their day — under decks, in dense shrubs, along tree lines and fence rows — and are renewed through the season. Paired with removing standing water, where mosquitoes can complete their life cycle in as little as a week or two, barrier treatments meaningfully cut the population in your yard.",
      },
      {
        q: "Are mosquitoes in Missouri a health risk?",
        a: "They can be. West Nile virus is the most common mosquito-borne illness reported in Missouri, according to the Missouri Department of Health & Senior Services, and it's present in the St. Louis area most summers. Reducing mosquito populations around your home isn't just about comfort — it lowers exposure risk for your household.",
      },
      {
        q: "Do you remove honeybees?",
        a: "We protect honeybees whenever possible. If you have an established honeybee colony, removal usually belongs with a beekeeper rather than an exterminator, and we'll point you to one. For wasps, hornets, and yellowjackets — which are aggressive and not pollinators in the way honeybees are — we offer same-day nest removal near doorways and high-traffic areas.",
      },
    ],
  },
  {
    category: "Bed Bugs",
    faqs: [
      {
        q: "How do I know if I have bed bugs?",
        a: "Look for small rust-colored stains on sheets and mattress seams, tiny dark fecal spots, shed skins, and a cluster or line of itchy bites. Bed bugs hide in mattress seams, box springs, headboards, baseboards, and furniture joints. Because they're nocturnal and excellent at hiding, a thorough professional inspection is the most reliable way to confirm them.",
      },
      {
        q: "How long can bed bugs live without feeding?",
        a: "Adult bed bugs can survive for months without a blood meal, which is why simply leaving a room empty rarely solves the problem and why treatment has to be thorough. A female can lay several eggs a day and hundreds over her lifetime, so early, complete treatment matters.",
      },
      {
        q: "How many visits does bed bug treatment take?",
        a: "Most bed bug jobs resolve in two visits, spaced roughly two weeks apart — the second visit catches any eggs that hatched after the first treatment. Severe or long-running infestations occasionally need a third visit. We'll give you a written prep sheet so the treatment is as effective as possible.",
      },
    ],
  },
  {
    category: "Working With Roger's",
    faqs: [
      {
        q: "What areas does Roger's serve?",
        a: "We're based in Eureka, MO (63025) and serve the western St. Louis metro along the I-44 corridor — including Wildwood, Pacific, Ballwin, Chesterfield, and the surrounding parts of St. Louis County, Jefferson County, and Franklin County. If you're nearby but not on that list, call us — we cover much of the surrounding area too.",
      },
      {
        q: "Are you licensed and insured?",
        a: "Yes. Roger's is licensed by the Missouri Department of Agriculture and carries general liability and workers' compensation insurance. We'll send a certificate of insurance before any work begins on request.",
      },
      {
        q: "Do you offer recurring pest control plans?",
        a: "Yes. Many customers choose quarterly or seasonal recurring service so pest pressure never builds back up, but it's optional and month-to-month — no contracts. One-time treatments are available too if you just need a specific problem solved.",
      },
      {
        q: "How is a family-owned company different from a national chain?",
        a: "The same technician comes back to your home year after year, so they actually know your property and its history. We answer our own phone, we don't run high-pressure sales scripts, and we don't lock you into contracts. We've run the business that way in Eureka since 1970.",
      },
    ],
  },
];

// Flattened list for the page-level FAQPage schema.
export const allFaqs: Faq[] = faqGroups.flatMap((g) => g.faqs);
