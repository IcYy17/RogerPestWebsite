import { business } from "@/content/business";

// Embedded map of Roger's office in Eureka, MO. Uses Google Maps embed
// without an API key (limited but free, no JS, fast).

export function MapEmbed({ className = "" }: { className?: string }) {
  const q = encodeURIComponent(business.address.full);
  return (
    <div className={`overflow-hidden rounded-lg border border-brand-tan/40 ${className}`}>
      <iframe
        title={`Map of ${business.name}`}
        src={`https://maps.google.com/maps?q=${q}&t=&z=12&ie=UTF8&iwloc=&output=embed`}
        width="100%"
        height="100%"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-full min-h-[300px] w-full"
        style={{ border: 0 }}
        allowFullScreen
      />
    </div>
  );
}
