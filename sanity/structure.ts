import type { StructureResolver } from "sanity/structure";

const singleton = (
  S: Parameters<StructureResolver>[0],
  schemaType: string,
  title: string,
) =>
  S.listItem()
    .title(title)
    .child(S.document().schemaType(schemaType).documentId(schemaType));

const SINGLETONS = [
  "siteSettings",
  "homePage",
  "aboutPage",
  "volunteerPage",
  "beneficiariesPage",
  "impactPage",
  "termsConditionsPage",
  "privacyPolicyPage",
  "donatePage",
  "donateQuickPage",
  "projectsPage",
  "galleryPage",
  "contactPage",
];

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Website Content")
    .items([
      singleton(S, "siteSettings", "Site Settings"),
      singleton(S, "homePage", "Homepage"),
      singleton(S, "aboutPage", "About Page"),
      singleton(S, "volunteerPage", "Volunteer Page"),
      singleton(S, "beneficiariesPage", "Beneficiaries Page"),
      singleton(S, "impactPage", "Impact Page"),
      singleton(S, "termsConditionsPage", "Terms & Conditions"),
      singleton(S, "privacyPolicyPage", "Privacy Policy"),
      singleton(S, "donatePage", "Donate Page"),
      singleton(S, "donateQuickPage", "Donate Quick Widget"),
      singleton(S, "projectsPage", "Projects Page"),
      singleton(S, "galleryPage", "Gallery Page"),
      singleton(S, "contactPage", "Contact Page"),
      S.divider(),
      S.documentTypeListItem("page").title("Custom Pages"),
      S.divider(),
      S.documentTypeListItem("campaign").title("Campaigns"),
      S.documentTypeListItem("project").title("Projects"),
      S.documentTypeListItem("post").title("Blog Posts"),
      S.documentTypeListItem("galleryAlbum").title("Gallery Albums"),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => !SINGLETONS.includes(item.getId() as string),
      ),
    ]);
