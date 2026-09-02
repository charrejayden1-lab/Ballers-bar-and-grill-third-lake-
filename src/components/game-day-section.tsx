import { Tv, Beer, Users, UtensilsCrossed } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { GameDayTicker } from "@/components/game-day-ticker";

const features = [
  {
    icon: Tv,
    title: "Every Big Game",
    copy: "Multiple screens across the bar so you never miss a snap, a shot, or a save.",
  },
  {
    icon: Beer,
    title: "Cold Drinks",
    copy: "A well-stocked bar ready to pour, whether it's kickoff or last call.",
  },
  {
    icon: UtensilsCrossed,
    title: "Real Kitchen",
    copy: "Angus burgers, jumbo wings, and scratch-made appetizers built for game day.",
  },
  {
    icon: Users,
    title: "Neighborhood Vibe",
    copy: "A welcoming spot in Third Lake to bring the crew and settle in.",
  },
];

export function GameDaySection() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-20 text-white sm:py-28">
      <div className="scorelines pointer-events-none absolute inset-0 opacity-30" />

      <GameDayTicker />

      <div className="relative mx-auto max-w-6xl px-5 pt-16 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-red-400">
            Game-Day Energy
          </p>
          <h2 className="text-balance mt-3 font-display text-3xl font-bold uppercase tracking-tight sm:text-5xl">
            Your Home for Game Day
          </h2>
          <p className="mt-4 text-balance text-white/65">
            Whether it&rsquo;s Sunday football, a weeknight matchup, or just
            another reason to grab a table with friends, Ballers is where
            Third Lake shows up.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.08}>
              <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:bg-white/[0.06]">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-b from-red-500 to-red-700 shadow-[0_6px_16px_-4px_rgba(184,16,43,0.6)]">
                  <f.icon className="h-6 w-6 text-white" aria-hidden />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold uppercase tracking-wide">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {f.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
