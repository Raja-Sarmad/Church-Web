import ProjectsGallerySection from "@/components/sections/projects/ProjectsGallerySection";
import PageHero from "@/components/shared/PageHero";
import { createTranslator } from "@/lib/site-intl-core";

export default function ProjectsPage() {
  const nav = createTranslator("Navbar");

  return (
    <main className="bg-[#FAFAFA]">
      <PageHero title={nav("projects")} homeLabel={nav("home")} />
      <ProjectsGallerySection locale="en" />
    </main>
  );
}
