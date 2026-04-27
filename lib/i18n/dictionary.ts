import type { Locale } from "./locales";

export type UIDictionary = {
  nav: {
    profil: string;
    experience: string;
    competences: string;
    formation: string;
    contact: string;
    cta: string;
    navigation: string;
    contactDirect: string;
    openMenu: string;
    closeMenu: string;
    selectLanguage: string;
  };
  hero: {
    eyebrowIndex: string; // e.g. "01 — Profil"
    locationLabel: string;
    phoneLabel: string;
    emailLabel: string;
    locatedIn: (city: string, availability: string) => string;
  };
  about: {
    eyebrow: string;
    bornOn: string;
    nationality: string;
    availability: string;
  };
  experience: {
    eyebrow: string;
    achievement: string;
  };
  skills: {
    eyebrow: string;
    tools: string;
    admin: string;
    human: string;
    languages: string;
  };
  education: {
    eyebrow: string;
  };
  contact: {
    eyebrow: string;
    headlineLead: string;
    headlineEmphasis: string;
    pitch: (availability: string, postal: string) => string;
    emailLabel: string;
    phoneLabel: string;
    addressLabel: string;
    cta: string;
  };
  footer: {
    rights: string;
    cv: string;
    location: string;
  };
  print: {
    button: string;
    ariaLabel: string;
    headerTagline: string; // tagline for print header (often same as hero tagline)
    contactEmail: string;
    contactPhone: string;
    contactAddress: string;
    metaLine: (birth: string, nationality: string, availability: string) => string;
    profileTitle: string;
    experienceTitle: string;
    educationTitle: string;
    skillsTitle: string;
    skillsTools: string;
    skillsAdmin: string;
    skillsHuman: string;
    languagesTitle: string;
    interestsTitle: string;
  };
};

const fr: UIDictionary = {
  nav: {
    profil: "Profil",
    experience: "Expérience",
    competences: "Compétences",
    formation: "Formation",
    contact: "Contact",
    cta: "Prendre contact",
    navigation: "Navigation",
    contactDirect: "Contact direct",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    selectLanguage: "Choisir la langue",
  },
  hero: {
    eyebrowIndex: "01 — Profil",
    locationLabel: "Lieu",
    phoneLabel: "Téléphone",
    emailLabel: "E-mail",
    locatedIn: (city, availability) =>
      `Basée à ${city}, disponible ${availability}.`,
  },
  about: {
    eyebrow: "Description",
    bornOn: "Née le",
    nationality: "Nationalité",
    availability: "Disponibilité",
  },
  experience: {
    eyebrow: "Expérience professionnelle",
    achievement: "Réalisation",
  },
  skills: {
    eyebrow: "Compétences / Savoir faire, savoir être",
    tools: "Outils bureautiques",
    admin: "Compétences administratives",
    human: "Aptitudes personnelles",
    languages: "Langues",
  },
  education: {
    eyebrow: "Formation",
  },
  contact: {
    eyebrow: "Contact",
    headlineLead: "À disposition pour échange ",
    headlineEmphasis: "professionnel.",
    pitch: (availability, postal) =>
      `Pour toute opportunité administrative, réponse sous 48 heures. Disponibilité ${availability} — ${postal}, Suisse et environs.`,
    emailLabel: "E-mail",
    phoneLabel: "Téléphone",
    addressLabel: "Adresse",
    cta: "Envoyer un message",
  },
  footer: {
    rights: "Tous droits réservés.",
    cv: "Curriculum Vitæ",
    location: "La Chaux-de-Fonds · CH",
  },
  print: {
    button: "Télécharger PDF",
    ariaLabel: "Télécharger le CV au format PDF",
    headerTagline: "",
    contactEmail: "E-mail",
    contactPhone: "Téléphone",
    contactAddress: "Adresse",
    metaLine: (birth, nationality, availability) =>
      `Née le ${birth} · ${nationality} · Disponibilité ${availability}`,
    profileTitle: "Profil",
    experienceTitle: "Expérience professionnelle",
    educationTitle: "Formation",
    skillsTitle: "Compétences / Savoir faire, savoir être",
    skillsTools: "Outils",
    skillsAdmin: "Administratif",
    skillsHuman: "Personnelles",
    languagesTitle: "Langues",
    interestsTitle: "Intérêts",
  },
};

