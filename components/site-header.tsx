"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { PAGES, PROFILE } from "@/content/site";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-line bg-ink/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10"
      >
        <Link href="/" className="font-serif text-lg tracking-tight text-fg">
          Abhishek Singh
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {PAGES.map((page) => {
            const active = pathname === page.href;
            return (
              <Link
                key={page.href}
                href={page.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-3.5 py-1.5 text-[13px] transition-colors duration-300 ${
                  active ? "bg-accent-soft text-fg" : "text-fg-muted hover:text-fg"
                }`}
              >
                {page.label}
              </Link>
            );
          })}

          <a
            href={PROFILE.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 inline-flex items-center gap-1 rounded-full border border-line-strong px-4 py-1.5 text-[13px] text-fg transition-colors hover:bg-white/5"
          >
            Résumé
            <ArrowUpRight size={13} aria-hidden="true" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="p-1.5 text-fg md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-ink md:hidden">
          <div className="flex flex-col px-6 py-4">
            {PAGES.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                onClick={() => setOpen(false)}
                aria-current={pathname === page.href ? "page" : undefined}
                className={`flex items-baseline gap-3 border-b border-line py-4 text-base transition-colors ${
                  pathname === page.href ? "text-fg" : "text-fg-muted hover:text-fg"
                }`}
              >
                <span className="meta">{page.index}</span>
                {page.label}
              </Link>
            ))}

            <a
              href={PROFILE.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-center gap-1.5 rounded-full bg-fg px-5 py-3 text-sm font-medium text-ink"
            >
              Résumé
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
