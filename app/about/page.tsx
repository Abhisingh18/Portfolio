import type { Metadata } from "next";
import { About } from "@/components/about";
import { PageShell } from "@/components/ui/page-shell";
import { PAGES } from "@/content/site";

const page = PAGES.find((p) => p.href === "/about")!;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: page.href },
};

export default function AboutPage() {
  return (
    <PageShell href="/about">
      <About />
    </PageShell>
  );
}
