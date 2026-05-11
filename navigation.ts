"use client";

import { createElement, type ComponentProps } from "react";
import Link, { type LinkProps } from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { UrlObject } from "url";

type HrefValue = LinkProps["href"] | { pathname?: string; hash?: string };

const resolveHref = (href: HrefValue) => {
  if (typeof href === "string") return href;
  if ("pathname" in href || "hash" in href) {
    const pathname = href.pathname ?? "";
    const hash = href.hash ? `#${href.hash}` : "";
    return `${pathname}${hash}`;
  }

  return href as UrlObject;
};

export const AppLink = ({
  href,
  ...props
}: Omit<ComponentProps<typeof Link>, "href"> & { href: HrefValue }) =>
  createElement(Link, { ...props, href: resolveHref(href) });

export { AppLink as Link, usePathname, useRouter };

export const getPathname = (href: HrefValue) =>
  typeof href === "string" ? href : resolveHref(href).toString();
