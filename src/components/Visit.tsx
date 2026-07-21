"use client";

import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { ADDRESS, CHAT_LINK, HOURS, MAPS_URL, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";
import { Kicker, Reveal } from "./ui";

export default function Visit() {
  return (
    <section id="visit" className="bg-cocoa-900 relative overflow-hidden py-24 md:py-32">
      {/* ambient stripes + glow */}
      <div className="barber-stripes absolute top-0 left-0 h-full w-2 opacity-40" />
      <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-cocoa-600/25 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          {/* hours */}
          <div>
            <Kicker light>
              <span className="text-cocoa-400">04</span>
              <span className="mx-1">/</span>Visit Us
            </Kicker>
            <Reveal>
              <h2 className="font-display text-paper text-5xl leading-[0.95] tracking-wide uppercase sm:text-6xl md:text-7xl">
                The chair is
                <br />
                <span className="text-outline-cream">waiting for you</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-cream/70 mt-6 max-w-md text-[15px] leading-relaxed">
              Walk in when it suits you, or book on WhatsApp and we&apos;ll
              keep the chair ready when you arrive.
              </p>
            </Reveal>

            <div className="mt-10">
              {HOURS.map((h, i) => (
                <Reveal key={h.days} delay={0.1 + i * 0.08}>
                  <div className="group border-cream/12 flex items-center justify-between border-b py-4 transition-colors duration-300 hover:border-cocoa-400/60">
                    <span className="flex items-center gap-3.5">
                      <Clock size={15} className="text-cocoa-400" />
                      <span className="text-cream/90 text-sm font-bold tracking-[0.14em] uppercase">
                        {h.days}
                      </span>
                    </span>
                    <span className="font-display text-paper text-xl tracking-widest transition-colors group-hover:text-cocoa-300">
                      {h.time}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* contact card */}
          <Reveal delay={0.15}>
            <div className="border-cream/15 bg-cocoa-950/60 relative border p-8 backdrop-blur-sm md:p-10">
              <span className="barber-stripes absolute -top-2.5 left-8 h-5 w-24" />
              <h3 className="font-display text-paper text-3xl tracking-wide uppercase">
                Find the shop
              </h3>

              <div className="mt-8 space-y-6">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-start gap-4"
                >
                  <span className="border-cocoa-500/50 text-cocoa-300 group-hover:bg-cocoa-600 group-hover:text-paper flex h-10 w-10 shrink-0 items-center justify-center border transition-colors duration-300">
                    <MapPin size={16} />
                  </span>
                  <span>
                    <span className="text-cream/60 block text-[10px] font-bold tracking-[0.28em] uppercase">
                      Address
                    </span>
                    <span className="text-cream mt-1 block text-sm font-semibold underline-offset-4 group-hover:underline">
                      {ADDRESS}
                    </span>
                  </span>
                </a>

                <a href={`tel:${PHONE_TEL}`} className="group flex items-start gap-4">
                  <span className="border-cocoa-500/50 text-cocoa-300 group-hover:bg-cocoa-600 group-hover:text-paper flex h-10 w-10 shrink-0 items-center justify-center border transition-colors duration-300">
                    <Phone size={16} />
                  </span>
                  <span>
                    <span className="text-cream/60 block text-[10px] font-bold tracking-[0.28em] uppercase">
                      Call the shop
                    </span>
                    <span className="text-cream mt-1 block text-sm font-semibold underline-offset-4 group-hover:underline">
                      {PHONE_DISPLAY}
                    </span>
                  </span>
                </a>

                <div className="flex items-start gap-4">
                  <span className="border-cocoa-500/50 text-cocoa-300 flex h-10 w-10 shrink-0 items-center justify-center border">
                    <MessageCircle size={16} className="text-wa" />
                  </span>
                  <span>
                    <span className="text-cream/60 block text-[10px] font-bold tracking-[0.28em] uppercase">
                      WhatsApp
                    </span>
                    <span className="text-cream mt-1 block text-sm font-semibold">
                      Fastest for bookings — replies in minutes.
                    </span>
                  </span>
                </div>
              </div>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href={CHAT_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:bg-paper hover:text-cocoa-900 flex flex-1 items-center justify-center gap-2 bg-wa px-5 py-4 text-[11px] font-bold tracking-[0.2em] text-[#07301a] uppercase transition-colors duration-300"
                >
                  <MessageCircle size={16} /> Chat now
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="border-cream/30 text-cream hover:border-paper hover:bg-paper hover:text-cocoa-900 flex flex-1 items-center justify-center border-2 px-5 py-4 text-[11px] font-bold tracking-[0.2em] uppercase transition-colors duration-300"
                >
                  Directions
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
