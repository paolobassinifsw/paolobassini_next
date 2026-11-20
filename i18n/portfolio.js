import { isLocale } from "./locales.mjs";

export const sections = {
  home: { it: "", en: "" },
  work: { it: "progetti", en: "work" },
  about: { it: "chi-sono", en: "about" },
  expertise: { it: "competenze", en: "expertise" },
  blog: { it: "blog", en: "blog" },
  contact: { it: "contatti", en: "contact" },
};

export const messages = {
  it: {
    navigation: "Navigazione principale",
    language: "Lingua",
    menu: {
      home: "Home",
      work: "Progetti",
      about: "Chi sono",
      expertise: "Competenze",
      blog: "Blog",
      contact: "Contatti",
    },
    intro: "Sviluppo frontend, design system e UX/UI.",
  },
  en: {
    navigation: "Main navigation",
    language: "Language",
    menu: {
      home: "Home",
      work: "Work",
      about: "About",
      expertise: "Expertise",
      blog: "Blog",
      contact: "Contact",
    },
    intro: "Frontend development, design systems and UX/UI.",
  },
};

export function sectionHref(locale, id) {
  const slug = sections[id][locale];
  return slug ? `/${locale}/${slug}` : `/${locale}`;
}

export function findSection(locale, segments = []) {
  if (!isLocale(locale) || segments.length > 1) return undefined;

  const slug = segments[0] ?? "";
  return Object.keys(sections).find((id) => sections[id][locale] === slug);
}
