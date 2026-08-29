import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText } from "lucide-react";
import { Link } from "react-scroll";
import { NAV_LINKS, PROFILE } from "../constants";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState("");

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Lock body scroll while the mobile sheet is open.
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    // Close the mobile sheet on Escape.
    useEffect(() => {
        const onKey = (e) => e.key === "Escape" && setIsOpen(false);
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "border-b border-white/10 bg-background/70 py-3 backdrop-blur-xl"
                    : "border-b border-transparent py-5"
            }`}
        >
            <nav
                aria-label="Primary"
                className="mx-auto flex max-w-7xl items-center justify-between px-6"
            >
                <Link
                    to="hero"
                    smooth
                    duration={500}
                    tabIndex={0}
                    className="cursor-pointer text-lg font-bold tracking-tight text-white md:text-xl"
                >
                    Abhishek Singh<span className="text-purple-500">.</span>
                </Link>

                <div className="hidden items-center gap-1 md:flex">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            smooth
                            spy
                            duration={500}
                            offset={-90}
                            tabIndex={0}
                            onSetActive={() => setActive(link.to)}
                            className={`relative cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                                active === link.to
                                    ? "text-white"
                                    : "text-gray-400 hover:text-white"
                            }`}
                        >
                            {active === link.to && (
                                <motion.span
                                    layoutId="nav-pill"
                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    className="absolute inset-0 rounded-full bg-white/10"
                                />
                            )}
                            <span className="relative z-10">{link.name}</span>
                        </Link>
                    ))}

                    <a
                        href={PROFILE.resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghost ml-3 px-5 py-2 text-sm"
                    >
                        <FileText size={15} aria-hidden="true" />
                        Résumé
                    </a>
                </div>

                <button
                    onClick={() => setIsOpen((v) => !v)}
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                    className="rounded-lg p-2 text-white md:hidden"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden border-b border-white/10 bg-background/95 backdrop-blur-xl md:hidden"
                    >
                        <div className="flex flex-col gap-1 px-6 py-6">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    smooth
                                    duration={500}
                                    offset={-80}
                                    tabIndex={0}
                                    onClick={() => setIsOpen(false)}
                                    className="cursor-pointer rounded-lg px-4 py-3 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a
                                href={PROFILE.resume}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary mt-3 px-6 py-3 text-sm"
                            >
                                <FileText size={16} aria-hidden="true" />
                                Download Résumé
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
