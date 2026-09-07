function EssentialProducts() {
  return (
    <section className="proof-section" id="essential-products" data-node-id="2:408">
      <article className="proof-panel" data-node-id="2:409">
        <header className="proof-header">
          <p className="proof-kicker">The Hydra Curls Promise</p>
          <h2 className="proof-title" id="hydration-heading">
            Clinically Proven
            <br />
            <span>48-Hour</span> Hydration
          </h2>
        </header>

        <div className="proof-content">
          <div className="proof-copy">
            <p>
              Our advanced formula with Hyaluronic Acid doesn&apos;t just coat your
              hair; it penetrates the cuticle to lock in moisture from the inside out,
              providing continuous hydration for two full days.
            </p>

            <dl className="proof-benefits" aria-label="Hydration benefits">
              <div className="proof-benefit">
                <dt><span className="proof-benefit-icon" aria-hidden="true">◦</span>Moisture Attraction</dt>
                <dd>Hyaluronic Acid acts like a magnet for moisture, drawing hydration into each strand.</dd>
              </div>
              <div className="proof-benefit">
                <dt><span className="proof-benefit-icon proof-benefit-icon-sparkle" aria-hidden="true">✧</span>Strengthening Seal</dt>
                <dd>Coconut &amp; Avocado oils seal the hair cuticle, preventing moisture loss and adding strength.</dd>
              </div>
            </dl>
          </div>

          <span className="proof-connector" aria-hidden="true" />
          <aside className="proof-stat" aria-label="48 hours of continuous hydration">
            <img className="proof-stat-clock" src="/assets/hydration-clock.gif" alt="" aria-hidden="true" />
            <strong>48</strong>
            <span className="proof-stat-hours">Hours</span>
            <small>of continuous curl hydration<br />and frizz control.</small>
          </aside>
        </div>
      </article>
    </section>
  )
}

export default EssentialProducts
