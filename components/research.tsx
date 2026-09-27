import { RND, type FocusArea } from "@/content/site";
import { Section, SectionHeading } from "./ui/section";
import { Reveal } from "./ui/reveal";
import { Projects } from "./projects";

/** One row of compact cards. Used for both research and development. */
export function FocusGrid({ areas }: { areas: readonly FocusArea[] }) {
  return (
    <div className="grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
      {areas.map((area, i) => (
        <Reveal key={area.title.join(" ")} delay={i * 50} className="bg-ink">
          <div className="group h-full p-5 transition-colors duration-500 hover:bg-white/[0.02] md:p-6">
            <div className="flex items-baseline justify-between gap-3">
              <span className="meta transition-colors duration-300 group-hover:text-accent">
                {area.no}
              </span>
              {area.abbr && <span className="meta text-accent/70">{area.abbr}</span>}
            </div>

            <h3 className="mt-4 font-serif text-lg leading-tight text-fg md:text-xl">
              {area.title.map((line, n) => (
                <span key={line} className={`block ${n > 0 ? "text-fg-muted" : ""}`}>
                  {line}
                </span>
              ))}
            </h3>

            <p className="mt-3 text-[13px] leading-relaxed text-fg-muted">{area.body}</p>

            {area.stack && (
              <div className="mt-4 flex flex-wrap gap-1.5 border-t border-line pt-4">
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
        accent="& development"
        lede={`${RND.lede} ${RND.developmentLede}`}
      />

      <Reveal className="mb-10">
        <p className="meta">Currently at {RND.affiliation}</p>
      </Reveal>

      <Reveal className="mb-4">
        <p className="meta">Research interests</p>
      </Reveal>
      <FocusGrid areas={RND.research} />

      <Reveal className="mt-14 mb-4">
        <p className="meta">Development</p>
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
