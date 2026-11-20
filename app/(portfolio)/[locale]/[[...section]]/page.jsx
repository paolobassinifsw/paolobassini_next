import { notFound } from "next/navigation";
import PortfolioHeader from "@/components/portfolio/PortfolioHeader";
import { findSection, messages, sections } from "@/i18n/portfolio";
import styles from "./page.module.css";

export function generateStaticParams({ params: { locale } }) {
  return Object.values(sections).map((slugs) => ({
    section: slugs[locale] ? [slugs[locale]] : [],
  }));
}

export async function generateMetadata({ params }) {
  const { locale, section } = await params;
  const id = findSection(locale, section);
  if (!id) notFound();

  const copy = messages[locale];
  return id === "home"
    ? { title: "Paolo Bassini", description: copy.intro }
    : { title: `${copy.menu[id]} | Paolo Bassini` };
}

export default async function PortfolioPage({ params }) {
  const { locale, section } = await params;
  const id = findSection(locale, section);
  if (!id) notFound();

  const copy = messages[locale];
  const isHome = id === "home";

  return (
    <>
      <PortfolioHeader locale={locale} section={id} />
      <main className={`container ${styles.main}`}>
        <h1>{isHome ? "Paolo Bassini" : copy.menu[id]}</h1>
        {isHome && <p>{copy.intro}</p>}
      </main>
    </>
  );
}
