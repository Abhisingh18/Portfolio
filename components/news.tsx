import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { NEWS, PROFILE } from "@/content/site";
import { Reveal } from "./ui/reveal";

export function News() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <Reveal className="mb-12">
          <div className="flex items-baseline gap-4 border-b border-line pb-6">
            <span className="meta shrink-0">05</span>
            <h2 className="font-serif text-3xl leading-none text-fg md:text-4xl">
              Recent <em className="text-fg-muted">updates</em>
            </h2>
          </div>
        </Reveal>

        <dl>
          {NEWS.map((item, i) => (
            <Reveal key={item.date} delay={i * 70}>
              <div className="grid gap-2 border-b border-line py-6 md:grid-cols-[9rem_1fr] md:gap-8">
                <dt className="meta">{item.date}</dt>
                <dd className="max-w-2xl text-[15px] leading-relaxed text-fg-muted">
                  {item.body}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>

        <Reveal delay={200}>
          <div className="mt-16 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-fg px-6 py-3 text-sm font-medium text-ink transition-transform duration-300 hover:-translate-y-0.5"
            >
              Get in touch
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>

            <a
              href={PROFILE.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line-strong px-6 py-3 text-sm text-fg transition-colors duration-300 hover:bg-white/5"
            >
              Résumé
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
