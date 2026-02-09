/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, s-maxage=60, stale-while-revalidate=60',
          },
        ],
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'https://karrtesian.framer.website/:path*',
      },
    ]
  },
  // Allow images from Framer CDN
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'framerusercontent.com',
      },
    ],
  },
}

export default nextConfig
