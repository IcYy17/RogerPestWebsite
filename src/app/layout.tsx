import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { JsonLd } from "@/components/JsonLd";
import { localBusinessSchema } from "@/lib/jsonld";
import { business } from "@/content/business";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title: {
    default: "Pest Control Eureka, MO | Roger's Termite & Pest Control",
    template: "%s | Roger's Termite & Pest Control",
  },
  description:
    "Family-owned pest control in Eureka, MO since 1970. Termite, ant, rodent, mosquito, and bed bug treatment in St. Louis County. Free inspections. Call (573) 883-0863.",
  keywords: [
    "pest control Eureka MO",
    "termite control Missouri",
    "exterminator Eureka",
    "St. Louis County pest control",
    "Roger's Pest Control",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: business.siteUrl,
    siteName: business.name,
    title: "Pest Control Eureka, MO | Roger's Termite & Pest Control",
    description:
      "Family-owned pest control in Eureka, MO since 1970. Termite, ant, rodent, mosquito, and bed bug treatment.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pest Control Eureka, MO | Roger's Termite & Pest Control",
    description:
      "Family-owned pest control in Eureka, MO since 1970. Free inspections. Honest quotes.",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-brand-cream text-brand-charcoal">
        <JsonLd data={localBusinessSchema()} />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
