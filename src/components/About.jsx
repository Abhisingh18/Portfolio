import { motion } from "framer-motion";
import { Brain, Cpu, Globe } from "lucide-react";

const About = () => {
    return (
        <section id="about" className="py-20 bg-[#030014] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-white">
                        About <span className="text-gradient">Me</span>
                    </h2>
                    <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
                            <div className="relative bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 leading-relaxed text-gray-300 text-lg">
                                <p className="mb-6">
                                    I am a research-oriented <span className="text-white font-semibold">AI/ML Engineer</span> and <span className="text-white font-semibold">Hackathon Winner</span> with a passion for building scalable intelligent systems.
                                </p>
                                <p className="mb-6">
                                    My expertise spans across <span className="text-purple-400">Generative AI</span>, <span className="text-purple-400">Computer Vision</span>, and <span className="text-purple-400">IoT</span>. I focus not just on models, but on creating real-world impact through efficient optimization and deployment.
                                </p>
                                <p>
                                    Currently optimizing Quantum Machine Learning algorithms at <span className="text-white font-semibold">IISc Bangalore</span>.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                    >
                        <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-colors backdrop-blur-sm">
                            <Brain className="text-purple-400 mb-4 w-10 h-10" />
                            <h3 className="text-xl font-bold text-white mb-2">Research</h3>
                            <p className="text-gray-400 text-sm">Working on cutting-edge algorithms in QML & Computer Vision.</p>
                        </div>
                        <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-colors backdrop-blur-sm">
                            <Cpu className="text-cyan-400 mb-4 w-10 h-10" />
                            <h3 className="text-xl font-bold text-white mb-2">Engineering</h3>
                            <p className="text-gray-400 text-sm">Building scalable RAG systems and deploying models to production.</p>
                        </div>
                        <div className="sm:col-span-2 p-6 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/50 transition-colors backdrop-blur-sm">
                            <Globe className="text-emerald-400 mb-4 w-10 h-10" />
                            <h3 className="text-xl font-bold text-white mb-2">Impact</h3>
                            <p className="text-gray-400 text-sm">Solved real-world problems for NDMA and Agricultural sectors.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
