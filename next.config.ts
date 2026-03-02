import type { NextConfig } from 'next';

export default {
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        hostname: 'raw.githubusercontent.com',
        pathname: '/arsalanansariofficial/**',
        protocol: 'https'
      }
    ],
    unoptimized: true
  }
} as NextConfig;
