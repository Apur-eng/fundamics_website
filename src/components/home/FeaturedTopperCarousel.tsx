import React from 'react';
import { RankerCarousel } from '../results/RankerCarousel';

export const FeaturedTopperCarousel: React.FC = () => {
  return (
    <section
      id="featured-students"
      aria-label="Our Students, Our Pride"
      style={{
        backgroundColor: 'var(--surface-gold)',  /* Pale gold — achievement / results surface */
        position: 'relative',
        paddingTop: 'clamp(4.5rem, 8vw, 7rem)',
        paddingBottom: '0',
        overflow: 'hidden',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      {/* Background Decorative Elements */}
      {/* 1. Top Right Corner Fold Badge (Academic Crest Corner) */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '135px',
          height: '135px',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      >
        <svg viewBox="0 0 135 135" fill="none" style={{ width: '100%', height: '100%' }}>
          {/* Deep navy diagonal fold */}
          <polygon points="135,0 135,135 0,0" fill="#10172B" />
          {/* Fine gold line inside the fold */}
          <line x1="35" y1="0" x2="135" y2="100" stroke="#E6AA32" strokeWidth="2.2" />
          <line x1="60" y1="0" x2="135" y2="75" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
          {/* Small gold diamond emblem */}
          <polygon points="105,25 109,29 105,33 101,29" fill="#E6AA32" />
        </svg>
      </div>

      {/* 2. Extremely subtle oversized circular / arc geometry in the background */}
      <div
        style={{
          position: 'absolute',
          top: '8%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '940px',
          height: '940px',
          borderRadius: '50%',
          border: '1px solid rgba(16, 23, 43, 0.035)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '16%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          border: '1px dashed rgba(230, 170, 50, 0.06)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '1200px',
          height: '1200px',
          borderRadius: '50%',
          border: '1px solid rgba(16, 23, 43, 0.02)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Side Editorial Annotations (Desktop Only, matching result.png) */}
      {/* Top Left: DISCIPLINE, GUIDANCE, BETTER RESULTS with vertical gold line */}
      <div
        className="editorial-annotation-left-top"
        style={{
          position: 'absolute',
          top: '175px',
          left: 'clamp(25px, 4vw, 70px)',
          zIndex: 6,
          display: 'flex',
          alignItems: 'flex-start',
          gap: '12px',
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            width: '2px',
            height: '46px',
            backgroundColor: '#C89B3C',
            borderRadius: '1px',
            flexShrink: 0,
            marginTop: '2px',
          }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '3px',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.72rem',
            fontWeight: 700,
            letterSpacing: '0.14em',
            color: '#706A60',
            lineHeight: 1.3,
          }}
        >
          <span>DISCIPLINE</span>
          <span>GUIDANCE</span>
          <span style={{ color: '#10172B' }}>BETTER RESULTS</span>
        </div>
      </div>

      {/* Bottom Left: BRIGHT, MINDS, BRIGHTER, TOMORROWS with vertical gold line */}
      <div
        className="editorial-annotation-left-bottom"
        style={{
          position: 'absolute',
          bottom: '155px',
          left: 'clamp(25px, 4vw, 70px)',
          zIndex: 6,
          display: 'flex',
          alignItems: 'flex-start',
          gap: '12px',
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            width: '2px',
            height: '58px',
            backgroundColor: '#C89B3C',
            borderRadius: '1px',
            flexShrink: 0,
            marginTop: '2px',
          }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '3px',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.7rem',
            fontWeight: 700,
            letterSpacing: '0.15em',
            color: '#706A60',
            lineHeight: 1.3,
          }}
        >
          <span>BRIGHT</span>
          <span>MINDS</span>
          <span>BRIGHTER</span>
          <span style={{ color: '#10172B' }}>TOMORROWS</span>
        </div>
      </div>

      {/* Top Right: "Hard Work Finds Direction Here." with gold underline stroke */}
      <div
        className="editorial-annotation-right-top"
        style={{
          position: 'absolute',
          top: '165px',
          right: 'clamp(25px, 4.5vw, 75px)',
          zIndex: 6,
          pointerEvents: 'none',
          textAlign: 'right',
          transform: 'rotate(-5deg)',
        }}
      >
        <p
          style={{
            fontFamily: "'Caveat', cursive",
            fontSize: '1.9rem',
            lineHeight: 1.12,
            color: '#10172B',
            fontWeight: 700,
            margin: 0,
          }}
        >
          Hard Work
          <br />
          Finds Direction
          <br />
          Here.
        </p>
        <svg
          width="115"
          height="14"
          viewBox="0 0 115 14"
          fill="none"
          style={{ marginTop: '2px', marginLeft: 'auto', display: 'block' }}
        >
          <path d="M5 8C35 3 75 11 110 5" stroke="#E6AA32" strokeWidth="2.8" strokeLinecap="round" />
        </svg>
      </div>

      {/* Bottom Right: "Students Today Leaders Tomorrow" stacked with gold underline stroke */}
      <div
        className="editorial-annotation-right-bottom"
        style={{
          position: 'absolute',
          bottom: '150px',
          right: 'clamp(25px, 4.5vw, 75px)',
          zIndex: 6,
          pointerEvents: 'none',
          textAlign: 'right',
          transform: 'rotate(2.5deg)',
        }}
      >
        <p
          style={{
            fontFamily: "'Caveat', cursive",
            fontSize: '1.75rem',
            lineHeight: 1.15,
            color: '#10172B',
            fontWeight: 700,
            margin: 0,
          }}
        >
          Students
          <br />
          Today
          <br />
          Leaders
          <br />
          Tomorrow
        </p>
        <svg
          width="95"
          height="12"
          viewBox="0 0 95 12"
          fill="none"
          style={{ marginTop: '2px', marginLeft: 'auto', display: 'block' }}
        >
          <path d="M4 6C30 2 65 9 91 5" stroke="#E6AA32" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>

      {/* Main Container */}
      <div
        style={{
          position: 'relative',
          zIndex: 5,
          width: '100%',
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '0 clamp(1rem, 2.5vw, 2rem)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Section Header (Matching result.png exact typography) */}
        <div
          style={{
            textAlign: 'center',
            maxWidth: '750px',
            marginBottom: 'clamp(1.75rem, 4vw, 2.75rem)',
          }}
        >
          {/* Eyebrow: OUR STUDENTS */}
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.82rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.24em',
              color: '#C89B3C',
              marginBottom: '0.85rem',
            }}
          >
            OUR STUDENTS
          </div>

          {/* Large Serif Title Case Heading: Our Students, Our Pride */}
          <h2
            style={{
              fontFamily: "'Newsreader', Georgia, serif",
              fontSize: 'clamp(3.1rem, 6.2vw, 4.8rem)',
              fontWeight: 600,
              color: '#10172B',
              lineHeight: 1.05,
              letterSpacing: '-0.025em',
              margin: '0 0 0.85rem 0',
            }}
          >
            Our Students,
            <br />
            Our Pride
          </h2>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1.05rem, 1.6vw, 1.25rem)',
              color: '#555149',
              fontWeight: 400,
              margin: 0,
              letterSpacing: '0.01em',
            }}
          >
            Real achievements. Real journeys.
          </p>
        </div>

        {/* The 5-Card Physical Sliding Deck Carousel */}
        <RankerCarousel />
      </div>

      {/* Large Curved / Organic Bottom Transition into Next Section (#FFFFFF) */}
      <div
        style={{
          width: '100%',
          overflow: 'hidden',
          lineHeight: 0,
          marginTop: 'clamp(2.5rem, 5vw, 4.5rem)',
          position: 'relative',
          zIndex: 3,
        }}
      >
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          style={{
            width: '100%',
            height: 'clamp(55px, 8vw, 115px)',
            display: 'block',
            fill: 'var(--surface-blue)',  /* matches CoursesSection background */
          }}
        >
          <path d="M0,40 C320,110 720,10 1120,85 C1280,110 1380,60 1440,45 L1440,120 L0,120 Z" />
        </svg>
      </div>

      {/* Responsive Media Query Styles */}
      <style>{`
        @media (max-width: 1260px) {
          .editorial-annotation-left-top,
          .editorial-annotation-left-bottom,
          .editorial-annotation-right-top,
          .editorial-annotation-right-bottom {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};
