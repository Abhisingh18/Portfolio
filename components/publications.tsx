import { ArrowUpRight } from "lucide-react";
import { PUBLICATIONS, SITE } from "@/content/site";
import { Section, SectionHeading } from "./ui/section";
import { Reveal } from "./ui/reveal";

export function Publications({ index = "02" }: { index?: string } = {}) {
  return (
    <Section id="publications">
      <SectionHeading
        index={index}
        title="Publications"
        lede="Speech and language work under review at ACL Rolling Review, and a preprint on quantum-enhanced cloud workload forecasting."
      />

      <ol className="border-t border-line">
        {PUBLICATIONS.map((paper, i) => (
          <Reveal as="li" key={paper.title} delay={i * 70}>
            <article className="grid gap-3 border-b border-line py-8 md:grid-cols-[9rem_1fr] md:gap-8 md:py-10">
              <div className="flex gap-3 md:block">
                <p className="meta">{paper.date}</p>
                <p
                  className={`meta md:mt-2 ${paper.status === "Under review" ? "text-signal" : ""}`}
                >
                  {paper.status}
                </p>
              </div>

              <div>
                <h3 className="max-w-3xl font-serif text-xl leading-snug text-fg md:text-2xl">
                  {paper.href ? (
                    <a
                      href={paper.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-start gap-2 transition-colors duration-300 hover:text-accent"
                    >
                      {paper.title}
                      <ArrowUpRight size={16} className="mt-1.5 shrink-0" aria-hidden="true" />
                    </a>
                  ) : (
                    paper.title
                  )}
                </h3>

                {/* My own name is lifted out of the author list, as papers usually mark it. */}
                <p className="mt-3 text-[14px] leading-relaxed text-fg-muted">
                  {paper.authors.map((author, n) => (
                    <span key={author}>
                      {n > 0 && ", "}
                      {author === SITE.name ? (
                        <span className="font-medium text-fg">{author}</span>
                      ) : (
                        author
                      )}
                    </span>
                  ))}
                </p>

                <p className="mt-2 text-sm text-accent">{paper.venue}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
