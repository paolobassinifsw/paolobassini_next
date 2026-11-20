export const locales = ["it", "en"];
export const defaultLocale = locales[0];

export function isLocale(value) {
  return locales.includes(value);
}
