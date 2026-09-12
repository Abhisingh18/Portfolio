import type { Metadata } from "next";
import { Projects } from "@/components/projects";
import { PageShell } from "@/components/ui/page-shell";
import { PAGES } from "@/content/site";

const page = PAGES.find((p) => p.href === "/projects")!;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: page.href },
};

export default function ProjectsPage() {
  return (
    <PageShell href="/projects">
      <Projects />
    </PageShell>
  );
}
