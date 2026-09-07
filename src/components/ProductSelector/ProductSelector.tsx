import { useState } from "react";
import "./ProductSelector.css";

import CloudSection from "./CloudSection/CloudSection";
import CyanWave from "./CyanWave/CyanWave";

// Ellipse Backgrounds
import ellipse20 from "../../assets/Ellipse20.png";
import ellipse21 from "../../assets/Ellipse21.svg";
import ellipse22 from "../../assets/Ellipse22.png";

// Curved Text
import hydrationText from "../../assets/Group.svg";

// Product Images
import shampoo from "../../assets/selector-shampoo.png";
import conditioner from "../../assets/selector-conditioner.png";
import gel from "../../assets/selector-gel.png";
import cream from "../../assets/selector-cream.png";
import mask from "../../assets/selector-mask.png";

const products = [
  {
    name: "Hydrating Shampoo",
    image: shampoo,
  },
  {
    name: "Hydrating Conditioner",
    image: conditioner,
  },
  {
    name: "Hydrating Gel",
    image: gel,
  },
  {
    name: "Hydrating Cream",
    image: cream,
  },
  {
    name: "Hydrating Mask",
    image: mask,
  },
];

const ProductSelector = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selected = products[selectedIndex];
  const nextProduct = products[(selectedIndex + 1) % products.length];

  const previous = () => {
    setSelectedIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const next = () => {
    setSelectedIndex((prev) => (prev + 1) % products.length);
  };

  return (
    <section className="hydra-selector" id="hydra-products">

      {/* ================= CLOUD COMPONENT ================= */}
        <CloudSection />

      {/* ================= CYAN WAVE COMPONENT ================= */}
      <CyanWave />

      {/* ================= PURPLE ELLIPSE BACKGROUND ================= */}
      <img src={ellipse20} alt="" className="ellipse ellipse-back" />
      <img src={ellipse21} alt="" className="ellipse ellipse-middle" />
      <img src={ellipse22} alt="" className="ellipse ellipse-front" />

      {/* ================= MAIN PRODUCT ================= */}
      <div className="selector-main">
        <div className="selector-main-blob">
          <img src={selected.image} alt={selected.name} />
        </div>

        <h3 className="selector-title">{selected.name}</h3>
      </div>

      {/* ================= PREVIEW PRODUCT ================= */}
      <div className="selector-preview">
        <div className="selector-preview-blob">
          <img src={nextProduct.image} alt={nextProduct.name} />
        </div>
      </div>

      {/* ================= NAVIGATION BUTTONS ================= */}
      <button
        className="selector-arrow selector-arrow-left"
        onClick={previous}
        aria-label="Previous Product"
      >
        <svg viewBox="0 0 24 24" fill="none">
          <path
            d="M15 5L8 12L15 19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <button
        className="selector-arrow selector-arrow-right"
        onClick={next}
        aria-label="Next Product"
      >
        <svg viewBox="0 0 24 24" fill="none">
          <path
            d="M9 5L16 12L9 19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* ================= THUMBNAILS ================= */}
      <div className="selector-thumbnails">
        {products.map((product, index) => (
          <button
            key={product.name}
            className={`selector-thumbnail ${
              selectedIndex === index ? "selector-thumbnail-active" : ""
            }`}
            onClick={() => setSelectedIndex(index)}
            aria-label={product.name}
          >
            <img src={product.image} alt={product.name} />
          </button>
        ))}
      </div>

      {/* ================= CURVED FIGMA TEXT ================= */}
      <div className="selector-tagline">
        <img
          src={hydrationText}
          alt="Experience the power of hydration in every drop."
        />
      </div>
    </section>
  );
};

export default ProductSelector;