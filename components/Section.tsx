"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function Section({
  id,
  eyebrow,
  title,
  index,
  children,
  tone = "light",
}: {
  id: string;
  eyebrow: string;
  title: string;
  index: string;
  children: ReactNode;
  tone?: "light" | "soft";
}) {
  return (
    <section
      id={id}
      className={`py-24 md:py-32 ${tone === "soft" ? "bg-paper-soft" : "bg-paper"}`}
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-12 gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="col-span-12 lg:col-span-2"
          >
            <span className="text-eyebrow uppercase text-ink-faint">
              {index} — {eyebrow}
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 lg:col-span-10 font-display font-light text-display-md text-ink"
          >
            {title}
          </motion.h2>
        </div>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-start-3 lg:col-span-10">{children}</div>
        </div>
      </div>
    </section>
  );
}
