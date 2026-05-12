import { defineArrayMember, defineField, defineType } from "sanity";

export const aboutPage = defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [
    defineField({ name: "pageTitle", type: "string" }),
    defineField({ name: "kicker", type: "string" }),
    defineField({ name: "title", type: "text", rows: 3 }),
    defineField({ name: "description", type: "text", rows: 6 }),
    defineField({ name: "image", type: "image", options: { hotspot: true } }),
    defineField({ name: "imageAlt", type: "string" }),
    defineField({
      name: "features",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "title", type: "string" }),
            defineField({ name: "description", type: "text", rows: 3 }),
          ],
        }),
      ],
    }),
  ],
});
