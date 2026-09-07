import "./LearnGrowSection.css";

import waveTop from "../../assets/Group12173.png";
import underline from "../../assets/curveyunderline.png";
import arrow from "../../assets/mynaui_arrow-right.svg";

import womanCyan from "../../assets/woman-cyan.png";
import womanPeach from "../../assets/women-peach.png";
import womanYellow from "../../assets/women-yellow.png";

const cards = [
  {
    image: womanCyan,
    color: "#4E5FD0",
    reverse: false,
  },
  {
    image: womanPeach,
    color: "#7D439C",
    reverse: true,
    imageBg: "#F7C6CF",
  },
  {
    image: womanYellow,
    color: "#0098C8",
    reverse: false,
    imageBg: "#F7A900",
  },
];

export default function LearnGrowSection() {
  return (
    <section className="learn-grow">

      <img src={waveTop} alt="" className="top-wave" />

      <div className="learn-header">

        <p className="learn-tag">Learn & Grow</p>

        <h2>
          Your Curly Hair
          <span> Journey Starts Here</span>
        </h2>

        <img src={underline} alt="" className="heading-underline" />

        <p className="learn-description">
          Access expert guides, styling tips, and a community of women who
          celebrate their natural curls.
        </p>

      </div>

      <div className="guide-grid">

        {cards.map((card, index) => (
          <article
            key={index}
            className={`guide-card ${card.reverse ? "reverse" : ""}`}
          >

            <div
              className="guide-image"
              style={{
                background: card.imageBg || "#00D0D6",
              }}
            >
              <img src={card.image} alt="Curly Hair Guide" />
            </div>

            <div
              className="guide-content"
              style={{ backgroundColor: card.color }}
            >

              <p className="expert-guide">Expert Guide</p>

              <h3>Curly Girl Method Guide</h3>

              <p className="guide-text">
                Complete guide to the CGM with moodboards, tips, and step-by-step
                instructions designed specifically for Arab hair.
              </p>

              <button className="explore-button">
                EXPLORE NOW
                <img src={arrow} alt="" />
              </button>

            </div>

          </article>
        ))}

      </div>

    </section>
  );
}