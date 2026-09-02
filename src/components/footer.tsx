import Link from "next/link";
import { MapPin, Phone } from "lucide-react";

import { business, hours, nav, socials } from "@/data/business";
import { Button } from "@/components/ui/button";
import { OrderOnlineModal } from "@/components/order-online-modal";

function FacebookGlyph(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M13.5 21v-7.5h2.5l.4-3H13.5V8.5c0-.87.24-1.46 1.49-1.46H16.5V4.36C16.22 4.32 15.28 4.24 14.18 4.24c-2.3 0-3.87 1.4-3.87 3.98V10.5H7.8v3h2.51V21h3.19Z" />
    </svg>
  );
}

function InstagramGlyph(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

const socialIcon = { facebook: FacebookGlyph, instagram: InstagramGlyph };

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-navy-900 to-navy-950 text-white">
      <div className="scorelines pointer-events-none absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1.1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-b from-red-500 to-red-700 shadow-[0_4px_14px_-3px_rgba(184,16,43,0.6)]">
                <span className="font-display text-lg font-black text-white">B</span>
              </span>
              <span className="font-display leading-none">
                <span className="block text-lg font-bold uppercase tracking-wide">
                  Ballers
                </span>
                <span className="block text-[11px] font-semibold uppercase tracking-[0.28em] text-red-400">
                  Bar &amp; Grill
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              Third Lake&rsquo;s neighborhood destination for great food, cold
              drinks, friends, and the big game.
            </p>
            <div className="mt-6">
              <OrderOnlineModal>
                <Button variant="primary">Order Online</Button>
              </OrderOnlineModal>
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
              Navigate
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-white/80 transition-colors hover:text-red-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
              Visit
            </h3>
            <div className="mt-5 flex flex-col gap-4 text-sm text-white/80">
              <a
                href={business.mapsDirectionsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 transition-colors hover:text-red-400"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-red-400" aria-hidden />
                <span>
                  {business.addressLine1}
                  <br />
                  {business.addressLine2}
                </span>
              </a>
              <a
                href={business.phoneHref}
                className="flex items-center gap-2.5 transition-colors hover:text-red-400"
              >
                <Phone className="h-4 w-4 shrink-0 text-red-400" aria-hidden />
                {business.phoneDisplay}
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
              Hours
            </h3>
            <ul className="mt-5 flex flex-col gap-1.5 text-sm text-white/80">
              {hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-6">
                  <span className="text-white/55">{h.day}</span>
                  <span className={h.hours === "Closed" ? "text-white/40" : ""}>
                    {h.hours}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/45 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {business.name}. All rights
            reserved.
          </p>
          {socials.length > 0 && (
            <div className="flex items-center gap-3">
              {socials.map((s) => {
                const Icon = socialIcon[s.icon];
                return (
                  <a
                    key={s.href}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-red-400 hover:text-red-400"
                  >
                    <Icon className="h-4 w-4" aria-hidden />
                  </a>
                );
              })}
            </div>
          )}
          <p>
            {business.addressLine1}, {business.addressLine2}
          </p>
        </div>
      </div>
    </footer>
  );
}
