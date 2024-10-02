import './global.css';
import HeaderSection from './components/home-layout/HeaderSection';
import GameCarouselSection from './components/home-layout/GameCarouselSection';
import FiltersSection from './components/home-layout/FiltersSection';
import TestimonialsCarouselSection from './components/home-layout/TestimonialsCarouselSection';
import FooterSection from './components/home-layout/FooterSection';
import FeaturesStrip from './components/ui/FeaturesStrip';

function App() {
  return (
    <>
      <HeaderSection />
      <FeaturesStrip isTilted={true} isGrainy={true} />
      <GameCarouselSection />
      <FiltersSection />
      <FeaturesStrip isTilted={false} isGrainy={false} />
      <TestimonialsCarouselSection />
      <FeaturesStrip isTilted={false} isGrainy={true} />
      <FooterSection />
    </>
  );
}

export default App;
