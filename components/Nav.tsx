"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocale } from "./LocaleProvider";
import LocaleSwitcher from "./LocaleSwitcher";

export default function Nav() {
  const { t, data } = useLocale();
  const links = [
    { href: "#profil", label: t.nav.profil },
    { href: "#experience", label: t.nav.experience },
    { href: "#competences", label: t.nav.competences },
    { href: "#formation", label: t.nav.formation },
    { href: "#contact", label: t.nav.contact },
  ];

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
          scrolled || open
            ? "bg-paper/90 backdrop-blur-md border-b border-paper-line"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1440px] px-5 sm:px-6 md:px-10 lg:px-16 py-4 sm:py-5 flex items-center justify-between">
          <a
            href="#top"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 group"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-ink text-paper font-display text-sm">
              F
            </span>
            <span className="font-display text-sm tracking-tight hidden sm:inline">
              Fortuna Chung Ming Kan
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[13px] text-ink-muted hover:text-ink transition-colors link-reveal"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 md:gap-4">
            <LocaleSwitcher className="hidden md:flex" />
            <a
              href="#contact"
              className="hidden lg:inline-flex text-[12px] md:text-[13px] px-3 md:px-4 py-2 rounded-full bg-ink text-paper hover:bg-ink-soft transition-colors"
            >
              {t.nav.cta}
            </a>
            <button
              type="button"
              aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="md:hidden relative h-10 w-10 flex items-center justify-center rounded-full border border-paper-line bg-paper text-ink"
            >
              <span className="sr-only">Menu</span>
              <span className="relative block w-4 h-[10px]">
                <span
                  className={`absolute left-0 top-0 h-px w-full bg-ink transition-transform duration-300 ${
                    open ? "translate-y-[5px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 bottom-0 h-px w-full bg-ink transition-transform duration-300 ${
                    open ? "-translate-y-[5px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 md:hidden bg-paper"
          >
            <div className="absolute inset-0 dot-grid opacity-50" aria-hidden />
            <div className="relative flex flex-col h-full pt-24 pb-10 px-6 sm:px-10">
              <span className="text-eyebrow uppercase text-ink-faint mb-8">
                {t.nav.navigation}
              </span>
              <nav className="flex flex-col gap-5">
                {links.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.08 + i * 0.04 }}
                    className="font-display text-4xl sm:text-5xl text-ink"
                  >
                    <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-faint mr-4">
                      0{i + 1}
                    </span>
                    {l.label}
                  </motion.a>
                ))}
              </nav>
              <div className="mt-auto pt-10 border-t border-paper-line space-y-6">
                <div>
                  <div className="text-eyebrow uppercase text-ink-faint mb-3">
                    {t.nav.selectLanguage}
                  </div>
                  <LocaleSwitcher variant="stacked" />
                </div>
                <div>
                  <div className="text-eyebrow uppercase text-ink-faint mb-2">
                    {t.nav.contactDirect}
                  </div>
                  <a
                    href={`mailto:${data.contact.email}`}
                    onClick={() => setOpen(false)}
                    className="font-display text-lg text-ink break-all link-reveal"
                  >
                    {data.contact.email}
                  </a>
                  <div className="mt-2">
                    <a
                      href={`tel:${data.contact.phone}`}
                      onClick={() => setOpen(false)}
                      className="font-mono text-sm text-ink-muted link-reveal"
                    >
                      {data.contact.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
