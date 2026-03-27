# Vijay Portfolio (Responsive React + 3D Animation)

## Overview

This project is a responsive React portfolio with 
- interactive 3D header powered by `@react-three/fiber` and `@react-three/drei`
- modular sections: About, Projects, Contact
- responsive layout and polished styles
- UI animations and viewport-friendly behavior

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Build production assets:

```bash
npm run build
```

4. Serve production locally for verification:

```bash
npm run preview
```

5. Run tests:

```bash
npm run test
```

## Architecture

- `index.html`: app container
- `src/main.jsx`: bootstraps React
- `src/App.jsx`: top-level page content
- `src/components/Hero3D.jsx`: 3D animated header with rotating geometry
- `src/styles.css`: responsive design and visual themes
- `src/App.test.jsx`: simple render tests

## Features

- `Canvas` with `Stars`, `OrbitControls`, dynamic geometry
- modern fluid typography using `clamp()`
- mobile-first responsive grid
- shadow + glow for futuristic aesthetic

## Customization

1. Replace `projects` array in `src/App.jsx`.
2. Update hero text in `src/components/Hero3D.jsx`.
3. Add more 3D objects by composing `<mesh/>` inside `Hero3D`.

## Test Results (locally)

- `vitest` should execute the simple smoke test. Look for `1 passed`.

## Notes

- `@react-three/drei` includes `Stars`, `OrbitControls` and convenience elements.
- Keep dependency versions aligned with `react` 18 to avoid hooks mismatches.
