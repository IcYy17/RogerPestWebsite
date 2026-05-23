// Shield outline echoing the logo's central shield motif.
// Used for trust badges, service-card accents, and CTA framing.

export function ShieldBadge({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative inline-flex items-center justify-center px-4 py-2 ${className}`}
    >
      <ShieldOutlineSVG />
      <span className="relative z-10 text-sm font-semibold text-brand-green">
        {children}
      </span>
    </div>
  );
}

function ShieldOutlineSVG() {
  // Soft shield silhouette behind the badge content
  return (
    <svg
      className="absolute inset-0 h-full w-full text-brand-tan/40"
      viewBox="0 0 100 50"
      preserveAspectRatio="none"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M5 5 H95 V35 Q95 45 50 48 Q5 45 5 35 Z" />
    </svg>
  );
}

// Standalone shield icon (filled outline) for inline use
export function ShieldIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2 L4 5 V11 C4 16 7 19 12 22 C17 19 20 16 20 11 V5 Z" />
    </svg>
  );
}
