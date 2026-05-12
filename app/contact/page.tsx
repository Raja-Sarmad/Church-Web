import PageHero from "@/components/shared/PageHero";
import ContactSection from "@/components/sections/homepage/ContactSection";
import { getContactSection } from "@/lib/sanity-site-data";
import { createTranslator } from "@/lib/site-intl-core";

export default async function ContactPage() {
  const nav = createTranslator("Navbar");
  const contactContent = await getContactSection();

  return (
    <div>
      <PageHero
        title={contactContent.title || "Contact"}
        homeLabel={nav("home")}
      />
      <ContactSection locale="en" />
    </div>
  );
}
