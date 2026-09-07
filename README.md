# Hydra Curls — Responsive Web Application

> **Assignment 1:** Figma to Responsive React Page  
> **Figma Design Reference:** [View on Figma](https://www.figma.com/design/Yqq9qC4hZqj0adhv5kJUNG/Untitled?node-id=1-503&t=rz1rvy5igFaI5MjK-1)

---

## Project Overview and Objective

This project is a high-fidelity implementation of the **Parachute Advansed Hydra Curls** landing page, converted from the provided Figma design into a functional, performant, and fully responsive React web application.

The application reflects the visual design language of the source file, incorporating custom curves, organic wavy transitions, high-resolution media, interactive components, and typography tailored for curl care.

---

## Deliverables

- **GitHub Repository:** [https://github.com/adharsh555/Hydracurls_Web](https://github.com/adharsh555/Hydracurls_Web)
- **Live Deployment:** [https://hydracurls-web.vercel.app](https://github.com/adharsh555/Hydracurls_Web)
- **Total Development Time:** Approximately 4.5 hours

---

## Technology Stack and Architecture

- **Core Framework:** React 19
- **Language:** TypeScript
- **Bundler and Build Tooling:** Vite 6
- **Styling:** Tailwind CSS v4 and Modular Component CSS
- **Iconography:** Lucide React
- **Code Quality and Compilation:** Oxlint and Strict TypeScript Compiler (`tsc -b`)

---

## Responsive Design Specifications

The user interface is engineered to adapt across all standard device viewports:

- **Desktop and Large Displays (1440px and above):** Full-width stages, multi-column layouts, and seamless SVG wave dividers.
- **Laptops (1024px to 1439px):** Proportional scaling utilizing CSS `clamp()` and adaptive grid structures.
- **Tablets (768px to 1023px):** Stacked content hierarchy, responsive video grids, and reflowed product selectors.
- **Mobile Devices (under 768px):** Collapsible navigation drawer, touch-friendly product slider, single-column testimonial cards, and optimized media assets.

---

## Component Structure

The source code is modularized within `src/components/`, ensuring clear separation of concerns and maintainability:

| Component | Description |
| :--- | :--- |
| `SiteHeader` | Sticky navigation bar with mobile toggle menu and section anchor navigation. |
| `HeroSection` | Hero stage featuring an autoplaying background video, brand tagline, and launch highlights. |
| `ProductLineSection` | Visual showcase presenting the complete product range. |
| `IngredientCardsSection` | Informational cards detailing key ingredients including Hyaluronic Acid, Coconut, and Avocado oils. |
| `ProductSelector` | Interactive product browser with carousel preview, thumbnail selection, and curved graphics. |
| `EssentialProducts` | The 48-hour hydration promise panel with clinical benefit breakdowns and animation. |
| `Frame` | Interactive before/after split slider, review ratings, and customer testimonials. |
| `ExpertReviews` | 4x2 collage of expert and influencer video reviews. |
| `HairTypes` | Comprehensive guide covering Type 2 (Wavy), Type 3 (Curly), and Type 4 (Coily) hair. |
| `SiteFooter` | Footer containing quick navigation links, ingredient certifications, and social links. |

---

## AI Development Tools and Workflow

AI development tools (**Cursor** and **Claude Code**) were utilized to streamline development while ensuring architectural rigor and design fidelity:

1. **Design Token and Coordinate Translation:** Assisted in mapping complex Figma SVG vector paths, absolute coordinate relationships, and layout constraints into semantic JSX structures.
2. **Responsive CSS Formulations:** Generated initial responsive breakpoint media queries, fluid sizing functions using `clamp()`, and grid configurations.
3. **Type Definitions:** Structured TypeScript interfaces for component props, product records, and hair care datasets to maintain strict type safety.
4. **Build Optimization:** Assisted in isolating dependency configurations, resolving asset imports, and ensuring clean production builds.

---

## Getting Started and Local Setup

### Prerequisites
- **Node.js:** version 18.0.0 or higher
- **Package Manager:** npm (v9 or higher), pnpm, or yarn

### Installation and Execution

1. Clone the repository:
   ```bash
   git clone https://github.com/adharsh555/Hydracurls_Web.git
   cd Hydracurls_Web
   ```

2. Install project dependencies:
   ```bash
   npm install
   ```

3. Run the local development server:
   ```bash
   npm run dev
   ```
   Access the application at `http://localhost:5173`.

4. Build for production:
   ```bash
   npm run build
   ```

5. Preview the production build:
   ```bash
   npm run preview
   ```

6. Run the code linter:
   ```bash
   npm run lint
   ```

---

## Evaluation Criteria Compliance

- **Figma Accuracy:** Visual parity with the reference design in colors, typography, layout geometry, and layer transitions.
- **Responsive Quality:** Consistent visual hierarchy and functional navigation across mobile, tablet, and desktop breakpoints.
- **Code Quality:** Modular component architecture, strict TypeScript typing, and clean directory organization.
- **Performance:** Lightweight client-side bundle, optimized vector and raster assets, and fast initial paint times.
