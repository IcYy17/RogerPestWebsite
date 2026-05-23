import Link from "next/link";
import { PhoneButton } from "@/components/PhoneButton";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-32 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-2 text-4xl sm:text-5xl text-brand-green">
        Page not found.
      </h1>
      <p className="mt-4 text-brand-charcoal/80">
        That page isn&apos;t here. But we&apos;re still here, and we can still
        help.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <PhoneButton variant="primary" />
        <Link
          href="/"
          className="inline-flex items-center rounded-full border border-brand-green/40 px-6 py-3 font-semibold text-brand-green hover:bg-brand-green hover:text-white transition-colors"
        >
          Back home
        </Link>
      </div>
    </section>
  );
}
