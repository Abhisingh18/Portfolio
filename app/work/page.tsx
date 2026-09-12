import type { Metadata } from "next";
import { Work } from "@/components/work";
import { PageShell } from "@/components/ui/page-shell";
import { PAGES } from "@/content/site";

const page = PAGES.find((p) => p.href === "/work")!;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: page.href },
};

export default function WorkPage() {
  return (
    <PageShell href="/work">
      <Work />
    </PageShell>
  );
}
