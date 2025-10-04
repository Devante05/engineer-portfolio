# Portfolio Project - Copilot Instructions

This is a modern portfolio website built with React 18, TypeScript, Vite, and Tailwind CSS featuring a crypto-inspired design.

## Project Requirements
- [x] React 18 with TypeScript
- [x] Vite as build tool (fast development and production builds)
- [x] Crypto-style modern design
- [x] Fully responsive for mobile devices
- [x] Dummy project data for easy editing
- [x] Professional portfolio sections

## Project Structure
- [x] React application with Vite
- [x] Custom crypto-themed Tailwind configuration
- [x] Responsive component architecture
- [x] Professional portfolio sections (Hero, About, Projects, Skills, Contact)

## Technology Stack
- **Frontend**: React 18, TypeScript
- **Build Tool**: Vite 6 (replaces Next.js for faster development)
- **Styling**: Tailwind CSS with custom crypto theme
- **Development**: Hot Module Replacement (HMR) with Vite
- **Production**: Optimized builds with tree shaking and code splitting

## Customization Guide
- [x] Projects data in `/src/components/Projects.tsx`
- [x] Skills data in `/src/components/Skills.tsx`
- [x] Personal info in `/src/components/About.tsx` and `/src/components/Contact.tsx`
- [x] Crypto-style colors and animations in `tailwind.config.js` and `src/index.css`

## Important Notes
- **Requires Node.js 24.9.0+ and npm 11.6.0+** (upgraded from Next.js requirements)
- All components are fully responsive
- Uses custom crypto-style design system
- Ready for deployment to Vercel, Netlify, or similar platforms
- Converted from Next.js to React + Vite for better performance and simpler setup

## Development Commands
- `npm run dev` - Start Vite development server (http://localhost:3000)
- `npm run build` - Build for production (requires Node 24+)
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Migration Notes
- Converted from Next.js 14 to React 18 + Vite 6
- Removed Next.js specific features (App Router, Image component, etc.)
- Updated all components to standard React (removed 'use client' directives)
- Modernized build tools and dependencies for Node.js 24.9.0
- Improved development experience with Vite's fast HMR