import Link from "next/link";
import Image from "next/image";
import { business } from "@/content/business";
import { services } from "@/content/services";
import { cities } from "@/content/cities";
import { NAPBlock } from "./NAPBlock";

// Sitewide footer. Four columns: NAP/brand, Services (all 8), Cities (all 5),
// Quick links. Repeats all internal links — Whitespark recommends footer
// internal links for crawlability.

export function SiteFooter() {
  return (
    <footer className="bg-brand-green text-brand-cream">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand + NAP */}
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt=""
                width={48}
                height={48}
                className="h-12 w-12 object-contain bg-brand-cream rounded-full p-1"
              />
              <div>
                <div className="font-display text-xl">Roger&apos;s</div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-tan-light">
                  Termite &amp; Pest Control
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-brand-cream/80">
              {business.tagline}
            </p>
            <div className="mt-6">
              <NAPBlock />
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="font-display text-lg text-brand-tan-light">
              Services
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="hover:text-brand-tan-light"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="font-semibold hover:text-brand-tan-light"
                >
                  All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Service Areas */}
          <div>
            <h3 className="font-display text-lg text-brand-tan-light">
              Service Areas
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {cities.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/service-areas/${c.slug}`}
                    className="hover:text-brand-tan-light"
                  >
                    {c.name}, {c.state}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/service-areas"
                  className="font-semibold hover:text-brand-tan-light"
                >
                  All Service Areas →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick links */}
          <div>
            <h3 className="font-display text-lg text-brand-tan-light">
              Roger&apos;s
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-brand-tan-light">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-tan-light">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-tan-light">
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href={business.sameAs.google}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-tan-light"
                >
                  Leave a Google Review
                </a>
              </li>
              <li>
                <a
                  href={business.sameAs.yelp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-tan-light"
                >
                  Yelp
                </a>
              </li>
              <li>
                <a
                  href={business.sameAs.bbb}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-tan-light"
                >
                  Better Business Bureau
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-brand-green-light/30 pt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-xs text-brand-cream/70">
          <div>
            © {new Date().getFullYear()} {business.legalName}. All rights reserved.
          </div>
          <div>
            Family-Owned in Eureka, MO since {business.foundedYear}.
          </div>
        </div>
      </div>
    </footer>
  );
}
