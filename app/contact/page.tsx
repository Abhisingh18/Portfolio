import type { Metadata } from "next";
import { Contact } from "@/components/contact";
import { PageShell } from "@/components/ui/page-shell";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch about AI/ML roles, research collaborations or consulting work.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <PageShell href="/contact">
      <Contact />
    </PageShell>
  );
}
