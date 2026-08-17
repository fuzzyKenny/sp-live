import { useEffect, useState, useRef } from "react"

interface Track {
  name: string
  artists: { name: string }[]
  album: {
    name: string
    images: { url: string; width: number; height: number }[]
  }
  external_urls: {
    spotify: string
  }
}

interface NowPlayingResponse {
  is_playing: boolean
  item?: Track
  progress_ms?: number
  error?: string
}

async function fetchNowPlayingData(): Promise<NowPlayingResponse | null> {
  try {
    const response = await fetch("/api/now-playing")

    if (response.status === 401) {
      return { is_playing: false, error: "Not authenticated" }
    }

    return await response.json()
  } catch {
    return { is_playing: false, error: "Failed to fetch" }
  }
}

export function useNowPlaying(pollInterval = 10000) {
  const [data, setData] = useState<NowPlayingResponse | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const isInitialMount = useRef(true)

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
      fetchNowPlayingData().then((result) => {
        setData(result)
        setIsLoading(false)
      })
    }

    const interval = setInterval(async () => {
      const result = await fetchNowPlayingData()
      setData(result)
    }, pollInterval)

    return () => clearInterval(interval)
  }, [pollInterval])

  return { data, isLoading, refetch: () => fetchNowPlayingData().then(setData) }
}
