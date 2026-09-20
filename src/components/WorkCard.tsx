import Link from "next/link";
import type { WorkItem } from "@/lib/recent-work";

function formatDate(iso: string): string {
  const d = new Date(iso);
  if (isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
}

/** One Recent Work gig: photo, city, date, headline. */
export function WorkCard({ item }: { item: WorkItem }) {
  const where = item.city ? ` in ${item.city}` : "";
  return (
    <Link
      href={`/recent-work/${item.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-lg border border-brand-tan/40 bg-white transition-all hover:border-brand-green hover:shadow-md"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-brand-cream-dark">
        {item.photos[0] ? (
          // Photos come from the Drumroll CDN (external host): plain img.
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.photos[0]}
            alt={`${item.service}${where}`}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : null}
        <span className="absolute left-3 top-3 rounded bg-brand-green px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white">
          {item.city ?? item.service}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <time dateTime={item.postedAt} className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-tan">
          {formatDate(item.postedAt)}
        </time>
        <h3 className="mt-2 font-display text-xl text-brand-green transition-colors group-hover:text-brand-cta">{item.headline}</h3>
        <p className="mt-2 flex-1 text-sm text-brand-charcoal/80">{item.service}{where}</p>
        <span className="mt-4 text-sm font-semibold text-brand-cta group-hover:text-brand-cta-hover">See the job →</span>
      </div>
    </Link>
  );
}
