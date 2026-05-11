import DonateCampaignsSection from "@/components/sections/donate/DonateCampaignsSection";
import PageHero from "@/components/shared/PageHero";
import { createTranslator } from "@/lib/site-intl-core";

export default function CampaignsPage() {
  const nav = createTranslator("Navbar");

  return (
    <main className="bg-white">
      <PageHero title={nav("contributeProjects")} homeLabel={nav("home")} />
      <DonateCampaignsSection locale="en" />
    </main>
  );
}
