import { safeSanityFetch } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import {
  ABOUT_PAGE_QUERY,
  BENEFICIARIES_PAGE_QUERY,
  BLOG_POST_BY_SLUG_QUERY,
  BLOG_POSTS_QUERY,
  CAMPAIGN_BY_SLUG_QUERY,
  CAMPAIGNS_QUERY,
  DONATE_PAGE_QUERY,
  DONATE_QUICK_PAGE_QUERY,
  GALLERY_ITEMS_QUERY,
  GALLERY_PAGE_QUERY,
  HOME_PAGE_QUERY,
  IMPACT_PAGE_QUERY,
  PRIVACY_POLICY_QUERY,
  PROJECT_BY_SLUG_QUERY,
  PROJECTS_PAGE_QUERY,
  PROJECTS_QUERY,
  SITE_SETTINGS_QUERY,
  TERMS_PAGE_QUERY,
  VOLUNTEER_PAGE_QUERY,
  CONTACT_PAGE_QUERY,
} from "@/sanity/lib/queries";

const blogPosts = [
  {
    title: "Finding Peace in the Midst of a Storm",
    excerpt:
      "A reflection on how faith can carry us through the most difficult seasons of life.",
    date: "2026-05-01T00:00:00.000Z",
    slug: "finding-peace-in-the-midst-of-a-storm",
    image: "/hero-3.webp",
    body: [
      {
        _type: "block",
        style: "normal",
        children: [{ _type: "span", text: "Faith does not remove every storm, but it anchors us in the middle of one." }],
      },
    ],
  },
  {
    title: "The Power of Community Giving",
    excerpt:
      "How ordinary generosity opens room for practical ministry and durable hope.",
    date: "2026-04-10T00:00:00.000Z",
    slug: "the-power-of-community-giving",
    image: "/about-one-img-2.jpg",
    body: [
      {
        _type: "block",
        style: "normal",
        children: [{ _type: "span", text: "When a church gives consistently, generosity becomes culture instead of an event." }],
      },
    ],
  },
];

const donationPosts = [
  {
    slug: "sanctuary-renovation-fund",
    category: "Church Building",
    title: "Sanctuary Renovation Fund",
    description:
      "Expanding and refreshing our worship space so more families can gather, pray, and grow together.",
    image: "/hero1.jpg",
    raisedAmount: 18500,
    goalAmount: 30000,
    accentColor: "#F94B1C",
    defaultAmount: 100,
    amountOptions: [50, 100, 250, 500],
    detailParagraphs: [
      "This appeal helps fund seating, lighting, sound repair, and accessibility improvements.",
      "The goal is to make worship, prayer, and fellowship more welcoming for every family.",
    ],
    categories: [
      { label: "Construction", count: 8 },
      { label: "Accessibility", count: 3 },
    ],
    galleryImages: ["/hero1.jpg", "/hero-1.webp", "/hero-bottom-left.png"],
    richContent: [],
  },
  {
    slug: "winter-outreach-drive",
    category: "Community Relief",
    title: "Winter Outreach Drive",
    description:
      "Providing warm meals, blankets, and emergency support for families facing the cold season.",
    image: "/hero2.jpg",
    raisedAmount: 9200,
    goalAmount: 15000,
    accentColor: "#F0A202",
    defaultAmount: 50,
    amountOptions: [25, 50, 100, 200],
    detailParagraphs: [
      "Support from this campaign funds meals, blankets, and rapid response aid.",
      "It focuses on vulnerable households facing the cold season under severe pressure.",
    ],
    categories: [
      { label: "Food Relief", count: 6 },
      { label: "Family Care", count: 7 },
    ],
    galleryImages: ["/hero2.jpg", "/picture-1.jpeg", "/picture-2.jpeg"],
    richContent: [],
  },
  {
    slug: "youth-discipleship-scholarship",
    category: "Education",
    title: "Youth Discipleship Scholarship",
    description:
      "Supporting faith formation, tutoring, and school expenses for children and teenagers from struggling homes.",
    image: "/hero3.jpg",
    raisedAmount: 12300,
    goalAmount: 20000,
    accentColor: "#28A745",
    defaultAmount: 75,
    amountOptions: [25, 75, 150, 300],
    detailParagraphs: [
      "This fund supports educational opportunity alongside discipleship and mentoring.",
      "It helps children and youth remain connected to both learning and spiritual formation.",
    ],
    categories: [
      { label: "Scholarships", count: 5 },
      { label: "Youth Ministry", count: 9 },
    ],
    galleryImages: ["/hero3.jpg", "/about-one-img-1.jpg", "/about-one-img-2.jpg"],
    richContent: [],
  },
];

