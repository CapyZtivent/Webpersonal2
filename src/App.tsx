import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { GuideDescription } from './components/GuideDescription';
import { FreeProducts } from './components/FreeProducts';
import { PremiumProducts } from './components/PremiumProducts';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { CTASection } from './components/CTASection';
import { SocialMedia } from './components/SocialMedia';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <GuideDescription />
      <FreeProducts />
      <PremiumProducts />
      <Services />
      <Gallery />
      <Testimonials />
      <CTASection />
      <SocialMedia />
      <Footer />
    </div>
  );
}