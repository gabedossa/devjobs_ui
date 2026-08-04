<h1>
  <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Briefcase.png" width="35" alt="briefcase" />
  DevJobs UI
</h1>
<p><strong>A modern developer job board — built from scratch with Next.js 14, TypeScript &amp; Tailwind CSS</strong></p>
<p>
  <a href="https://nextjs.org/" target="_blank">
    <img src="https://img.shields.io/badge/Next.js_14-000000?style=flat-square&amp;logo=next.js&amp;logoColor=white" alt="Next.js" />
  </a>
  <a href="https://www.typescriptlang.org/" target="_blank">
    <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&amp;logo=typescript&amp;logoColor=white" alt="TypeScript" />
  </a>
  <a href="https://tailwindcss.com/" target="_blank">
    <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&amp;logo=tailwind-css&amp;logoColor=white" alt="Tailwind CSS" />
  </a>
  <a href="https://vercel.com/" target="_blank">
    <img src="https://img.shields.io/badge/Vercel-000000?style=flat-square&amp;logo=vercel&amp;logoColor=white" alt="Vercel" />
  </a>
</p>
<p>
  <a href="https://SEU-LINK-VERCEL.vercel.app" target="_blank"><b>🚀 Live Demo</b></a>
  &nbsp;&nbsp;•&nbsp;&nbsp;
  <a href="https://github.com/gabedossa/devjobs_ui" target="_blank"><b>📁 Repository</b></a>
  &nbsp;&nbsp;•&nbsp;&nbsp;
  <a href="https://www.linkedin.com/in/gabrieldossa/" target="_blank"><b>💼 LinkedIn</b></a>
</p>
<br/>
<img src="./public/preview.png" alt="DevJobs UI Preview" width="850" style="border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.15);" />
<p><em>Homepage with job listings, advanced search and real-time filters</em></p>
</div>
<hr/>
<h2>✨ What It Does</h2>
<p>DevJobs UI is a fully functional job board for developers. It lets users <strong>browse</strong>, <strong>search</strong> and <strong>filter</strong> job openings by title, company, location and contract type — all with a clean, responsive interface.</p>
<p>Built as a portfolio piece to demonstrate modern front-end architecture, component design and performance optimization.</p>
<hr/>
<h2>🖼️ Features</h2>
<table>
  <tr>
    <th>Feature</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>🔍 <strong>Smart Search &amp; Filter</strong></td>
    <td>Search by job title, company, location or contract type with instant results</td>
  </tr>
  <tr>
    <td>🌙 <strong>Dark / Light Mode</strong></td>
    <td>Seamless theme toggle with system preference detection</td>
  </tr>
  <tr>
    <td>📱 <strong>Fully Responsive</strong></td>
    <td>Mobile-first design that looks great on any screen size</td>
  </tr>
  <tr>
    <td>⚡ <strong>Next.js 14 App Router</strong></td>
    <td>Server Components, streaming and fast client-side navigation</td>
  </tr>
  <tr>
    <td>🎨 <strong>Tailwind CSS</strong></td>
    <td>Utility-first styling with custom design tokens and consistent spacing</td>
  </tr>
  <tr>
    <td>🔒 <strong>100% Type-Safe</strong></td>
    <td>Full TypeScript coverage — zero <code>any</code> types</td>
  </tr>
  <tr>
    <td>🔄 <strong>Dynamic Routing</strong></td>
    <td>Clean URLs for individual job detail pages (<code>/job/[id]</code>)</td>
  </tr>
  <tr>
    <td>🖼️ <strong>Image Optimization</strong></td>
    <td>Next.js <code>&lt;Image /&gt;</code> component for automatic resizing and lazy loading</td>
  </tr>
