const withPWA = require("@ducanh2912/next-pwa").default({
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  dest: "public",
  fallbacks: {
    document: "/offline",
  },
  workboxOptions: {
    disableDevLogs: true,
  },
  disable: process.env.NODE_ENV === 'development',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: false,
  },
  // Ensure trailing slashes are handled correctly
  trailingSlash: true,
  // Disable server components for static export
  experimental: {
    appDir: true,
  },
  // Add basePath if deploying to a subdirectory
  // basePath: '/your-repo-name',
};

module.exports = withPWA(nextConfig);