"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { OrderOnlineModal } from "@/components/order-online-modal";
import { business } from "@/data/business";

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_OUT } },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950 text-white">
      <div className="absolute inset-0">
        <Image
          src="/hero/bar-interior.webp"
          alt="Inside the Ballers Bar & Grill bar area"
          fill
          priority
          sizes="100vw"
          quality={85}
          className="object-cover object-[center_40%]"
        />
      </div>
      {/* Left-to-right readability gradient: strong behind the text on the
          left, fading out toward the right so the photo shows through. */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy-950/92 via-navy-950/70 to-navy-950/25" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-navy-950/30" />
      <div className="scorelines pointer-events-none absolute inset-0 opacity-40" />
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-red-600/25 blur-[120px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-32 bottom-0 h-[420px] w-[420px] rounded-full bg-navy-500/30 blur-[110px]"
        aria-hidden
      />

      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="relative mx-auto flex max-w-6xl flex-col items-start px-5 pb-24 pt-20 text-left sm:px-8 sm:pb-28 sm:pt-24 lg:pt-28"
      >
        <motion.span
          variants={item}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-display text-xs font-semibold uppercase tracking-[0.28em] text-red-400"
        >
          Third Lake&rsquo;s Home Field
        </motion.span>

        <motion.h1
          variants={item}
          className="text-balance mt-7 max-w-4xl font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
        >
          The Only Timeout
          <br className="hidden sm:block" /> You&rsquo;ll Ever Need.
        </motion.h1>

        <motion.p
          variants={item}
          className="text-balance mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg"
        >
          Big games, cold drinks, and Angus burgers done right. Ballers Bar
          &amp; Grill is Third Lake&rsquo;s neighborhood spot for great food,
          great friends, and every game that matters.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
        >
          <Button asChild variant="white" size="lg">
            <Link href="/menu">View Menu</Link>
          </Button>
          <OrderOnlineModal>
            <Button variant="primary" size="lg">
              Order Online
            </Button>
          </OrderOnlineModal>
          <Button asChild variant="outlineLight" size="lg">
            <a href={business.phoneHref} className="inline-flex items-center gap-2">
              <Phone className="h-4 w-4" aria-hidden />
              Call Now
            </a>
          </Button>
        </motion.div>

        <motion.dl
          variants={item}
          className="mt-16 grid w-full max-w-2xl grid-cols-3 gap-4 border-t border-white/10 pt-8 text-left sm:gap-8"
        >
          <div>
            <dt className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
              Kitchen
            </dt>
            <dd className="mt-1 font-display text-lg font-bold uppercase text-red-400 sm:text-xl">
              Burgers &amp; Wings
            </dd>
          </div>
          <div>
            <dt className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
              Atmosphere
            </dt>
            <dd className="mt-1 font-display text-lg font-bold uppercase text-red-400 sm:text-xl">
              Game Day, Every Day
            </dd>
          </div>
          <div>
            <dt className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
              Location
            </dt>
            <dd className="mt-1 font-display text-lg font-bold uppercase text-red-400 sm:text-xl">
              Third Lake, IL
            </dd>
          </div>
        </motion.dl>
      </motion.div>
    </section>
  );
}
