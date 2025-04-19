/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use a simple static export for Vercel deployment
  output: 'export',
  
  // Use unoptimized images for maximum compatibility
  images: {
    unoptimized: true,
  },
  
  // No need for webpack config - removing to avoid conflicts
  
  // Set base path for asset references
  basePath: '',
  
  // Use trailing slash for consistent routing
  trailingSlash: true,
};

export default nextConfig;
