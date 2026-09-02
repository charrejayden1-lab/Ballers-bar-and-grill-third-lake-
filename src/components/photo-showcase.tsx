"use client";

import * as React from "react";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { galleryPhotos } from "@/data/gallery";

const DRAG_THRESHOLD = 45;

export function PhotoShowcase() {
  const items = galleryPhotos;
  const prefersReducedMotion = useReducedMotion();
  const [index, setIndex] = React.useState(0);
  const [stageWidth, setStageWidth] = React.useState(960);
  const stageRef = React.useRef<HTMLDivElement | null>(null);

  const dragState = React.useRef({ active: false, pointerId: -1, startX: 0 });
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

  const cardWidth = clamp(stageWidth * 0.52, 220, 380);
  const spacing = clamp(stageWidth * 0.3, 160, 300);

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
    <section className="relative overflow-hidden bg-navy-950 py-16 sm:py-20">
      <div className="scorelines pointer-events-none absolute inset-0 opacity-30" />
      <div
        className="pointer-events-none absolute -right-32 -top-24 h-[420px] w-[420px] rounded-full bg-red-600/20 blur-[140px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-32 bottom-0 h-[420px] w-[420px] rounded-full bg-navy-500/25 blur-[140px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <p className="mb-10 text-center font-display text-xs font-semibold uppercase tracking-[0.3em] text-red-400">
          Step Inside Ballers
        </p>

        <div
          ref={stageRef}
          role="region"
          aria-roledescription="carousel"
          aria-label="Inside Ballers Bar & Grill"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onPointerLeave={endDrag}
          className={cn(
            "relative h-[300px] w-full select-none overflow-hidden sm:h-[360px] md:h-[420px]",
            "touch-pan-y focus:outline-none",
            isDragging ? "cursor-grabbing" : "cursor-grab"
          )}
          style={{ perspective: "1400px" }}
        >
          {items.map((item, idx) => {
            const rawOffset = idx - index - dragOffset;
            const clampedForFade = Math.min(Math.abs(rawOffset), 3.4);
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
                aria-hidden={idx !== index}
                className={cn(
                  "absolute left-1/2 top-[6%] overflow-hidden rounded-[28px] border border-white/10",
                  "shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)]",
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
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 70vw, 380px"
                  quality={85}
                  className="object-cover"
                  draggable={false}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-transparent" />
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            disabled={index === 0}
            aria-label="Previous photo"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/70 transition-all hover:-translate-y-0.5 hover:border-red-400 hover:text-red-400 disabled:pointer-events-none disabled:opacity-30"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden />
          </button>

          <div className="flex items-center gap-2">
            {items.map((item, idx) => (
              <button
                key={item.src}
                type="button"
                aria-label={`Go to photo ${idx + 1}`}
                onClick={() => goTo(idx)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  idx === index ? "w-7 bg-red-500" : "w-2 bg-white/20 hover:bg-white/35"
                )}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => goTo(index + 1)}
            disabled={index === items.length - 1}
            aria-label="Next photo"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/70 transition-all hover:-translate-y-0.5 hover:border-red-400 hover:text-red-400 disabled:pointer-events-none disabled:opacity-30"
          >
            <ChevronRight className="h-5 w-5" aria-hidden />
          </button>
        </div>
      </div>
    </section>
  );
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}
