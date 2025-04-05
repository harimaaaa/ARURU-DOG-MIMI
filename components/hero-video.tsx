"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"

interface HeroVideoProps {
  videoSrc: string
  posterSrc: string
  altText: string
  showControls?: boolean
}

export default function HeroVideo({ videoSrc, posterSrc, altText, showControls = false }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)
    const handleLoadedData = () => setVideoLoaded(true)
    const handleError = () => setVideoError(true)

    video.addEventListener("play", handlePlay)
    video.addEventListener("pause", handlePause)
    video.addEventListener("loadeddata", handleLoadedData)
    video.addEventListener("error", handleError)

    // 自動再生を試みる
    video.play().catch((error) => {
      console.log("自動再生できませんでした:", error)
    })

    return () => {
      video.removeEventListener("play", handlePlay)
      video.removeEventListener("pause", handlePause)
      video.removeEventListener("loadeddata", handleLoadedData)
      video.removeEventListener("error", handleError)
    }
  }, [])

  const togglePlay = () => {
    if (!videoRef.current) return

    if (isPlaying) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }
  }

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* 動画が読み込まれていない場合や、エラーが発生した場合のフォールバック */}
      {(!videoLoaded || videoError) && (
        <Image src={posterSrc || "/placeholder.svg"} alt={altText} fill className="object-cover" priority />
      )}

      {/* 動画要素 */}
      {!videoError && (
        <video
          ref={videoRef}
          className={`absolute w-full h-full object-cover ${videoLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}
          autoPlay
          muted
          loop
          playsInline
          poster={posterSrc}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}

      {/* オーバーレイ */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* 再生/一時停止ボタン（オプション） */}
      {showControls && videoLoaded && !videoError && (
        <button
          onClick={togglePlay}
          className="absolute bottom-4 right-4 bg-white/30 hover:bg-white/50 rounded-full p-3 transition-colors z-10"
          aria-label={isPlaying ? "一時停止" : "再生"}
        >
          {isPlaying ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="6" y="4" width="4" height="16"></rect>
              <rect x="14" y="4" width="4" height="16"></rect>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          )}
        </button>
      )}
    </div>
  )
}

