import React, { useEffect } from 'react';
import { HeroBanner } from '../components/home/HeroBanner';
import { CategoryGrid } from '../components/home/CategoryGrid';
import { FeaturedProducts } from '../components/home/FeaturedProducts';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { InspirationGallery } from '../components/home/InspirationGallery';
import { SanitaryWareShowcase } from '../components/home/SanitaryWareShowcase';
import { CtaBanner } from '../components/home/CtaBanner';

export const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Riyansh Marketing | Tiles & Sanitary Ware in Morbi, Gujarat';
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <HeroBanner />
      <CategoryGrid />
      <FeaturedProducts />
      <WhyChooseUs />
      <InspirationGallery />
      <SanitaryWareShowcase />
      <CtaBanner />
    </main>
  );
};
