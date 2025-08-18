/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Azure App Service用の設定
  output: 'standalone',
  // プロダクション最適化
  poweredByHeader: false,
  generateEtags: false,
  // 開発・プロダクション環境の統一化
  experimental: {
    optimizeCss: true,
  },
  // ハイドレーション問題の解決
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  }
}

module.exports = nextConfig