const projects = [
  {
    _id: "project-clean-water",
    slug: "clean-water-mission",
    title: "Clean Water Mission",
    category: "Global Relief",
    image: "/about-one-img-1.jpg",
    date: "October 2025",
    author: "Bridges of Faith Outreach Team",
    tags: ["Relief", "Health", "Community"],
    body: [
      "This mission focused on delivering safe water solutions in underserved communities.",
      "With local partners, we installed filtration support and supplied hygiene education.",
    ],
    checklist: [
      "Installed community filtration units",
      "Delivered hygiene training sessions",
      "Organized local maintenance volunteers",
    ],
    business: {
      title: "Why this matters",
      description:
        "Access to safe water improves health outcomes, school attendance, and family stability.",
    },
    gallery: ["/about-one-img-1.jpg", "/picture-1.jpeg", "/picture-2.jpeg"],
  },
  {
    _id: "project-family-care",
    slug: "family-care-and-counseling",
    title: "Family Care and Counseling",
    category: "Pastoral Care",
    image: "/about-one-img-2.jpg",
    date: "September 2025",
    author: "Pastoral Support Ministry",
    tags: ["Counseling", "Family", "Prayer"],
    body: [
      "This initiative served families carrying emotional and financial burdens.",
      "The team focused on restoration, practical encouragement, and follow-up care.",
    ],
    checklist: [
      "Hosted weekly pastoral counseling",
      "Built prayer and support groups",
      "Connected families with emergency assistance",
    ],
    business: {
      title: "Why this matters",
      description:
        "Stable families strengthen the whole church community and create room for healing and resilience.",
    },
    gallery: ["/about-one-img-2.jpg", "/hero-4.webp", "/hero-bottom-right.webp"],
  },
];

const galleryItems = [
  {
    title: "Sunday Worship Gathering",
    slug: "sunday-worship-gathering",
    description: "Moments from worship, music, prayer, and fellowship.",
    heroImage: "/hero-1.webp",
    images: ["/hero-1.webp", "/hero1.jpg", "/hero-bottom-left.png"],
  },
  {
    title: "Community Outreach Day",
    slug: "community-outreach-day",
    description: "Serving families through practical relief and prayer.",
    heroImage: "/about-one-img-1.jpg",
    images: ["/about-one-img-1.jpg", "/picture-1.jpeg", "/picture-2.jpeg"],
  },
];

