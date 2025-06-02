import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Enable static HTML export for GitHub Pages
  images: {
    unoptimized: true // Disable Next.js image optimization
  },
  basePath: "/nextjs_app", // Match your GitHub repo name exactly
  assetPrefix: "/nextjs_app"
};

export default nextConfig;
