import BeneficiariesContent from "@/components/sections/beneficiaries/BeneficiariesContent";
import PageHero from "@/components/shared/PageHero";
import { getServicePageCta } from "@/lib/sanity-site-data";
import { createTranslator } from "@/lib/site-intl-core";

export default async function BeneficiariesPage() {
  const nav = createTranslator("Navbar");
  const data = await getServicePageCta();

  return (
    <main className="bg-white">
      <PageHero title={data.heroTitle || nav("beneficiaries")} homeLabel={nav("home")} />
      <BeneficiariesContent locale="en" />
    </main>
  );
}
