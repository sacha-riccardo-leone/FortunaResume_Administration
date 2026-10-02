import type { ResumeData } from "./types";

export const de: ResumeData = {
  meta: {
    siteTitle: "Fortuna Chung — Verwaltungsprofil",
    siteDescription:
      "Lebenslauf von Fortuna Chung, vielseitige und sorgfältige Verwaltungsangestellte mit Sitz in La Chaux-de-Fonds, Schweiz.",
  },
  identity: {
    firstName: "Fortuna",
    lastName: "Chung",
    role: "Verwaltungsangestellte",
    tagline: "Vielseitig · Sorgfältig · Serviceorientiert",
    birth: "05.09.1997",
    nationality: "Schweizerisch",
    availability: "80 – 100 %",
    start: "nach Vereinbarung",
  },
  contact: {
    email: "chungfortuna@gmail.com",
    phone: "+41 78 715 09 97",
    phoneFormatted: "078 715 09 97",
    address: "Rue de la Charrière 89",
    postal: "2300 La Chaux-de-Fonds",
    country: "Schweiz",
    linkedin: "https://www.linkedin.com/in/fortuna-chung-ming-kan-253414335/",
  },
  profile:
    "Vielseitige Mitarbeiterin mit fundierter Erfahrung im Kundenkontakt, in der strikten Einhaltung von Verfahren und in der Teamkoordination. Sorgfältig, organisiert und vertraut mit Office-Tools (Microsoft Office, Adobe), bewältige ich mehrere Aufgaben gleichzeitig in anspruchsvollen Umgebungen. Ich suche eine Verwaltungsstelle, in der ich meinen Sinn für Dienstleistung, meine Diskretion und meine Vorliebe für präzise und strukturierte Arbeit einbringen kann.",
  experience: [
    {
      period: "Aktuell",
      current: true,
      role: "Administrative Assistentin",
      company: "Association Elan",
      url: "https://elan-ne.ch/",
      location: "La Chaux-de-Fonds",
      bullets: [],
      tools: ["Word", "Excel", "Outlook", "Google Kalender"],
    },
    {
      period: "2022 — 2023",
      role: "Operatorin im Uhrenbereich",
      company: "Rolex SA",
      url: "https://www.rolex.com/",
      via: "über Interima / Flexsis SA",
      location: "Biel",
      bullets: [
        "Strikte Anwendung dokumentierter Produktionsverfahren und Qualitätskontrollen.",
        "Erfassung und Verfolgung von Produktionsindikatoren; Rückverfolgbarkeit der durchgeführten Vorgänge.",
        "Tägliche Koordination mit dem Team zur Einhaltung von Fristen und Standards.",
        "Zeitmanagement und Priorisierung von Aufgaben in einem schnelllebigen Umfeld.",
      ],
      highlight:
        "Zertifizierung für Vor-Montage-Teile nach Validierung an den verschiedenen Arbeitsplätzen — Ausdruck einer ausgeprägten Vielseitigkeit und Beherrschung der Qualitätsstandards.",
    },
    {
      period: "2016 — 2019",
      role: "Sozialpädagogische Assistentin (EFZ-Lehre)",
      company: "Association L’Accueil",
      url: "https://www.laccueilparascolaire.ch/",
      location: "Saint-Blaise",
      bullets: [
        "Empfang, Betreuung und Begleitung von Kindern und ihren Familien.",
        "Erstellung von pädagogischen Unterlagen, Beobachtungen und schriftlichen Berichten.",
        "Organisation und Planung von Aktivitäten; Koordination mit dem pädagogischen Team.",
        "Regelmäßige schriftliche und mündliche Kommunikation mit Familien und Partnern.",
      ],
      highlight:
        "Leitung eines Kulturprojekts rund um Traditionen (Planung, Ressourcenkoordination, Erstellung von Unterlagen).",
    },
    {
      period: "2015 — 2016",
      role: "Verkäuferin",
      company: "Au Coq d’Or",
      url: "https://www.facebook.com/AuCoqdOrLaChauxDeFonds/",
      location: "La Chaux-de-Fonds",
      bullets: [
        "Empfang, Kundenberatung und Kassieren (tägliche Kassenführung).",
        "Einräumen, Etikettieren und Pflege der Ladenpräsentation.",
        "Anpassungsfähigkeit und Reaktionsfreude in Stoßzeiten.",
      ],
      highlight:
        "Eigenständige und strategische Gestaltung der Warenpräsentation mit kundenorientierter Beratung zur Unterstützung der Kaufentscheidung — unter Wahrung der Kundenerwartungen und Aufwertung hochwertiger Produkte.",
    },
  ],
  education: [
    {
      year: "2021",
      title: "Modulare Bescheinigung als Operatorin im Uhrenbereich",
      school: "Pôle Industrie, Le Locle",
    },
    {
      year: "2019",
      title: "Eidgenössisches Fähigkeitszeugnis (EFZ) — Sozialpädagogische Assistentin",
      school: "Schwerpunkt Kindheit",
    },
    {
      year: "2018",
      title: "Schulung «Schwierige Kinder»",
      school: "Betriebsübergreifende Schulung (1 Tag)",
    },
  ],
  skills: {
    tools: [
      "Microsoft Word",
      "Microsoft Excel",
      "Microsoft Outlook",
      "Microsoft PowerPoint",
      "Adobe Creative Suite",
      "Google Kalender",
    ],
    admin: [
      {
        name: "Empfang Telefon & vor Ort",
        example: "Empfang von Familien und Kundschaft — L’Accueil, Au Coq d’Or",
      },
      { name: "Kundenbetreuung", example: "Kundenberatung — Au Coq d’Or" },
      { name: "Kassieren & Kasse", example: "Tägliche Kassenführung — Au Coq d’Or" },
      {
        name: "Verfassen & Layout",
        example: "Schriftliche Berichte und pädagogische Unterlagen — L’Accueil",
      },
      { name: "Ablage & Archivierung" },
      { name: "Datenvertraulichkeit" },
    ],
    human: [
      { name: "Organisation", example: "Planung von Aktivitäten — L’Accueil" },
      { name: "Prioritätenmanagement", example: "Produktion mit hohem Tempo — Rolex" },
      { name: "Teamkoordination", example: "Tägliche Koordination mit dem Team — Rolex" },
      { name: "Diskretion" },
      { name: "Anpassungsfähigkeit", example: "Stoßzeiten — Au Coq d’Or" },
      { name: "Serviceorientierung" },
    ],
  },
  languages: [
    { name: "Französisch", level: "Muttersprache", score: 100 },
    { name: "Englisch", level: "B1 — Mittelstufe", score: 55 },
    { name: "Deutsch", level: "A2 — Grundstufe", score: 30 },
  ],
  interests: ["Fotografie", "Digitale Tools & Kommunikation", "Fremdsprachen"],
};
