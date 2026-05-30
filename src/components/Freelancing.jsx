import { motion } from "framer-motion";
import { Github, ExternalLink, Play } from "lucide-react";
import { PROJECTS } from "../constants";

const Freelancing = () => {
    // Filter only Dodge AI and Mantis projects
    const freelancingProjects = PROJECTS.filter(
        project => project.title.includes("Dodge") || project.title.includes("Mantis")
    );

    return (
        <section id="freelancing" className="py-12 bg-[#030014] relative">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10"
                >
                    <h2 className="text-2xl md:text-4xl font-bold font-heading mb-2 text-white">
                        Freelancing <span className="text-gradient">AT MIT USA</span>
                    </h2>
                    <div className="w-16 h-1 bg-cyan-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-2 gap-5 max-w-5xl mx-auto">
                    {freelancingProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="glass p-4 rounded-xl hover:border-cyan-500/30 transition-all duration-300 border border-white/10 relative h-full flex flex-col">
                                <div className="absolute inset-0 bg-cyan-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="relative z-10 flex flex-col h-full">
                                    {(project.image || project.video) && (
                                        <div className="w-full h-28 mb-3 overflow-hidden rounded-lg bg-black/20">
                                            {project.video ? (
                                                <video
                                                    src={project.video}
                                                    className="w-full h-full object-cover"
                                                    controls
                                                />
                                            ) : (
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                                />
                                            )}
                                        </div>
                                    )}
                                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 text-xs mb-2 flex-grow line-clamp-2">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-1 mb-3">
                                        {project.techStack.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="text-xs bg-cyan-500/10 text-cyan-400 px-2 py-1 rounded border border-cyan-500/20"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex gap-2 pt-2 border-t border-white/10 flex-wrap">
                                        {project.github && project.github !== "#" && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-1 text-xs bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30 px-2 py-1 rounded transition-colors"
                                            >
                                                <Github className="w-3 h-3" />
                                                GitHub
                                            </a>
                                        )}
                                        {project.demo && project.demo !== "#" && (
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-1 text-xs bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30 px-2 py-1 rounded transition-colors"
                                            >
                                                <ExternalLink className="w-3 h-3" />
                                                Demo
                                            </a>
                                        )}
                                        {project.video && (
                                            <a
                                                href={project.video}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-1 text-xs bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30 px-2 py-1 rounded transition-colors"
                                            >
                                                <Play className="w-3 h-3" />
                                                Video
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Freelancing;
