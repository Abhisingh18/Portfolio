import { Hero } from "@/components/hero";
import { Currently } from "@/components/currently";
import { Vision } from "@/components/vision";
import { FocusAreas } from "@/components/focus-areas";
import { Projects } from "@/components/projects";
import { Recognition } from "@/components/recognition";
import { News } from "@/components/news";

/**
 * The home page previews each area and links out to the full route, rather
 * than repeating it — so /projects and /recognition stay the canonical
 * version of their own content.
 */
export default function Page() {
  return (
    <main id="main">
      <Hero />
      <Currently />
      <Vision />
      <FocusAreas />
      <Projects limit={4} index="03" showAll />
      <Recognition limit={4} index="04" showAll />
      <News />
    </main>
  );
}
