"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import Icon from "./Icon";
import { useLocale } from "./LocaleProvider";

export default function Education() {
  const { data, t } = useLocale();
  const documentGroups = [
    { title: t.education.diplomas, items: data.documents.diplomas },
    { title: t.education.certificates, items: data.documents.certificates },
  ];

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
            <div className="col-span-9 md:col-span-5 lg:col-span-7 font-display text-lg md:text-xl text-ink">
              {e.title}
            </div>
            <div className="col-span-12 md:col-span-5 lg:col-span-3 text-sm text-ink-muted md:text-right">
              {e.school}
            </div>
          </motion.li>
        ))}
      </ul>

      {/* Downloadable diplomas and work certificates (PDFs in public/documents/) */}
      <div className="mt-16">
        {t.education.documentsNote ? (
          <p className="mb-6 text-sm text-ink-subtle">{t.education.documentsNote}</p>
        ) : null}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-10">
          {documentGroups.map((g, gi) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: gi * 0.08 }}
            >
              <h3 className="text-eyebrow uppercase text-ink-faint mb-4">{g.title}</h3>
              <ul className="border-t border-paper-line">
                {g.items.map((d) => (
                  <li key={d.file} className="border-b border-paper-line">
                    <a
                      href={`/documents/${d.file}`}
                      download={`Fortuna-Chung-${d.file}`}
                      className="group flex items-start justify-between gap-4 py-4"
                    >
                      <span className="min-w-0">
                        <span className="block text-[15px] leading-snug text-ink underline-offset-4 decoration-ink/30 group-hover:underline">
                          {d.title}
                        </span>
                        <span className="mt-1 block text-xs text-ink-muted">
                          {d.issuer}
                          {d.date ? (
                            <>
                              {" · "}
                              <span className="font-mono">{d.date}</span>
                            </>
                          ) : null}
                        </span>
                      </span>
                      <span className="mt-0.5 flex flex-none items-center gap-2 text-ink-faint transition-colors group-hover:text-ink">
                        <span className="font-mono text-[11px] uppercase tracking-[0.18em]">PDF</span>
                        <Icon name="download" label={t.education.download} />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
