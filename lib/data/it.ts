import type { ResumeData } from "./types";

export const it: ResumeData = {
  meta: {
    siteTitle: "Fortuna Chung — Profilo Amministrativo",
    siteDescription:
      "CV di Fortuna Chung, collaboratrice amministrativa versatile e rigorosa, con sede a La Chaux-de-Fonds, Svizzera.",
  },
  identity: {
    firstName: "Fortuna",
    lastName: "Chung",
    role: "Impiegata amministrativa",
    tagline: "Versatile · Rigorosa · Orientata al servizio",
    birth: "05.09.1997",
    nationality: "Svizzera",
    availability: "80 – 100 %",
    start: "da convenire",
  },
  contact: {
    email: "chungfortuna@gmail.com",
    phone: "+41 78 715 09 97",
    phoneFormatted: "078 715 09 97",
    address: "Rue de la Charrière 89",
    postal: "2300 La Chaux-de-Fonds",
    country: "Svizzera",
    linkedin: "https://www.linkedin.com/in/fortuna-chung-ming-kan-253414335/",
  },
  profile:
    "Collaboratrice versatile con una solida esperienza nelle relazioni con i clienti, nel rigoroso rispetto delle procedure e nel coordinamento del team. Rigorosa, organizzata e a proprio agio con gli strumenti d’ufficio, gestisco contemporaneamente più compiti in ambienti esigenti. Cerco un posto amministrativo in cui mettere a frutto il mio senso del servizio, la mia discrezione e il mio gusto per il lavoro preciso e strutturato.",
  experience: [
    {
      period: "In corso",
      current: true,
      role: "Assistente amministrativa",
      company: "Association Elan",
      url: "https://elan-ne.ch/",
      location: "La Chaux-de-Fonds",
      bullets: [],
      tools: ["Word", "Excel", "Outlook", "Google Calendar"],
    },
    {
      period: "2022 — 2023",
      role: "Operatrice in orologeria",
      company: "Rolex SA",
      url: "https://www.rolex.com/",
      via: "tramite Interima / Flexsis SA",
      location: "Bienne",
      bullets: [
        "Rigorosa applicazione di procedure di produzione e controlli qualità documentati.",
        "Inserimento e monitoraggio di indicatori di produzione; tracciabilità delle operazioni eseguite.",
        "Coordinamento quotidiano con il team per rispettare scadenze e standard.",
        "Gestione del tempo e prioritizzazione dei compiti in un ambiente ad alto ritmo.",
      ],
      highlight:
        "Accesso alla certificazione dei pezzi in pre-assemblaggio dopo la validazione delle diverse postazioni, a testimonianza di una buona versatilità e padronanza degli standard di qualità.",
    },
    {
      period: "2016 — 2019",
      role: "Assistente socio-educativa (apprendistato AFC)",
      company: "Association L’Accueil",
      url: "https://www.laccueilparascolaire.ch/",
      location: "Saint-Blaise",
      bullets: [
        "Accoglienza, presa in carico e accompagnamento di bambini e delle loro famiglie.",
        "Redazione di supporti pedagogici, osservazioni e resoconti scritti.",
        "Organizzazione e pianificazione di attività; coordinamento con il team educativo.",
        "Comunicazione scritta e orale regolare con le famiglie e i partner.",
      ],
      highlight:
        "Gestione di un progetto culturale sulle tradizioni (pianificazione, coordinamento delle risorse, redazione dei supporti).",
    },
    {
      period: "2015 — 2016",
      role: "Commessa",
      company: "Au Coq d’Or",
      url: "https://www.facebook.com/AuCoqdOrLaChauxDeFonds/",
      location: "La Chaux-de-Fonds",
      bullets: [
        "Accoglienza, consulenza clienti e cassa (gestione cassa giornaliera).",
        "Allestimento scaffali, etichettatura e cura della presentazione del negozio.",
        "Adattabilità e reattività nei periodi di forte affluenza.",
      ],
      highlight:
        "Gestione autonoma e strategica della disposizione dei prodotti, con una consulenza al cliente che favorisce la decisione d’acquisto, nel rispetto delle aspettative del cliente e nella valorizzazione di prodotti di qualità.",
    },
  ],
  education: [
    {
      year: "2021",
      title: "Attestato modulare di operatrice in orologeria",
      school: "Pôle Industrie, Le Locle",
    },
    {
      year: "2019",
      title: "Certificato federale di capacità (AFC) — Assistente socio-educativa",
      school: "Specializzazione infanzia",
    },
    {
      year: "2018",
      title: "Formazione «Bambini difficili»",
      school: "Formazione interaziendale (1 giornata)",
    },
  ],
  skills: {
    tools: [
      "Microsoft Word",
      "Microsoft Excel",
      "Microsoft Outlook",
      "Microsoft PowerPoint",
      "Adobe Creative Suite",
      "Google Calendar",
    ],
    admin: [
      {
        name: "Accoglienza telefonica e in presenza",
        example: "Accoglienza di famiglie e clienti — L’Accueil, Au Coq d’Or",
      },
      { name: "Relazione cliente", example: "Consulenza ai clienti — Au Coq d’Or" },
      { name: "Cassa e incasso", example: "Gestione cassa giornaliera — Au Coq d’Or" },
      {
        name: "Redazione e impaginazione",
        example: "Resoconti scritti e supporti pedagogici — L’Accueil",
      },
      { name: "Archiviazione e classificazione" },
      { name: "Riservatezza dei dati" },
    ],
    human: [
      { name: "Organizzazione", example: "Pianificazione di attività — L’Accueil" },
      { name: "Gestione delle priorità", example: "Produzione ad alto ritmo — Rolex" },
      { name: "Coordinamento del team", example: "Coordinamento quotidiano con il team — Rolex" },
      { name: "Discrezione" },
      { name: "Adattabilità", example: "Periodi di forte affluenza — Au Coq d’Or" },
      { name: "Senso del servizio" },
    ],
  },
  languages: [
    { name: "Francese", level: "Madrelingua", score: 100 },
    { name: "Inglese", level: "B1 — Intermedio", score: 55 },
    { name: "Tedesco", level: "A2 — Elementare", score: 30 },
  ],
  interests: ["Fotografia", "Strumenti digitali e comunicazione", "Lingue straniere"],
};
