import { cache } from "react";
import { cookies, headers } from "next/headers";
import { defaultLocale, localeCookie, locales } from "./locales";
import { createTranslator } from "./translator";

function getBrowserLocale(acceptLanguage = "") {
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

export const getLocale = cache(async () => {
  const savedLocale = (await cookies()).get(localeCookie)?.value;
  if (locales.includes(savedLocale)) return savedLocale;

  const acceptLanguage = (await headers()).get("accept-language");
  return getBrowserLocale(acceptLanguage ?? "");
});

export const getTranslator = cache(async () => createTranslator(await getLocale()));
