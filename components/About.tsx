"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { resumeData } from "@/lib/data";

export default function About() {
  const { profile, identity } = resumeData;
  const facts = [
    { label: "Née le", value: identity.birth },
    { label: "Nationalité", value: identity.nationality },
    { label: "Disponibilité", value: identity.availability },
    { label: "Profil", value: "Administratif" },
  ];

  return (
    <Section id="profil" index="02" eyebrow="Profil" title="Collaboratrice administrative, structurée et fiable.">
      <div className="grid grid-cols-12 gap-10">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="col-span-12 md:col-span-8 text-lg leading-[1.8] text-ink-soft"
        >
          {profile}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="col-span-12 md:col-span-4"
        >
          <dl className="space-y-4 border-l border-paper-line pl-6">
            {facts.map((f) => (
              <div key={f.label} className="flex items-baseline justify-between gap-4">
                <dt className="text-eyebrow uppercase text-ink-faint">{f.label}</dt>
                <dd className="text-sm text-ink font-medium">{f.value}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </Section>
  );
}
