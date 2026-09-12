import type { ReactNode } from "react";
import { Reveal } from "./reveal";

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 py-24 md:py-32 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">{children}</div>
    </section>
  );
}

type HeadingProps = {
  /** Editorial index, e.g. "01". */
  index: string;
  title: string;
  /** Rendered in italic serif, as the emphasised half of the title. */
  accent?: string;
  lede?: string;
};

export function SectionHeading({ index, title, accent, lede }: HeadingProps) {
  return (
    <Reveal className="mb-14 md:mb-20">
      <div className="flex items-baseline gap-4 border-b border-line pb-6">
        <span className="meta shrink-0">{index}</span>
        <h2 className="font-serif text-4xl leading-none text-fg md:text-6xl">
          {title}
          {accent && <em className="text-fg-muted"> {accent}</em>}
        </h2>
      </div>
      {lede && (
        <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-fg-muted">
          {lede}
        </p>
      )}
    </Reveal>
  );
}
