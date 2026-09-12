import type { Metadata } from "next";
import { Recognition } from "@/components/recognition";
import { PageShell } from "@/components/ui/page-shell";
import { PAGES } from "@/content/site";

const page = PAGES.find((p) => p.href === "/recognition")!;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: page.href },
};

export default function RecognitionPage() {
  return (
    <PageShell href="/recognition">
      <Recognition />
    </PageShell>
  );
}
