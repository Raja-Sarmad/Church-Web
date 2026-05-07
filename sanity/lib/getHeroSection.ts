import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "./client";
import { heroQuery } from "./queries";

export type HeroSection = {
  slides?: {
    title?: string;
    slogan?: string;      // subtitle ki jagah slogan
    description?: string; // text ki jagah description
    image?: SanityImageSource;
    buttonLink?: string;  // link ki jagah buttonLink
    buttonLabel?: string;
  }[];
};

export async function getHeroSection(lang?: string) {
  // Agar sirf English hai toh lang ki zaroorat nahi, query direct chalegi
  return client.fetch<HeroSection>(heroQuery);
}