const homeFallback = {
  heroSection: {
    slides: [
      {
        image: "/hero1.jpg",
        slogan: "WORSHIP AND SERVICE",
        title: "Serving <highlight>Christ</highlight> with steady love",
        description:
          "A church family committed to prayer, discipleship, generosity, and practical care.",
        buttonLabel: "Support the mission",
        buttonLink: "/donate",
      },
      {
        image: "/hero2.jpg",
        slogan: "HOPE IN ACTION",
        title: "Faith that moves toward people in need",
        description:
          "We serve families through mercy ministries, youth support, and community outreach.",
        buttonLabel: "View campaigns",
        buttonLink: "/campaigns",
      },
    ],
  },
  aboutSection: {
    subtitle: "WHO WE ARE",
    title: "A church rooted in worship, truth, and practical compassion",
    highlight: "practical compassion",
    descriptionLead:
      "We want every person who meets this ministry to experience both the message of Christ and the care of His people.",
    descriptionBody:
      "Our church exists to worship faithfully, disciple steadily, and serve neighbors with dignity and consistency.",
    quote: "We believe spiritual care and practical mercy belong together.",
    imageAltPrimary: "Church ministry in action",
    imageAltSecondary: "Community service moment",
    imagePrimary: "/picture-1.jpeg",
    imageSecondary: "/picture-2.jpeg",
  },
  missionVisionSection: {
    vision: {
      title: "Vision",
      text: "To become a healthy church community that reflects Christ in worship, discipleship, and service.",
    },
    mission: {
      title: "Mission",
      text: "We equip believers, care for families, and respond to practical needs with prayerful consistency.",
    },
    objectives: {
      title: "Our",
      highlight: "Objectives",
      items: [
        "Strengthen worship, prayer, and biblical discipleship.",
        "Serve vulnerable people through practical support.",
        "Build durable ministry pathways for children, youth, and families.",
      ],
      donateNow: "Donate now",
    },
    targetGroups: {
      title: "Who We Serve",
      items: [
        "Families facing hardship",
        "Children and youth needing support",
        "Individuals seeking prayer, counseling, and restoration",
      ],
    },
    missionBackgroundImage: "/hero-1.webp",
    visionBackgroundImage: "/hero-4.webp",
    objectivesBackgroundImage: "/hero3.jpg",
  },
  volunteerCtaSection: {
    items: [
      {
        title: "Volunteer With Us",
        description: "Use your time and gifts in ways that strengthen people and ministry.",
        buttonLabel: "Join the team",
        href: "/volunteer",
        image: "/about-one-img-1.jpg",
        overlayColor: "#0B2C26",
      },
      {
        title: "Need Support?",
        description: "Reach out if you or someone you know needs prayer, care, or practical help.",
        buttonLabel: "Contact us",
        href: "/contact",
        image: "/about-one-img-2.jpg",
        overlayColor: "#F94B1C",
      },
    ],
  },
  donationPreviewSection: {
    subtitle: "Support a Cause",
    title: "Special Missions",
  },
  areasOfWorkSection: {
    label: "Areas Of Work",
    title: "Mercy, discipleship, and practical care",
    summary:
      "Our ministries respond to spiritual, emotional, and practical needs through structured programs and long-term care.",
    keyPrograms: "Key Programs",
    pillars: [
      {
        title: "Community Care",
        description: "Direct support for households under pressure.",
        services: [
          {
            name: "Family Assistance",
            description: "Relief support, guidance, and follow-up for families.",
            subItems: ["Emergency assistance", "Prayer visits", "Needs assessment"],
          },
          {
            name: "Counseling Support",
            description: "Pastoral listening, prayer, and referrals.",
            subItems: ["Pastoral meetings", "Prayer support", "Follow-up care"],
          },
        ],
      },
      {
        title: "Youth & Learning",
        description: "Formation and practical support for children and youth.",
        services: [
          {
            name: "Mentorship",
            description: "Discipleship and guidance for young people.",
            subItems: ["Bible study", "Tutoring support", "Mentor check-ins"],
          },
        ],
      },
    ],
    cta: {
      title: "Want to support this work?",
      description: "Help us extend mercy ministries through prayer, giving, and service.",
      button: "Donate now",
    },
  },
  blogSection: {
    label: "Stories & Reflections",
    title: "Latest ministry updates and faith stories",
    readMore: "Read more",
  },
  contactSection: {
    subtitle: "CONTACT US",
    title: "Let’s Start a",
    highlight: "Conversation",
    description:
      "Reach out for prayer, support, volunteering, or partnership. We’ll respond as soon as we can.",
    form: {
      name: "Your name",
      email: "Email address",
      phone: "Phone number",
      message: "How can we help?",
      button: "Send message",
    },
    success: "Your message has been sent.",
  },
  gallerySliderSection: {
    items: galleryItems.map((item) => ({
      image: item.heroImage,
      href: `/gallery/${item.slug}`,
      alt: item.title,
    })),
  },
  coreValuesSection: {
    subtitle: "Core Values",
    title: "What shapes our ministry culture",
    backgroundImage: "/core-values.png",
    values: [
      { title: "Faithfulness", description: "Consistency in worship, prayer, and care." },
      { title: "Compassion", description: "Practical mercy offered with dignity." },
      { title: "Integrity", description: "Clear stewardship and honest service." },
      { title: "Hope", description: "A gospel-centered confidence in God’s work." },
    ],
  },
};

