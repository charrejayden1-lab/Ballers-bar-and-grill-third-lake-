"use client";

import * as React from "react";
import { useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { favorites, type Favorite } from "@/data/favorites";

const THEME_BG: Record<Favorite["theme"], string> = {
  navy: "bg-gradient-to-br from-navy-600 via-navy-700 to-navy-950",
  red: "bg-gradient-to-br from-red-400 via-red-500 to-red-700",
  split: "bg-gradient-to-br from-navy-800 via-navy-700 to-red-600",
};

const DRAG_THRESHOLD = 45;

export function CoverflowCarousel() {
  const items = favorites;
  const prefersReducedMotion = useReducedMotion();
  const [index, setIndex] = React.useState(0);
  const [stageWidth, setStageWidth] = React.useState(960);
  const stageRef = React.useRef<HTMLDivElement | null>(null);

  const dragState = React.useRef({
    active: false,
    pointerId: -1,
    startX: 0,
  });
  const [dragDeltaPx, setDragDeltaPx] = React.useState(0);
  const [isDragging, setIsDragging] = React.useState(false);

  React.useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const observer = new ResizeObserver((entries) => {
      const width = entries[0]?.contentRect.width;
      if (width) setStageWidth(width);
    });
    observer.observe(el);
    setStageWidth(el.getBoundingClientRect().width);
    return () => observer.disconnect();
  }, []);

  const cardWidth = clamp(stageWidth * 0.46, 200, 320);
  const spacing = clamp(stageWidth * 0.24, 130, 250);

  const goTo = React.useCallback(
    (next: number) => {
      setIndex(clamp(next, 0, items.length - 1));
    },
    [items.length]
  );

  const handlePointerDown = (e: React.PointerEvent) => {
    dragState.current = { active: true, pointerId: e.pointerId, startX: e.clientX };
    setIsDragging(true);
    (e.target as Element).setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!dragState.current.active) return;
    setDragDeltaPx(e.clientX - dragState.current.startX);
  };

  const endDrag = () => {
    if (!dragState.current.active) return;
    dragState.current.active = false;
    setIsDragging(false);
    if (dragDeltaPx <= -DRAG_THRESHOLD) {
      goTo(index + 1);
    } else if (dragDeltaPx >= DRAG_THRESHOLD) {
      goTo(index - 1);
    }
    setDragDeltaPx(0);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      goTo(index + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      goTo(index - 1);
    }
  };

  const dragOffset = isDragging ? dragDeltaPx / spacing : 0;

  return (
    <div className="w-full">
      <div
        ref={stageRef}
        role="region"
        aria-roledescription="carousel"
        aria-label="Game day favorites"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onPointerLeave={endDrag}
        className={cn(
          "relative h-[340px] w-full select-none overflow-hidden sm:h-[380px] md:h-[420px]",
          "touch-pan-y focus:outline-none",
          isDragging ? "cursor-grabbing" : "cursor-grab"
        )}
        style={{ perspective: "1400px" }}
      >
        {items.map((item, idx) => {
          const rawOffset = idx - index - dragOffset;
          const clampedForFade = Math.min(Math.abs(rawOffset), 3.4);
          const isActive = Math.round(rawOffset) === 0 && !isDragging;
          const Icon = item.icon;

          const translateX = rawOffset * spacing;
          const rotateY = clamp(-rawOffset * 34, -68, 68);
          const scale = 1 - Math.min(Math.abs(rawOffset), 3) * 0.13;
          const translateZ = -Math.abs(rawOffset) * 70;
          const opacity = clampedForFade > 3.1 ? 0 : 1 - clampedForFade * 0.14;
          const zIndex = 100 - Math.round(Math.abs(rawOffset) * 10);

          return (
            <div
              key={item.name}
              onClick={() => {
                if (idx !== index) goTo(idx);
              }}
              aria-hidden={!isActive}
              className={cn(
                "absolute left-1/2 top-[6%] flex flex-col overflow-hidden rounded-[28px] border border-white/10",
                "shadow-[0_25px_60px_-15px_rgba(6,15,36,0.55)]",
                THEME_BG[item.theme],
                idx === index ? "cursor-default" : "cursor-pointer"
              )}
              style={{
                width: cardWidth,
                height: "88%",
                marginLeft: -cardWidth / 2,
                zIndex,
                opacity,
                transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                transition:
                  isDragging || prefersReducedMotion
                    ? "none"
                    : "transform 0.55s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.55s ease",
              }}
            >
              <div className="flex flex-1 flex-col items-center justify-center gap-5 px-6 py-8 text-center">
                <span className="rounded-full bg-white/15 px-3 py-1 font-display text-[10px] font-semibold uppercase tracking-[0.2em] text-white/85">
                  {item.tag}
                </span>
                <span className="flex h-24 w-24 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 sm:h-28 sm:w-28">
                  <Icon className="h-12 w-12 text-white sm:h-14 sm:w-14" strokeWidth={1.5} aria-hidden />
                </span>
                <h3 className="font-display text-lg font-bold uppercase leading-tight tracking-wide text-white sm:text-xl">
                  {item.name}
                </h3>
                <span className="font-display text-2xl font-bold text-white/95">
                  {item.price}
                </span>
              </div>
              <div className="h-1.5 w-full bg-gradient-to-r from-white/0 via-white/50 to-white/0" />
            </div>
          );
        })}
      </div>

      <div className="mt-8 flex items-center justify-center gap-6">
        <button
          type="button"
          onClick={() => goTo(index - 1)}
          disabled={index === 0}
          aria-label="Previous favorite"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-navy-900/15 text-navy-900 transition-all hover:-translate-y-0.5 hover:border-red-500 hover:text-red-600 disabled:pointer-events-none disabled:opacity-30"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden />
        </button>

        <div className="flex items-center gap-2">
          {items.map((item, idx) => (
            <button
              key={item.name}
              type="button"
              aria-label={`Go to ${item.name}`}
              onClick={() => goTo(idx)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                idx === index ? "w-7 bg-red-600" : "w-2 bg-navy-900/20 hover:bg-navy-900/40"
              )}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => goTo(index + 1)}
          disabled={index === items.length - 1}
          aria-label="Next favorite"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-navy-900/15 text-navy-900 transition-all hover:-translate-y-0.5 hover:border-red-500 hover:text-red-600 disabled:pointer-events-none disabled:opacity-30"
        >
          <ChevronRight className="h-5 w-5" aria-hidden />
        </button>
      </div>
    </div>
  );
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}
