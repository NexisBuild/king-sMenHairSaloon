"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Crown, Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { CHAT_LINK, SALON_NAME } from "@/lib/site";
import { useSmoothScroll } from "./LenisProvider";
import { EASE } from "./ui";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Visit", href: "#visit" },
];

export function Logo({ light = false, onClick }: { light?: boolean; onClick?: () => void }) {
  return (
    <a
      href="#top"
      onClick={(e) => {
        e.preventDefault();
        onClick?.();
      }}
      className="group flex items-center gap-3"
      aria-label={SALON_NAME}
    >
      <span
        className={`flex h-10 w-10 shrink-0 items-center justify-center border-2 transition-colors duration-300 ${
          light
            ? "border-paper/70 text-paper group-hover:bg-paper group-hover:text-cocoa-800"
            : "border-cocoa-600 text-cocoa-600 group-hover:bg-cocoa-600 group-hover:text-paper"
        }`}
      >
        <Crown size={18} strokeWidth={2.4} />
      </span>
      <span className="leading-none">
        <span
          className={`font-display block text-[22px] tracking-wide transition-colors duration-300 ${
            light ? "text-paper" : "text-ink"
          }`}
        >
          KING&apos;S MEN
        </span>
        <span
          className={`mt-1 block text-[9px] font-bold tracking-[0.46em] uppercase transition-colors duration-300 ${
            light ? "text-cream/75" : "text-cocoa-600"
          }`}
        >
          Hair Saloon
        </span>
      </span>
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const scrollTo = useSmoothScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 50));

  const go = (href: string) => {
    setOpen(false);
    scrollTo(href);
  };

  const light = !scrolled && !open;

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 2.1, ease: EASE }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-ink/10 bg-paper/90 border-b py-2.5 shadow-[0_10px_30px_-18px_rgba(38,25,14,0.35)] backdrop-blur-md"
            : "border-b border-transparent bg-gradient-to-b from-black/50 to-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8">
          <Logo light={light} onClick={() => scrollTo(0)} />

          {/* desktop links */}
          <nav className="hidden items-center gap-8 lg:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => {
                  e.preventDefault();
                  go(l.href);
                }}
                className={`group relative text-[12px] font-bold tracking-[0.22em] uppercase transition-colors duration-300 ${
                  light ? "text-cream/85 hover:text-paper" : "text-ink/75 hover:text-ink"
                }`}
              >
                {l.label}
                <span
                  className={`absolute -bottom-1.5 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full ${
                    light ? "bg-paper" : "bg-cocoa-600"
                  }`}
                />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={CHAT_LINK}
              target="_blank"
              rel="noreferrer"
              className={`hidden h-10 w-10 items-center justify-center border-2 transition-all duration-300 sm:flex ${
                light
                  ? "border-paper/60 text-paper hover:bg-paper hover:text-cocoa-800"
                  : "border-cocoa-600 text-cocoa-600 hover:bg-cocoa-600 hover:text-paper"
              }`}
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle size={17} />
            </a>
            <a
              href={CHAT_LINK}
              target="_blank"
              rel="noreferrer"
              className="bg-cocoa-600 text-paper hover:bg-ink hidden items-center gap-2 px-5 py-2.5 text-[12px] font-bold tracking-[0.18em] uppercase transition-colors duration-300 md:flex"
            >
              Book Now
            </a>

            {/* mobile toggle */}
            <button
              onClick={() => setOpen((o) => !o)}
              className={`flex h-10 w-10 items-center justify-center border-2 transition-colors lg:hidden ${
                light
                  ? "border-paper/60 text-paper"
                  : "border-ink/25 text-ink"
              }`}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.5, ease: EASE }}
            className="bg-paper fixed inset-0 z-40 flex flex-col justify-center px-8 lg:hidden"
          >
            <p className="text-cocoa-600 mb-6 text-[11px] font-bold tracking-[0.4em] uppercase">
              Menu — King&apos;s Men Hair Saloon
            </p>
            {LINKS.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 + i * 0.07, duration: 0.5, ease: EASE }}
                onClick={(e) => {
                  e.preventDefault();
                  go(l.href);
                }}
                className="font-display text-ink hover:text-cocoa-600 border-ink/10 flex items-baseline gap-4 border-b py-4 text-5xl tracking-wide uppercase transition-colors"
              >
                <span className="text-cocoa-500 text-base">0{i + 1}</span>
                {l.label}
              </motion.a>
            ))}
            <motion.a
              href={CHAT_LINK}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5, ease: EASE }}
              className="bg-cocoa-600 text-paper mt-8 flex items-center justify-center gap-2 px-6 py-4 text-[12px] font-bold tracking-[0.22em] uppercase"
            >
              <MessageCircle size={16} /> Book on WhatsApp
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
