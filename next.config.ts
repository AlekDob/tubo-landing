import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // AVIF first (smaller), WebP as fallback.
  images: { formats: ["image/avif", "image/webp"] },
};

export default nextConfig;
