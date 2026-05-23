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
      <div className="mt-2">
        <a
          href={business.phoneHref}
          itemProp="telephone"
          className="tnum font-semibold hover:text-brand-tan-light"
        >
          {business.phone}
        </a>
      </div>
      <div className="mt-1 text-xs opacity-80">{business.hoursDisplay}</div>
    </address>
  );
}
