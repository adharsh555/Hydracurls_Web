import { useEffect, useMemo } from "react";
import "./LearnGrowSection.css";

import Rectangle153 from "../../assets/Rectangle153.png";

import LearnGrow from "../../assets/Learn&Grow.svg";
import LearnGrowUnderline from "../../assets/Line23(1).svg";
import JourneyTitle from "../../assets/YourCurlyHairJourneyStartsHere.svg";
import AccessExpert from "../../assets/Accessexpert.svg";

import CurlyGirlHeading from "../../assets/CurlyGirl.svg";
import CompleteGuide from "../../assets/Completeguide.svg";
import ExpertGuideUnderline from "../../assets/curveyunderline.png";
import ExploreNow from "../../assets/EXPLORENOW.svg";
import ArrowRight from "../../assets/mynaui_arrow-right.svg";

import Woman1 from "../../assets/women1.svg";
import Woman2 from "../../assets/women2.svg";
import Woman3 from "../../assets/women3.svg";

/* ---------------------------------------------------------------
   WAVE GEOMETRY
   The divider between the photo and the colour panel is drawn as
   an SVG path instead of a pre-baked panel graphic. That keeps the
   colour, amplitude and rhythm of the curve fully under our control
   and matches the reference (a gentle sine wave centred on the 50%
   line, bowing a little into each side as it runs top to bottom).
----------------------------------------------------------------- */

const ROW_W = 1920; // matches --row-w in the CSS, purely a coordinate space
const ROW_H = 632; // matches --row-h in the CSS
const WAVE_AMPLITUDE = 10; // how far the curve bows off the centre line — kept subtle
const WAVE_PERIOD = 220; // vertical distance for one full wave cycle
const WAVE_SAMPLES = 48; // polyline density — plenty smooth at this scale

type PanelSide = "left" | "right";

function buildWavePath(panelSide: PanelSide, phase: number): string {
  const baseX = ROW_W / 2;
  const direction = panelSide === "right" ? 1 : -1;
  const straightEdgeX = panelSide === "right" ? ROW_W : 0;

  const points: { x: number; y: number }[] = [];
  for (let i = 0; i <= WAVE_SAMPLES; i++) {
    const y = (i / WAVE_SAMPLES) * ROW_H;
    const x =
      baseX +
      direction * WAVE_AMPLITUDE * Math.sin((2 * Math.PI * (y + phase)) / WAVE_PERIOD);
    points.push({ x, y });
  }

  const wave = points.map((p) => `L ${p.x.toFixed(2)} ${p.y.toFixed(2)}`).join(" ");

  return [
    `M ${straightEdgeX} 0`,
    `L ${points[0].x.toFixed(2)} 0`,
    wave,
    `L ${straightEdgeX} ${ROW_H}`,
    "Z",
  ].join(" ");
}

type JourneyCard = {
  image: string;
  panelSide: PanelSide;
  panelColor: string;
  wavePhase: number;
};

const journeyCards: JourneyCard[] = [
  { image: Woman1, panelSide: "right", panelColor: "#5365BB", wavePhase: 0 },
  { image: Woman2, panelSide: "left", panelColor: "#76468A", wavePhase: 60 },
  { image: Woman3, panelSide: "right", panelColor: "#009ABA", wavePhase: 120 },
];

export default function LearnGrowSection() {
  // Drives full-bleed width off the TRUE visible content width
  // (clientWidth excludes the scrollbar track), so the section
  // never overshoots/undershoots the way 100vw does.
  useEffect(() => {
    const setViewportWidth = () => {
      document.documentElement.style.setProperty(
        "--lg-vw",
        `${document.documentElement.clientWidth}px`
      );
    };
    setViewportWidth();
    window.addEventListener("resize", setViewportWidth);
    return () => window.removeEventListener("resize", setViewportWidth);
  }, []);

  const wavePaths = useMemo(
    () => journeyCards.map((card) => buildWavePath(card.panelSide, card.wavePhase)),
    []
  );

  return (
    <section
      className="learn-grow-section"
      style={{ backgroundImage: `url(${Rectangle153})` }}
    >
      {/* Header */}
      <div className="learn-grow-header">
        <div className="learn-grow-eyebrow">
          <img src={LearnGrow} alt="Learn & Grow" className="learn-grow-label" />
          <img
            src={LearnGrowUnderline}
            alt=""
            className="learn-grow-label-underline"
          />
        </div>

        <img
          src={JourneyTitle}
          alt="Your Curly Hair Journey Starts Here"
          className="learn-grow-title"
        />

        <img
          src={AccessExpert}
          alt="Access expert guides, styling tips, and a community of women who celebrate their natural curls."
          className="learn-grow-description"
        />
      </div>

      {/* Journey Cards */}
      <div className="journey-wrapper">
        {journeyCards.map((card, index) => (
          <div
            key={index}
            className="journey-row"
            data-panel-side={card.panelSide}
            style={{ ["--panel-color" as string]: card.panelColor }}
          >
            {/* Photo — sized a hair past 50% so it always backs the
                widest possible recess of the wave, with no seam. */}
            <div className="journey-image" data-side={card.panelSide === "right" ? "left" : "right"}>
              <img src={card.image} alt={`Woman ${index + 1}`} />
            </div>

            {/* Wave divider + colour fill, drawn once per row */}
            <svg
              className="journey-wave"
              viewBox={`0 0 ${ROW_W} ${ROW_H}`}
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d={wavePaths[index]} fill={card.panelColor} />
            </svg>

            <div className="journey-content" data-side={card.panelSide}>
              <div className="guide-eyebrow-wrap">
                <span className="guide-eyebrow">Expert Guide</span>
                <img
                  src={ExpertGuideUnderline}
                  alt=""
                  className="guide-eyebrow-underline"
                />
              </div>

              <img
                src={CurlyGirlHeading}
                alt="Curly Girl Method Guide"
                className="guide-heading"
              />

              <img
                src={CompleteGuide}
                alt="Complete guide to the CGM with moodboards, tips, and step-by-step instructions designed specifically for Arab hair."
                className="guide-description"
              />

              <button className="explore-button">
                <img src={ExploreNow} alt="Explore Now" className="explore-now" />
                <img src={ArrowRight} alt="" className="arrow-icon" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}