import type { Metadata } from "next";
import { Contact } from "@/components/contact";
import { PageShell } from "@/components/ui/page-shell";
import { PAGES } from "@/content/site";

const page = PAGES.find((p) => p.href === "/contact")!;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: page.href },
};

export default function ContactPage() {
  return (
    <PageShell href="/contact">
      <Contact />
    </PageShell>
  );
}
