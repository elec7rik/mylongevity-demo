"use client";

import { useLayoutEffect } from "react";

export default function HeroScrollEffect() {
  useLayoutEffect(() => {
    const topbar = document.querySelector(".topbar");
    const menuItems = Array.from(document.querySelectorAll(".has-menu"));

    if (!topbar) {
      return undefined;
    }

    let frame = 0;
    let lastY = "";
    let lastOpacity = "";
    let lastRevealed = false;
    let lastScrollY = window.scrollY;
    let direction = "down";
    const menuTimers = new WeakMap();

    const openMenu = (item) => {
      const timer = menuTimers.get(item);

      if (timer) {
        window.clearTimeout(timer);
      }

      item.classList.add("is-menu-open");
    };

    const closeMenu = (item) => {
      const timer = window.setTimeout(() => {
        item.classList.remove("is-menu-open");
        menuTimers.delete(item);
      }, 180);

      menuTimers.set(item, timer);
    };

    const menuCleanups = menuItems.map((item) => {
      const handlePointerEnter = () => openMenu(item);
      const handlePointerLeave = () => closeMenu(item);
      const handleFocusIn = () => openMenu(item);
      const handleFocusOut = (event) => {
        if (!item.contains(event.relatedTarget)) {
          closeMenu(item);
        }
      };

      item.addEventListener("pointerenter", handlePointerEnter);
      item.addEventListener("pointerleave", handlePointerLeave);
      item.addEventListener("focusin", handleFocusIn);
      item.addEventListener("focusout", handleFocusOut);

      return () => {
        const timer = menuTimers.get(item);

        if (timer) {
          window.clearTimeout(timer);
        }

        item.classList.remove("is-menu-open");
        item.removeEventListener("pointerenter", handlePointerEnter);
        item.removeEventListener("pointerleave", handlePointerLeave);
        item.removeEventListener("focusin", handleFocusIn);
        item.removeEventListener("focusout", handleFocusOut);
      };
    });

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
      const isRevealed = shouldShow && currentScrollY > 12 && direction === "up";
      const tuckProgress = shouldShow ? 0 : downProgress;
      const y = `${Math.round(tuckProgress * -(topbar.offsetHeight + 54))}px`;
      const opacity = `${1 - tuckProgress * 0.42}`;

      if (y !== lastY) {
        document.documentElement.style.setProperty("--site-nav-y", y);
        lastY = y;
      }

      if (opacity !== lastOpacity) {
        document.documentElement.style.setProperty(
          "--site-nav-opacity",
          opacity,
        );
        lastOpacity = opacity;
      }

      if (isRevealed !== lastRevealed) {
        document.documentElement.classList.toggle(
          "site-nav-revealed",
          isRevealed,
        );
        lastRevealed = isRevealed;
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
      document.documentElement.classList.remove("site-nav-revealed");
      menuCleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return null;
}
