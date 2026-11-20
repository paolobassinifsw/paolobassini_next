import { locales } from "./locales";

const localePrefix = new RegExp(`^/(${locales.join("|")})(?=/|[?#]|$)`);

export function getPathLocale(path) {
  return path.match(localePrefix)?.[1];
}

export function stripPathLocale(path) {
  return path.replace(localePrefix, "") || "/";
}

export function localizePath(pathname, locale) {
  const pagePath = stripPathLocale(pathname);
  return pagePath === "/" ? `/${locale}` : `/${locale}${pagePath}`;
}

export function localizeHref(href, locale) {
  if (typeof href !== "string") {
    if (href?.host || href?.hostname || href?.protocol) return href;
    const pathname = href?.pathname;
    return pathname ? { ...href, pathname: localizeHref(pathname, locale) } : href;
  }

  const [pathname] = href.split(/[?#]/, 1);
  if (
    !pathname.startsWith("/") ||
    pathname.startsWith("//") ||
    /^\/(?:api|_next|assets)(?:\/|$)/.test(pathname) ||
    /\.[^/]+$/.test(pathname) ||
    getPathLocale(pathname)
  ) {
    return href;
  }

  return localizePath(pathname, locale) + href.slice(pathname.length);
}
