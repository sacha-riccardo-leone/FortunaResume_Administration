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
  },
  contact: {
    email: "chungfortuna@gmail.com",
    phone: "+41 78 715 09 97",
    phoneFormatted: "078 715 09 97",
    address: "Rue de la Charrière 89",
    postal: "2300 La Chaux-de-Fonds",
    country: "Schweiz",
  },
  profile:
    "Vielseitige Mitarbeiterin mit fundierter Erfahrung im Kundenkontakt, in der strikten Einhaltung von Verfahren und in der Teamkoordination. Sorgfältig, organisiert und vertraut mit Office-Tools (Microsoft Office, Adobe), bewältige ich mehrere Aufgaben gleichzeitig in anspruchsvollen Umgebungen. Ich suche eine Verwaltungsstelle, in der ich meinen Sinn für Dienstleistung, meine Diskretion und meine Vorliebe für präzise und strukturierte Arbeit einbringen kann.",
  experience: [
    {
      period: "2022 — 2023",
      role: "Operatorin im Uhrenbereich",
      company: "Rolex SA",
      via: "über Interima / Flexsis SA",
      location: "Biel",
      bullets: [
        "Strikte Anwendung dokumentierter Produktionsverfahren und Qualitätskontrollen.",
        "Erfassung und Verfolgung von Produktionsindikatoren; Rückverfolgbarkeit der durchgeführten Vorgänge.",
        "Tägliche Koordination mit dem Team zur Einhaltung von Fristen und Standards.",
        "Zeitmanagement und Priorisierung von Aufgaben in einem schnelllebigen Umfeld.",
      ],
      highlight: "",
    },
    {
      period: "2016 — 2019",
      role: "Sozialpädagogische Assistentin (EFZ-Lehre)",
      company: "Association L’Accueil",
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
      company: "Aux Coq-d’Or",
      location: "La Chaux-de-Fonds",
      bullets: [
        "Empfang, Kundenberatung und Kassieren (tägliche Kassenführung).",
        "Einräumen, Etikettieren und Pflege der Ladenpräsentation.",
        "Anpassungsfähigkeit und Reaktionsfreude in Stoßzeiten.",
      ],
      highlight: "",
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
      school: "Betriebsübergreifende Schulung (1 Tag)",
    },
  ],
  skills: {
    tools: [
      "Microsoft Word",
      "Microsoft Excel",
      "Microsoft Outlook",
      "Microsoft PowerPoint",
      "Adobe Creative Suite",
    ],
    admin: [
      "Empfang Telefon & vor Ort",
      "Kundenbetreuung",
      "Kassieren & Kasse",
      "Verfassen & Layout",
      "Ablage & Archivierung",
      "Datenvertraulichkeit",
    ],
    human: [
      "Organisation",
      "Prioritätenmanagement",
      "Teamkoordination",
      "Diskretion",
      "Anpassungsfähigkeit",
      "Serviceorientierung",
    ],
  },
  languages: [
    { name: "Französisch", level: "Muttersprache", score: 100 },
    { name: "Englisch", level: "B1 — Mittelstufe", score: 55 },
    { name: "Deutsch", level: "A2 — Grundstufe", score: 30 },
  ],
  interests: ["Fotografie", "Digitale Tools & Kommunikation", "Fremdsprachen"],
};
