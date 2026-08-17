# Spotify auth modes

Use `VITE_SPOTIFY_AUTH_MODE` to control who can log in with Spotify.

## Public mode

Use this for a demo/standard website where anyone can authenticate and try the component with their own Spotify account.

```env
VITE_SPOTIFY_AUTH_MODE=public
```

Behavior:

- Shows the Login to Spotify button.
- `/api/login` starts the Spotify OAuth flow.
- Logout is shown after authentication.

## Private mode

Use this for a portfolio/personal website where visitors should not be allowed to authenticate.

```env
VITE_SPOTIFY_AUTH_MODE=private
```

Behavior:

- Hides the Login to Spotify button.
- Blocks direct `/api/login` access with `403`.
- Logout can still appear if the current browser already has Spotify auth cookies.

## Default

If the env var is missing, the app defaults to:

```env
VITE_SPOTIFY_AUTH_MODE=public
```
