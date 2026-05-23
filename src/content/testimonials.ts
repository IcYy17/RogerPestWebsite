// SAMPLE testimonials marked clearly. These are placeholders for Roger to
// replace with real Google reviews before launch. Per Whitespark guidance,
// reviews that name the city are the most SEO-valuable.

export type Testimonial = {
  name: string;
  city: string;
  rating: number; // out of 5
  body: string;
  // Optional service slug — used to feature on relevant service pages
  service?: string;
  // SAMPLE = clearly marked placeholder. Roger replaces with real reviews pre-launch.
  isSample: true;
};

export const testimonials: Testimonial[] = [
  {
    name: "Sarah K.",
    city: "Eureka",
    rating: 5,
    body: "Found termite mud tubes in our basement and panicked. Roger's came out the next morning, walked the whole crawl space, and gave us a written quote on the spot. No upsells, no scare tactics. Six months later, no signs of activity and they've been back twice for the included re-inspections. Worth every dollar.",
    service: "termite-control",
    isSample: true,
  },
  {
    name: "Mark T.",
    city: "Wildwood",
    rating: 5,
    body: "We back up to woods and the mosquitoes were ruining summer for our kids. After the first treatment we could actually sit on the patio at 7 PM again. They come every three weeks like clockwork and the tech is the same guy every time, knows our property.",
    service: "mosquito-control",
    isSample: true,
  },
  {
    name: "Diane H.",
    city: "Ballwin",
    rating: 5,
    body: "We've been Roger's customers for over twenty years. My parents used them in this same house before us. They've earned that loyalty — they're honest, they show up when they say they will, and they don't try to sell you things you don't need.",
    service: "general-pest-control",
    isSample: true,
  },
  {
    name: "Tom & Lisa M.",
    city: "Pacific",
    rating: 5,
    body: "Mice in the attic in October — found them, sealed two soffit gaps we didn't know existed, and we haven't heard a scratch since. They explained everything they were doing. Family business, you can tell.",
    service: "rodent-control",
    isSample: true,
  },
  {
    name: "Restaurant owner",
    city: "Chesterfield",
    rating: 5,
    body: "Switched to Roger's for our restaurant in the Valley after our chain provider missed two consecutive visits. Roger's tech walks in at the same time every month, leaves a written log every time, and we passed our last health inspection without a single pest comment.",
    service: "commercial-pest",
    isSample: true,
  },
  {
    name: "Robert P.",
    city: "Eureka",
    rating: 5,
    body: "Hornet nest under the eave got dangerous fast — kids were getting near it. Called Roger's at 9 AM, gone by 2 PM. Same day. That's the difference between a local company and a chain.",
    service: "stinging-insects",
    isSample: true,
  },
];

export function testimonialsForCity(city: string) {
  return testimonials.filter((t) => t.city === city);
}

export function testimonialsForService(serviceSlug: string) {
  return testimonials.filter((t) => t.service === serviceSlug);
}
