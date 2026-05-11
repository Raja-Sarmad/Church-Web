import { createTranslator, siteMessages } from "@/lib/site-intl-core";

export const setRequestLocale = (_locale: string) => {};
export const getMessages = async () => siteMessages;
export const getTranslations = async ({
  namespace,
}: {
  locale?: string;
  namespace?: string;
}) => createTranslator(namespace);
