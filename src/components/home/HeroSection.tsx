import React from 'react';
import { Button } from '../common/Button';
import { ArrowRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundImage: `
          linear-gradient(180deg, rgba(17, 21, 56, 0.42) 0%, rgba(17, 21, 56, 0.52) 40%, rgba(17, 21, 56, 0.78) 100%),
          url('/assets/hero_classroom.jpg')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center 35%',
        backgroundRepeat: 'no-repeat',
        paddingTop: 'clamp(7rem, 14vh, 10rem)',
        paddingBottom: 'clamp(2.5rem, 5vh, 4rem)',
        color: '#FFFFFF',
        overflow: 'hidden',
      }}
    >
      {/* Top spacer / anchor */}
      <div style={{ width: '100%' }} />

      {/* Main Center Content */}
      <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        {/* 1. Small Eyebrow */}
        <p
          style={{
            fontSize: 'clamp(0.75rem, 1.1vw, 0.875rem)',
            fontWeight: 600,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: '1.25rem',
          }}
        >
          CLASSES I–XII &nbsp;·&nbsp; ICSE &nbsp;·&nbsp; ISC &nbsp;·&nbsp; CBSE
        </p>

        {/* 2. Large Elegant Editorial Headline */}
        <h1
          style={{
            fontFamily: "'Newsreader', Georgia, serif",
            fontWeight: 500,
            fontSize: 'clamp(2.85rem, 6.5vw + 0.5rem, 5.25rem)',
            lineHeight: 1.08,
            color: '#FFFFFF',
            maxWidth: '920px',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: '1.25rem',
            letterSpacing: '-0.02em',
            textShadow: '0 4px 24px rgba(0, 0, 0, 0.35)',
          }}
        >
          Educating for a Better Tomorrow.
        </h1>

        {/* 3. One Short Supporting Sentence */}
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(1.05rem, 1.8vw, 1.35rem)',
            color: 'rgba(255, 255, 255, 0.88)',
            fontWeight: 400,
            maxWidth: '620px',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: 1.5,
            marginBottom: '2.5rem',
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
          }}
        >
          Strong foundations. Personal attention. Better learning.
        </p>

        {/* 4. Two CTAs */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '1.25rem',
          }}
        >
          <Button
            variant="hero-primary"
            size="lg"
            href="#academic-coverage"
            icon={<ArrowRight size={18} />}
          >
            Explore Fundemics
          </Button>

          <Button
            variant="outline-white"
            size="lg"
            href="/queries"
          >
            Send a Query
          </Button>
        </div>
      </div>

      {/* 5. Small Editorial Statistics Near Bottom (Zero glassmorphism, clean typography with thin dividers) */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 'clamp(1.5rem, 4vw, 3.5rem)',
          paddingTop: '2rem',
        }}
      >
        {/* Stat 1 */}
        <div style={{ textAlign: 'center' }}>
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.25rem, 2vw, 1.65rem)',
              fontWeight: 800,
              color: '#FFFFFF',
              lineHeight: 1.1,
            }}
          >
            10+ Years
          </div>
          <div
            style={{
              fontSize: '0.725rem',
              color: 'rgba(255, 255, 255, 0.7)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginTop: '4px',
              fontWeight: 500,
            }}
          >
            Teaching Experience
          </div>
        </div>

        {/* Thin Vertical Divider */}
        <div
          style={{
            width: '1px',
            height: '32px',
            backgroundColor: 'rgba(255, 255, 255, 0.25)',
          }}
          aria-hidden="true"
        />

        {/* Stat 2 */}
        <div style={{ textAlign: 'center' }}>
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.25rem, 2vw, 1.65rem)',
              fontWeight: 800,
              color: '#FFFFFF',
              lineHeight: 1.1,
            }}
          >
            100+ Students
          </div>
          <div
            style={{
              fontSize: '0.725rem',
              color: 'rgba(255, 255, 255, 0.7)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginTop: '4px',
              fontWeight: 500,
            }}
          >
            Guided to Board Merit
          </div>
        </div>

        {/* Thin Vertical Divider */}
        <div
          style={{
            width: '1px',
            height: '32px',
            backgroundColor: 'rgba(255, 255, 255, 0.25)',
          }}
          aria-hidden="true"
        />

        {/* Stat 3 */}
        <div style={{ textAlign: 'center' }}>
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.25rem, 2vw, 1.65rem)',
              fontWeight: 800,
              color: '#FFFFFF',
              lineHeight: 1.1,
            }}
          >
            3 Centres
          </div>
          <div
            style={{
              fontSize: '0.725rem',
              color: 'rgba(255, 255, 255, 0.7)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginTop: '4px',
              fontWeight: 500,
            }}
          >
            Across Lucknow
          </div>
        </div>
      </div>
    </section>
  );
};
