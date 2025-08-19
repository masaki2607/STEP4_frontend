/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Azure App Service用の設定
  output: 'standalone',
  // プロダクション最適化
  poweredByHeader: false,
  generateEtags: false,
  // ビルド時間短縮のため型チェック無効化
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // ハイドレーション問題の解決
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  }
}

module.exports = nextConfig
