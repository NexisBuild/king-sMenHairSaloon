"use client";

import { Crown, Scissors } from "lucide-react";
import { CHAT_LINK, SALON_NAME, SERVICES } from "@/lib/site";
import { useSmoothScroll } from "./LenisProvider";

/* Brand marks as inline SVG (lucide dropped brand icons). */
function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}
function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5H16.7V4.9c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4V11H8v3h2.5v7h3Z" />
    </svg>
  );
}
function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M23.5 6.5a3 3 0 0 0-2.1-2.1C19.6 4 12 4 12 4s-7.6 0-9.4.4A3 3 0 0 0 .5 6.5C0 8.3 0 12 0 12s0 3.7.5 5.5a3 3 0 0 0 2.1 2.1C4.4 20 12 20 12 20s7.6 0 9.4-.4a3 3 0 0 0 2.1-2.1c.5-1.8.5-5.5.5-5.5s0-3.7-.5-5.5ZM9.7 15.4V8.6L15.6 12l-5.9 3.4Z" />
    </svg>
  );
}

import { SOCIALS as SOCIAL_URLS } from "@/lib/site";

const SOCIALS = [
  { icon: InstagramIcon, label: "Instagram", href: SOCIAL_URLS.instagram },
  { icon: FacebookIcon, label: "Facebook", href: SOCIAL_URLS.facebook },
  { icon: YouTubeIcon, label: "YouTube", href: SOCIAL_URLS.youtube },
];

export default function Footer() {
  const scrollTo = useSmoothScroll();

  return (
    <footer className="bg-cocoa-950 text-cream">
      <div className="barber-stripes h-3 w-full" />
      <div className="mx-auto max-w-7xl px-5 pt-16 pb-8 md:px-8">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          {/* brand */}
          <div className="max-w-xs">
            <a href="#top" onClick={(e) => { e.preventDefault(); scrollTo(0); }} className="flex items-center gap-3">
              <span className="border-cocoa-500 text-cocoa-400 flex h-11 w-11 items-center justify-center border-2">
                <Crown size={19} />
              </span>
              <span className="leading-none">
                <span className="font-display text-paper block text-2xl tracking-wide">
                  KING&apos;S MEN
                </span>
                <span className="text-cocoa-400 mt-1 block text-[9px] font-bold tracking-[0.46em] uppercase">
                  Hair Saloon
                </span>
              </span>
            </a>
            <p className="text-cream/55 mt-5 text-[13px] leading-relaxed">
              Sharp blades, hot towels, and a chair with your name on it.
              Serving Cavalry Ground, Walton, Lahore.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="border-cream/20 text-cream/70 hover:border-cocoa-500 hover:bg-cocoa-600 hover:text-paper flex h-10 w-10 items-center justify-center border transition-colors duration-300"
                >
                  <s.icon />
                </a>
              ))}
            </div>
          </div>

          {/* links */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-2">
            <div>
              <h4 className="text-cocoa-400 mb-4 text-[10px] font-bold tracking-[0.32em] uppercase">
                Explore
              </h4>
              {["About", "Services", "Gallery", "Visit"].map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  onClick={(e) => { e.preventDefault(); scrollTo(`#${l.toLowerCase()}`); }}
                  className="hover:text-cocoa-300 block py-1.5 text-sm font-semibold transition-colors"
                >
                  {l}
                </a>
              ))}
            </div>
            <div>
              <h4 className="text-cocoa-400 mb-4 text-[10px] font-bold tracking-[0.32em] uppercase">
                Popular
              </h4>
              {SERVICES.slice(0, 4).map((s) => (
                <a
                  key={s.name}
                  href={CHAT_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="text-cream/75 hover:text-cocoa-300 block py-1.5 text-sm font-semibold transition-colors"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-cream/10 mt-14 flex flex-col items-center justify-between gap-3 border-t pt-6 sm:flex-row">
          <p className="text-cream/45 text-xs tracking-wide">
            © {new Date().getFullYear()} {SALON_NAME}. All rights reserved.
          </p>
          <p className="text-cream/45 flex items-center gap-2 text-xs tracking-wide">
            <Scissors size={13} className="text-cocoa-500 rotate-[-30deg]" />
            Sharpened with pride, Cavalry Ground — Lahore
          </p>
        </div>
      </div>
    </footer>
  );
}
