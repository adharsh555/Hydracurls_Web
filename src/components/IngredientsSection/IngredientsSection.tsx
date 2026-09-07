import React from "react";
import { Check, Leaf, HeartHandshake } from "lucide-react";
import "./IngredientsSection.css";

/**
 * IngredientsSection
 * ---------------------------------------------------------------------------
 * "Powered by Nature's Best Ingredients" block.
 *
 * Layering (back → front):
 *   1. assets/images/Rectangle_30.png   -> full-bleed wavy section background
 *   2. assets/images/Component_13.svg   -> rotating circular "stamp" badge
 *   3. Header copy (eyebrow, heading, subheading)
 *   4. 3x ingredient cards, each with a looping <video> background:
 *        Card 1 (Hyaluronic Acid) -> assets/videos/1.mp4 + icons/water.gif
 *        Card 2 (Coconut Oil)     -> assets/videos/2.mp4 + icons/palm.gif
 *        Card 3 (Avocado Extract) -> assets/videos/3.mp4 + icons/avocado.gif
 *   5. Trust-badge strip (No SLS / No Silicones / No Parabens / Cruelty Free / Natural Extracts)
 *
 * Drop the `assets` folder next to this file (or update the paths below /
 * pass them through props) and import the component wherever the section
 * should render.
 */

interface Ingredient {
  id: string;
  title: string;
  description: string;
  features: string[];
  iconSrc: string;
  videoSrc: string;
}

const INGREDIENTS: Ingredient[] = [
  {
    id: "hyaluronic-acid",
    title: "Hyaluronic Acid",
    description:
      "Rich in vitamins and fatty acids for ultimate curl definition and softness",
    features: ["Deep Hydration", "Moisture Lock", "Plump Curls"],
    iconSrc: "src/assets/icons/water.gif",
    videoSrc: "src/assets/videos/1.mp4",
  },
  {
    id: "coconut-oil",
    title: "Coconut Oil",
    description:
      "Natural nourishment that penetrates hair shaft to strengthen and protect",
    features: ["Hair Strength", "Natural Shine", "Frizz Control"],
    iconSrc: "src/assets/icons/palm.gif",
    videoSrc: "src/assets/videos/2.mp4",
  },
  {
    id: "avocado-extract",
    title: "Avocado Extract",
    description:
      "Rich in vitamins and fatty acids for ultimate curl definition and softness",
    features: ["Curl Definition", "Softness", "Nutrient Rich"],
    iconSrc: "src/assets/icons/avocado.gif",
    videoSrc: "src/assets/videos/3.mp4",
  },
];

const TRUST_BADGES: { label: string; icon: React.ElementType }[] = [
  { label: "No SLS", icon: Check },
  { label: "No Silicones", icon: Check },
  { label: "No Parabens", icon: Check },
  { label: "Cruelty Free", icon: HeartHandshake },
  { label: "Natural Extracts", icon: Leaf },
];

const IngredientsSection: React.FC = () => {
  return (
    <section
      className="ingredients-section relative overflow-hidden py-24 px-6 md:px-12 lg:px-20"
      style={{
        backgroundImage: "src/assets/Rectangle30.png",
        backgroundSize: "cover",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Rotating circular stamp badge, sits above the wave curve, top-left */}
      <img
        src="src/assets/Component13.svg"
        alt=""
        aria-hidden="true"
        className="ingredients-badge pointer-events-none absolute left-2 top-6 h-24 w-24 select-none opacity-60 md:left-10 md:top-10 md:h-32 md:w-32"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* ----------------------------- Header ----------------------------- */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="ingredients-script relative inline-block text-lg text-slate-700">
            Premium Ingredients
            <svg
              className="absolute -bottom-1 left-1/2 w-28 -translate-x-1/2"
              viewBox="0 0 120 10"
              fill="none"
            >
              <path
                d="M2 6C20 -2 40 10 60 4C80 -2 100 10 118 4"
                stroke="#0EA5E9"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </span>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 md:text-5xl">
            Powered by <span className="text-sky-500">Nature&rsquo;s</span>
            <br />
            Best Ingredients
          </h2>

          <p className="ingredients-script mt-4 text-lg text-slate-500 md:text-xl">
            Our formulations combine scientifically-proven active ingredients
            with natural extracts for superior curly hair care.
          </p>
        </div>

        {/* ------------------------------ Cards ------------------------------ */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {INGREDIENTS.map((item) => (
            <article
              key={item.id}
              className="ingredient-card group relative isolate flex min-h-[420px] flex-col overflow-hidden rounded-3xl p-8 ring-1 ring-black/5"
            >
              {/* Looping video background */}
              <video
                className="pointer-events-none absolute inset-0 h-full w-full object-cover"
                src={item.videoSrc}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
              />

              {/* Readability overlay on top of the video */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-white/45 transition-colors duration-500 group-hover:from-white/90" />

              {/* Card content */}
              <div className="relative z-10 flex h-full flex-col">
                <div className="mb-6 flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-white/80 shadow ring-1 ring-black/5 backdrop-blur">
                  <img
                    src={item.iconSrc}
                    alt=""
                    aria-hidden="true"
                    className="h-9 w-9 object-contain"
                  />
                </div>

                <h3 className="mb-2 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>

                <span className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400/70">
                  Premium Ingredients
                </span>

                <ul className="mt-auto space-y-2">
                  {item.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-slate-700"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-sky-400 text-sky-500">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        {/* --------------------------- Trust strip --------------------------- */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white/70 px-6 py-5 backdrop-blur">
          {TRUST_BADGES.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="flex items-center gap-2 text-sm font-medium text-slate-700 md:text-base"
            >
              <Icon className="h-4 w-4 text-emerald-500" strokeWidth={2.5} />
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IngredientsSection;