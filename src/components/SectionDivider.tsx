// Double-rule divider — echoes the logo's double-line circle border.

export function SectionDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`my-12 flex justify-center ${className}`} aria-hidden="true">
      <div className="w-32">
        <div className="h-px bg-brand-tan" />
        <div className="mt-1 h-px bg-brand-tan/50" />
      </div>
    </div>
  );
}