const en: UIDictionary = {
  nav: {
    profil: "Profile",
    experience: "Experience",
    competences: "Skills",
    formation: "Education",
    contact: "Contact",
    cta: "Get in touch",
    navigation: "Navigation",
    contactDirect: "Direct contact",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    selectLanguage: "Select language",
  },
  hero: {
    eyebrowIndex: "01 — Profile",
    locationLabel: "Location",
    phoneLabel: "Phone",
    emailLabel: "Email",
    locatedIn: (city, availability) =>
      `Based in ${city}, available ${availability}.`,
  },
  about: {
    eyebrow: "Description",
    bornOn: "Born on",
    nationality: "Nationality",
    availability: "Availability",
  },
  experience: {
    eyebrow: "Professional experience",
    achievement: "Achievement",
  },
  skills: {
    eyebrow: "Skills / Know-how & soft skills",
    tools: "Office tools",
    admin: "Administrative skills",
    human: "Personal skills",
    languages: "Languages",
  },
  education: {
    eyebrow: "Education",
  },
  contact: {
    eyebrow: "Contact",
    headlineLead: "Available for a professional ",
    headlineEmphasis: "exchange.",
    pitch: (availability, postal) =>
      `For any administrative opportunity, reply within 48 hours. Availability ${availability} — ${postal}, Switzerland and surroundings.`,
    emailLabel: "Email",
    phoneLabel: "Phone",
    addressLabel: "Address",
    cta: "Send a message",
  },
  footer: {
    rights: "All rights reserved.",
    cv: "Curriculum Vitae",
    location: "La Chaux-de-Fonds · CH",
  },
  print: {
    button: "Download PDF",
    ariaLabel: "Download CV as PDF",
    headerTagline: "",
    contactEmail: "Email",
    contactPhone: "Phone",
    contactAddress: "Address",
    metaLine: (birth, nationality, availability) =>
      `Born on ${birth} · ${nationality} · Availability ${availability}`,
    profileTitle: "Profile",
    experienceTitle: "Professional experience",
    educationTitle: "Education",
    skillsTitle: "Skills / Know-how & soft skills",
    skillsTools: "Tools",
    skillsAdmin: "Administrative",
    skillsHuman: "Personal",
    languagesTitle: "Languages",
    interestsTitle: "Interests",
  },
};

const de: UIDictionary = {
  nav: {
    profil: "Profil",
    experience: "Erfahrung",
    competences: "Kompetenzen",
    formation: "Ausbildung",
    contact: "Kontakt",
    cta: "Kontakt aufnehmen",
    navigation: "Navigation",
    contactDirect: "Direktkontakt",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    selectLanguage: "Sprache wählen",
  },
  hero: {
    eyebrowIndex: "01 — Profil",
    locationLabel: "Ort",
    phoneLabel: "Telefon",
    emailLabel: "E-Mail",
    locatedIn: (city, availability) =>
      `Mit Sitz in ${city}, verfügbar ${availability}.`,
  },
  about: {
    eyebrow: "Beschreibung",
    bornOn: "Geboren am",
    nationality: "Nationalität",
    availability: "Verfügbarkeit",
  },
  experience: {
    eyebrow: "Berufserfahrung",
    achievement: "Erfolg",
  },
  skills: {
    eyebrow: "Kompetenzen / Fach- und Sozialkompetenzen",
    tools: "Bürotools",
    admin: "Verwaltungskompetenzen",
    human: "Persönliche Fähigkeiten",
    languages: "Sprachen",
  },
  education: {
    eyebrow: "Ausbildung",
  },
  contact: {
    eyebrow: "Kontakt",
    headlineLead: "Bereit für einen professionellen ",
    headlineEmphasis: "Austausch.",
    pitch: (availability, postal) =>
      `Für jede Verwaltungsmöglichkeit, Antwort innerhalb von 48 Stunden. Verfügbarkeit ${availability} — ${postal}, Schweiz und Umgebung.`,
    emailLabel: "E-Mail",
    phoneLabel: "Telefon",
    addressLabel: "Adresse",
    cta: "Nachricht senden",
  },
  footer: {
    rights: "Alle Rechte vorbehalten.",
    cv: "Lebenslauf",
    location: "La Chaux-de-Fonds · CH",
  },
  print: {
    button: "PDF herunterladen",
    ariaLabel: "Lebenslauf als PDF herunterladen",
    headerTagline: "",
    contactEmail: "E-Mail",
    contactPhone: "Telefon",
    contactAddress: "Adresse",
    metaLine: (birth, nationality, availability) =>
      `Geboren am ${birth} · ${nationality} · Verfügbarkeit ${availability}`,
    profileTitle: "Profil",
    experienceTitle: "Berufserfahrung",
    educationTitle: "Ausbildung",
    skillsTitle: "Kompetenzen / Fach- und Sozialkompetenzen",
    skillsTools: "Tools",
    skillsAdmin: "Verwaltung",
    skillsHuman: "Persönlich",
    languagesTitle: "Sprachen",
    interestsTitle: "Interessen",
  },
};

