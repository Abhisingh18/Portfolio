import { motion } from "framer-motion";
import { Trophy, Award, Star } from "lucide-react";
import { ACHIEVEMENTS } from "../constants";

const Achievements = () => {
    return (
        <section className="py-10 bg-[#030014]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {ACHIEVEMENTS.map((achievement, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`glass p-6 rounded-2xl text-center hover:bg-white/10 transition-colors`}
                        >
                            {achievement.image ? (
                                <div className="w-full h-48 mb-4 rounded-lg overflow-hidden border border-white/20">
                                    <img src={achievement.image} alt={achievement.title} className="w-full h-full object-cover" />
                                </div>
                            ) : (
                                <div className="flex justify-center mb-4">
                                    {index === 0 ? <Trophy className="text-yellow-400 w-8 h-8" /> :
                                        index === 1 ? <Award className="text-purple-400 w-8 h-8" /> :
                                            <Star className="text-cyan-400 w-8 h-8" />
                                    }
                                </div>
                            )}
                            <h3 className="text-2xl font-bold text-white mb-1">{achievement.result}</h3>
                            <p className="text-gray-400 text-sm">{achievement.title}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
