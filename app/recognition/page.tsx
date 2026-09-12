import type { Metadata } from "next";
import { Recognition } from "@/components/recognition";
import { PageShell } from "@/components/ui/page-shell";

export const metadata: Metadata = {
  title: "Recognition",
  description: "Five national hackathon wins including Smart India Hackathon 2025, a funded CBDE build grant, and finals placements at IIT Delhi and IIT Madras.",
  alternates: { canonical: "/recognition" },
};

export default function RecognitionPage() {
  return (
    <PageShell href="/recognition">
      <Recognition />
    </PageShell>
  );
}
