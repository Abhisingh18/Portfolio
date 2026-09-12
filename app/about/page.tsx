import type { Metadata } from "next";
import { About } from "@/components/about";
import { PageShell } from "@/components/ui/page-shell";

export const metadata: Metadata = {
  title: "About",
  description: "Background, education and the toolkit behind the work — an AI/ML engineer working between research and production.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <PageShell href="/about">
      <About />
    </PageShell>
  );
}
