<div align="center">
<!-- Banner de título com estilo -->
<h1>
  <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Briefcase.png" width="35" alt="briefcase" />
  DevJobs UI
</h1>
<p><strong>A modern developer job board — built from scratch with Next.js 14, TypeScript & Tailwind CSS</strong></p>
<!-- Badges de tech stack -->
<p>
  <a href="https://nextjs.org/" target="_blank">
    <img src="https://img.shields.io/badge/Next.js_14-000000?style=flat-square&logo=next.js&logoColor=white" alt="Next.js" />
  </a>
  <a href="https://www.typescriptlang.org/" target="_blank">
    <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  </a>
  <a href="https://tailwindcss.com/" target="_blank">
    <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  </a>
  <a href="https://vercel.com/" target="_blank">
    <img src="https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white" alt="Vercel" />
  </a>
</p>
<!-- Links principais -->
<p>
  <a href="https://SEU-LINK-VERCEL.vercel.app" target="_blank"><b>🚀 Live Demo</b></a>
  &nbsp;&nbsp;•&nbsp;&nbsp;
  <a href="https://github.com/gabedossa/devjobs_ui" target="_blank"><b>📁 Repository</b></a>
  &nbsp;&nbsp;•&nbsp;&nbsp;
  <a href="https://www.linkedin.com/in/gabrieldossa/" target="_blank"><b>💼 LinkedIn</b></a>
</p>
<br/>
<!-- Preview / Screenshot -->
<img src="./public/preview.png" alt="DevJobs UI Preview" width="850" style="border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.15);" />
<p><em>Homepage with job listings, advanced search and real-time filters</em></p>
</div>
✨ What It Does
DevJobs UI is a fully functional job board for developers. It lets users browse, search and filter job openings by title, company, location and contract type — all with a clean, responsive interface.
Built as a portfolio piece to demonstrate modern front-end architecture, component design and performance optimization.
🖼️ Features
Table
Feature	Description
🔍 Smart Search & Filter	Search by job title, company, location or contract type with instant results
🌙 Dark / Light Mode	Seamless theme toggle with system preference detection
📱 Fully Responsive	Mobile-first design that looks great on any screen size
⚡ Next.js 14 App Router	Server Components, streaming and fast client-side navigation
🎨 Tailwind CSS	Utility-first styling with custom design tokens and consistent spacing
🔒 100% Type-Safe	Full TypeScript coverage — zero any types
🔄 Dynamic Routing	Clean URLs for individual job detail pages (/job/[id])
🖼️ Image Optimization	Next.js <Image /> component for automatic resizing and lazy loading
🛠 Tech Stack
plain
┌─────────────────────────────────────────────────────────┐
│  Next.js 14  │  TypeScript  │  Tailwind CSS  │  Vercel  │
└─────────────────────────────────────────────────────────┘
Framework: Next.js 14 (App Router)
Language: TypeScript
Styling: Tailwind CSS
Font: Inter (via next/font)
Deployment: Vercel
🚀 Quick Start
bash
# 1. Clone
$ git clone https://github.com/gabedossa/devjobs_ui.git

# 2. Navigate
$ cd devjobs_ui

# 3. Install
$ npm install

# 4. Run
$ npm run dev

# → Open http://localhost:3000
Prerequisites: Node.js 18+ and npm/yarn/pnpm
📁 Architecture
plain
devjobs_ui/
│
├── 📂 app/                          # Next.js App Router
│   ├── 📄 page.tsx                  # Homepage — job listings grid
│   ├── 📄 layout.tsx                # Root layout + theme provider
│   └── 📂 [id]/                     # Dynamic job detail pages
│
├── 📂 components/                   # Reusable UI components
│   ├── 📄 JobCard.tsx               # Individual job listing card
│   ├── 📄 SearchBar.tsx             # Search input with debounce
│   └── 📄 FilterPanel.tsx           # Filter sidebar / drawer
│
├── 📂 data/                         # Static data layer
│   └── 📄 jobs.json                 # Job listings dataset
│
├── 📂 types/                        # TypeScript definitions
│   └── 📄 job.ts                    # Job interface
│
├── 📂 public/                       # Static assets
│   └── 📄 preview.png               # Project screenshot
│
├── 📄 tailwind.config.ts            # Tailwind customization
└── 📄 next.config.js                # Next.js configuration
🧪 Available Scripts
Table
Command	What it does
npm run dev	Starts the dev server with hot reload
npm run build	Creates an optimized production build
npm run start	Serves the production build
npm run lint	Runs ESLint across the codebase
🎯 Key Takeaways
This project was built to sharpen specific skills:
Dynamic routing with Next.js 14 App Router — handling [id] segments and data fetching
Component architecture — designing reusable, typed React components with clear prop interfaces
Responsive design — mobile-first approach with Tailwind's breakpoint system
State management — coordinating search, filters and theme across the component tree
Performance — leveraging Next.js Image, font optimization and code splitting
🌐 Live Deployment
Deployed on Vercel with automatic CI/CD on every push to main.
<p align="center">
  <a href="https://SEU-LINK-VERCEL.vercel.app" target="_blank">
    <img src="https://img.shields.io/badge/▶_View_Live_Demo-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="View Live Demo" />
  </a>
</p>
📫 Let's Connect
<p>
  <a href="https://www.linkedin.com/in/gabrieldossa/" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
  &nbsp;
  <a href="https://www.behance.net/gabrielvin73ec" target="_blank">
    <img src="https://img.shields.io/badge/Behance-1769FF?style=for-the-badge&logo=behance&logoColor=white" alt="Behance" />
  </a>
  &nbsp;
  <a href="mailto:gabrielvinces2@gmail.com" target="_blank">
    <img src="https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
  </a>
</p>
Built by Gabriel Vitor — Full-Stack Developer & UI Designer
<div align="center">
<p><em>Found this project useful? Give it a ⭐ — it helps a lot!</em></p>
<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Waving%20Hand.png" width="35" alt="wave" />
