const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  images: {
    domains: [
      'localhost',
      'elysia.land',
      'elysia-public.s3.ap-northeast-2.amazonaws.com',
      'ipfs.io',
    ],
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  async rewrites() {
    return [
      {
        destination: 'https://forum.elyfi.world/:path*',
        source: '/proxy/:path*',
      },
    ];
  },
};

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// });

// module.exports = withBundleAnalyzer({
//   nextConfig: nextConfig,
//   reactStrictMode: true,
// });

module.exports = nextConfig;
