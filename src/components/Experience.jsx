import { motion } from "framer-motion";
import { Section, SectionHeading } from "./ui/Section";
import { EXPERIENCE } from "../constants";

const Experience = () => (
    <Section id="experience">
        <SectionHeading
            eyebrow="Career"
            title="Work"
            accent="Experience"
            subtitle="Research and engineering roles across IIT Madras, IISc Bangalore, IIT Hyderabad and IIT Kharagpur."
        />

        <div className="relative mx-auto max-w-4xl">
            {/* Timeline rail — hidden on mobile, where cards stack full width. */}
            <div
                aria-hidden="true"
                className="absolute left-[19px] top-2 hidden h-full w-px bg-gradient-to-b from-purple-500/60 via-white/10 to-transparent md:block"
            />

            <ol className="space-y-8">
                {EXPERIENCE.map((exp, index) => (
                    <motion.li
                        key={`${exp.company}-${exp.role}`}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.45, delay: index * 0.08 }}
                        className="relative md:pl-14"
                    >
                        {/* Timeline node */}
                        <span
                            aria-hidden="true"
                            className={`absolute left-[13px] top-8 hidden h-3 w-3 rounded-full ring-4 ring-background md:block ${
                                exp.current
                                    ? "bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,.8)]"
                                    : "bg-purple-500"
                            }`}
                        />

                        <article className="card group overflow-hidden p-0">
                            <div className="flex flex-col sm:flex-row">
                                {exp.image && (
                                    <div className="relative h-40 w-full shrink-0 overflow-hidden sm:h-auto sm:w-48">
                                        <img
                                            src={exp.image}
                                            alt=""
                                            loading="lazy"
                                            decoding="async"
                                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div
                                            aria-hidden="true"
                                            className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent sm:bg-gradient-to-r"
                                        />

                                        <div className="absolute bottom-3 left-3 flex gap-2 sm:bottom-auto sm:top-3">
                                            {[exp.logo, exp.logo2].filter(Boolean).map((src, i) => (
                                                <img
                                                    key={i}
                                                    src={src}
                                                    alt=""
                                                    loading="lazy"
                                                    decoding="async"
                                                    className="h-11 w-11 rounded-full border border-white/25 bg-white/10 object-cover backdrop-blur-sm"
                                                />
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <div className="flex-1 p-6 md:p-7">
                                    <div className="mb-4 flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                                        <div className="min-w-0">
                                            <h3 className="text-lg font-bold text-white md:text-xl">
                                                {exp.role}
                                            </h3>
                                            <p className="mt-1 text-sm font-medium text-purple-300">
                                                {exp.company}
                                            </p>
                                        </div>

                                        <span
                                            className={`chip shrink-0 whitespace-nowrap font-mono ${
                                                exp.current
                                                    ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
                                                    : ""
                                            }`}
                                        >
                                            {exp.duration}
                                        </span>
                                    </div>

                                    <ul className="space-y-2.5">
                                        {exp.description.map((line) => (
                                            <li
                                                key={line}
                                                className="flex gap-3 text-sm leading-relaxed text-gray-400"
                                            >
                                                <span
                                                    aria-hidden="true"
                                                    className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-purple-500/80"
                                                />
                                                {line}
                                            </li>
                                        ))}
                                    </ul>

                                    {exp.tags?.length > 0 && (
                                        <div className="mt-5 flex flex-wrap gap-2 border-t border-white/5 pt-5">
                                            {exp.tags.map((tag) => (
                                                <span key={tag} className="chip">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </article>
                    </motion.li>
                ))}
            </ol>
        </div>
    </Section>
);

export default Experience;
