import SiteHeader from './components/SiteHeader/SiteHeader'
import HeroSection from './components/HeroSection/HeroSection'
import ProductLineSection from './components/ProductLineSection/ProductLineSection'
import IngredientCardsSection from './components/IngredientCardsSection/IngredientCardsSection'

import EssentialProducts from './components/EssentialProducts/EssentialProducts'

import SiteFooter from './components/SiteFooter/SiteFooter'
import Frame  from './components/Frame/Frame'
import ProductSelector from './components/ProductSelector/ProductSelector'
import ExpertReviews from './components/ExpertReviews/ExpertReviews'
import HairTypes from './components/HairTypes/HairTypes'
import LearnGrowSection from './components/LearnGrowSection/LearnGrowSection'
import Community from './components/Community/Community'
import IngredientsSection from './components/IngredientsSection/IngredientsSection'

function App() {
  return (
    <>
      <SiteHeader />
      <main id="home">
        <HeroSection />
        <ProductLineSection />
        <IngredientCardsSection />
        <ProductSelector />
        <EssentialProducts />
        <IngredientsSection />
        <Frame />
        <ExpertReviews />
        <HairTypes />
        <LearnGrowSection />
        <Community />
      </main>
      <SiteFooter />
    </>
  )
}

export default App

