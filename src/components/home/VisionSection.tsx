import React from 'react';

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
          top: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '800px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(27, 107, 68, 0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Quiet, Emotional Center Headline */}
        <div style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
          {/* Eyebrow — Fundemics green accent */}
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.78rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.24em',
              color: '#1B6B44',
              display: 'block',
              marginBottom: '1.25rem',
            }}
          >
            OUR VISION
          </span>

          {/* Large Editorial Headline — navy on sage */}
          <h2
            style={{
              fontFamily: "'Newsreader', Georgia, serif",
              fontSize: 'clamp(2.8rem, 6.2vw, 5.2rem)',
              fontWeight: 500,
              color: 'var(--color-ink)',
              lineHeight: 1.08,
              letterSpacing: '-0.025em',
              margin: '0 0 1.75rem 0',
            }}
          >
            Educating for a better tomorrow...
          </h2>

          {/* Minimal, Emotional Reflection */}
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1.08rem, 1.8vw, 1.3rem)',
              color: '#3E4A36',
              lineHeight: 1.7,
              fontWeight: 300,
              margin: '0 auto 3.5rem auto',
              maxWidth: '720px',
            }}
          >
            Education is not the rushed memorization of formulas for an upcoming examination. It is the steady cultivation of a curious mind, the patience to understand why principles work, and the quiet confidence to solve problems that have never been seen before.
          </p>
        </div>

        {/* Cinematic Wide Classroom / Student Image */}
        <div
          style={{
            maxWidth: '1120px',
            margin: '0 auto',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 20px 50px -12px rgba(16, 23, 43, 0.18)',
            position: 'relative',
            aspectRatio: '21 / 9',
            backgroundColor: '#1A2614',
            border: '1px solid var(--surface-sage-border)',
          }}
        >
          <img
            src="/assets/about_vision.jpg"
            alt="Students engaged in collaborative academic study at Fundemics Tutorials Lucknow"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 40%',
              display: 'block',
            }}
          />

          {/* Subtle Vignette Overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(16, 23, 43, 0.55) 0%, transparent 60%)',
              pointerEvents: 'none',
            }}
          />

          {/* Quiet Tagline Badge in Corner */}
          <div
            style={{
              position: 'absolute',
              bottom: '18px',
              left: '20px',
              color: 'rgba(255, 255, 255, 0.85)',
              fontSize: '0.82rem',
              fontFamily: "'Newsreader', Georgia, serif",
              fontStyle: 'italic',
              letterSpacing: '0.04em',
            }}
          >
            Fundemics Tutorials · Founded on Academic Discipline &amp; Human Care
          </div>
        </div>
      </div>
    </section>
  );
};
