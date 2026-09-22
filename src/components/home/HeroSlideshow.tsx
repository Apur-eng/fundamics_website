import React from 'react';
import { Button } from '../common/Button';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useLenis } from '../../motion/lenis';

export const HeroSlideshow: React.FC = () => {
  const { scrollTo } = useLenis();

  const scrollToCourses = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollTo('#courses', { offset: -72 });
  };

  return (
    <section
      style={{
        position: 'relative',
        height: '100vh',
        minHeight: '620px',
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0C1424',
      }}
      aria-label="Hero Introduction"
    >
      {/* Ambient Architectural Lighting */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(ellipse 70% 50% at 50% 25%, rgba(32, 42, 87, 0.45) 0%, transparent 70%),
            radial-gradient(circle at 85% 85%, rgba(43, 176, 111, 0.08) 0%, transparent 45%),
            radial-gradient(circle at 15% 20%, rgba(83, 105, 184, 0.12) 0%, transparent 40%),
            linear-gradient(180deg, rgba(12, 20, 36, 0.4) 0%, #0C1424 100%)
          `,
          pointerEvents: 'none',
          zIndex: 1,
        }}
        aria-hidden="true"
      />

      {/* Subtle Geometry Grid Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '54px 54px',
          opacity: 0.6,
          pointerEvents: 'none',
          zIndex: 2,
        }}
        aria-hidden="true"
      />

      {/* Hero Center Content */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 3,
          textAlign: 'center',
          maxWidth: '920px',
          paddingTop: '3rem',
        }}
      >
        {/* Milestone Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.35rem',
            backgroundColor: 'rgba(255, 186, 8, 0.12)',
            border: '1px solid rgba(255, 186, 8, 0.45)',
            borderRadius: '999px',
            padding: '0.35rem 0.95rem',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            marginBottom: 'clamp(1rem, 2.5vw, 1.35rem)',
          }}
        >
          <span style={{ fontSize: '0.78rem', lineHeight: 1, color: '#FFBA08' }}>★</span>
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(0.72rem, 1.2vw, 0.8rem)',
              fontWeight: 800,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#FFBA08',
              whiteSpace: 'nowrap',
            }}
          >
            10 Years of Excellence
          </span>
        </div>

        {/* Editorial Headline */}
        <h1
          style={{
            fontFamily: "'Newsreader', Georgia, serif",
            fontWeight: 500,
            fontSize: 'clamp(2.75rem, 6.8vw + 0.5rem, 5.5rem)',
            lineHeight: 1.08,
            color: '#FFFFFF',
            letterSpacing: '-0.025em',
            marginBottom: '1.25rem',
            textShadow: '0 4px 28px rgba(0, 0, 0, 0.45)',
          }}
        >
          Educating for a Better Tomorrow.
        </h1>

        {/* Supporting Line */}
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(1.05rem, 1.9vw, 1.35rem)',
            color: 'rgba(255, 255, 255, 0.88)',
            fontWeight: 400,
            maxWidth: '620px',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: 1.5,
            marginBottom: '2.5rem',
            textShadow: '0 2px 12px rgba(0, 0, 0, 0.35)',
          }}
        >
          Strong foundations. Personal attention. Better learning.
        </p>

        {/* Action Buttons */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '1.25rem',
          }}
        >
          <a
            href="#courses"
            onClick={scrollToCourses}
            className="btn btn-hero-primary btn-lg"
            style={{
              gap: '0.5rem',
              display: 'inline-flex',
              alignItems: 'center',
            }}
          >
            <span>Explore Courses</span>
            <ArrowRight size={17} />
          </a>

          <Button
            variant="outline-white"
            size="lg"
            href="/queries"
          >
            Send a Query
          </Button>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#featured-students"
        onClick={(e) => {
          e.preventDefault();
          scrollTo('#featured-students');
        }}
        aria-label="Scroll to featured student toppers"
        style={{
          position: 'absolute',
          bottom: '1.5rem',
          right: 'clamp(1rem, 4vw, 3rem)',
          zIndex: 3,
          color: 'rgba(255, 255, 255, 0.65)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          fontSize: '0.75rem',
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          fontWeight: 600,
          transition: 'color var(--transition-fast)',
        }}
        className="hero-scroll-cue"
      >
        <span>Scroll</span>
        <ChevronDown size={15} />
      </a>
    </section>
  );
};
