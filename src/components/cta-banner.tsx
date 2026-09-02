import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { OrderOnlineModal } from "@/components/order-online-modal";

export function CtaBanner({
  eyebrow = "Ready When You Are",
  heading = "Kickoff Starts With a Seat at Ballers.",
  copy = "Grab a table for the game or order Ballers straight to your door.",
}: {
  eyebrow?: string;
  heading?: string;
  copy?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-red-600 to-red-700 py-16 text-white sm:py-20">
      <div className="scorelines pointer-events-none absolute inset-0 opacity-20" />
      <Reveal className="relative mx-auto flex max-w-4xl flex-col items-center gap-6 px-5 text-center sm:px-8">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
          {eyebrow}
        </p>
        <h2 className="text-balance font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">
          {heading}
        </h2>
        <p className="max-w-xl text-white/85">{copy}</p>
        <div className="mt-2 flex flex-col gap-4 sm:flex-row">
          <Button asChild variant="white" size="lg">
            <Link href="/menu">View Menu</Link>
          </Button>
          <OrderOnlineModal>
            <Button variant="navy" size="lg">
              Order Online
            </Button>
          </OrderOnlineModal>
        </div>
      </Reveal>
    </section>
  );
}
