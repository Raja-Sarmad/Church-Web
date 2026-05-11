import { notFound } from "next/navigation";

import { getDonationPostBySlug, getDonationPosts, getDonateDetail, getDonatePage } from "@/lib/site-data";
import DonateQuickInline from "@/components/sections/donate/DonateQuickInline";
import PageHero from "@/components/shared/PageHero";
import { COLORS } from "@/lib/constants/colors";
import RichText from "@/components/ui/RichText";
import { createTranslator } from "@/lib/site-intl-core";

export default async function DonateDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const t = createTranslator("Pages");
  const nav = createTranslator("Navbar");
  const donateData = await getDonatePage("en");
  const donateDetailData = await getDonateDetail("en");
  const donationPost = await getDonationPostBySlug("en", slug);
  const donationPosts = await getDonationPosts("en");
  const fallback = t.raw("donate");

  const campaigns = {
    currency: donateData?.campaigns?.currency ?? fallback.campaigns.currency,
    donateLabel: donateData?.campaigns?.donateLabel ?? fallback.campaigns.donateLabel,
    goalLabel: donateData?.campaigns?.goalLabel ?? fallback.campaigns.goalLabel,
    items: donationPosts?.length ? donationPosts : fallback.campaigns.items,
  };

  const detailFallback = t.raw("donateDetail");
  const detail = {
    ...detailFallback,
    ...donateDetailData,
    categories: donationPost?.categories?.length
      ? donationPost.categories
      : donateDetailData?.categories?.length
        ? donateDetailData.categories
        : detailFallback.categories,
    detailParagraphs: donationPost?.detailParagraphs?.length
      ? donationPost.detailParagraphs
      : donateDetailData?.detailParagraphs?.length
        ? donateDetailData.detailParagraphs
        : detailFallback.detailParagraphs,
    galleryImages: donationPost?.galleryImages ?? donateDetailData?.galleryImages ?? [],
  };

  const campaign = campaigns.items.find((item: any) => item.slug === slug);

  if (!campaign) {
    notFound();
  }

  const currencyFormatter = new Intl.NumberFormat("en", {
    style: "currency",
    currency: campaigns.currency || "USD",
    maximumFractionDigits: 0,
  });
  const percent = campaign.goalAmount
    ? Math.min(100, Math.round((campaign.raisedAmount / campaign.goalAmount) * 100))
    : 0;

  const galleryFallback = [
    "/hero1.jpg",
    "/hero2.jpg",
    "/hero3.jpg",
    "/picture-1.jpeg",
  ];
  const galleryImages = detail.galleryImages.length
    ? detail.galleryImages
    : galleryFallback;

  return (
    <main className="bg-white">
      <PageHero title={campaign.title} homeLabel={nav("home")} />

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div>
            <div className="overflow-hidden rounded-[2rem] bg-white shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
              <img
                src={campaign.image ?? "/hero1.jpg"}
                alt={campaign.title}
                className="h-[320px] w-full object-cover"
              />
            </div>

            <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-primary">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
              {campaign.category}
            </div>
            <h2 className="mt-3 text-2xl md:text-3xl font-black text-secondary">
              {campaign.title}
            </h2>
            <p className="mt-4 text-sm md:text-base text-slate-600 leading-relaxed">
              {campaign.description}
            </p>

            <div className="mt-6">
              <div className="relative h-2 rounded-full bg-slate-100">
                <div
                  className="h-2 rounded-full"
                  style={{
                    width: `${percent}%`,
                    backgroundColor: campaign.accentColor ?? COLORS.primary,
                  }}
                />
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-6 text-sm font-semibold text-secondary">
                <span className="flex items-center gap-2">
                  {percent}% {detail.raisedLabel}
                </span>
                <span>
                  {currencyFormatter.format(campaign.goalAmount)} {campaigns.goalLabel}
                </span>
              </div>
            </div>

            <DonateQuickInline
              locale="en"
              overrideDefaultAmount={donationPost?.defaultAmount}
              overrideAmountOptions={donationPost?.amountOptions}
            />

            {donationPost?.richContent?.length ? (
              <RichText blocks={donationPost.richContent} className="mt-10" />
            ) : (
              <div className="mt-10 space-y-6 text-sm text-slate-600 leading-relaxed">
                {detail.detailParagraphs.map((paragraph: string) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            )}

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {galleryImages.slice(0, 2).map((src: string) => (
                <img
                  key={src}
                  src={src}
                  alt={detail.galleryTitle}
                  className="h-56 w-full rounded-3xl object-cover"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
