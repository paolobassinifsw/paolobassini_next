import english from "./en.json";

export function englishCopy(fields) {
  const copy = {};

  for (const [field, key] of Object.entries(fields)) {
    copy[`${field}Key`] = key;
    copy[field] = english[key];
  }

  return copy;
}
