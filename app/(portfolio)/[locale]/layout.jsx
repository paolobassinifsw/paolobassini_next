import { notFound } from "next/navigation";
import SiteDocument from "@/components/common/SiteDocument";
import { isLocale, locales } from "@/i18n/locales.mjs";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function PortfolioLayout({ children, params }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return <SiteDocument lang={locale}>{children}</SiteDocument>;
}
