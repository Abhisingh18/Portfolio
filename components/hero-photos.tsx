"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AWARDS } from "@/content/site";

const SHOTS = AWARDS.filter((a) => a.image);

/**
 * Cycles the hackathon photographs beside the hero.
 *
 * Every frame is rendered and cross-faded rather than swapped, so the
 * browser decodes each image once and the transition never flashes an
 * empty card. Only the first is priority-loaded; the rest come in lazily
 * before their turn.
 */
export function HeroPhotos() {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (SHOTS.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const cycle = setInterval(() => setI((n) => (n + 1) % SHOTS.length), 3400);
    return () => clearInterval(cycle);
  }, []);

  if (SHOTS.length === 0) return null;

  const active = SHOTS[i];

  return (
    <div className="relative animate-float motion-reduce:animate-none">
      {/* Offset plates behind the photo, for depth without a drop shadow. */}
      <div
        aria-hidden="true"
        className="absolute -inset-3 -rotate-2 rounded-card border border-line"
      />
      <div
        aria-hidden="true"
        className="absolute -inset-1.5 rotate-1 rounded-card border border-line"
      />

      <div className="panel relative overflow-hidden">
        <div className="relative aspect-4/3 w-full overflow-hidden bg-ink-sunken">
          {SHOTS.map((shot, n) => (
            <Image
              key={shot.title}
              src={shot.image!}
              alt={`${shot.result} — ${shot.title}`}
              fill
              sizes="(max-width: 1024px) 90vw, 420px"
              priority={n === 0}
              className={`object-cover transition-opacity duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                n === i ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          <div
            aria-hidden="true"
            className="absolute inset-0 bg-linear-to-t from-ink via-ink/20 to-transparent"
          />
        </div>

        {/* Caption, keyed so it re-animates as the photo changes. */}
        <div className="flex items-end justify-between gap-4 px-5 pb-5 pt-1">
          <div key={active.title} className="min-w-0 animate-rise">
            <p className="text-sm font-medium text-fg">{active.result}</p>
            <p className="mt-1 truncate text-[12.5px] text-fg-muted">
              {active.title}
            </p>
          </div>

          <span className="meta shrink-0 tabular-nums">
            {String(i + 1).padStart(2, "0")}/{String(SHOTS.length).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Progress ticks double as a control. */}
      <div className="mt-5 flex justify-center gap-1.5">
        {SHOTS.map((shot, n) => (
          <button
            key={shot.title}
            type="button"
            onClick={() => setI(n)}
            aria-label={`Show ${shot.title}`}
            aria-current={n === i}
            className={`h-0.5 rounded-full transition-all duration-500 ${
              n === i ? "w-7 bg-accent" : "w-3 bg-line-strong hover:bg-fg-faint"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
