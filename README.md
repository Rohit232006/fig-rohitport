# Rohit Muralidaran — Figma-Inspired Interactive Canvas Portfolio

> **“My Portfolio Is My Canvas.”**  
> A premium, interactive personal portfolio website for **Rohit Muralidaran**, UI/UX Designer & Technologist, designed to simulate an authentic creative design workspace.

---

## 🎨 Overview & Concept

Instead of a generic single-column webpage, this portfolio turns the viewport into a **functional Figma design workspace**. Visitors can pan and zoom across an infinite dotted canvas, inspect interactive project frames with dimension specs, review design tokens, test micro-interactions, drop feedback pins, and dive into 12-section UX case studies.

### Core Features

1. **Top Application Bar**:
   - Personal Logo (`RM`) with quick jump to origin
   - File Menu (`Rohit — Portfolio.fig`) with version controls and reset shortcuts
   - Live status indicator: `All changes saved` with pulse badge
   - Navigation links: `Canvas`, `Projects (5)`, `About`, `Contact`
   - View Mode Switcher: **Canvas Mode** ↔ **Linear Presentation Mode**
   - Theme Toggle: Light Canvas & Dark Canvas
   - One-click shareable canvas link copying
   - Prominent **“Let's Talk”** CTA

2. **Left Floating Toolbar**:
   - `Move Tool (V)`: Select frames, inspect coordinates, view details
   - `Hand Tool (H)`: Smoothly drag and pan around the infinite canvas (or hold `Space`)
   - `Frame Tool (F)`: Inspect frame bounds and navigate between layout zones
   - `Design Tokens (R)`: Inspect design system tokens, color palettes, and component primitives
   - `Typography Tool (T)`: Inspect typographic scale (Inter & JetBrains Mono)
   - `Comment Tool (C)`: Click anywhere on the canvas to leave an interactive feedback pin

3. **Central Infinite Canvas**:
   - Dotted canvas grid with realistic zoom scaling
   - Mouse-wheel zoom with pointer focal tracking (from 35% to 200%)
   - Click-and-drag panning with smooth velocity dampening
   - Viewport **Minimap Navigator** in the bottom right corner
   - Quick frame jump buttons (`Intro`, `#01`, `#02`, `#03`, `#04`, `#05`)
   - Interactive collaborative cursors

4. **Interactive Project Frames**:
   - **01 / AgenticOS** (AI Productivity Platform | UI/UX Design)
   - **02 / Last Mile** (Logistics & Delivery Experience | UX/UI Case Study)
   - **03 / FitStart** (Fitness Platform | Responsive Web Design)
   - **04 / UX Laws Behind Swiggy** (UX Research & Cognitive Psychology)
   - **05 / PixelLoom** (Creative Design & Digital Branding)

5. **Right Properties Panel (Inspector)**:
   - Dynamic geometry inspector (W, H, X, Y coordinates)
   - Tools & technologies chips
   - Deliverables and highlights checklist
   - Quick action to open the full 12-section case study
   - Canvas workspace summary when no frame is selected

6. **12-Section Case Study Experience**:
   - Project Overview & Deliverables
   - Problem Statement
   - Goals & Objectives
   - Research & User Insights
   - User Personas (e.g. Priya, Karthik, Sarah, Alex)
   - Information Architecture & Sitemaps
   - User Flows
   - Wireframes & Layout Explorations
   - Visual Design System & Color Tokens
   - Final Interface Screens
   - Interaction Details & Micro-Interactions
   - Learnings & Conclusion

7. **Floating About Me Window**:
   - Official biography connecting design, usability, and technology
   - Skill chips organized into UI/UX, Graphic Design, Web Development, Programming (Java/OOP), and Tools
   - Academic & leadership experience in Computer Science & Business Systems
   - Resume download button

8. **Contact & Collaboration Window**:
   - Direct email with one-click copy and toast notification (`rohitmuralidaran@gmail.com`)
   - Direct social links: LinkedIn, GitHub, Behance
   - Interactive contact form with confetti celebration upon sending

---

## 🛠 Tech Stack

- **Framework**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS with custom Figma design system tokens
- **Icons**: Lucide React
- **Micro-interactions**: Canvas Confetti, CSS spring curves, and accessibility-first motion controls (`prefers-reduced-motion`)

---

## 🚀 Running the Project Locally

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build optimized production bundle
npm run build

# 4. Preview production build locally
npm run preview
```

---

## 📂 Project Architecture

```
rohitport2.0/
├── public/
│   └── images/
│       ├── rohit-profile.jpg       # Rohit's portrait
│       ├── agenticos-logo.jpg      # AgenticOS asset
│       ├── lastmile-logo.png       # Last Mile asset
│       └── pharmaflow-logo.png     # FitStart / Platform asset
├── src/
│   ├── components/
│   │   ├── canvas/
│   │   │   ├── InfiniteCanvas.tsx        # Infinite pan & zoom canvas
│   │   │   ├── HeroCanvasSection.tsx     # Frame 00 Hero workspace
│   │   │   ├── ProjectFrame.tsx          # Interactive project frame
│   │   │   └── InteractiveComments.tsx   # Figma-style sticky comments
│   │   ├── casestudy/
│   │   │   └── CaseStudyModal.tsx        # 12-section deep dive modal
│   │   ├── views/
│   │   │   └── LinearPortfolioView.tsx   # Mobile & presentation list view
│   │   ├── windows/
│   │   │   ├── AboutWindow.tsx           # Floating about profile window
│   │   │   ├── ContactWindow.tsx         # Floating contact modal & form
│   │   │   └── DesignTokensModal.tsx     # Tokens & typography inspector
│   │   └── workspace/
│   │       ├── TopBar.tsx                # Top navigation & file bar
│   │       ├── LeftToolbar.tsx           # Figma tool palette (V, H, F, R, T, C)
│   │       └── PropertiesPanel.tsx       # Right design inspect panel
│   ├── data/
│   │   ├── projects.ts                   # Centralized, editable project data
│   │   └── about.ts                      # Rohit's bio, skills, and links
│   ├── types/
│   │   └── index.ts                      # TypeScript definitions
│   ├── App.tsx                           # Master workspace container
│   ├── main.tsx                          # React entry point
│   └── index.css                         # Dotted canvas grid & base styles
├── tailwind.config.js                    # Figma design token palette
└── package.json
```

---

## ⌨️ Keyboard Shortcuts

| Key | Tool / Action |
|---|---|
| `V` | Move Tool (Select frames & inspect) |
| `H` | Hand Tool (Pan canvas) |
| `Space + Drag` | Pan canvas from anywhere |
| `Ctrl + Wheel` | Zoom in / Zoom out |
| `F` | Frame Tool (Jump to project frames) |
| `R` | Design Tokens Inspector |
| `T` | Typography Scale Inspector |
| `C` | Comment Tool (Drop feedback pin) |
| `A` | Toggle About Me Window |
| `Esc` | Close active window / deselect |