const it: UIDictionary = {
  nav: {
    profil: "Profilo",
    experience: "Esperienza",
    competences: "Competenze",
    formation: "Formazione",
    contact: "Contatto",
    cta: "Mettiti in contatto",
    navigation: "Navigazione",
    contactDirect: "Contatto diretto",
    openMenu: "Apri il menu",
    closeMenu: "Chiudi il menu",
    selectLanguage: "Seleziona la lingua",
  },
  hero: {
    eyebrowIndex: "01 — Profilo",
    locationLabel: "Luogo",
    phoneLabel: "Telefono",
    emailLabel: "E-mail",
    locatedIn: (city, availability) =>
      `Con sede a ${city}, disponibile ${availability}.`,
  },
  about: {
    eyebrow: "Descrizione",
    bornOn: "Nata il",
    nationality: "Nazionalità",
    availability: "Disponibilità",
  },
  experience: {
    eyebrow: "Esperienza professionale",
    achievement: "Realizzazione",
  },
  skills: {
    eyebrow: "Competenze / Know-how e attitudini",
    tools: "Strumenti d'ufficio",
    admin: "Competenze amministrative",
    human: "Attitudini personali",
    languages: "Lingue",
  },
  education: {
    eyebrow: "Formazione",
  },
  contact: {
    eyebrow: "Contatto",
    headlineLead: "Disponibile per uno scambio ",
    headlineEmphasis: "professionale.",
    pitch: (availability, postal) =>
      `Per qualsiasi opportunità amministrativa, risposta entro 48 ore. Disponibilità ${availability} — ${postal}, Svizzera e dintorni.`,
    emailLabel: "E-mail",
    phoneLabel: "Telefono",
    addressLabel: "Indirizzo",
    cta: "Invia un messaggio",
  },
  footer: {
    rights: "Tutti i diritti riservati.",
    cv: "Curriculum Vitae",
    location: "La Chaux-de-Fonds · CH",
  },
  print: {
    button: "Scarica PDF",
    ariaLabel: "Scarica il CV in formato PDF",
    headerTagline: "",
    contactEmail: "E-mail",
    contactPhone: "Telefono",
    contactAddress: "Indirizzo",
    metaLine: (birth, nationality, availability) =>
      `Nata il ${birth} · ${nationality} · Disponibilità ${availability}`,
    profileTitle: "Profilo",
    experienceTitle: "Esperienza professionale",
    educationTitle: "Formazione",
    skillsTitle: "Competenze / Know-how e attitudini",
    skillsTools: "Strumenti",
    skillsAdmin: "Amministrative",
    skillsHuman: "Personali",
    languagesTitle: "Lingue",
    interestsTitle: "Interessi",
  },
};

export const DICTIONARIES: Record<Locale, UIDictionary> = { fr, en, de, it };
