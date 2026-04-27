"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { useLocale } from "./LocaleProvider";

export default function Education() {
  const { data, t } = useLocale();
  return (
    <Section id="formation" index="05" eyebrow={t.education.eyebrow} tone="soft">
      <ul className="divide-y divide-paper-line border-t border-b border-paper-line">
        {data.education.map((e, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            className="py-6 grid grid-cols-12 gap-4 items-baseline"
          >
            <div className="col-span-3 md:col-span-2 font-mono text-sm text-ink">{e.year}</div>
            <div className="col-span-9 md:col-span-7 font-display text-lg md:text-xl text-ink">
              {e.title}
            </div>
            <div className="col-span-12 md:col-span-3 text-sm text-ink-muted md:text-right">
              {e.school}
            </div>
          </motion.li>
        ))}
      </ul>

      <div className="mt-10 flex flex-wrap gap-3">
        {data.interests.map((i) => (
          <span
            key={i}
            className="text-xs px-3 py-1.5 rounded-full border border-ink/20 text-ink-muted"
          >
            {i}
          </span>
        ))}
      </div>
    </Section>
  );
}
