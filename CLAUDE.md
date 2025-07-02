# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15.3.4 application using the App Router with Mantine v8.1.2 as the UI library. The project combines Tailwind CSS v4 with Mantine's built-in styles for a hybrid styling approach.

## Commands

```bash
npm run dev      # Start development server with Turbopack
npm run build    # Create production build
npm start        # Run production server
npm run lint     # Run Next.js linting
```

## Architecture

The application follows Next.js App Router conventions:

- `src/app/` - App Router pages and layouts
  - `layout.tsx` - Root layout wrapping the app with MantineProvider and ColorSchemeScript
  - `page.tsx` - Home page
  - `client/` - Demonstrates client-side components with Mantine
  - `server/` - Demonstrates server-side components with Mantine
- `src/components/` - Reusable components
  - `ClientList.tsx` - Client-side component example
  - `MantineSamples.tsx` - Mantine component showcase
  - `MantineServerComponents.tsx` - Server-compatible Mantine components
  - `NotificationsProvider.tsx` - Wraps Mantine's notification system

## Key Technical Details

### Styling System
- Tailwind CSS v4 (latest) for utility classes
- Mantine's CSS for component styles
- CSS custom properties for theming
- Light/dark mode support via ColorSchemeScript

### Mantine Integration
The application uses these Mantine packages:
- `@mantine/core` - Core UI components
- `@mantine/dates` - Date/time components
- `@mantine/form` - Form management
- `@mantine/hooks` - React hooks collection
- `@mantine/notifications` - Toast notifications
- `@tabler/icons-react` - Icon library

### Component Patterns
- Server components: Use Mantine components that don't require client-side JavaScript
- Client components: Use "use client" directive for interactive Mantine features
- The NotificationsProvider must wrap client components that use notifications

### Path Aliases
- `@/*` maps to `./src/*` (configured in tsconfig.json)