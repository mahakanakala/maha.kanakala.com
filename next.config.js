/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
  }
};

module.exports = nextConfig
