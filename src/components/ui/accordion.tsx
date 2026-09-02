"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("overflow-hidden rounded-2xl border border-line bg-white", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "group flex flex-1 items-center justify-between gap-4 px-5 py-5 sm:px-7 sm:py-6",
        "text-left font-display text-lg font-semibold uppercase tracking-wide text-navy-900 sm:text-xl",
        "transition-colors hover:text-red-600",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-500 focus-visible:ring-offset-2",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown
        className="h-5 w-5 shrink-0 text-red-400 transition-transform duration-300 group-data-[state=open]:rotate-180"
        aria-hidden
      />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  // forceMount keeps every panel's content in the DOM (and in the server-rendered
  // HTML) at all times — required so the full menu is present for SEO and no-JS
  // clients, not just whichever category happens to be open. Visibility and the
  // expand/collapse motion are handled entirely with CSS via the grid-rows trick
  // below instead of Radix's default mount/unmount + measured-height animation.
  <AccordionPrimitive.Content
    ref={ref}
    forceMount
    className={cn(
      "grid transition-[grid-template-rows] duration-[350ms] ease-out",
      "data-[state=open]:grid-rows-[1fr] data-[state=closed]:grid-rows-[0fr]"
    )}
    {...props}
  >
    <div className="overflow-hidden">
      <div className={cn("px-5 pb-6 sm:px-7 sm:pb-8", className)}>{children}</div>
    </div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
