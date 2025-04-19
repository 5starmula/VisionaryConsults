/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static exporting which works better with Vercel for this use case
  output: 'export',
  
  // Optimize images at build time
  images: {
    unoptimized: true,
    remotePatterns: [],
  },
  
  // Ensure assets are found correctly
  assetPrefix: '/',
  
  // Add trailing slash for consistency
  trailingSlash: true,
};

export default nextConfig;
