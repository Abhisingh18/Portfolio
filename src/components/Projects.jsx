import { motion } from "framer-motion";
import { Github, ExternalLink, Code2, X } from "lucide-react";
import { PROJECTS } from "../constants";
import { useState } from "react";

const Projects = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);

    // Filter out Dodge AI and Mantis projects (they appear in Freelancing section)
    const displayedProjects = PROJECTS.filter(
        project => !project.title.includes("Dodge") && !project.title.includes("Mantis")
    );

    return (
        <section id="projects" className="py-20 bg-gradient-to-b from-[#030014] to-[#0a0a1a] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-bold font-heading mb-4 text-white">
                        Featured <span className="text-gradient bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-8">Innovative solutions and cutting-edge applications across AI, Web, and Enterprise domains</p>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full shadow-[0_0_20px_rgba(52,211,153,0.5)]"></div>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {displayedProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative h-full"
                        >
                            {/* Glow Effect */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>

                            <div className="relative h-full bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 group-hover:border-emerald-500/50 rounded-xl p-4 flex flex-col overflow-hidden transition-all duration-500">
                                {/* Top Badge */}
                                <div className="flex justify-between items-start mb-2">
                                    <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-300 bg-emerald-500/15 rounded-full border border-emerald-500/30 backdrop-blur-sm">
                                        {project.category}
                                    </span>
                                    <Code2 size={16} className="text-emerald-400/60 group-hover:text-emerald-400 transition-colors" />
                                </div>

                                <div className="flex flex-col h-full">
                                    <div className="flex justify-between items-start mb-3">
                                        <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 rounded-full border border-emerald-500/20">
                                            {project.category}
                                        </span>
                                        <Code2 size={18} className="text-gray-500 group-hover:text-white transition-colors" />
                                    </div>

                                    {/* Image/Video Section */}
                                    {project.image ? (
                                        <div className="w-full h-28 mb-3 overflow-hidden rounded-lg border border-emerald-500/20 group-hover:border-emerald-500/50 transition-colors">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>
                                    ) : project.video ? (
                                        <div className="w-full h-28 mb-3 overflow-hidden rounded-lg bg-gradient-to-br from-emerald-500/10 to-purple-500/10 border border-emerald-500/20 group-hover:border-emerald-500/50 transition-colors">
                                            <video
                                                src={project.video}
                                                autoPlay
                                                muted
                                                loop
                                                playsInline
                                                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                                            />
                                        </div>
                                    ) : (
                                        <div className="w-full h-28 mb-3 bg-gradient-to-br from-emerald-500/5 to-purple-500/5 rounded-lg flex items-center justify-center border border-emerald-500/20">
                                            <Code2 size={32} className="text-emerald-400/20 group-hover:text-emerald-400/40 transition-colors" />
                                        </div>
                                    )}

                                    {/* Title */}
                                    <h3 className="text-sm font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors line-clamp-2">
                                        {project.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-400 text-xs mb-2 line-clamp-2 leading-relaxed flex-grow">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-1 mb-2 pt-2 border-t border-white/5">
                                        {project.techStack.slice(0, 2).map((tech, i) => (
                                            <span key={i} className="text-[10px] text-emerald-300 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                                                {tech}
                                            </span>
                                        ))}
                                        {project.techStack.length > 2 && (
                                            <span className="text-[10px] text-gray-500 px-2 py-0.5">+{project.techStack.length - 2}</span>
                                        )}
                                    </div>

                                    {/* Buttons */}
                                    <div className="flex gap-2 mt-auto">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center text-[10px] font-semibold text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 py-1.5 rounded border border-emerald-500/30 hover:border-emerald-500/60 transition-all"
                                        >
                                            Code
                                        </a>
                                        {project.video ? (
                                            <button
                                                onClick={() => setSelectedVideo(project.video)}
                                                className="flex-1 flex items-center justify-center text-[10px] font-semibold text-white bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 py-1.5 rounded transition-all cursor-pointer"
                                            >
                                                Video
                                            </button>
                                        ) : (
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 flex items-center justify-center text-[10px] font-semibold text-white bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 py-1.5 rounded transition-all"
                                            >
                                                Demo
                                            </a>
                                        )}
                                    </div>
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
