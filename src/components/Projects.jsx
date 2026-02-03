import { motion } from "framer-motion";
import { Github, ExternalLink, Code2, X } from "lucide-react";
import { PROJECTS } from "../constants";
import { useState } from "react";

const Projects = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);

    return (
        <section id="projects" className="py-20 bg-[#030014] relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-white">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative"
                        >
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-emerald-500 rounded-2xl opacity-0 group-hover:opacity-75 blur transition duration-500"></div>
                            <div className="relative h-full bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 flex flex-col justify-between overflow-hidden">
                                {/* Background Pattern */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-[60px] translate-x-10 -translate-y-10 group-hover:bg-purple-500/10 transition-colors"></div>

                                <div>
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="px-3 py-1 text-xs font-semibold text-emerald-400 bg-emerald-500/10 rounded-full border border-emerald-500/20">
                                            {project.category}
                                        </span>
                                        <Code2 className="text-gray-500 group-hover:text-white transition-colors" />
                                    </div>

                                    {project.image ? (
                                        <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>
                                    ) : project.video ? (
                                        <div className="w-full h-48 mb-4 overflow-hidden rounded-lg bg-black/50 border border-white/10">
                                            <video
                                                src={project.video}
                                                autoPlay
                                                muted
                                                loop
                                                playsInline
                                                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                                            />
                                        </div>
                                    ) : null}

                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-emerald-400 transition-all">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-400 mb-6 leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="bg-white/5 border border-white/10 p-4 rounded-lg mb-6">
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.techStack.map((tech, i) => (
                                                <span key={i} className="text-xs text-gray-300 bg-white/5 px-2 py-1 rounded border border-white/10">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="pt-3 border-t border-white/10">
                                            <p className="text-sm text-gray-400 italic">"{project.impact}"</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-4 mt-4">
                                    <a
                                        href={project.github}
                                        className="flex items-center gap-2 text-sm text-white bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition-colors"
                                    >
                                        <Github size={16} /> GitHub
                                    </a>
                                    {project.video ? (
                                        <button
                                            onClick={() => setSelectedVideo(project.video)}
                                            className="flex items-center gap-2 text-sm text-[#030014] bg-emerald-400 px-4 py-2 rounded-full hover:bg-emerald-300 transition-colors font-semibold cursor-pointer"
                                        >
                                            <ExternalLink size={16} /> Live Demo
                                        </button>
                                    ) : (
                                        <a
                                            href={project.demo}
                                            className="flex items-center gap-2 text-sm text-[#030014] bg-emerald-400 px-4 py-2 rounded-full hover:bg-emerald-300 transition-colors font-semibold"
                                        >
                                            <ExternalLink size={16} /> Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Video Modal */}
                {selectedVideo && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedVideo(null)}>
                        <div className="relative w-full max-w-4xl bg-gray-900 rounded-xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
                            <button
                                onClick={() => setSelectedVideo(null)}
                                className="absolute top-4 right-4 text-white hover:text-red-400 z-10 p-2 bg-black/50 rounded-full transition-colors"
                            >
                                <X size={24} />
                            </button>
                            <video
                                src={selectedVideo}
                                controls
                                autoPlay
                                className="w-full h-auto max-h-[80vh]"
                            />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;
