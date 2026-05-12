import { defineArrayMember, defineField, defineType } from "sanity";

export const campaign = defineType({
  name: "campaign",
  title: "Campaign",
  type: "document",
  fields: [
    defineField({ name: "orderRank", type: "number" }),
    defineField({ name: "category", type: "string" }),
    defineField({ name: "title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "description", type: "text", rows: 4 }),
    defineField({ name: "image", type: "image", options: { hotspot: true } }),
    defineField({ name: "raisedAmount", type: "number" }),
    defineField({ name: "goalAmount", type: "number" }),
    defineField({ name: "accentColor", type: "string" }),
    defineField({ name: "defaultAmount", type: "number" }),
    defineField({ name: "amountOptions", type: "array", of: [defineArrayMember({ type: "number" })] }),
    defineField({ name: "detailParagraphs", type: "array", of: [defineArrayMember({ type: "text" })] }),
    defineField({ name: "categories", type: "array", of: [defineArrayMember({ type: "campaignCategory" })] }),
    defineField({ name: "galleryImages", type: "array", of: [defineArrayMember({ type: "image", options: { hotspot: true } })] }),
    defineField({ name: "richContent", type: "portableText" }),
  ],
});
