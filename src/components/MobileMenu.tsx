"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { business } from "@/content/business";
import { headerServices } from "@/content/services";
import { cities } from "@/content/cities";

// Mobile hamburger menu. The panel is `absolute top-full` relative to the
// sticky <header> in SiteHeader.tsx — so it always sits flush against the
// actual bottom of the header regardless of header height. A backdrop
// behind the panel closes the menu on tap, and we lock body scroll while
// it's open so the page behind doesn't drift.

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() ?? "/";
  const isActive = (target: string, exact = false) => {
    if (exact) return pathname === target;
    if (target === "/") return pathname === "/";
    return pathname === target || pathname.startsWith(`${target}/`);
  };

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Body scroll lock when open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label="Toggle menu"
        className="relative z-50 rounded p-2 text-brand-charcoal hover:bg-brand-tan/10"
      >
        {open ? <CloseIcon /> : <MenuIcon />}
      </button>

      {open && (
        <>
          {/* Tappable backdrop — covers the rest of the viewport below the header */}
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="absolute inset-x-0 top-full h-screen z-30 bg-brand-charcoal/40 cursor-default"
          />
          {/* Panel — absolute relative to the sticky header. `top-full` places
              the top at the bottom of the header; `max-h-[calc(100vh-100%)]`
              uses `100%` (which, for an absolute child, refers to the
              containing block / header height) to compute the remaining
              viewport space exactly — so the panel never overflows the
              viewport regardless of how tall the header is. */}
          <div
            className="absolute inset-x-0 top-full max-h-[calc(100vh-100%)] overflow-y-auto overscroll-contain z-40 bg-brand-cream border-t border-brand-tan/30 px-6 py-6 pb-8 shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
          >
            <nav className="space-y-1 text-base">
            <MobileLink
              href="/"
              onClick={() => setOpen(false)}
              active={isActive("/", true)}
            >
              Home
            </MobileLink>

            <MobileSection
              title="Services"
              indexHref="/services"
              onClose={() => setOpen(false)}
              active={isActive("/services")}
            >
              {headerServices.map((s) => (
                <MobileLink
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  onClick={() => setOpen(false)}
                  indent
                  active={pathname === `/services/${s.slug}`}
                >
                  {s.name}
                </MobileLink>
              ))}
              <MobileLink
                href="/services"
                onClick={() => setOpen(false)}
                indent
                muted
                active={pathname === "/services"}
              >
                See all services →
              </MobileLink>
            </MobileSection>

            <MobileLink
              href="/about"
              onClick={() => setOpen(false)}
              active={isActive("/about")}
            >
              About
            </MobileLink>

            <MobileSection
              title="Cities Served"
              indexHref="/service-areas"
              onClose={() => setOpen(false)}
              active={isActive("/service-areas")}
            >
              {cities.map((c) => (
                <MobileLink
                  key={c.slug}
                  href={`/service-areas/${c.slug}`}
                  onClick={() => setOpen(false)}
                  indent
                  active={pathname === `/service-areas/${c.slug}`}
                >
                  {c.name}, {c.state}
                </MobileLink>
              ))}
              <MobileLink
                href="/service-areas"
                onClick={() => setOpen(false)}
                indent
                muted
                active={pathname === "/service-areas"}
              >
                All service areas →
              </MobileLink>
            </MobileSection>

            <MobileLink
              href="/contact"
              onClick={() => setOpen(false)}
              active={isActive("/contact")}
            >
              Contact
            </MobileLink>
          </nav>

          <div className="mt-8 grid grid-cols-2 gap-2">
            {business.phones.map((p) => (
              <a
                key={p.href}
                href={p.href}
                aria-label={`Call ${p.label} office at ${p.number}`}
                className="flex flex-col items-center justify-center rounded-full bg-brand-cta hover:bg-brand-cta-hover text-white px-4 py-3"
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-cream/85 leading-none">
                  {p.label}
                </span>
                <span className="tnum font-semibold text-sm mt-1">
                  {p.number}
                </span>
              </a>
            ))}
          </div>
        </div>
        </>
      )}
    </div>
  );
}

function MobileLink({
  href,
  children,
  onClick,
  indent = false,
  muted = false,
  active = false,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  indent?: boolean;
  muted?: boolean;
  active?: boolean;
}) {
  const baseColor = muted ? "text-brand-charcoal/70" : "text-brand-charcoal";
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={`block rounded py-2.5 transition-colors ${
        indent ? "pl-6 text-sm" : "px-3 font-semibold"
      } ${
        active
          ? "bg-brand-tan/15 text-brand-green border-l-2 border-brand-tan"
          : `${baseColor} hover:bg-brand-tan/10 hover:text-brand-green`
      }`}
    >
      {children}
    </Link>
  );
}

function MobileSection({
  title,
  indexHref,
  onClose,
  children,
  active = false,
}: {
  title: string;
  indexHref: string;
  onClose: () => void;
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <div>
      <Link
        href={indexHref}
        onClick={onClose}
        aria-current={active ? "page" : undefined}
        className={`block px-3 py-2.5 font-semibold transition-colors ${
          active
            ? "bg-brand-tan/15 text-brand-green border-l-2 border-brand-tan rounded"
            : "hover:bg-brand-tan/10 hover:text-brand-green"
        }`}
      >
        {title}
      </Link>
      <div className="ml-2 border-l border-brand-tan/30">{children}</div>
    </div>
  );
}

function MenuIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
