# preact-boilerplate

## Description
`preact-boilerplate` is a lightweight and modern starter template designed to help developers quickly build web applications using [Preact](https://preactjs.com/) and [Vite](https://vite.dev/). This boilerplate provides an optimized development environment with fast builds, hot module replacement, and production-ready configurations. It also includes support for static site generation (SSG) and code linting to ensure high-quality code.

Whether you're building a small project or a large-scale application, this boilerplate offers a solid foundation to get you started with minimal setup.

## Features
- Preact: A fast and lightweight alternative to React with the same modern API.
- Vite: A blazing-fast build tool for modern web projects.
- Static Site Generation: Prerenders all routes into static HTML for better performance and SEO.
- Development Server: Instant feedback with hot module replacement during development.
- Production Build: Optimized builds ready for deployment.
- Linting: Integrated code quality checks using [Biome](https://biomejs.dev/).

## Getting Started

- `npm run dev` - Starts a dev server at http://localhost:5173/
- `npm run build` - Builds for production, emitting to `dist/`. Prerenders all found routes in app to static HTML
- `npm run preview` - Starts a server at http://localhost:4173/ to test production build locally
- `npm run lint` - Runs the `biome check --write .` command, which performs linting on the codebase.

This boilerplate is perfect for developers who want a fast, efficient, and scalable setup for their Preact projects. Happy coding! 🎉
