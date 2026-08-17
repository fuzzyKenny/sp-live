import type { VercelRequest, VercelResponse } from "@vercel/node"

import { getSpotifyConfig, SPOTIFY_SCOPES } from "./_spotify.js"

export default function handler(_req: VercelRequest, res: VercelResponse) {
  try {
    const { clientId, redirectUri } = getSpotifyConfig()
    const params = new URLSearchParams({
      client_id: clientId,
      response_type: "code",
      redirect_uri: redirectUri,
      scope: SPOTIFY_SCOPES,
      show_dialog: "true",
    })

    res.redirect(`https://accounts.spotify.com/authorize?${params.toString()}`)
  } catch {
    res.redirect("/?error=missing_spotify_config")
  }
}
