import React from 'react';
import { HeroSlideshow } from '../components/home/HeroSlideshow';
import { FeaturedTopperCarousel } from '../components/home/FeaturedTopperCarousel';
import { CoursesSection } from '../components/home/CoursesSection';
import { CmsBatchesSection } from '../components/home/CmsBatchesSection';
import { WhatMakesDifferent } from '../components/home/WhatMakesDifferent';
import { ExpandingSectionWrapper } from '../components/home/ExpandingSectionWrapper';
import { WhyChooseFundemics } from '../components/home/WhyChooseFundemics';
import { TeachersSection } from '../components/home/TeachersSection';
import { VisionSection } from '../components/home/VisionSection';
import { CentresSection } from '../components/home/CentresSection';
import { FinalContactCTA } from '../components/home/FinalContactCTA';

export const HomePage: React.FC = () => {
  return (
    <div className="home-page animate-fade-in" style={{ width: '100%', overflowX: 'clip' }}>
      {/* 1. HERO / IMAGE SLIDESHOW */}
      <HeroSlideshow />

      {/* 2. OUR STUDENTS, OUR PRIDE — Carousel displaying verified overall results */}
      <FeaturedTopperCarousel />

      {/* 3. LEARNING FOR EVERY STAGE — Academic Journey */}
      <CoursesSection />

      {/* 4. SPECIALIZED SUPPORT FOR CMS STUDENTS — CMS-focused section */}
      <CmsBatchesSection />

      {/* 5. MORE THAN JUST CLASSES — What makes Fundemics different */}
      <WhatMakesDifferent />

      {/* 6. EXPANDING SECTION TRANSITION -> THE FUNDEMICS METHOD */}
      <ExpandingSectionWrapper>
        <WhyChooseFundemics />
      </ExpandingSectionWrapper>

      {/* 7. MEET THE TEACHERS */}
      <TeachersSection />

      {/* 8. OUR VISION */}
      <VisionSection />

      {/* 9. OUR CENTRES / LOCATIONS */}
      <CentresSection />

      {/* 10. CONTACT / QUERY CTA */}
      <FinalContactCTA />
    </div>
  );
};
