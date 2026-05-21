# focus/frontend — Pomodoro Timer with Frog Mascot

Stack: React 19, Vite 8, Tailwind CSS v4, ESLint 10 (flat config), plain JSX (no TypeScript).

## Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Production build |
| `npm run lint` | ESLint check (all .js/.jsx) |
| `npm run preview` | Preview production build |

No test, typecheck, or codegen scripts exist.

## Project layout

```
frontend/
├── src/
│   ├── main.jsx          # Entrypoint — mounts <App />
│   ├── App.jsx           # Pomodoro logic (state machine: idle/work/paused/break)
│   ├── App.css           # @import "tailwindcss" (Tailwind v4 entry)
│   ├── index.css         # Legacy — fully commented out
│   ├── components/
│   │   ├── background/PondScene.jsx  # Animated pond with frog sprite
│   │   ├── PlayBtn.jsx, ResetBtn.jsx, Timer.jsx, TimeUp.jsx, Sessions.jsx, MusicBtn.jsx
│   ├── utils/
│   │   ├── preloadSprite.jsx  # Frog sprite preloader + image array
│   │   ├── preloadNumbers.jsx, splitNumber.jsx
│   └── assets/           # frog-sprite/, ui/, bg*.png
├── public/
│   └── music/            # Ambient audio (frogSound.mp3, rain.mp3)
└── package.json
```

## Architecture notes

- **State machine**: `App.jsx` manages a `mode` state (`idle` / `work` / `paused` / `break`) that drives countdown timer, sprite animation, and session tracking.
- **Sessions**: Work session accumulation tracks elapsed seconds via `sessionStartRef` / `Date.now()`, not the countdown timer.
- **Sprites**: 10 frog images in `src/assets/frog-sprite/` are imported statically and preloaded via `new Image()`; sprite index cycles based on mode.
- **Audio**: Sound files are in `public/music/` (served as static assets).
- **Styling**: Tailwind v4 utilities only. The `index.css` was from a previous template and is fully commented out — do not uncomment or use it.

## Tooling quirks

- ESLint uses flat config (`eslint.config.js`), not `.eslintrc`.
- No Prettier config found — formatting defaults to ESLint.
- `dist/` is gitignored.
