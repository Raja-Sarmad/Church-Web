import { defineField, defineType } from "sanity";

export const heroSlide = defineType({
  name: "heroSlide",
  title: "Hero Slide",
  type: "object",
  fields: [
    defineField({ name: "image", type: "image", options: { hotspot: true } }),
    defineField({ name: "slogan", type: "string" }),
    defineField({ name: "title", type: "text", rows: 3 }),
    defineField({ name: "description", type: "text", rows: 4 }),
    defineField({ name: "buttonLabel", type: "string" }),
    defineField({ name: "buttonLink", type: "string" }),
    defineField({ name: "videoUrl", type: "url" }),
  ],
});
