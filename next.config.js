/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['github.com', 'raw.githubusercontent.com', 'i.ibb.co']
  },
  reactStrictMode: true,
  swcMinify: true,
  experimental: { esmExternals: true },
}

module.exports = nextConfig