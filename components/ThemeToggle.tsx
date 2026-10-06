"use client";

import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { THEME_STORAGE_KEY } from "@/lib/theme";
import Icon from "./Icon";
import { useLocale } from "./LocaleProvider";

const DURATION = 400;

export default function ThemeToggle() {
  const { t } = useLocale();
  const [dark, setDark] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const busy = useRef(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const root = document.documentElement;
    const next = !dark;
    const apply = () => {
      root.classList.toggle("dark", next);
      setDark(next);
      try {
        window.localStorage.setItem(THEME_STORAGE_KEY, next ? "dark" : "light");
      } catch {
        // ignore storage failures (private mode, etc.)
      }
    };

    const button = buttonRef.current;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    if (busy.current) return;
    if (
      !button ||
      reduceMotion ||
      !vw ||
      !vh ||
      document.visibilityState === "hidden" ||
      typeof document.startViewTransition !== "function"
    ) {
      apply();
      return;
    }

    // The new theme is revealed in a circle growing from the button (the Magic UI
    // "animated theme toggler" effect). Coordinates are percentages of the
    // snapshot, which stays correct on fractional display scales (e.g. 125 %).
    const { top, left, width, height } = button.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const reach = Math.hypot(Math.max(x, vw - x), Math.max(y, vh - y));
    const at = `${(x / vw) * 100}% ${(y / vh) * 100}%`;
    const radius = `${(reach / (Math.hypot(vw, vh) / Math.SQRT2)) * 100}%`;
    const clipPath = [`circle(0% at ${at})`, `circle(${radius} at ${at})`];

    busy.current = true;
    root.dataset.themeTransition = "active";
    root.style.setProperty("--theme-transition-from", clipPath[0]);
    let reveal: Animation | null = null;

    const transition = document.startViewTransition(() => flushSync(apply));
    transition.ready
      .then(() => {
        reveal = root.animate(
          { clipPath },
          {
            duration: DURATION,
            easing: "ease-in-out",
            fill: "forwards",
            pseudoElement: "::view-transition-new(root)",
          },
        );
      })
      .catch(() => {});
    transition.finished
      .finally(() => {
        reveal?.cancel();
        delete root.dataset.themeTransition;
        root.style.removeProperty("--theme-transition-from");
        busy.current = false;
      })
      .catch(() => {});
  };

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={toggle}
      aria-pressed={dark}
      aria-label={t.nav.darkMode}
      title={t.nav.darkMode}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-ink text-paper shadow-[0_8px_30px_rgba(0,0,0,0.18)] hover:bg-ink-soft transition-colors duration-300"
    >
      {/* Driven by the html.dark class, so the icon is right even before hydration */}
      <Icon name="moon" className="h-4 w-4 dark:hidden" />
      <Icon name="sun" className="hidden h-4 w-4 dark:block" />
    </button>
  );
}
