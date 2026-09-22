import React, { Suspense } from 'react';
import { SeoHead } from '../components/common/SeoHead';
import { HeroSlideshow } from '../components/home/HeroSlideshow';

// Lazy-load below-the-fold sections to protect initial FCP, LCP, and TBT
const FeaturedTopperCarousel = React.lazy(() =>
  import('../components/home/FeaturedTopperCarousel').then((m) => ({ default: m.FeaturedTopperCarousel }))
);
const CoursesSection = React.lazy(() =>
  import('../components/home/CoursesSection').then((m) => ({ default: m.CoursesSection }))
);
const WhyChooseFundemics = React.lazy(() =>
  import('../components/home/WhyChooseFundemics').then((m) => ({ default: m.WhyChooseFundemics }))
);
const CmsBatchesSection = React.lazy(() =>
  import('../components/home/CmsBatchesSection').then((m) => ({ default: m.CmsBatchesSection }))
);
const WhatMakesDifferent = React.lazy(() =>
  import('../components/home/WhatMakesDifferent').then((m) => ({ default: m.WhatMakesDifferent }))
);
const TeachersSection = React.lazy(() =>
  import('../components/home/TeachersSection').then((m) => ({ default: m.TeachersSection }))
);
const VisionSection = React.lazy(() =>
  import('../components/home/VisionSection').then((m) => ({ default: m.VisionSection }))
);
const CentresSection = React.lazy(() =>
  import('../components/home/CentresSection').then((m) => ({ default: m.CentresSection }))
);
const CertificationsSection = React.lazy(() =>
  import('../components/home/CertificationsSection').then((m) => ({ default: m.CertificationsSection }))
);
const FinalContactCTA = React.lazy(() =>
  import('../components/home/FinalContactCTA').then((m) => ({ default: m.FinalContactCTA }))
);

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
      {/* 1. HERO — synchronous above-the-fold critical render */}
      <HeroSlideshow />

      {/* BELOW-THE-FOLD SECTIONS — loaded in Suspense */}
      <Suspense fallback={<div style={{ minHeight: '300px' }} />}>
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
      </Suspense>
    </div>
  );
};
