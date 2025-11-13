import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // TypeScript: ignore build errors (useful during dev)
  typescript: {
    ignoreBuildErrors: true,
  },

  // ✅ Removed deprecated ESLint config
  // ESLint is now handled via the `next lint` command or eslint.config.mjs

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**",
      },
    ],
  },
}

export default nextConfig