const privacyPolicy = {
  title: "Privacy Policy",
  intro:
    "This Privacy Policy explains how our church collects, uses, and safeguards personal information shared through this website and our ministry communications.",
  introNote:
    "We aim to use information responsibly, limit unnecessary collection, and respect the dignity of every person who contacts us.",
  sections: [
    {
      title: "Information we collect",
      items: [
        "Contact details you submit through forms, including name, email address, and phone number.",
        "Messages and prayer requests you voluntarily share with our ministry team.",
        "Basic website usage information needed to maintain and improve the site.",
      ],
    },
    {
      title: "How we use information",
      items: [
        "To respond to inquiries, support requests, and volunteer interest.",
        "To coordinate pastoral care, ministry follow-up, and church communication.",
        "To improve site experience and understand which pages are most useful.",
      ],
    },
  ],
  contact: {
    title: "Questions about privacy",
    description: "If you have questions about how your information is handled, contact us directly.",
    items: [
      { label: "Email", value: "hello@bridgesoffaith.org" },
      { label: "Phone", value: "+1 800 555 3248" },
      { label: "Address", value: "123 Mercy Street, Community City" },
    ],
  },
  updatedLabel: "Last updated",
  updatedValue: "May 12, 2026",
};

const siteSettingsFallback = {
  brandName: "Bridges of Faith Community Church",
  logo: "/logo3.jpeg",
  donationButtonLabel: "Donate Now",
  pageHero: {
    backgroundImage: "/hero-1.webp",
    overlayImage: "/hero-bottom-right.webp",
    maskImage: "/download.png",
  },
  topBar: {
    welcome: "Welcome to Bridges of Faith Community Church",
    email: "hello@bridgesoffaith.org",
    address: "123 Mercy Street, Community City",
    phone: "+1 800 555 3248",
    socialLinks: [
      { platform: "x", label: "X", href: "https://x.com/umutkopruleri" },
      { platform: "facebook", label: "Facebook", href: "https://www.facebook.com/UmutKopruleri/" },
      { platform: "instagram", label: "Instagram", href: "https://www.instagram.com/umutkopruleri/" },
      { platform: "youtube", label: "YouTube", href: "https://www.youtube.com/@UmutKopruleri" },
    ],
  },
  footer: {
    aboutText:
      "Bridges of Faith Community Church exists to worship Christ, disciple believers, and serve people in practical love.",
    quickLinksTitle: "Quick Links",
    contactTitle: "Contact Us",
    rights: "Copyright 2026 Bridges of Faith Community Church. All rights reserved.",
    email: "hello@bridgesoffaith.org",
    phone: "+1 800 555 3248",
    address: "123 Mercy Street, Community City",
    newsletterPlaceholder: "Email address",
    newsletterButtonLabel: "Subscribe",
    socialLinks: [
      { platform: "facebook", label: "Facebook", href: "https://www.facebook.com/UmutKopruleri/" },
      { platform: "instagram", label: "Instagram", href: "https://www.instagram.com/umutkopruleri/" },
      { platform: "x", label: "X (@umutkopruleri)", href: "https://x.com/umutkopruleri" },
      { platform: "youtube", label: "YouTube", href: "https://www.youtube.com/@UmutKopruleri" },
    ],
  },
};

const donatePageFallback = {
  title: "Donate",
  campaigns: {
    donateLabel: "Raised",
    goalLabel: "Goal",
    currency: "USD",
    items: donationPosts,
  },
  cta: {
    title: "Give with purpose",
    description: "Every gift supports practical ministry, prayerful care, and direct outreach.",
    buttonLabel: "Donate now",
  },
};

const donateQuickFallback = {
  title: "Quick Donate",
  leftImage: "/hero-1.webp",
  leftMessage: "A little from you can do a lot for others.",
  amountTitle: "Choose donation amount",
  currencySymbol: "$",
  defaultAmount: 50,
  amountOptions: [25, 50, 100, 250],
  otherLabel: "Other",
  confirmButtonLabel: "Confirm Donation",
  modalTitle: "Confirm Donation",
  totalLabel: "Total Donation",
  modalConfirmButtonLabel: "Go to Payment",
  paymentMethods: [
    { key: "creditCard", label: "Online Giving", href: "https://example.com/donate?amount={amount}" },
    { key: "whatsapp", label: "WhatsApp", href: "https://wa.me/15555550123?text=I%20want%20to%20donate%20{amount}%20USD" },
    {
      key: "bankTransfer",
      label: "Bank Transfer",
      href: "",
      detail:
        "Bank: Community Trust Bank\nAccount Name: Bridges of Faith Community Church\nRouting: 123456789\nAccount: 987654321",
    },
  ],
};

