import { defineField, defineType } from "sanity";

export const aboutSection = defineType({
  name: "aboutSection",
  title: "About Section",
  type: "object",
  fields: [
    defineField({ name: "subtitle", type: "string" }),
    defineField({ name: "title", type: "string" }),
    defineField({ name: "highlight", type: "string" }),
    defineField({ name: "descriptionLead", type: "text", rows: 4 }),
    defineField({ name: "descriptionBody", type: "text", rows: 5 }),
    defineField({ name: "quote", type: "text", rows: 3 }),
    defineField({
      name: "features",
      type: "object",
      fields: [
        defineField({ name: "treatmentHelp", type: "string" }),
        defineField({ name: "fundRaised", type: "string" }),
      ],
    }),
    defineField({ name: "needHelpLabel", type: "string" }),
    defineField({ name: "phoneNumber", type: "string" }),
    defineField({ name: "fundedLabel", type: "string" }),
    defineField({ name: "fundedAmount", type: "string" }),
    defineField({ name: "supportLabel", type: "string" }),
    defineField({ name: "imageAltPrimary", type: "string" }),
    defineField({ name: "imageAltSecondary", type: "string" }),
    defineField({ name: "imagePrimary", type: "image", options: { hotspot: true } }),
    defineField({ name: "imageSecondary", type: "image", options: { hotspot: true } }),
  ],
});
