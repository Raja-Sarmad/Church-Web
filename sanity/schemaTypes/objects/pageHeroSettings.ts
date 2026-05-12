import { defineField, defineType } from "sanity";

export const pageHeroSettings = defineType({
  name: "pageHeroSettings",
  title: "Page Hero Settings",
  type: "object",
  fields: [
    defineField({ name: "backgroundImage", type: "image", options: { hotspot: true } }),
    defineField({ name: "overlayImage", type: "image", options: { hotspot: true } }),
    defineField({ name: "maskImage", type: "image", options: { hotspot: true } }),
  ],
});
