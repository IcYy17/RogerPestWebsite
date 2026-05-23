// Custom inline SVG pest icons — one per service. Each uses `currentColor`
// for stroke/fill so it inherits the brand palette via Tailwind text-* classes.
// 24×24 viewBox, ~1.5 stroke weight, line-icon aesthetic to match the rest of
// the site (ShieldIcon, ChevronDown, etc.).

type IconProps = {
  className?: string;
};

const base = "block";

export function TermiteIcon({ className = "" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${base} ${className}`}
      aria-hidden="true"
    >
      {/* head */}
      <circle cx="12" cy="5.5" r="1.6" />
      {/* antennae */}
      <path d="M11 4.3 L 9.2 2.6 M 13 4.3 L 14.8 2.6" />
      {/* segmented body */}
      <ellipse cx="12" cy="13.5" rx="3" ry="6" />
      <path d="M9.4 10 H 14.6 M 9.4 13.5 H 14.6 M 9.4 17 H 14.6" />
      {/* left legs */}
      <path d="M9 10.5 L 5.5 9 M 9 13.5 L 5 13.5 M 9 16.5 L 5.5 18" />
      {/* right legs */}
      <path d="M15 10.5 L 18.5 9 M 15 13.5 L 19 13.5 M 15 16.5 L 18.5 18" />
    </svg>
  );
}

export function CockroachIcon({ className = "" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${base} ${className}`}
      aria-hidden="true"
    >
      {/* shell — wider, flatter */}
      <ellipse cx="12" cy="13" rx="5" ry="6.5" />
      {/* center seam (wing case division) */}
      <line x1="12" y1="7" x2="12" y2="19" />
      {/* head */}
      <ellipse cx="12" cy="6.5" rx="2" ry="1.4" />
      {/* antennae — long, forward */}
      <path d="M11 5.5 L 8 2.5 M 13 5.5 L 16 2.5" />
      {/* left legs */}
      <path d="M7.5 10 L 4 8 M 7.2 13 L 3 13.5 M 7.5 16 L 4 18" />
      {/* right legs */}
      <path d="M16.5 10 L 20 8 M 16.8 13 L 21 13.5 M 16.5 16 L 20 18" />
    </svg>
  );
}

export function MouseIcon({ className = "" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${base} ${className}`}
      aria-hidden="true"
    >
      {/* body */}
      <path d="M5 17 C 5 12 9 9 13 9 C 16 9 19 11 19 14 C 19 17 16 18 13 18 L 6 18 C 5.5 18 5 17.6 5 17 Z" />
      {/* ear */}
      <circle cx="11.5" cy="9.5" r="2.2" />
      <circle cx="11.5" cy="9.5" r="0.9" fill="currentColor" stroke="none" />
      {/* eye */}
      <circle cx="15.5" cy="13.5" r="0.7" fill="currentColor" stroke="none" />
      {/* nose */}
      <circle cx="18.6" cy="14.6" r="0.5" fill="currentColor" stroke="none" />
      {/* whiskers */}
      <path d="M18.5 15.5 L 21 16.5 M 18.5 14.2 L 21 13.2" />
      {/* tail */}
      <path d="M5 17.5 Q 2 18, 1.5 15 Q 1.2 13, 3 12" />
    </svg>
  );
}

export function MosquitoIcon({ className = "" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${base} ${className}`}
      aria-hidden="true"
    >
      {/* head */}
      <circle cx="12" cy="8" r="1.6" />
      {/* body — long, narrow */}
      <path d="M12 9.5 L 12 15" />
      {/* proboscis */}
      <line x1="12" y1="6.5" x2="12" y2="2.5" />
      {/* wings — swept upward */}
      <path d="M11 9 Q 4 6, 5 11 Q 8 11, 11 10.5" />
      <path d="M13 9 Q 20 6, 19 11 Q 16 11, 13 10.5" />
      {/* legs */}
      <path d="M11 11 L 7 15 M 11 13 L 6 18 M 11 14 L 8 19" />
      <path d="M13 11 L 17 15 M 13 13 L 18 18 M 13 14 L 16 19" />
    </svg>
  );
}

