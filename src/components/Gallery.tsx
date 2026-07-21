"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GALLERY } from "@/lib/site";
import { EASE, SectionHead } from "./ui";

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          index="03"
          kicker="The Work"
          title={
            <>
              Fresh off<span className="text-cocoa-600"> the chair</span>
            </>
          }
          note="Real cuts from a normal week at the shop. No filters — just good light and sharp scissors."
        />

        <div className="grid auto-rows-[190px] grid-cols-2 gap-4 md:auto-rows-[230px] md:grid-cols-3">
          {GALLERY.map((img, i) => (
            <motion.figure
              key={img.src}
              initial={{ opacity: 0, y: 46, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.75, delay: (i % 3) * 0.1, ease: EASE }}
              className={`group relative overflow-hidden ${img.big ? "col-span-2 row-span-2" : ""} ${
                img.tall ? "row-span-2" : ""
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                loading="lazy"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
              />
              {/* caption veil */}
              <figcaption className="absolute inset-0 flex items-end bg-gradient-to-t from-[#1d1208]/85 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <span className="flex w-full items-center justify-between p-4">
                  <span className="font-display text-paper text-xl tracking-widest uppercase">
                    {img.label}
                  </span>
                  <span className="text-cocoa-300 text-[10px] font-bold tracking-[0.3em]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </span>
              </figcaption>
              {/* corner tick */}
              <span className="border-paper/0 group-hover:border-paper/70 absolute top-3 left-3 h-6 w-6 border-t-2 border-l-2 transition-colors duration-500" />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
