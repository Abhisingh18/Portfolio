import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./ui/reveal";
import { FocusGrid } from "./research";

/** Home-page wrapper around the shared focus grid. */
export function FocusAreas() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <Reveal className="mb-12">
          <p className="meta">02 / Research &amp; development</p>
          <h2 className="mt-8 max-w-3xl font-serif text-[clamp(1.7rem,4.5vw,3rem)] leading-[1.15] text-fg">
            What I research, and what I{" "}
            <em className="text-fg-muted">build</em>.
          </h2>
        </Reveal>

        <FocusGrid />

        <Reveal delay={120}>
          <Link
            href="/research"
            className="link-underline mt-12 inline-flex items-center gap-2 text-sm text-fg"
          >
            More on research &amp; development
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
