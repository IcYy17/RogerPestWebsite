// Centralized image registry. All images are committed to /public/images/
// and licensed under the Pexels License (free for commercial use). Pages
// reference these via the `images` map so swapping a photo is one edit.
//
// SEO note: filenames are kebab-case and keyword-loaded; every consuming
// component supplies descriptive alt text that names the pest/service/city.

export type ImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const W = 1600;

export const images = {
  homeHero: {
    src: "/images/home-hero-suburban-homes.jpg",
    alt: "A row of well-kept Missouri suburban homes — the kind of houses Roger's protects from termites, ants, and rodents.",
    width: W,
    height: 900,
  },
  aboutFamily: {
    src: "/images/about-family-business.jpg",
    alt: "Family business owners working together — Roger's has been a family-run pest control company in Eureka, MO since 1970.",
    width: W,
    height: 1067,
  },
  aboutAerial: {
    src: "/images/about-aerial-eureka-area.jpg",
    alt: "Aerial view of a wooded Midwestern suburban landscape — the kind of terrain Roger's covers around Eureka, MO and St. Louis County.",
    width: W,
    height: 2133,
  },
  servicesHero: {
    src: "/images/services-hero-pest-control-technician.jpg",
    alt: "A pest control technician in protective gear performing a professional treatment — Roger's licensed technicians handle every service from termite to commercial.",
    width: W,
    height: 2133,
  },
  serviceAreasHero: {
    src: "/images/service-areas-hero-aerial-neighborhood.jpg",
    alt: "Aerial view of a tree-lined Midwestern suburban neighborhood — Roger's serves residential streets across Eureka, MO and St. Louis County.",
    width: W,
    height: 1200,
  },
  rogerPortrait: {
    src: "/images/roger-portrait.jpg",
    alt: "Roger — owner of Roger's Termite & Pest Control, the family-run pest control company serving Eureka, MO since 1970.",
    width: 1536,
    height: 1536,
  },

  // Services
  serviceTermite: {
    src: "/images/service-termite-wood-damage.jpg",
    alt: "Close-up of wood damaged by subterranean termites — the kind of damage Roger's prevents and treats in Eureka, MO homes.",
    width: W,
    height: 1067,
  },
  serviceGeneralPest: {
    src: "/images/service-general-pest-ants.jpg",
    alt: "Ants swarming on food — Roger's general pest control eliminates ants, roaches, spiders, and other household pests in St. Louis County.",
    width: W,
    height: 1067,
  },
  serviceRodent: {
    src: "/images/service-rodent-rat.jpg",
    alt: "A brown rat — Roger's rodent control seals mice and rats out of Missouri homes for good.",
    width: W,
    height: 1067,
  },
  serviceMosquito: {
    src: "/images/service-mosquito-macro.jpg",
    alt: "Close-up macro shot of a mosquito — Roger's mosquito barrier treatments reduce mosquito populations 80% on St. Louis County yards.",
    width: W,
    height: 1236,
  },
  serviceBedBug: {
    src: "/images/service-bedbug-clean-bedroom.jpg",
    alt: "A clean, well-made bed — Roger's bed bug treatments restore peace of mind to Missouri homes.",
    width: W,
    height: 900,
  },
  serviceWildlife: {
    src: "/images/service-wildlife-raccoon-chimney.jpg",
    alt: "A raccoon on a chimney — Roger's wildlife removal humanely handles raccoons, squirrels, and bats in Missouri homes.",
    width: W,
    height: 1067,
  },
  serviceStinging: {
    src: "/images/service-stinging-wasp-nest.jpg",
    alt: "A paper wasp nest — Roger's same-day removal for wasps, hornets, and yellow jackets in Eureka, MO.",
    width: W,
    height: 2400,
  },
  serviceCommercial: {
    src: "/images/service-commercial-kitchen.jpg",
    alt: "A clean commercial restaurant kitchen — Roger's commercial pest control keeps Missouri restaurants and businesses audit-ready.",
    width: W,
    height: 1067,
  },

  // Cities
  cityEureka: {
    src: "/images/city-eureka-mo-red-brick-home.jpg",
    alt: "A red-brick Eureka, MO home — typical of the older housing stock Roger's has been treating in 63025 since 1970.",
    width: W,
    height: 1067,
  },
  cityWildwood: {
    src: "/images/city-wildwood-mo-modern-home.jpg",
    alt: "A modern Wildwood, MO home with a mature lot — typical of the upscale, wooded properties Roger's serves across 63005, 63011, 63021, 63038, and 63040.",
    width: W,
    height: 1067,
  },
  cityPacific: {
    src: "/images/city-pacific-mo-cozy-home.jpg",
    alt: "A cozy Pacific, MO home — the kind of historic and mid-century housing Roger's has been protecting from termites and mosquitoes for decades.",
    width: W,
    height: 1067,
  },
  cityBallwin: {
    src: "/images/city-ballwin-mo-suburban-home.jpg",
    alt: "A suburban Ballwin, MO home — Roger's has been treating Ballwin's mature 1960s–80s housing stock since most of it was built.",
    width: W,
    height: 1067,
  },
  cityChesterfield: {
    src: "/images/city-chesterfield-mo-affluent-home.jpg",
    alt: "A Chesterfield, MO home — Roger's serves Chesterfield Valley and bluff residential alike with full-service pest control.",
    width: W,
    height: 2400,
  },
} as const;

export type ImageKey = keyof typeof images;
