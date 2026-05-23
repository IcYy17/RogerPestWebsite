import Image from "next/image";
import Link from "next/link";
import type { City } from "@/content/cities";
import { images } from "@/content/images";

export function CityCard({ city }: { city: City }) {
  const img = images[city.image];

  return (
    <Link
      href={`/service-areas/${city.slug}`}
      className="group flex flex-col overflow-hidden rounded-lg border border-brand-tan/40 bg-white hover:border-brand-green hover:shadow-md transition-all"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={img.src}
          alt={img.alt}
          fill
          sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
          className="object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-green/50 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-4 text-white">
          <h3 className="font-display text-2xl">
            {city.name}, {city.state}
          </h3>
        </div>
      </div>
      <div className="flex flex-col flex-1 p-6">
        <p className="text-xs uppercase tracking-[0.12em] text-brand-tan font-semibold">
          ZIPs: {city.zips.join(", ")}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-brand-charcoal/80 flex-1">
          {city.heroSubhead}
        </p>
        <span className="mt-4 text-sm font-semibold text-brand-cta group-hover:text-brand-cta-hover">
          Pest control in {city.name} →
        </span>
      </div>
    </Link>
  );
}
