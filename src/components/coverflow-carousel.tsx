"use client";

import * as React from "react";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { favorites } from "@/data/favorites";

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

          const translateX = rawOffset * spacing;
          const rotateY = clamp(-rawOffset * 34, -68, 68);
          const scale = 1 - Math.min(Math.abs(rawOffset), 3) * 0.13;
          const translateZ = -Math.abs(rawOffset) * 70;
          const opacity = clampedForFade > 3.1 ? 0 : 1 - clampedForFade * 0.14;
          const zIndex = 100 - Math.round(Math.abs(rawOffset) * 10);

          return (
            <div
              key={item.src}
              onClick={() => {
                if (idx !== index) goTo(idx);
              }}
              aria-hidden={!isActive}
              className={cn(
                "absolute left-1/2 top-[6%] flex flex-col overflow-hidden rounded-[28px] border border-white/10 bg-navy-950",
                "shadow-[0_25px_60px_-15px_rgba(6,15,36,0.55)]",
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
              <div className="relative min-h-0 flex-[3]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 60vw, 320px"
                  quality={90}
                  loading="eager"
                  className="object-cover"
                  draggable={false}
                />
              </div>
              <div className="h-1 w-full shrink-0 bg-gradient-to-r from-red-600/0 via-red-500 to-red-600/0" />
              <div className="flex min-h-0 flex-[1.3] items-center bg-navy-950 px-4 py-3 sm:px-5">
                <p className="text-center text-xs leading-snug text-white/90 sm:text-sm">
                  {item.description}
                </p>
              </div>
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
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-gradient-to-b from-navy-500 to-navy-700 shadow-[0_8px_20px_-6px_rgba(36,86,179,0.6),inset_0_1px_0_rgba(255,255,255,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_10px_24px_-6px_rgba(36,86,179,0.75),inset_0_1px_0_rgba(255,255,255,0.28)] disabled:pointer-events-none disabled:opacity-30"
        >
          <ChevronLeft className="h-5 w-5 text-red-400" aria-hidden />
        </button>

        <div className="flex items-center gap-2">
          {items.map((item, idx) => (
            <button
              key={item.src}
              type="button"
              aria-label={`Go to dish ${idx + 1}`}
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
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-gradient-to-b from-navy-500 to-navy-700 shadow-[0_8px_20px_-6px_rgba(36,86,179,0.6),inset_0_1px_0_rgba(255,255,255,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_10px_24px_-6px_rgba(36,86,179,0.75),inset_0_1px_0_rgba(255,255,255,0.28)] disabled:pointer-events-none disabled:opacity-30"
        >
          <ChevronRight className="h-5 w-5 text-red-400" aria-hidden />
        </button>
      </div>
    </div>
  );
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}
