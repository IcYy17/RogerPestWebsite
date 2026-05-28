import type { Metadata } from "next";
import Image from "next/image";
import { Hero } from "@/components/Hero";
import { CTASection } from "@/components/CTASection";
import { SectionDivider } from "@/components/SectionDivider";
import { ShieldIcon } from "@/components/ShieldBadge";
import { TrustStrip } from "@/components/TrustStrip";
import { business } from "@/content/business";
import { images } from "@/content/images";

export const metadata: Metadata = {
  title: "About Roger's Termite & Pest Control",
  description: `Roger's Termite & Pest Control is a family-owned pest control company based in Eureka, MO, serving St. Louis County since ${business.foundedYear}.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About Us"
        title={`Family-owned in Eureka, MO since ${business.foundedYear}.`}
        subtitle={`Three generations of one family. ${business.yearsInBusiness} years on the same streets, in the same crawl spaces, talking to the same kinds of customers.`}
        image={images.aboutFamily}
      />

      <TrustStrip variant="light" />

      {/* Story */}
      <section className="mx-auto max-w-5xl px-6 py-12 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-5 items-start">
          <div className="lg:col-span-2 lg:sticky lg:top-32">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden ring-1 ring-brand-tan/40">
              <Image
                src={images.aboutAerial.src}
                alt={images.aboutAerial.alt}
                fill
                sizes="(max-width:1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-3">
            <p className="eyebrow">Our story</p>
        <h2 className="mt-2 text-3xl sm:text-4xl text-brand-green">
          The same family. The same town. Since {business.foundedYear}.
        </h2>
        <div className="mt-8 space-y-5 text-base leading-relaxed text-brand-charcoal/90">
          <p>
            Roger&apos;s Termite &amp; Pest Control started in Eureka in {business.foundedYear},
            and we&apos;ve been here ever since. Three generations of the same family
            have run this business — through booms, busts, the rise of
            chain pest control franchises, and the slow change of the towns
            around us. We&apos;ve outlasted most of them. The reason is simple:
            we treat customers the way we&apos;d want to be treated.
          </p>
          <p>
            We&apos;re a small company by design. We don&apos;t want to be everywhere
            — we want to be the best option in this part of Missouri. That
            means knowing the houses, knowing the pest pressure, and knowing
            the people. The same tech comes back to your house year after
            year. You learn his name. He learns your dog&apos;s name. That
            doesn&apos;t happen when a national company rotates new hires
            through your address every six months.
          </p>
          <p>
            We&apos;ll never high-pressure you into a contract. We&apos;ll
            never sell you something you don&apos;t need. If we can&apos;t
            help you, we&apos;ll tell you straight and point you to someone
            who can. Sometimes that&apos;s a moisture contractor, sometimes
            it&apos;s a roofer, sometimes it&apos;s a beekeeper. That&apos;s
            the kind of business we want to be — and we&apos;ve done okay
            running it that way for {business.yearsInBusiness} years now.
          </p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Credentials */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-12 sm:py-20">
          <div className="text-center">
            <p className="eyebrow">Credentials</p>
            <h2 className="mt-2 text-3xl sm:text-4xl text-brand-green">
              Licensed. Insured. Local. Accountable.
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Credential
              title="Missouri Pest Control License"
              body="Licensed by the Missouri Department of Agriculture (license # — confirm before launch). All technicians certified in their categories."
            />
            <Credential
              title="Fully Insured"
              body="General liability and workers' compensation coverage. Certificate available on request — we'll send it before any work begins."
            />
            <Credential
              title="BBB Accredited"
              body="Listed and reviewed with the Better Business Bureau. We resolve every complaint on the merits, not on PR."
            />
            <Credential
              title="MPMA Member"
              body="Member of the Missouri Pest Management Association — ongoing training, industry standards, and code of ethics."
            />
          </div>
          <p className="mt-8 text-center text-xs text-brand-charcoal/60 italic">
            Sample credentials shown — Roger&apos;s actual license #, BBB rating, and association memberships will be confirmed at launch.
          </p>
        </div>
      </section>

      {/* Meet Roger */}
      <section className="mx-auto max-w-6xl px-6 py-12 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-5 items-center">
          <div className="lg:col-span-2 relative aspect-square rounded-lg overflow-hidden ring-1 ring-brand-tan/40 shadow-lg">
            <Image
              src={images.rogerPortrait.src}
              alt={images.rogerPortrait.alt}
              fill
              sizes="(max-width:1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
          <div className="lg:col-span-3">
            <p className="eyebrow">Meet Roger</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl text-brand-green">
              The Roger in Roger&apos;s Termite &amp; Pest Control.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-brand-charcoal/90">
              <p>
                Roger has been running this business out of Eureka his whole
                working life. He answers the phone himself most mornings,
                drives to most of the inspections himself, and remembers
                the names of customers from decades ago — because he&apos;s
                been treating their houses, and then their kids&apos; houses,
                ever since.
              </p>
              <p>
                Pest control isn&apos;t a job Roger took because he needed
                one. It&apos;s the family trade — handed down, refined
                over three generations, and stubbornly kept local. The
                things he insists on (no contracts, no high-pressure
                sales, the same tech on the same route year after year,
                free inspections in 63025 with no travel charge) are
                things his dad insisted on too.
              </p>
              <p>
                When he isn&apos;t crawling a basement looking for termite
                tubes, you&apos;ll usually find Roger somewhere around
                Eureka — at a kid&apos;s ballgame, helping a neighbor
                with something, or having coffee with people he&apos;s
                known since high school. This town raised the business,
                and the business stayed.
              </p>
            </div>
            <p className="mt-6 text-xs text-brand-charcoal/60 italic">
              Roger to personalize this section with his own words before launch.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Community */}
      <section className="bg-brand-cream-dark">
        <div className="mx-auto max-w-3xl px-6 py-12 sm:py-20">
          <p className="eyebrow text-center">In the community</p>
          <h2 className="mt-2 text-center text-3xl sm:text-4xl text-brand-green">
            Eureka&apos;s our home, too.
          </h2>
          <p className="mt-6 text-center text-brand-charcoal/90 leading-relaxed">
            Roger&apos;s has been part of Eureka and the surrounding
            communities for over five decades. We sponsor local
            youth sports, support neighborhood schools, and partner with
            other small businesses around town. We&apos;ll list specific
            community involvement here once Roger confirms the current
            details before launch.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}

function Credential({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-lg border border-brand-tan/40 bg-brand-cream p-6">
      <ShieldIcon className="h-6 w-6 text-brand-green" />
      <h3 className="mt-3 font-display text-lg text-brand-green">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-brand-charcoal/80">
        {body}
      </p>
    </div>
  );
}
