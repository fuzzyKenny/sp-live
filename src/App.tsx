import { Button } from "@/components/ui/button"
import { SiSpotify } from "react-icons/si"
import { SpotifyPill } from "@/components/spotify-pill"

export function App() {
  return (
    <div className="flex min-h-svh items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold">Spotify Plugin</h1>
        <Button>
          <SiSpotify className="mr-2 h-4 w-4" />
          Spotify
        </Button>

        <SpotifyPill
          trackName="Bohemian Rhapsody"
          artistName="Queen"
          variant="inline"
        />

        <div className="mt-4 font-mono text-xs text-muted-foreground">
          (Press <kbd>d</kbd> to toggle dark mode)
        </div>
      </div>
    </div>
  )
}

export default App
