/** @type {import('next').NextConfig} */
const nextConfig = {
  // 画像最適化の設定
  images: {
    unoptimized: true, // Cloudflare Pagesでの互換性のため
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },

  // Cloudflare Pages用の設定
  output: 'export', // 静的エクスポートモードを使用

  // 環境変数の設定
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://aruru-dog-mimi.pages.dev',
  },

  // パフォーマンス最適化
  swcMinify: true,

  // Cloudflare Pagesでのルーティング
  trailingSlash: false,
}

export default nextConfig

