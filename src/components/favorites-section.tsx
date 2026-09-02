import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { CoverflowCarousel } from "@/components/coverflow-carousel";

export function FavoritesSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-800 via-navy-700 to-navy-600 py-20 sm:py-28">
      <div
        className="pointer-events-none absolute left-1/2 top-[58%] h-[600px] w-[950px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/40 blur-[150px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-[460px] w-[460px] rounded-full bg-red-500/25 blur-[130px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-32 bottom-0 h-[420px] w-[420px] rounded-full bg-navy-500/35 blur-[130px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-red-400">
            From the Kitchen
          </p>
          <h2 className="text-balance mt-3 font-display text-3xl font-bold uppercase tracking-tight text-white sm:text-5xl">
            Game Day Favorites
          </h2>
          <p className="mt-4 text-balance text-white/65">
            Swipe, drag, or click through a taste of what&rsquo;s cooking.
            Every dish below is on our full menu.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <CoverflowCarousel />
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
