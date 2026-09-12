import { EDUCATION, SKILLS } from "@/content/site";
import { Section, SectionHeading } from "./ui/section";
import { Reveal } from "./ui/reveal";

export function About() {
  return (
    <Section id="about">
      <SectionHeading index="04" title="About" accent="me" />

      <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <Reveal>
          <div className="space-y-6 text-base leading-relaxed text-fg-muted md:text-lg">
            <p>
              My work sits between research and production. At{" "}
              <strong className="font-medium text-fg">IISc Bangalore</strong> I
              designed a residual GRU architecture that cut forecasting error by
              up to <strong className="font-medium text-fg">73%</strong> against
              established baselines, while holding training inside a 2 GB memory
              budget. At{" "}
              <strong className="font-medium text-fg">IIT Hyderabad</strong> I
              built autonomous-driving perception that held{" "}
              <strong className="font-medium text-fg">92%</strong> detection
              accuracy across lighting conditions.
            </p>

            <p>
              Alongside research I ship products — retrieval platforms,
              computer-vision services and LLM automation — and I have won{" "}
              <strong className="font-medium text-fg">
                five national hackathons
              </strong>{" "}
              building them under deadline.
            </p>
          </div>

          <div className="panel mt-10 p-6">
            <p className="meta">Education</p>
            <h3 className="mt-3 text-lg text-fg">{EDUCATION.degree}</h3>
            <p className="mt-1.5 text-sm text-fg-muted">
              {EDUCATION.school} · {EDUCATION.place}
            </p>
            <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] text-fg-faint">
              <span>{EDUCATION.period}</span>
              <span aria-hidden="true">·</span>
              <span className="text-accent">{EDUCATION.grade}</span>
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="meta mb-6">Toolkit</p>
          <dl className="border-t border-line">
            {SKILLS.map((group) => (
              <div
                key={group.label}
                className="grid gap-3 border-b border-line py-5 sm:grid-cols-[8.5rem_1fr] sm:gap-6"
              >
                <dt className="text-[13px] text-fg">{group.label}</dt>
                <dd className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
