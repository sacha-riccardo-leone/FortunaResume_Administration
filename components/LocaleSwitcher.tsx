"use client";

import { LOCALES, LOCALE_FULL, LOCALE_LABEL, type Locale } from "@/lib/i18n/locales";
import { useLocale } from "./LocaleProvider";

type Variant = "inline" | "stacked";

export default function LocaleSwitcher({
  variant = "inline",
  className = "",
}: {
  variant?: Variant;
  className?: string;
}) {
  const { locale, setLocale, t } = useLocale();

  if (variant === "stacked") {
    return (
      <div
        role="group"
        aria-label={t.nav.selectLanguage}
        className={`flex flex-wrap gap-2 ${className}`}
      >
        {LOCALES.map((l) => (
          <Button key={l} l={l} active={l === locale} onClick={setLocale} stacked />
        ))}
      </div>
    );
  }

  return (
    <div
      role="group"
      aria-label={t.nav.selectLanguage}
      className={`flex items-center gap-1 text-[11px] uppercase tracking-[0.18em] ${className}`}
    >
      {LOCALES.map((l, i) => (
        <span key={l} className="flex items-center">
          {i > 0 ? <span className="mx-1.5 text-ink-faint">·</span> : null}
          <Button l={l} active={l === locale} onClick={setLocale} />
        </span>
      ))}
    </div>
  );
}

function Button({
  l,
  active,
  onClick,
  stacked = false,
}: {
  l: Locale;
  active: boolean;
  onClick: (next: Locale) => void;
  stacked?: boolean;
}) {
  if (stacked) {
    return (
      <button
        type="button"
        onClick={() => onClick(l)}
        aria-pressed={active}
        aria-label={LOCALE_FULL[l]}
        className={`min-w-[44px] rounded-full border px-3 py-1.5 text-[12px] tracking-[0.16em] uppercase transition-colors ${
          active
            ? "border-ink bg-ink text-paper"
            : "border-paper-line text-ink-muted hover:border-ink hover:text-ink"
        }`}
      >
        {LOCALE_LABEL[l]}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={() => onClick(l)}
      aria-pressed={active}
      aria-label={LOCALE_FULL[l]}
      className={`px-1 py-0.5 transition-colors ${
        active ? "text-ink font-medium" : "text-ink-subtle hover:text-ink"
      }`}
    >
      {LOCALE_LABEL[l]}
    </button>
  );
}
