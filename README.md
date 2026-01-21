# preact-boilerplate

## Description
`preact-boilerplate` is a lightweight and modern starter template designed to help developers quickly build web applications using [Preact](https://preactjs.com/) and [Vite](https://vite.dev/). This boilerplate provides an optimized development environment with fast builds, hot module replacement, and production-ready configurations. It also includes code linting to ensure high-quality code.

## Features
- Preact: A fast and lightweight alternative to React with the same modern API.
- Vite: A blazing-fast build tool for modern web projects.
- Development Server: Instant feedback with hot module replacement during development.
- Production Build: Optimized builds ready for deployment.
- Linting: Integrated code quality checks using [Biome](https://biomejs.dev/).

## Getting Started

### Development
- `npm run dev` - Starts a dev server at http://localhost:5173/
- `npm run build` - Builds for production, emitting to `dist/`. Pre-renders all found routes in app to static HTML
- `npm run preview` - Starts a server at http://localhost:4173/ to test production build locally

### Testing
- `npm test` - Runs unit tests using Vitest
- `npm run test:ui` - Runs tests with Vitest's interactive UI
- `npm run coverage` - Runs tests and generates a code coverage report
- `npm run coverage:ui` - Runs tests with coverage and opens the HTML report in your browser

### Code Quality
- `npm run lint` - Runs Biome to check and automatically fix code style issues
