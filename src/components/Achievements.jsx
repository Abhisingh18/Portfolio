import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { Section, SectionHeading } from "./ui/Section";
import { fadeUp } from "../lib/motion";
import { ACHIEVEMENTS } from "../constants";

const Achievements = () => (
    <Section id="achievements">
        <SectionHeading
            eyebrow="Recognition"
            title="Hackathons &"
            accent="Awards"
            subtitle="Five national wins, a build grant, and finals placements at IIT Delhi and IIT Madras."
        />

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {ACHIEVEMENTS.map((item, index) => (
                <motion.article
                    key={item.title}
                    {...fadeUp(index)}
                    className="group card overflow-hidden p-0 hover:border-amber-400/40"
                >
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-white/[0.02]">
                        {item.image ? (
                            <img
                                src={item.image}
                                alt={item.title}
                                loading="lazy"
                                decoding="async"
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        ) : (
                            <div className="flex h-full w-full items-center justify-center">
                                <Trophy
                                    className="h-8 w-8 text-amber-400/30"
                                    aria-hidden="true"
                                />
                            </div>
                        )}
                        <div
                            aria-hidden="true"
                            className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent"
                        />
                    </div>

                    <div className="p-4">
                        <p className="text-sm font-bold text-amber-300">{item.result}</p>
                        <h3 className="mt-1 text-xs font-medium leading-snug text-gray-300">
                            {item.title}
                        </h3>
                        {item.note && (
                            <p className="mt-1 text-[11px] text-gray-500">{item.note}</p>
                        )}
                    </div>
                </motion.article>
            ))}
        </div>
    </Section>
);

export default Achievements;
