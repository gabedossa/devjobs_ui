💼 DevJobs UI
A modern developer job board built with Next.js 14, TypeScript & Tailwind CSS
https://nextjs.org/
https://www.typescriptlang.org/
https://tailwindcss.com/
https://vercel.com/
🚀 Live Demo · 📁 Repository
</div>
📸 Preview
<div align="center">
<!-- TODO: Substitua pela screenshot real do seu projeto -->
<img src="./public/preview.png" alt="DevJobs UI Preview" width="800" />
Homepage with job listings, search and filters
</div>
✨ Features
🔍 Search & Filter — Find jobs by title, company, location or contract type
🌙 Dark / Light Mode — Fully responsive theme toggle
📱 Mobile-First — Optimized for all screen sizes
⚡ Next.js 14 App Router — Server Components, streaming and fast navigation
🎨 Tailwind CSS — Utility-first styling with custom design tokens
🔒 Type-Safe — Full TypeScript coverage across the codebase
🔄 Dynamic Routing — Individual job detail pages with clean URLs
🖼️ Optimized Images — Next.js Image component for performance
🛠 Tech Stack
Table
Layer	Technology
Framework	Next.js 14 (App Router)
Language	TypeScript
Styling	Tailwind CSS
Font	Inter (via next/font)
Deployment	Vercel
🚀 Getting Started
Prerequisites
Node.js 18+
npm / yarn / pnpm
Installation
bash
# Clone the repository
git clone https://github.com/gabedossa/devjobs_ui.git

# Navigate to the project
cd devjobs_ui

# Install dependencies
npm install

# Run the development server
npm run dev
Open http://localhost:3000 in your browser.
📁 Project Structure
plain
devjobs_ui/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Homepage (job listings)
│   ├── layout.tsx         # Root layout with providers
│   └── [id]/              # Dynamic job detail routes
├── components/            # Reusable UI components
│   ├── JobCard.tsx
│   ├── SearchBar.tsx
│   └── FilterPanel.tsx
├── data/                  # Static job data (or API layer)
│   └── jobs.json
├── types/                 # TypeScript interfaces
│   └── job.ts
├── public/                # Static assets
├── tailwind.config.ts     # Tailwind customization
└── next.config.js         # Next.js configuration
🧪 Scripts
Table
Command	Description
npm run dev	Start development server
npm run build	Build for production
npm run start	Start production server
npm run lint	Run ESLint
🎯 What I Learned
Building dynamic routes with Next.js 14 App Router
Creating reusable, typed components with TypeScript
Implementing responsive layouts with Tailwind CSS
Managing global state for filters and theme
Optimizing images and fonts for Core Web Vitals
🌐 Deployment
This project is deployed on Vercel.
https://vercel.com/new/clone?repository-url=https://github.com/gabedossa/devjobs_ui
📫 Connect
Built by Gabriel Vitor
💼 LinkedIn
🎨 Behance
📧 gabrielvinces2@gmail.com
<div align="center">
⭐ If you found this project useful, consider giving it a star!
</div>
