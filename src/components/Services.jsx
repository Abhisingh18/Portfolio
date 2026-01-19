import { motion } from "framer-motion";
import { SERVICES } from "../constants";

const Services = () => {
    return (
        <section id="services" className="py-20 bg-[#030014] relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-white">
                        My <span className="text-gradient">Services</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Helping startups and businesses leverage AI for growth and efficiency.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {SERVICES.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group p-6 rounded-2xl bg-[#0a0a0a] border border-white/10 hover:border-cyan-500/50 transition-colors relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Icon size={100} className="text-cyan-500" />
                                </div>

                                <div className="relative z-10">
                                    <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors">
                                        <Icon size={32} className="text-cyan-400" />
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-3">
                                        {service.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
