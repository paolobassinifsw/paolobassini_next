import { cache } from "react";
import { headers } from "next/headers";
import { localeHeader, resolveLocale } from "./locales";
import { createTranslator } from "./translator";

export const getLocale = cache(async () => {
  return resolveLocale((await headers()).get(localeHeader));
});

export const getTranslator = cache(async () => createTranslator(await getLocale()));
