/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'https://studioaikinkarr.framer.website/:path*',
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
