import Link from "next/link";
import { getRecentWorkForService } from "@/lib/recent-work";
import { WorkCard } from "./WorkCard";

// "Recent {service} work" on a service page. Renders nothing until the crew has
// posted a gig for this service, so pages stay unchanged for clients without Gigs.
export async function RecentWork({ service }: { service: string }) {
  const items = await getRecentWorkForService(service, 3);
  if (items.length === 0) return null;
  return (
    <section className="bg-brand-cream py-12 sm:py-20">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">From the field</p>
            <h2 className="mt-2 font-display text-3xl text-brand-green sm:text-4xl">Recent {service.toLowerCase()} work</h2>
          </div>
          <Link href="/recent-work" className="text-sm font-semibold text-brand-cta hover:text-brand-cta-hover">All recent work →</Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => <WorkCard key={item.slug} item={item} />)}
        </div>
      </div>
    </section>
  );
}
