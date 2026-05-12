import { defineArrayMember, defineField, defineType } from "sanity";

export const topBarSection = defineType({
  name: "topBarSection",
  title: "Top Bar",
  type: "object",
  fields: [
    defineField({ name: "welcome", type: "string" }),
    defineField({ name: "email", type: "string" }),
    defineField({ name: "address", type: "string" }),
    defineField({ name: "phone", type: "string" }),
    defineField({
      name: "socialLinks",
      type: "array",
      of: [defineArrayMember({ type: "socialLink" })],
    }),
  ],
});
