import { defineField, defineType } from "sanity";

export const projectsPage = defineType({
  name: "projectsPage",
  title: "Projects Page",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({
      name: "cta",
      type: "object",
      fields: [
        defineField({ name: "title", type: "string" }),
        defineField({ name: "description", type: "text", rows: 4 }),
        defineField({ name: "button", type: "string" }),
        defineField({ name: "splashImage", type: "image", options: { hotspot: true } }),
        defineField({ name: "photoImage", type: "image", options: { hotspot: true } }),
      ],
    }),
  ],
});
