import DonateQuickSection from "@/components/sections/donate/DonateQuickSection";
import PageHero from "@/components/shared/PageHero";
import { createTranslator } from "@/lib/site-intl-core";

export default function DonatePage() {
  const nav = createTranslator("Navbar");
  const tPages = createTranslator("Pages");

  return (
    <main className="bg-white">
      <PageHero title={tPages("donate.title")} homeLabel={nav("home")} />
      <DonateQuickSection locale="en" />
    </main>
  );
}