export function BedBugIcon({ className = "" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${base} ${className}`}
      aria-hidden="true"
    >
      {/* apple-seed body */}
      <path d="M12 6 C 6.5 6 4 10.5 4 13 C 4 15.5 7 18 12 18 C 17 18 20 15.5 20 13 C 20 10.5 17.5 6 12 6 Z" />
      {/* center seam */}
      <line x1="12" y1="6" x2="12" y2="18" />
      {/* horizontal segment lines */}
      <path d="M5 11 H 19 M 5 15 H 19" />
      {/* antennae */}
      <path d="M10 6.5 L 8 4 M 14 6.5 L 16 4" />
      {/* tiny side legs */}
      <path d="M4 11.5 L 2 11 M 4 14.5 L 2 15 M 20 11.5 L 22 11 M 20 14.5 L 22 15" />
    </svg>
  );
}

export function RaccoonIcon({ className = "" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${base} ${className}`}
      aria-hidden="true"
    >
      {/* head shape — slightly wider than tall */}
      <path d="M5 12 C 5 8 8 5 12 5 C 16 5 19 8 19 12 C 19 17 15.5 20 12 20 C 8.5 20 5 17 5 12 Z" />
      {/* ears — pointed triangles */}
      <path d="M6.5 7 L 5 3 L 9 5" />
      <path d="M17.5 7 L 19 3 L 15 5" />
      {/* mask — distinctive raccoon eye band */}
      <path d="M7.5 11 C 9 9.5 10.5 9.5 11 11 C 11.5 9.5 12.5 9.5 13 11 C 13.5 9.5 15 9.5 16.5 11" />
      {/* eyes inside mask */}
      <circle cx="9" cy="11.5" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="15" cy="11.5" r="0.9" fill="currentColor" stroke="none" />
      {/* snout */}
      <path d="M10 14 Q 12 16, 14 14" />
      <circle cx="12" cy="14" r="0.7" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function WaspIcon({ className = "" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${base} ${className}`}
      aria-hidden="true"
    >
      {/* head */}
      <circle cx="12" cy="5.5" r="1.7" />
      {/* antennae */}
      <path d="M11 4.3 L 9 2 M 13 4.3 L 15 2" />
      {/* thin waist */}
      <path d="M11.3 7 L 11.3 9 M 12.7 7 L 12.7 9" />
      {/* abdomen — striped teardrop */}
      <ellipse cx="12" cy="14" rx="3" ry="5" />
      <path d="M9.2 12.5 H 14.8 M 9.2 15.5 H 14.8" />
      {/* stinger */}
      <line x1="12" y1="19" x2="12" y2="21.5" />
      {/* wings */}
      <path d="M10.5 10 Q 4 9, 5 13 Q 8 13, 10.5 12" />
      <path d="M13.5 10 Q 20 9, 19 13 Q 16 13, 13.5 12" />
    </svg>
  );
}

export function BuildingIcon({ className = "" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${base} ${className}`}
      aria-hidden="true"
    >
      {/* main building rectangle */}
      <rect x="4" y="4" width="16" height="17" rx="0.5" />
      {/* ground line accent */}
      <line x1="2.5" y1="21" x2="21.5" y2="21" />
      {/* windows row 1 */}
      <rect x="6.5" y="7" width="2.2" height="2.2" />
      <rect x="10.9" y="7" width="2.2" height="2.2" />
      <rect x="15.3" y="7" width="2.2" height="2.2" />
      {/* windows row 2 */}
      <rect x="6.5" y="11" width="2.2" height="2.2" />
      <rect x="15.3" y="11" width="2.2" height="2.2" />
      {/* door */}
      <rect x="10.5" y="14.5" width="3" height="6.5" />
      <circle cx="12.7" cy="17.8" r="0.3" fill="currentColor" stroke="none" />
    </svg>
  );
}

// Map service slug → icon component. Used on the home page pest strip and
// anywhere else we want service-specific iconography.
export function getPestIcon(slug: string) {
  switch (slug) {
    case "termite-control":
      return TermiteIcon;
    case "general-pest-control":
      return CockroachIcon;
    case "rodent-control":
      return MouseIcon;
    case "mosquito-control":
      return MosquitoIcon;
    case "bed-bug-treatment":
      return BedBugIcon;
    case "wildlife-removal":
      return RaccoonIcon;
    case "stinging-insects":
      return WaspIcon;
    case "commercial-pest":
      return BuildingIcon;
    default:
      return null;
  }
}
