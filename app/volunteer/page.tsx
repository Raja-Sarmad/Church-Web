import Link from "next/link";

import PageHero from "@/components/shared/PageHero";
import { getVolunteerPage } from "@/lib/sanity-site-data";
import { createTranslator } from "@/lib/site-intl-core";

export default async function VolunteerPage() {
  const nav = createTranslator("Navbar");
  const t = createTranslator("Pages");
  const tFeatured = createTranslator("FeaturedCauseCard");
  const data = await getVolunteerPage("en");

  return (
    <main className="bg-white">
      <PageHero
        title={data?.heroTitle || t("volunteer.title")}
        homeLabel={nav("home")}
      />

      <section className="container mx-auto px-4  py-20">
        <h2 className="text-3xl md:text-4xl font-cairo font-[800] text-secondary text-center">
          {data?.introTitle || t("volunteer.title")}
        </h2>

        <p className="mt-5 text-lg text-gray-600 leading-relaxed text-start">
          {data?.introDescription || t("volunteer.description")}
        </p>

        <p className="mt-4 text-lg text-gray-600 leading-relaxed text-start">
          {data?.highlightDescription || tFeatured("description")}
        </p>

        <div className="mt-10 rounded-2xl border border-primary/15 bg-[#F8FCFD] p-6 md:p-8">
          <h3 className="text-2xl font-cairo font-[800] text-secondary">
            {data?.whyVolunteerTitle || "Why Volunteer with Us?"}
          </h3>
          <ul className="mt-4 space-y-3 text-gray-700">
            {(data?.whyVolunteerItems || []).map((item, index) => (
              <li key={`${item}-${index}`} className="leading-relaxed">
                • {item}
              </li>
            ))}
          </ul>

          <h3 className="mt-8 text-2xl font-cairo font-[800] text-secondary">
            {data?.whoCanVolunteerTitle || "Who Can Volunteer?"}
          </h3>
          <p className="mt-3 text-gray-700 leading-relaxed">
            {data?.whoCanVolunteerDescription || ""}
          </p>

          <ul className="mt-4 space-y-3 text-gray-700">
            {(data?.volunteerAreas || []).map((item, index) => (
              <li key={`${item}-${index}`} className="leading-relaxed">
                • {item}
              </li>
            ))}
          </ul>

          <h3 className="mt-8 text-2xl font-cairo font-[800] text-secondary">
            {data?.joinTeamTitle || "Become Part of the Team"}
          </h3>
          <p className="mt-3 text-gray-700 leading-relaxed">
            {data?.joinTeamDescription || ""}
          </p>

          <Link
            href={data?.applyCtaHref || "/volunteer"}
            className="mt-6 inline-flex items-center gap-2 font-cairo font-[800] text-primary hover:text-secondary transition-colors"
          >
            {data?.applyCtaLabel || "Apply as a Volunteer"} →
          </Link>
        </div>
      </section>
    </main>
  );
}
