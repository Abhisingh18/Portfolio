import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // /projects folded into /research; keep old links and shared URLs alive.
  async redirects() {
    return [{ source: "/projects", destination: "/research", permanent: true }];
  },
  images: {
    // Local files in /public only; no remote hosts to allow.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
