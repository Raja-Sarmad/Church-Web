import { defineArrayMember, defineField, defineType } from "sanity";

export const missionVisionSection = defineType({
  name: "missionVisionSection",
  title: "Mission / Vision Section",
  type: "object",
  fields: [
    defineField({
      name: "vision",
      type: "object",
      fields: [
        defineField({ name: "title", type: "string" }),
        defineField({ name: "text", type: "text", rows: 4 }),
      ],
    }),
    defineField({
      name: "mission",
      type: "object",
      fields: [
        defineField({ name: "title", type: "string" }),
        defineField({ name: "text", type: "text", rows: 4 }),
      ],
    }),
    defineField({
      name: "objectives",
      type: "object",
      fields: [
        defineField({ name: "title", type: "string" }),
        defineField({ name: "highlight", type: "string" }),
        defineField({ name: "items", type: "array", of: [defineArrayMember({ type: "string" })] }),
        defineField({ name: "donateNow", type: "string" }),
      ],
    }),
    defineField({
      name: "targetGroups",
      type: "object",
      fields: [
        defineField({ name: "title", type: "string" }),
        defineField({ name: "items", type: "array", of: [defineArrayMember({ type: "string" })] }),
      ],
    }),
    defineField({ name: "missionBackgroundImage", type: "image", options: { hotspot: true } }),
    defineField({ name: "visionBackgroundImage", type: "image", options: { hotspot: true } }),
    defineField({ name: "objectivesBackgroundImage", type: "image", options: { hotspot: true } }),
  ],
});
