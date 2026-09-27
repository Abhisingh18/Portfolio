import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { PROFILE, SOCIALS, AFFILIATIONS } from "@/content/site";
import { Reveal } from "./ui/reveal";
import { FocusRotator } from "./focus-rotator";
import { HeroPhotos } from "./hero-photos";

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
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
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
          <h1 className="mt-7 font-serif text-[clamp(2.75rem,7.5vw,5.75rem)] leading-[0.94] tracking-tight text-fg">
            Abhishek
            <br />
            <span className="text-fg-muted">Singh</span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-8 flex flex-col gap-8 border-t border-line pt-8 sm:flex-row sm:items-start sm:justify-between sm:gap-10">
            <p className="max-w-md text-[15px] leading-relaxed text-fg-muted">
              {PROFILE.intro}
            </p>

            <div className="shrink-0 sm:text-right">
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
          </div>
        </Reveal>

          </div>

          <Reveal delay={200} className="order-first lg:order-none">
            <HeroPhotos />
          </Reveal>
        </div>

        <Reveal delay={320}>
          <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-card border border-line bg-line md:grid-cols-5">
            {SOCIALS.map((social, i) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                // An odd count leaves a hole in the two-column layout.
                className={`group bg-ink px-5 py-6 transition-colors duration-300 hover:bg-white/[0.03] ${
                  SOCIALS.length % 2 === 1 && i === SOCIALS.length - 1
                    ? "max-md:col-span-2"
                    : ""
                }`}
              >
                <p className="flex items-center gap-1.5 font-serif text-xl text-fg md:text-2xl">
                  {social.label}
                  <ArrowUpRight
                    size={14}
                    aria-hidden="true"
                    className="text-fg-faint transition-colors duration-300 group-hover:text-accent"
                  />
                </p>
                <p className="meta mt-2 normal-case tracking-normal">
                  {social.handle}
                </p>
              </a>
            ))}
          </div>
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
          href="/work"
          className="meta inline-flex items-center gap-2 transition-colors hover:text-fg"
        >
          <ArrowDown size={13} aria-hidden="true" />
          Scroll
        </a>
      </div>
    </section>
  );
}
