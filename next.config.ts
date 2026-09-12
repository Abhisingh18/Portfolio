import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // Local files in /public only; no remote hosts to allow.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
