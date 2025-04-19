/** @type {import('next').NextConfig} */
const nextConfig = {
  // Let Vercel handle the deployment method
  // Removed output config to use Vercel's default
  
  // Add image configuration
  images: {
    domains: [],
    unoptimized: true,
  },
};

export default nextConfig;
