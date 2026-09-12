import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { RND } from "@/content/site";
import { Reveal } from "./ui/reveal";

/** The one-sentence thesis. Large type, deliberately little else. */
export function Vision() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <Reveal>
          <p className="meta">01 / Focus</p>
        </Reveal>

        <Reveal delay={80}>
          <p className="mt-10 max-w-4xl font-serif text-[clamp(1.9rem,5.5vw,3.75rem)] leading-[1.12] text-fg">
            {RND.vision}
          </p>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-10 max-w-2xl text-[15px] leading-relaxed text-fg-muted md:text-base">
            {RND.lede}
          </p>

          <Link
            href="/research"
            className="link-underline mt-8 inline-flex items-center gap-2 text-sm text-fg"
          >
            Research &amp; development
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
