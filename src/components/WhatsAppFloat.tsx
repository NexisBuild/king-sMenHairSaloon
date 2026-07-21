"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { CHAT_LINK } from "@/lib/site";
import { EASE } from "./ui";

/* Persistent WhatsApp chat button — appears after the preloader lifts,
   with a soft radar pulse so it reads as "live" without being noisy. */
export default function WhatsAppFloat({ visible }: { visible: boolean }) {
  return (
    <>
      {visible && (
        <motion.a
          href={CHAT_LINK}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat with King's Men on WhatsApp"
          initial={{ opacity: 0, scale: 0.5, y: 26 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6, ease: EASE }}
          className="group fixed right-5 bottom-5 z-50 flex items-center gap-3 md:right-7 md:bottom-7"
        >
          {/* tooltip */}
          <span className="border-ink/10 bg-paper text-ink pointer-events-none hidden translate-x-2 border px-4 py-2.5 text-[11px] font-bold tracking-[0.14em] uppercase opacity-0 shadow-lg transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 md:block">
            Questions? Chat with us
          </span>

          <span className="relative flex h-14 w-14 items-center justify-center md:h-15 md:w-15">
            {/* radar pulse */}
            <motion.span
              aria-hidden
              className="bg-wa absolute inset-0 rounded-full"
              animate={{ scale: [1, 1.55], opacity: [0.45, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
            />
            <motion.span
              whileHover={{ scale: 1.1, rotate: 8 }}
              whileTap={{ scale: 0.92 }}
              className="bg-wa relative flex h-full w-full items-center justify-center rounded-full text-[#07301a] shadow-[0_10px_28px_-8px_rgba(37,211,102,0.7)]"
            >
              <MessageCircle size={25} strokeWidth={2.2} />
            </motion.span>
          </span>
        </motion.a>
      )}
    </>
  );
}
