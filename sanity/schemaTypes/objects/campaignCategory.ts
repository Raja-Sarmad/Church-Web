import { defineField, defineType } from "sanity";

export const campaignCategory = defineType({
  name: "campaignCategory",
  title: "Campaign Category",
  type: "object",
  fields: [
    defineField({ name: "label", type: "string" }),
    defineField({ name: "count", type: "number" }),
  ],
});
