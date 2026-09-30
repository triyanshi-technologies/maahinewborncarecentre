"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Fades sections marked with `data-reveal` into view using a single observer.
 * Content is fully visible without JavaScript or with reduced motion enabled.
 */
export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !("IntersectionObserver" in window)) return;

    const sections = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).dataset.reveal = "visible";
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -8%" },
    );

    sections.forEach((section) => {
      section.dataset.reveal = "hidden";
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
