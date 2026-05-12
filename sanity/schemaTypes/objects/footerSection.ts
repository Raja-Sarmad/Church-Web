import { defineArrayMember, defineField, defineType } from "sanity";

export const footerSection = defineType({
  name: "footerSection",
  title: "Footer",
  type: "object",
  fields: [
    defineField({ name: "aboutText", type: "text", rows: 4 }),
    defineField({ name: "quickLinksTitle", type: "string" }),
    defineField({ name: "contactTitle", type: "string" }),
    defineField({ name: "rights", type: "string" }),
    defineField({ name: "email", type: "string" }),
    defineField({ name: "phone", type: "string" }),
    defineField({ name: "address", type: "string" }),
    defineField({ name: "newsletterPlaceholder", type: "string" }),
    defineField({ name: "newsletterButtonLabel", type: "string" }),
    defineField({
      name: "socialLinks",
      type: "array",
      of: [defineArrayMember({ type: "socialLink" })],
    }),
  ],
});
