import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PAGES } from "@/content/site";

/**
 * Wraps a section route: clears the fixed header, then closes with a pager
 * so a visitor can walk the whole site without returning to the nav.
 */
export function PageShell({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const i = PAGES.findIndex((p) => p.href === href);
  const prev = i > 0 ? PAGES[i - 1] : null;
  const next = i >= 0 && i < PAGES.length - 1 ? PAGES[i + 1] : null;

  return (
    <main id="main" className="pt-16">
      {children}

      <nav
        aria-label="Section"
        className="mx-auto max-w-6xl px-6 pb-24 md:px-10"
      >
        <div className="grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2">
          {prev ? (
            <Link
              href={prev.href}
              className="group flex flex-col gap-2 bg-ink p-6 transition-colors hover:bg-white/[0.03]"
            >
              <span className="meta inline-flex items-center gap-2">
                <ArrowLeft
                  size={12}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:-translate-x-1"
                />
                Previous
              </span>
              <span className="font-serif text-xl text-fg">{prev.title}</span>
            </Link>
          ) : (
            <div className="hidden bg-ink sm:block" />
          )}

          {next && (
            <Link
              href={next.href}
              className="group flex flex-col gap-2 bg-ink p-6 text-right transition-colors hover:bg-white/[0.03] sm:items-end"
            >
              <span className="meta inline-flex items-center gap-2">
                Next
                <ArrowRight
                  size={12}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
              <span className="font-serif text-xl text-fg">{next.title}</span>
            </Link>
          )}
        </div>
      </nav>
    </main>
  );
}
