import { business } from "@/content/business";

type Variant = "primary" | "ghost" | "compact";

export function PhoneButton({
  variant = "primary",
  className = "",
  label,
}: {
  variant?: Variant;
  className?: string;
  label?: string;
}) {
  const styles: Record<Variant, string> = {
    primary:
      "inline-flex items-center justify-center gap-2 rounded-full bg-brand-cta hover:bg-brand-cta-hover text-white font-semibold px-6 py-3 text-base shadow-md transition-colors",
    ghost:
      "inline-flex items-center justify-center gap-2 rounded-full border border-white/40 text-white hover:bg-white/10 px-5 py-2 text-sm transition-colors",
    compact:
      "inline-flex items-center gap-2 text-brand-cta hover:text-brand-cta-hover font-semibold text-sm",
  };
  return (
    <a href={business.phoneHref} className={`${styles[variant]} ${className}`}>
      <PhoneIcon />
      <span className="tnum">{label ?? `Call ${business.phone}`}</span>
    </a>
  );
}

function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M19.5 14.25c-1.5 0-3-.25-4.4-.75-.5-.15-1.05-.05-1.4.35l-1.95 1.95a14.6 14.6 0 0 1-6.55-6.55l1.95-1.95c.4-.35.5-.9.35-1.4-.5-1.4-.75-2.9-.75-4.4 0-.7-.55-1.25-1.25-1.25H3c-.7 0-1.5.3-1.5 1.25 0 9.95 8.05 18 18 18 .9 0 1.25-.75 1.25-1.5v-2.5c0-.7-.55-1.25-1.25-1.25z" />
    </svg>
  );
}
