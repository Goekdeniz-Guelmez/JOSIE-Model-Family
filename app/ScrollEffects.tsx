"use client";

import { useEffect } from "react";

export default function ScrollEffects() {
  useEffect(() => {
    const updateGlassEdge = () => {
      document.documentElement.classList.toggle("has-scrolled", window.scrollY > 18);
    };
    updateGlassEdge();
    window.addEventListener("scroll", updateGlassEdge, { passive: true });

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return () => window.removeEventListener("scroll", updateGlassEdge);
    }

    let scroll: { destroy?: () => void; resize?: () => void } | undefined;
    const revealed = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 },
    );

    revealed.forEach((element) => observer.observe(element));

    void import("locomotive-scroll").then(({ default: LocomotiveScroll }) => {
      scroll = new LocomotiveScroll({ lenisOptions: { smoothWheel: true, lerp: 0.075 } });
      window.setTimeout(() => scroll?.resize?.(), 250);
    });

    return () => {
      window.removeEventListener("scroll", updateGlassEdge);
      observer.disconnect();
      scroll?.destroy?.();
    };
  }, []);

  return null;
}
