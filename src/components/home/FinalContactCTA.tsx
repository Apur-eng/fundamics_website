import React from 'react';
import { Button } from '../common/Button';
import { Phone, ArrowRight } from 'lucide-react';

export const FinalContactCTA: React.FC = () => {
  return (
    <section
      id="contact-cta"
      style={{
        backgroundColor: 'var(--surface-blue)',  /* Pale academic blue — closing academic frame */
        paddingTop: 'clamp(5.5rem, 10vw, 8.5rem)',
        paddingBottom: 'clamp(5.5rem, 10vw, 8.5rem)',
        borderBottom: '1px solid var(--surface-blue-border)',
        position: 'relative',
      }}
      aria-label="Contact and Admissions Inquiry"
    >
      <div className="container" style={{ maxWidth: '820px', textAlign: 'center' }}>
        {/* Eyebrow */}
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.78rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.18em',
            color: '#1B6B44',
            display: 'block',
            marginBottom: '1rem',
          }}
        >
          ADMISSIONS & GUIDANCE
        </span>

        {/* Large Editorial Heading */}
        <h2
          style={{
            fontFamily: "'Newsreader', Georgia, serif",
            fontSize: 'clamp(2.8rem, 6.2vw, 4.8rem)',
            fontWeight: 600,
            color: '#10172B',
            lineHeight: 1.08,
            letterSpacing: '-0.025em',
            margin: '0 0 1.5rem 0',
          }}
        >
          Let's Talk About Your Child's Learning.
        </h2>

        {/* Reassuring and Concise Supporting Text */}
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(1.08rem, 1.8vw, 1.25rem)',
            color: '#555149',
            lineHeight: 1.6,
            maxWidth: '620px',
            margin: '0 auto 2.75rem auto',
          }}
        >
          Whether you are evaluating batch timings, curriculum pacing for ICSE & CBSE, or seeking guidance on your child's specific academic goals, our doors and lines are open.
        </p>

        {/* Action Button: Send a Query */}
        <div style={{ marginBottom: '3rem' }}>
          <Button
            variant="green"
            size="lg"
            href="/queries"
            icon={<ArrowRight size={18} />}
          >
            Send a Query
          </Button>
        </div>

        {/* Direct Contact Phone Numbers */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 'clamp(1.5rem, 4vw, 3rem)',
            paddingTop: '2.5rem',
            borderTop: '1px solid var(--surface-blue-border)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <Phone size={18} color="#1B6B44" />
            <span style={{ fontSize: '0.9rem', color: '#706A60', fontWeight: 500 }}>Admissions Desk:</span>
            <a
              href="tel:7617018888"
              style={{
                fontSize: '1.05rem',
                color: '#10172B',
                fontWeight: 700,
                textDecoration: 'none',
                letterSpacing: '0.02em',
              }}
            >
              7617018888
            </a>
          </div>

          <div style={{ color: '#D8D2C4' }}>•</div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <Phone size={18} color="#1B6B44" />
            <span style={{ fontSize: '0.9rem', color: '#706A60', fontWeight: 500 }}>Direct Line:</span>
            <a
              href="tel:9129443266"
              style={{
                fontSize: '1.05rem',
                color: '#10172B',
                fontWeight: 700,
                textDecoration: 'none',
                letterSpacing: '0.02em',
              }}
            >
              9129443266
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
