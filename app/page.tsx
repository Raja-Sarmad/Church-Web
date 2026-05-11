import AboutSection from "@/components/sections/homepage/AboutSection";
import AreasOfWorkSection from "@/components/sections/homepage/AreasofWorkSection";
import Blog from "@/components/sections/homepage/Blog";
import Hero from "@/components/sections/homepage/Hero";
import MissionVision from "@/components/sections/homepage/MissionVision";
import ContactSection from "@/components/sections/homepage/ContactSection";
import DonationPreviewSection from "@/components/sections/homepage/DonationPreviewSection";
import VolunteerCtaSection from "@/components/sections/homepage/VolunteerCtaSection";
import GallerySliderSection from "@/components/sections/homepage/GallerySliderSection";

export default function Home() {
  const locale = "en";

  return (
    <main>
      <Hero locale={locale} />
      <AboutSection locale={locale} />
      <MissionVision locale={locale} />
      <VolunteerCtaSection locale={locale} />
      <DonationPreviewSection locale={locale} />
      <AreasOfWorkSection />
      <Blog locale={locale} />
      <ContactSection locale={locale} />
      <GallerySliderSection />
    </main>
  );
}
