/** @type {import('next').NextConfig} */
const nextConfig = {
  // Output static files for Vercel deployment
  output: 'export',
  
  // Images will be handled by webpack during import
  images: {
    unoptimized: true,
    remotePatterns: [],
    disableStaticImages: false,
  },
  
  // Add TypeScript support for image imports
  webpack(config: any) {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/i,
      type: 'asset/resource',
    });
    
    return config;
  },
  
  // Ensure trailing slash for consistent routing
  trailingSlash: true,
};

export default nextConfig;
