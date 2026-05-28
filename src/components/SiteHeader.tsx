import Image from "next/image";
import Link from "next/link";
import { business } from "@/content/business";
import { MobileMenu } from "./MobileMenu";
import { HeaderNav } from "./HeaderNav";

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
        <div className="hidden lg:flex items-center gap-2">
          {business.phones.map((p) => (
            <a
              key={p.href}
              href={p.href}
              aria-label={`Call ${p.label} office at ${p.number}`}
              className="group inline-flex items-center gap-2.5 rounded-full bg-brand-cta hover:bg-brand-cta-hover text-white shadow-md hover:shadow-lg px-4 py-2 transition-all"
            >
              <PhoneIcon />
              <span className="flex flex-col items-start leading-none">
                <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-brand-cream/85">
                  {p.label}
                </span>
                <span className="tnum font-semibold text-sm mt-0.5">
                  {p.number}
                </span>
              </span>
            </a>
          ))}
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 flex-shrink-0"
      aria-hidden="true"
    >
      <path d="M19.5 14.25c-1.5 0-3-.25-4.4-.75-.5-.15-1.05-.05-1.4.35l-1.95 1.95a14.6 14.6 0 0 1-6.55-6.55l1.95-1.95c.4-.35.5-.9.35-1.4-.5-1.4-.75-2.9-.75-4.4 0-.7-.55-1.25-1.25-1.25H3c-.7 0-1.5.3-1.5 1.25 0 9.95 8.05 18 18 18 .9 0 1.25-.75 1.25-1.5v-2.5c0-.7-.55-1.25-1.25-1.25z" />
    </svg>
  );
}
