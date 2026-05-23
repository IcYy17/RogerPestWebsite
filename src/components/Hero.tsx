import Image from "next/image";
import { PhoneButton } from "./PhoneButton";
import { ShieldIcon } from "./ShieldBadge";
import type { ImageAsset } from "@/content/images";

// Page hero — used on home, services index, service detail, cities index,
// city detail, about, and contact. Driven entirely by props.

export function Hero({
  eyebrow,
  title,
  subtitle,
  ctaSecondary,
  image,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  ctaSecondary?: { label: string; href: string };
  image?: ImageAsset;
}) {
  // With image: render full-bleed image hero with overlay text.
  // Without image: keep the original SVG-circle background style.
  if (image) {
    return (
      <section className="relative h-[70vh] min-h-[480px] w-full text-white">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-green/95 via-brand-green/75 to-brand-green/35" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
          <div className="max-w-2xl">
            {eyebrow && (
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-tan-light">
                {eyebrow}
              </p>
            )}
            <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl text-white">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-6 text-lg md:text-xl leading-relaxed text-brand-cream/95">
                {subtitle}
              </p>
            )}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PhoneButton variant="primary" />
              {ctaSecondary && (
                <a
                  href={ctaSecondary.href}
                  className="inline-flex items-center gap-2 rounded-full border border-brand-tan-light/70 px-6 py-3 font-semibold text-brand-cream hover:bg-white/10 transition-colors"
                >
                  <ShieldIcon className="h-4 w-4" />
                  {ctaSecondary.label}
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-brand-green text-white">
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <svg
          className="absolute -right-32 top-1/2 h-[140%] w-auto -translate-y-1/2"
          viewBox="0 0 200 200"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="100" cy="100" r="90" />
          <circle cx="100" cy="100" r="78" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-tan-light">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl text-white">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 max-w-2xl text-lg md:text-xl leading-relaxed text-brand-cream/90">
              {subtitle}
            </p>
          )}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <PhoneButton variant="primary" />
            {ctaSecondary && (
              <a
                href={ctaSecondary.href}
                className="inline-flex items-center gap-2 rounded-full border border-brand-tan-light/60 px-6 py-3 font-semibold text-brand-cream hover:bg-white/10 transition-colors"
              >
                <ShieldIcon className="h-4 w-4" />
                {ctaSecondary.label}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
