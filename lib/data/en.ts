import type { ResumeData } from "./types";

export const en: ResumeData = {
  meta: {
    siteTitle: "Fortuna Chung — Administrative Profile",
    siteDescription:
      "Resume of Fortuna Chung, versatile and diligent administrative employee based in La Chaux-de-Fonds, Switzerland.",
  },
  identity: {
    firstName: "Fortuna",
    lastName: "Chung",
    role: "Administrative employee",
    tagline: "Versatile · Diligent · Service-oriented",
    birth: "05.09.1997",
    nationality: "Swiss",
    availability: "80 – 100 %",
  },
  contact: {
    email: "chungfortuna@gmail.com",
    phone: "+41 78 715 09 97",
    phoneFormatted: "078 715 09 97",
    address: "Rue de la Charrière 89",
    postal: "2300 La Chaux-de-Fonds",
    country: "Switzerland",
  },
  profile:
    "Versatile employee with solid experience in client relations, strict adherence to procedures, and team coordination. Diligent, organized, and comfortable with office tools (Microsoft Office, Adobe), I manage multiple tasks simultaneously in demanding environments. I am looking for an administrative position where I can apply my sense of service, my discretion, and my passion for precise, structured work.",
  experience: [
    {
      period: "2022 — 2023",
      role: "Watchmaking operator",
      company: "Rolex SA",
      via: "via Interima / Flexsis SA",
      location: "Biel",
      bullets: [
        "Strict application of documented production procedures and quality controls.",
        "Entry and tracking of production indicators; traceability of completed operations.",
        "Daily coordination with the team to meet deadlines and standards.",
        "Time management and task prioritization in a high-paced environment.",
      ],
      highlight: "",
    },
    {
      period: "2016 — 2019",
      role: "Socio-educational assistant (CFC apprenticeship)",
      company: "Association L’Accueil",
      location: "Saint-Blaise",
      bullets: [
        "Welcoming, supporting, and accompanying children and their families.",
        "Drafting of educational materials, observations, and written reports.",
        "Organization and planning of activities; coordination with the educational team.",
        "Regular written and oral communication with families and partners.",
      ],
      highlight:
        "Led a cultural project on local traditions (planning, resource coordination, materials drafting).",
    },
    {
      period: "2015 — 2016",
      role: "Sales assistant",
      company: "Aux Coq-d’Or",
      location: "La Chaux-de-Fonds",
      bullets: [
        "Welcoming, client advice, and checkout (daily cash handling).",
        "Stocking shelves, labeling, and maintaining store presentation.",
        "Adaptability and responsiveness during peak periods.",
      ],
      highlight: "",
    },
  ],
  education: [
    {
      year: "2021",
      title: "Modular certification as watchmaking operator",
      school: "Pôle Industrie, Le Locle",
    },
    {
      year: "2019",
      title: "Federal Certificate of Capacity (CFC) — Socio-educational assistant",
      school: "Specialization in early childhood",
    },
    {
      year: "2018",
      title: "Training: « Difficult Children »",
      school: "Inter-company training (1 day)",
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
      "Phone & in-person reception",
      "Client relations",
      "Checkout & cash handling",
      "Drafting & formatting",
      "Filing & archiving",
      "Data confidentiality",
    ],
    human: [
      "Organization",
      "Priority management",
      "Team coordination",
      "Discretion",
      "Adaptability",
      "Service-mindedness",
    ],
  },
  languages: [
    { name: "French", level: "Native speaker", score: 100 },
    { name: "English", level: "B1 — Intermediate", score: 55 },
    { name: "German", level: "A2 — Elementary", score: 30 },
  ],
  interests: ["Photography", "Digital tools & communication", "Foreign languages"],
};
