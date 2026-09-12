import Image from "next/image";
import { ROLES } from "@/content/site";
import { Section, SectionHeading } from "./ui/section";
import { Reveal } from "./ui/reveal";

export function Work() {
  return (
    <Section id="work">
      <SectionHeading
        index="01"
        title="Work"
        accent="experience"
        lede="Research and engineering roles across IIT Madras, IISc Bangalore and IIT Hyderabad."
      />

      <ol className="border-t border-line">
        {ROLES.map((role, i) => (
          <Reveal as="li" key={role.org} delay={i * 90}>
            <article className="group grid gap-6 border-b border-line py-10 md:grid-cols-[13rem_1fr] md:gap-12 md:py-12">
              {/* Left rail: period, org mark, cover */}
              <div className="flex items-start gap-4 md:block">
                <div className="flex-1 md:flex-none">
                  <p
                    className={`meta ${role.current ? "text-signal" : ""}`}
                  >
                    {role.period}
                  </p>

                  <div className="mt-4 flex gap-2">
                    {role.logos.map((logo) => (
                      <Image
                        key={logo}
                        src={logo}
                        alt=""
                        width={36}
                        height={36}
                        className="h-9 w-9 rounded-full border border-line-strong bg-white/5 object-cover"
                      />
                    ))}
                  </div>
                </div>

                <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-lg border border-line md:mt-5 md:h-24 md:w-full">
                  <Image
                    src={role.cover}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 112px, 208px"
                    className="object-cover opacity-60 transition-[opacity,transform] duration-700 group-hover:scale-105 group-hover:opacity-90"
                  />
                </div>
              </div>

              {/* Right: the substance */}
              <div>
                <h3 className="text-xl font-medium text-fg md:text-2xl">
                  {role.title}
                </h3>
                <p className="mt-1.5 text-sm text-accent">{role.org}</p>

                <ul className="mt-6 space-y-3">
                  {role.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-[14.5px] leading-relaxed text-fg-muted"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2.5 h-px w-4 shrink-0 bg-line-strong"
                      />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {role.stack.map((tech) => (
                    <span key={tech} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
