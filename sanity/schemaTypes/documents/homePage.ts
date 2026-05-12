import { defineArrayMember, defineField, defineType } from "sanity";

export const homePage = defineType({
  name: "homePage",
  title: "Homepage",
  type: "document",
  fields: [
    defineField({
      name: "heroSection",
      type: "object",
      fields: [
        defineField({
          name: "slides",
          type: "array",
          of: [defineArrayMember({ type: "heroSlide" })],
        }),
      ],
    }),
    defineField({ name: "aboutSection", type: "aboutSection" }),
    defineField({ name: "missionVisionSection", type: "missionVisionSection" }),
    defineField({
      name: "volunteerCtaSection",
      type: "object",
      fields: [
        defineField({
          name: "items",
          type: "array",
          of: [defineArrayMember({ type: "volunteerCtaItem" })],
        }),
      ],
    }),
    defineField({ name: "donationPreviewSection", type: "donationPreviewSection" }),
    defineField({ name: "areasOfWorkSection", type: "areasOfWorkSection" }),
    defineField({ name: "blogSection", type: "blogSection" }),
    defineField({ name: "contactSection", type: "contactSection" }),
    defineField({ name: "gallerySliderSection", type: "gallerySliderSection" }),
    defineField({ name: "coreValuesSection", type: "coreValuesSection" }),
  ],
});
