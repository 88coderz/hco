/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  // Disable image optimization during development
  images: {
    unoptimized: process.env.NODE_ENV === 'development',
  },
};

export default nextConfig;
