"use client";

import { useLocale } from "./LocaleProvider";

export default function PrintLayout() {
  const { data, t } = useLocale();
  const { identity, contact, profile, experience, education, skills, languages, interests } = data;

  return (
    <article className="hidden print:block text-ink bg-paper font-sans text-[9.5pt] leading-[1.5]">
      {/* Header */}
      <header className="pb-[5mm] border-b border-paper-line">
        <h1 className="font-light tracking-[-0.02em] text-[26pt] leading-[1] text-ink">
          {identity.firstName} {identity.lastName}
        </h1>
        <p className="mt-[3mm] text-[10.5pt] italic text-ink-muted">
          {identity.tagline}.
        </p>
      </header>

      {/* Contact strip */}
      <section className="mt-[6mm] grid grid-cols-3 gap-[6mm]">
        <div>
          <div className="uppercase tracking-[0.2em] text-[6.8pt] text-ink-faint">{t.print.contactEmail}</div>
          <div className="mt-[1mm] text-[9pt] text-ink break-all">{contact.email}</div>
        </div>
        <div>
          <div className="uppercase tracking-[0.2em] text-[6.8pt] text-ink-faint">{t.print.contactPhone}</div>
          <div className="mt-[1mm] text-[9pt] text-ink">{contact.phoneFormatted}</div>
        </div>
        <div>
          <div className="uppercase tracking-[0.2em] text-[6.8pt] text-ink-faint">{t.print.contactAddress}</div>
          <div className="mt-[1mm] text-[9pt] text-ink leading-[1.35]">
            {contact.address}
            <br />
            {contact.postal}, {contact.country}
          </div>
        </div>
      </section>

      <p className="mt-[4mm] text-[8.5pt] text-ink-muted">
        {t.print.metaLine(identity.birth, identity.nationality, identity.availability)}
      </p>

      {/* Profile */}
      <section className="mt-[8mm] break-inside-avoid">
        <h2 className="uppercase tracking-[0.22em] text-[7.4pt] font-medium text-ink-muted pb-[1.5mm] border-b border-paper-line">
          {t.print.profileTitle}
        </h2>
        <p className="mt-[3mm] text-[9.5pt] leading-[1.55] text-ink-soft text-justify">
          {profile}
        </p>
      </section>

      {/* Experience */}
      <section className="mt-[7mm]">
        <h2 className="uppercase tracking-[0.22em] text-[7.4pt] font-medium text-ink-muted pb-[1.5mm] border-b border-paper-line">
          {t.print.experienceTitle}
        </h2>
        <div className="mt-[4mm] space-y-[5mm]">
          {experience.map((exp, i) => (
            <div
              key={i}
              className="grid grid-cols-[26mm_1fr] gap-[5mm] break-inside-avoid"
            >
              <div className="text-[8.5pt] font-mono text-ink-muted leading-[1.4] pt-[0.5mm]">
                {exp.period}
                <div className="text-ink-faint">{exp.location}</div>
              </div>
              <div>
                <h3 className="text-[10.5pt] font-medium text-ink leading-[1.2]">
                  {exp.role}
                </h3>
                <p className="mt-[0.5mm] text-[8.8pt] text-ink-muted">
                  {exp.company}
                  {"via" in exp && exp.via ? <span className="text-ink-faint"> · {exp.via}</span> : null}
                </p>
                <ul className="mt-[2mm] space-y-[1mm]">
                  {exp.bullets.map((b, bi) => (
                    <li key={bi} className="flex text-[9pt] leading-[1.5] text-ink-soft">
                      <span
                        className="mr-[2mm] mt-[0.7em] h-px w-[2.5mm] flex-none bg-ink-faint"
                        aria-hidden
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                {"highlight" in exp && exp.highlight ? (
                  <p className="mt-[2mm] pl-[2.5mm] border-l-2 border-ink text-[8.6pt] italic text-ink-muted">
                    {t.experience.achievement} — {exp.highlight}
                  </p>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mt-[7mm] break-inside-avoid">
        <h2 className="uppercase tracking-[0.22em] text-[7.4pt] font-medium text-ink-muted pb-[1.5mm] border-b border-paper-line">
          {t.print.educationTitle}
        </h2>
        <ul className="mt-[3mm] space-y-[2.2mm]">
          {education.map((e, i) => (
            <li
              key={i}
              className="grid grid-cols-[14mm_1fr_auto] gap-[4mm] items-baseline break-inside-avoid"
            >
              <span className="text-[9pt] font-mono text-ink-muted">{e.year}</span>
              <span className="text-[9.5pt] text-ink">{e.title}</span>
              <span className="text-[8.5pt] text-ink-muted text-right">{e.school}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Skills */}
      <section className="mt-[7mm] break-inside-avoid">
        <h2 className="uppercase tracking-[0.22em] text-[7.4pt] font-medium text-ink-muted pb-[1.5mm] border-b border-paper-line">
          {t.print.skillsTitle}
        </h2>
        <dl className="mt-[3mm] space-y-[2mm]">
          <div className="grid grid-cols-[30mm_1fr] gap-[4mm]">
            <dt className="uppercase tracking-[0.16em] text-[7.4pt] text-ink-faint pt-[0.4mm]">
              {t.print.skillsTools}
            </dt>
            <dd className="text-[9pt] text-ink-soft">{skills.tools.join(" · ")}</dd>
          </div>
          <div className="grid grid-cols-[30mm_1fr] gap-[4mm]">
            <dt className="uppercase tracking-[0.16em] text-[7.4pt] text-ink-faint pt-[0.4mm]">
              {t.print.skillsAdmin}
            </dt>
            <dd className="text-[9pt] text-ink-soft">{skills.admin.join(" · ")}</dd>
          </div>
          <div className="grid grid-cols-[30mm_1fr] gap-[4mm]">
            <dt className="uppercase tracking-[0.16em] text-[7.4pt] text-ink-faint pt-[0.4mm]">
              {t.print.skillsHuman}
            </dt>
            <dd className="text-[9pt] text-ink-soft">{skills.human.join(" · ")}</dd>
          </div>
        </dl>
      </section>

      {/* Languages + Interests */}
      <section className="mt-[7mm] grid grid-cols-2 gap-[10mm] break-inside-avoid">
        <div>
          <h2 className="uppercase tracking-[0.22em] text-[7.4pt] font-medium text-ink-muted pb-[1.5mm] border-b border-paper-line">
            {t.print.languagesTitle}
          </h2>
          <ul className="mt-[3mm] space-y-[1.5mm]">
            {languages.map((l) => (
              <li key={l.name} className="flex items-baseline justify-between text-[9pt]">
                <span className="text-ink">{l.name}</span>
                <span className="text-ink-muted">{l.level}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="uppercase tracking-[0.22em] text-[7.4pt] font-medium text-ink-muted pb-[1.5mm] border-b border-paper-line">
            {t.print.interestsTitle}
          </h2>
          <p className="mt-[3mm] text-[9pt] text-ink-soft">{interests.join(" · ")}</p>
        </div>
      </section>
    </article>
  );
}
