"use client";

import { useEffect, useState } from "react";
import { THEME_STORAGE_KEY } from "@/lib/theme";
import Icon from "./Icon";
import { useLocale } from "./LocaleProvider";

export default function ThemeToggle() {
  const { t } = useLocale();
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !dark;
    document.documentElement.classList.toggle("dark", next);
    setDark(next);
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, next ? "dark" : "light");
    } catch {
      // ignore storage failures (private mode, etc.)
    }
  };

  return (
    <button
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
