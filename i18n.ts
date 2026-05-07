import { defineRouting } from "next-intl/routing";

export const locales = ["en", "tr", "ar"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  tr: "Türkçe",
  ar: "العربية",
};

export const rtlLocales: Locale[] = ["ar"];

// --- IS SECTION KO UPDATE/ADD KAREIN ---
export const routing = defineRouting({
  locales: locales,
  defaultLocale: defaultLocale,
  
  // Is line ki wajah se /en URL mein nazar nahi aayega
  localePrefix: "as-needed" 
});
