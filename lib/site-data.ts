import messages from "@/messages/en.json";

const content = messages as any;

const blogPosts = [
  {
    title: "Finding Peace in the Midst of a Storm",
    excerpt:
      "A reflection on how faith can carry us through the most difficult seasons of life.",
    date: "2025-10-12",
    slug: "finding-peace-in-the-midst-of-a-storm",
    image: "/hero-3.webp",
    body: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Faith does not remove every storm, but it anchors us in the middle of one. Peace begins when we stop treating prayer as a last resort.",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Christ-centered community, steady prayer, and simple obedience often do more for the soul than frantic attempts to control the situation.",
          },
        ],
      },
    ],
  },
  {
    title: "The Power of Community Giving",
    excerpt:
      "How our latest mission trip transformed lives through small acts of kindness.",
    date: "2025-11-05",
    slug: "the-power-of-community-giving",
    image: "/about-one-img-2.jpg",
    body: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "When a church gives consistently, generosity becomes culture instead of an event. Small faithful gifts make real ministry possible.",
          },
        ],
      },
    ],
  },
  {
    title: "Raising Children with Faith and Purpose",
    excerpt:
      "Simple rhythms that help families build a Christ-centered home in ordinary daily life.",
    date: "2025-12-01",
    slug: "raising-children-with-faith-and-purpose",
    image: "/about-one-img-1.jpg",
    body: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Faith is often formed through repetition: shared prayer, honest repentance, Scripture at home, and visible compassion.",
          },
        ],
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
      "Our sanctuary now serves more families than the original layout can comfortably support.",
      "This appeal helps fund seating, lighting, sound repair, and accessibility improvements.",
    ],
    categories: [
      { label: "Construction", count: 8 },
      { label: "Accessibility", count: 3 },
    ],
    galleryImages: ["/hero1.jpg", "/hero-1.webp", "/hero-bottom-left.png"],
  },
  {
    slug: "winter-outreach-drive",
    category: "Community Relief",
    title: "Winter Outreach Drive",
    description:
      "Providing warm meals, blankets, and emergency support for families facing the cold season in hardship.",
    image: "/hero2.jpg",
    raisedAmount: 9200,
    goalAmount: 15000,
    accentColor: "#F0A202",
    defaultAmount: 50,
    amountOptions: [25, 50, 100, 200],
    detailParagraphs: [
      "Winter places extra strain on vulnerable families, especially those already facing displacement or financial pressure.",
      "Support from this campaign funds meals, blankets, and rapid response aid.",
    ],
    categories: [
      { label: "Food Relief", count: 6 },
      { label: "Family Care", count: 7 },
    ],
    galleryImages: ["/hero2.jpg", "/picture-1.jpeg", "/picture-2.jpeg"],
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
  {
    _id: "project-food-bank",
    slug: "food-bank-expansion",
    title: "Food Bank Expansion",
    category: "Compassion Ministry",
    image: "/hero-2.webp",
    date: "August 2025",
    author: "Community Response Team",
    tags: ["Hunger Relief", "Volunteers", "Mercy"],
    body: [
      "This project expanded our ability to distribute food packages for families in urgent need.",
      "Volunteer coordination and partner support increased the ministry’s weekly reach.",
    ],
    checklist: [
      "Expanded storage capacity",
      "Improved volunteer scheduling",
      "Increased weekly family reach",
    ],
    business: {
      title: "Why this matters",
      description:
        "Food relief is one of the clearest ways to serve with dignity and immediacy.",
    },
    gallery: ["/hero-2.webp", "/download.png", "/download-1.png"],
  },
];

const galleryItems = [
  {
    title: "Sunday Worship Gathering",
    slug: "sunday-worship-gathering",
    heroImage: "/hero-1.webp",
    images: ["/hero-1.webp", "/hero1.jpg", "/hero-bottom-left.png"],
  },
  {
    title: "Community Outreach Day",
    slug: "community-outreach-day",
    heroImage: "/about-one-img-1.jpg",
    images: ["/about-one-img-1.jpg", "/picture-1.jpeg", "/picture-2.jpeg"],
  },
  {
    title: "Youth Fellowship Evening",
    slug: "youth-fellowship-evening",
    heroImage: "/hero-3.webp",
    images: ["/hero-3.webp", "/hero3.jpg", "/hero3.jfif"],
  },
];

