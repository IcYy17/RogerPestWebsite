"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { headerServices } from "@/content/services";
import { cities } from "@/content/cities";

// Desktop nav — client component so it can read the current pathname and
// highlight the active section. Active styling: tan-gold underline + brand
// green text. Dropdown parents match on prefix so /services/termite-control
// still highlights "Services".

function isActive(pathname: string, target: string, exact = false) {
  if (exact) return pathname === target;
  if (target === "/") return pathname === "/";
  return pathname === target || pathname.startsWith(`${target}/`);
}

export function HeaderNav() {
  const pathname = usePathname() ?? "/";

  return (
    <nav className="hidden lg:flex items-center gap-1 text-sm font-medium text-brand-charcoal">
      <NavLink href="/" active={isActive(pathname, "/", true)}>
        Home
      </NavLink>

      <NavDropdown
        label="Services"
        indexHref="/services"
        active={isActive(pathname, "/services")}
      >
        {headerServices.map((s) => (
          <DropdownLink
            key={s.slug}
            href={`/services/${s.slug}`}
            active={pathname === `/services/${s.slug}`}
          >
            {s.name}
          </DropdownLink>
        ))}
        <div className="my-1 h-px bg-brand-tan/30" />
        <DropdownLink href="/services" muted active={pathname === "/services"}>
          See all services →
        </DropdownLink>
      </NavDropdown>

      <NavLink href="/about" active={isActive(pathname, "/about")}>
        About
      </NavLink>

      <NavDropdown
        label="Cities Served"
        indexHref="/service-areas"
        active={isActive(pathname, "/service-areas")}
      >
        {cities.map((c) => (
          <DropdownLink
            key={c.slug}
            href={`/service-areas/${c.slug}`}
            active={pathname === `/service-areas/${c.slug}`}
          >
            {c.name}, {c.state}
          </DropdownLink>
        ))}
        <div className="my-1 h-px bg-brand-tan/30" />
        <DropdownLink
          href="/service-areas"
          muted
          active={pathname === "/service-areas"}
        >
          All service areas →
        </DropdownLink>
      </NavDropdown>

      <NavLink href="/blog" active={isActive(pathname, "/blog")}>
        Blog
      </NavLink>

      <NavLink href="/faq" active={isActive(pathname, "/faq")}>
        FAQ
      </NavLink>

      <NavLink href="/contact" active={isActive(pathname, "/contact")}>
        Contact
      </NavLink>
    </nav>
  );
}

function NavLink({
  href,
  children,
  active,
}: {
  href: string;
  children: React.ReactNode;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`relative rounded px-3 py-2 transition-colors ${
        active
          ? "text-brand-green font-semibold"
          : "hover:text-brand-green hover:bg-brand-tan/10"
      }`}
    >
      {children}
      {active && (
        <span
          aria-hidden="true"
          className="absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full bg-brand-tan"
        />
      )}
    </Link>
  );
}

function NavDropdown({
  label,
  indexHref,
  active,
  children,
}: {
  label: string;
  indexHref: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="group relative">
      <Link
        href={indexHref}
        aria-current={active ? "page" : undefined}
        className={`relative flex items-center gap-1 rounded px-3 py-2 transition-colors ${
          active
            ? "text-brand-green font-semibold"
            : "hover:text-brand-green hover:bg-brand-tan/10"
        }`}
      >
        {label}
        <ChevronDown />
        {active && (
          <span
            aria-hidden="true"
            className="absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full bg-brand-tan"
          />
        )}
      </Link>
      <div className="invisible absolute left-0 top-full pt-1 opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity">
        <div className="min-w-[220px] rounded-md border border-brand-tan/30 bg-white shadow-lg p-2">
          {children}
        </div>
      </div>
    </div>
  );
}

function DropdownLink({
  href,
  children,
  muted = false,
  active = false,
}: {
  href: string;
  children: React.ReactNode;
  muted?: boolean;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`block rounded px-3 py-2 text-sm transition-colors ${
        active
          ? "bg-brand-tan/15 text-brand-green font-semibold"
          : `hover:bg-brand-tan/10 hover:text-brand-green ${
              muted ? "text-brand-charcoal/70" : "text-brand-charcoal"
            }`
      }`}
    >
      {children}
    </Link>
  );
}

function ChevronDown() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-3 w-3 opacity-70"
      aria-hidden="true"
    >
      <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.25 4.39a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" />
    </svg>
  );
}
