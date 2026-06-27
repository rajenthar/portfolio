# Portfolio Website

A modern, interactive portfolio showcasing professional experience, projects, and technical skills with Canvas animations.

## Tech Stack

- **Framework:** Next.js 16 (React 19, TypeScript)
- **Styling:** Tailwind CSS 4
- **Animations:** Canvas (nebula, shooting stars, particle network)
- **Deployment:** Vercel

## Features

- Dark theme with custom design tokens
- 3-layer Canvas background animations
- Responsive design (mobile & desktop)
- Experience timeline with detailed achievements
- 46+ technical skills showcase
- Project portfolio grid (dynamic project count)
- Resume download (navbar + contact section)
- Smooth scroll navigation

## Project Structure

```
app/                      # Next.js app directory
├── layout.tsx           # Root layout with Canvas background
├── page.tsx             # Main page (imports components)
└── globals.css          # Design tokens & Tailwind

components/             # React components
├── Navigation.tsx       # Fixed header, scroll effect
├── Hero.tsx            # Landing section with stats
├── About.tsx           # Bio & skills
├── Experience.tsx      # Work timeline (9+ points per role)
├── Projects.tsx        # Project grid
├── Contact.tsx         # Contact links & resume download
├── Footer.tsx          # Copyright
└── CanvasBackground.tsx # 3D animations

lib/
├── data.ts             # Experience, projects, skills data
└── types.ts            # TypeScript interfaces

public/resume/          # Resume PDF storage
```

## Quick Start

```bash
# Install
npm install

# Dev server (http://localhost:3000)
npm run dev

# Production build
npm run build
npm run start
```

## Setup

1. Add resume PDF: `public/resume/RAJENTHAR_JEGANATHAN_RESUME.pdf`
2. Edit content in `lib/data.ts`

## Deployment

```bash
git push -u origin develop
# Create PR to master on GitHub
# Deploy master to Vercel
```
