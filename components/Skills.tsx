"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { resumeData } from "@/lib/data";

export default function Skills() {
  const { skills, languages } = resumeData;
  const groups = [
    { title: "Outils bureautiques", items: skills.tools },
    { title: "Compétences administratives", items: skills.admin },
    { title: "Aptitudes personnelles", items: skills.human },
  ];

  return (
    <Section id="competences" index="04" eyebrow="Compétences" title="Savoir-faire et savoir-être.">
      <div className="grid grid-cols-12 gap-y-10 md:gap-10">
        <div className="col-span-12 md:col-span-8 space-y-10">
          {groups.map((g, gi) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: gi * 0.08 }}
            >
              <h3 className="text-eyebrow uppercase text-ink-faint mb-4">{g.title}</h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className="inline-flex items-center rounded-full border border-paper-line px-4 py-1.5 text-sm text-ink-soft bg-paper hover:border-ink hover:bg-ink hover:text-paper transition-colors duration-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="col-span-12 md:col-span-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-eyebrow uppercase text-ink-faint mb-6">Langues</h3>
            <ul className="space-y-5">
              {languages.map((l) => (
                <li key={l.name}>
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="font-display text-lg text-ink">{l.name}</span>
                    <span className="text-xs text-ink-muted">{l.level}</span>
                  </div>
                  <div className="h-px bg-paper-line relative overflow-hidden">
                    <motion.span
                      initial={{ width: 0 }}
                      whileInView={{ width: `${l.score}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute left-0 top-0 h-[2px] bg-ink -translate-y-[0.5px]"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
