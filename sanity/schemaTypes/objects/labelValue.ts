import { defineField, defineType } from "sanity";

export const labelValue = defineType({
  name: "labelValue",
  title: "Label / Value",
  type: "object",
  fields: [
    defineField({ name: "label", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "value", type: "string", validation: (Rule) => Rule.required() }),
  ],
});
