/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", "system-ui", "sans-serif"],
                heading: ["Poppins", "Inter", "system-ui", "sans-serif"],
            },
            colors: {
                background: "#030014",
                surface: "#0a0618",
            },
            animation: {
                blob: "blob 12s ease-in-out infinite",
                "spin-slow": "spin 6s linear infinite",
            },
            keyframes: {
                blob: {
                    "0%, 100%": { transform: "translate(0, 0) scale(1)" },
                    "33%": { transform: "translate(30px, -50px) scale(1.1)" },
                    "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
                },
            },
        },
    },
    plugins: [],
};
