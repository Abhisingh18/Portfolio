"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Play } from "lucide-react";
import { PROJECTS, type Project } from "@/content/site";
import { Section, SectionHeading } from "./ui/section";
import { Reveal } from "./ui/reveal";
import Link from "next/link";
import { VideoModal } from "./video-modal";
import { GitHubMark } from "./ui/icons";

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
    <Reveal as="article" delay={index * 80} className="group">
      <div className="panel h-full overflow-hidden transition-colors duration-500 hover:border-line-strong">
        <div className="relative aspect-16/10 overflow-hidden bg-ink-sunken">
          {preview ? (
            <Image
              src={preview}
              alt={`${project.title} preview`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 560px"
              className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
            />
          ) : (
            <div className="absolute inset-0 bg-linear-to-br from-white/[0.04] to-transparent" />
          )}

          <div
            aria-hidden="true"
            className="absolute inset-0 bg-linear-to-t from-ink/85 via-ink/10 to-transparent"
          />

          <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
            <span className="meta rounded-full border border-line-strong bg-ink/70 px-2.5 py-1 backdrop-blur-sm">
              {project.category}
            </span>
            {project.client && (
              <span className="meta rounded-full border border-line-strong bg-ink/70 px-2.5 py-1 backdrop-blur-sm">
                {project.client}
              </span>
            )}
          </div>

          {/* Videos are never preloaded — the poster stands in until a click. */}
          {project.video && (
            <button
              type="button"
              onClick={() => onPlay(project)}
              aria-label={`Play ${project.title} demo`}
              className="absolute inset-0 grid place-items-center opacity-0 transition-opacity duration-500 group-hover:opacity-100 focus-visible:opacity-100"
            >
              <span className="grid h-14 w-14 place-items-center rounded-full border border-white/25 bg-ink/70 backdrop-blur-sm">
                <Play size={17} className="ml-0.5 fill-fg text-fg" aria-hidden="true" />
              </span>
            </button>
          )}
        </div>

        <div className="p-6">
          <h3 className="font-serif text-2xl text-fg">{project.title}</h3>

          <p className="mt-3 text-[14.5px] leading-relaxed text-fg-muted">
            {project.blurb}
          </p>

          <p className="mt-4 text-[13px] text-signal">{project.result}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span key={tech} className="tag">
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-5 border-t border-line pt-5">
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline inline-flex items-center gap-1.5 text-[13px] text-fg-muted transition-colors hover:text-fg"
              >
                <GitHubMark size={14} />
                Source
              </a>
            )}

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline inline-flex items-center gap-1.5 text-[13px] text-fg transition-colors hover:text-accent"
              >
                Live site
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            )}

            {project.video && (
              <button
                type="button"
                onClick={() => onPlay(project)}
                className="link-underline inline-flex items-center gap-1.5 text-[13px] text-fg-muted transition-colors hover:text-fg"
              >
                <Play size={13} aria-hidden="true" />
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

      <div className="grid gap-6 md:grid-cols-2">
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

          <div className="grid gap-6 md:grid-cols-2">
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
            All research & projects
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </Reveal>
      )}

      <VideoModal project={playing} onClose={() => setPlaying(null)} />
    </Section>
  );
}
