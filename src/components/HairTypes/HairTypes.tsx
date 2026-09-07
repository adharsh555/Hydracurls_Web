import "./HairTypes.css";
import HairCard from "./HairCard";

/* ================= BACKGROUND ================= */

import rectangle150 from "../../assets/Rectangle150.png";

/* ================= DECORATIONS ================= */

// Large cloud (top left)
import cloud2 from "../../assets/cloud2.svg";

// Cyan curl ribbon (left side)
import lefty from "../../assets/lefty.svg";

// Rotating circular component
import component8 from "../../assets/Component8.svg";

/* ================= BADGE ================= */

import ellipse39 from "../../assets/Ellipse39.svg";
import brandLogo from "../../assets/brandlogo.svg";

/* ================= HEADINGS ================= */

import designedForYou from "../../assets/DesignedforYou.svg";
import perfectHeading from "../../assets/PerfectArabHair.svg";
import description from "../../assets/ArabHairDescription.svg";

/* ================= HAIR IMAGES ================= */

import wavyImage from "../../assets/wavy.png";
import curlyImage from "../../assets/curly.png";
import coilyImage from "../../assets/coily.png";

/* ================= CARD CONTENT ================= */

const cards = [
  {
    type: "Wavy",
    image: wavyImage,
    title: "Type 2 Hair",
    subtitle: "Soft waves with natural movement.",
    description:
      "Hydrates loose waves without weighing them down while reducing frizz, adding shine and enhancing natural definition.",
  },
  {
    type: "Curly",
    image: curlyImage,
    title: "Type 3 Hair",
    subtitle: "Defined curls with bounce and volume.",
    description:
      "Provides intense hydration, curl definition, softness, bounce and long-lasting frizz control.",
  },
  {
    type: "Coily",
    image: coilyImage,
    title: "Type 4 Hair",
    subtitle: "Tight coils that need deep nourishment.",
    description:
      "Deeply nourishes coils, strengthens strands, reduces breakage and locks in moisture for healthy textured hair.",
  },
];

const HairTypes = () => {
  return (
    <section className="hair-types-section" id="hair-types">

      {/* ================= Rectangle150 Background ================= */}
      <img
        src={rectangle150}
        alt=""
        className="hair-bg"
      />

      {/* ================= Large Cloud ================= */}
      <img
        src={cloud2}
        alt=""
        className="hair-cloud"
      />

      {/* Cloned Cloud */}
      <img
        src={cloud2}
        alt=""
        className="hair-cloud-2"
      />

      {/* ================= Left Curl Ribbon ================= */}
      <img
        src={lefty}
        alt=""
        className="hair-ribbon"
      />

      {/* ================= Ellipse Badge ================= */}
      <div className="hair-badge">

        {/* Ellipse */}
        <img
          src={ellipse39}
          alt=""
          className="hair-badge-circle"
        />

        {/* Rotating Component 8 */}
        <img
          src={component8}
          alt=""
          className="hair-component8"
        />

        {/* Brand Logo */}
        <img
          src={brandLogo}
          alt="Hydra Curls"
          className="hair-badge-logo"
        />

      </div>

      {/* ================= Heading ================= */}
      <div className="hair-heading">

        <img
          src={designedForYou}
          alt="Designed For You"
          className="hair-designed"
        />

        <img
          src={perfectHeading}
          alt="Perfect for Arab Curly, Coily & Wavy Hair"
          className="hair-title"
        />

        <img
          src={description}
          alt="Hair Description"
          className="hair-description"
        />

      </div>

      {/* ================= Hair Type Cards ================= */}
      <div className="hair-cards">

        {cards.map((card) => (
          <HairCard
            key={card.type}
            type={card.type}
            image={card.image}
            title={card.title}
            subtitle={card.subtitle}
            description={card.description}
          />
        ))}

      </div>

      {/* ================= Bottom Wave ================= */}
      <div className="hair-bottom-wave"></div>

    </section>
  );
};

export default HairTypes;