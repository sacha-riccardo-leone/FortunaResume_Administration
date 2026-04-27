"use client";

import { useLocale } from "./LocaleProvider";

export default function PrintButton() {
  const { t } = useLocale();
  return (
    <button
      type="button"
      onClick={() => window.print()}
      aria-label={t.print.ariaLabel}
      className="print:hidden fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 inline-flex items-center gap-2 rounded-full bg-ink text-paper px-4 sm:px-5 py-3 text-[12px] sm:text-[13px] tracking-wide shadow-[0_8px_30px_rgba(0,0,0,0.18)] hover:bg-ink-soft transition-colors duration-300"
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M12 4v12" />
        <path d="m7 11 5 5 5-5" />
        <path d="M5 20h14" />
      </svg>
      <span>{t.print.button}</span>
    </button>
  );
}
