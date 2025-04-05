/** @type {import('next').NextConfig} */
const nextConfig = {
  // 画像最適化の設定
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Cloudflare Pagesでの画像最適化
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  
  // Cloudflare Pages用の設定
  output: 'standalone',
  
  // 実験的機能を無効化
  experimental: {
    // Cloudflare Pagesとの互換性のために一部の実験的機能を無効化
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
  
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

