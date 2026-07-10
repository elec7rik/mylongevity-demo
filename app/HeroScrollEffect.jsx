"use client";

import { useLayoutEffect } from "react";

export default function HeroScrollEffect() {
  useLayoutEffect(() => {
    const topbar = document.querySelector(".topbar");

    if (!topbar) {
      return undefined;
    }

    let frame = 0;
    let lastY = "";
    let lastOpacity = "";
    let lastScrollY = window.scrollY;
    let direction = "down";

    const update = () => {
      frame = 0;
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY;

      if (Math.abs(scrollDelta) > 3) {
        direction = scrollDelta < 0 ? "up" : "down";
      }

      lastScrollY = currentScrollY;
      const holdDistance = 230;
      const tuckDistance = 170;
      const downProgress = Math.min(
        1,
        Math.max(0, (currentScrollY - holdDistance) / tuckDistance),
      );
      const shouldShow = currentScrollY <= 12 || direction === "up";
      const tuckProgress = shouldShow ? 0 : downProgress;
      const y = `${Math.round(tuckProgress * -(topbar.offsetHeight + 54))}px`;
      const opacity = `${1 - tuckProgress * 0.42}`;

      if (y !== lastY) {
        document.documentElement.style.setProperty("--site-nav-y", y);
        lastY = y;
      }

      if (opacity !== lastOpacity) {
        document.documentElement.style.setProperty("--site-nav-opacity", opacity);
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
