import { defineArrayMember, defineField, defineType } from "sanity";

export const coreValuesSection = defineType({
  name: "coreValuesSection",
  title: "Core Values Section",
  type: "object",
  fields: [
    defineField({ name: "subtitle", type: "string" }),
    defineField({ name: "title", type: "string" }),
    defineField({ name: "backgroundImage", type: "image", options: { hotspot: true } }),
    defineField({
      name: "values",
      type: "array",
      of: [defineArrayMember({ type: "coreValue" })],
    }),
  ],
});
