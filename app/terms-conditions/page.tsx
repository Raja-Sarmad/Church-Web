import PageHero from "@/components/shared/PageHero";
import { createTranslator } from "@/lib/site-intl-core";

export default function TermsConditionsPage() {
  const t = createTranslator("Pages");
  const nav = createTranslator("Navbar");

  return (
    <main className="bg-white">
      <PageHero title={t("terms.title")} homeLabel={nav("home")} />
      <section className="container mx-auto px-4 max-w-4xl py-20">
        <p className="text-lg text-gray-600 leading-relaxed">
          {t("terms.description")}
        </p>
      </section>
    </main>
  );
}
