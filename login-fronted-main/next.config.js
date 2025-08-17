/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  // Azure App Service用の設定
  output: 'standalone',
  // プロダクション最適化
  poweredByHeader: false,
  generateEtags: false,
}

module.exports = nextConfig
