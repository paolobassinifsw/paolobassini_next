import { locales } from "./locales";
import { italianRouteSlugs } from "./routeSlugs.mjs";

const localePrefix = new RegExp(`^/(${locales.join("|")})(?=/|[?#]|$)`);

export function getPathLocale(path) {
  return path.match(localePrefix)?.[1];
}

const italianRoutes = Object.entries(italianRouteSlugs);
const routePaths = italianRoutes.map(([route, slug]) => [slug, route]);

function replaceRoutePrefix(pathname, routes) {
  const match = routes.find(
    ([prefix]) => pathname === prefix || pathname.startsWith(prefix + "/")
  );

  if (!match) return pathname;
  const [prefix, replacement] = match;
  return replacement + pathname.slice(prefix.length);
}

export function getRoutePath(pathname) {
  const path = pathname.replace(localePrefix, "") || "/";
  return replaceRoutePrefix(path, routePaths);
}

export function localizePath(pathname, locale) {
  const route = getRoutePath(pathname);
  const pagePath = locale === "it" ? replaceRoutePrefix(route, italianRoutes) : route;
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
    /\.[^/]+$/.test(pathname)
  ) {
    return href;
  }

  return localizePath(pathname, getPathLocale(pathname) ?? locale) + href.slice(pathname.length);
}
