"use client";

import Link from "next/link";
import { useLocale } from "./LocaleProvider";
import { localizeHref } from "./paths";

export default function LocalizedLink({ href, as, ...props }) {
  const locale = useLocale();

  return (
    <Link
      {...props}
      href={localizeHref(href, locale)}
      as={as ? localizeHref(as, locale) : undefined}
    />
  );
}
