import ProjectsGallerySection from "@/components/sections/projects/ProjectsGallerySection";
import PageHero from "@/components/shared/PageHero";
import { getProjectsPage } from "@/lib/sanity-site-data";
import { createTranslator } from "@/lib/site-intl-core";

export default async function ProjectsPage() {
  const nav = createTranslator("Navbar");
  const data = await getProjectsPage();

  return (
    <main className="bg-[#FAFAFA]">
      <PageHero title={data.title || nav("projects")} homeLabel={nav("home")} />
      <ProjectsGallerySection locale="en" />
    </main>
  );
}
