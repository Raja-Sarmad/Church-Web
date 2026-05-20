import { defineQuery } from "next-sanity";

export const SITE_SETTINGS_QUERY = defineQuery(`
  *[_type == "siteSettings" && _id == "siteSettings"][0]{
    brandName,
    logo,
    donationButtonLabel,
    pageHero{
      backgroundImage,
      overlayImage,
      maskImage
    },
    topBar{
      welcome,
      email,
      address,
      phone,
      socialLinks[]{
        platform,
        label,
        href
      }
    },
    footer{
      aboutText,
      quickLinksTitle,
      contactTitle,
      rights,
      email,
      phone,
      address,
      newsletterPlaceholder,
      newsletterButtonLabel,
      socialLinks[]{
        platform,
        label,
        href
      }
    }
  }
`);

export const HOME_PAGE_QUERY = defineQuery(`
  *[_type == "homePage"][0]{
    heroSection,
    aboutSection,
    missionVisionSection,
    volunteerCtaSection,
    donationPreviewSection,
    areasOfWorkSection,
    blogSection,
    contactSection,
    gallerySliderSection,
    coreValuesSection
  }
`);

export const ABOUT_PAGE_QUERY = defineQuery(`
  *[_type == "aboutPage" && _id == "aboutPage"][0]{
    pageTitle,
    kicker,
    title,
    description,
    image,
    imageAlt,
    features[]{
      title,
      description
    }
  }
`);

export const VOLUNTEER_PAGE_QUERY = defineQuery(`
  *[_type == "volunteerPage" && _id == "volunteerPage"][0]{
    heroTitle,
    introTitle,
    introDescription,
    highlightDescription,
    whyVolunteerTitle,
    whyVolunteerItems,
    whoCanVolunteerTitle,
    whoCanVolunteerDescription,
    volunteerAreas,
    joinTeamTitle,
    joinTeamDescription,
    applyCtaLabel,
    applyCtaHref
  }
`);

export const BENEFICIARIES_PAGE_QUERY = defineQuery(`
  *[_type == "beneficiariesPage" && _id == "beneficiariesPage"][0]{
    heroTitle,
    introText,
    programsTitle,
    programItems,
    registrationBenefitText,
    confidentialityNote,
    expectedTimeText,
    buttonLabel,
    buttonHref
  }
`);

export const IMPACT_PAGE_QUERY = defineQuery(`
  *[_type == "impactPage" && _id == "impactPage"][0]{
    title,
    description
  }
`);

export const TERMS_PAGE_QUERY = defineQuery(`
  *[_type == "termsConditionsPage" && _id == "termsConditionsPage"][0]{
    title,
    description
  }
`);

export const PRIVACY_POLICY_QUERY = defineQuery(`
  *[_type == "privacyPolicyPage" && _id == "privacyPolicyPage"][0]{
    title,
    intro,
    introNote,
    sections[]{
      title,
      description,
      items
    },
    contact{
      title,
      description,
      items[]{
        label,
        value
      }
    },
    updatedLabel,
    updatedValue
  }
`);

export const DONATE_PAGE_QUERY = defineQuery(`
  *[_type == "donatePage" && _id == "donatePage"][0]{
    title,
    campaigns{
      kicker,
      title,
      description,
      donateLabel,
      goalLabel,
      currency
    },
    cta{
      title,
      description,
      buttonLabel,
      splashImage,
      photoImage
    }
  }
`);

export const DONATE_QUICK_PAGE_QUERY = defineQuery(`
  *[_type == "donateQuickPage" && _id == "donateQuickPage"][0]{
    title,
    leftImage,
    leftMessage,
    amountTitle,
    currencySymbol,
    defaultAmount,
    amountOptions,
    otherLabel,
    confirmButtonLabel,
    modalTitle,
    totalLabel,
    modalConfirmButtonLabel,
    paymentMethods[]{
      key,
      label,
      href,
      detail
    }
  }
`);

export const CAMPAIGNS_QUERY = defineQuery(`
  *[_type == "campaign"] | order(orderRank asc, _createdAt desc){
    _id,
    "slug": slug.current,
    category,
    title,
    description,
    image,
    raisedAmount,
    goalAmount,
    accentColor,
    defaultAmount,
    amountOptions,
    detailParagraphs,
    categories[]{
      label,
      count
    },
    galleryImages,
    richContent
  }
`);

export const CAMPAIGN_BY_SLUG_QUERY = defineQuery(`
  *[_type == "campaign" && slug.current == $slug][0]{
    _id,
    "slug": slug.current,
    category,
    title,
    description,
    image,
    raisedAmount,
    goalAmount,
    accentColor,
    defaultAmount,
    amountOptions,
    detailParagraphs,
    categories[]{
      label,
      count
    },
    galleryImages,
    richContent
  }
`);

export const PROJECTS_PAGE_QUERY = defineQuery(`
  *[_type == "projectsPage" && _id == "projectsPage"][0]{
    title,
    cta{
      title,
      description,
      button,
      splashImage,
      photoImage
    }
  }
`);

export const PROJECTS_QUERY = defineQuery(`
  *[_type == "project"] | order(orderRank asc, _createdAt desc){
    _id,
    "slug": slug.current,
    title,
    category,
    image,
    date,
    author,
    tags,
    body,
    checklist,
    business,
    gallery
  }
`);

export const PROJECT_BY_SLUG_QUERY = defineQuery(`
  *[_type == "project" && slug.current == $slug][0]{
    _id,
    "slug": slug.current,
    title,
    category,
    image,
    date,
    author,
    tags,
    body,
    checklist,
    business,
    gallery
  }
`);

export const BLOG_SECTION_QUERY = defineQuery(`
  *[_type == "homePage" && _id == "homePage"][0]{
    blogSection
  }
`);

export const BLOG_POSTS_QUERY = defineQuery(`
  *[_type == "post"] | order(publishedAt desc, _createdAt desc){
    _id,
    title,
    excerpt,
    "slug": slug.current,
    image,
    "date": publishedAt,
    body
  }
`);

export const BLOG_POST_BY_SLUG_QUERY = defineQuery(`
  *[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    excerpt,
    "slug": slug.current,
    image,
    "date": publishedAt,
    body
  }
`);

export const GALLERY_PAGE_QUERY = defineQuery(`
  *[_type == "galleryPage" && _id == "galleryPage"][0]{
    title,
    description,
    emptyStateMessage
  }
`);

export const GALLERY_ITEMS_QUERY = defineQuery(`
  *[_type == "galleryAlbum"] | order(orderRank asc, _createdAt desc){
    _id,
    title,
    "slug": slug.current,
    description,
    heroImage,
    images
  }
`);

export const CONTACT_PAGE_QUERY = defineQuery(`
  *[_type == "contactPage" && _id == "contactPage"][0]{
    title,
    contactSection
  }
`);
