import React from 'react';
import { SeoHead } from '../components/common/SeoHead';
import { HeroSlideshow } from '../components/home/HeroSlideshow';
import { FeaturedTopperCarousel } from '../components/home/FeaturedTopperCarousel';
import { CoursesSection } from '../components/home/CoursesSection';
import { WhyChooseFundemics } from '../components/home/WhyChooseFundemics';
import { CmsBatchesSection } from '../components/home/CmsBatchesSection';
import { WhatMakesDifferent } from '../components/home/WhatMakesDifferent';
import { TeachersSection } from '../components/home/TeachersSection';
import { VisionSection } from '../components/home/VisionSection';
import { CentresSection } from '../components/home/CentresSection';
import { CertificationsSection } from '../components/home/CertificationsSection';
import { FinalContactCTA } from '../components/home/FinalContactCTA';

export const HomePage: React.FC = () => {
  return (
    <div className="home-page animate-fade-in" style={{ width: '100%', overflowX: 'clip' }}>
      <SeoHead
        title="Fundemics Tutorials | Premier Coaching in Lucknow | ICSE, ISC, CBSE & State Board"
        description="Fundemics Tutorials LLP provides high-impact academic coaching for Classes I–XII across ICSE, ISC, CBSE, and State Board in Lucknow. Experienced mentors, morning batches, and verified rankers."
        canonicalPath="/"
        structuredData={[
          {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Fundemics Tutorials',
            url: 'https://fundemicstutorials.in/',
          },
          {
            '@context': 'https://schema.org',
            '@type': 'Course',
            name: 'Secondary & Senior Secondary Board Coaching (ICSE, ISC, CBSE, State Board)',
            description: 'Comprehensive board exam preparation for Classes I to XII with focus on Science, Mathematics, and conceptual mastery in Lucknow.',
            provider: {
              '@type': 'EducationalOrganization',
              name: 'Fundemics Tutorials LLP',
              url: 'https://fundemicstutorials.in/',
            },
          },
        ]}
      />
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

      {/* 10. CERTIFICATIONS & REGISTRATION */}
      <CertificationsSection />

      {/* 11. CONTACT / QUERY CTA */}
      <FinalContactCTA />
    </div>
  );
};
