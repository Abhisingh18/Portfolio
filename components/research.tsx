import { RESEARCH } from "@/content/site";
import { Section, SectionHeading } from "./ui/section";
import { Reveal } from "./ui/reveal";

export function Research() {
  return (
    <Section id="research">
      <SectionHeading
        index="02"
        title="Research"
        accent="interests"
        lede={RESEARCH.lede}
      />

      <Reveal className="mb-12">
        <p className="meta">Currently at {RESEARCH.affiliation}</p>
      </Reveal>

      <div className="border-t border-line">
        {RESEARCH.areas.map((area, i) => (
          <Reveal as="article" key={area.title} delay={i * 90}>
            <div className="group grid gap-5 border-b border-line py-10 md:grid-cols-[7rem_1fr] md:gap-12 md:py-12">
              <p className="font-serif text-3xl leading-none text-fg-faint transition-colors duration-500 group-hover:text-accent md:text-4xl">
                {area.abbr ?? String(i + 1).padStart(2, "0")}
              </p>

              <div>
                <h3 className="text-xl font-medium text-fg md:text-2xl">
                  {area.title}
                </h3>

                <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-fg-muted">
                  {area.problem}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {area.threads.map((thread) => (
                    <span key={thread} className="tag">
                      {thread}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
