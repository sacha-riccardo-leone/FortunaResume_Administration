"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Section from "./Section";
import { useLocale } from "./LocaleProvider";

export default function Experience() {
  const { data, t } = useLocale();
  // Only one entry is open at a time: opening another closes the previous one.
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // When the entry closing above is tall, the header just opened slides up
  // and can end up under the fixed nav; bring it back into view.
  const keepInView = (i: number) => {
    const trigger = document.getElementById(`experience-${i}-trigger`);
    if (!trigger) return;
    const offset = parseFloat(getComputedStyle(trigger).scrollMarginTop) || 0;
    if (trigger.getBoundingClientRect().top < offset) {
      trigger.scrollIntoView({ behavior: "smooth", block: "start" });
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
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="border-t border-paper-line first:border-t-0"
            >
              <h3>
                <button
                  type="button"
                  id={`experience-${i}-trigger`}
                  aria-expanded={isOpen}
                  aria-controls={`experience-${i}-panel`}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="group grid w-full grid-cols-[1fr_auto] md:grid-cols-12 gap-6 py-10 text-left scroll-mt-20"
                >
                  <span className="md:col-span-3">
                    <span className="block text-eyebrow uppercase text-ink-faint mb-2">
                      {String(i + 1).padStart(2, "0")} / {String(data.experience.length).padStart(2, "0")}
                    </span>
                    <span className="block font-mono text-sm text-ink">{exp.period}</span>
                    <span className="block mt-1 text-sm text-ink-subtle">{exp.location}</span>
                  </span>

                  {/* Beside the dates on mobile so the title keeps the full width */}
                  <ToggleIcon
                    open={isOpen}
                    className="self-center md:order-last md:col-span-1 md:justify-self-end"
                  />

                  <span className="col-span-2 md:col-span-8">
                    <span className="block font-display text-2xl md:text-3xl text-ink leading-tight">
                      {exp.role}
                    </span>
                    <span className="block mt-1 text-sm text-ink-muted">
                      {exp.company}
                      {"via" in exp && exp.via ? <span className="text-ink-faint"> · {exp.via}</span> : null}
                    </span>
                  </span>
                </button>
              </h3>

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
                      <div className="col-span-12 md:col-start-4 md:col-span-9">
                        <ul className="space-y-3">
                          {exp.bullets.map((b, bi) => (
                            <li key={bi} className="flex text-ink-soft leading-relaxed">
                              <span className="mr-4 mt-[0.7em] h-px w-4 flex-none bg-ink-faint" aria-hidden />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                        {"highlight" in exp ? (
                          <p className="mt-5 pl-4 border-l-2 border-ink text-sm italic text-ink-muted text-justify">
                            {t.experience.achievement} : {exp.highlight}
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
