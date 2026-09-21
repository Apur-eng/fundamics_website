import React from 'react';
import { Button } from '../common/Button';
import { Phone, ArrowRight } from 'lucide-react';
import { siteConfig, getWhatsAppUrl } from '../../data/siteConfig';

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

        {/* Action Buttons: Send a Query & WhatsApp */}
        <div
          style={{
            marginBottom: '3rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <Button
            variant="green"
            size="lg"
            href="/queries"
            icon={<ArrowRight size={18} />}
          >
            Send a Query
          </Button>

          <a
            href={getWhatsAppUrl("Hello Fundemics Tutorials, I would like to enquire about admissions and batch timings. Please share the details.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-navy btn-lg"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              backgroundColor: '#FFFFFF',
              color: '#1B6B44',
              borderColor: '#1B6B44',
              fontWeight: 700,
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.477 2 12C2 13.82 2.487 15.53 3.336 17.006L2.1 21.5L6.726 20.292C8.16 21.366 9.98 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM8.6 7.6C8.42 7.15 8.24 7.14 8.01 7.13C7.83 7.12 7.62 7.12 7.42 7.12C7.21 7.12 6.87 7.2 6.58 7.51C6.3 7.82 5.5 8.57 5.5 10.1C5.5 11.63 6.62 13.1 6.77 13.31C6.93 13.51 8.94 16.76 12.11 18C14.49 18.93 15.22 18.66 15.75 18.6C16.48 18.52 17.7 17.8 17.96 17.06C18.22 16.32 18.22 15.68 18.14 15.55C18.06 15.42 17.85 15.35 17.55 15.2C17.24 15.05 15.74 14.31 15.46 14.21C15.18 14.11 14.98 14.06 14.77 14.36C14.57 14.67 13.98 15.36 13.8 15.57C13.62 15.77 13.44 15.8 13.14 15.65C12.83 15.5 11.85 15.18 10.69 14.15C9.79 13.34 9.18 12.35 9.03 12.04C8.88 11.73 9.01 11.57 9.17 11.41C9.31 11.27 9.48 11.05 9.63 10.87C9.78 10.69 9.84 10.56 9.94 10.36C10.04 10.16 9.99 9.98 9.91 9.83C9.84 9.68 9.25 8.16 8.99 7.56L8.6 7.6Z"
                fill="#1B6B44"
              />
            </svg>
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* Direct Contact Phone & WhatsApp Numbers */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 'clamp(1rem, 3vw, 2.5rem)',
            paddingTop: '2.5rem',
            borderTop: '1px solid var(--surface-blue-border)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <Phone size={18} color="#1B6B44" />
            <span style={{ fontSize: '0.9rem', color: '#706A60', fontWeight: 500 }}>Call Desk:</span>
            <a
              href={siteConfig.phones.primary}
              style={{
                fontSize: '1.05rem',
                color: '#10172B',
                fontWeight: 700,
                textDecoration: 'none',
                letterSpacing: '0.02em',
              }}
            >
              {siteConfig.phones.displayPrimary}
            </a>
          </div>

          <div style={{ color: '#D8D2C4' }}>•</div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <Phone size={18} color="#1B6B44" />
            <span style={{ fontSize: '0.9rem', color: '#706A60', fontWeight: 500 }}>Direct Line:</span>
            <a
              href={siteConfig.phones.secondary}
              style={{
                fontSize: '1.05rem',
                color: '#10172B',
                fontWeight: 700,
                textDecoration: 'none',
                letterSpacing: '0.02em',
              }}
            >
              {siteConfig.phones.displaySecondary}
            </a>
          </div>

          <div style={{ color: '#D8D2C4' }}>•</div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <span style={{ fontSize: '1.05rem', lineHeight: 1 }}>💬</span>
            <span style={{ fontSize: '0.9rem', color: '#706A60', fontWeight: 500 }}>WhatsApp:</span>
            <a
              href={siteConfig.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: '1.05rem',
                color: '#1B6B44',
                fontWeight: 700,
                textDecoration: 'none',
                letterSpacing: '0.02em',
              }}
            >
              {siteConfig.whatsapp.display}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
