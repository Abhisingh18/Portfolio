import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { EXPERIENCE } from "../constants";

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-[#030014] relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-white">
                        Work <span className="text-gradient">Experience</span>
                    </h2>
                    <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-cyan-500 to-purple-500 opacity-20"></div>

                    {EXPERIENCE.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className={`relative flex items-center justify-between mb-12 md:mb-24 ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                                }`}
                        >
                            {/* Spacer for alternating layout */}
                            <div className="hidden md:block w-5/12"></div>

                            {/* Center Dot */}
                            <div className="absolute left-[-11px] md:left-1/2 md:-translate-x-1/2 z-10">
                                <div className="w-6 h-6 rounded-full bg-[#030014] border-4 border-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
                            </div>

                            {/* Content Card */}
                            <div className="w-full md:w-5/12 pl-8 md:pl-0">
                                <div className="glass p-8 rounded-2xl hover:border-cyan-500/30 transition-colors border border-white/10 relative group">
                                    <div className="absolute inset-0 bg-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="relative z-10">
                                        {exp.image && (
                                            <div className="w-full h-40 mb-4 overflow-hidden rounded-lg">
                                                <img
                                                    src={exp.image}
                                                    alt={exp.company}
                                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                                />
                                            </div>
                                        )}
                                        <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                                        <div className="flex items-center text-cyan-400 mb-4 font-medium">
                                            <Briefcase className="w-4 h-4 mr-2" />
                                            {exp.company}
                                        </div>
                                        <ul className="space-y-2">
                                            {exp.description.map((desc, i) => (
                                                <li key={i} className="text-gray-400 text-sm flex items-start">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 mr-2 flex-shrink-0"></span>
                                                    {desc}
                                                </li>
                                            ))}
                                        </ul>
                                        <span className="absolute top-4 right-4 text-xs font-mono text-gray-500 border border-white/10 px-2 py-1 rounded">
                                            {exp.duration}
                                        </span>
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

export default Experience;
