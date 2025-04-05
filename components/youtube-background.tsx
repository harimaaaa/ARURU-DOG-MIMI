"use client"

import { useEffect, useRef, useState } from "react"

interface YouTubeBackgroundProps {
  videoId: string
  startAt?: number
  muted?: boolean
  loop?: boolean
  overlay?: boolean
  overlayOpacity?: number
}

export default function YouTubeBackground({
  videoId,
  startAt = 0,
  muted = true,
  loop = true,
  overlay = true,
  overlayOpacity = 0.3,
}: YouTubeBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isReady, setIsReady] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // モバイルデバイスの検出
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  useEffect(() => {
    // YouTubeのiframeAPIをロード
    if (!window.YT) {
      const tag = document.createElement("script")
      tag.src = "https://www.youtube.com/iframe_api"
      const firstScriptTag = document.getElementsByTagName("script")[0]
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)
    }

    // APIが読み込まれたら動画を初期化
    const onYouTubeIframeAPIReady = () => {
      if (!containerRef.current) return

      const player = new window.YT.Player(containerRef.current, {
        videoId: videoId,
        playerVars: {
          autoplay: 1,
          controls: 0,
          disablekb: 1,
          fs: 0,
          iv_load_policy: 3,
          modestbranding: 1,
          playsinline: 1,
          rel: 0,
          showinfo: 0,
          start: startAt,
          mute: muted ? 1 : 0,
          loop: loop ? 1 : 0,
          playlist: loop ? videoId : undefined,
        },
        events: {
          onReady: (event) => {
            event.target.playVideo()
            setIsReady(true)

            // プレイヤーのサイズを設定
            const iframe = event.target.getIframe()
            if (iframe) {
              iframe.style.position = "absolute"
              iframe.style.top = "50%"
              iframe.style.left = "50%"
              iframe.style.transform = "translate(-50%, -50%)"
              iframe.style.width = "100vw"
              iframe.style.height = "100vh"
              iframe.style.minWidth = "177.77vh" // 16:9 アスペクト比を維持
              iframe.style.minHeight = "56.25vw" // 16:9 アスペクト比を維持
            }
          },
          onStateChange: (event) => {
            // 動画が終了したら、ループが有効な場合は再生
            if (event.data === window.YT.PlayerState.ENDED && loop) {
              event.target.playVideo()
            }
          },
        },
      })
    }

    // YouTubeのAPIが既に読み込まれている場合
    if (window.YT && window.YT.Player) {
      onYouTubeIframeAPIReady()
    } else {
      // APIがまだ読み込まれていない場合、グローバル関数として定義
      window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady
    }

    return () => {
      // クリーンアップ
      window.onYouTubeIframeAPIReady = null
    }
  }, [videoId, startAt, muted, loop])

  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      {/* モバイルデバイスでは標準のiframeを使用 */}
      {isMobile ? (
        <div className="absolute inset-0 overflow-hidden">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1&loop=1&playlist=${videoId}&mute=1&start=${startAt}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "100vw",
              height: "100vh",
              minWidth: "177.77vh", // 16:9 アスペクト比を維持
              minHeight: "56.25vw", // 16:9 アスペクト比を維持
              pointerEvents: "none",
            }}
          ></iframe>
        </div>
      ) : (
        <div ref={containerRef} className="absolute inset-0" style={{ pointerEvents: "none" }}></div>
      )}

      {/* オーバーレイ */}
      {overlay && (
        <div className="absolute inset-0 bg-black pointer-events-none" style={{ opacity: overlayOpacity }}></div>
      )}
    </div>
  )
}

