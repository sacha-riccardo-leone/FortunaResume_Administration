"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  DEFAULT_LOCALE,
  isLocale,
  type Locale,
} from "@/lib/i18n/locales";
import { DICTIONARIES, type UIDictionary } from "@/lib/i18n/dictionary";
import { dataByLocale, type ResumeData } from "@/lib/data";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (next: Locale) => void;
  data: ResumeData;
  t: UIDictionary;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

const STORAGE_KEY = "fortuna-cv-locale";

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  // Hydrate from localStorage / browser language on mount.
  useEffect(() => {
    let next: Locale = DEFAULT_LOCALE;
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (isLocale(stored)) {
        next = stored;
      } else if (typeof navigator !== "undefined" && navigator.language) {
        const tag = navigator.language.slice(0, 2).toLowerCase();
        if (isLocale(tag)) next = tag;
      }
    } catch {
      // ignore storage failures (private mode, etc.)
    }
    setLocaleState(next);
    document.documentElement.lang = next;
  }, []);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    document.documentElement.lang = next;
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore
    }
  };

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      setLocale,
      data: dataByLocale[locale],
      t: DICTIONARIES[locale],
    }),
    [locale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used inside <LocaleProvider />");
  }
  return ctx;
}
