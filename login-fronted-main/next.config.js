/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    outputFileTracingRoot: undefined,
  },
  async serverRuntimeConfig() {
    return {
      port: process.env.PORT || 8080,
    }
  },
}

module.exports = nextConfig
