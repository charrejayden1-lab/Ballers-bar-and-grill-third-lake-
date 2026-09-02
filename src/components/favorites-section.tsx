import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { CoverflowCarousel } from "@/components/coverflow-carousel";

export function FavoritesSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal delay={0.1}>
          <CoverflowCarousel />
        </Reveal>

        <Reveal className="mx-auto mt-14 max-w-2xl text-center">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-red-600">
            From the Kitchen
          </p>
          <h2 className="text-balance mt-3 font-display text-3xl font-bold uppercase tracking-tight text-navy-900 sm:text-5xl">
            Game Day Favorites
          </h2>
          <p className="mt-4 text-balance text-ink-500">
            Swipe, drag, or click through a taste of what&rsquo;s cooking.
            Every dish below is on our full menu.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-14 flex justify-center">
          <Button asChild variant="navy" size="lg">
            <Link href="/menu">View Full Menu</Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
