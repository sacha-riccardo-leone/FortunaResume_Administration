import type { ResumeData } from "./types";

export const fr: ResumeData = {
  meta: {
    siteTitle: "Fortuna Chung — Profil Administratif",
    siteDescription:
      "CV de Fortuna Chung, collaboratrice administrative polyvalente et rigoureuse, basée à La Chaux-de-Fonds, Suisse.",
  },
  identity: {
    firstName: "Fortuna",
    lastName: "Chung",
    role: "Employée administrative",
    tagline: "Polyvalente · Rigoureuse · Orientée service",
    birth: "05.09.1997",
    nationality: "Suisse",
    availability: "80 – 100 %",
    start: "à convenir",
  },
  contact: {
    email: "chungfortuna@gmail.com",
    phone: "+41 78 715 09 97",
    phoneFormatted: "078 715 09 97",
    address: "Rue de la Charrière 89",
    postal: "2300 La Chaux-de-Fonds",
    country: "Suisse",
    linkedin: "https://www.linkedin.com/in/fortuna-chung-ming-kan-253414335/",
  },
  profile:
    "Collaboratrice polyvalente avec une solide expérience de la relation client, du respect strict des procédures et de la coordination d’équipe. Rigoureuse, organisée et à l’aise avec les outils bureautiques, je gère simultanément plusieurs tâches dans des environnements exigeants. Je recherche un poste administratif dans lequel mettre à profit mon sens du service, ma discrétion et mon goût pour le travail précis et structuré.",
  experience: [
    {
      period: "En cours",
      current: true,
      role: "Assistante administrative",
      company: "Association Elan",
      url: "https://elan-ne.ch/",
      location: "La Chaux-de-Fonds",
      bullets: [],
      tools: ["Word", "Excel", "Outlook", "Google Agenda"],
    },
    {
      period: "2022 — 2023",
      role: "Opératrice en horlogerie",
      company: "Rolex SA",
      url: "https://www.rolex.com/",
      via: "via Interima / Flexsis SA",
      location: "Bienne",
      bullets: [
        "Application stricte de procédures de production et de contrôles qualité documentés.",
        "Saisie et suivi d’indicateurs de production ; traçabilité des opérations réalisées.",
        "Coordination quotidienne avec l’équipe pour respecter les délais et les standards.",
        "Gestion du temps et priorisation des tâches dans un environnement à forte cadence.",
      ],
      highlight:
        "Accès à la certification des pièces en pré-assemblage après validation des différents postes, reflétant une bonne polyvalence et une maîtrise des standards qualité.",
    },
    {
      period: "2016 — 2019",
      role: "Assistante socio-éducative (apprentissage CFC)",
      company: "Association L’Accueil",
      url: "https://www.laccueilparascolaire.ch/",
      location: "Saint-Blaise",
      bullets: [
        "Accueil, prise en charge et accompagnement d’enfants et de leurs familles.",
        "Rédaction de supports pédagogiques, d’observations et de comptes rendus écrits.",
        "Organisation et planification d’activités ; coordination avec l’équipe éducative.",
        "Communication écrite et orale régulière avec les familles et les partenaires.",
      ],
      highlight:
        "Pilotage d’un projet culturel autour des traditions (planification, coordination des ressources, rédaction des supports).",
    },
    {
      period: "2015 — 2016",
      role: "Vendeuse",
      company: "Au Coq d’Or",
      url: "https://www.facebook.com/AuCoqdOrLaChauxDeFonds/",
      location: "La Chaux-de-Fonds",
      bullets: [
        "Accueil, conseil clientèle et encaissement (gestion de caisse quotidienne).",
        "Mise en rayon, étiquetage et suivi de la bonne présentation du magasin.",
        "Adaptabilité et réactivité lors des périodes de forte affluence.",
      ],
      highlight:
        "Gestion autonome et stratégique de la mise en place des produits, avec un conseil client favorisant la décision d’achat, dans le respect des attentes du client et la valorisation de produits de qualité.",
    },
  ],
  education: [
    {
      year: "2021",
      title: "Attestation modulaire d’opératrice en horlogerie",
      school: "Pôle Industrie, Le Locle",
    },
    {
      year: "2019",
      title: "Certificat fédéral de capacité (CFC) d’assistante socio-éducative",
      school: "Spécialisation enfance",
    },
    {
      year: "2018",
      title: "Formation « Les enfants difficiles »",
      school: "Formation inter-entreprise (1 journée)",
    },
  ],
  documents: {
    diplomas: [
      {
        title: "Attestation de formation — Opératrice polyvalente en horlogerie",
        issuer: "Pôle Industrie, Le Locle",
        date: "23.12.2021",
        file: "attestation-formation-pole-industrie.pdf",
      },
      {
        title: "Attestation intermédiaire de formation — Opératrice polyvalente en horlogerie",
        issuer: "Pôle Industrie, Le Locle",
        date: "09.11.2021",
        file: "attestation-intermediaire-pole-industrie.pdf",
      },
      {
        title: "CFC d’assistante socio-éducative — Bulletin de notes",
        issuer: "Canton de Neuchâtel",
        date: "01.07.2019",
        file: "cfc-assistante-socio-educative.pdf",
      },
    ],
    certificates: [
      {
        title: "Certificat de travail — Opératrice en horlogerie (mission temporaire)",
        issuer: "Interima SA, Bienne",
        date: "28.12.2023",
        file: "certificat-travail-interima.pdf",
      },
      {
        title: "Certificat de travail intermédiaire — Apprentissage d’assistante socio-éducative",
        issuer: "Association L’Accueil, Saint-Blaise",
        date: "23.04.2019",
        file: "certificat-travail-laccueil.pdf",
      },
      {
        title: "Certificat de travail — Vendeuse",
        issuer: "Au Coq d’Or, La Chaux-de-Fonds",
        date: "2015 — 2016",
        file: "certificat-travail-au-coq-dor.pdf",
      },
    ],
  },
  skills: {
    tools: [
      "Microsoft Word",
      "Microsoft Excel",
      "Microsoft Outlook",
      "Microsoft PowerPoint",
      "Adobe Creative Suite",
      "Google Agenda",
    ],
    admin: [
      "Accueil téléphonique & physique",
      "Relation client",
      "Encaissement & caisse",
      "Rédaction & mise en forme",
      "Classement & archivage",
      "Confidentialité des données",
    ],
    human: [
      "Organisation",
      "Gestion des priorités",
      "Coordination d’équipe",
      "Discrétion",
      "Adaptabilité",
      "Sens du service",
    ],
  },
  languages: [
    { name: "Français", level: "Langue maternelle", score: 100 },
    { name: "Anglais", level: "B1 — Intermédiaire", score: 55 },
    { name: "Allemand", level: "A2 — Élémentaire", score: 30 },
  ],
  interests: ["Photographie", "Outils numériques & communication", "Langues étrangères"],
};
