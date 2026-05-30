# 🎓 Academic Mastery Portal: NLA & OPT + Probability & Statistics

Welcome to the **Academic Mastery Portal**—a bespoke, highly interactive, and premium educational web application built to master advanced concepts in **Numerical Linear Algebra (NLA) & Optimization (OPT)** and **Probability & Mathematical Statistics (Prob & Stats)** with maximum retention and speed.

> [!IMPORTANT]
> **🚀 Accelerated Learning Experience**: This interactive guide was custom-built to help me learn and master these complex mathematical and computational topics **significantly faster** than traditional methods. By transforming static lecture notes into dynamic, chunked modules, active recall quizzes, and a searchable progress-tracked formula hub, it has dramatically compressed my learning curve.
> 
> **🔮 Future Expansion**: The platform is structured to support multiple mathematical and computer science disciplines. **More premium courses are coming soon!**
> 
> **🤖 Created with Antigravity**: This entire portal was co-created, coded, and iterated from scratch in collaboration with **Antigravity (by Google DeepMind)**, a cutting-edge agentic AI coding assistant. By combining advanced AI capabilities with developer intent, we built a fully-featured React + TypeScript + Vite portal with beautiful animations and a database backend in record time!


---

## ✨ Key Features

- **📚 Structured Course Syllabus**: Thoroughly covers core academic material divided into clear, logically ordered chapters with progressive disclosure.
- **⚡ High-Performance Math Rendering**: Beautiful, instantaneous typesetting of complex LaTeX equations and mathematical proofs.
- **✏️ Interactive Knowledge Checks**: Inline, interactive multi-stage quizzes embedded in every module to test understanding and reinforce active recall.
- **🎛️ Interactive Formula Hub**: A dedicated dashboard containing essential formulas, allowing you to filter, search, star, and track your mastery progress.
- **🚀 Ultra-Modern UI/UX**: Built with an elegant dark theme, frosted-glass aesthetics (glassmorphism), responsive layout grid, and smooth interactive hover micro-animations.
- **🔒 Backend Sync**: Powered by a Supabase integration to persist your course progress, quiz results, and starred formulas seamlessly across devices.

---

## 🛠️ Tech Stack & Architecture

- **Core Framework**: React 18 & TypeScript (compiled with Vite for lightning-fast Hot Module Replacement)
- **Styling & Theme**: Modern custom CSS variables, elegant dark mode, flexbox/grid layout, and sleek component designs
- **Animations**: Fluid, physics-based transitions using Framer Motion
- **Database & Auth**: Supabase integration for student progress persistence
- **Icons**: Lucide React
- **Typesetting**: KaTeX / MathJax optimized engine for lag-free equation rendering

---

## 📂 Repository Structure

`	ext
nla-opt-guide/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI elements (MathRenderer, QuizWidget, TheoremBox, etc.)
│   ├── data/               # Course material data (chapters.ts, formulas.ts)
│   ├── pages/              # Page layouts (Home, FormulaHub, ChapterViewer)
│   ├── App.tsx             # Main router and layout coordinator
│   ├── index.css           # Global typography, color tokens, and utility styles
│   └── supabaseClient.ts   # Database client integration
├── package.json            # Dependency management
└── vite.config.ts          # Vite build system configuration
`

---

## 🚀 Getting Started

### Prerequisites

Make sure you have **Node.js** (v18+) and **npm** installed on your system.

### Installation

1. **Clone the Repository** (once pushed/published):
   `ash
   git clone https://github.com/<your-username>/nla-opt-guide.git
   cd nla-opt-guide
   `

2. **Install Dependencies**:
   `ash
   npm install
   `

3. **Run the Development Server**:
   `ash
   npm run dev
   `
   *The app will be available locally at http://localhost:5173.*

4. **Build for Production**:
   `ash
   npm run build
   `
   *This compiles the TypeScript files and outputs a highly optimized production bundle to the dist/ directory.*

---

## 🤝 Contributing

Contributions are welcome! If you'd like to improve the study guide, add new chapters, or enhance the quiz features, feel free to open a Pull Request or create an Issue.

---

*Designed and developed with 🧠 and Antigravity for high-retention student learning.*
