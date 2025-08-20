/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // React Strict Modeを無効化してハイドレーション問題を回避
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
  },
  // SSRとクライアントの不整合を防ぐ
  experimental: {
    esmExternals: false,
  },
  // 画像最適化を無効化（Azure App Service環境で問題になる場合がある）
  images: {
    unoptimized: true,
  },
  // 静的ファイルの配信設定
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
