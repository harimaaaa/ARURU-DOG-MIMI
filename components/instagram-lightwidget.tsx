"use client"

import { useEffect } from "react"
import { Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function InstagramLightWidget() {
  // LightWidgetスクリプトを読み込む
  useEffect(() => {
    // 既存のスクリプトがあれば削除
    const existingScript = document.getElementById("lightwidget-script")
    if (existingScript) {
      existingScript.remove()
    }

    // 新しいスクリプトを追加
    const script = document.createElement("script")
    script.id = "lightwidget-script"
    script.src = "https://cdn.lightwidget.com/widgets/lightwidget.js"
    script.async = true
    script.defer = true
    document.body.appendChild(script)

    // クリーンアップ関数
    return () => {
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [])

  return (
    <section className="py-16 bg-cream-light" id="instagram-feed" aria-labelledby="instagram-heading">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-10">
          <div className="flex items-center gap-2 mb-2">
            <Instagram className="h-6 w-6 text-teal-dark" aria-hidden="true" />
            <h2 id="instagram-heading" className="text-3xl font-medium text-teal-dark">
              Instagram
            </h2>
          </div>
          <p className="text-teal-dark/80 text-center max-w-2xl mb-8">
            ARURU DOG MIMIの日常やお客様のビフォーアフターなど、インスタグラムでも情報発信中です。
            ぜひフォローしてください！
          </p>
        </div>

        <div className="flex justify-center mb-10">
          {/* ユーザーが提供したLightWidgetのiframeコードを使用 */}
          <iframe
            src="//lightwidget.com/widgets/9e56c9b3a5f050119577064375fc2942.html"
            scrolling="no"
            allowtransparency="true"
            className="lightwidget-widget"
            style={{
              width: "100%",
              border: 0,
              overflow: "hidden",
              maxWidth: "1080px",
            }}
            title="ARURU DOG MIMI Instagramフィード"
            aria-label="ARURU DOG MIMI Instagramフィード"
            loading="lazy"
          ></iframe>
        </div>

        <div className="flex justify-center mt-8">
          <Button asChild variant="outline" className="border-teal text-teal hover:bg-teal/5">
            <Link
              href="https://www.instagram.com/aruru_dog_mimi/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
              aria-label="Instagramでフォローする"
            >
              <Instagram className="h-5 w-5" aria-hidden="true" />
              <span>@aruru_dog_mimi をフォロー</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

