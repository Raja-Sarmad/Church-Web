const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID?.trim() || "dmdxfs7h";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET?.trim() || "production";

export const sanityEnv = {
  projectId,
  dataset,
  apiVersion:
    process.env.NEXT_PUBLIC_SANITY_API_VERSION?.trim() || "2026-05-12",
  studioTitle: process.env.NEXT_PUBLIC_SANITY_STUDIO_TITLE?.trim() || "Church CMS",
  previewUrl:
    process.env.NEXT_PUBLIC_SITE_URL?.trim() || "http://localhost:3000",
  readToken: process.env.SANITY_API_READ_TOKEN?.trim() || "",
};

export const isSanityConfigured = Boolean(projectId && dataset);
