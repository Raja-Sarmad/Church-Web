import { defineField, defineType } from "sanity";

export const heroSlide = defineType({
  name: "heroSlide",
  title: "Hero Slide",
  type: "object",
  fields: [
    defineField({
      name: "image",
      title: "Slide Background Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slogan",
      title: "Slogan (Small Top Text)",
      type: "string",
      description: "Example: HELP THE NEEDY",
    }),
    defineField({
      name: "title",
      title: "Main Title",
      type: "string",
      description: "Use <highlight>text</highlight> for orange color.",
    }),
    defineField({
      name: "description",
      title: "Short Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "buttonLabel",
      title: "Button Text",
      type: "string",
      initialValue: "Donate Now",
    }),
    defineField({
      name: "buttonLink",
      title: "Button URL",
      type: "string",
      initialValue: "/donate",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "slogan",
      media: "image",
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || "No Title",
        subtitle: subtitle || "No Slogan",
        media: media,
      };
    },
  },
});

export const hero = defineType({
  name: "hero",
  title: "Hero Section",
  type: "document",
  fields: [
    defineField({
      name: "sectionName",
      title: "Section Name",
      type: "string",
      initialValue: "Main Home Hero",
      description: "Internal name for this hero section",
    }),
    defineField({
      name: "slides",
      title: "Hero Slides",
      type: "array",
      description: "Add multiple slides here. Each slide has its own image and content.",
      of: [{ type: "heroSlide" }],
      validation: (Rule) => Rule.min(1).max(10),
    }),
  ],
});