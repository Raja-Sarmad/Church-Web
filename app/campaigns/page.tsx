import DonateCampaignsSection from "@/components/sections/donate/DonateCampaignsSection";
import PageHero from "@/components/shared/PageHero";
import { getDonatePage } from "@/lib/sanity-site-data";
import { createTranslator } from "@/lib/site-intl-core";

export default async function CampaignsPage() {
  const nav = createTranslator("Navbar");
  const donatePage = await getDonatePage();

  return (
    <main className="bg-white">
      <PageHero
        title={donatePage.campaigns?.title || nav("contributeProjects")}
        homeLabel={nav("home")}
      />
      <DonateCampaignsSection locale="en" />
    </main>
  );
}
