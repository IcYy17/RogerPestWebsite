import { PhoneButton } from "./PhoneButton";
import { business } from "@/content/business";

// The final colored band that appears at the bottom of every major page.
// Reinforces the primary conversion goal: phone call.

export function CTASection({
  title = "Bugs in your house? Let's get them out.",
  subtitle = `Free inspection. Honest quote. ${business.hoursDisplay} or leave a voicemail anytime.`,
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative bg-brand-green text-white">
      {/* subtle house silhouette in the background, echoing the logo */}
      <div className="absolute inset-0 opacity-[0.04]" aria-hidden="true">
        <svg
          className="h-full w-full"
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 200 100"
          fill="currentColor"
        >
          <path d="M0 80 L100 20 L200 80 Z" />
        </svg>
      </div>
      <div className="relative mx-auto max-w-5xl px-5 sm:px-6 py-14 sm:py-20 text-center">
        <h2 className="text-2xl sm:text-4xl md:text-5xl leading-tight">{title}</h2>
        <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-base sm:text-lg text-brand-cream/90">
          {subtitle}
        </p>
        <div className="mt-6 sm:mt-8 flex justify-center">
          <PhoneButton variant="primary" />
        </div>
      </div>
    </section>
  );
}
