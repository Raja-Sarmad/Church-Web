import PageHero from "@/components/shared/PageHero";
import ContactSection from "@/components/sections/homepage/ContactSection";
import { getContactPage } from "@/lib/sanity-site-data";
import { createTranslator } from "@/lib/site-intl-core";

export default async function ContactPage() {
  const nav = createTranslator("Navbar");
  const data = await getContactPage();

  return (
    <div>
      <PageHero
        title={data.title || "Contact"}
        homeLabel={nav("home")}
      />
      <ContactSection locale="en" />
    </div>
  );
}
