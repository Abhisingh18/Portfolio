import { motion } from "framer-motion";

/**
 * One heading treatment for every section, so the page reads as a single
 * document rather than nine differently-styled ones.
 */
export const SectionHeading = ({ eyebrow, title, accent, subtitle }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mb-14 text-center"
    >
        {eyebrow && (
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-purple-400">
                {eyebrow}
            </span>
        )}

        <h2 className="text-3xl font-bold text-white md:text-5xl">
            {title} {accent && <span className="text-gradient">{accent}</span>}
        </h2>

        {subtitle && (
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-400">
                {subtitle}
            </p>
        )}

        <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
    </motion.div>
);

export const Section = ({ id, children, className = "" }) => (
    <section id={id} className={`relative py-20 md:py-28 ${className}`}>
        <div className="relative z-10 mx-auto max-w-7xl px-6">{children}</div>
    </section>
);

