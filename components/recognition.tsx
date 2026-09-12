import Image from "next/image";
import { Award as AwardIcon } from "lucide-react";
import { AWARDS } from "@/content/site";
import { Section, SectionHeading } from "./ui/section";
import { Reveal } from "./ui/reveal";

export function Recognition() {
  return (
    <Section id="recognition">
      <SectionHeading
        index="04"
        title="Recognition"
        lede="Five national wins, a funded build grant, and finals placements at IIT Delhi and IIT Madras."
      />

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {AWARDS.map((award, i) => (
          <Reveal as="article" key={award.title} delay={i * 55}>
            <div className="panel group h-full overflow-hidden transition-colors duration-500 hover:border-line-strong">
              <div className="relative aspect-4/3 overflow-hidden bg-ink-sunken">
                {award.image ? (
                  <Image
                    src={award.image}
                    alt={award.title}
                    fill
                    sizes="(max-width: 768px) 50vw, 280px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="grid h-full place-items-center">
                    <AwardIcon
                      size={22}
                      className="text-fg-faint"
                      aria-hidden="true"
                    />
                  </div>
                )}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-linear-to-t from-ink via-ink/25 to-transparent"
                />
              </div>

              <div className="p-4">
                <p className="text-sm font-medium text-fg">{award.result}</p>
                <h3 className="mt-1 text-[13px] leading-snug text-fg-muted">
                  {award.title}
                </h3>
                {award.note && (
                  <p className="meta mt-2">{award.note}</p>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
