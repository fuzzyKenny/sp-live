# Spotify Pill

A standalone animated Spotify pill component with two variants:

- `inline` — small icon, track and artist on one line, continuous marquee when text overflows.
- `stacked` — normal icon, track and artist stacked, overflow text gently scrolls back and forth.

The component lives at:

```txt
src/components/spotify-pill.tsx
```

## Dependencies

```bash
pnpm add motion react-icons
```

The component uses this project's `cn` helper and shadcn-style `Separator` component:

```ts
import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"
```

It expects Tailwind CSS utility classes to be available.

## Basic usage

```tsx
import { SpotifyPill } from "@/components/spotify-pill"

export function Example() {
  return (
    <SpotifyPill
      trackName="Bohemian Rhapsody"
      artistName="Queen"
      variant="stacked"
    />
  )
}
```

## Variant helpers

```tsx
import {
  SpotifyInlinePill,
  SpotifyStackedPill,
} from "@/components/spotify-pill"

export function Example() {
  return (
    <>
      <SpotifyInlinePill trackName="Night Changes" artistName="One Direction" />
      <SpotifyStackedPill trackName="Bohemian Rhapsody" artistName="Queen" />
    </>
  )
}
```

## Props

```ts
type SpotifyPillProps = {
  trackName: string
  artistName: string
  variant?: "inline" | "stacked"
  artistSize?: "xs" | "sm" | "base"
  maxWidth?: number
}
```

Defaults:

```ts
variant = "stacked"
artistSize = "xs"
maxWidth = 180
```

Notes:

- `artistSize` only affects the `stacked` variant.
- The `inline` variant keeps artist and track text the same size.
- `maxWidth` controls the expanded text area width before overflow animation starts.

## Copying into another project

1. Copy `src/components/spotify-pill.tsx`.
2. Copy the small supporting files if your project does not already have them:
   - `src/lib/utils.ts`
   - `src/components/ui/separator.tsx`
3. Install dependencies:

   ```bash
   pnpm add motion react-icons
   ```

4. Make sure Tailwind CSS is configured.
5. Import and render the component.

If your project does not use the `@` alias, import it relatively:

```tsx
import { SpotifyPill } from "./components/spotify-pill"
```

## Dark mode

The component uses Tailwind's `dark:` variant:

```txt
bg-[#191414] dark:bg-[#1DB954]
text-[#1DB954] dark:text-white
```

If your app does not use class-based dark mode, it will still render correctly in the default dark Spotify-black style.
