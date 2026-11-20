import italian from "./it.json";

export function createTranslator(locale) {
  return (text) =>
    locale === "it" && Object.hasOwn(italian, text) ? italian[text] : text;
}
