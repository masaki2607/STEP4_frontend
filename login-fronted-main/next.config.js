/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  trailingSlash: true,
  generateEtags: false,
  poweredByHeader: false,
  // Azure App Service compatibility
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL || 'https://step4-frontend.azurewebsites.net',
  },
  // Output for Node.js runtime
  experimental: {
    outputFileTracingRoot: process.cwd(),
  },
}

module.exports = nextConfig
