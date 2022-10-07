/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['github.com','ibb.co', 'githubusercontent.com'],
    formats: ['image/avif', 'image/webp', 'image/png', 'image/jpeg', 'image/jpg'],
  },
  reactStrictMode: true,
  swcMinify: true,
  // experimental: { esmExternals: true },
}

module.exports = nextConfig