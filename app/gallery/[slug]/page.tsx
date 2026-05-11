import { notFound } from "next/navigation";

import PageHero from "@/components/shared/PageHero";
import { mapGalleryItemsWithSlug } from "@/lib/gallery";
import { getGalleryPage } from "@/lib/site-data";
import { createTranslator } from "@/lib/site-intl-core";

export default async function GalleryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const t = createTranslator("Pages");
  const nav = createTranslator("Navbar");
  const fallback = t.raw("gallery");
  const galleryData = await getGalleryPage("en");
  const content = {
    ...fallback,
    title: galleryData?.title?.trim() || fallback.title,
    description: galleryData?.description?.trim() || fallback.description,
  };

  const itemsWithSlug = mapGalleryItemsWithSlug(galleryData?.items ?? []);

  const activeItem = itemsWithSlug.find(
    (item) => item.slug === slug || item.legacySlug === slug,
  );

  if (!activeItem) {
    notFound();
  }

  const galleryImages = activeItem.images ?? [];

  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      <PageHero title={content.title} homeLabel={nav("home")} />
      <section className="container mx-auto px-6 max-w-6xl py-20">
        <div className="flex flex-col gap-10">
          <div className="max-w-3xl">
            <h1 className="mt-6 text-4xl md:text-5xl font-black text-secondary tracking-tight">
              {activeItem.title}
            </h1>
            <p className="mt-6 text-lg font-medium leading-relaxed text-slate-500">
              {content.description}
            </p>
          </div>

          {activeItem.heroImage ? (
            <div className="overflow-hidden rounded-3xl border border-white/70 bg-white shadow-sm">
              <img
                src={String(activeItem.heroImage)}
                alt={activeItem.title}
                className="h-72 w-full object-cover"
                loading="lazy"
              />
            </div>
          ) : null}

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image, index) => (
              <div
                key={`${activeItem.title}-${index}`}
                className="overflow-hidden rounded-3xl border border-white/70 bg-white shadow-sm"
              >
                <img
                  src={String(image)}
                  alt={activeItem.title}
                  className="h-64 w-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
