import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "brandName", type: "string" }),
    defineField({ name: "logo", type: "image", options: { hotspot: true } }),
    defineField({ name: "donationButtonLabel", type: "string" }),
    defineField({ name: "pageHero", type: "pageHeroSettings" }),
    defineField({ name: "topBar", type: "topBarSection" }),
    defineField({ name: "footer", type: "footerSection" }),
  ],
});
