# Agent Guidelines for playwright-mcp

## Build/Lint/Test Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production (runs TypeScript compiler then Vite build)  
- `npm run lint` - Run ESLint on all files
- `npm run preview` - Preview production build
- No test command configured - this is a Vite + React starter project

## Code Style Guidelines
- **Language**: TypeScript with strict mode enabled
- **Framework**: React 19 with functional components and hooks
- **Imports**: Use ES modules, import React hooks from 'react'
- **Formatting**: Follow ESLint config with typescript-eslint, react-hooks, and react-refresh plugins
- **File extensions**: Use `.tsx` for React components, `.ts` for utilities
- **JSX**: Use `react-jsx` transform (no need to import React in JSX files)
- **Naming**: Use PascalCase for components, camelCase for variables/functions
- **Types**: Leverage TypeScript strict mode, no unused locals/parameters
- **Error handling**: Follow React patterns with error boundaries when needed
- **Exports**: Use default exports for components

## Project Structure
- `src/` - Main application code
- `src/assets/` - Static assets (images, etc.)
- Component files should be in `.tsx` format with default exports