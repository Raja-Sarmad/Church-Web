import { defineArrayMember, defineField, defineType } from "sanity";

export const volunteerPage = defineType({
  name: "volunteerPage",
  title: "Volunteer Page",
  type: "document",
  fields: [
    defineField({ name: "heroTitle", type: "string" }),
    defineField({ name: "introTitle", type: "string" }),
    defineField({ name: "introDescription", type: "text", rows: 5 }),
    defineField({ name: "highlightDescription", type: "text", rows: 5 }),
    defineField({ name: "whyVolunteerTitle", type: "string" }),
    defineField({ name: "whyVolunteerItems", type: "array", of: [defineArrayMember({ type: "string" })] }),
    defineField({ name: "whoCanVolunteerTitle", type: "string" }),
    defineField({ name: "whoCanVolunteerDescription", type: "text", rows: 4 }),
    defineField({ name: "volunteerAreas", type: "array", of: [defineArrayMember({ type: "string" })] }),
    defineField({ name: "joinTeamTitle", type: "string" }),
    defineField({ name: "joinTeamDescription", type: "text", rows: 4 }),
    defineField({ name: "applyCtaLabel", type: "string" }),
    defineField({ name: "applyCtaHref", type: "string" }),
  ],
});
