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

    // Strip tracking query params (e.g. fbclid from Facebook, gclid from
    // Google Ads, utm_*) so they don't end up in print footers, share
    // sheets, or address-bar copies.
    try {
      const url = new URL(window.location.href);
      const trackingParams = [
        "fbclid",
        "gclid",
        "msclkid",
        "mc_cid",
        "mc_eid",
        "igshid",
        "yclid",
        "_ga",
        "ref",
        "ref_src",
      ];
      let changed = false;
      for (const p of trackingParams) {
        if (url.searchParams.has(p)) {
          url.searchParams.delete(p);
          changed = true;
        }
      }
      // Also strip any utm_* parameter
      Array.from(url.searchParams.keys()).forEach((key) => {
        if (key.toLowerCase().startsWith("utm_")) {
          url.searchParams.delete(key);
          changed = true;
        }
      });
      if (changed) {
        const cleaned =
          url.pathname +
          (url.searchParams.toString() ? `?${url.searchParams.toString()}` : "") +
          url.hash;
        window.history.replaceState(window.history.state, "", cleaned);
      }
    } catch {
      // best-effort
    }
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
