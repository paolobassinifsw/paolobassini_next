"use client";

import { useLocale, useTranslator } from "@/i18n/LocaleProvider";
import { localeCookie, locales, resolveLocale } from "@/i18n/locales";

import { localizePath } from "@/i18n/paths";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const t = useTranslator();

  function changeLanguage(event) {
    const language = resolveLocale(event.target.value);
    const secure = window.location.protocol === "https:" ? "; Secure" : "";

    document.cookie = `${localeCookie}=${language}; Path=/; Max-Age=31536000; SameSite=Lax${secure}`;
    const { pathname, search, hash } = window.location;
    window.location.assign(localizePath(pathname, language) + search + hash);
  }

  return (
    <select
      aria-label={t("nav.siteLanguage")}
      value={locale}
      onChange={changeLanguage}
      className="w-auto bg-transparent text-reset border rounded px-2"
    >
      {locales.map((language) => (
        <option key={language} value={language} lang={language}>
          {language.toUpperCase()}
        </option>
      ))}
    </select>
  );
}
