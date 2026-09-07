# Hydra Curls — Responsive Web Application
> **Assignment 1:** Figma to Responsive React Page  
> **Figma Design Reference:** [View on Figma](https://www.figma.com/design/Yqq9qC4hZqj0adhv5kJUNG/Untitled?node-id=1-503&t=rz1rvy5igFaI5MjK-1)

---

## 📌 Project Overview & Objective

This project is a high-fidelity implementation of the **Parachute Advansed Hydra Curls** landing page, converted from Figma into a modern, performant, and fully responsive React web application.

The application adheres strictly to the original design language, including custom curves, organic wavy transitions, high-resolution media, interactive carousels, and typography tailored for curl care.

---

## 🚀 Deliverables & Quick Links

- **GitHub Repository:** [https://github.com/adharsh555/Hydracurls_Web](https://github.com/adharsh555/Hydracurls_Web)
- **Live Deployment:** [https://hydracurls-web.vercel.app](https://github.com/adharsh555/Hydracurls_Web) *(or your Vercel deployment link)*
- **Total Development Time:** ~4.5 hours

---

## 🛠️ Tech Stack & Architecture

- **Core Framework:** React 19
- **Language:** TypeScript
- **Bundler & Tooling:** Vite 6
- **Styling:** Tailwind CSS v4 + Modular Scoped CSS
- **Icons & UI:** Lucide React
- **Linter & Code Quality:** Oxlint + Strict TypeScript compilation (`tsc -b`)

---

## 📱 Responsiveness & Browser Support

The application is engineered to deliver a seamless experience across all device form factors:
- **Desktop / Ultra-Wide Displays (1440px+):** Full-bleed layouts, multi-column media sections, and fluid SVG wave transitions.
- **Laptops & Small Desktops (1024px – 1439px):** Proportional scaling using CSS `clamp()` and flex/grid adaptations.
- **Tablets (768px – 1023px):** Re-stacked card grids, responsive video layouts, and adjusted spacing.
- **Mobile Devices (< 768px):** Mobile-optimized navigation drawer, touch-friendly product slider, single-column testimonial cards, and optimized asset loading.

---

## 🧩 Component Breakdown

The codebase is organized into isolated, reusable components under `src/components/`:

| Component | Description |
| :--- | :--- |
| `SiteHeader` | Sticky navigation bar with mobile toggle menu and smooth anchor links. |
| `HeroSection` | Hero stage featuring an autoplaying background video, brand tagline, and launch highlights. |
| `ProductLineSection` | Visual showcase of the complete product collection. |
| `IngredientCardsSection` | Interactive cards spotlighting Hyaluronic Acid, Coconut, and Avocado benefits. |
| `ProductSelector` | Dynamic product browser with carousel preview, thumbnail selection, and curved graphics. |
| `EssentialProducts` | The 48-hour hydration promise panel with clinical benefit breakdowns and animation. |
| `Frame` (Community Testimonials) | Interactive before/after split slider, review ratings, and customer stories. |
| `ExpertReviews` | 4×2 collage of expert and influencer video testimonials. |
| `HairTypes` | Deep-dive guide for Type 2 (Wavy), Type 3 (Curly), and Type 4 (Coily) hair care. |
| `SiteFooter` | Comprehensive site footer with navigation links, key ingredients, social icons, and copyright. |

---

## 🤖 AI Development Tools & Workflow

To maintain rapid development speed while preserving pixel-precision and code quality, AI tooling (**Cursor / Claude Code**) was utilized throughout the workflow:

1. **Design Token & Layout Scaffolding:** Translated complex Figma frames, coordinate structures, and vector SVG definitions into structured JSX elements.
2. **Responsive CSS Architecture:** Assisted in formulating responsive breakpoint rules, flexbox/grid alignments, and CSS `clamp()` expressions for fluid typography across screen sizes.
3. **Type Safety & Component Interfaces:** Generated TypeScript interfaces for data models (products, hair types, and media items) to ensure type correctness.
4. **Performance & Build Verification:** Streamlined Vite bundling, asset resolution, and eliminated unused modules to achieve sub-second production builds.

---

## ⚙️ Getting Started & Setup

### Prerequisites
- **Node.js:** v18.0.0 or later
- **Package Manager:** npm (v9+) or pnpm / yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/adharsh555/Hydracurls_Web.git
   cd Hydracurls_Web
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. Build for production:
   ```bash
   npm run build
   ```

5. Preview the production build locally:
   ```bash
   npm run preview
   ```

6. Run the linter:
   ```bash
   npm run lint
   ```

---

## 📈 Quality & Evaluation Highlights

- **Visual Fidelity:** Strict alignment with the Figma specifications, color schemes, typography, and layered vector wave dividers.
- **Clean Code & Modularity:** Clear separation of concerns with dedicated component directories and scoped styles.
- **Fast Performance:** Optimized media loading, zero runtime overhead, and efficient asset management.
