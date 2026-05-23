import Image from "next/image";
import Link from "next/link";
import { business } from "@/content/business";
import { PhoneButton } from "./PhoneButton";
import { MobileMenu } from "./MobileMenu";
import { HeaderNav } from "./HeaderNav";

// Sitewide sticky header. Renders the brand mark + utility strip on the
// server; delegates the desktop nav to <HeaderNav /> (a client component
// that reads usePathname() to highlight the active section) and the mobile
// menu to <MobileMenu />.

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-brand-cream/95 backdrop-blur border-b border-brand-tan/30">
      {/* Top utility strip */}
      <div className="bg-brand-green text-brand-cream/90">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-1.5 text-xs">
          <span className="hidden sm:inline">
            Family-Owned · Eureka, MO · Since {business.foundedYear}
          </span>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">{business.hoursDisplay}</span>
            <a
              href={business.phoneHref}
              className="tnum font-semibold hover:text-brand-tan-light"
            >
              {business.phone}
            </a>
          </div>
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

        <div className="hidden md:block">
          <PhoneButton variant="primary" label="Free Inspection" />
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}
