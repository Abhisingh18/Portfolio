import type { Metadata } from "next";
import { Research } from "@/components/research";
import { PageShell } from "@/components/ui/page-shell";

export const metadata: Metadata = {
  title: "Research interests",
  description: "Multilingual machine translation, automatic speech recognition and vision-language models for Indian languages, at Spring Lab, IIT Madras.",
  alternates: { canonical: "/research" },
};

export default function ResearchPage() {
  return (
    <PageShell href="/research">
      <Research />
    </PageShell>
  );
}
