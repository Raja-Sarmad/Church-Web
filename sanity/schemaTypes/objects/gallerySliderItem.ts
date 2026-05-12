import { defineField, defineType } from "sanity";

export const gallerySliderItem = defineType({
  name: "gallerySliderItem",
  title: "Gallery Slider Item",
  type: "object",
  fields: [
    defineField({ name: "image", type: "image", options: { hotspot: true } }),
    defineField({ name: "href", type: "string" }),
    defineField({ name: "alt", type: "string" }),
  ],
});
