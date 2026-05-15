const fetchJson = async <T>(url: string): Promise<T> => {
  const response = await fetch(url, { cache: "no-store" });

  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}`);
  }

  return response.json();
};

export const fetchSiteSettings = (locale = "en") =>
  fetchJson<any>(`/api/site-settings?locale=${locale}`);

export const fetchHomepageData = (locale = "en") =>
  fetchJson<any>(`/api/homepage?locale=${locale}`);

export const fetchHomepageSection = (section: string, locale = "en") =>
  fetchJson<any>(`/api/homepage?locale=${locale}&section=${section}`);

export const fetchBlogSection = (locale = "en") =>
  fetchJson<any>(`/api/blog-section?locale=${locale}`);

export const fetchBlogPosts = (locale = "en") =>
  fetchJson<any[]>(`/api/blog-posts?locale=${locale}`);

export const fetchBeneficiariesPage = (locale = "en") =>
  fetchJson<any>(`/api/beneficiaries-page?locale=${locale}`);
