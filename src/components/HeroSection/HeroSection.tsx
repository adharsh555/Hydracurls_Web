const benefits = [
  { label: 'No SLS, Silicones, Parabens', icon: '/assets/section3-check.svg' },
  { label: '48-Hour Hydration', icon: '/assets/section3-drop.svg' },
  { label: 'Hair Types 2, 3, 4', icon: '/assets/section3-sparkles.svg' },
]

function HeroSection() {
  return (
    <section className="hero" id="hero" data-node-id="2:329">
      <div className="hero-stage">
        <div className="hero-video-layer" aria-hidden="true">
          <video autoPlay loop muted playsInline>
            <source src="/assets/hero-background.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="hero-pattern" aria-hidden="true" />

        <div className="hero-content">
          <img
            className="hero-brand"
            src="/assets/hydra-curls-logo.png"
            alt="Parachute Advansed Hydra Curls"
          />
          <h1 className="hero-tagline">
            Pure ingredients. Real results.
            <br />
            Every drop matters.
          </h1>
          <div className="hero-divider" aria-hidden="true" />
          <div className="scroll-arrows" aria-label="Scroll down">
            <img className="scroll-arrow" src="/assets/scroll-down.svg" alt="" />
            <img className="scroll-arrow" src="/assets/scroll-down.svg" alt="" />
          </div>
        </div>

        <div className="hero-wave" aria-hidden="true">
          <svg viewBox="0 0 1920 169" preserveAspectRatio="none">
            <path d="M0 25C260 76 480 74 735 36C1000 -4 1200 25 1420 52C1615 76 1770 74 1920 48V112C1770 138 1615 140 1420 116C1200 89 1000 68 735 102C480 140 260 138 0 89Z" />
          </svg>
        </div>
      </div>

      <section className="product-showcase" id="new-launch" data-node-id="2:752">
        <img className="showcase-background" src="/assets/section3-background.svg" alt="" />
        <img className="showcase-palm" src="/assets/section3-palm.png" alt="" aria-hidden="true" />
        <img className="showcase-splash" src="/assets/section3-water-splash.png" alt="" aria-hidden="true" />
        <img className="showcase-wave" src="/assets/section3-wave.svg" alt="" aria-hidden="true" />

        <div className="showcase-content">
          <p className="showcase-eyebrow">New Launch</p>
          <img className="showcase-title-line" src="/assets/section3-title-line.svg" alt="" aria-hidden="true" />
          <img className="showcase-logo" src="/assets/section3-brand.png" alt="Parachute Advansed Hydra Curls" />
          <p className="showcase-description">
            Revolutionary hair care range specially designed for Arab curly, coily &amp; wavy hair.
            Experience <strong>48-hour hydration</strong> with natural ingredients like Hyaluronic Acid,
            Coconut &amp; Avocado.
          </p>
          <div className="showcase-benefits">
            {benefits.map(({ label, icon }) => (
              <span className="showcase-benefit" key={label}>
                <img src={icon} alt="" />
                {label}
              </span>
            ))}
          </div>
          <div className="showcase-actions">
            <a className="showcase-button showcase-button-primary" href="#new-launch">
              Explore Products <img src="/assets/section3-arrow.svg" alt="" />
            </a>
            <a className="showcase-button showcase-button-secondary" href="#curly-girl-method">
              Learn Curly Girl Method
            </a>
          </div>
        </div>

        <div className="showcase-product-wrap">
          <div className="showcase-product-frame">
            <img className="showcase-product" src="/assets/section3-product.png" alt="Hydra Curls shampoo bottle" />
          </div>
        </div>
      </section>
    </section>
  )
}

export default HeroSection
