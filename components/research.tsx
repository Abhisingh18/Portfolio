import { RND } from "@/content/site";
import { Section, SectionHeading } from "./ui/section";
import { Reveal } from "./ui/reveal";
import { Projects } from "./projects";

/** The six focus areas. Reused on the home page and on /research. */
export function FocusGrid() {
  return (
    <div className="grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
      {RND.areas.map((area, i) => (
        <Reveal key={area.no} delay={i * 60} className="bg-ink">
          <div className="group h-full p-7 transition-colors duration-500 hover:bg-white/[0.02] md:p-8">
            <div className="flex items-baseline justify-between gap-3">
              <span className="meta transition-colors duration-300 group-hover:text-accent">
                {area.no}
              </span>
              <span
                className={`meta ${
                  area.kind === "research" ? "text-accent/70" : "text-fg-faint"
                }`}
              >
                {area.kind === "research" ? "Research" : "Build"}
              </span>
            </div>

            <h3 className="mt-6 font-serif text-2xl leading-tight text-fg md:text-[1.75rem]">
              {area.title.map((line, n) => (
                <span
                  key={line}
                  className={`block ${n > 0 ? "text-fg-muted" : ""}`}
                >
                  {line}
                </span>
              ))}
            </h3>

            <p className="mt-4 text-[14px] leading-relaxed text-fg-muted">
              {area.body}
            </p>
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
        title="Research &"
        accent="development"
        lede={RND.lede}
      />

      <Reveal className="mb-12">
        <p className="meta">Currently at {RND.affiliation}</p>
      </Reveal>

      <FocusGrid />
    </Section>
  );
}

/** The /research route: what I work on, then what came out of it. */
export function ResearchAndProjects() {
  return (
    <>
      <Research />
      <Projects index="02 ·" />
    </>
  );
}
