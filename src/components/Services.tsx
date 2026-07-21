"use client";

import { motion } from "framer-motion";
import { Clock, MessageCircle } from "lucide-react";
import { bookLink, CHAT_LINK, SERVICES } from "@/lib/site";
import { EASE, SectionHead } from "./ui";

/* Every card's Book button opens WhatsApp with the service name and
   price already typed in, so the shop knows exactly what to confirm. */
export default function Services() {
  return (
    <section id="services" className="bg-cream/60 relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          index="02"
          kicker="The Menu"
          title={
            <>
              Services &<span className="text-cocoa-600"> Rates</span>
            </>
          }
          note="Tap Book on any service — it opens WhatsApp with that service pre-filled, and we confirm your slot on the spot."
        />

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {SERVICES.map((s, i) => (
            <motion.article
              key={s.name}
              initial={{ opacity: 0, y: 44 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: (i % 4) * 0.09, ease: EASE }}
              className="group border-ink/12 bg-paper relative flex flex-col border p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cocoa-600/60 hover:shadow-[0_24px_50px_-24px_rgba(94,63,35,0.45)]"
            >
              {/* accent rule grows on hover */}
              <span className="bg-cocoa-600 absolute top-0 left-0 h-[3px] w-0 transition-all duration-500 group-hover:w-full" />

              {/* ghost number */}
              <span className="font-display text-ink/8 group-hover:text-cocoa-600/15 absolute top-4 right-5 text-6xl leading-none transition-colors duration-300">
                {String(i + 1).padStart(2, "0")}
              </span>

              <span className="bg-cocoa-50 text-cocoa-700 group-hover:bg-cocoa-600 group-hover:text-paper flex h-12 w-12 items-center justify-center border border-cocoa-600/25 transition-colors duration-300">
                <s.icon size={21} strokeWidth={1.9} />
              </span>

              <h3 className="font-display text-ink mt-5 text-[26px] leading-tight tracking-wide uppercase">
                {s.name}
              </h3>
              <p className="text-ink/60 mt-2 min-h-[58px] text-[13px] leading-relaxed">
                {s.desc}
              </p>

              <div className="mt-4 flex items-center justify-between border-t border-dashed border-cocoa-600/30 pt-4">
                <span className="text-ink/55 flex items-center gap-1.5 text-[11px] font-bold tracking-[0.14em] uppercase">
                  <Clock size={13} className="text-cocoa-600" />
                  {s.duration}
                </span>
                <span className="font-display text-cocoa-600 text-4xl leading-none">
                  <span className="text-cocoa-400 mr-0.5 align-top text-xl">PKR</span>
                  <span className="text-2xl">{s.price.toLocaleString("en-PK")}</span>
                </span>
              </div>

              <a
                href={bookLink(s)}
                target="_blank"
                rel="noreferrer"
                className="bg-ink text-paper hover:bg-cocoa-600 mt-5 flex items-center justify-center gap-2.5 px-4 py-3.5 text-[11px] font-bold tracking-[0.22em] uppercase transition-colors duration-300"
              >
                <MessageCircle size={15} className="text-wa" />
                Book — PKR {s.price.toLocaleString("en-PK")}
              </a>
            </motion.article>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-ink/55 mt-10 text-center text-sm"
        >
          Not sure what suits you?{" "}
          <a
            href={CHAT_LINK}
            target="_blank"
            rel="noreferrer"
            className="text-cocoa-600 underline decoration-cocoa-400/50 underline-offset-4 transition-colors hover:decoration-cocoa-600"
          >
            Ask us on WhatsApp
          </a>{" "}
          — we&apos;ll size it up before you book.
        </motion.p>
      </div>
    </section>
  );
}
