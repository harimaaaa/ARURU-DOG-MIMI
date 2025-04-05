// YouTube IFrame API の型定義
declare var YT: {
  Player: new (
    element: HTMLElement | string,
    options: {
      videoId: string
      playerVars?: {
        autoplay?: 0 | 1
        controls?: 0 | 1
        disablekb?: 0 | 1
        fs?: 0 | 1
        iv_load_policy?: 1 | 3
        modestbranding?: 0 | 1
        playsinline?: 0 | 1
        rel?: 0 | 1
        showinfo?: 0 | 1
        start?: number
        mute?: 0 | 1
        loop?: 0 | 1
        playlist?: string
      }
      events?: {
        onReady?: (event: { target: YT.Player }) => void
        onStateChange?: (event: { data: number; target: YT.Player }) => void
        onError?: (event: { data: number }) => void
      }
    },
  ) => YT.Player
  PlayerState: {
    UNSTARTED: number
    ENDED: number
    PLAYING: number
    PAUSED: number
    BUFFERING: number
    CUED: number
  }
  Player: any
}

interface Window {
  YT?: YT
  onYouTubeIframeAPIReady?: () => void
}

