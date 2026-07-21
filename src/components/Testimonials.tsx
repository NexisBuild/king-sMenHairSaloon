"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { TESTIMONIALS } from "@/lib/site";
import { EASE } from "./ui";

/* Single rotating quote — keeps the page light while still feeling alive. */
export default function Testimonials() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % TESTIMONIALS.length), 4600);
    return () => clearInterval(t);
  }, []);

  const current = TESTIMONIALS[idx];

  return (
    <section className="border-ink/10 relative overflow-hidden border-y bg-cocoa-50/70 py-20 md:py-24">
      <Quote
        size={190}
        strokeWidth={1}
        className="text-cocoa-600/10 pointer-events-none absolute -top-6 left-6 rotate-180"
      />

      <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
        <div className="mb-6 flex items-center justify-center gap-1.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.span
              key={`${idx}-${i}`}
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.25 + i * 0.06, duration: 0.35, ease: EASE }}
            >
              <Star size={16} className="fill-cocoa-500 text-cocoa-500" />
            </motion.span>
          ))}
        </div>

        <div className="relative min-h-[130px] sm:min-h-[110px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={idx}
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.55, ease: EASE }}
            >
              <p className="font-display text-ink text-2xl leading-snug tracking-wide uppercase sm:text-3xl md:text-4xl">
                “{current.quote}”
              </p>
              <footer className="mt-6 flex items-center justify-center gap-3">
                <span className="bg-cocoa-600 font-display text-paper flex h-9 w-9 items-center justify-center text-lg">
                  {current.name.charAt(0)}
                </span>
                <span className="text-left">
                  <span className="text-ink block text-sm font-bold">{current.name}</span>
                  <span className="text-cocoa-600 text-[11px] font-semibold tracking-[0.18em] uppercase">
                    {current.tag}
                  </span>
                </span>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        {/* dots */}
        <div className="mt-8 flex items-center justify-center gap-2.5">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Show testimonial ${i + 1}`}
              className={`h-1.5 transition-all duration-400 ${
                i === idx ? "bg-cocoa-600 w-8" : "bg-cocoa-600/25 w-3 hover:bg-cocoa-600/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
