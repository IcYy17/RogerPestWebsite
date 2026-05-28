import { business } from "@/content/business";

// Canonical Name + Address + Phone block. Used in footer, contact page, and
// city pages. Marked with schema.org microdata for search engines.

export function NAPBlock({
  heading = "Roger's Termite & Pest Control",
  className = "",
}: {
  heading?: string;
  className?: string;
}) {
  return (
    <address
      className={`not-italic text-sm leading-relaxed ${className}`}
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      <h3 className="font-display text-lg text-brand-cream mb-2" itemProp="name">
        {heading}
      </h3>
      <div
        itemProp="address"
        itemScope
        itemType="https://schema.org/PostalAddress"
        className="space-y-0.5"
      >
        <div itemProp="streetAddress">{business.address.street}</div>
        <div>
          <span itemProp="addressLocality">{business.address.city}</span>,{" "}
          <span itemProp="addressRegion">{business.address.state}</span>{" "}
          <span itemProp="postalCode">{business.address.zip}</span>
        </div>
      </div>
      <ul className="mt-3 space-y-1">
        {business.phones.map((p, i) => (
          <li key={p.href} className="flex items-baseline gap-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-tan-light w-12 flex-shrink-0">
              {p.label}
            </span>
            <a
              href={p.href}
              // itemProp="telephone" only on the canonical NAP number (South)
              // so structured-data tools see exactly one primary phone.
              {...(i === 0 ? { itemProp: "telephone" } : {})}
              className="tnum font-semibold hover:text-brand-tan-light"
            >
              {p.number}
            </a>
          </li>
        ))}
      </ul>
      <div className="mt-3 text-xs opacity-80">{business.hoursDisplay}</div>
    </address>
  );
}
