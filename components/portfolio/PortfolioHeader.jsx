import Link from "next/link";
import { locales } from "@/i18n/locales.mjs";
import { messages, sectionHref, sections } from "@/i18n/portfolio";
import styles from "./PortfolioHeader.module.css";

export default function PortfolioHeader({ locale, section }) {
  const copy = messages[locale];

  return (
    <header className={`container ${styles.header}`}>
      <Link className={styles.brand} href={sectionHref(locale, "home")}>
        Paolo Bassini
      </Link>
      <nav className={styles.navigation} aria-label={copy.navigation}>
        {Object.keys(sections).map((id) => (
          <Link
            key={id}
            href={sectionHref(locale, id)}
            aria-current={id === section ? "page" : undefined}
          >
            {copy.menu[id]}
          </Link>
        ))}
      </nav>
      <nav className={styles.languages} aria-label={copy.language}>
        {locales.map((language) => (
          <Link
            key={language}
            href={sectionHref(language, section)}
            hrefLang={language}
            lang={language}
            aria-label={language === "it" ? "Italiano" : "English"}
            aria-current={language === locale ? "page" : undefined}
          >
            {language.toUpperCase()}
          </Link>
        ))}
      </nav>
    </header>
  );
}
