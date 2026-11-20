"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import { localeCookie, locales, resolveLocale } from "@/i18n/locales";

export default function LanguageSwitcher() {
  const locale = useLocale();

  function changeLanguage(event) {
    const language = resolveLocale(event.target.value);
    const secure = window.location.protocol === "https:" ? "; Secure" : "";

    document.cookie = `${localeCookie}=${language}; Path=/; Max-Age=31536000; SameSite=Lax${secure}`;
    window.location.reload();
  }

  return (
    <select
      aria-label={locale === "it" ? "Lingua del sito" : "Site language"}
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
