"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { useLocale } from "./LocaleProvider";

export default function Experience() {
  const { data, t } = useLocale();
  return (
    <Section
      id="experience"
      index="03"
      eyebrow={t.experience.eyebrow}
      tone="soft"
    >
      <ol className="relative">
        {data.experience.map((exp, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-12 gap-6 py-10 border-t border-paper-line first:border-t-0"
          >
            <div className="col-span-12 md:col-span-3">
              <div className="text-eyebrow uppercase text-ink-faint mb-2">
                {String(i + 1).padStart(2, "0")} / {String(data.experience.length).padStart(2, "0")}
              </div>
              <div className="font-mono text-sm text-ink">{exp.period}</div>
              <div className="mt-1 text-sm text-ink-subtle">{exp.location}</div>
            </div>

            <div className="col-span-12 md:col-span-9">
              <h3 className="font-display text-2xl md:text-3xl text-ink leading-tight">
                {exp.role}
              </h3>
              <p className="mt-1 text-sm text-ink-muted">
                {exp.company}
                {"via" in exp && exp.via ? <span className="text-ink-faint"> · {exp.via}</span> : null}
              </p>
              <ul className="mt-6 space-y-3">
                {exp.bullets.map((b, bi) => (
                  <li key={bi} className="flex text-ink-soft leading-relaxed">
                    <span className="mr-4 mt-[0.7em] h-px w-4 flex-none bg-ink-faint" aria-hidden />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              {"highlight" in exp ? (
                <p className="mt-5 pl-4 border-l-2 border-ink text-sm italic text-ink-muted text-justify hyphens-auto">
                  {t.experience.achievement} : {exp.highlight}
                </p>
              ) : null}
            </div>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}
