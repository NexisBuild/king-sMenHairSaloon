"use client";

import { motion } from "framer-motion";
import { Scissors } from "lucide-react";
import { MARQUEE_ITEMS } from "@/lib/site";

/* Infinite rolling strip between hero and about. Pure transform
   animation = compositor-only, essentially free to run. */
export default function Marquee() {
  const row = (ariaHidden = false) => (
    <div aria-hidden={ariaHidden} className="flex shrink-0 items-center">
      {MARQUEE_ITEMS.map((item) => (
        <span key={item + String(ariaHidden)} className="flex items-center">
          <span className="font-display text-paper px-8 text-2xl tracking-widest uppercase md:text-3xl">
            {item}
          </span>
          <Scissors size={18} className="text-cocoa-300 rotate-[-30deg]" />
        </span>
      ))}
    </div>
  );

  return (
    <div className="bg-cocoa-800 relative -rotate-1 overflow-hidden border-y-4 border-cocoa-900 py-4 shadow-lg">
      <motion.div
        className="flex w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 24 }}
      >
        {row()}
        {row(true)}
      </motion.div>
    </div>
  );
}
