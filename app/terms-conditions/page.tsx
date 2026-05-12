import PageHero from "@/components/shared/PageHero";
import { getTermsConditionsPage } from "@/lib/sanity-site-data";
import { createTranslator } from "@/lib/site-intl-core";

export default async function TermsConditionsPage() {
  const nav = createTranslator("Navbar");
  const data = await getTermsConditionsPage();

  return (
    <main className="bg-white">
      <PageHero title={data.title} homeLabel={nav("home")} />
      <section className="container mx-auto px-4 max-w-4xl py-20">
        <p className="text-lg text-gray-600 leading-relaxed">
          {data.description}
        </p>
      </section>
    </main>
  );
}
