import { RND, type FocusArea } from "@/content/site";
import { Section, SectionHeading } from "./ui/section";
import { Reveal } from "./ui/reveal";
import { Projects } from "./projects";

/** One 2×2 grid of cards. Used for both research and development. */
export function FocusGrid({ areas }: { areas: readonly FocusArea[] }) {
  return (
    <div className="grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2">
      {areas.map((area, i) => (
        <Reveal key={area.title.join(" ")} delay={i * 60} className="bg-ink">
          <div className="group h-full p-7 transition-colors duration-500 hover:bg-white/[0.02] md:p-9">
            <div className="flex items-baseline justify-between gap-3">
              <span className="meta transition-colors duration-300 group-hover:text-accent">
                {area.no}
              </span>
              {area.abbr && <span className="meta text-accent/70">{area.abbr}</span>}
            </div>

            <h3 className="mt-6 font-serif text-2xl leading-tight text-fg md:text-[1.9rem]">
              {area.title.map((line, n) => (
                <span key={line} className={`block ${n > 0 ? "text-fg-muted" : ""}`}>
                  {line}
                </span>
              ))}
            </h3>

            <p className="mt-4 max-w-md text-[14.5px] leading-relaxed text-fg-muted">
              {area.body}
            </p>

            {area.stack && (
              <div className="mt-6 flex flex-wrap gap-2 border-t border-line pt-5">
                {area.stack.map((tool) => (
                  <span key={tool} className="tag">
                    {tool}
                  </span>
                ))}
              </div>
            )}
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function Research() {
  return (
    <Section id="research">
      <SectionHeading
        index="02"
        title="Research"
        accent="interests"
        lede={RND.lede}
      />

      <Reveal className="mb-12">
        <p className="meta">Currently at {RND.affiliation}</p>
      </Reveal>

      <FocusGrid areas={RND.research} />

      {/* Development sits under the research, not beside it — different work. */}
      <Reveal className="mt-28 mb-12">
        <div className="flex items-baseline gap-4 border-b border-line pb-6">
          <span className="meta shrink-0">02 ·</span>
          <h3 className="font-serif text-3xl leading-none text-fg md:text-5xl">
            Development
          </h3>
        </div>
        <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-fg-muted">
          {RND.developmentLede}
        </p>
      </Reveal>

      <FocusGrid areas={RND.development} />
    </Section>
  );
}

/** The /research route: interests, what I build, then what came out of it. */
export function ResearchAndProjects() {
  return (
    <>
      <Research />
      <Projects index="02 ·" />
    </>
  );
}
