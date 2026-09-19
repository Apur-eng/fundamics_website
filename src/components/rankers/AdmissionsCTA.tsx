import React from 'react';
import { Link } from '../../context/RouterContext';
import { ArrowRight, Phone } from 'lucide-react';

export const AdmissionsCTA: React.FC = () => {
  return (
    <section
      className="admissions-cta-section"
      style={{
        backgroundColor: '#10172B',
        color: '#FFFFFF',
        padding: 'clamp(4.5rem, 8vw, 7rem) 0',
        position: 'relative',
        overflow: 'hidden',
      }}
      aria-label="Admissions Call to Action"
    >
      {/* Background Architectural Accent */}
      <div
        style={{
          position: 'absolute',
          top: '-30%',
          right: '-10%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          border: '1px solid rgba(255, 255, 255, 0.04)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ maxWidth: '1240px', position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center' }}>
          {/* Eyebrow in Warm Gold */}
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.8rem',
              fontWeight: 800,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#E6AA32',
              marginBottom: '1rem',
            }}
          >
            ADMISSIONS OPEN
          </div>

          {/* Headline */}
          <h2
            style={{
              fontFamily: "'Newsreader', Georgia, serif",
              fontSize: 'clamp(2.8rem, 5.2vw, 4.2rem)',
              fontWeight: 600,
              color: '#FFFFFF',
              lineHeight: 1.08,
              letterSpacing: '-0.025em',
              margin: '0 0 1.25rem 0',
            }}
          >
            Be Our Next
            <br />
            Academic Achiever.
          </h2>

          {/* Supporting Copy */}
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1.05rem, 1.4vw, 1.2rem)',
              color: 'rgba(255, 255, 255, 0.82)',
              lineHeight: 1.65,
              margin: '0 auto 2.5rem auto',
              maxWidth: '620px',
            }}
          >
            Build your academic journey with focused learning, personal attention, and consistent
            academic practice.
          </p>

          {/* Action Buttons */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              flexWrap: 'wrap',
            }}
          >
            <Link
              href="/queries"
              style={{
                backgroundColor: '#1B6B44',
                color: '#FFFFFF',
                padding: '0.95rem 2.25rem',
                borderRadius: '9999px',
                fontFamily: 'var(--font-display)',
                fontSize: '0.95rem',
                fontWeight: 700,
                letterSpacing: '0.02em',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                textDecoration: 'none',
                boxShadow: '0 10px 25px rgba(27, 107, 68, 0.35)',
                transition: 'all 250ms ease',
              }}
              className="admissions-primary-btn"
            >
              <span>Enquire for Admissions</span>
              <ArrowRight size={17} />
            </Link>

            <a
              href="tel:7617018888"
              style={{
                backgroundColor: 'transparent',
                color: '#FFFFFF',
                padding: '0.95rem 2rem',
                borderRadius: '9999px',
                border: '1.5px solid rgba(255, 255, 255, 0.25)',
                fontFamily: 'var(--font-display)',
                fontSize: '0.95rem',
                fontWeight: 700,
                letterSpacing: '0.02em',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                textDecoration: 'none',
                transition: 'all 250ms ease',
              }}
              className="admissions-phone-btn"
            >
              <Phone size={16} color="#E6AA32" />
              <span>Call 7617018888</span>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .admissions-primary-btn:hover {
          background-color: #238455 !important;
          transform: translateY(-2px);
          box-shadow: 0 14px 30px rgba(27, 107, 68, 0.45) !important;
        }
        .admissions-phone-btn:hover {
          background-color: rgba(255, 255, 255, 0.08) !important;
          border-color: #FFFFFF !important;
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
};
