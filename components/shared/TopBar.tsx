"use client";

import React from "react";
import { useLocale, useTranslations } from "@/lib/site-intl";
import { Mail, MapPin, Twitter, Facebook, Instagram } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getSiteSettings } from "@/lib/sanity-site-data";

const TopBar = () => {
  const locale = useLocale();
  const isArabic = locale === "ar";
  const t = useTranslations("TopBar");
  const { data } = useQuery({
    queryKey: ["siteSettings", locale],
    queryFn: () => getSiteSettings(),
  });
  const topBar = data?.topBar;
  const socialLinks = topBar?.socialLinks?.length ? topBar.socialLinks : [];
  const xLink = socialLinks.find((item: any) => item.platform === "x")?.href;
  const facebookLink = socialLinks.find((item: any) => item.platform === "facebook")?.href;
  const instagramLink = socialLinks.find((item: any) => item.platform === "instagram")?.href;

  return (
    <div className="bg-primary text-white py-1.5 px-3 sm:px-4 lg:px-8 2xl:px-16">
      <div className="mx-auto flex flex-col lg:flex-row justify-between items-center text-xs sm:text-sm lg:text-[15px] font-medium gap-3 lg:gap-0 max-w-7xl">
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <a
            href={`mailto:${topBar?.email ?? t("email")}`}
            className="flex items-center text-sm gap-2 hover:text-white/80 transition-colors"
          >
            <Mail className="h-4 w-4 lg:h-[18px] lg:w-[18px] text-white" />
            <span>{topBar?.email ?? t("email")}</span>
          </a>
          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(topBar?.address ?? t("address"))}`}
            target="_blank"
            rel="noreferrer"
            className="hidden lg:flex text-sm items-center gap-2 border-l border-r px-4 border-white/20 pl-6 hover:text-white/80 transition-colors"
          >
            <MapPin className="h-4 w-4 lg:h-[18px] lg:w-[18px] text-white" />
            <span>{topBar?.address ?? t("address")}</span>
          </a>
        </div>

        <div className="hidden lg:block text-sm font-normal text-white/90">
          {topBar?.welcome ?? t("welcome")}
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <div className="flex items-center gap-2">
            <a
              href={
                xLink ??
                (isArabic
                  ? "https://x.com/UmutKopruleriAr"
                  : "https://x.com/umutkopruleri")
              }
              target="_blank"
              rel="noreferrer"
              className="size-8 sm:size-9 lg:size-10 flex items-center justify-center rounded-full border border-white/30 hover:bg-white hover:text-primary transition-all duration-300"
            >
              <Twitter className="h-4 w-4 lg:h-[18px] lg:w-[18px]" />
            </a>
            <a
              href={
                facebookLink ??
                (isArabic
                  ? "https://www.facebook.com/UmutKopruleriAr/"
                  : "https://www.facebook.com/UmutKopruleri/")
              }
              target="_blank"
              rel="noreferrer"
              className="size-8 sm:size-9 lg:size-10 flex items-center justify-center rounded-full border border-white/30 hover:bg-white hover:text-primary transition-all duration-300"
            >
              <Facebook className="h-4 w-4 lg:h-[18px] lg:w-[18px]" />
            </a>

            <a
              href={
                instagramLink ??
                (isArabic
                  ? "https://www.instagram.com/umutkopruleriar/"
                  : "https://www.instagram.com/umutkopruleri/")
              }
              target="_blank"
              rel="noreferrer"
              className="size-8 sm:size-9 lg:size-10 flex items-center justify-center rounded-full border border-white/30 hover:bg-white hover:text-primary transition-all duration-300"
            >
              <Instagram className="h-4 w-4 lg:h-[18px] lg:w-[18px]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
