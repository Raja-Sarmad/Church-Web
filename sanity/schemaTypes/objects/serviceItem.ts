import { defineArrayMember, defineField, defineType } from "sanity";

export const serviceItem = defineType({
  name: "serviceItem",
  title: "Service Item",
  type: "object",
  fields: [
    defineField({ name: "name", type: "string" }),
    defineField({ name: "description", type: "text", rows: 4 }),
    defineField({ name: "subItems", type: "array", of: [defineArrayMember({ type: "string" })] }),
  ],
});
