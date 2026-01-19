import { motion } from "framer-motion";
import { SKILLS } from "../constants";

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-[#030014] relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-white">
                        Technical <span className="text-gradient">Skills</span>
                    </h2>
                    <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SKILLS.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300"
                        >
                            <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-2">
                                {category.category}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {category.items.map((item, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1.5 text-sm md:text-base text-gray-300 bg-white/5 rounded-lg border border-white/5 hover:border-purple-500/50 hover:text-white transition-colors cursor-default"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
