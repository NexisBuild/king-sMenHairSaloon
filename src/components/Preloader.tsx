"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import { EASE } from "./ui";

const WORD = "KING'S MEN";

/* Lightweight CSS-only curtain loader: wordmark rises in, a progress
   rule fills, then the panel lifts away to reveal the hero video. */
export default function Preloader({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 1900);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <motion.div
      className="bg-paper fixed inset-0 z-[100] flex flex-col items-center justify-center"
      exit={{ y: "-100%" }}
      transition={{ duration: 0.75, ease: EASE }}
    >
      {/* tiny crown mark */}
      <motion.span
        initial={{ opacity: 0, scale: 0.6, rotate: -12 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="border-cocoa-600 text-cocoa-600 mb-5 flex h-11 w-11 items-center justify-center border-2"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
          <path d="M3 18h18v2H3v-2Zm0-11 4.5 3.5L12 4l4.5 6.5L21 7v9H3V7Z" />
        </svg>
      </motion.span>

      {/* staggered wordmark */}
      <div className="flex overflow-hidden" aria-label="King's Men">
        {WORD.split("").map((ch, i) => (
          <motion.span
            key={i}
            initial={{ y: "115%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 + i * 0.045, ease: EASE }}
            className="font-display text-ink text-6xl tracking-wide sm:text-7xl"
          >
            {ch === " " ? "\u00A0" : ch}
          </motion.span>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.75, duration: 0.5 }}
        className="text-cocoa-600 mt-3 text-[11px] font-bold tracking-[0.55em] uppercase"
      >
        Hair Saloon
      </motion.p>

      {/* progress rule */}
      <div className="bg-ink/10 mt-9 h-px w-44 overflow-hidden">
        <motion.span
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ delay: 0.35, duration: 1.25, ease: EASE }}
          className="bg-cocoa-600 block h-full w-full"
        />
      </div>

      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.4 }}
        className="text-ink/40 mt-4 text-[10px] font-semibold tracking-[0.3em] uppercase"
      >
        Cavalry Ground — Walton — Lahore
      </motion.span>
    </motion.div>
  );
}
