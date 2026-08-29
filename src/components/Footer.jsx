import { Link } from "react-scroll";
import { ArrowUp } from "lucide-react";
import { PROFILE, SOCIALS, NAV_LINKS } from "../constants";

const Footer = () => (
    <footer className="border-t border-white/10 bg-[#07040f]">
        <div className="mx-auto max-w-7xl px-6 py-12">
            <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
                <div className="text-center md:text-left">
                    <p className="text-lg font-bold text-white">
                        {PROFILE.name}
                        <span className="text-purple-500">.</span>
                    </p>
                    <p className="mt-2 max-w-xs text-sm text-gray-500">{PROFILE.title}</p>
                </div>

                <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            smooth
                            duration={500}
                            offset={-80}
                            tabIndex={0}
                            className="cursor-pointer text-sm text-gray-400 transition-colors hover:text-white"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <div className="flex gap-3">
                    {SOCIALS.map(({ name, href, icon: Icon }) => (
                        <a
                            key={name}
                            href={href}
                            target={href.startsWith("mailto") ? undefined : "_blank"}
                            rel="noopener noreferrer"
                            aria-label={name}
                            title={name}
                            className="rounded-lg p-2 text-gray-500 transition-colors hover:bg-white/5 hover:text-white"
                        >
                            <Icon size={18} aria-hidden="true" />
                        </a>
                    ))}
                </div>
            </div>

            <div className="mt-10 flex flex-col items-center gap-4 border-t border-white/5 pt-6 sm:flex-row sm:justify-between">
                <p className="text-xs text-gray-600">
                    © {new Date().getFullYear()} {PROFILE.name}. Built with React, Tailwind
                    &amp; Framer Motion.
                </p>

                <Link
                    to="hero"
                    smooth
                    duration={500}
                    tabIndex={0}
                    className="flex cursor-pointer items-center gap-1.5 text-xs text-gray-500 transition-colors hover:text-white"
                >
                    Back to top
                    <ArrowUp size={13} aria-hidden="true" />
                </Link>
            </div>
        </div>
    </footer>
);

export default Footer;
