import { defineArrayMember, defineField, defineType } from "sanity";
import { DocumentIcon } from "@sanity/icons";

export const page = defineType({
  name: "page",
  title: "Custom Page",
  type: "document",
  icon: DocumentIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "pageBuilder",
      title: "Page Sections",
      type: "array",
      of: [
        defineArrayMember({ type: "heroSlide", title: "Hero Section" }),
        defineArrayMember({ type: "aboutSection", title: "About Section" }),
        defineArrayMember({ type: "missionVisionSection", title: "Mission/Vision Section" }),
        defineArrayMember({ type: "volunteerCtaItem", title: "Volunteer CTA" }),
        defineArrayMember({ type: "donationPreviewSection", title: "Donation Preview" }),
        defineArrayMember({ type: "areasOfWorkSection", title: "Areas of Work" }),
        defineArrayMember({ type: "blogSection", title: "Blog Section" }),
        defineArrayMember({ type: "contactSection", title: "Contact Section" }),
        defineArrayMember({ type: "gallerySliderSection", title: "Gallery Slider" }),
        defineArrayMember({ type: "coreValuesSection", title: "Core Values" }),
      ],
    }),
  ],
});
