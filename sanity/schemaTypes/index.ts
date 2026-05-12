import { defineArrayMember, defineField, defineType } from "sanity";

const portableText = defineType({
  name: "portableText",
  title: "Portable Text",
  type: "array",
  of: [
    defineArrayMember({ type: "block" }),
    defineArrayMember({
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({ name: "alt", type: "string", title: "Alt text" }),
        defineField({ name: "caption", type: "string", title: "Caption" }),
      ],
    }),
  ],
});

const linkItem = defineType({
  name: "linkItem",
  title: "Link Item",
  type: "object",
  fields: [
    defineField({ name: "label", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "href", type: "string", validation: (Rule) => Rule.required() }),
  ],
});

const labelValue = defineType({
  name: "labelValue",
  title: "Label / Value",
  type: "object",
  fields: [
    defineField({ name: "label", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "value", type: "string", validation: (Rule) => Rule.required() }),
  ],
});

const socialLink = defineType({
  name: "socialLink",
  title: "Social Link",
  type: "object",
  fields: [
    defineField({ name: "platform", type: "string" }),
    defineField({ name: "label", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "href", type: "url", validation: (Rule) => Rule.required() }),
  ],
});

const pageHeroSettings = defineType({
  name: "pageHeroSettings",
  title: "Page Hero Settings",
  type: "object",
  fields: [
    defineField({ name: "backgroundImage", type: "image", options: { hotspot: true } }),
    defineField({ name: "overlayImage", type: "image", options: { hotspot: true } }),
    defineField({ name: "maskImage", type: "image", options: { hotspot: true } }),
  ],
});

const topBarSection = defineType({
  name: "topBarSection",
  title: "Top Bar",
  type: "object",
  fields: [
    defineField({ name: "welcome", type: "string" }),
    defineField({ name: "email", type: "string" }),
    defineField({ name: "address", type: "string" }),
    defineField({ name: "phone", type: "string" }),
    defineField({
      name: "socialLinks",
      type: "array",
      of: [defineArrayMember({ type: "socialLink" })],
    }),
  ],
});

const footerSection = defineType({
  name: "footerSection",
  title: "Footer",
  type: "object",
  fields: [
    defineField({ name: "aboutText", type: "text", rows: 4 }),
    defineField({ name: "quickLinksTitle", type: "string" }),
    defineField({ name: "contactTitle", type: "string" }),
    defineField({ name: "rights", type: "string" }),
    defineField({ name: "email", type: "string" }),
    defineField({ name: "phone", type: "string" }),
    defineField({ name: "address", type: "string" }),
    defineField({ name: "newsletterPlaceholder", type: "string" }),
    defineField({ name: "newsletterButtonLabel", type: "string" }),
    defineField({
      name: "socialLinks",
      type: "array",
      of: [defineArrayMember({ type: "socialLink" })],
    }),
  ],
});

