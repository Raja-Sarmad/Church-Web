import { defineField, defineType } from "sanity";

export const coreValue = defineType({
  name: "coreValue",
  title: "Core Value",
  type: "object",
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({ name: "description", type: "text", rows: 4 }),
  ],
});
