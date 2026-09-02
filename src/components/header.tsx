"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { nav } from "@/data/business";
import { Button } from "@/components/ui/button";
import { OrderOnlineModal } from "@/components/order-online-modal";
import { MobileNav } from "@/components/mobile-nav";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-white/90 shadow-[0_1px_0_0_var(--color-line)] backdrop-blur-md"
          : "bg-white/70 backdrop-blur-md"
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-b from-navy-600 to-navy-900 shadow-[0_4px_14px_-3px_rgba(10,26,61,0.55),inset_0_1px_0_rgba(255,255,255,0.2)] transition-transform duration-300 group-hover:-translate-y-0.5">
            <span className="font-display text-lg font-black text-white">B</span>
          </span>
          <span className="font-display leading-none">
            <span className="block text-lg font-bold uppercase tracking-wide text-navy-900">
              Ballers
            </span>
            <span className="block text-[11px] font-semibold uppercase tracking-[0.28em] text-red-600">
              Bar &amp; Grill
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-full px-4 py-2 font-display text-sm font-semibold uppercase tracking-wide transition-colors",
                  active
                    ? "text-red-600"
                    : "text-navy-900/80 hover:text-red-600"
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-red-600 transition-transform duration-300",
                    active ? "scale-x-100" : "scale-x-0"
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <OrderOnlineModal>
            <Button variant="primary" size="default" className="hidden sm:inline-flex">
              Order Online
            </Button>
          </OrderOnlineModal>
          <OrderOnlineModal>
            <Button variant="primary" size="sm" className="sm:hidden">
              Order
            </Button>
          </OrderOnlineModal>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
