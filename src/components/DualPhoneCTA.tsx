import { business } from "@/content/business";

// Two side-by-side red phone buttons — South + North.
// Mirrors the header design so visitors see the same dual-CTA pattern
// in the hero on every page (especially important on mobile/tablet,
// where the header's dual buttons are hidden under the hamburger).

export function DualPhoneCTA({
  className = "",
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizing = {
    sm: {
      pad: "px-3 py-2",
      label: "text-[8px]",
      num: "text-xs",
      icon: "h-3.5 w-3.5",
    },
    md: {
      pad: "px-3.5 py-2.5 sm:px-4 sm:py-3",
      label: "text-[9px]",
      num: "text-sm sm:text-base",
      icon: "h-4 w-4",
    },
    lg: {
      pad: "px-4 py-3 sm:px-5 sm:py-3.5",
      label: "text-[10px]",
      num: "text-base sm:text-lg",
      icon: "h-5 w-5",
    },
  }[size];

  return (
    <div className={`flex items-center gap-2 sm:gap-3 ${className}`}>
      {business.phones.map((p) => (
        <a
          key={p.href}
          href={p.href}
          aria-label={`Call ${p.label} office at ${p.number}`}
          className={`group inline-flex flex-1 sm:flex-none items-center justify-center gap-2 sm:gap-2.5 rounded-full bg-brand-cta hover:bg-brand-cta-hover text-white shadow-md hover:shadow-lg transition-all ${sizing.pad}`}
        >
          <PhoneIcon className={sizing.icon} />
          <span className="flex flex-col items-start leading-none">
            <span
              className={`font-bold uppercase tracking-[0.14em] text-brand-cream/85 ${sizing.label}`}
            >
              {p.label}
            </span>
            <span className={`tnum font-semibold mt-0.5 ${sizing.num}`}>
              {p.number}
            </span>
          </span>
        </a>
      ))}
    </div>
  );
}

function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`flex-shrink-0 ${className}`}
      aria-hidden="true"
    >
      <path d="M19.5 14.25c-1.5 0-3-.25-4.4-.75-.5-.15-1.05-.05-1.4.35l-1.95 1.95a14.6 14.6 0 0 1-6.55-6.55l1.95-1.95c.4-.35.5-.9.35-1.4-.5-1.4-.75-2.9-.75-4.4 0-.7-.55-1.25-1.25-1.25H3c-.7 0-1.5.3-1.5 1.25 0 9.95 8.05 18 18 18 .9 0 1.25-.75 1.25-1.5v-2.5c0-.7-.55-1.25-1.25-1.25z" />
    </svg>
  );
}
