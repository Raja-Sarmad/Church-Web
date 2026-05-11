"use client";

import React from "react";
import { createTranslator, siteMessages } from "@/lib/site-intl-core";

export const useLocale = () => "en";
export const useTranslations = (namespace?: string) =>
  createTranslator(namespace);

export const NextIntlClientProvider = ({
  children,
}: {
  children: React.ReactNode;
  locale?: string;
  messages?: unknown;
}) => <>{children}</>;

export const getMessages = () => siteMessages;
