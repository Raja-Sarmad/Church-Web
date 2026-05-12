import { defineField, defineType } from "sanity";

export const impactPage = defineType({
  name: "impactPage",
  title: "Impact Page",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({ name: "description", type: "text", rows: 8 }),
  ],
});
