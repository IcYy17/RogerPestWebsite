import type { Testimonial } from "@/content/testimonials";

export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="rounded-lg border border-brand-tan/40 bg-white p-6 flex flex-col">
      <div className="text-brand-tan text-lg tracking-widest" aria-label={`${t.rating} out of 5 stars`}>
        {"★".repeat(t.rating)}
      </div>
      <blockquote className="mt-3 text-sm leading-relaxed text-brand-charcoal/90 flex-1">
        “{t.body}”
      </blockquote>
      <figcaption className="mt-4 text-sm">
        <div className="font-semibold text-brand-green">{t.name}</div>
        <div className="text-xs text-brand-charcoal/70">{t.city}, MO</div>
      </figcaption>
    </figure>
  );
}
