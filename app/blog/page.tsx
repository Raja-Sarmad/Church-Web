import BlogPage from "@/components/sections/blog/BlogPage";
import PageHero from "@/components/shared/PageHero";
import { createTranslator } from "@/lib/site-intl-core";

export default function BlogRoute() {
  const nav = createTranslator("Navbar");
  const t = createTranslator("Blog");

  return (
    <main>
      <PageHero title={t("heroTitle")} homeLabel={nav("home")} />
      <BlogPage locale="en" />
    </main>
  );
}
