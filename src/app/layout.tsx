import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MotionProvider } from "@/components/motion-provider";
import { business, structuredHours } from "@/data/business";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://ballersbarandgrill.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ballers Bar & Grill | Sports Bar & Grill in Third Lake, IL",
    template: "%s | Ballers Bar & Grill",
  },
  description:
    "Ballers Bar & Grill is Third Lake, Illinois' neighborhood sports bar and grill — big-game atmosphere, Angus burgers, wings, and cold drinks. The only timeout you'll ever need.",
  keywords: [
    "sports bar Third Lake IL",
    "Ballers Bar and Grill",
    "restaurant Third Lake Illinois",
    "wings and burgers Third Lake",
    "bar and grill near me",
  ],
  openGraph: {
    title: "Ballers Bar & Grill | Sports Bar & Grill in Third Lake, IL",
    description:
      "Third Lake's neighborhood destination for great food, drinks, friends, and the big game.",
    url: siteUrl,
    siteName: "Ballers Bar & Grill",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BarOrPub",
    name: business.name,
    servesCuisine: "American",
    priceRange: "$$",
    telephone: business.phoneHref.replace("tel:", ""),
    address: {
      "@type": "PostalAddress",
      streetAddress: business.addressLine1,
      addressLocality: business.city,
      addressRegion: business.state,
      postalCode: business.zip,
      addressCountry: "US",
    },
    openingHoursSpecification: structuredHours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.dayOfWeek,
      opens: h.opens,
      closes: h.closes,
    })),
    url: siteUrl,
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${oswald.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-ink-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <MotionProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
