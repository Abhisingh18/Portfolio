import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { ArrowRight, FileText, MapPin } from "lucide-react";
import { PROFILE, STATS, SOCIALS } from "../constants";

const Hero = () => (
    <section
        id="hero"
        className="relative flex min-h-[100svh] items-center justify-center overflow-hidden pt-24"
    >
        {/* Ambient background */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute -left-[10%] -top-[20%] h-[520px] w-[520px] rounded-full bg-purple-600/20 blur-[130px] animate-blob" />
            <div className="absolute -bottom-[20%] -right-[10%] h-[520px] w-[520px] rounded-full bg-cyan-500/15 blur-[130px] animate-blob animation-delay-2000" />
            <div
                className="absolute inset-0 opacity-[0.35]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)",
                    backgroundSize: "64px 64px",
                    maskImage:
                        "radial-gradient(ellipse 80% 60% at 50% 40%, #000 40%, transparent 100%)",
                    WebkitMaskImage:
                        "radial-gradient(ellipse 80% 60% at 50% 40%, #000 40%, transparent 100%)",
                }}
            />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 py-16 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                {PROFILE.available && (
                    <span className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium text-emerald-300">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                        </span>
                        Open to AI/ML roles &amp; consulting
                    </span>
                )}

                <h1 className="mb-5 text-4xl font-bold leading-[1.1] text-white sm:text-6xl md:text-7xl">
                    {PROFILE.name}
                </h1>

                {/* Reserved height stops the typewriter reflowing the page each keystroke. */}
                <div className="mb-7 flex h-[2.5rem] items-center justify-center text-xl font-medium text-gray-300 sm:h-[3rem] sm:text-3xl">
                    <span className="text-gradient font-semibold">
                        <Typewriter
                            words={PROFILE.roles}
                            loop={0}
                            cursor
                            cursorStyle="_"
                            typeSpeed={70}
                            deleteSpeed={40}
                            delaySpeed={1600}
                        />
                    </span>
                </div>

                <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
                    {PROFILE.tagline}
                </p>

                <div className="mb-14 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <Link
                        to="contact"
                        smooth
                        duration={500}
                        offset={-80}
                        tabIndex={0}
                        className="btn-primary w-full cursor-pointer px-7 py-3.5 sm:w-auto"
                    >
                        Get in touch
                        <ArrowRight size={18} aria-hidden="true" />
                    </Link>

                    <a
                        href={PROFILE.resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghost w-full px-7 py-3.5 sm:w-auto"
                    >
                        <FileText size={18} aria-hidden="true" />
                        View résumé
                    </a>
                </div>

                <div className="mb-10 flex items-center justify-center gap-5">
                    {SOCIALS.map(({ name, href, icon: Icon }) => (
                        <a
                            key={name}
                            href={href}
                            target={href.startsWith("mailto") ? undefined : "_blank"}
                            rel="noopener noreferrer"
                            aria-label={name}
                            title={name}
                            className="rounded-lg p-1 text-gray-500 transition-colors hover:text-white"
                        >
                            <Icon size={20} aria-hidden="true" />
                        </a>
                    ))}
                </div>
            </motion.div>

            <motion.dl
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="mx-auto grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-4"
            >
                {STATS.map((stat) => (
                    <div key={stat.label} className="bg-background/80 px-4 py-5">
                        <dd className="text-2xl font-bold text-white md:text-3xl">
                            {stat.value}
                        </dd>
                        <dt className="mt-1 text-[11px] uppercase tracking-wide text-gray-500">
                            {stat.label}
                        </dt>
                    </div>
                ))}
            </motion.dl>

            <p className="mt-8 flex items-center justify-center gap-1.5 text-xs text-gray-600">
                <MapPin size={13} aria-hidden="true" />
                {PROFILE.location}
            </p>
        </div>
    </section>
);

export default Hero;
