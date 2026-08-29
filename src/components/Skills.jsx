import { motion } from "framer-motion";
import { Section, SectionHeading } from "./ui/Section";
import { fadeUp } from "../lib/motion";
import { SKILLS } from "../constants";

const Skills = () => (
    <Section id="skills">
        <SectionHeading
            eyebrow="Toolkit"
            title="Technical"
            accent="Skills"
            subtitle="The stack I reach for, grouped by what I actually use it to build."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SKILLS.map((group, index) => (
                <motion.div
                    key={group.category}
                    {...fadeUp(index)}
                    className="card p-6 hover:border-purple-500/30"
                >
                    <h3 className="mb-4 border-b border-white/10 pb-3 text-sm font-bold uppercase tracking-wide text-purple-300">
                        {group.category}
                    </h3>
                    <ul className="flex flex-wrap gap-2">
                        {group.items.map((item) => (
                            <li key={item} className="chip">
                                {item}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            ))}
        </div>
    </Section>
);

export default Skills;
