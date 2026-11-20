import { cache } from "react";
import { cookies } from "next/headers";
import { localeCookie, resolveLocale } from "./locales";
import { createTranslator } from "./translator";

export const getLocale = cache(async () => {
  const cookieStore = await cookies();
  return resolveLocale(cookieStore.get(localeCookie)?.value);
});

export const getTranslator = cache(async () => createTranslator(await getLocale()));
