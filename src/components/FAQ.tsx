// Accordion FAQ — uses native <details>/<summary> so it works without JS and
// is fully crawlable by search engines.

export function FAQ({
  items,
  heading,
}: {
  items: { q: string; a: string }[];
  heading?: string;
}) {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      {heading && (
        <>
          <p className="eyebrow text-center">FAQ</p>
          <h2 className="mt-2 text-center text-3xl sm:text-4xl text-brand-green">
            {heading}
          </h2>
        </>
      )}
      <dl className="mt-10 divide-y divide-brand-tan/40 border-y border-brand-tan/40">
        {items.map((item) => (
          <details key={item.q} className="group py-5">
            <summary className="flex cursor-pointer items-start justify-between gap-4 text-left font-semibold text-brand-charcoal hover:text-brand-green">
              <span>{item.q}</span>
              <span className="mt-1 text-brand-green transition-transform group-open:rotate-45">
                <PlusIcon />
              </span>
            </summary>
            <p className="mt-3 pr-6 leading-relaxed text-brand-charcoal/80">
              {item.a}
            </p>
          </details>
        ))}
      </dl>
    </section>
  );
}

function PlusIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}
