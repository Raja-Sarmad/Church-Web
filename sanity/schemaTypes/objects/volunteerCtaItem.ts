import { defineField, defineType } from "sanity";

export const volunteerCtaItem = defineType({
  name: "volunteerCtaItem",
  title: "Volunteer CTA Item",
  type: "object",
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({ name: "description", type: "text", rows: 4 }),
    defineField({ name: "buttonLabel", type: "string" }),
    defineField({ name: "href", type: "string" }),
    defineField({ name: "overlayColor", type: "string" }),
    defineField({ name: "image", type: "image", options: { hotspot: true } }),
  ],
});
