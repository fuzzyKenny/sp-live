# Spotify Live Pill

A sleek, animated pill component that shows what you're listening to on Spotify — right now.

## The Experience

Hover over the pill and watch it come alive:

- **Spins** the Spotify icon continuously
- **Expands** to reveal your track name and artist, stacked beautifully
- **Slides in** the text with a staggered fade animation
- **Scrolls** long song names with a smooth marquee effect
- **Stays open** for a few seconds after you move away, then gracefully collapses

## Dark & Light Modes

The pill adapts to your theme:

- **Dark mode** — Spotify green background with white text
- **Light mode** — Spotify dark background with green text

## Usage

```tsx
import { SpotifyPill } from "@/components/spotify-pill"

<SpotifyPill
  trackName="Bohemian Rhapsody"
  artistName="Queen"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `trackName` | `string` | required | The song title |
| `artistName` | `string` | required | The artist name |
| `artistSize` | `"xs" \| "sm" \| "base"` | `"xs"` | Artist text size |
| `maxWidth` | `number` | `180` | Max width for the text area before marquee scroll |

## Built With

- [React 19](https://react.dev)
- [Motion (Framer Motion)](https://motion.dev)
- [Tailwind CSS 4](https://tailwindcss.com)
- [Lucide Icons](https://lucide.dev)
- [react-icons](https://react-icons.github.io/react-icons)
- [shadcn/ui](https://ui.shadcn.com)
