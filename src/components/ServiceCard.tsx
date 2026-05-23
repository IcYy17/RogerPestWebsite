import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/content/services";
import { images } from "@/content/images";
import { ShieldIcon } from "./ShieldBadge";

export function ServiceCard({
  service,
  cityName,
}: {
  service: Service;
  cityName?: string;
}) {
  const label = cityName
    ? `${service.name} in ${cityName} →`
    : "Learn more →";
  const img = images[service.image];

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col overflow-hidden rounded-lg border border-brand-tan/40 bg-white hover:border-brand-green hover:shadow-md transition-all"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={img.src}
          alt={img.alt}
          fill
          sizes="(max-width:640px) 100vw, (max-width:1280px) 33vw, 25vw"
          className="object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-green/40 to-transparent" />
      </div>
      <div className="flex flex-col flex-1 p-6">
        <ShieldIcon className="h-6 w-6 text-brand-green" />
        <h3 className="mt-3 font-display text-xl text-brand-green">
          {service.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-brand-charcoal/80 flex-1">
          {service.tagline}
        </p>
        <span className="mt-4 text-sm font-semibold text-brand-cta group-hover:text-brand-cta-hover">
          {label}
        </span>
      </div>
    </Link>
  );
}
