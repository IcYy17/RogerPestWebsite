import Image from "next/image";
import Link from "next/link";
import { business } from "@/content/business";
import { MobileMenu } from "./MobileMenu";
import { HeaderNav } from "./HeaderNav";
import { DualPhoneCTA } from "./DualPhoneCTA";

// Sitewide sticky header. Renders the brand mark + utility strip on the
// server; delegates the desktop nav to <HeaderNav /> (a client component
// that reads usePathname() to highlight the active section) and the mobile
// menu to <MobileMenu />.

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-brand-cream/95 backdrop-blur border-b border-brand-tan/30">
      {/* Top utility strip — brand line + hours only. Phone CTAs live in the
          main nav row as side-by-side red buttons. */}
      <div className="bg-brand-green text-brand-cream/90">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-1.5 text-xs">
          <span className="hidden sm:inline">
            Family-Owned · Eureka, MO · Since {business.foundedYear}
          </span>
          <span className="hidden md:inline">{business.hoursDisplay}</span>
          <span className="sm:hidden">
            Family-Owned · Since {business.foundedYear}
          </span>
        </div>
      </div>

      {/* Main nav row */}
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-3">
        <Link
          href="/"
          aria-label="Roger's Termite & Pest Control home"
          className="flex items-center gap-3"
        >
          <Image
            src="/logo.png"
            alt="Roger's Termite & Pest Control logo"
            width={56}
            height={56}
            priority
            className="h-12 w-12 sm:h-14 sm:w-14 object-contain"
          />
          <div className="hidden md:block leading-tight">
            <div className="font-display text-xl text-brand-green">
              Roger&apos;s
            </div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-charcoal">
              Termite &amp; Pest Control
            </div>
          </div>
        </Link>

        <HeaderNav />

        {/* Dual phone CTAs — South + North, side by side, both click-to-call */}
        <DualPhoneCTA className="hidden lg:flex" size="md" />

        <MobileMenu />
      </div>
    </header>
  );
}