const aboutPageFallback = {
  pageTitle: "About",
  kicker: "Our Story",
  title: "A community committed to worship, discipleship, and mercy",
  description:
    "We serve as a local church family that seeks to reflect Christ through faithful worship, biblical teaching, and practical care.",
  image: "/hero-3.webp",
  imageAlt: "Church community gathering",
  features: [
    {
      title: "Team-based ministry",
      description: "We serve through healthy teams shaped by prayer, accountability, and compassion.",
    },
    {
      title: "Practical support",
      description: "Our ministries aim to meet real needs with dignity, consistency, and hope.",
    },
  ],
};

const volunteerPageFallback = {
  heroTitle: "Volunteer With Us",
  introTitle: "Serve with Faith and Practical Compassion",
  introDescription:
    "Our volunteers help carry the daily work of care, worship, hospitality, youth ministry, and outreach.",
  highlightDescription:
    "Whether you can serve weekly or occasionally, we will help you find a place where your time and gifts can strengthen others.",
  whyVolunteerTitle: "Why Volunteer with Us?",
  whyVolunteerItems: [
    "Grow spiritually while serving alongside committed believers.",
    "Use your skills in ways that meet real community needs.",
    "Join a healthy team culture rooted in prayer and service.",
  ],
  whoCanVolunteerTitle: "Who Can Volunteer?",
  whoCanVolunteerDescription:
    "Adults, students, families, and professionals who want to contribute their time with integrity, humility, and consistency are welcome to apply.",
  volunteerAreas: [
    "Children and youth ministry support",
    "Community outreach and food distribution",
    "Prayer response and pastoral care assistance",
    "Media, events, and hospitality coordination",
  ],
  joinTeamTitle: "Become Part of the Team",
  joinTeamDescription:
    "Start by reaching out through our contact page. We will follow up with next steps and current areas of need.",
  applyCtaLabel: "Contact the ministry team",
  applyCtaHref: "/contact",
};

const beneficiariesPageFallback = {
  heroTitle: "Beneficiaries",
  introText:
    "We serve people who need spiritual care, emotional support, practical relief, and a stable community rooted in prayer and compassion.",
  programsTitle: "Who we commonly support",
  programItems: [
    "Families facing financial hardship or displacement",
    "Children and youth needing mentorship and education support",
    "Widows, elderly residents, and people living with disability",
    "Individuals seeking counseling, prayer, and restoration",
  ],
  registrationBenefitText:
    "Each case is approached with dignity, listening, and a commitment to practical follow-through whenever possible.",
  confidentialityNote:
    "Private details shared with our pastoral and support teams are handled with care and respect.",
  expectedTimeText:
    "If you need assistance or would like to refer someone, contact our church office and we will guide you to the right team.",
  buttonLabel: "Contact for assistance",
  buttonHref: "/contact",
};

const impactPageFallback = {
  title: "Impact",
  description:
    "Our impact is measured through worship strengthened, people served, families supported, and practical ministry sustained over time.",
};

const termsPageFallback = {
  title: "Terms & Conditions",
  description:
    "By using this website, you agree to use it lawfully and respectfully and to contact us directly with any questions about content, privacy, or ministry-related communication.",
};

const projectsPageFallback = {
  title: "Projects",
  cta: {
    title: donatePageFallback.cta.title,
    description: donatePageFallback.cta.description,
    button: donatePageFallback.cta.buttonLabel,
  },
};

const galleryPageFallback = {
  title: "Gallery",
  description: "Moments from worship, outreach, and church life.",
  emptyStateMessage: "Gallery items coming soon.",
};

const asSlug = (value: unknown) =>
  typeof value === "string"
    ? value
    : value && typeof value === "object" && "current" in value
      ? String((value as { current?: string }).current || "")
      : "";

const isPlainObject = (value: unknown): value is Record<string, any> =>
  Boolean(value) &&
  typeof value === "object" &&
  !Array.isArray(value) &&
  !(value instanceof Date);

const hasValue = (value: unknown) =>
  value !== undefined && value !== null && value !== "";

