"use client";

import * as React from "react";
import {
  Soup,
  Drumstick,
  Salad,
  Sandwich,
  Utensils,
  Beef,
  Pizza,
  UtensilsCrossed,
  Baby,
  Cake,
  CupSoda,
  type LucideIcon,
} from "lucide-react";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { menu } from "@/data/menu";
import { cn } from "@/lib/utils";

const CATEGORY_ICON: Record<string, LucideIcon> = {
  appetizers: Soup,
  wings: Drumstick,
  salads: Salad,
  sandwiches: Sandwich,
  wraps: Utensils,
  burgers: Beef,
  flatbreads: Pizza,
  sides: UtensilsCrossed,
  kids: Baby,
  desserts: Cake,
  drinks: CupSoda,
};

export function MenuAccordion() {
  const [openValue, setOpenValue] = React.useState<string>("");

  const jumpTo = (id: string) => {
    setOpenValue(id);
    requestAnimationFrame(() => {
      document
        .getElementById(`category-${id}`)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <div>
      <div
        className="flex flex-wrap justify-center gap-2.5"
        aria-label="Jump to menu category"
      >
        {menu.map((cat) => {
          const Icon = CATEGORY_ICON[cat.id] ?? Soup;
          const active = openValue === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => jumpTo(cat.id)}
              className={cn(
                "inline-flex items-center gap-2 rounded-full border px-4 py-2 font-display text-xs font-semibold uppercase tracking-wide transition-all duration-300",
                active
                  ? "border-red-600 bg-red-600 text-white shadow-[0_6px_16px_-4px_rgba(184,16,43,0.55)]"
                  : "border-navy-900/15 bg-white text-navy-900 hover:-translate-y-0.5 hover:border-navy-900/30"
              )}
            >
              <Icon className="h-3.5 w-3.5" aria-hidden />
              {cat.label}
            </button>
          );
        })}
      </div>

      <Accordion
        type="single"
        collapsible
        value={openValue}
        onValueChange={setOpenValue}
        className="mt-10 flex flex-col gap-4"
      >
        {menu.map((cat) => {
          const Icon = CATEGORY_ICON[cat.id] ?? Soup;
          return (
            <AccordionItem
              key={cat.id}
              value={cat.id}
              id={`category-${cat.id}`}
              className="scroll-mt-28 border-white/50 bg-white/92 shadow-[0_25px_60px_-25px_rgba(6,15,36,0.65)] backdrop-blur-md"
            >
              <AccordionTrigger>
                <span className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-900/5 text-navy-900 group-hover:bg-red-600/10 group-hover:text-red-600">
                    <Icon className="h-4 w-4" aria-hidden />
                  </span>
                  {cat.label}
                </span>
              </AccordionTrigger>
              <AccordionContent>
                {cat.intro && (
                  <p className="mb-5 rounded-xl bg-mist px-4 py-3 text-sm text-ink-500">
                    {cat.intro}
                  </p>
                )}
                <ul className="flex flex-col divide-y divide-line">
                  {cat.items.map((it) => (
                    <li key={it.name} className="py-4 first:pt-0 last:pb-0">
                      <div className="flex items-baseline justify-between gap-4">
                        <span className="font-display text-base font-semibold text-navy-900 sm:text-lg">
                          {it.name}
                        </span>
                        {it.price && (
                          <span className="shrink-0 font-display text-base font-bold text-red-600 sm:text-lg">
                            {it.price}
                          </span>
                        )}
                      </div>
                      {it.description && (
                        <p className="mt-1.5 text-sm leading-relaxed text-ink-500">
                          {it.description}
                        </p>
                      )}
                      {it.note && (
                        <p className="mt-1.5 text-xs font-medium italic text-navy-600">
                          {it.note}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
                {cat.extras && (
                  <div className="mt-6 rounded-xl border border-line bg-mist px-4 py-4">
                    <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-navy-900/60">
                      {cat.extras.title}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {cat.extras.items.map((e) => (
                        <span
                          key={e}
                          className="rounded-full border border-line bg-white px-3 py-1 text-xs font-medium text-ink-700"
                        >
                          {e}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
