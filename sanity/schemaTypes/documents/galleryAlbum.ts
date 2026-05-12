import { defineArrayMember, defineField, defineType } from "sanity";

export const galleryAlbum = defineType({
  name: "galleryAlbum",
  title: "Gallery Album",
  type: "document",
  fields: [
    defineField({ name: "orderRank", type: "number" }),
    defineField({ name: "title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "description", type: "text", rows: 4 }),
    defineField({ name: "heroImage", type: "image", options: { hotspot: true } }),
    defineField({ name: "images", type: "array", of: [defineArrayMember({ type: "image", options: { hotspot: true } })] }),
  ],
});
