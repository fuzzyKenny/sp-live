import { Button } from "@/components/ui/button"
import { SiSpotify } from "react-icons/si"
import { SpotifyPill } from "@/components/spotify-pill"
import { useNowPlaying } from "@/hooks/use-now-playing"
import { ALLOW_SPOTIFY_LOGIN } from "@/config/spotify"

export function App() {
  const { data, isLoading } = useNowPlaying()

  const trackName = data?.item?.name ?? ""
  const artistName = data?.item?.artists?.[0]?.name ?? ""
  const isPlaying = data?.is_playing ?? false
  const isAuthenticated = data?.error !== "Not authenticated"
  const showAuthActions = ALLOW_SPOTIFY_LOGIN || isAuthenticated

  return (
    <div className="flex min-h-svh items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold">Spotify Plugin</h1>

        {showAuthActions && (
          <div className="flex items-center gap-2">
            {ALLOW_SPOTIFY_LOGIN && (
              <a href="/api/login">
                <Button>
                  <SiSpotify className="mr-2 h-4 w-4" />
                  {isPlaying ? "Playing" : "Login to Spotify"}
                </Button>
              </a>
            )}

            {isAuthenticated && (
              <a href="/api/logout">
                <Button variant="outline">Logout</Button>
              </a>
            )}
          </div>
        )}

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
