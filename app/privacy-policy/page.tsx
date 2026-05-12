import PageHero from "@/components/shared/PageHero";
import { getPrivacyPolicy } from "@/lib/sanity-site-data";
import { createTranslator } from "@/lib/site-intl-core";

export default async function PrivacyPolicyPage() {
  const nav = createTranslator("Navbar");
  const content = await getPrivacyPolicy("en");

  return (
    <main className="bg-slate-50 text-slate-900">
      <PageHero title={content.title} homeLabel={nav("home")} />

      <section className="container mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-3xl space-y-4">
          <p className="text-base leading-relaxed text-slate-600">
            {content.intro}
          </p>
          {content.introNote ? (
            <p className="text-sm leading-relaxed text-slate-500">
              {content.introNote}
            </p>
          ) : null}
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {content.sections.map((section, index) => (
            <article
              key={`${section.title}-${index}`}
              className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm"
            >
              <h2 className="text-xl font-semibold text-slate-900">
                {section.title}
              </h2>
              {section.description ? (
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {section.description}
                </p>
              ) : null}
              {section.items ? (
                <ul className="mt-5 space-y-2 text-sm text-slate-600">
                  {section.items.map((item, itemIndex) => (
                    <li
                      key={`${item}-${itemIndex}`}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-3xl border border-slate-100 bg-white p-10 shadow-md">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-xl space-y-4">
              <h2 className="text-2xl font-semibold text-slate-900">
                {content.contact.title}
              </h2>
              {content.contact.description ? (
                <p className="text-sm leading-relaxed text-slate-600">
                  {content.contact.description}
                </p>
              ) : null}
              <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                {content.updatedLabel}: {content.updatedValue}
              </div>
            </div>
            <div className="space-y-4">
              {content.contact.items.map((item, itemIndex) => (
                <div
                  key={`${item.label}-${itemIndex}`}
                  className="rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm font-medium text-slate-800">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
