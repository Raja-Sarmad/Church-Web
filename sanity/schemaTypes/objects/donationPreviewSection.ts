import { defineField, defineType } from "sanity";

export const donationPreviewSection = defineType({
  name: "donationPreviewSection",
  title: "Donation Preview Section",
  type: "object",
  fields: [
    defineField({ name: "subtitle", type: "string" }),
    defineField({ name: "title", type: "string" }),
  ],
});
