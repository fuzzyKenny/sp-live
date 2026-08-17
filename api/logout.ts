import type { VercelRequest, VercelResponse } from "@vercel/node"

function clearCookie(name: string) {
  const secure = process.env.NODE_ENV === "production" ? "; Secure" : ""

  return `${name}=; Path=/; Max-Age=0; HttpOnly${secure}; SameSite=Lax`
}

export default function handler(_req: VercelRequest, res: VercelResponse) {
  res.setHeader("Set-Cookie", [
    clearCookie("spotify_access_token"),
    clearCookie("spotify_refresh_token"),
  ])

  return res.redirect("/")
}
