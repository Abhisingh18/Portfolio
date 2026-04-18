import { motion } from "framer-motion";
import { Trophy, Award, Star } from "lucide-react";
import { ACHIEVEMENTS } from "../constants";

const Achievements = () => {
    return (
        <section id="achievements" className="py-20 bg-[#030014]">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-white">
                        Hackathons & <span className="text-gradient">Awards</span>
                    </h2>
                    <div className="w-20 h-1 bg-yellow-500 mx-auto rounded-full shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {ACHIEVEMENTS.map((achievement, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative"
                        >
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-50 blur transition duration-500"></div>
                            <div className="relative glass p-8 rounded-2xl h-full flex flex-col items-center text-center hover:bg-white/10 transition-all duration-300 border border-white/10">
                                {achievement.image ? (
                                    <div className="w-full h-48 mb-6 rounded-xl overflow-hidden border border-white/10 shadow-lg group-hover:border-yellow-500/50 transition-colors">
                                        <img 
                                            src={achievement.image} 
                                            alt={achievement.title} 
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                                        />
                                    </div>
                                ) : (
                                    <div className="w-16 h-16 rounded-full bg-yellow-500/10 flex items-center justify-center mb-6 border border-yellow-500/20 group-hover:scale-110 transition-transform">
                                        {index === 0 ? <Trophy className="text-yellow-400 w-8 h-8" /> :
                                            index === 1 ? <Award className="text-purple-400 w-8 h-8" /> :
                                                <Star className="text-cyan-400 w-8 h-8" />
                                        }
                                    </div>
                                )}
                                <div className="flex-grow">
                                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">{achievement.result}</h3>
                                    <p className="text-gray-400 font-medium">{achievement.title}</p>
                                </div>
                                <div className="mt-6 w-full h-px bg-white/10 group-hover:bg-yellow-500/30 transition-colors"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