</table>
<hr/>
<h2>🛠 Tech Stack</h2>
<pre>
┌─────────────────────────────────────────────────────────┐
│  Next.js 14  │  TypeScript  │  Tailwind CSS  │  Vercel  │
└─────────────────────────────────────────────────────────┘
</pre>
<table>
  <tr>
    <th>Layer</th>
    <th>Technology</th>
  </tr>
  <tr>
    <td><strong>Framework</strong></td>
    <td><a href="https://nextjs.org/">Next.js 14</a> (App Router)</td>
  </tr>
  <tr>
    <td><strong>Language</strong></td>
    <td><a href="https://www.typescriptlang.org/">TypeScript</a></td>
  </tr>
  <tr>
    <td><strong>Styling</strong></td>
    <td><a href="https://tailwindcss.com/">Tailwind CSS</a></td>
  </tr>
  <tr>
    <td><strong>Font</strong></td>
    <td><a href="https://fonts.google.com/specimen/Inter">Inter</a> (via <code>next/font</code>)</td>
  </tr>
  <tr>
    <td><strong>Deployment</strong></td>
    <td><a href="https://vercel.com/">Vercel</a></td>
  </tr>
</table>
<hr/>
<h2>🚀 Quick Start</h2>
<h3>Prerequisites</h3>
<ul>
  <li><a href="https://nodejs.org/">Node.js</a> 18+</li>
  <li>npm / yarn / pnpm</li>
</ul>
<h3>Installation</h3>
<pre>
# 1. Clone
$ git clone https://github.com/gabedossa/devjobs_ui.git
2. Navigate
$ cd devjobs_ui
3. Install
$ npm install
4. Run
$ npm run dev
→ Open http://localhost:3000
</pre>
<hr/>
<h2>📁 Architecture</h2>
<pre>
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
</pre>
<hr/>
<h2>🧪 Available Scripts</h2>
<table>
  <tr>
    <th>Command</th>
    <th>What it does</th>
  </tr>
  <tr>
    <td><code>npm run dev</code></td>
    <td>Starts the dev server with hot reload</td>
  </tr>
  <tr>
    <td><code>npm run build</code></td>
    <td>Creates an optimized production build</td>
  </tr>
  <tr>
    <td><code>npm run start</code></td>
    <td>Serves the production build</td>
  </tr>
  <tr>
    <td><code>npm run lint</code></td>
    <td>Runs ESLint across the codebase</td>
  </tr>
</table>
<hr/>
<h2>🎯 Key Takeaways</h2>
<p>This project was built to sharpen specific skills:</p>
<ul>
  <li><strong>Dynamic routing</strong> with Next.js 14 App Router — handling <code>[id]</code> segments and data fetching</li>
  <li><strong>Component architecture</strong> — designing reusable, typed React components with clear prop interfaces</li>
  <li><strong>Responsive design</strong> — mobile-first approach with Tailwind's breakpoint system</li>
  <li><strong>State management</strong> — coordinating search, filters and theme across the component tree</li>
  <li><strong>Performance</strong> — leveraging Next.js Image, font optimization and code splitting</li>
</ul>
<hr/>
<h2>🌐 Live Deployment</h2>
<p>Deployed on <strong>Vercel</strong> with automatic CI/CD on every push to <code>main</code>.</p>
<p align="center">
  <a href="https://SEU-LINK-VERCEL.vercel.app" target="_blank">
    <img src="https://img.shields.io/badge/▶_View_Live_Demo-000000?style=for-the-badge&amp;logo=vercel&amp;logoColor=white" alt="View Live Demo" />
  </a>
</p>
<hr/>
<h2>📫 Let's Connect</h2>
<p>
  <a href="https://www.linkedin.com/in/gabrieldossa/" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&amp;logo=linkedin&amp;logoColor=white" alt="LinkedIn" />
  </a>
  &nbsp;
  <a href="https://www.behance.net/gabrielvin73ec" target="_blank">
    <img src="https://img.shields.io/badge/Behance-1769FF?style=for-the-badge&amp;logo=behance&amp;logoColor=white" alt="Behance" />
  </a>
  &nbsp;
  <a href="mailto:gabrielvinces2@gmail.com" target="_blank">
    <img src="https://img.shields.io/badge/Email-EA4335?style=for-the-badge&amp;logo=gmail&amp;logoColor=white" alt="Email" />
  </a>
</p>
<p>Built by <strong>Gabriel Vitor</strong> — Full-Stack Developer &amp; UI Designer</p>
<hr/>
<div align="center">
<p><em>Found this project useful? Give it a ⭐ — it helps a lot!</em></p>
<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Waving%20Hand.png" width="35" alt="wave" />
</div>
