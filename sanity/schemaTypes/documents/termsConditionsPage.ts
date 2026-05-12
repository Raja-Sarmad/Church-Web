import { defineField, defineType } from "sanity";

export const termsConditionsPage = defineType({
  name: "termsConditionsPage",
  title: "Terms & Conditions Page",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({ name: "description", type: "text", rows: 10 }),
  ],
});
