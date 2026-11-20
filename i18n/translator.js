import english from "./en.json";
import italian from "./it.json";

export function createTranslator(locale) {
  const messages = locale === "it" ? italian : english;

  return (key) => messages[key] ?? english[key] ?? key;
}
