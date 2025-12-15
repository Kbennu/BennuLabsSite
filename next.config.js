/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*/index.html',
        destination: '/:path*',
        permanent: true
      },
      {
        source: '/en/pricing.html',
        destination: '/en/pricing',
        permanent: true
      },
      {
        source: '/:path*.html',
        destination: '/:path*',
        permanent: true
      }
    ];
  }
};

module.exports = nextConfig;
