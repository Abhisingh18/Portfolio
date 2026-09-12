import type { Metadata } from "next";
import { Research } from "@/components/research";
import { PageShell } from "@/components/ui/page-shell";
import { PAGES } from "@/content/site";

const page = PAGES.find((p) => p.href === "/research")!;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: page.href },
};

export default function ResearchPage() {
  return (
    <PageShell href="/research">
      <Research />
    </PageShell>
  );
}
