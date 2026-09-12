import type { Metadata } from "next";
import { Work } from "@/components/work";
import { PageShell } from "@/components/ui/page-shell";

export const metadata: Metadata = {
  title: "Work experience",
  description: "Research and engineering roles at Spring Lab IIT Madras, IISc Bangalore and IIT Hyderabad — including Delta-GRU forecasting and autonomous-driving perception.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <PageShell href="/work">
      <Work />
    </PageShell>
  );
}
