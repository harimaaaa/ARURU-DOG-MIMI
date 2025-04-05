"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

// Instagramの投稿データの型定義
interface InstagramPost {
  id: string
  media_url: string
  permalink: string
  caption?: string
  timestamp: string
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM"
  thumbnail_url?: string
}

export default function InstagramFeed() {
  const [posts, setPosts] = useState<InstagramPost[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        setIsLoading(true)
        const response = await fetch("/api/instagram")

        if (!response.ok) {
          throw new Error("APIからのレスポンスが正常ではありません")
        }

        const result = await response.json()

        if (result.success) {
          setPosts(result.data)
        } else {
          setError(result.error || "データの取得に失敗しました")
        }
      } catch (err) {
        console.error("Instagram投稿の取得エラー:", err)
        setError("Instagram投稿の読み込み中にエラーが発生しました")
      } finally {
        setIsLoading(false)
      }
    }

    fetchInstagramPosts()
  }, [])

  // キャプションを短く整形する関数
  const formatCaption = (caption?: string) => {
    if (!caption) return ""
    // ハッシュタグと改行を処理
    return caption.split("\n")[0].substring(0, 100) + (caption.length > 100 ? "..." : "")
  }

  // 投稿日時を「〜日前」の形式に変換
  const formatTimestamp = (timestamp: string) => {
    const postDate = new Date(timestamp)
    const now = new Date()
    const diffTime = Math.abs(now.getTime() - postDate.getTime())
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays === 0) {
      return "今日"
    } else if (diffDays === 1) {
      return "昨日"
    } else if (diffDays < 7) {
      return `${diffDays}日前`
    } else if (diffDays < 30) {
      return `${Math.floor(diffDays / 7)}週間前`
    } else {
      return `${Math.floor(diffDays / 30)}ヶ月前`
    }
  }

  return (
    <div className="py-16 bg-cream-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-10">
          <div className="flex items-center gap-2 mb-2">
            <Instagram className="h-6 w-6 text-teal-dark" />
            <h2 className="text-3xl font-medium text-teal-dark">Instagram</h2>
          </div>
          <p className="text-teal-dark/80 text-center max-w-2xl">
            ARURU DOG MIMIの日常やお客様のビフォーアフターなど、インスタグラムでも情報発信中です。
            ぜひフォローしてください！
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-10">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal"></div>
          </div>
        ) : error ? (
          <div className="text-center py-10">
            <p className="text-red-500">{error}</p>
            <p className="text-teal-dark/70 mt-2">しばらくしてからもう一度お試しください。</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {posts.map((post) => (
                <Link
                  href={post.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={post.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-square relative">
                    <Image
                      src={post.media_url || post.thumbnail_url || "/placeholder.svg"}
                      alt={post.caption || "Instagram post"}
                      fill
                      className="object-cover"
                    />
                    {post.media_type === "VIDEO" && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                        <div className="w-12 h-12 rounded-full bg-white/30 flex items-center justify-center">
                          <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                        </div>
                      </div>
                    )}
                    {post.media_type === "CAROUSEL_ALBUM" && (
                      <div className="absolute top-2 right-2">
                        <div className="bg-white/70 rounded-full p-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                            <circle cx="8.5" cy="8.5" r="1.5"></circle>
                            <polyline points="21 15 16 10 5 21"></polyline>
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-3">
                    <p className="text-xs text-teal-dark/80 line-clamp-2">{formatCaption(post.caption)}</p>
                    <div className="flex justify-end items-center mt-2">
                      <span className="text-xs text-teal-dark/60">{formatTimestamp(post.timestamp)}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <Button asChild variant="outline" className="border-teal text-teal hover:bg-teal/5">
                <Link
                  href="https://www.instagram.com/aruru_dog_mimi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Instagram className="h-5 w-5" />
                  <span>@aruru_dog_mimi をフォロー</span>
                </Link>
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

