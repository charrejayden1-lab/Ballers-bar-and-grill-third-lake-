import Image from "next/image";

const stats = [
  { label: "Kitchen", value: "Burgers & Wings" },
  { label: "Atmosphere", value: "Game Day, Every Day" },
  { label: "Location", value: "Third Lake, IL" },
];

export function StatsStrip() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/menu/bar-interior.webp"
          alt="Inside Ballers Bar & Grill"
          fill
          sizes="100vw"
          quality={85}
          className="object-cover object-center"
        />
      </div>
      {/* Dark, cinematic Ballers-blue wash with a touch of red glow at each
          end — compact stat strip, not meant to show the photo as clearly
          as the hero/menu treatments. */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy-950/92 via-navy-900/78 to-navy-950/92" />
      <div
        className="pointer-events-none absolute -right-20 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-red-600/25 blur-[110px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-20 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-red-600/20 blur-[110px]"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 divide-y divide-white/15 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center gap-2 px-6 py-8 text-center sm:py-10"
          >
            <span className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-red-400">
              {stat.label}
            </span>
            <span className="font-display text-xl font-bold uppercase tracking-tight text-white sm:text-2xl">
              {stat.value}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
