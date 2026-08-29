import { motion } from "framer-motion";
import { Github, ExternalLink, PlayCircle, Code2 } from "lucide-react";
import { fadeUp } from "../../lib/motion";

/**
 * Cards never autoplay. The poster is a still image and the video is only
 * fetched when a visitor presses play — that is the difference between a
 * 2 MB page load and a 60 MB one.
 */
const ProjectCard = ({ project, index = 0, onPlay }) => {
    const { title, category, description, techStack, github, demo, impact, image, poster, video } =
        project;
    const preview = image || poster;

    return (
        <motion.article {...fadeUp(index)} className="group relative flex">
            <div className="card flex w-full flex-col overflow-hidden p-0 hover:border-purple-500/40">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-white/[0.02]">
                    {preview ? (
                        <img
                            src={preview}
                            alt={`${title} preview`}
                            loading="lazy"
                            decoding="async"
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    ) : (
                        <div className="flex h-full w-full items-center justify-center">
                            <Code2 size={36} className="text-white/10" aria-hidden="true" />
                        </div>
                    )}

                    <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"
                    />

                    <span className="absolute left-3 top-3 rounded-full border border-white/15 bg-background/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-purple-300 backdrop-blur-sm">
                        {category}
                    </span>

                    {video && (
                        <button
                            type="button"
                            onClick={() => onPlay(project)}
                            aria-label={`Play ${title} demo video`}
                            className="absolute inset-0 flex items-center justify-center bg-background/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 focus-visible:opacity-100"
                        >
                            <PlayCircle
                                size={44}
                                className="text-white drop-shadow-lg"
                                aria-hidden="true"
                            />
                        </button>
                    )}
                </div>

                <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-base font-bold text-white transition-colors group-hover:text-purple-300">
                        {title}
                    </h3>

                    <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-gray-400">
                        {description}
                    </p>

                    {impact && (
                        <p className="mt-3 text-xs font-medium text-emerald-300/90">{impact}</p>
                    )}

                    <div className="mt-4 flex flex-wrap gap-1.5">
                        {techStack.slice(0, 3).map((tech) => (
                            <span key={tech} className="chip">
                                {tech}
                            </span>
                        ))}
                        {techStack.length > 3 && (
                            <span className="chip border-transparent bg-transparent text-gray-500">
                                +{techStack.length - 3}
                            </span>
                        )}
                    </div>

                    <div className="mt-5 flex gap-2 border-t border-white/5 pt-4">
                        {github && (
                            <a
                                href={github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-ghost flex-1 px-3 py-2 text-xs"
                            >
                                <Github size={13} aria-hidden="true" />
                                Code
                            </a>
                        )}

                        {demo ? (
                            <a
                                href={demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary flex-1 px-3 py-2 text-xs"
                            >
                                <ExternalLink size={13} aria-hidden="true" />
                                Live
                            </a>
                        ) : (
                            video && (
                                <button
                                    type="button"
                                    onClick={() => onPlay(project)}
                                    className="btn-primary flex-1 px-3 py-2 text-xs"
                                >
                                    <PlayCircle size={13} aria-hidden="true" />
                                    Demo
                                </button>
                            )
                        )}
                    </div>
                </div>
            </div>
        </motion.article>
    );
};

export default ProjectCard;
