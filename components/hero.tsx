import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { PROFILE, STATS, SOCIALS, AFFILIATIONS } from "@/content/site";
import { Reveal } from "./ui/reveal";
import { FocusRotator } from "./focus-rotator";

export function Hero() {
  return (
    <section
      id="top"
      className="grain relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-28 pb-14"
    >
      {/* One soft light source, top-left. Cheaper and calmer than blobs. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 [background:radial-gradient(70%_50%_at_15%_0%,rgba(139,124,255,0.13),transparent_70%)]"
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 md:px-10">
        <Reveal>
          <p className="meta flex items-center gap-2.5">
            {PROFILE.available && (
              <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal" />
              </span>
            )}
            {PROFILE.available
              ? "Available for roles & consulting"
              : PROFILE.role}
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-7 font-serif text-[clamp(3rem,11vw,7.5rem)] leading-[0.92] tracking-tight text-fg">
            Abhishek
            <br />
            <span className="text-fg-muted">Singh</span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-8 flex flex-col gap-8 border-t border-line pt-8 md:flex-row md:items-start md:justify-between md:gap-16">
            <p className="max-w-xl text-[15px] leading-relaxed text-fg-muted md:text-base">
              {PROFILE.intro}
            </p>

            <div className="shrink-0 md:text-right">
              <p className="meta">Currently working on</p>
              <FocusRotator words={[...PROFILE.focus]} />
            </div>
          </div>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
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

            <span className="mx-1 hidden h-4 w-px bg-line sm:block" aria-hidden="true" />

            {SOCIALS.slice(0, 2).map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-sm text-fg-muted transition-colors hover:text-fg"
              >
                {s.label}
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={320}>
          <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-card border border-line bg-line md:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="bg-ink px-5 py-6">
                <dd className="font-serif text-3xl text-fg md:text-4xl">
                  {stat.value}
                </dd>
                <dt className="meta mt-2 normal-case tracking-normal">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      {/* Affiliation marquee */}
      <Reveal delay={400} className="relative mt-16">
        <div className="fade-edges-x overflow-hidden border-y border-line py-4">
          <div className="flex w-max animate-marquee gap-10 motion-reduce:animate-none">
            {[...AFFILIATIONS, ...AFFILIATIONS].map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="meta whitespace-nowrap"
                aria-hidden={i >= AFFILIATIONS.length}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="relative mx-auto mt-10 w-full max-w-6xl px-6 md:px-10">
        <a
          href="#index"
          className="meta inline-flex items-center gap-2 transition-colors hover:text-fg"
        >
          <ArrowDown size={13} aria-hidden="true" />
          Scroll
        </a>
      </div>
    </section>
  );
}
