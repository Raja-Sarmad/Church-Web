import { defineField, defineType } from "sanity";

export const blogSection = defineType({
  name: "blogSection",
  title: "Blog Section",
  type: "object",
  fields: [
    defineField({ name: "label", type: "string" }),
    defineField({ name: "title", type: "string" }),
    defineField({ name: "readMore", type: "string" }),
  ],
});
