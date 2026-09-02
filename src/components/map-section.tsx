import { MapPin, Navigation } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { business } from "@/data/business";

export function MapSection({ heading = "Find Us in Third Lake" }: { heading?: string }) {
  return (
    <section className="bg-mist py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-red-600">
              Visit Us
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-navy-900 sm:text-4xl">
              {heading}
            </h2>
            <p className="mt-3 flex items-center gap-2 text-ink-700">
              <MapPin className="h-4 w-4 shrink-0 text-red-600" aria-hidden />
              {business.addressLine1}, {business.addressLine2}
            </p>
          </div>
          <Button asChild variant="navy">
            <a
              href={business.mapsDirectionsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <Navigation className="h-4 w-4" aria-hidden />
              Get Directions
            </a>
          </Button>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <div className="overflow-hidden rounded-3xl border border-line shadow-[0_30px_70px_-30px_rgba(6,15,36,0.35)]">
            <iframe
              title={`Map to ${business.name}`}
              src={business.mapsEmbedSrc}
              className="h-[380px] w-full sm:h-[440px] lg:h-[500px]"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
