"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Play } from "lucide-react";
import { PROJECTS, type Project } from "@/content/site";
import { Section, SectionHeading } from "./ui/section";
import { Reveal } from "./ui/reveal";
import { VideoModal } from "./video-modal";
import { GitHubMark } from "./ui/icons";

/**
 * A compact square tile. The media box is a strict square so the grid reads
 * as a set of equal boxes; the text underneath stays short enough that no
 * card grows taller than its neighbours.
 */
function ProjectCard({
  project,
  index,
  onPlay,
}: {
  project: Project;
  index: number;
  onPlay: (p: Project) => void;
}) {
  const preview = project.image ?? project.poster ?? null;

  return (
    <Reveal as="article" delay={index * 70} className="group">
      <div className="panel flex h-full flex-col overflow-hidden transition-colors duration-500 hover:border-line-strong">
        <div className="relative aspect-square w-full overflow-hidden bg-ink-sunken">
          {preview && (
            <Image
              src={preview}
              alt={`${project.title} preview`}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 260px"
              className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
            />
          )}

          <div
            aria-hidden="true"
            className="absolute inset-0 bg-linear-to-t from-ink/80 via-transparent to-transparent"
          />

          <span className="meta absolute left-2.5 top-2.5 rounded-full border border-line-strong bg-ink/70 px-2 py-0.5 backdrop-blur-sm">
            {project.category}
          </span>

          {/* Videos are never preloaded — the poster stands in until a click. */}
          {project.video && (
            <button
              type="button"
              onClick={() => onPlay(project)}
              aria-label={`Play ${project.title} demo`}
              className="absolute inset-0 grid place-items-center opacity-0 transition-opacity duration-500 group-hover:opacity-100 focus-visible:opacity-100"
            >
              <span className="grid h-11 w-11 place-items-center rounded-full border border-white/25 bg-ink/70 backdrop-blur-sm">
                <Play size={14} className="ml-0.5 fill-fg text-fg" aria-hidden="true" />
              </span>
            </button>
          )}
        </div>

        <div className="flex flex-1 flex-col p-4">
          <h3 className="font-serif text-lg leading-tight text-fg">
            {project.title}
          </h3>

          <p className="mt-2 line-clamp-2 text-[12.5px] leading-relaxed text-fg-muted">
            {project.blurb}
          </p>

          <p className="mt-2.5 line-clamp-1 text-[11.5px] text-signal">
            {project.result}
          </p>

          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.stack.slice(0, 2).map((tech) => (
              <span key={tech} className="tag !px-2 !py-0.5 !text-[10.5px]">
                {tech}
              </span>
            ))}
            {project.stack.length > 2 && (
              <span className="tag !border-transparent !px-1 !py-0.5 !text-[10.5px] text-fg-faint">
                +{project.stack.length - 2}
              </span>
            )}
          </div>

          <div className="mt-auto flex items-center gap-3 border-t border-line pt-3.5 text-[11.5px]">
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline inline-flex items-center gap-1 text-fg-muted transition-colors hover:text-fg"
              >
                <GitHubMark size={12} />
                Code
              </a>
            )}

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline inline-flex items-center gap-1 text-fg transition-colors hover:text-accent"
              >
                Live
                <ArrowUpRight size={12} aria-hidden="true" />
              </a>
            )}

            {project.video && (
              <button
                type="button"
                onClick={() => onPlay(project)}
                className="link-underline inline-flex items-center gap-1 text-fg-muted transition-colors hover:text-fg"
              >
                <Play size={11} aria-hidden="true" />
                Demo
              </button>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function Projects({
  limit,
  index = "03",
  showAll = false,
}: {
  /** Render only the first N, for the home page preview. */
  limit?: number;
  index?: string;
  showAll?: boolean;
} = {}) {
  const [playing, setPlaying] = useState<Project | null>(null);

  const owned = PROJECTS.filter((p) => !p.client);
  const client = limit ? [] : PROJECTS.filter((p) => p.client);
  const shown = limit ? owned.slice(0, limit) : owned;

  return (
    <Section id="projects">
      <SectionHeading
        index={index}
        title="Selected"
        accent="projects"
        lede="Research prototypes and production systems across generative AI, computer vision and forecasting."
      />

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {shown.map((project, i) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={i}
            onPlay={setPlaying}
          />
        ))}
      </div>

      {client.length > 0 && (
        <>
          <Reveal className="mt-24 mb-12">
            <div className="flex items-baseline gap-4 border-b border-line pb-6">
              <span className="meta shrink-0">03b</span>
              <h3 className="font-serif text-3xl leading-none text-fg md:text-4xl">
                Client <em className="text-fg-muted">work</em>
              </h3>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {client.map((project, i) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={i}
                onPlay={setPlaying}
              />
            ))}
          </div>
        </>
      )}

      {showAll && (
        <Reveal className="mt-12">
          <Link
            href="/research"
            className="link-underline inline-flex items-center gap-2 text-sm text-fg"
          >
            All research &amp; projects
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </Reveal>
      )}

      <VideoModal project={playing} onClose={() => setPlaying(null)} />
    </Section>
  );
}