const heroSlide = defineType({
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

const aboutSection = defineType({
  name: "aboutSection",
  title: "About Section",
  type: "object",
  fields: [
    defineField({ name: "subtitle", type: "string" }),
    defineField({ name: "title", type: "string" }),
    defineField({ name: "highlight", type: "string" }),
    defineField({ name: "descriptionLead", type: "text", rows: 4 }),
    defineField({ name: "descriptionBody", type: "text", rows: 5 }),
    defineField({ name: "quote", type: "text", rows: 3 }),
    defineField({
      name: "features",
      type: "object",
      fields: [
        defineField({ name: "treatmentHelp", type: "string" }),
        defineField({ name: "fundRaised", type: "string" }),
      ],
    }),
    defineField({ name: "needHelpLabel", type: "string" }),
    defineField({ name: "phoneNumber", type: "string" }),
    defineField({ name: "fundedLabel", type: "string" }),
    defineField({ name: "fundedAmount", type: "string" }),
    defineField({ name: "supportLabel", type: "string" }),
    defineField({ name: "imageAltPrimary", type: "string" }),
    defineField({ name: "imageAltSecondary", type: "string" }),
    defineField({ name: "imagePrimary", type: "image", options: { hotspot: true } }),
    defineField({ name: "imageSecondary", type: "image", options: { hotspot: true } }),
  ],
});

const missionVisionSection = defineType({
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

const volunteerCtaItem = defineType({
  name: "volunteerCtaItem",
  title: "Volunteer CTA Item",
  type: "object",
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({ name: "description", type: "text", rows: 4 }),
    defineField({ name: "buttonLabel", type: "string" }),
    defineField({ name: "href", type: "string" }),
    defineField({ name: "overlayColor", type: "string" }),
    defineField({ name: "image", type: "image", options: { hotspot: true } }),
  ],
});

const donationPreviewSection = defineType({
  name: "donationPreviewSection",
  title: "Donation Preview Section",
  type: "object",
  fields: [
    defineField({ name: "subtitle", type: "string" }),
    defineField({ name: "title", type: "string" }),
  ],
});

const serviceItem = defineType({
  name: "serviceItem",
  title: "Service Item",
  type: "object",
  fields: [
    defineField({ name: "name", type: "string" }),
    defineField({ name: "description", type: "text", rows: 4 }),
    defineField({ name: "subItems", type: "array", of: [defineArrayMember({ type: "string" })] }),
  ],
});

const areasOfWorkPillar = defineType({
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

const areasOfWorkSection = defineType({
  name: "areasOfWorkSection",
  title: "Areas Of Work Section",
  type: "object",
  fields: [
    defineField({ name: "label", type: "string" }),
    defineField({ name: "title", type: "text", rows: 3 }),
    defineField({ name: "summary", type: "text", rows: 5 }),
    defineField({ name: "keyPrograms", type: "string" }),
    defineField({
      name: "pillars",
      type: "array",
      of: [defineArrayMember({ type: "areasOfWorkPillar" })],
    }),
    defineField({
      name: "cta",
      type: "object",
      fields: [
        defineField({ name: "title", type: "string" }),
        defineField({ name: "description", type: "text", rows: 3 }),
        defineField({ name: "button", type: "string" }),
      ],
    }),
  ],
});

const blogSection = defineType({
  name: "blogSection",
  title: "Blog Section",
  type: "object",
  fields: [
    defineField({ name: "label", type: "string" }),
    defineField({ name: "title", type: "string" }),
    defineField({ name: "readMore", type: "string" }),
  ],
});

const contactSection = defineType({
  name: "contactSection",
  title: "Contact Section",
  type: "object",
  fields: [
    defineField({ name: "subtitle", type: "string" }),
    defineField({ name: "title", type: "string" }),
    defineField({ name: "highlight", type: "string" }),
    defineField({ name: "description", type: "text", rows: 4 }),
    defineField({
      name: "form",
      type: "object",
      fields: [
        defineField({ name: "name", type: "string" }),
        defineField({ name: "email", type: "string" }),
        defineField({ name: "phone", type: "string" }),
        defineField({ name: "message", type: "string" }),
        defineField({ name: "button", type: "string" }),
      ],
    }),
    defineField({ name: "success", type: "string" }),
  ],
});

const gallerySliderItem = defineType({
  name: "gallerySliderItem",
  title: "Gallery Slider Item",
  type: "object",
  fields: [
    defineField({ name: "image", type: "image", options: { hotspot: true } }),
    defineField({ name: "href", type: "string" }),
    defineField({ name: "alt", type: "string" }),
  ],
});

const gallerySliderSection = defineType({
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

const coreValue = defineType({
  name: "coreValue",
  title: "Core Value",
  type: "object",
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({ name: "description", type: "text", rows: 4 }),
  ],
});

const coreValuesSection = defineType({
  name: "coreValuesSection",
  title: "Core Values Section",
  type: "object",
  fields: [
    defineField({ name: "subtitle", type: "string" }),
    defineField({ name: "title", type: "string" }),
    defineField({ name: "backgroundImage", type: "image", options: { hotspot: true } }),
    defineField({
      name: "values",
      type: "array",
      of: [defineArrayMember({ type: "coreValue" })],
    }),
  ],
});

const paymentMethod = defineType({
  name: "paymentMethod",
  title: "Payment Method",
  type: "object",
  fields: [
    defineField({ name: "key", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "label", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "href", type: "string" }),
    defineField({ name: "detail", type: "text", rows: 8 }),
  ],
});

const campaignCategory = defineType({
  name: "campaignCategory",
  title: "Campaign Category",
  type: "object",
  fields: [
    defineField({ name: "label", type: "string" }),
    defineField({ name: "count", type: "number" }),
  ],
});

const projectBusiness = defineType({
  name: "projectBusiness",
  title: "Project Business Block",
  type: "object",
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({ name: "description", type: "text", rows: 4 }),
  ],
});

export const schemaTypes = [
  portableText,
  linkItem,
  labelValue,
  socialLink,
  pageHeroSettings,
  topBarSection,
  footerSection,
  heroSlide,
  aboutSection,
  missionVisionSection,
  volunteerCtaItem,
  donationPreviewSection,
  serviceItem,
  areasOfWorkPillar,
  areasOfWorkSection,
  blogSection,
  contactSection,
  gallerySliderItem,
  gallerySliderSection,
  coreValue,
  coreValuesSection,
  paymentMethod,
  campaignCategory,
  projectBusiness,
  defineType({
    name: "siteSettings",
    title: "Site Settings",
    type: "document",
    fields: [
      defineField({ name: "brandName", type: "string" }),
      defineField({ name: "logo", type: "image", options: { hotspot: true } }),
      defineField({ name: "donationButtonLabel", type: "string" }),
      defineField({ name: "pageHero", type: "pageHeroSettings" }),
      defineField({ name: "topBar", type: "topBarSection" }),
      defineField({ name: "footer", type: "footerSection" }),
    ],
  }),
  defineType({
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
  }),
  defineType({
    name: "aboutPage",
    title: "About Page",
    type: "document",
    fields: [
      defineField({ name: "pageTitle", type: "string" }),
      defineField({ name: "kicker", type: "string" }),
      defineField({ name: "title", type: "text", rows: 3 }),
      defineField({ name: "description", type: "text", rows: 6 }),
      defineField({ name: "image", type: "image", options: { hotspot: true } }),
      defineField({ name: "imageAlt", type: "string" }),
      defineField({
        name: "features",
        type: "array",
        of: [
          defineArrayMember({
            type: "object",
            fields: [
              defineField({ name: "title", type: "string" }),
              defineField({ name: "description", type: "text", rows: 3 }),
            ],
          }),
        ],
      }),
    ],
  }),
  defineType({
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
  }),
  defineType({
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
  }),
  defineType({
    name: "impactPage",
    title: "Impact Page",
    type: "document",
    fields: [
      defineField({ name: "title", type: "string" }),
      defineField({ name: "description", type: "text", rows: 8 }),
    ],
  }),
  defineType({
    name: "termsConditionsPage",
    title: "Terms & Conditions Page",
    type: "document",
    fields: [
      defineField({ name: "title", type: "string" }),
      defineField({ name: "description", type: "text", rows: 10 }),
    ],
  }),
  defineType({
    name: "privacyPolicyPage",
    title: "Privacy Policy Page",
    type: "document",
    fields: [
      defineField({ name: "title", type: "string" }),
      defineField({ name: "intro", type: "text", rows: 6 }),
      defineField({ name: "introNote", type: "text", rows: 4 }),
      defineField({
        name: "sections",
        type: "array",
        of: [
          defineArrayMember({
            type: "object",
            fields: [
              defineField({ name: "title", type: "string" }),
              defineField({ name: "description", type: "text", rows: 4 }),
              defineField({ name: "items", type: "array", of: [defineArrayMember({ type: "string" })] }),
            ],
          }),
        ],
      }),
      defineField({
        name: "contact",
        type: "object",
        fields: [
          defineField({ name: "title", type: "string" }),
          defineField({ name: "description", type: "text", rows: 4 }),
          defineField({ name: "items", type: "array", of: [defineArrayMember({ type: "labelValue" })] }),
        ],
      }),
      defineField({ name: "updatedLabel", type: "string" }),
      defineField({ name: "updatedValue", type: "string" }),
    ],
  }),
  defineType({
    name: "donatePage",
    title: "Donate Page",
    type: "document",
    fields: [
      defineField({ name: "title", type: "string" }),
      defineField({
        name: "campaigns",
        type: "object",
        fields: [
          defineField({ name: "kicker", type: "string" }),
          defineField({ name: "title", type: "string" }),
          defineField({ name: "description", type: "text", rows: 4 }),
          defineField({ name: "donateLabel", type: "string" }),
          defineField({ name: "goalLabel", type: "string" }),
          defineField({ name: "currency", type: "string" }),
        ],
      }),
      defineField({
        name: "cta",
        type: "object",
        fields: [
          defineField({ name: "title", type: "string" }),
          defineField({ name: "description", type: "text", rows: 4 }),
          defineField({ name: "buttonLabel", type: "string" }),
          defineField({ name: "splashImage", type: "image", options: { hotspot: true } }),
          defineField({ name: "photoImage", type: "image", options: { hotspot: true } }),
        ],
      }),
    ],
  }),
  defineType({
    name: "donateQuickPage",
    title: "Donate Quick Widget",
    type: "document",
    fields: [
      defineField({ name: "title", type: "string" }),
      defineField({ name: "leftImage", type: "image", options: { hotspot: true } }),
      defineField({ name: "leftMessage", type: "text", rows: 3 }),
      defineField({ name: "amountTitle", type: "string" }),
      defineField({ name: "currencySymbol", type: "string" }),
      defineField({ name: "defaultAmount", type: "number" }),
      defineField({ name: "amountOptions", type: "array", of: [defineArrayMember({ type: "number" })] }),
      defineField({ name: "otherLabel", type: "string" }),
      defineField({ name: "confirmButtonLabel", type: "string" }),
      defineField({ name: "modalTitle", type: "string" }),
      defineField({ name: "totalLabel", type: "string" }),
      defineField({ name: "modalConfirmButtonLabel", type: "string" }),
      defineField({ name: "paymentMethods", type: "array", of: [defineArrayMember({ type: "paymentMethod" })] }),
    ],
  }),
  defineType({
    name: "campaign",
    title: "Campaign",
    type: "document",
    fields: [
      defineField({ name: "orderRank", type: "number" }),
      defineField({ name: "category", type: "string" }),
      defineField({ name: "title", type: "string", validation: (Rule) => Rule.required() }),
      defineField({
        name: "slug",
        type: "slug",
        options: { source: "title", maxLength: 96 },
        validation: (Rule) => Rule.required(),
      }),
      defineField({ name: "description", type: "text", rows: 4 }),
      defineField({ name: "image", type: "image", options: { hotspot: true } }),
      defineField({ name: "raisedAmount", type: "number" }),
      defineField({ name: "goalAmount", type: "number" }),
      defineField({ name: "accentColor", type: "string" }),
      defineField({ name: "defaultAmount", type: "number" }),
      defineField({ name: "amountOptions", type: "array", of: [defineArrayMember({ type: "number" })] }),
      defineField({ name: "detailParagraphs", type: "array", of: [defineArrayMember({ type: "text" })] }),
      defineField({ name: "categories", type: "array", of: [defineArrayMember({ type: "campaignCategory" })] }),
      defineField({ name: "galleryImages", type: "array", of: [defineArrayMember({ type: "image", options: { hotspot: true } })] }),
      defineField({ name: "richContent", type: "portableText" }),
    ],
  }),
  defineType({
    name: "projectsPage",
    title: "Projects Page",
    type: "document",
    fields: [
      defineField({ name: "title", type: "string" }),
      defineField({
        name: "cta",
        type: "object",
        fields: [
          defineField({ name: "title", type: "string" }),
          defineField({ name: "description", type: "text", rows: 4 }),
          defineField({ name: "button", type: "string" }),
        ],
      }),
    ],
  }),
  defineType({
    name: "project",
    title: "Project",
    type: "document",
    fields: [
      defineField({ name: "orderRank", type: "number" }),
      defineField({ name: "title", type: "string", validation: (Rule) => Rule.required() }),
      defineField({
        name: "slug",
        type: "slug",
        options: { source: "title", maxLength: 96 },
        validation: (Rule) => Rule.required(),
      }),
      defineField({ name: "category", type: "string" }),
      defineField({ name: "image", type: "image", options: { hotspot: true } }),
      defineField({ name: "date", type: "string" }),
      defineField({ name: "author", type: "string" }),
      defineField({ name: "tags", type: "array", of: [defineArrayMember({ type: "string" })] }),
      defineField({ name: "body", type: "array", of: [defineArrayMember({ type: "text" })] }),
      defineField({ name: "checklist", type: "array", of: [defineArrayMember({ type: "string" })] }),
      defineField({ name: "business", type: "projectBusiness" }),
      defineField({ name: "gallery", type: "array", of: [defineArrayMember({ type: "image", options: { hotspot: true } })] }),
    ],
  }),
  defineType({
    name: "post",
    title: "Blog Post",
    type: "document",
    fields: [
      defineField({ name: "title", type: "string", validation: (Rule) => Rule.required() }),
      defineField({
        name: "slug",
        type: "slug",
        options: { source: "title", maxLength: 96 },
        validation: (Rule) => Rule.required(),
      }),
      defineField({ name: "excerpt", type: "text", rows: 4 }),
      defineField({ name: "publishedAt", type: "datetime" }),
      defineField({ name: "image", type: "image", options: { hotspot: true } }),
      defineField({ name: "body", type: "portableText" }),
    ],
  }),
  defineType({
    name: "galleryPage",
    title: "Gallery Page",
    type: "document",
    fields: [
      defineField({ name: "title", type: "string" }),
      defineField({ name: "description", type: "text", rows: 4 }),
      defineField({ name: "emptyStateMessage", type: "string" }),
    ],
  }),
  defineType({
    name: "galleryAlbum",
    title: "Gallery Album",
    type: "document",
    fields: [
      defineField({ name: "orderRank", type: "number" }),
      defineField({ name: "title", type: "string", validation: (Rule) => Rule.required() }),
      defineField({
        name: "slug",
        type: "slug",
        options: { source: "title", maxLength: 96 },
        validation: (Rule) => Rule.required(),
      }),
      defineField({ name: "description", type: "text", rows: 4 }),
      defineField({ name: "heroImage", type: "image", options: { hotspot: true } }),
      defineField({ name: "images", type: "array", of: [defineArrayMember({ type: "image", options: { hotspot: true } })] }),
    ],
  }),
];
