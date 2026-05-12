import DonateQuickSection from "@/components/sections/donate/DonateQuickSection";
import PageHero from "@/components/shared/PageHero";
import { getDonatePage } from "@/lib/sanity-site-data";
import { createTranslator } from "@/lib/site-intl-core";

export default async function DonatePage() {
  const nav = createTranslator("Navbar");
  const donatePage = await getDonatePage();

  return (
    <main className="bg-white">
      <PageHero title={donatePage.title || "Donate"} homeLabel={nav("home")} />
      <DonateQuickSection locale="en" />
    </main>
  );
}
