# Apartment Navigation

Apartment Navigation is a browser-based wayfinding tool for an apartment complex. Select a starting point and destination to see the shortest route across the building map. Routes are calculated with the A* pathfinding algorithm and displayed interactively on the map.

## Features

- Select source and destination locations from the navigation panel.
- Calculate the shortest available route with A* pathfinding.
- Display the selected route, endpoints, and map details in a responsive layout.
- Run locally with Vite's development server and hot module replacement.

## Requirements

- Node.js 18 or later
- npm

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run build` | Create a production build in `dist`. |
| `npm run preview` | Preview the production build locally. |
| `npm run lint` | Run ESLint across the project. |

## Project Structure

- `src/App.jsx` - Application layout and route state.
- `src/components/Map.jsx` - Interactive map and route rendering.
- `src/components/Sidebar.jsx` - Source and destination controls.
- `src/lib/pathfinding.js` - Map graph and A* route calculation.

## Tech Stack

- React
- Vite
- Tailwind CSS
- Lucide React
