"use client";

import { useLocale } from "./LocaleProvider";

export default function Footer() {
  const { data, t } = useLocale();
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-paper/60 border-t border-paper/10">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs">
        <div>
          © {year} {data.identity.firstName} {data.identity.lastName}. {t.footer.rights}
        </div>
        <div className="flex gap-8 uppercase tracking-wider">
          <span>{t.footer.cv}</span>
          <span>{t.footer.location}</span>
        </div>
      </div>
    </footer>
  );
}
