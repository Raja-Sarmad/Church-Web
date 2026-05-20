import { createClient } from "next-sanity";

import { isSanityConfigured, sanityEnv } from "@/sanity/env";

export const sanityClient = createClient({
  projectId: sanityEnv.projectId || "dmdxfs7h",
  dataset: sanityEnv.dataset || "production",
  apiVersion: sanityEnv.apiVersion,
  useCdn: false,
  perspective: "published",
  stega: false,
  token: sanityEnv.readToken || undefined,
});

export async function safeSanityFetch<T>(
  query: string,
  params?: Record<string, any>,
): Promise<T | null> {
  if (!isSanityConfigured) return null;

  try {
    return await sanityClient.fetch<T>(query, params ?? {});
  } catch (error) {
    console.error("Sanity fetch failed:", error);
    return null;
  }
}
