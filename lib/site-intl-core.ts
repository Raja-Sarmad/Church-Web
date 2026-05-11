import type { ReactNode } from "react";
import messages from "@/messages/en.json";

type MessageTree = Record<string, any>;

const data = messages as MessageTree;

const getPathValue = (source: MessageTree, path?: string) => {
  if (!path) return source;

  return path.split(".").reduce<any>((acc, key) => {
    if (acc == null) return undefined;
    return acc[key];
  }, source);
};

const applyRichValues = (
  value: string,
  values: Record<string, (chunks: string) => ReactNode>,
) => {
  const keys = Object.keys(values);
  if (!keys.length) return value;

  return keys.reduce<ReactNode>((acc, key) => {
    if (typeof acc !== "string") return acc;

    const pattern = new RegExp(`<${key}>(.*?)</${key}>`, "g");
    const matches = [...acc.matchAll(pattern)];
    if (!matches.length) return acc;

    const parts: React.ReactNode[] = [];
    let lastIndex = 0;

    matches.forEach((match, index) => {
      const matchIndex = match.index ?? 0;
      if (matchIndex > lastIndex) {
        parts.push(acc.slice(lastIndex, matchIndex));
      }

      parts.push(values[key](match[1] ?? ""));
      lastIndex = matchIndex + match[0].length;

      if (index === matches.length - 1 && lastIndex < acc.length) {
        parts.push(acc.slice(lastIndex));
      }
    });

    return parts;
  }, value);
};

export const createTranslator = (namespace?: string) => {
  const scoped = getPathValue(data, namespace) ?? {};

  const translate = (path: string) => {
    const value = getPathValue(scoped, path);
    return typeof value === "string" ? value : "";
  };

  translate.raw = (path?: string) => getPathValue(scoped, path);
  translate.rich = (
    path: string,
    values: Record<string, (chunks: string) => React.ReactNode>,
  ) => applyRichValues(translate(path), values);

  return translate;
};

export const siteMessages = data;
