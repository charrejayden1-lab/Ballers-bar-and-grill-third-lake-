import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "group relative inline-flex items-center justify-center gap-2",
    "rounded-full font-display font-semibold uppercase tracking-wide",
    "transition-[transform,box-shadow,background-color,color,border-color] duration-300 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    "active:scale-[0.97]",
  ].join(" "),
  {
    variants: {
      variant: {
        primary: [
          "bg-gradient-to-b from-red-500 to-red-700 text-white",
          "shadow-[0_6px_18px_-4px_rgba(184,16,43,0.55),inset_0_1px_0_rgba(255,255,255,0.25)]",
          "border border-red-700/60",
          "hover:shadow-[0_10px_26px_-6px_rgba(184,16,43,0.65),inset_0_1px_0_rgba(255,255,255,0.3)] hover:-translate-y-0.5 hover:from-red-400 hover:to-red-600",
          "focus-visible:ring-red-400",
        ].join(" "),
        navy: [
          "bg-gradient-to-b from-navy-600 to-navy-800 text-white",
          "shadow-[0_6px_18px_-4px_rgba(10,26,61,0.6),inset_0_1px_0_rgba(255,255,255,0.18)]",
          "border border-navy-900/60",
          "hover:shadow-[0_10px_26px_-6px_rgba(10,26,61,0.7),inset_0_1px_0_rgba(255,255,255,0.22)] hover:-translate-y-0.5 hover:from-navy-500 hover:to-navy-700",
          "focus-visible:ring-navy-500",
        ].join(" "),
        outlineLight: [
          "bg-white/0 text-white border border-white/70",
          "backdrop-blur-sm",
          "hover:bg-white hover:text-navy-900 hover:-translate-y-0.5 hover:border-white",
          "focus-visible:ring-white",
        ].join(" "),
        outlineDark: [
          "bg-transparent text-navy-800 border-2 border-navy-800",
          "hover:bg-navy-800 hover:text-white hover:-translate-y-0.5",
          "focus-visible:ring-navy-500",
        ].join(" "),
        white: [
          "bg-white text-navy-900 border border-white",
          "shadow-[0_6px_18px_-4px_rgba(6,15,36,0.35)]",
          "hover:shadow-[0_10px_26px_-6px_rgba(6,15,36,0.4)] hover:-translate-y-0.5 hover:bg-mist",
          "focus-visible:ring-white",
        ].join(" "),
        ghost: [
          "bg-transparent text-navy-800 border border-transparent",
          "hover:bg-navy-800/5",
          "focus-visible:ring-navy-500",
        ].join(" "),
      },
      size: {
        default: "h-12 px-7 text-sm",
        lg: "h-14 px-9 text-base",
        sm: "h-10 px-5 text-xs",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {asChild ? (
          children
        ) : (
          <>
            <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute -inset-y-4 -left-1/3 w-1/3 -skew-x-12 bg-white/25 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-[280%]" />
            </span>
            {children}
          </>
        )}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
