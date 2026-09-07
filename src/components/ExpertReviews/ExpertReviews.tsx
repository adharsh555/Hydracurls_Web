import "./ExpertReviews.css";

/* ==========================================================
   FRAME 61 ASSETS
========================================================== */

// Wavy Background
import rectangle145 from "../../assets/Rectangle145.svg";

// Heading Assets
import influencerApproved from "../../assets/Influencer Approved.svg";
import underline from "../../assets/underline.svg";
import expertsHeading from "../../assets/See What The Experts Are Saying.png";

// Decorative Assets
import hydraBadge from "../../assets/HydraCurls.svg";
import curlRibbon from "../../assets/curl.svg";

// MP4 Videos
import video1 from "../../assets/expert-videos/video-1.mp4";
import video2 from "../../assets/expert-videos/video-2.mp4";
import video3 from "../../assets/expert-videos/video-3.mp4";
import video4 from "../../assets/expert-videos/video-4.mp4";

/* ==========================================================
   VIDEO ORDER (Same as Figma)
========================================================== */

const videos = [
  video1,
  video2,
  video3,
  video4,
  video4,
  video3,
  video2,
  video1,
];

/* ==========================================================
   COMPONENT
========================================================== */

const ExpertReviews = () => {
  return (
    <section className="expert-reviews" id="expert-reviews">

      {/* =====================================================
          TOP WAVY HERO BACKGROUND (Rectangle145.svg)
      ====================================================== */}
      <img
        src={rectangle145}
        alt=""
        className="expert-background"
      />

      {/* =====================================================
          DECORATIVE CURL RIBBONS
      ====================================================== */}
      <img src={curlRibbon} alt="" className="ribbon ribbon-left" />
      <img src={curlRibbon} alt="" className="ribbon ribbon-top" />
      <img src={curlRibbon} alt="" className="ribbon ribbon-right" />

      {/* =====================================================
          HEADER CONTENT
      ====================================================== */}
      <div className="expert-header-container">

        {/* Hydra Badge */}
        <img
          src={hydraBadge}
          alt="Hydra Curls"
          className="expert-badge"
        />

        {/* Heading */}
        <div className="expert-heading">

          <img
            src={influencerApproved}
            alt="Influencer Approved"
            className="expert-approved"
          />

          <img
            src={underline}
            alt=""
            className="expert-underline"
          />

          <img
            src={expertsHeading}
            alt="See What The Experts Are Saying"
            className="expert-title"
          />

        </div>
      </div>

      {/* =====================================================
          WHITE CONTENT SECTION (starts after Rectangle145)
      ====================================================== */}
      <div className="expert-content">

        {/* 4×2 MP4 Collage */}
        <div className="expert-video-grid">
          {videos.map((video, index) => (
            <div className="expert-video-card" key={index}>
              <video
                className="expert-video"
                src={video}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              />
            </div>
          ))}
        </div>

        {/* White space before next section */}
        <div className="expert-next-section-space" />

      </div>

    </section>
  );
};

export default ExpertReviews;