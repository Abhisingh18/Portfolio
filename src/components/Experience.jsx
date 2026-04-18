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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {EXPERIENCE.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="glass p-8 rounded-2xl hover:border-cyan-500/30 transition-all duration-300 border border-white/10 relative h-full flex flex-col">
                                <div className="absolute inset-0 bg-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="relative z-10 flex flex-col h-full">
                                    {exp.image && (
                                        <div className="w-full h-48 mb-6 overflow-hidden rounded-xl bg-black/20">
                                            <img
                                                src={exp.image}
                                                alt={exp.company}
                                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>
                                    )}
                                    <div className="mb-4">
                                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                                            {exp.role}
                                        </h3>
                                        <div className="flex items-center text-cyan-400 font-medium">
                                            <Briefcase className="w-4 h-4 mr-2" />
                                            {exp.company}
                                        </div>
                                    </div>
                                    
                                    <ul className="space-y-3 mb-6 flex-grow">
                                        {exp.description.map((desc, i) => (
                                            <li key={i} className="text-gray-400 text-sm flex items-start">
                                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 mr-2 flex-shrink-0 shadow-[0_0_8px_rgba(6,182,212,0.5)]"></span>
                                                {desc}
                                            </li>
                                        ))}
                                    </ul>
                                    
                                    <div className="pt-4 border-t border-white/10 mt-auto">
                                        <span className="text-xs font-mono text-gray-500 bg-white/5 px-3 py-1 rounded-full border border-white/10">
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
