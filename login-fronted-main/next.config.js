/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  // Azure App Service用の設定
  output: 'standalone',
  // 環境変数の設定
  env: {
    NODE_ENV: process.env.NODE_ENV || 'production',
  },
  // プロダクション最適化
  poweredByHeader: false,
  generateEtags: false,
}

module.exports = nextConfig
