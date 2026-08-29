import { motion } from "framer-motion";
import { Brain, Cpu, Globe, GraduationCap } from "lucide-react";
import { Section, SectionHeading } from "./ui/Section";
import { fadeUp } from "../lib/motion";
import { EDUCATION, PROFILE } from "../constants";

const highlights = [
    {
        icon: Brain,
        title: "Research",
        body: "Forecasting architectures and quantum ML at IISc; perception and sensor fusion at IIT Hyderabad.",
        color: "text-purple-400",
    },
    {
        icon: Cpu,
        title: "Engineering",
        body: "RAG pipelines, FastAPI services and vision models taken from notebook to deployed product.",
        color: "text-cyan-400",
    },
    {
        icon: Globe,
        title: "Impact",
        body: "Systems built for agriculture, disaster response, enterprise ERP and Indian-language education.",
        color: "text-emerald-400",
    },
];

const About = () => (
    <Section id="about">
        <SectionHeading eyebrow="Introduction" title="About" accent="Me" />

        <div className="grid items-start gap-8 lg:grid-cols-5">
            <motion.div {...fadeUp(0)} className="lg:col-span-3">
                <div className="card p-8 md:p-10">
                    <div className="space-y-5 text-base leading-relaxed text-gray-300 md:text-lg">
                        <p>{PROFILE.shortBio}</p>
                        <p>
                            My work sits between research and production. At{" "}
                            <span className="font-semibold text-white">IISc Bangalore</span>{" "}
                            I designed a residual GRU architecture that cut forecasting
                            error by up to{" "}
                            <span className="font-semibold text-purple-300">73%</span>{" "}
                            against established baselines, while keeping training inside a
                            2 GB memory budget. At{" "}
                            <span className="font-semibold text-white">IIT Hyderabad</span>{" "}
                            I built autonomous-driving perception that held{" "}
                            <span className="font-semibold text-purple-300">92%</span>{" "}
                            detection accuracy across lighting conditions.
                        </p>
                        <p>
                            Alongside research I ship products — RAG platforms, computer-vision
                            services and LLM automation — and I have won{" "}
                            <span className="font-semibold text-white">
                                five national hackathons
                            </span>{" "}
                            building them under deadline.
                        </p>
                    </div>

                    <div className="mt-8 flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-5">
                        <GraduationCap
                            className="mt-0.5 h-5 w-5 shrink-0 text-purple-400"
                            aria-hidden="true"
                        />
                        <div className="min-w-0">
                            <h3 className="text-sm font-semibold text-white">
                                {EDUCATION.degree}
                            </h3>
                            <p className="mt-1 text-sm text-gray-400">
                                {EDUCATION.institution} · {EDUCATION.location}
                            </p>
                            <p className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500">
                                <span>{EDUCATION.duration}</span>
                                <span aria-hidden="true">·</span>
                                <span className="font-medium text-purple-300">
                                    {EDUCATION.grade}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>

            <motion.div {...fadeUp(1)} className="grid gap-5 lg:col-span-2">
                {highlights.map(({ icon: Icon, title, body, color }) => (
                    <div key={title} className="card p-6">
                        <Icon className={`mb-4 h-8 w-8 ${color}`} aria-hidden="true" />
                        <h3 className="mb-2 text-lg font-bold text-white">{title}</h3>
                        <p className="text-sm leading-relaxed text-gray-400">{body}</p>
                    </div>
                ))}
            </motion.div>
        </div>
    </Section>
);

export default About;
