"use client";

import { animate, motion, useInView } from "framer-motion";
import { Award, BadgeCheck, Crown } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { ABOUT_IMAGES } from "@/lib/site";
import { EASE, Kicker, Reveal } from "./ui";

function Counter({ to, suffix = "", decimals = 0 }: { to: number; suffix?: string; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const controls = animate(0, to, {
      duration: 1.8,
      ease: EASE,
      onUpdate: (v) => {
        if (ref.current) {
          ref.current.textContent =
            decimals > 0
              ? v.toFixed(decimals)
              : Math.round(v).toLocaleString("en-US");
        }
      },
    });
    return () => controls.stop();
  }, [inView, to, decimals]);

  return (
    <span className="font-display text-ink text-5xl tracking-wide md:text-6xl">
      <span ref={ref}>0</span>
      <span className="text-cocoa-600">{suffix}</span>
    </span>
  );
}

const CHECKS = [
  "Master barbers, 10+ years behind the chair",
  "Hot towels, cold steels, honest conversation",
  "Booked in 30 seconds — confirmed on WhatsApp",
];

export default function About() {
  return (
    <section id="about" className="paper-grain relative overflow-hidden py-24 md:py-32">
      {/* watermark */}
      <span className="text-outline-ink font-display pointer-events-none absolute -top-6 right-0 hidden text-[11rem] leading-none uppercase select-none lg:block">
        Grooming
      </span>

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* imagery */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: EASE }}
              className="border-cocoa-600 relative border-2"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={ABOUT_IMAGES.main.src}
                  alt={ABOUT_IMAGES.main.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
              </div>
              {/* corner stamp */}
              <span className="barber-stripes absolute -top-3 -right-3 h-14 w-14 border-4 border-paper" />
            </motion.div>

            {/* floating small shot */}
            <motion.div
              initial={{ opacity: 0, y: 40, rotate: 3 }}
              whileInView={{ opacity: 1, y: 0, rotate: 3 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: 0.25, ease: EASE }}
              className="border-paper absolute -right-4 -bottom-10 w-40 overflow-hidden border-6 shadow-2xl sm:-right-8 sm:w-56"
            >
              <div className="relative aspect-square">
                <Image
                  src={ABOUT_IMAGES.small.src}
                  alt={ABOUT_IMAGES.small.alt}
                  fill
                  sizes="(max-width: 640px) 40vw, 224px"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>

            {/* badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4, ease: EASE }}
              className="bg-cocoa-600 text-paper absolute -top-6 -left-4 flex items-center gap-2.5 px-5 py-3 shadow-xl sm:-left-8"
            >
              <Award size={18} />
              <span className="text-[11px] font-bold tracking-[0.22em] uppercase">
                Walton, Lahore
              </span>
            </motion.div>
          </div>

          {/* copy */}
          <div className="mt-8 lg:mt-0">
            <Kicker>
              <span className="text-cocoa-400">01</span>
              <span className="mx-1">/</span>The Shop
            </Kicker>
            <Reveal>
              <h2 className="font-display text-ink text-5xl leading-[0.95] tracking-wide uppercase sm:text-6xl md:text-7xl">
                Not a haircut.
                <br />
                <span className="text-cocoa-600">A coronation.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="text-ink/70 mt-6 max-w-md text-[15px] leading-relaxed">
                King&apos;s Men is a gentlemen&apos;s grooming house built on one rule —
                every man who sits in the chair leaves looking like the head of
                his own table. Sharp blades, hot towels, zero shortcuts.
              </p>
            </Reveal>

            <ul className="mt-8 space-y-3.5">
              {CHECKS.map((c, i) => (
                <Reveal key={c} delay={0.15 + i * 0.08}>
                  <li className="flex items-center gap-3">
                    <BadgeCheck size={19} className="text-cocoa-600 shrink-0" />
                    <span className="text-ink/80 text-sm font-semibold">{c}</span>
                  </li>
                </Reveal>
              ))}
            </ul>

            {/* counters */}
            <div className="border-ink/10 mt-10 grid grid-cols-3 gap-6 border-t pt-8">
              {[
                { to: 7, suffix: "", label: "Days a week" },
                { to: 8, suffix: "", label: "Signature services" },
                { to: 16, suffix: " hrs", label: "Open daily" },
              ].map((s) => (
                <div key={s.label}>
                  <Counter to={s.to} suffix={s.suffix} />
                  <p className="text-ink/55 mt-1 text-[11px] font-bold tracking-[0.18em] uppercase">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* floating crown deco */}
      <motion.span
        animate={{ y: [0, -14, 0], rotate: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="text-cocoa-200 absolute right-10 bottom-16 hidden lg:block"
      >
        <Crown size={44} strokeWidth={1.5} />
      </motion.span>
    </section>
  );
}
