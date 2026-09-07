const asset = (name: string) => `/assets/ingredient-cards/${name}`

const CARDS = [
  {
    id: 'hyaluron',
    title: 'Hyaluronic Acid',
    body: 'Acts like a magnet for moisture, drawing deep hydration into each strand and locking it in for up to 48 hours — so your curls stay soft, defined, and frizz-free all day.',
    bg: 'rectangle-186.svg',
    withProducts: false,
  },
  {
    id: 'coconut',
    title: 'Coconut & Avocado',
    body: 'Rich in fatty acids and vitamins, Coconut & Avocado oils nourish from root to tip — sealing the cuticle, reducing breakage, and leaving every curl silky, strong, and full of shine.',
    bg: 'rectangle-185.svg',
    withProducts: true,
  },
]

function IngredientCard({
  title,
  body,
  bg,
  withProducts,
}: {
  title: string
  body: string
  bg: string
  withProducts: boolean
}) {
  return (
    <article
      className={`ingredient-card${withProducts ? ' ingredient-card--has-products' : ''}`}
    >
      <img
        className="ingredient-card-background"
        src={asset(bg)}
        alt=""
        aria-hidden="true"
      />
      <img
        className="ingredient-card-pattern"
        src={asset('organic-lines.png')}
        alt=""
        aria-hidden="true"
      />

      <div className="ingredient-card-copy">
        <h2>{title}</h2>
        <p>{body}</p>
        <a href="#products" className="ingredient-card-cta">
          <span>Learn More</span>
          <img src={asset('arrow-right.svg')} alt="" aria-hidden="true" />
        </a>
      </div>

      {withProducts && (
        <div className="ingredient-card-products" aria-hidden="true">
          <img
            className="ingredient-card-glow"
            src={asset('ellipse.svg')}
            alt=""
          />
          <img
            className="ingredient-product p-shampoo"
            src={asset('shampoo.png')}
            alt=""
          />
          <img
            className="ingredient-product p-conditioner"
            src={asset('image-6.png')}
            alt=""
          />
          <img
            className="ingredient-product p-gel"
            src={asset('gel.png')}
            alt=""
          />
          <img
            className="ingredient-product p-cream"
            src={asset('cream.png')}
            alt=""
          />
          <img
            className="ingredient-product p-mask"
            src={asset('mask.png')}
            alt=""
          />
        </div>
      )}
    </article>
  )
}

function IngredientCardsSection() {
  return (
    <section className="ingredient-cards" id="ingredient-cards" data-node-id="2:784">
      <img
        className="ingredient-cards-divider"
        src="/assets/product-line-divider.svg"
        alt=""
        aria-hidden="true"
      />
      <div className="ingredient-cards-grid">
        {CARDS.map((card) => (
          <IngredientCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  )
}

export default IngredientCardsSection
