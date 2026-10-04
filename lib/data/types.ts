export type ExperienceEntry = {
  period: string;
  current?: boolean;
  role: string;
  company: string;
  url?: string;
  via?: string;
  location: string;
  bullets: string[];
  highlight?: string;
  tools?: string[];
};

export type EducationEntry = {
  year: string;
  title: string;
  school: string;
};

export type LanguageEntry = {
  name: string;
  level: string;
  score: number;
};

export type ResumeData = {
  meta: {
    siteTitle: string;
    siteDescription: string;
  };
  identity: {
    firstName: string;
    lastName: string;
    role: string;
    tagline: string;
    birth: string;
    nationality: string;
    availability: string;
    start: string;
  };
  contact: {
    email: string;
    phone: string;
    phoneFormatted: string;
    address: string;
    postal: string;
    country: string;
    linkedin: string;
  };
  profile: string;
  experience: ExperienceEntry[];
  education: EducationEntry[];
  skills: {
    tools: string[];
    admin: string[];
    human: string[];
  };
  languages: LanguageEntry[];
  interests: string[];
};
