import Image from "next/image";
import { PhoneButton } from "./PhoneButton";
import { DualPhoneCTA } from "./DualPhoneCTA";
import { ShieldIcon } from "./ShieldBadge";
import type { ImageAsset } from "@/content/images";

// Page hero — used on home, services index, service detail, cities index,
// city detail, about, and contact. Driven entirely by props.
//
// CTAs: single PhoneButton + optional secondary on all viewports.
// EXCEPTION: when `mobileDualPhone` is true (home page only), we ALSO render
// the dual South/North phones — but ONLY on mobile (< sm). On sm+ the single
// PhoneButton continues to show.

export function Hero({
  eyebrow,
  title,
  subtitle,
  ctaSecondary,
  image,
  mobileDualPhone = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  ctaSecondary?: { label: string; href: string };
  image?: ImageAsset;
  mobileDualPhone?: boolean;
}) {
  const ctas = (
    <div className="mt-6 sm:mt-8">
      {/* Mobile-only dual phones (home hero only). Hidden on sm+. */}
      {mobileDualPhone && (
        <div className="sm:hidden mb-4">
          <DualPhoneCTA size="sm" className="w-full" />
        </div>
      )}

      {/* Phone + secondary row. When mobileDualPhone is true, the single
          PhoneButton is hidden on mobile (dual phones above replace it);
          on sm+ it appears normally. Wrapping in a div avoids Tailwind v4
          display-utility conflicts between `inline-flex` and `hidden`. */}
      <div className="flex flex-wrap items-center gap-4">
        <div className={mobileDualPhone ? "hidden sm:block" : "block"}>
          <PhoneButton variant="primary" />
        </div>
        {ctaSecondary && (
          <a
            href={ctaSecondary.href}
            className="inline-flex items-center gap-2 rounded-full border border-brand-tan-light/70 px-5 py-2.5 sm:px-6 sm:py-3 font-semibold text-sm sm:text-base text-brand-cream hover:bg-white/10 transition-colors"
          >
            <ShieldIcon className="h-4 w-4" />
            {ctaSecondary.label}
          </a>
        )}
      </div>
    </div>
  );

  // With image: full-bleed image hero with overlay text.
  if (image) {
    return (
      <section className="relative h-[75vh] min-h-[520px] sm:h-[70vh] sm:min-h-[480px] w-full text-white">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-green/95 via-brand-green/85 to-brand-green/45 sm:via-brand-green/75 sm:to-brand-green/35" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-5 sm:px-6 py-8">
          <div className="max-w-2xl">
            {eyebrow && (
              <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-brand-tan-light">
                {eyebrow}
              </p>
            )}
            <h1 className="mt-2 sm:mt-3 text-3xl sm:text-5xl md:text-6xl text-white leading-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl leading-relaxed text-brand-cream/95">
                {subtitle}
              </p>
            )}
            {ctas}
          </div>
        </div>
      </section>
    );
  }

  // No image: green bg with SVG-circle decoration.
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

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 py-14 sm:py-20 md:py-28">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-brand-tan-light">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-2 sm:mt-3 text-3xl sm:text-5xl md:text-6xl text-white leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-brand-cream/90">
              {subtitle}
            </p>
          )}
          {ctas}
        </div>
      </div>
    </section>
  );
}
