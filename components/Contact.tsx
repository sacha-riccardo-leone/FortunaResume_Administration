"use client";

import { motion } from "framer-motion";
import { useLocale } from "./LocaleProvider";

export default function Contact() {
  const { data, t } = useLocale();
  const { contact, identity } = data;

  return (
    <section id="contact" className="relative py-32 md:py-40 bg-ink text-paper overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden
      />
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-eyebrow uppercase text-paper/60 mb-8"
        >
          06 — {t.contact.eyebrow}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-light text-display-lg max-w-4xl leading-[1.05]"
        >
          {t.contact.headlineLead}
          <span className="italic">{t.contact.headlineEmphasis}</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 max-w-2xl text-paper/70 leading-relaxed"
        >
          {t.contact.pitch(identity.availability, contact.postal)}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-paper/20 pt-10"
        >
          <div>
            <div className="text-eyebrow uppercase text-paper/50 mb-3">{t.contact.emailLabel}</div>
            <a
              href={`mailto:${contact.email}`}
              className="text-xl md:text-2xl font-display link-reveal break-all"
            >
              {contact.email}
            </a>
          </div>
          <div>
            <div className="text-eyebrow uppercase text-paper/50 mb-3">{t.contact.phoneLabel}</div>
            <a href={`tel:${contact.phone}`} className="text-xl md:text-2xl font-display link-reveal">
              {contact.phoneFormatted}
            </a>
          </div>
          <div>
            <div className="text-eyebrow uppercase text-paper/50 mb-3">{t.contact.addressLabel}</div>
            <p className="text-xl md:text-2xl font-display leading-tight">
              {contact.address}
              <br />
              {contact.postal}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-20"
        >
          <a
            href={`mailto:${contact.email}`}
            className="group inline-flex items-center gap-4 rounded-full border border-paper px-6 py-4 text-paper hover:bg-paper hover:text-ink transition-colors duration-500"
          >
            <span className="font-display text-lg">{t.contact.cta}</span>
            <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
