import { useEffect } from "react";
import "./Community.css";

type Stat = {
  value: string;
  label: string;
};

const stats: Stat[] = [
  { value: "48h", label: "Hydration" },
  { value: "05", label: "Products" },
  { value: "3", label: "Hair Types" },
  { value: "0", label: "Sulfates" },
];

export default function Community() {
  // Same full-bleed trick used elsewhere: measure the true visible
  // width (scrollbar excluded) so the section never over/undershoots.
  useEffect(() => {
    const setViewportWidth = () => {
      document.documentElement.style.setProperty(
        "--chr-vw",
        `${document.documentElement.clientWidth}px`
      );
    };
    setViewportWidth();
    window.addEventListener("resize", setViewportWidth);
    return () => window.removeEventListener("resize", setViewportWidth);
  }, []);

  return (
    <section className="chr-section">
      {/* Wavy top edge — a flat-colour SVG cap sitting flush against
          the solid-colour body below it. */}
      <svg
        className="chr-wave"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,32 C120,52 240,4 360,18 C480,32 600,54 720,40 C840,26 960,2 1080,14 C1200,26 1320,50 1440,30 L1440,60 L0,60 Z"
          fill="#091B3B"
        />
      </svg>

      <div className="chr-body">
        <div className="chr-inner">
          <div className="chr-text">
            <h2 className="chr-heading">Join the Curly Hair Revolution</h2>
            <p className="chr-subheading">
              Transform your curly hair journey with expert guidance, premium
              products, and a supportive community.
            </p>

            <div className="chr-actions">
              <button className="chr-btn chr-btn-primary">
                Explore Products
                <span className="chr-arrow" aria-hidden="true">
                  →
                </span>
              </button>
              <button className="chr-btn chr-btn-outline">
                Learn Curly Girl Method
              </button>
            </div>
          </div>

          <div className="chr-stats">
            {stats.map((stat) => (
              <div className="chr-stat" key={stat.label}>
                <div className="chr-stat-value">{stat.value}</div>
                <div className="chr-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}