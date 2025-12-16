/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/en/index.html',
          destination: '/en',
        },
        {
          source: '/site/:path*',
          destination: '/:path*',
        },
        {
          source: '/:path*.htm',
          destination: '/:path*',
        },
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
      ],
      fallback: [
        {
          source: '/:path*',
          destination: '/not-found',
        },
      ],
    };
  },
};

module.exports = nextConfig;
