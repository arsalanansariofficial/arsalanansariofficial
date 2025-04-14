import type { NextConfig } from 'next';

export default {
  output: 'export',
  devIndicators: false,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        pathname: '/arsalanansariofficial/**'
      }
    ]
  }
} as NextConfig;
