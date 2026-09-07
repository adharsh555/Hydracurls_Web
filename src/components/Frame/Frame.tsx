import "./Frame.css";
import rectangle142 from "../../assets/rectangle-142.png";
import ellipse6 from "../../assets/ellipse-6.png";

const stars = Array.from({ length: 5 });

export default function Frame() {
  return (
    <section className="community-section">

      {/* Background Rings */}
      <div className="ring ring1"></div>
      <div className="ring ring2"></div>
      <div className="ring ring3"></div>
      <div className="ring ring4"></div>

      {/* Top White Wave */}
      <svg className="top-wave" viewBox="0 0 1920 120" preserveAspectRatio="none">
        <path
          fill="#fff"
          d="M0 70 C180 120 320 20 520 70 C720 120 900 20 1100 60 C1320 105 1500 30 1700 60 C1810 80 1870 90 1920 80 V0 H0 Z"
        />
      </svg>

      {/* LEFT IMAGE */}
      <div className="community-image-wrapper">
        <img src={rectangle142} className="community-image" alt="Hydra Curls Result" />

        {/* Before After Divider */}
        <div className="image-divider"></div>

        {/* Slider Button */}
        <div className="slider-btn">
          <span>←</span>
          <span>→</span>
        </div>

        {/* Cyan Curved Divider */}
        <svg className="cyan-line" viewBox="0 0 80 900" preserveAspectRatio="none">
          <path
            d="M55 0 C10 60 10 120 55 180 C80 220 80 300 55 360 C10 430 10 510 55 580 C80 630 80 720 55 780 C20 830 20 880 55 900"
            stroke="#0588F2"
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* RIGHT CONTENT */}
      <div className="community-content">

        <p className="community-subtitle">Real Women, Real Results</p>

        <div className="community-line"></div>

        <h2 className="community-title">
          Hear from Our <span>Community</span>
        </h2>

        {/* CARD */}
        <div className="testimonial-card">

          <div className="stars">
            {stars.map((_, i) => (
              <svg key={i} viewBox="0 0 20 20">
                <path d="M10 1l2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L10 15.8 4.4 18.2l1.1-6.2L1 7.6l6.2-.9z"/>
              </svg>
            ))}
          </div>

          <p className="testimonial-text">
            “I've struggled with frizz my whole life. Hydra Curls is the first
            range that actually tamed my hair for more than a day! The 48-hour
            claim is real.”
          </p>

          <div className="testimonial-user">
            <img src={ellipse6} alt="Aisha" />

            <div>
              <h4>Aisha K</h4>
              <p>Dubai, UAE</p>
            </div>
          </div>
        </div>

        {/* NAVIGATION */}
        <div className="nav-buttons">
          <button>↑</button>
          <button>↓</button>
        </div>
      </div>

      {/* HYDRA CURLS CIRCLE */}
      <div className="hydra-circle">
        <svg viewBox="0 0 220 220">
          <defs>
            <path
              id="circlePath"
              d="
                M110,110
                m-80,0
                a80,80 0 1,1 160,0
                a80,80 0 1,1 -160,0"
            />
          </defs>

          <text fontSize="12" fill="white" letterSpacing="5">
            <textPath href="#circlePath">
              HYDRA CURLS • HYDRA CURLS • HYDRA CURLS • HYDRA CURLS •
            </textPath>
          </text>
        </svg>
      </div>

      {/* Bottom Wave */}
      <svg className="bottom-wave" viewBox="0 0 1920 140" preserveAspectRatio="none">
        <path
          fill="#fff"
          d="M0 50 C220 120 360 0 600 70 C860 140 1040 10 1300 60 C1500 100 1680 40 1920 80 V140 H0 Z"
        />
      </svg>

    </section>
  );
}