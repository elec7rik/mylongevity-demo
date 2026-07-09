"use client";

import { useLayoutEffect } from "react";

export default function HeroScrollEffect() {
  useLayoutEffect(() => {
    const hero = document.querySelector(".hero-section");

    if (!hero) {
      return undefined;
    }

    let frame = 0;
    let lastY = "";
    let lastOpacity = "";

    const update = () => {
      frame = 0;
      const rect = hero.getBoundingClientRect();
      const distance = Math.max(1, rect.height);
      const rawProgress = Math.min(1, Math.max(0, -rect.top / distance));
      const progress = rawProgress < 0.004 ? 0 : rawProgress;
      const y = `${progress * 76}px`;
      const opacity = `${1 - progress * 0.18}`;

      if (y !== lastY) {
        hero.style.setProperty("--hero-content-y", y);
        lastY = y;
      }

      if (opacity !== lastOpacity) {
        hero.style.setProperty("--hero-content-opacity", opacity);
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
