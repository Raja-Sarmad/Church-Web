import { notFound } from "next/navigation";
import { Facebook, Instagram, Twitter } from "lucide-react";

import PageHero from "@/components/shared/PageHero";
import { getProjectBySlug } from "@/lib/site-data";
import { createTranslator } from "@/lib/site-intl-core";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const nav = createTranslator("Navbar");

  const project = await getProjectBySlug("en", slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="bg-[#FAFAFA] min-h-screen">
      <PageHero title={nav("projects")} homeLabel={nav("home")} />

      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden mb-8">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />

              <div className="absolute bottom-6 left-6 right-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-6 py-2 rounded-full bg-primary text-white text-sm font-bold">
                    Project details
                  </span>
                  <div className="flex gap-3">
                    <button className="w-10 h-10 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-colors">
                      <Instagram className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-colors">
                      <Twitter className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-colors">
                      <Facebook className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="font-bold text-slate-900">Name:</span>{" "}
                    <span className="text-slate-600">{project.title}</span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-900">Date:</span>{" "}
                    <span className="text-slate-600">{project.date}</span>
                  </div>
                  <div className="md:col-span-1" />
                  <div>
                    <span className="font-bold text-slate-900">Author:</span>{" "}
                    <span className="text-slate-600">{project.author}</span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-900">Tags:</span>{" "}
                    <span className="text-slate-600">{project.tags.join(", ")}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-10 mb-8">
              <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
                {project.title}
              </h1>

              <div className="prose prose-lg max-w-none">
                {project.body.map((paragraph: string, index: number) => (
                  <p
                    key={index}
                    className="text-slate-600 leading-relaxed mb-6 last:mb-0"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-8 space-y-3">
                {project.checklist.map((item: string, index: number) => (
                  <div key={index} className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-primary flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-slate-900 font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6">
                {project.business.title}
              </h2>
              <p className="text-slate-600 leading-relaxed">
                {project.business.description}
              </p>
            </div>
          </div>

          <div className="lg:w-1/3 space-y-6">
            {project.gallery.map((image: string, index: number) => (
              <div
                key={index}
                className="relative h-64 rounded-3xl overflow-hidden group"
              >
                <img
                  src={image}
                  alt={`Project image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
