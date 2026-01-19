import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { PROFILE } from "../constants";

const Hero = () => {
    return (
        <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-[#030014]">
            {/* Background Elements */}
            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-purple-600/20 blur-[120px] animate-blob" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-cyan-600/20 blur-[120px] animate-blob animation-delay-2000" />

            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-purple-400 mb-6 backdrop-blur-md">
                        👋 Welcome to my portfolio
                    </span>

                    <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 tracking-tight">
                        Hi, I'm <span className="text-gradient">{PROFILE.name}</span>
                    </h1>

                    <div className="text-2xl md:text-4xl font-light text-gray-300 mb-8 h-[60px]">
                        <span className="text-purple-400 font-semibold">
                            <Typewriter
                                words={PROFILE.roles}
                                loop={0}
                                cursor
                                cursorStyle="_"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </div>

                    <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-10 leading-relaxed">
                        {PROFILE.shortBio}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            to="contact"
                            smooth={true}
                            offset={-80}
                            className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold shadow-lg shadow-purple-500/25 hover:scale-105 transition-transform cursor-pointer"
                        >
                            Hire Me
                        </Link>

                        <a
                            href="/Abhi singh Resume-iisc.pdf"
                            target="_blank"
                            className="px-8 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium backdrop-blur-md hover:bg-white/10 transition-colors cursor-pointer"
                        >
                            View Resume
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Down Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="w-[30px] h-[50px] rounded-full border-2 border-white/20 flex justify-center p-2">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1.5 h-1.5 rounded-full bg-white mb-1"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
