import { Button } from "@/components/ui/button"
import { SiSpotify } from "react-icons/si"
import { SpotifyPill } from "@/components/spotify-pill"
import { useNowPlaying } from "@/hooks/use-now-playing"

export function App() {
  const { data, isLoading } = useNowPlaying()

  const trackName = data?.item?.name ?? ""
  const artistName = data?.item?.artists?.[0]?.name ?? ""
  const isPlaying = data?.is_playing ?? false

  return (
    <div className="flex min-h-svh items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold">Spotify Plugin</h1>

        <a href="/api/login">
          <Button>
            <SiSpotify className="mr-2 h-4 w-4" />
            {isPlaying ? "Playing" : "Login to Spotify"}
          </Button>
        </a>

        {!isLoading && trackName && (
          <SpotifyPill
            trackName={trackName}
            artistName={artistName}
            variant="inline"
          />
        )}

        <div className="mt-4 font-mono text-xs text-muted-foreground">
          (Press <kbd>d</kbd> to toggle dark mode)
        </div>
      </div>
    </div>
  )
}

export default App
