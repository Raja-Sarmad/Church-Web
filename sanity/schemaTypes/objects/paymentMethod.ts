import { defineField, defineType } from "sanity";

export const paymentMethod = defineType({
  name: "paymentMethod",
  title: "Payment Method",
  type: "object",
  fields: [
    defineField({ name: "key", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "label", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "href", type: "string" }),
    defineField({ name: "detail", type: "text", rows: 8 }),
  ],
});
