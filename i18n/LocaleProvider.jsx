"use client";

import { createContext, useContext } from "react";
import { defaultLocale } from "./locales";
import { createTranslator } from "./translator";

const LocaleContext = createContext(defaultLocale);

export default function LocaleProvider({ locale, children }) {
  return <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  return useContext(LocaleContext);
}

export function useTranslator() {
  return createTranslator(useLocale());
}
