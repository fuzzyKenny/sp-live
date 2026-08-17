import type { VercelRequest, VercelResponse } from "@vercel/node"

import { parseCookies, refreshAccessToken, setSpotifyCookies } from "./_spotify"

const NOW_PLAYING_URL = "https://api.spotify.com/v1/me/player/currently-playing"

async function fetchNowPlaying(accessToken: string) {
  return fetch(NOW_PLAYING_URL, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
}

async function sendNowPlayingResponse(response: Response, res: VercelResponse) {
  if (response.status === 204) {
    return res.json({ is_playing: false })
  }

  if (!response.ok) {
    return res.status(response.status).json({ error: "Spotify request failed" })
  }

  const data = await response.json()
  return res.json(data)
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const cookies = parseCookies(req.headers.cookie)
  const refreshToken = cookies.spotify_refresh_token
  let accessToken = cookies.spotify_access_token

  if (!accessToken && !refreshToken) {
    return res.status(401).json({ error: "Not authenticated" })
  }

  try {
    if (!accessToken && refreshToken) {
      const token = await refreshAccessToken(refreshToken)
      accessToken = token.access_token
      setSpotifyCookies(res, token)
    }

    const response = await fetchNowPlaying(accessToken!)

    if (response.status !== 401 || !refreshToken) {
      return sendNowPlayingResponse(response, res)
    }

    const token = await refreshAccessToken(refreshToken)
    setSpotifyCookies(res, token)

    return sendNowPlayingResponse(
      await fetchNowPlaying(token.access_token),
      res
    )
  } catch {
    return res.status(500).json({ error: "Failed to fetch now playing" })
  }
}
