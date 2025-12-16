/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/:path*.html',
        destination: '/:path*',
      },
      {
        source: '/index.html',
        destination: '/',
      },
      {
        source: '/:path*//:slug*',
        destination: '/:path*/:slug*',
      },
    ];
  },
};

module.exports = nextConfig;
