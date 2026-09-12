import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ROLES } from "@/content/site";
import { Reveal } from "./ui/reveal";

/**
 * The "where I am now" strip under the hero: current role in full,
 * earlier ones compressed to a line each.
 */
export function Currently() {
  const [current, ...previous] = ROLES;

  return (
    <section className="border-y border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1fr_1px_1fr] md:gap-14 md:px-10">
        <Reveal>
          <p className="meta">Currently</p>

          <div className="mt-5 flex items-start gap-4">
            {current.logos[0] && (
              <Image
                src={current.logos[0]}
                alt=""
                width={44}
                height={44}
                className="h-11 w-11 shrink-0 rounded-full border border-line-strong bg-white/5 object-cover"
              />
            )}
            <div className="min-w-0">
              <h2 className="font-serif text-2xl leading-tight text-fg">
                {current.title}
              </h2>
              <p className="mt-1.5 text-sm text-accent">{current.org}</p>
              <p className="meta mt-3">{current.period}</p>
            </div>
          </div>
        </Reveal>

        <div className="hidden bg-line md:block" aria-hidden="true" />

        <Reveal delay={80}>
          <p className="meta">Previously</p>

          <ul className="mt-5 space-y-4">
            {previous.map((role) => (
              <li key={role.org}>
                <p className="text-[15px] text-fg">{role.title}</p>
                <p className="mt-1 text-[13px] text-fg-muted">
                  {role.org} · {role.period}
                </p>
              </li>
            ))}
          </ul>

          <Link
            href="/work"
            className="link-underline mt-6 inline-flex items-center gap-1.5 text-[13px] text-fg-muted transition-colors hover:text-fg"
          >
            Full experience
            <ArrowUpRight size={13} aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
