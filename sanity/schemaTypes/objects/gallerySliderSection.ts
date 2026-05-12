import { defineArrayMember, defineField, defineType } from "sanity";

export const gallerySliderSection = defineType({
  name: "gallerySliderSection",
  title: "Gallery Slider Section",
  type: "object",
  fields: [
    defineField({
      name: "items",
      type: "array",
      of: [defineArrayMember({ type: "gallerySliderItem" })],
    }),
  ],
});
