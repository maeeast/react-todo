# React Todo

A simple todo list app built with React and Vite.

Live site: https://maeeast.github.io/react-todo/

## Features

- Add and delete todos
- Persists todos in your browser using `localStorage`
- Fast local dev server and builds via Vite

## Tech Stack

- React
- Vite
- GitHub Pages (deployment)

## Getting Started

### Requirements

- Node.js 20.19+ (or 22.12+) recommended for Vite 7

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Vite will print the local URL (often something like `http://localhost:5173/react-todo/`).

### Build for production

```bash
npm run build
```

The production build outputs to `dist/`.

### Preview the production build locally

```bash
npm run preview
```

## Deployment (GitHub Pages)

This repo deploys the `dist/` folder to GitHub Pages using GitHub Actions.

Key details:

- `vite.config.js` sets `base: "/react-todo/"` for repo pages
- GitHub Pages should be set to **Source: GitHub Actions**

If you fork this repo, update the `base` path in `vite.config.js` to match your repo name.

## Notes

- Todos are stored in `localStorage`, so they are specific to the browser/device you use.
- Clearing site data in your browser will remove the saved todos.
