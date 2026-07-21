"use client";

import { AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import LenisProvider from "@/components/LenisProvider";
import Marquee from "@/components/Marquee";
import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Visit from "@/components/Visit";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const done = useCallback(() => setLoading(false), []);

  /* Lock scrolling while the curtain loader is up. */
  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  return (
    <>
      <AnimatePresence>{loading && <Preloader onDone={done} />}</AnimatePresence>

      <LenisProvider enabled={!loading}>
        <Navbar />
        <main>
          <Hero />
          <Marquee />
          <About />
          <Services />
          <Gallery />
          <Testimonials />
          <Visit />
        </main>
        <Footer />
        <WhatsAppFloat visible={!loading} />
      </LenisProvider>
    </>
  );
}
