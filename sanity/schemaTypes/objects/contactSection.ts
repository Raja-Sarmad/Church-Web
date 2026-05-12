import { defineField, defineType } from "sanity";

export const contactSection = defineType({
  name: "contactSection",
  title: "Contact Section",
  type: "object",
  fields: [
    defineField({ name: "subtitle", type: "string" }),
    defineField({ name: "title", type: "string" }),
    defineField({ name: "highlight", type: "string" }),
    defineField({ name: "description", type: "text", rows: 4 }),
    defineField({
      name: "form",
      type: "object",
      fields: [
        defineField({ name: "name", type: "string" }),
        defineField({ name: "email", type: "string" }),
        defineField({ name: "phone", type: "string" }),
        defineField({ name: "message", type: "string" }),
        defineField({ name: "button", type: "string" }),
      ],
    }),
    defineField({ name: "success", type: "string" }),
  ],
});