const privacyPolicy = {
  title: "Privacy Policy",
  intro:
    "This Privacy Policy explains how Bridges of Faith Community Church collects, uses, and safeguards personal information shared through this website and our ministry communications.",
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
    {
      title: "Information sharing",
      description:
        "We do not sell personal information. We only share limited data with trusted service providers when necessary to operate this website or respond to a ministry request.",
    },
    {
      title: "Data retention",
      description:
        "We retain information only as long as reasonably necessary for ministry follow-up, legal obligations, or security needs.",
    },
  ],
  contact: {
    title: "Questions about privacy",
    description:
      "If you have questions about how your information is handled, contact us directly.",
    items: [
      { label: "Email", value: content.TopBar.email },
      { label: "Phone", value: "+1 800 555 3248" },
      { label: "Address", value: content.TopBar.address },
    ],
  },
  updatedLabel: "Last updated",
  updatedValue: "May 11, 2026",
};

const footerData = {
  aboutText:
    "Bridges of Faith Community Church exists to worship Christ, disciple believers, and serve people in practical love.",
  quickLinks: "Quick Links",
  contactUs: "Contact Us",
  email: content.TopBar.email,
  phone: "+1 800 555 3248",
  address: content.TopBar.address,
  rights:
    "Copyright 2026 Bridges of Faith Community Church. All rights reserved.",
};

export const urlFor = (source: any) => {
  const resolved =
    typeof source === "string"
      ? source
      : source?.asset?.url ??
        source?.url ??
        source?.src ??
        source?.image ??
        "/hero-1.webp";

  return {
    width() {
      return this;
    },
    quality() {
      return this;
    },
    url() {
      return resolved;
    },
  };
};

export const getAboutSection = async (_locale = "en") => null;
export const getBlogSection = async (_locale = "en") => ({
  label: content.Blog.label,
  title: content.Blog.title,
  readMore: content.Blog.readMore,
  posts: blogPosts,
});
export const getBlogPosts = async (_locale = "en") => blogPosts;
export const getBlogPostBySlug = async (_locale = "en", slug: string) =>
  blogPosts.find((post) => post.slug === slug) ?? null;
export const getContactSection = async (_locale = "en") => null;
export const getCoreValues = async (_locale = "en") => null;
export const getDonateDetail = async (_locale = "en") => ({
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
});
export const getDonatePage = async (_locale = "en") => ({
  campaigns: {
    donateLabel: "Raised",
    goalLabel: "Goal",
    currency: "USD",
    items: donationPosts,
  },
  cta: content.Pages.donate.cta,
});
export const getDonateQuickPage = async (_locale = "en") => ({
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
    {
      key: "creditCard",
      label: "Online Giving",
      href: "https://example.com/donate?amount={amount}",
    },
    {
      key: "whatsapp",
      label: "WhatsApp",
      href: "https://wa.me/15555550123?text=I%20want%20to%20donate%20{amount}%20USD",
    },
    {
      key: "bankTransfer",
      label: "Bank Transfer",
      href: "",
      detail:
        "Bank: Community Trust Bank\nAccount Name: Bridges of Faith Community Church\nRouting: 123456789\nAccount: 987654321",
    },
  ],
});
export const getDonationPosts = async (_locale = "en") => donationPosts;
export const getDonationPostBySlug = async (_locale = "en", slug: string) =>
  donationPosts.find((item) => item.slug === slug) ?? null;
export const getFooterSection = async (_locale = "en") => footerData;
export const getGalleryPage = async (_locale = "en") => ({
  title: "Gallery",
  description: "Moments from worship, outreach, and church life.",
  emptyStateMessage: "Gallery items coming soon.",
  items: galleryItems,
});
export const getGallerySliderSection = async (_locale = "en") => ({
  items: galleryItems.map((item) => ({
    image: item.heroImage,
    href: `/gallery/${item.slug}`,
    alt: item.title,
  })),
});
export const getHeroSection = async (_locale = "en") => null;
export const getMissionVision = async (_locale = "en") => null;
export const getPrivacyPolicy = async (_locale = "en") => privacyPolicy;
export const getProjectBySlug = async (_locale = "en", slug: string) =>
  projects.find((project) => project.slug === slug) ?? null;
export const getProjectDetail = async (_locale = "en") => null;
export const getProjects = async (_locale = "en") => projects;
export const getProjectsPage = async (_locale = "en") => ({
  cta: {
    title: content.Pages.donate.cta.title,
    description: content.Pages.donate.cta.description,
    button: content.Pages.donate.cta.buttonLabel,
  },
});
export const getServicePageCta = async (_locale = "en") => ({
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
});
export const getVolunteerCtaSection = async (_locale = "en") => ({
  items: content.Pages.homeVolunteer.items,
});
export const getVolunteerPage = async (_locale = "en") => ({
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
});