function withFallback<T>(data: unknown, fallback: T): T {
  if (!hasValue(data)) return fallback;

  if (Array.isArray(fallback)) {
    if (!Array.isArray(data) || !data.length) return fallback as T;
    if (!fallback.length) return data as T;

    return data.map((item, index) =>
      withFallback(item, fallback[index % fallback.length]),
    ) as T;
  }

  if (isPlainObject(fallback)) {
    const source = isPlainObject(data) ? data : {};
    const result: Record<string, any> = { ...fallback };

    Object.keys(source).forEach((key) => {
      const sourceValue = source[key];
      if (!hasValue(sourceValue)) return;
      result[key] = key in result ? withFallback(sourceValue, result[key]) : sourceValue;
    });

    return result as T;
  }

  return data as T;
}

const withSlug = <T extends { slug?: unknown }>(item: T) => ({
  ...item,
  slug: asSlug(item.slug),
});

export const urlFor = (source: any) => {
  const resolved =
    typeof source === "string"
      ? source
      : source?.asset?.url ?? source?.url ?? source?.src ?? source?.image ?? null;

  if (resolved) {
    return {
      width(_value?: number) {
        return this;
      },
      quality(_value?: number) {
        return this;
      },
      url() {
        return resolved;
      },
    };
  }

  return {
    width(_value?: number) {
      return this;
    },
    quality(_value?: number) {
      return this;
    },
    url() {
      try {
        return urlForImage(source).url();
      } catch {
        return "/hero-1.webp";
      }
    },
  };
};

export async function getSiteSettings(_locale = "en") {
  const data = await safeSanityFetch<any>(SITE_SETTINGS_QUERY);

  return withFallback(data, siteSettingsFallback);
}

export async function getHomepageData(_locale = "en") {
  const data = await safeSanityFetch<any>(HOME_PAGE_QUERY);

  return withFallback(data, homeFallback);
}

export const getAboutSection = async (_locale = "en") =>
  (await getHomepageData()).aboutSection;
export const getAreasOfWorkSection = async (_locale = "en") =>
  (await getHomepageData()).areasOfWorkSection;
export async function getContactSection(_locale = "en") {
  const data = await safeSanityFetch<any>(CONTACT_PAGE_QUERY);
  if (data?.contactSection) return data.contactSection;
  return (await getHomepageData()).contactSection;
}

export async function getContactPage(_locale = "en") {
  const data = await safeSanityFetch<any>(CONTACT_PAGE_QUERY);
  return withFallback(data, {
    title: "Contact",
    contactSection: await getContactSection(),
  });
}
export const getCoreValues = async (_locale = "en") =>
  (await getHomepageData()).coreValuesSection;
export const getDonationPreviewSection = async (_locale = "en") =>
  (await getHomepageData()).donationPreviewSection;
export const getGallerySliderSection = async (_locale = "en") =>
  (await getHomepageData()).gallerySliderSection;
export const getHeroSection = async (_locale = "en") =>
  (await getHomepageData()).heroSection;
export const getMissionVision = async (_locale = "en") =>
  (await getHomepageData()).missionVisionSection;
export const getVolunteerCtaSection = async (_locale = "en") =>
  (await getHomepageData()).volunteerCtaSection;

export async function getBlogSection(_locale = "en") {
  const home = await getHomepageData();
  return { ...home.blogSection, posts: await getBlogPosts() };
}

export async function getBlogPosts(_locale = "en") {
  const data = await safeSanityFetch<any[]>(BLOG_POSTS_QUERY);
  return (data?.length ? data : blogPosts).map((post, index) =>
    withSlug(withFallback(post, blogPosts[index % blogPosts.length])),
  );
}

export async function getBlogPostBySlug(_locale = "en", slug: string) {
  const data = await safeSanityFetch<any>(BLOG_POST_BY_SLUG_QUERY, { slug });
  if (data) {
    const fallback = blogPosts.find((post) => post.slug === slug) ?? blogPosts[0];
    return withSlug(withFallback(data, fallback));
  }
  return blogPosts.find((post) => post.slug === slug) ?? null;
}

