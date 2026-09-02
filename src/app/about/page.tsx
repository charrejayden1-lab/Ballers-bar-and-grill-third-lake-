import type { Metadata } from "next";
import Link from "next/link";
import { Trophy, Beef, Users2, Tv2 } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { OrderOnlineModal } from "@/components/order-online-modal";
import { CtaBanner } from "@/components/cta-banner";

export const metadata: Metadata = {
  title: "About | Ballers Bar & Grill",
  description:
    "Ballers Bar & Grill is a welcoming neighborhood sports bar in Third Lake, IL, built around great food, cold drinks, and game-day atmosphere.",
  alternates: { canonical: "/about" },
};

const pillars = [
  {
    icon: Beef,
    title: "Food Worth the Trip",
    copy: "Half-pound Angus burgers, jumbo wings, hand-breaded tenders, and scratch-made appetizers — food built for a table full of friends.",
  },
  {
    icon: Tv2,
    title: "Built for Game Day",
    copy: "Screens throughout the bar keep every game in view, so whether it's a Sunday showdown or a weeknight matchup, you've got a seat for it.",
  },
  {
    icon: Users2,
    title: "A Neighborhood Spot",
    copy: "Third Lake is our home base. We built Ballers to be the place locals come back to — regulars, families, and the after-work crew alike.",
  },
  {
    icon: Trophy,
    title: "Hospitality First",
    copy: "Friendly, attentive service is non-negotiable. We want every visit to feel like you're pulling up to your own home field.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-navy-900 to-navy-950 py-20 text-white sm:py-28">
        <div className="scorelines pointer-events-none absolute inset-0 opacity-30" />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center px-5 text-center sm:px-8">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-red-400">
            About Ballers
          </p>
          <h1 className="text-balance mt-3 font-display text-4xl font-bold uppercase tracking-tight sm:text-5xl">
            Third Lake&rsquo;s Neighborhood Sports Bar
          </h1>
          <p className="mt-5 max-w-xl text-balance text-white/70">
            Ballers Bar &amp; Grill is a lively sports bar and grill at 34500
            US-45 in Third Lake — a place built around great food, cold
            drinks, and good company on game day and every day in between.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-navy-900 sm:text-4xl">
              Great Food, Great Games, Great Company
            </h2>
            <p className="mt-5 leading-relaxed text-ink-500">
              We keep it simple: cook food people actually crave, pour drinks
              generously, and make sure there&rsquo;s always a good game on
              screen. From half-pound Angus burgers to jumbo wings tossed in
              your sauce of choice, the kitchen is built around the
              favorites that keep tables full and regulars coming back.
            </p>
            <p className="mt-4 leading-relaxed text-ink-500">
              Ballers is a neighborhood place first. Whether you&rsquo;re
              stopping in after work, gathering the crew for kickoff, or
              bringing the family for dinner, the goal is the same — good
              food, a welcoming room, and a reason to stick around for one
              more quarter.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-mist py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="flex h-full gap-5 rounded-2xl border border-line bg-white p-7 shadow-[0_20px_45px_-30px_rgba(6,15,36,0.35)]">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-navy-600 to-navy-900 shadow-[0_6px_16px_-4px_rgba(10,26,61,0.55)]">
                    <p.icon className="h-6 w-6 text-white" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold uppercase tracking-wide text-navy-900">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-500">
                      {p.copy}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-14 flex flex-col items-center gap-4 text-center">
            <p className="max-w-lg text-ink-500">
              Come see why Third Lake calls Ballers its home field.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild variant="outlineDark" size="lg">
                <Link href="/menu">View Menu</Link>
              </Button>
              <OrderOnlineModal>
                <Button variant="primary" size="lg">
                  Order Online
                </Button>
              </OrderOnlineModal>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner
        eyebrow="Third Lake, Illinois"
        heading="Pull Up a Seat at Ballers."
        copy="34500 US-45 Suite A, Third Lake, IL — open every day but Monday."
      />
    </>
  );
}
