/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'], // Only use supported formats
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048], // Optimize image sizes
    minimumCacheTTL: 60 * 60 * 24, // Cache images for 24 hours
    unoptimized: true, // Disable image optimization to resolve deployment issues
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production', // Remove console logs in production
  },
  experimental: {
    optimizeCss: true, // Optimize CSS
    scrollRestoration: true, // Restore scroll position on navigation
  },
};

export default nextConfig; 