export async function getDonateDetail(_locale = "en") {
  return {
    raisedLabel: "raised",
    selectPaymentTitle: "Select Payment",
    paymentMethods: ["Online Giving", "WhatsApp", "Bank Transfer"],
    firstNameLabel: "First name",
    lastNameLabel: "Last name",
    emailLabel: "Email",
    donationTotalLabel: "Donation total",
    donateNowLabel: "Donate now",
    amountOptions: [25, 50, 100, 250],
    customAmountLabel: "Custom amount",
    categoriesTitle: "Categories",
    galleryTitle: "Campaign Gallery",
    detailParagraphs: [],
    categories: [],
    galleryImages: [],
  };
}

export async function getDonatePage(_locale = "en") {
  const data = await safeSanityFetch<any>(DONATE_PAGE_QUERY);
  return {
    ...withFallback(data, donatePageFallback),
    campaigns: {
      ...withFallback(data?.campaigns, donatePageFallback.campaigns),
      items: await getDonationPosts(),
    },
  };
}

export async function getDonateQuickPage(_locale = "en") {
  const data = await safeSanityFetch<any>(DONATE_QUICK_PAGE_QUERY);
  return withFallback(data, donateQuickFallback);
}

export async function getDonationPosts(_locale = "en") {
  const data = await safeSanityFetch<any[]>(CAMPAIGNS_QUERY);
  return (data?.length ? data : donationPosts).map((item, index) =>
    withSlug(withFallback(item, donationPosts[index % donationPosts.length])),
  );
}

export async function getDonationPostBySlug(_locale = "en", slug: string) {
  const data = await safeSanityFetch<any>(CAMPAIGN_BY_SLUG_QUERY, { slug });
  if (data) {
    const fallback =
      donationPosts.find((item) => item.slug === slug) ?? donationPosts[0];
    return withSlug(withFallback(data, fallback));
  }
  return donationPosts.find((item) => item.slug === slug) ?? null;
}

export async function getFooterSection(_locale = "en") {
  return (await getSiteSettings()).footer;
}

export async function getGalleryPage(_locale = "en") {
  const page = await safeSanityFetch<any>(GALLERY_PAGE_QUERY);
  const items = await safeSanityFetch<any[]>(GALLERY_ITEMS_QUERY);
  return {
    ...withFallback(page, galleryPageFallback),
    items: (items?.length ? items : galleryItems).map((item, index) =>
      withSlug(withFallback(item, galleryItems[index % galleryItems.length])),
    ),
  };
}

export async function getPrivacyPolicy(_locale = "en") {
  const data = await safeSanityFetch<any>(PRIVACY_POLICY_QUERY);
  return withFallback(data, privacyPolicy);
}

export async function getProjectBySlug(_locale = "en", slug: string) {
  const data = await safeSanityFetch<any>(PROJECT_BY_SLUG_QUERY, { slug });
  if (data) {
    const fallback = projects.find((project) => project.slug === slug) ?? projects[0];
    return withSlug(withFallback(data, fallback));
  }
  return projects.find((project) => project.slug === slug) ?? null;
}

export const getProjectDetail = async () => null;

export async function getProjects(_locale = "en") {
  const data = await safeSanityFetch<any[]>(PROJECTS_QUERY);
  return (data?.length ? data : projects).map((item, index) =>
    withSlug(withFallback(item, projects[index % projects.length])),
  );
}

export async function getProjectsPage(_locale = "en") {
  const data = await safeSanityFetch<any>(PROJECTS_PAGE_QUERY);
  return withFallback(data, projectsPageFallback);
}

export async function getServicePageCta(_locale = "en") {
  const data = await safeSanityFetch<any>(BENEFICIARIES_PAGE_QUERY);
  return withFallback(data, beneficiariesPageFallback);
}

export async function getVolunteerPage(_locale = "en") {
  const data = await safeSanityFetch<any>(VOLUNTEER_PAGE_QUERY);
  return withFallback(data, volunteerPageFallback);
}

export async function getAboutPage(_locale = "en") {
  const data = await safeSanityFetch<any>(ABOUT_PAGE_QUERY);
  return withFallback(data, aboutPageFallback);
}

export async function getImpactPage(_locale = "en") {
  const data = await safeSanityFetch<any>(IMPACT_PAGE_QUERY);
  return withFallback(data, impactPageFallback);
}

export async function getTermsConditionsPage(_locale = "en") {
  const data = await safeSanityFetch<any>(TERMS_PAGE_QUERY);
  return withFallback(data, termsPageFallback);
}
