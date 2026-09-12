import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PAGES } from "@/content/site";
import { Reveal } from "./ui/reveal";

/** The home page's table of contents — the way into every other route. */
export function PageIndex() {
  return (
    <section id="index" className="scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <Reveal className="mb-12">
          <p className="meta">Index</p>
        </Reveal>

        <div className="border-t border-line">
          {PAGES.map((page, i) => (
            <Reveal key={page.href} delay={i * 60}>
              <Link
                href={page.href}
                className="group grid items-baseline gap-2 border-b border-line py-7 md:grid-cols-[4rem_1fr_auto] md:gap-8 md:py-8"
              >
                <span className="meta transition-colors duration-300 group-hover:text-accent">
                  {page.index}
                </span>

                <span>
                  <span className="block font-serif text-2xl text-fg transition-colors duration-300 group-hover:text-accent md:text-3xl">
                    {page.title}
                  </span>
                  <span className="mt-2 block max-w-xl text-sm leading-relaxed text-fg-muted">
                    {page.blurb}
                  </span>
                </span>

                <ArrowRight
                  size={18}
                  aria-hidden="true"
                  className="hidden text-fg-faint transition-[transform,color] duration-300 group-hover:translate-x-1 group-hover:text-fg md:block"
                />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
