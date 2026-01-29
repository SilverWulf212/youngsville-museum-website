/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'irp.cdn-website.com',
      },
      {
        protocol: 'https',
        hostname: 'lirp.cdn-website.com',
      },
    ],
  },
}

module.exports = nextConfig
