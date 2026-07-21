"use client";

import { motion } from "framer-motion";
import { ChevronDown, Clock, MessageCircle, Star } from "lucide-react";
import { CHAT_LINK, QUICK_HOURS, VIDEO_POSTER, VIDEO_URL } from "@/lib/site";
import { useSmoothScroll } from "./LenisProvider";
import { EASE } from "./ui";

const line = {
  hidden: { y: "112%" },
  show: (d: number) => ({
    y: 0,
    transition: { duration: 0.9, delay: d, ease: EASE },
  }),
};

function Line({ text, delay, outline = false }: { text: string; delay: number; outline?: boolean }) {
  return (
    <span className="block overflow-hidden pb-1">
      <motion.span
        custom={delay}
        variants={line}
        initial="hidden"
        animate="show"
        className={`block font-display leading-[0.92] tracking-wide uppercase ${
          outline ? "text-outline-cream" : "text-paper"
        }`}
      >
        {text}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const scrollTo = useSmoothScroll();

  return (
    <section id="top" className="relative flex min-h-svh flex-col justify-end overflow-hidden">
      {/* intro video */}
      <motion.div
        initial={{ scale: 1.14 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, delay: 1.9, ease: EASE }}
        className="absolute inset-0"
      >
        <video
          className="h-full w-full object-cover"
          src={VIDEO_URL}
          poster={VIDEO_POSTER}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          disablePictureInPicture
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1007]/95 via-[#1a1007]/30 to-[#1a1007]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1007]/60 via-transparent to-transparent" />
      </motion.div>

      {/* side rail */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 0.8 }}
        className="absolute top-1/2 left-6 hidden -translate-y-1/2 xl:block"
      >
            <p className="text-cream/60 text-[10px] font-bold tracking-[0.5em] uppercase [writing-mode:vertical-rl]">
          Gentlemen&apos;s Grooming — Cavalry Ground · Walton · Lahore
        </p>
      </motion.div>

      {/* content */}
      <div className="relative mx-auto w-full max-w-7xl px-5 pt-40 pb-14 md:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.7, ease: EASE }}
          className="text-cocoa-200 mb-5 flex items-center gap-3 text-[11px] font-bold tracking-[0.34em] uppercase"
        >
          <span className="bg-cocoa-400 h-px w-12" />
          Walk in rough — walk out royal
        </motion.p>

        <h1 className="text-[clamp(3.4rem,10vw,9rem)]">
          <Line text="Sharp Cuts." delay={2.25} />
          <Line text="Royal Standard." delay={2.4} outline />
        </h1>

        <div className="mt-10 flex flex-wrap items-end justify-between gap-8">
          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.75, duration: 0.7, ease: EASE }}
            className="flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() => scrollTo("#services")}
              className="group bg-paper text-ink hover:bg-cocoa-600 hover:text-paper flex items-center gap-3 px-7 py-4 text-[12px] font-bold tracking-[0.2em] uppercase transition-colors duration-300"
            >
              Book a Service
              <ChevronDown size={16} className="transition-transform duration-300 group-hover:translate-y-1" />
            </button>
            <a
              href={CHAT_LINK}
              target="_blank"
              rel="noreferrer"
              className="group border-paper/50 text-paper hover:bg-paper hover:text-ink flex items-center gap-3 border-2 px-7 py-4 text-[12px] font-bold tracking-[0.2em] uppercase transition-colors duration-300"
            >
              <MessageCircle size={16} className="text-wa transition-transform duration-300 group-hover:scale-110" />
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* status card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 3, duration: 0.7, ease: EASE }}
            className="hidden border-paper/25 bg-black/30 items-center gap-5 border px-5 py-4 backdrop-blur-sm sm:flex"
          >
            <div>
              <div className="text-paper flex items-center gap-1.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={13} className="fill-cocoa-400 text-cocoa-400" />
                ))}
              </div>
              <p className="text-cream/70 mt-1.5 text-[11px] font-semibold tracking-wide">
                4.9 · 1,200+ reviews
              </p>
            </div>
            <span className="bg-paper/20 h-8 w-px" />
            <div className="flex items-center gap-2.5">
              <Clock size={16} className="text-cocoa-300" />
              <p className="text-cream/85 text-[11px] font-semibold leading-snug tracking-wide">
                Open daily
                <span className="text-paper block">{QUICK_HOURS}</span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* scroll hint + barber stripe base */}
        <motion.button
          onClick={() => scrollTo("#about")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.4, duration: 0.6 }}
          className="group absolute -bottom-1 left-1/2 hidden -translate-x-1/2 flex-col items-center md:flex"
          aria-label="Scroll down"
        >
          <motion.span
            animate={{ y: [0, 7, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="border-paper/40 text-paper flex h-9 w-9 items-center justify-center rounded-full border backdrop-blur-sm transition-colors group-hover:border-cocoa-400"
          >
            <ChevronDown size={16} />
          </motion.span>
        </motion.button>
      </div>

      <div className="barber-stripes relative h-3 w-full opacity-90" />
    </section>
  );
}
