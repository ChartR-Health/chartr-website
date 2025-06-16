/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'chartrhealth.com'],
    unoptimized: true
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
}

module.exports = nextConfig 