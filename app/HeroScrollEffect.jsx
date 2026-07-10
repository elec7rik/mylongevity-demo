"use client";

import { useLayoutEffect } from "react";

export default function HeroScrollEffect() {
  useLayoutEffect(() => {
    const hero = document.querySelector(".hero-section");
    const header = document.querySelector(".site-header");

    if (!hero || !header) {
      return undefined;
    }

    let frame = 0;
    let lastY = "";
    let lastOpacity = "";

    const update = () => {
      frame = 0;
      const rect = hero.getBoundingClientRect();
      const holdDistance = 52;
      const tuckDistance = 58;
      const scrolledPastTop = Math.max(0, -rect.top);
      const tuckProgress = Math.min(
        1,
        Math.max(0, (scrolledPastTop - holdDistance) / tuckDistance),
      );
      const y = `${Math.round(tuckProgress * -(header.offsetHeight + 18))}px`;
      const opacity = `${1 - tuckProgress * 0.35}`;

      if (y !== lastY) {
        hero.style.setProperty("--hero-header-y", y);
        lastY = y;
      }

      if (opacity !== lastOpacity) {
        hero.style.setProperty("--hero-header-opacity", opacity);
        lastOpacity = opacity;
      }
    };

    const requestUpdate = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return null;
}
