"use client";

import * as React from "react";

const words = [
  "GAME DAY",
  "COLD DRINKS",
  "ANGUS BURGERS",
  "JUMBO WINGS",
  "GOOD COMPANY",
  "THIRD LAKE, IL",
];

const loop = [...words, ...words];

const BASE_TILT_X = 8;

export function GameDayTicker() {
  const stageRef = React.useRef<HTMLDivElement | null>(null);
  const frameRef = React.useRef<number | null>(null);
  const [tilt, setTilt] = React.useState({ x: 0, y: 0 });
  const interactive = React.useRef(false);

  React.useEffect(() => {
    interactive.current =
      window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive.current) return;
    const el = stageRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const nextY = (px - 0.5) * 12;
    const nextX = (0.5 - py) * 5;

    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(() => setTilt({ x: nextX, y: nextY }));
  };

  const handleMouseLeave = () => {
    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      ref={stageRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="ticker3d-scene relative border-b border-white/10 py-10 sm:py-12"
    >
      <div
        className="ticker3d-stage"
        style={{
          transform: `rotateX(${BASE_TILT_X + tilt.x}deg) rotateY(${tilt.y}deg)`,
        }}
      >
        <div className="flex select-none overflow-x-hidden">
          <div className="ticker3d-track animate-marquee flex shrink-0 gap-12 whitespace-nowrap">
            {loop.map((word, i) => (
              <span
                key={`${word}-${i}`}
                className="ticker3d-word"
                style={{
                  animationDelay: `${-(i % words.length) * (4 / words.length)}s`,
                }}
              >
                <span className="ticker3d-face font-display text-2xl font-bold uppercase tracking-widest sm:text-3xl">
                  {word}
                </span>
                <span className="ticker3d-dot" aria-hidden>
                  &bull;
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
