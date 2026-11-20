import { NextResponse } from "next/server";
import { getBrowserLocale, localeCookie, localeHeader, locales } from "@/i18n/locales";
import { getPathLocale, localizePath } from "@/i18n/paths";

export function middleware(request) {
  const url = request.nextUrl.clone();
  const locale = getPathLocale(url.pathname);

  if (!locale) {
    const savedLocale = request.cookies.get(localeCookie)?.value;
    const preferredLocale = locales.includes(savedLocale)
      ? savedLocale
      : getBrowserLocale(request.headers.get("accept-language") ?? "");

    url.pathname = localizePath(url.pathname, preferredLocale);
    const response = NextResponse.redirect(url);
    response.headers.set("Cache-Control", "private, no-store");
    response.headers.set("Vary", "Accept-Language, Cookie");
    return response;
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(localeHeader, locale);
  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: ["/((?!api(?:/|$)|_next(?:/|$)|assets(?:/|$)|.*\\.[^/]+$).*)"],
};
