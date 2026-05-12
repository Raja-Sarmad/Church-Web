import { defineArrayMember, defineField, defineType } from "sanity";

export const beneficiariesPage = defineType({
  name: "beneficiariesPage",
  title: "Beneficiaries Page",
  type: "document",
  fields: [
    defineField({ name: "heroTitle", type: "string" }),
    defineField({ name: "introText", type: "text", rows: 5 }),
    defineField({ name: "programsTitle", type: "string" }),
    defineField({ name: "programItems", type: "array", of: [defineArrayMember({ type: "string" })] }),
    defineField({ name: "registrationBenefitText", type: "text", rows: 4 }),
    defineField({ name: "confidentialityNote", type: "text", rows: 4 }),
    defineField({ name: "expectedTimeText", type: "text", rows: 4 }),
    defineField({ name: "buttonLabel", type: "string" }),
    defineField({ name: "buttonHref", type: "string" }),
  ],
});
