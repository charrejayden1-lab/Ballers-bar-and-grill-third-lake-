import type { Metadata } from "next";
import Image from "next/image";

import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { OrderOnlineModal } from "@/components/order-online-modal";
import { MenuAccordion } from "@/components/menu-accordion";
import { CtaBanner } from "@/components/cta-banner";

export const metadata: Metadata = {
  title: "Menu | Ballers Bar & Grill",
  description:
    "Explore the full Ballers Bar & Grill menu in Third Lake, IL — appetizers, wings, salads, sandwiches, wraps, Angus burgers, flatbread pizzas, sides, kids' menu, desserts, and drinks.",
  alternates: { canonical: "/menu" },
};

export default function MenuPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-navy-900 to-navy-950 py-16 text-white sm:py-20">
        <div className="scorelines pointer-events-none absolute inset-0 opacity-30" />
        <div className="relative mx-auto flex max-w-4xl flex-col items-center px-5 text-center sm:px-8">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-red-400">
            Full Menu
          </p>
          <h1 className="text-balance mt-3 font-display text-4xl font-bold uppercase tracking-tight sm:text-5xl">
            Everything on the Menu
          </h1>
          <p className="mt-4 max-w-xl text-white/70">
            Tap a category to open it up. Prices and substitutions are
            listed with every item.
          </p>
          <div className="mt-8">
            <OrderOnlineModal>
              <Button variant="primary" size="lg">
                Order Online
              </Button>
            </OrderOnlineModal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0">
          <Image
            src="/menu/bar-interior.webp"
            alt="Inside the Ballers Bar & Grill bar area"
            fill
            sizes="100vw"
            quality={85}
            className="object-cover object-center"
          />
        </div>
        {/* Layered Ballers blue/red wash: deep blue dominant, a red glow
            from the opposite corner, and a soft dark scrim so the photo
            stays visible while still giving the menu cards contrast. */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-navy-950/88 via-navy-900/55 to-navy-950/85" />
        <div
          className="pointer-events-none absolute -left-32 -top-24 h-[520px] w-[520px] rounded-full bg-navy-500/35 blur-[150px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-24 -right-32 h-[560px] w-[560px] rounded-full bg-red-600/30 blur-[150px]"
          aria-hidden
        />

        <div className="relative mx-auto max-w-4xl px-5 sm:px-8">
          <Reveal>
            <MenuAccordion />
          </Reveal>
        </div>
      </section>

      <CtaBanner
        eyebrow="Hungry Yet?"
        heading="Order Ballers For Pickup or Delivery."
        copy="Skip the wait — get your favorites sent straight to your door or ready when you arrive."
      />
    </>
  );
}
