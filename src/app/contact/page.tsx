import type { Metadata } from "next";
import { Phone, MapPin, Navigation, Clock } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { OrderOnlineModal } from "@/components/order-online-modal";
import { MapSection } from "@/components/map-section";
import { business, hours } from "@/data/business";

export const metadata: Metadata = {
  title: "Contact & Hours | Ballers Bar & Grill",
  description:
    "Visit Ballers Bar & Grill at 34500 US-45 Suite A, Third Lake, IL 60030. Call (224) 541-4059, get directions, see hours, or order online.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-navy-900 to-navy-950 py-20 text-white sm:py-24">
        <div className="scorelines pointer-events-none absolute inset-0 opacity-30" />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-red-400">
              Visit Us
            </p>
            <h1 className="text-balance mt-3 font-display text-4xl font-bold uppercase tracking-tight sm:text-5xl">
              {business.name}
            </h1>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
            <Reveal>
              <InfoCard
                icon={<MapPin className="h-6 w-6 text-white" aria-hidden />}
                title="Address"
              >
                <p>{business.addressLine1}</p>
                <p>{business.addressLine2}</p>
                <Button asChild variant="outlineLight" size="sm" className="mt-5">
                  <a
                    href={business.mapsDirectionsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <Navigation className="h-3.5 w-3.5" aria-hidden />
                    Get Directions
                  </a>
                </Button>
              </InfoCard>
            </Reveal>

            <Reveal delay={0.08}>
              <InfoCard
                icon={<Phone className="h-6 w-6 text-white" aria-hidden />}
                title="Phone"
              >
                <a
                  href={business.phoneHref}
                  className="text-lg font-semibold text-white transition-colors hover:text-red-400"
                >
                  {business.phoneDisplay}
                </a>
                <Button asChild variant="outlineLight" size="sm" className="mt-5">
                  <a href={business.phoneHref} className="inline-flex items-center gap-2">
                    <Phone className="h-3.5 w-3.5" aria-hidden />
                    Call Now
                  </a>
                </Button>
              </InfoCard>
            </Reveal>

            <Reveal delay={0.16}>
              <InfoCard
                icon={<Clock className="h-6 w-6 text-white" aria-hidden />}
                title="Hours"
              >
                <ul className="flex flex-col gap-1 text-sm">
                  {hours.map((h) => (
                    <li key={h.day} className="flex justify-between gap-6">
                      <span className="text-white/55">{h.day}</span>
                      <span className={h.hours === "Closed" ? "text-white/40" : "text-white/90"}>
                        {h.hours}
                      </span>
                    </li>
                  ))}
                </ul>
              </InfoCard>
            </Reveal>
          </div>

          <Reveal delay={0.24} className="mt-12 flex justify-center">
            <OrderOnlineModal>
              <Button variant="primary" size="lg">
                Order Online
              </Button>
            </OrderOnlineModal>
          </Reveal>
        </div>
      </section>

      <MapSection heading="Right on US-45 in Third Lake" />
    </>
  );
}

function InfoCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-7">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-b from-red-500 to-red-700 shadow-[0_6px_16px_-4px_rgba(184,16,43,0.6)]">
        {icon}
      </span>
      <h2 className="mt-5 font-display text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
        {title}
      </h2>
      <div className="mt-3 text-white/85">{children}</div>
    </div>
  );
}
