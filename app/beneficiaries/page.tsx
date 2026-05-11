import BeneficiariesContent from "@/components/sections/beneficiaries/BeneficiariesContent";
import PageHero from "@/components/shared/PageHero";
import { createTranslator } from "@/lib/site-intl-core";

export default function BeneficiariesPage() {
  const nav = createTranslator("Navbar");

  return (
    <main className="bg-white">
      <PageHero title={nav("beneficiaries")} homeLabel={nav("home")} />
      <BeneficiariesContent locale="en" />
    </main>
  );
}
