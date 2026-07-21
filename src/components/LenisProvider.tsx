"use client";

import Lenis from "lenis";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

const LenisContext = createContext<Lenis | null>(null);

export function useLenis() {
  return useContext(LenisContext);
}

/** Boots Lenis only once the preloader is done, so the page never
 *  scrolls underneath the loader. */
export default function LenisProvider({
  enabled,
  children,
}: {
  enabled: boolean;
  children: ReactNode;
}) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    if (!enabled) return;

    // Skip smooth-scroll on mobile / touch devices for performance
    const isMobile =
      typeof window !== "undefined" &&
      (window.matchMedia("(max-width: 768px)").matches ||
        ("maxTouchPoints" in navigator && navigator.maxTouchPoints > 0));
    if (isMobile) return;

    const instance = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.6,
    });
    setLenis(instance);

    let rafId: number;
    const raf = (time: number) => {
      instance.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      instance.destroy();
      setLenis(null);
    };
  }, [enabled]);

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>;
}

/** Shared smooth-scroll helper used by the nav / CTAs. */
export function useSmoothScroll() {
  const lenis = useLenis();
  return (target: string | number) => {
    if (lenis) {
      lenis.scrollTo(target, {
        offset: typeof target === "string" ? -72 : 0,
        duration: 1.5,
      });
    } else if (typeof target === "string") {
      document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: target, behavior: "smooth" });
    }
  };
}
