import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "./client";

export type DonationPostDetail = {
  slug?: string;
  category?: string;
  title?: string;
  description?: string;
  image?: SanityImageSource;
  raisedAmount?: number;
  goalAmount?: number;
  accentColor?: string;
  // ... baaki fields agar chahiye hon
};

// 1. YE FUNCTION SARE CARDS LAYE GA
export async function getDonationPosts(lang: string) {
  // Simple query jo sare donation posts utha le gi
  const query = `*[_type == "donationPost"] {
    "slug": slug.current,
    "category": category,
    title,
    description,
    image,
    raisedAmount,
    goalAmount,
    accentColor
  }`;
  
  return client.fetch(query, {}, { cache: "no-store" });
}

// 2. YE AAPKA PURANA FUNCTION HAI (SINGLE POST KE LIYE)
export async function getDonationPostBySlug(lang: string, slug: string) {
  const query = `*[_type == "donationPost" && slug.current == $slug][0]`;
  return client.fetch(query, { slug }, { cache: "no-store" });
}
