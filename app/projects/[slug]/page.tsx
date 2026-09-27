import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/content/site";
import { PROJECT_DETAILS } from "@/content/project-details";
import { Reveal } from "@/components/ui/reveal";
import { GitHubMark } from "@/components/ui/icons";
import { SutraArchitecture } from "@/components/diagrams/sutra-flow";

/** Projects whose architecture is worth drawing rather than describing. */
const DIAGRAMS: Record<string, () => React.ReactElement> = {
  "sutra-1.3b": SutraArchitecture,
};

/** Every project is known at build time, so nothing is rendered on demand. */
export const dynamicParams = false;

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return {};

  const detail = PROJECT_DETAILS[slug];
  return {
    title: project.title,
    description: detail?.lede ?? project.blurb,
    alternates: { canonical: `/projects/${slug}` },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = PROJECTS.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const project = PROJECTS[index];
  const detail = PROJECT_DETAILS[slug];
  const next = PROJECTS[(index + 1) % PROJECTS.length];
  const Diagram = DIAGRAMS[slug];

  return (
    <main id="main" className="pt-16">
      <article className="mx-auto w-full max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <Reveal>
          <Link
            href="/research"
            className="meta group inline-flex items-center gap-2 transition-colors hover:text-fg"
          >
            <ArrowLeft
              size={12}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            All projects
          </Link>

          <p className="meta mt-10">
            {project.category}
            {project.client && ` · ${project.client}`}
          </p>

          <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-[1.05] tracking-tight text-fg md:text-6xl">
            {project.title}
          </h1>

          <p className="mt-7 max-w-2xl text-[17px] leading-relaxed text-fg-muted">
            {detail?.lede ?? project.blurb}
          </p>

          <p className="mt-5 text-sm text-signal">{project.result}</p>

          <div className="mt-9 flex flex-wrap items-center gap-4 text-sm">
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-2.5 text-fg transition-colors duration-300 hover:bg-white/5"
              >
                <GitHubMark size={14} />
                Code
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-fg px-5 py-2.5 font-medium text-ink transition-transform duration-300 hover:-translate-y-0.5"
              >
                Live
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            )}
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.stack.map((tool) => (
              <span key={tool} className="tag">
                {tool}
              </span>
            ))}
          </div>
        </Reveal>

        {project.image && (
          <Reveal delay={80}>
            <div className="panel relative mt-16 aspect-[16/9] w-full overflow-hidden">
              <Image
                src={project.image}
                alt={`${project.title} preview`}
                fill
                sizes="(max-width: 1024px) 100vw, 1120px"
                className="object-contain"
                priority
              />
            </div>
          </Reveal>
        )}

        {detail?.specs && (
          <Reveal delay={80}>
            <dl className="mt-16 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2">
              {detail.specs.map((spec) => (
                <div key={spec.label} className="bg-ink px-6 py-5">
                  <dt className="meta">{spec.label}</dt>
                  <dd className="mt-2 text-[15px] leading-snug text-fg">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        )}

        {Diagram && (
          <Reveal>
            <section className="mt-20">
              <h2 className="font-serif text-2xl text-fg md:text-3xl">
                How it is put together
              </h2>
              <div className="mt-8">
                <Diagram />
              </div>
            </section>
          </Reveal>
        )}

        {detail && (
          <div className="mt-20 max-w-2xl space-y-14">
            {detail.sections.map((section) => (
              <Reveal key={section.heading}>
                <section>
                  <h2 className="font-serif text-2xl text-fg md:text-3xl">
                    {section.heading}
                  </h2>

                  {section.body?.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 40)}
                      className="mt-5 text-[15px] leading-relaxed text-fg-muted"
                    >
                      {paragraph}
                    </p>
                  ))}

                  {section.points && (
                    <ul className="mt-6 space-y-3 border-t border-line pt-6">
                      {section.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-3 text-[15px] leading-relaxed text-fg-muted"
                        >
                          <span aria-hidden="true" className="text-accent">
                            —
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              </Reveal>
            ))}
          </div>
        )}

        {detail?.results && (
          <Reveal>
            <section className="mt-20">
              <h2 className="font-serif text-2xl text-fg md:text-3xl">Results</h2>

              <div className="mt-6 overflow-x-auto">
                <table className="w-full min-w-md border-collapse text-[14.5px]">
                  <thead>
                    <tr className="border-b border-line-strong">
                      {detail.results.head.map((cell) => (
                        <th
                          key={cell}
                          scope="col"
                          className="meta px-3 py-3 text-left first:pl-0"
                        >
                          {cell}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {detail.results.rows.map((row) => (
                      <tr key={row[0]} className="border-b border-line">
                        {row.map((cell, i) => (
                          <td
                            key={`${row[0]}-${i}`}
                            className={`px-3 py-3 first:pl-0 ${
                              i === 0 ? "text-fg" : "text-fg-muted"
                            }`}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {detail.results.caption && (
                <p className="mt-4 text-[13px] text-fg-faint">
                  {detail.results.caption}
                </p>
              )}
            </section>
          </Reveal>
        )}

        {detail?.limits && (
          <Reveal>
            <section className="panel mt-20 max-w-2xl p-7 md:p-9">
              <h2 className="font-serif text-2xl text-fg">What it does not do</h2>
              <ul className="mt-6 space-y-4">
                {detail.limits.map((limit) => (
                  <li
                    key={limit.slice(0, 40)}
                    className="text-[15px] leading-relaxed text-fg-muted"
                  >
                    {limit}
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>
        )}

        <Reveal>
          <Link
            href={`/projects/${next.slug}`}
            className="group mt-24 flex items-center justify-between gap-6 rounded-card border border-line p-6 transition-colors hover:border-line-strong hover:bg-white/[0.02]"
          >
            <span className="min-w-0">
              <span className="meta">Next project</span>
              <span className="mt-2 block truncate font-serif text-xl text-fg">
                {next.title}
              </span>
            </span>
            <ArrowRight
              size={18}
              aria-hidden="true"
              className="shrink-0 text-fg-muted transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </Reveal>
      </article>
    </main>
  );
}
