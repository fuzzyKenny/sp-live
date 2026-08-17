export const SPOTIFY_AUTH_MODE =
  import.meta.env.VITE_SPOTIFY_AUTH_MODE ?? "public"

export const ALLOW_SPOTIFY_LOGIN = SPOTIFY_AUTH_MODE === "public"
