import { useState } from "react"
import { SiSpotify } from "react-icons/si"

import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { useTheme } from "@/components/theme-provider"
import { SpotifyPill, type SpotifyPillVariant } from "@/components/spotify-pill"
import { useNowPlaying } from "@/hooks/use-now-playing"
import { ALLOW_SPOTIFY_LOGIN, USE_MOCK_SPOTIFY_DATA } from "@/config/spotify"

export function App() {
  const [pillVariant, setPillVariant] = useState<SpotifyPillVariant>("inline")
  const { theme, setTheme } = useTheme()
  const { data, isLoading } = useNowPlaying()

  const trackName = data?.item?.name ?? ""
  const artistName = data?.item?.artists?.[0]?.name ?? ""
  const hasTrack = Boolean(trackName)
  const isAuthenticated = Boolean(data && !data.error) && !USE_MOCK_SPOTIFY_DATA
  const showLoginButton = ALLOW_SPOTIFY_LOGIN && !isAuthenticated
  const isStackedPill = pillVariant === "stacked"

  const togglePillVariant = () => {
    setPillVariant(isStackedPill ? "inline" : "stacked")
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <div className="flex min-h-svh items-center justify-center px-4 py-8">
      <div className="flex w-full max-w-sm flex-col items-center gap-4 sm:max-w-md">
        <h1 className="text-2xl font-bold">Spotify Plugin</h1>

        {!isLoading && hasTrack && (
          <>
            <SpotifyPill
              trackName={trackName}
              artistName={artistName}
              variant={pillVariant}
            />

            <label className="flex items-center gap-2 text-sm text-muted-foreground">
              Inline
              <Switch
                checked={isStackedPill}
                aria-label="Toggle Spotify pill layout"
                onClick={togglePillVariant}
              />
              Stacked
            </label>
          </>
        )}

        <div className="flex flex-wrap items-center justify-center gap-2">
          {(showLoginButton || isAuthenticated) && (
            <>
              {showLoginButton && (
                <a href="/api/login">
                  <Button>
                    <SiSpotify className="mr-2 h-4 w-4" />
                    Login to Spotify
                  </Button>
                </a>
              )}

              {isAuthenticated && (
                <a href="/api/logout">
                  <Button variant="outline">Logout</Button>
                </a>
              )}
            </>
          )}

          <Button variant="outline" onClick={toggleTheme}>
            {theme === "dark" ? "Light mode" : "Dark mode"}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default App
