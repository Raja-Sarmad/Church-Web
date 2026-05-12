import { defineArrayMember, defineField, defineType } from "sanity";

export const areasOfWorkSection = defineType({
  name: "areasOfWorkSection",
  title: "Areas Of Work Section",
  type: "object",
  fields: [
    defineField({ name: "label", type: "string" }),
    defineField({ name: "title", type: "text", rows: 3 }),
    defineField({ name: "summary", type: "text", rows: 5 }),
    defineField({ name: "keyPrograms", type: "string" }),
    defineField({
      name: "pillars",
      type: "array",
      of: [defineArrayMember({ type: "areasOfWorkPillar" })],
    }),
    defineField({
      name: "cta",
      type: "object",
      fields: [
        defineField({ name: "title", type: "string" }),
        defineField({ name: "description", type: "text", rows: 3 }),
        defineField({ name: "button", type: "string" }),
      ],
    }),
  ],
});
