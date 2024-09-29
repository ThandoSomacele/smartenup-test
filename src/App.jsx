import './global.css';
import HeaderSection from './components/home-layout/HeaderSection';
import GameCarouselSection from './components/home-layout/GameCarouselSection';
import FiltersSection from './components/home-layout/FiltersSection';
import TestimonialsCarouselSection from './components/home-layout/TestimonialsCarouselSection';
import FooterSection from './components/home-layout/FooterSection';

function App() {
  return (
    <>
      <HeaderSection />
      <GameCarouselSection />
      <FiltersSection />
      <TestimonialsCarouselSection />
      <FooterSection />
    </>
  );
}

export default App;
