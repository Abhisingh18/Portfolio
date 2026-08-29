import { useState, useMemo } from "react";
import { Section, SectionHeading } from "./ui/Section";
import ProjectCard from "./ui/ProjectCard";
import VideoModal from "./ui/VideoModal";
import { PROJECTS } from "../constants";

const Freelancing = () => {
    const [playing, setPlaying] = useState(null);
    const projects = useMemo(() => PROJECTS.filter((p) => p.freelance), []);

    if (projects.length === 0) return null;

    return (
        <Section id="freelancing">
            <SectionHeading
                eyebrow="Client work"
                title="Freelance"
                accent="Engagements"
                subtitle="Systems delivered for external clients, including work with MIT, USA."
            />

            <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2">
                {projects.map((project, index) => (
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

export default Freelancing;
