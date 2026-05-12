import { defineField, defineType } from "sanity";

export const post = defineType({
  name: "post",
  title: "Blog Post",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "excerpt", type: "text", rows: 4 }),
    defineField({ name: "publishedAt", type: "datetime" }),
    defineField({ name: "image", type: "image", options: { hotspot: true } }),
    defineField({ name: "body", type: "portableText" }),
  ],
});
