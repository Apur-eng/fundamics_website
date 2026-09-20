import React from 'react';
import { HeroSlideshow } from '../components/home/HeroSlideshow';
import { FeaturedTopperCarousel } from '../components/home/FeaturedTopperCarousel';
import { CoursesSection } from '../components/home/CoursesSection';
import { WhyChooseFundemics } from '../components/home/WhyChooseFundemics';
import { CmsBatchesSection } from '../components/home/CmsBatchesSection';
import { WhatMakesDifferent } from '../components/home/WhatMakesDifferent';
import { TeachersSection } from '../components/home/TeachersSection';
import { VisionSection } from '../components/home/VisionSection';
import { CentresSection } from '../components/home/CentresSection';
import { FinalContactCTA } from '../components/home/FinalContactCTA';

export const HomePage: React.FC = () => {
  return (
    <div className="home-page animate-fade-in" style={{ width: '100%', overflowX: 'clip' }}>
      {/* 1. HERO */}
      <HeroSlideshow />

      {/* 2. OUR STUDENTS, OUR PRIDE — Real achievements. Real journeys. */}
      <FeaturedTopperCarousel />

      {/* 3. CHOOSE YOUR PATH — “Choose your board. Find your academic path.” */}
      <CoursesSection />

      {/* 4. THE FUNDEMICS METHOD — “The difference is in how we teach.” */}
      <WhyChooseFundemics />

      {/* 5. SPECIALIZED SUPPORT FOR CMS STUDENTS */}
      <CmsBatchesSection />

      {/* 6. MORE THAN JUST CLASSES */}
      <WhatMakesDifferent />

      {/* 7. MEET THE TEACHERS */}
      <TeachersSection />

      {/* 8. OUR VISION */}
      <VisionSection />

      {/* 9. OUR CENTRES */}
      <CentresSection />

      {/* 10. CONTACT / QUERY CTA */}
      <FinalContactCTA />
    </div>
  );
};
