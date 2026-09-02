"use client";

import * as React from "react";
import Link from "next/link";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { nav, business } from "@/data/business";
import { Button } from "@/components/ui/button";
import { OrderOnlineModal } from "@/components/order-online-modal";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
      <DialogPrimitive.Trigger asChild>
        <button
          type="button"
          aria-label="Open menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy-900/15 text-navy-900 transition-colors hover:bg-navy-900/5 lg:hidden"
        >
          <Menu className="h-6 w-6" aria-hidden />
        </button>
      </DialogPrimitive.Trigger>
      <AnimatePresence>
        {open && (
          <DialogPrimitive.Portal forceMount>
            <DialogPrimitive.Overlay asChild forceMount>
              <motion.div
                className="fixed inset-0 z-[60] bg-navy-950/70 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              />
            </DialogPrimitive.Overlay>
            <DialogPrimitive.Content asChild forceMount>
              <motion.div
                className={cn(
                  "fixed inset-y-0 right-0 z-[70] flex h-full w-[86%] max-w-sm flex-col",
                  "bg-gradient-to-b from-navy-900 to-navy-950 text-white shadow-2xl",
                  "border-l border-white/10 outline-none"
                )}
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <DialogPrimitive.Title className="sr-only">
                  Site navigation
                </DialogPrimitive.Title>
                <DialogPrimitive.Description className="sr-only">
                  Ballers Bar &amp; Grill site navigation menu
                </DialogPrimitive.Description>
                <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
                  <span className="font-display text-xl font-bold uppercase tracking-wide">
                    Ballers<span className="text-red-500">.</span>
                  </span>
                  <DialogPrimitive.Close
                    aria-label="Close menu"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    <X className="h-5 w-5" aria-hidden />
                  </DialogPrimitive.Close>
                </div>

                <nav className="flex flex-1 flex-col gap-1 px-4 py-6">
                  {nav.map((item) => {
                    const active = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "rounded-xl px-3 py-4 font-display text-2xl font-semibold uppercase tracking-wide transition-colors",
                          active ? "text-red-500" : "text-white hover:text-red-400"
                        )}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </nav>

                <div className="flex flex-col gap-3 border-t border-white/10 px-6 py-6">
                  <OrderOnlineModal>
                    <Button
                      variant="primary"
                      size="lg"
                      className="w-full"
                      onClick={() => setOpen(false)}
                    >
                      Order Online
                    </Button>
                  </OrderOnlineModal>
                  <a
                    href={business.phoneHref}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-white/90 transition-colors hover:bg-white/10"
                  >
                    <Phone className="h-4 w-4" aria-hidden />
                    {business.phoneDisplay}
                  </a>
                </div>
              </motion.div>
            </DialogPrimitive.Content>
          </DialogPrimitive.Portal>
        )}
      </AnimatePresence>
    </DialogPrimitive.Root>
  );
}
