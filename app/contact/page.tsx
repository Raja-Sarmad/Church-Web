import PageHero from "@/components/shared/PageHero";
import ContactSection from "@/components/sections/homepage/ContactSection";
import { createTranslator } from "@/lib/site-intl-core";

export default function ContactPage() {
  const nav = createTranslator("Navbar");
  const tPages = createTranslator("Pages");
  const contactContent = tPages.raw("contactPage");

  return (
    <div>
      <PageHero title={contactContent.title} homeLabel={nav("home")} />
      <ContactSection locale="en" />
    </div>
  );
}
