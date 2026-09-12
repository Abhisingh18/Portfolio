import type { Metadata } from "next";
import { Projects } from "@/components/projects";
import { PageShell } from "@/components/ui/page-shell";

export const metadata: Metadata = {
  title: "Selected projects",
  description: "Prototypes and production systems across generative AI, computer vision, retrieval and IoT — with live demos and source.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <PageShell href="/projects">
      <Projects />
    </PageShell>
  );
}
