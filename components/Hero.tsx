"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLocale } from "./LocaleProvider";

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  const { data, t } = useLocale();
  const { identity, contact } = data;
  const city = contact.postal.split(" ").slice(1).join(" ");

  return (
    <section id="top" className="relative min-h-[100svh] flex items-center pt-28 sm:pt-32 pb-20 sm:pb-24">
      <div className="absolute inset-0 -z-10 dot-grid opacity-50" aria-hidden />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-paper to-transparent -z-10" aria-hidden />

      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-12 gap-6">
          <motion.div {...reveal(0)} className="col-span-12 lg:col-span-2">
            <span className="text-eyebrow uppercase text-ink-faint">{t.hero.eyebrowIndex}</span>
          </motion.div>

          <div className="col-span-12 lg:col-span-10">
            <div className="flex items-end justify-between gap-4 sm:gap-6 md:gap-10 lg:gap-14">
              <motion.h1
                {...reveal(0.2)}
                className="font-display font-light text-display-xl text-ink"
              >
                {identity.firstName}
                <br />
                <span className="italic">{identity.lastName}.</span>
              </motion.h1>
              <motion.figure
                {...reveal(0.35)}
                className="flex-none w-[130px] sm:w-[170px] md:w-[215px] lg:w-[270px]"
              >
                <div className="relative aspect-[10/11] overflow-hidden rounded-lg border border-paper-line bg-paper">
                  <Image
                    src="/portrait.jpg"
                    alt={`${identity.firstName} ${identity.lastName}`}
                    fill
                    priority
                    sizes="(max-width: 640px) 130px, (max-width: 768px) 170px, (max-width: 1024px) 215px, 270px"
                    className="object-cover object-[center_80%] select-none"
                  />
                </div>
              </motion.figure>
            </div>

            <motion.div
              {...reveal(0.4)}
              className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-end"
            >
              <div className="md:col-span-7 max-w-xl">
                <p className="text-ink-muted text-lg leading-relaxed">
                  {identity.tagline}.
                </p>
                <p className="mt-3 text-sm text-ink-subtle">
                  {t.hero.locatedIn(city, identity.availability)}
                </p>
              </div>

              <div className="md:col-span-5 md:text-right grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 gap-4 md:gap-2 text-sm">
                <div className="border-t border-paper-line pt-3">
                  <div className="text-eyebrow uppercase text-ink-faint mb-1">{t.hero.locationLabel}</div>
                  <div>{contact.postal}</div>
                </div>
                <div className="border-t border-paper-line pt-3">
                  <div className="text-eyebrow uppercase text-ink-faint mb-1">{t.hero.phoneLabel}</div>
                  <a href={`tel:${contact.phone}`} className="link-reveal">
                    {contact.phoneFormatted}
                  </a>
                </div>
                <div className="border-t border-paper-line pt-3">
                  <div className="text-eyebrow uppercase text-ink-faint mb-1">{t.hero.emailLabel}</div>
                  <a href={`mailto:${contact.email}`} className="link-reveal break-all">
                    {contact.email}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
