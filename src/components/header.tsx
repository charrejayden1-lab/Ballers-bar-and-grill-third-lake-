"use client";

import * as React from "react";
import Image from "next/image";
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
        "sticky top-0 z-50 w-full border-b border-white/10 bg-navy-900 transition-shadow duration-300",
        scrolled ? "shadow-[0_10px_30px_-12px_rgba(6,15,36,0.55)]" : "shadow-none"
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="group flex items-center">
          <Image
            src="/brand/ballers-logo.webp"
            alt="Ballers Bar & Grill"
            width={1417}
            height={1110}
            priority
            className="h-14 w-auto transition-transform duration-300 group-hover:-translate-y-0.5 sm:h-16"
          />
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
                  active ? "text-red-400" : "text-white hover:text-red-400"
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-red-400 transition-transform duration-300",
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
