import { useState, useMemo } from "react";
import { Section, SectionHeading } from "./ui/Section";
import ProjectCard from "./ui/ProjectCard";
import VideoModal from "./ui/VideoModal";
import { PROJECTS } from "../constants";

const Projects = () => {
    const [active, setActive] = useState("All");
    const [playing, setPlaying] = useState(null);

    const projects = useMemo(() => PROJECTS.filter((p) => !p.freelance), []);

    const categories = useMemo(
        () => ["All", ...new Set(projects.map((p) => p.category))],
        [projects]
    );

    const visible = useMemo(
        () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
        [projects, active]
    );

    return (
        <Section id="projects">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 overflow-hidden"
            >
                <div className="absolute left-1/4 top-20 h-72 w-72 rounded-full bg-purple-500/5 blur-3xl" />
                <div className="absolute bottom-20 right-1/4 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl" />
            </div>

            <SectionHeading
                eyebrow="Selected work"
                title="Featured"
                accent="Projects"
                subtitle="Research prototypes and production systems across generative AI, computer vision, forecasting and optimisation."
            />

            <div
                role="tablist"
                aria-label="Filter projects by category"
                className="mb-10 flex flex-wrap justify-center gap-2"
            >
                {categories.map((category) => (
                    <button
                        key={category}
                        role="tab"
                        aria-selected={active === category}
                        onClick={() => setActive(category)}
                        className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-colors ${
                            active === category
                                ? "border-purple-500/50 bg-purple-500/15 text-purple-200"
                                : "border-white/10 bg-white/[0.03] text-gray-400 hover:border-white/20 hover:text-white"
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {visible.map((project, index) => (
                    <ProjectCard
                        key={project.title}
                        project={project}
                        index={index}
                        onPlay={setPlaying}
                    />
                ))}
            </div>

            <VideoModal project={playing} onClose={() => setPlaying(null)} />
        </Section>
    );
};

export default Projects;
