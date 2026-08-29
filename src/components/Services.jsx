import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "./ui/Section";
import { fadeUp } from "../lib/motion";
import { SERVICES } from "../constants";

const Services = () => (
    <Section id="services">
        <SectionHeading
            eyebrow="Consulting"
            title="How I Can"
            accent="Help"
            subtitle="Available for contract and consulting work with startups and research teams."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service, index) => {
                const Icon = service.icon;
                return (
                    <motion.div
                        key={service.title}
                        {...fadeUp(index)}
                        className="group card overflow-hidden p-6 hover:border-cyan-500/40"
                    >
                        <Icon
                            size={96}
                            aria-hidden="true"
                            className="pointer-events-none absolute -right-4 -top-4 text-white/[0.03] transition-colors duration-500 group-hover:text-cyan-500/10"
                        />

                        <div className="relative">
                            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 transition-colors group-hover:bg-cyan-500/20">
                                <Icon size={24} className="text-cyan-400" aria-hidden="true" />
                            </div>

                            <h3 className="mb-2 text-base font-bold text-white">
                                {service.title}
                            </h3>
                            <p className="text-sm leading-relaxed text-gray-400">
                                {service.description}
                            </p>
                        </div>
                    </motion.div>
                );
            })}
        </div>

        <motion.div {...fadeUp(4)} className="mt-12 text-center">
            <Link
                to="contact"
                smooth
                duration={500}
                offset={-80}
                tabIndex={0}
                className="btn-ghost cursor-pointer px-7 py-3 text-sm"
            >
                Discuss a project
                <ArrowRight size={16} aria-hidden="true" />
            </Link>
        </motion.div>
    </Section>
);

export default Services;
