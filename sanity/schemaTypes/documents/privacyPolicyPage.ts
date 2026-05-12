import { defineArrayMember, defineField, defineType } from "sanity";

export const privacyPolicyPage = defineType({
  name: "privacyPolicyPage",
  title: "Privacy Policy Page",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({ name: "intro", type: "text", rows: 6 }),
    defineField({ name: "introNote", type: "text", rows: 4 }),
    defineField({
      name: "sections",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "title", type: "string" }),
            defineField({ name: "description", type: "text", rows: 4 }),
            defineField({ name: "items", type: "array", of: [defineArrayMember({ type: "string" })] }),
          ],
        }),
      ],
    }),
    defineField({
      name: "contact",
      type: "object",
      fields: [
        defineField({ name: "title", type: "string" }),
        defineField({ name: "description", type: "text", rows: 4 }),
        defineField({ name: "items", type: "array", of: [defineArrayMember({ type: "labelValue" })] }),
      ],
    }),
    defineField({ name: "updatedLabel", type: "string" }),
    defineField({ name: "updatedValue", type: "string" }),
  ],
});
