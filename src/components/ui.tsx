"use client";

import { motion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";

export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* Scroll-reveal wrapper — fades + rises once when it enters the viewport. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 40,
  style,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  style?: CSSProperties;
}) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.85, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/* Small brown kicker label with a rule, used above every heading. */
export function Kicker({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p
      className={`mb-4 flex items-center gap-3 text-[11px] font-bold tracking-[0.32em] uppercase ${
        light ? "text-cocoa-200" : "text-cocoa-600"
      }`}
    >
      <span className={`h-px w-10 ${light ? "bg-cocoa-300/60" : "bg-cocoa-500/70"}`} />
      {children}
    </p>
  );
}

/* Consistent section header: kicker + giant display title (+ optional side note). */
export function SectionHead({
  index,
  kicker,
  title,
  note,
  light = false,
  className = "",
}: {
  index: string;
  kicker: string;
  title: ReactNode;
  note?: ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <div className={`mb-12 flex flex-wrap items-end justify-between gap-6 md:mb-16 ${className}`}>
      <div>
        <Kicker light={light}>
          <span className={light ? "text-cocoa-300" : "text-cocoa-400"}>{index}</span>
          <span className="mx-1">/</span>
          {kicker}
        </Kicker>
        <h2
          className={`font-display text-5xl leading-[0.95] tracking-wide uppercase sm:text-6xl md:text-7xl ${
            light ? "text-paper" : "text-ink"
          }`}
        >
          {title}
        </h2>
      </div>
      {note ? (
        <Reveal delay={0.15} className="max-w-xs">
          <p className={`text-sm leading-relaxed ${light ? "text-cream/70" : "text-ink/60"}`}>
            {note}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
