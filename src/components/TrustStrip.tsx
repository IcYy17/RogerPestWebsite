import { ShieldIcon } from "./ShieldBadge";

const items = [
  "★★★★★ Locally Trusted",
  "Family-Owned Since 1970",
  "Licensed & Insured in Missouri",
];

export function TrustStrip({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) {
  const bg =
    variant === "dark"
      ? "bg-brand-green-dark text-white border-brand-green-light/30"
      : "bg-brand-cream-dark text-brand-charcoal border-brand-tan/40";
  const accent =
    variant === "dark" ? "text-brand-tan-light" : "text-brand-green";

  return (
    <div className={`border-y ${bg}`}>
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-12 gap-y-3 px-6 py-4 text-sm font-semibold">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-2">
            <ShieldIcon className={`h-4 w-4 ${accent}`} />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
