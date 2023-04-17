/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['secure.meetupstatic.com', 'images.ctfassets.net'],
  },
  i18n: {
    locales: ['es'],
    defaultLocale: 'es',
  },
};

module.exports = nextConfig;
