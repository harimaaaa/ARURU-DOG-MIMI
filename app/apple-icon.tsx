import { ImageResponse } from "next/og"

// Route segment config
export const runtime = "edge"

// Image metadata
export const size = {
  width: 180,
  height: 180,
}
export const contentType = "image/png"

// Image generation
export default function Icon() {
  return new ImageResponse(
    // ImageResponseのコンテンツは空にして、既存のロゴ画像を使用
    <></>,
    // ImageResponseのオプション
    {
      ...size,
    },
  )
}

