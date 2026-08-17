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

## Local development

Local development skips Spotify login by default and uses mock now-playing data so you can work on the pill quickly.

```env
VITE_SPOTIFY_DEV_AUTH=false
```

To test the real Spotify OAuth flow locally, set:

```env
VITE_SPOTIFY_DEV_AUTH=true
```

## Default

If the env var is missing, the app defaults to:

```env
VITE_SPOTIFY_AUTH_MODE=public
```
