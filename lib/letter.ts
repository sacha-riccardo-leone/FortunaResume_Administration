import { dataByLocale } from "@/lib/data";

// Fortuna's motivation letter (/lettre). French only; the letterhead comes
// from the CV data so it follows any change to her address or phone number.
const { identity, contact } = dataByLocale.fr;

export const SENDER = `${identity.firstName} ${identity.lastName}`;
const CITY = contact.postal.replace(/^\d{4}\s+/, "");

export const PDF_FILENAME = "Fortuna_lettre-de-motivation.pdf";
export const SUBJECT_LEAD = "Candidature – ";
export const DATE_PLACEHOLDER = `${CITY}, le …`;

const DEFAULT_POSITION = "Assistante administrative";
const DEFAULT_SALUTATION = "Madame, Monsieur,";

export const LETTER = {
  firstName: identity.firstName,
  lastName: identity.lastName,
  role: identity.role,
  sender: [contact.address, contact.postal, contact.phoneFormatted, contact.email],
  paragraphs: [
    "Actuellement assistante administrative à l’Association Elan, à La Chaux-de-Fonds, je souhaite poursuivre mon parcours administratif au sein de votre entreprise. Organisée, rigoureuse et à l’aise avec les outils bureautiques, j’aimerais mettre mon sens du service et ma discrétion au profit de votre équipe.",
    "Dans mon poste actuel, je travaille avec Word, Excel, Outlook et Google Agenda. Auparavant, en tant qu’opératrice en horlogerie chez Rolex SA, j’ai appliqué des procédures strictes, saisi et suivi des indicateurs de production et assuré la traçabilité des opérations. Cette rigueur m’a permis d’accéder à la certification des pièces en pré-assemblage, après validation des différents postes.",
    "Mon apprentissage d’assistante socio-éducative (CFC) à l’Association L’Accueil m’a formée à rédiger des comptes rendus, à planifier des activités et à communiquer clairement, à l’écrit comme à l’oral, avec les familles et les partenaires. Mon expérience de vendeuse m’a par ailleurs habituée à l’accueil de la clientèle, à la gestion de la caisse et au travail lors des périodes de forte affluence.",
    // No-break spaces keep "80 à 100 %" on one line, on screen and in the PDF.
    "Méthodique, je sais gérer plusieurs tâches en parallèle et fixer les priorités, aussi bien de manière autonome qu’en équipe. Disponible à un taux de 80 à 100 %, avec une entrée en fonction à convenir, je serais heureuse de vous présenter ma motivation lors d’un entretien.",
  ],
  closing:
    "Je vous remercie de l’attention portée à ma candidature et vous adresse mes salutations distinguées.",
  annexes: "Annexes : curriculum vitae, certificats de travail et diplômes",
};

// What Fortuna fills in for each application.
export type FieldName = "company" | "contact" | "street" | "city" | "position" | "salutation";

export const FIELDS: Record<FieldName, { label: string; placeholder: string; initial?: string }> = {
  company: { label: "Nom de l’entreprise", placeholder: "Nom de l’entreprise" },
  contact: { label: "Personne de contact", placeholder: "À l’att. de Madame / Monsieur …" },
  street: { label: "Rue et numéro", placeholder: "Rue et numéro" },
  city: { label: "NPA et localité", placeholder: "NPA Localité" },
  position: { label: "Intitulé du poste", placeholder: "Intitulé du poste", initial: DEFAULT_POSITION },
  salutation: { label: "Formule d’appel", placeholder: DEFAULT_SALUTATION, initial: DEFAULT_SALUTATION },
};

export const FIELD_NAMES = Object.keys(FIELDS) as FieldName[];
export const RECIPIENT_FIELDS = ["company", "contact", "street", "city"] as const;

export type LetterValues = Record<FieldName, string> & { date: string };

/** "La Chaux-de-Fonds, le 6 octobre 2026" ("le 1er octobre" on the first). */
export function todayLine(now = new Date()): string {
  let day = now.toLocaleDateString("fr-CH", { day: "numeric", month: "long", year: "numeric" });
  if (now.getDate() === 1) day = day.replace(/^1 /, "1er ");
  return `${CITY}, le ${day}`;
}

/** The variable lines of the letter, with defaults for anything left empty. */
export function resolveLetter(values: LetterValues) {
  return {
    recipient: RECIPIENT_FIELDS.map((name) => values[name]).filter(Boolean),
    date: values.date || todayLine(),
    subject: SUBJECT_LEAD + (values.position || DEFAULT_POSITION),
    salutation: values.salutation || DEFAULT_SALUTATION,
  };
}

/** The whole letter as plain text, for an e-mail or an online form. */
export function letterText(values: LetterValues): string {
  const { recipient, date, subject, salutation } = resolveLetter(values);
  const lines = [SENDER, ...LETTER.sender, ""];
  if (recipient.length) lines.push(...recipient, "");
  lines.push(date, "", subject, "", salutation, "");
  for (const paragraph of LETTER.paragraphs) lines.push(paragraph, "");
  lines.push(LETTER.closing, "", SENDER, "", LETTER.annexes);
  return lines.join("\n").replace(/ /g, " ");
}
