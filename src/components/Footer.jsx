const Footer = () => {
    return (
        <footer className="bg-[#0a0a0a] py-8 text-center text-gray-500 text-sm border-t border-white/5">
            <p>© {new Date().getFullYear()} Abhishek Singh. All rights reserved.</p>
            <p className="mt-2 text-xs">Built with React, Tailwind & Framer Motion</p>
        </footer>
    );
};

export default Footer;
