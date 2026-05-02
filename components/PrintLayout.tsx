"use client";

import Image from "next/image";
import { useLocale } from "./LocaleProvider";

export default function PrintLayout() {
  const { data, t } = useLocale();
  const { identity, contact, profile, experience, education, skills, languages, interests } = data;

  return (
    <article className="hidden print:block box-border w-[210mm] p-[8mm_12mm] text-ink bg-paper font-sans text-[8.5pt] leading-[1.4]">
      {/* Header */}
      <header className="pb-[2.5mm] border-b border-paper-line flex items-end justify-between gap-[5mm]">
        <div className="flex-1 min-w-0">
          <h1 className="font-light tracking-[-0.02em] text-[22pt] leading-[1] text-ink">
            {identity.firstName} {identity.lastName}
          </h1>
          <p className="mt-[1.5mm] text-[9pt] italic text-ink-muted">
            {identity.tagline}.
          </p>
        </div>
        <div className="relative flex-none w-[22mm] aspect-[10/11] overflow-hidden rounded-[1mm] border border-paper-line bg-paper">
          <Image
            src="/portrait.jpg"
            alt={`${identity.firstName} ${identity.lastName}`}
            fill
            sizes="100px"
            priority
            loading="eager"
            className="object-cover object-[center_80%]"
          />
        </div>
      </header>

      {/* Contact strip + meta combined into 4-col row */}
      <section className="mt-[3mm] grid grid-cols-4 gap-[5mm]">
        <div>
          <div className="uppercase tracking-[0.18em] text-[6.4pt] text-ink-faint">
            {t.print.contactEmail}
          </div>
          <div className="mt-[0.6mm] text-[8.2pt] text-ink break-all">{contact.email}</div>
        </div>
        <div>
          <div className="uppercase tracking-[0.18em] text-[6.4pt] text-ink-faint">
            {t.print.contactPhone}
          </div>
          <div className="mt-[0.6mm] text-[8.2pt] text-ink">{contact.phoneFormatted}</div>
        </div>
        <div>
          <div className="uppercase tracking-[0.18em] text-[6.4pt] text-ink-faint">
            {t.print.contactAddress}
          </div>
          <div className="mt-[0.6mm] text-[8.2pt] text-ink leading-[1.3]">
            {contact.address}, {contact.postal}
          </div>
        </div>
        <div>
          <div className="uppercase tracking-[0.18em] text-[6.4pt] text-ink-faint">
            {t.about.bornOn}
          </div>
          <div className="mt-[0.6mm] text-[8.2pt] text-ink leading-[1.3]">
            {identity.birth} · {identity.nationality} · {identity.availability}
          </div>
        </div>
      </section>

      {/* Profile */}
      <section className="mt-[3mm] break-inside-avoid">
        <SectionTitle>{t.print.profileTitle}</SectionTitle>
        <p className="mt-[1.8mm] text-[8.5pt] leading-[1.4] text-ink-soft text-justify">
          {profile}
        </p>
      </section>

      {/* Experience */}
      <section className="mt-[3mm]">
        <SectionTitle>{t.print.experienceTitle}</SectionTitle>
        <div className="mt-[2mm] space-y-[3mm]">
          {experience.map((exp, i) => (
            <div
              key={i}
              className="grid grid-cols-[24mm_1fr] gap-[4mm] break-inside-avoid"
            >
              <div className="text-[7.8pt] font-mono text-ink-muted leading-[1.35]">
                {exp.period}
                <div className="text-ink-faint">{exp.location}</div>
              </div>
              <div>
                <h3 className="text-[9.5pt] font-medium text-ink leading-[1.2]">
                  {exp.role}
                </h3>
                <p className="mt-[0.4mm] text-[8pt] text-ink-muted">
                  {exp.company}
                  {"via" in exp && exp.via ? (
                    <span className="text-ink-faint"> · {exp.via}</span>
                  ) : null}
                </p>
                <ul className="mt-[1.2mm] space-y-[0.5mm]">
                  {exp.bullets.map((b, bi) => (
                    <li key={bi} className="flex text-[8.3pt] leading-[1.4] text-ink-soft">
                      <span
                        className="mr-[1.8mm] mt-[0.7em] h-px w-[2mm] flex-none bg-ink-faint"
                        aria-hidden
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                {"highlight" in exp && exp.highlight ? (
                  <p className="mt-[1.2mm] pl-[2mm] border-l-2 border-ink text-[8pt] italic text-ink-muted leading-[1.35] text-justify">
                    {t.experience.achievement} : {exp.highlight}
                  </p>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mt-[3mm] break-inside-avoid">
        <SectionTitle>{t.print.educationTitle}</SectionTitle>
        <ul className="mt-[1.8mm] space-y-[1.2mm]">
          {education.map((e, i) => (
            <li
              key={i}
              className="grid grid-cols-[14mm_1fr_auto] gap-[4mm] items-baseline break-inside-avoid"
            >
              <span className="text-[8.2pt] font-mono text-ink-muted">{e.year}</span>
              <span className="text-[8.6pt] text-ink leading-[1.3]">{e.title}</span>
              <span className="text-[7.8pt] text-ink-muted text-right leading-[1.3]">
                {e.school}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Skills */}
      <section className="mt-[3mm] break-inside-avoid">
        <SectionTitle>{t.print.skillsTitle}</SectionTitle>
        <dl className="mt-[1.8mm] space-y-[1.2mm]">
          <SkillRow label={t.print.skillsTools} items={skills.tools} />
          <SkillRow label={t.print.skillsAdmin} items={skills.admin} />
          <SkillRow label={t.print.skillsHuman} items={skills.human} />
        </dl>
      </section>

      {/* Languages + Interests */}
      <section className="mt-[3mm] grid grid-cols-2 gap-[10mm] break-inside-avoid">
        <div>
          <SectionTitle>{t.print.languagesTitle}</SectionTitle>
          <ul className="mt-[1.8mm] space-y-[0.9mm]">
            {languages.map((l) => (
              <li
                key={l.name}
                className="flex items-baseline justify-between text-[8.3pt] leading-[1.3]"
              >
                <span className="text-ink">{l.name}</span>
                <span className="text-ink-muted">{l.level}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <SectionTitle>{t.print.interestsTitle}</SectionTitle>
          <p className="mt-[1.8mm] text-[8.3pt] text-ink-soft leading-[1.4]">
            {interests.join(" · ")}
          </p>
        </div>
      </section>

      {/* URL footer */}
      <p className="mt-[3mm] font-mono text-[6.5pt] text-ink-faint tracking-wide">
        https://fortuna-resume-administration.vercel.app/
      </p>
    </article>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="uppercase tracking-[0.2em] text-[6.8pt] font-medium text-ink-muted pb-[1mm] border-b border-paper-line">
      {children}
    </h2>
  );
}

function SkillRow({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="grid grid-cols-[26mm_1fr] gap-[4mm]">
      <dt className="uppercase tracking-[0.14em] text-[6.8pt] text-ink-faint pt-[0.3mm]">
        {label}
      </dt>
      <dd className="text-[8.3pt] text-ink-soft leading-[1.35]">{items.join(" · ")}</dd>
    </div>
  );
}
