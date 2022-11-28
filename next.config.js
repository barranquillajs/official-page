/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['secure.meetupstatic.com'],
  },
};

module.exports = nextConfig;
