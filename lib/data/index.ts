import type { Locale } from "@/lib/i18n/locales";
import { fr } from "./fr";
import { en } from "./en";
import { de } from "./de";
import { it } from "./it";
import type { ResumeData } from "./types";

export type { ResumeData, ExperienceEntry, EducationEntry, LanguageEntry } from "./types";

export const dataByLocale: Record<Locale, ResumeData> = { fr, en, de, it };

// Default export for code paths (e.g. server metadata) that need a baseline.
export const resumeData = fr;
