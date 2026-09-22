import React from 'react';
import { Compass } from 'lucide-react';

export const VisionSection: React.FC = () => {
  return (
    <section
      id="vision"
      style={{
        backgroundColor: 'var(--surface-sage)',  /* Soft sage — vision / human purpose */
        color: 'var(--color-text-primary)',
        position: 'relative',
        paddingTop: 'clamp(5.5rem, 10vw, 8.5rem)',
        paddingBottom: 'clamp(5.5rem, 10vw, 8.5rem)',
        overflow: 'hidden',
        borderBottom: '1px solid var(--surface-sage-border)',
      }}
      aria-label="Our Vision"
    >
      {/* Extremely subtle background arc decoration */}
      <div
        style={{
          position: 'absolute',
          top: '-15%',
          right: '-8%',
          width: '550px',
          height: '550px',
          borderRadius: '50%',
          border: '1px solid rgba(27, 107, 68, 0.06)',
          pointerEvents: 'none',
        }}
      />

      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '780px', marginBottom: 'clamp(3rem, 6vw, 4.5rem)' }}>
          {/* Eyebrow */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              marginBottom: '0.85rem',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.78rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                color: '#1B6B44',
              }}
            >
              OUR PURPOSE &amp; VISION
            </span>
            <span style={{ color: '#D4CEBF' }}>•</span>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.76rem',
                fontWeight: 600,
                color: '#706A60',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              Values That Endure
            </span>
          </div>

          {/* Heading */}
          <h2
            style={{
              fontFamily: "'Newsreader', Georgia, serif",
              fontSize: 'clamp(2.5rem, 4.6vw, 4rem)',
              fontWeight: 600,
              color: '#10172B',
              lineHeight: 1.08,
              letterSpacing: '-0.025em',
              margin: '0 0 1rem 0',
            }}
          >
            Teaching Beyond Examinations.
          </h2>

          {/* Supporting Copy */}
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1.05rem, 1.4vw, 1.22rem)',
              color: '#555149',
              lineHeight: 1.55,
              margin: 0,
            }}
          >
            Our vision is grounded in building disciplined study habits, conceptual mastery, and the confidence to learn independently.
          </p>
        </div>

        {/* Institutional Vision Banner Container */}
        <div
          style={{
            maxWidth: '1120px',
            margin: '0 auto',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 20px 50px -12px rgba(16, 23, 43, 0.18)',
            position: 'relative',
            aspectRatio: '21 / 9',
            minHeight: '260px',
            backgroundColor: '#0F1C18',
            background: 'radial-gradient(ellipse at 50% 40%, #173229 0%, #0A1411 90%)',
            border: '1px solid var(--surface-sage-border)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2.5rem 2rem',
            textAlign: 'center',
          }}
        >
          {/* Subtle Concentric Rings in Background */}
          <div
            style={{
              position: 'absolute',
              width: '520px',
              height: '520px',
              borderRadius: '50%',
              border: '1px solid rgba(43, 176, 111, 0.08)',
              pointerEvents: 'none',
            }}
            aria-hidden="true"
          />
          <div
            style={{
              position: 'absolute',
              width: '340px',
              height: '340px',
              borderRadius: '50%',
              border: '1px solid rgba(43, 176, 111, 0.12)',
              pointerEvents: 'none',
            }}
            aria-hidden="true"
          />

          <div
            style={{
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              backgroundColor: 'rgba(43, 176, 111, 0.15)',
              border: '1.5px solid rgba(43, 176, 111, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#2BB06F',
              marginBottom: '1rem',
              position: 'relative',
              zIndex: 1,
            }}
          >
            <Compass size={26} strokeWidth={1.8} />
          </div>

          <p
            style={{
              fontFamily: "'Newsreader', Georgia, serif",
              fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
              fontWeight: 500,
              fontStyle: 'italic',
              color: '#FAF8F5',
              lineHeight: 1.25,
              maxWidth: '720px',
              margin: '0 0 0.85rem 0',
              position: 'relative',
              zIndex: 1,
              letterSpacing: '-0.015em',
            }}
          >
            "Fundamentals First. Confidence Forever."
          </p>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(0.88rem, 1.2vw, 1rem)',
              color: 'rgba(250, 248, 245, 0.78)',
              maxWidth: '560px',
              margin: 0,
              position: 'relative',
              zIndex: 1,
              lineHeight: 1.5,
            }}
          >
            Building lasting academic intuition and disciplined excellence across Lucknow.
          </p>

          {/* Tagline Badge in Corner */}
          <div
            style={{
              position: 'absolute',
              bottom: '16px',
              left: '20px',
              color: 'rgba(255, 255, 255, 0.65)',
              fontSize: '0.74rem',
              fontFamily: 'var(--font-display)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              fontWeight: 700,
            }}
          >
            Fundemics Tutorials · Lucknow
          </div>
        </div>
      </div>
    </section>
  );
};
