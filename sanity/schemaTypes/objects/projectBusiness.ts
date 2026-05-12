import { defineField, defineType } from "sanity";

export const projectBusiness = defineType({
  name: "projectBusiness",
  title: "Project Business Block",
  type: "object",
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({ name: "description", type: "text", rows: 4 }),
  ],
});
