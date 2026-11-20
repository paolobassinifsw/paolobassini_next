export const localeCookie = "portfolio-locale";
export const locales = ["en", "it"];
export const defaultLocale = "en";

export function resolveLocale(value) {
  return locales.includes(value) ? value : defaultLocale;
}
