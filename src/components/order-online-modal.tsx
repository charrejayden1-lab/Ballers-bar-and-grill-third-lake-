"use client";

import * as React from "react";
import { ShoppingBag, Truck, ArrowUpRight } from "lucide-react";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ordering, business } from "@/data/business";
import { cn } from "@/lib/utils";

type OrderOnlineModalProps = {
  children: React.ReactNode;
  className?: string;
};

export function OrderOnlineModal({ children }: OrderOnlineModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="p-8 sm:p-10">
        <div className="scorelines pointer-events-none absolute inset-0 rounded-3xl opacity-40" />
        <div className="relative">
          <DialogHeader>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-red-400">
              {business.name}
            </p>
            <DialogTitle className="mt-2 text-3xl">
              How would you like to order?
            </DialogTitle>
            <DialogDescription className="mt-2">
              You&rsquo;ll head over to our DoorDash ordering page to finish your order.
            </DialogDescription>
          </DialogHeader>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <OrderChoice
              href={ordering.pickupUrl}
              icon={<ShoppingBag className="h-6 w-6" aria-hidden />}
              label="Pickup"
              sub="Grab it at the bar"
            />
            <OrderChoice
              href={ordering.deliveryUrl}
              icon={<Truck className="h-6 w-6" aria-hidden />}
              label="Delivery"
              sub="Straight to your door"
            />
          </div>

          <p className="mt-6 text-center text-xs text-white/50">
            Ordering is handled securely by DoorDash and opens in a new tab.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function OrderChoice({
  href,
  icon,
  label,
  sub,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  sub: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative flex flex-1 flex-col items-center gap-2 overflow-hidden rounded-2xl px-6 py-7 text-center",
        "bg-gradient-to-b from-red-500 to-red-700 text-white",
        "border border-red-700/60 shadow-[0_10px_24px_-8px_rgba(184,16,43,0.6),inset_0_1px_0_rgba(255,255,255,0.25)]",
        "transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_16px_34px_-8px_rgba(184,16,43,0.7)] hover:from-red-400 hover:to-red-600",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900"
      )}
    >
      <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
        <span className="absolute -inset-y-6 -left-1/3 w-1/3 -skew-x-12 bg-white/25 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-[320%]" />
      </span>
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
        {icon}
      </span>
      <span className="font-display text-lg font-bold uppercase tracking-wide">
        {label}
      </span>
      <span className="text-xs text-white/80">{sub}</span>
      <ArrowUpRight
        className="absolute right-3 top-3 h-4 w-4 text-white/60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        aria-hidden
      />
    </a>
  );
}
