import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";

const navLinks = [
    { name: "About", to: "about" },
    { name: "Experience", to: "experience" },
    { name: "Projects", to: "projects" },
    { name: "Services", to: "services" },
    { name: "Contact", to: "contact" },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-background/80 glass shadow-lg py-4" : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <Link
                    to="hero"
                    smooth={true}
                    className="text-2xl font-bold font-heading cursor-pointer tracking-tighter"
                >
                    Abhishek Singh<span className="text-purple-500">.</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            smooth={true}
                            offset={-80}
                            className="text-gray-300 hover:text-white cursor-pointer text-sm font-medium transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="/Abhi singh Resume-iisc.pdf"
                        target="_blank"
                        className="px-5 py-2 rounded-full border border-purple-500/50 bg-purple-500/10 text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300 text-sm font-semibold"
                    >
                        Resume
                    </a>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[#030014] border-b border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col items-center py-6 space-y-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.to}
                                    smooth={true}
                                    offset={-80}
                                    onClick={() => setIsOpen(false)}
                                    className="text-gray-300 text-lg hover:text-white cursor-pointer"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a
                                href="/Abhi singh Resume-iisc.pdf"
                                target="_blank"
                                className="px-6 py-2 rounded-full bg-purple-600 text-white font-semibold"
                            >
                                Resume
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
