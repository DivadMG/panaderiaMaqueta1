import { Footer } from './Footer';
import HeroSection from '../../view/components/HeroSection';
import Offers from '../../view/components/Offers';
import Article from '../../view/components/Article';

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <Offers />
      <Article />
      <Footer />
    </>
  );
};

export default LandingPage;