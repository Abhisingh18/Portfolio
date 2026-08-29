/** Shared entrance animation so staggered grids behave identically everywhere. */
export const fadeUp = (index = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.45, delay: Math.min(index * 0.06, 0.4) },
});
