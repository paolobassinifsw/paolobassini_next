export const localeCookie = "portfolio-locale";
export const localeHeader = "x-portfolio-locale";
export const locales = ["en", "it"];
export const defaultLocale = "it";

export function resolveLocale(value) {
  return locales.includes(value) ? value : defaultLocale;
}

export function getBrowserLocale(acceptLanguage = "") {
  let preferredLanguage;
  let highestQuality = 0;

  for (const preference of acceptLanguage.split(",")) {
    const [tag, ...parameters] = preference.trim().toLowerCase().split(";");
    if (!tag) continue;

    const weight = parameters.find((parameter) => parameter.trim().startsWith("q="));
    const quality = weight ? Number(weight.trim().slice(2)) : 1;

    if (quality > highestQuality && quality <= 1) {
      preferredLanguage = tag.trim().split("-")[0];
      highestQuality = quality;
    }
  }

  return preferredLanguage === "en" ? "en" : defaultLocale;
}
