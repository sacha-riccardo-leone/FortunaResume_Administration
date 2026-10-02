"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Section from "./Section";
import { useLocale } from "./LocaleProvider";

export default function Experience() {
  const { data, t } = useLocale();
  // Only one entry is open at a time: opening another closes the previous one.
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // When the entry closing above is tall, the entry just opened slides up
  // and can end up under the fixed nav; bring it back into view.
  const keepInView = (i: number) => {
    const item = document.getElementById(`experience-${i}`);
    if (!item) return;
    const offset = parseFloat(getComputedStyle(item).scrollMarginTop) || 0;
    if (item.getBoundingClientRect().top < offset) {
      item.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Section
      id="experience"
      index="03"
      eyebrow={t.experience.eyebrow}
      tone="soft"
    >
      <ol className="relative">
        {data.experience.map((exp, i) => {
          const isOpen = openIndex === i;
          return (
            <motion.li
              key={i}
              id={`experience-${i}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="border-t border-paper-line first:border-t-0 scroll-mt-20"
            >
              {/* The toggle button is stretched over the whole row (after:inset-0);
                  the company link sits above it so it stays clickable. */}
              <div className="group relative grid grid-cols-[1fr_auto] md:grid-cols-12 gap-6 py-10">
                <div className="md:col-span-3">
                  <div className="text-eyebrow uppercase text-ink-faint mb-2">
                    {String(i + 1).padStart(2, "0")} / {String(data.experience.length).padStart(2, "0")}
                  </div>
                  <div className="flex items-center gap-2 font-mono text-sm text-ink">
                    {exp.current ? (
                      <span className="h-1.5 w-1.5 rounded-full bg-ink ring-4 ring-ink/10" aria-hidden />
                    ) : null}
                    {exp.period}
                  </div>
                  <div className="mt-1 text-sm text-ink-subtle">{exp.location}</div>
                </div>

                {/* Beside the dates on mobile so the title keeps the full width */}
                <ToggleIcon
                  open={isOpen}
                  className="self-center md:order-last md:col-span-1 md:justify-self-end"
                />

                <div className="col-span-2 md:col-span-8">
                  <h3 className="font-display text-2xl md:text-3xl text-ink leading-tight">
                    <button
                      type="button"
                      id={`experience-${i}-trigger`}
                      aria-expanded={isOpen}
                      aria-controls={`experience-${i}-panel`}
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      className="text-left after:absolute after:inset-0"
                    >
                      {exp.role}
                    </button>
                  </h3>
                  <p className="mt-1 text-sm text-ink-muted">
                    {exp.url ? (
                      <a
                        href={exp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-reveal z-10 hover:text-ink transition-colors"
                      >
                        {exp.company} <span aria-hidden>↗</span>
                      </a>
                    ) : (
                      exp.company
                    )}
                    {exp.via ? <span className="text-ink-faint"> · {exp.via}</span> : null}
                  </p>
                </div>
              </div>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="details"
                    id={`experience-${i}-panel`}
                    role="region"
                    aria-labelledby={`experience-${i}-trigger`}
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { height: "auto", opacity: 1 },
                      collapsed: { height: 0, opacity: 0 },
                    }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    onAnimationComplete={(definition) => {
                      if (definition === "open") keepInView(i);
                    }}
                    className="overflow-hidden"
                  >
                    <motion.div
                      variants={{ open: { y: 0 }, collapsed: { y: -16 } }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="grid grid-cols-12 gap-6 pb-10"
                    >
                      <div className="col-span-12 md:col-start-4 md:col-span-9 space-y-5">
                        {exp.bullets.length ? (
                          <ul className="space-y-3">
                            {exp.bullets.map((b, bi) => (
                              <li key={bi} className="flex text-ink-soft leading-relaxed">
                                <span className="mr-4 mt-[0.7em] h-px w-4 flex-none bg-ink-faint" aria-hidden />
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                        {exp.highlight ? (
                          <p className="pl-4 border-l-2 border-ink text-sm italic text-ink-muted text-justify">
                            {t.experience.achievement} : {exp.highlight}
                          </p>
                        ) : null}
                        {exp.tools?.length ? (
                          <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                            <span className="text-eyebrow uppercase text-ink-faint">
                              {t.experience.tools}
                            </span>
                            <span className="font-mono text-xs text-ink-muted">
                              {exp.tools.join(" · ")}
                            </span>
                          </p>
                        ) : null}
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>
          );
        })}
      </ol>
    </Section>
  );
}

function ToggleIcon({ open, className = "" }: { open: boolean; className?: string }) {
  return (
    <span
      aria-hidden
      className={`relative h-10 w-10 rounded-full border transition-colors duration-300 ${
        open ? "border-ink bg-ink" : "border-paper-line bg-paper group-hover:border-ink"
      } ${className}`}
    >
      <span
        className={`absolute inset-0 m-auto h-px w-3.5 transition-colors duration-300 ${
          open ? "bg-paper" : "bg-ink"
        }`}
      />
      <span
        className={`absolute inset-0 m-auto h-px w-3.5 transition duration-500 ${
          open ? "bg-paper" : "rotate-90 bg-ink"
        }`}
      />
    </span>
  );
}
