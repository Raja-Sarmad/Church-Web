import { defineField, defineType } from "sanity";

export const donatePage = defineType({
  name: "donatePage",
  title: "Donate Page",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({
      name: "campaigns",
      type: "object",
      fields: [
        defineField({ name: "kicker", type: "string" }),
        defineField({ name: "title", type: "string" }),
        defineField({ name: "description", type: "text", rows: 4 }),
        defineField({ name: "donateLabel", type: "string" }),
        defineField({ name: "goalLabel", type: "string" }),
        defineField({ name: "currency", type: "string" }),
      ],
    }),
    defineField({
      name: "cta",
      type: "object",
      fields: [
        defineField({ name: "title", type: "string" }),
        defineField({ name: "description", type: "text", rows: 4 }),
        defineField({ name: "buttonLabel", type: "string" }),
        defineField({ name: "splashImage", type: "image", options: { hotspot: true } }),
        defineField({ name: "photoImage", type: "image", options: { hotspot: true } }),
      ],
    }),
  ],
});
