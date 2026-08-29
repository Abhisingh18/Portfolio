import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const VideoModal = ({ project, onClose }) => {
    const closeRef = useRef(null);

    useEffect(() => {
        if (!project) return;
        const onKey = (e) => e.key === "Escape" && onClose();
        window.addEventListener("keydown", onKey);
        document.body.style.overflow = "hidden";
        closeRef.current?.focus();
        return () => {
            window.removeEventListener("keydown", onKey);
            document.body.style.overflow = "";
        };
    }, [project, onClose]);

    return createPortal(
        <AnimatePresence>
            {project && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    role="dialog"
                    aria-modal="true"
                    aria-label={`${project.title} demo video`}
                    onClick={onClose}
                    className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
                >
                    <motion.div
                        initial={{ scale: 0.96, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.96, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-[#0a0618] shadow-2xl"
                    >
                        <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-3">
                            <h3 className="truncate text-sm font-semibold text-white">
                                {project.title}
                            </h3>
                            <button
                                ref={closeRef}
                                onClick={onClose}
                                aria-label="Close video"
                                className="rounded-lg p-1.5 text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
                            >
                                <X size={20} aria-hidden="true" />
                            </button>
                        </div>

                        <video
                            key={project.video}
                            src={project.video}
                            poster={project.poster}
                            controls
                            autoPlay
                            playsInline
                            preload="metadata"
                            className="max-h-[75vh] w-full bg-black"
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
};

export default VideoModal;
