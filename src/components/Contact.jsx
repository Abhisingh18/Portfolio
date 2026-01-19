import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, Terminal, Code } from "lucide-react";
import { PROFILE } from "../constants";

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-[#030014] relative">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#030014] to-[#0a0a0a]"></div>

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-white">
                        Let's <span className="text-gradient">Connect</span>
                    </h2>
                    <p className="text-gray-400">
                        Ready to build something impactful? Reach out for collaborations or opportunities.
                    </p>
                </motion.div>

                <div className="glass p-8 md:p-12 rounded-3xl border border-white/10">
                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                                <input type="text" className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors" placeholder="John Doe" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                                <input type="email" className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors" placeholder="john@example.com" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                            <textarea rows={4} className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors resize-none" placeholder="Tell me about your project..."></textarea>
                        </div>

                        <button type="button" className="w-full py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl text-white font-bold text-lg hover:shadow-[0_0_20px_rgba(147,51,234,0.3)] transition-shadow flex items-center justify-center gap-2">
                            Send Message <Send size={20} />
                        </button>
                    </form>

                    <div className="mt-12 flex justify-center gap-8">
                        <a href={`mailto:${PROFILE.email}`} className="text-gray-400 hover:text-white transition-colors">
                            <Mail size={24} />
                        </a>
                        <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                            <Linkedin size={24} />
                        </a>
                        <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <Github size={24} />
                        </a>
                        <a href={PROFILE.geeksforgeeks} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition-colors" title="GeeksforGeeks">
                            <Terminal size={24} />
                        </a>
                        <a href={PROFILE.leetcode} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500 transition-colors" title="LeetCode">
                            <Code size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
