import { defineArrayMember, defineField, defineType } from "sanity";

export const areasOfWorkPillar = defineType({
  name: "areasOfWorkPillar",
  title: "Areas of Work Pillar",
  type: "object",
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({ name: "description", type: "text", rows: 4 }),
    defineField({
      name: "services",
      type: "array",
      of: [defineArrayMember({ type: "serviceItem" })],
    }),
  ],
});
