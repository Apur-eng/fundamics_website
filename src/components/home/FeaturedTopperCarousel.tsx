import React from 'react';
import { RankerCarousel } from '../results/RankerCarousel';

export const FeaturedTopperCarousel: React.FC = () => {
  return (
    <section
      id="featured-students"
      aria-label="Our Students, Our Pride"
      style={{
        backgroundColor: '#F8FAFC', /* Clean light blue-grey coaching institute surface */
        position: 'relative',
        paddingTop: 'clamp(4.5rem, 7vw, 6.5rem)',
        paddingBottom: 'clamp(4.5rem, 7vw, 6.5rem)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderBottom: '1px solid #E2E8F0',
      }}
    >
      {/* ─── SECTION HEADER ─── */}
      <div
        style={{
          position: 'relative',
          zIndex: 5,
          width: '100%',
          maxWidth: '1240px',
          margin: '0 auto',
          padding: '0 clamp(1rem, 3vw, 2rem)',
          textAlign: 'center',
          marginBottom: 'clamp(2rem, 4vw, 3rem)',
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '0.85rem',
          }}
        >
          <span
            style={{
              width: '18px',
              height: '2px',
              backgroundColor: '#202A57',
              display: 'inline-block',
              borderRadius: '1px',
            }}
          />
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.80rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.22em',
              color: '#202A57',
            }}
          >
            OUR STUDENTS
          </span>
          <span
            style={{
              width: '18px',
              height: '2px',
              backgroundColor: '#202A57',
              display: 'inline-block',
              borderRadius: '1px',
            }}
          />
        </div>

        {/* Section Title */}
        <h2
          style={{
            fontFamily: "'Newsreader', Georgia, serif",
            fontSize: 'clamp(2.75rem, 5.5vw, 4.25rem)',
            fontWeight: 600,
            color: '#10172B',
            lineHeight: 1.08,
            letterSpacing: '-0.025em',
            margin: '0 0 0.85rem 0',
          }}
        >
          Our Students, Our Pride
        </h2>

        {/* Supporting Copy */}
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(1.05rem, 1.5vw, 1.25rem)',
            color: '#555E75',
            fontWeight: 400,
            maxWidth: '680px',
            margin: '0 auto',
            lineHeight: 1.55,
          }}
        >
          Real achievements. Real journeys. Built through conceptual clarity and disciplined mentorship.
        </p>
      </div>

      {/* ─── UPGRADED HORIZONTAL CAROUSEL ─── */}
      <div
        style={{
          width: '100%',
          position: 'relative',
          zIndex: 4,
        }}
      >
        <RankerCarousel />
      </div>
    </section>
  );
};
