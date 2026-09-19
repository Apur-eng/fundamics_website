import React from 'react';
import { Button } from '../common/Button';
import { ArrowRight, Sparkles, BookOpen } from 'lucide-react';

export const SecondaryPromiseSection: React.FC = () => {
  return (
    <section
      className="section section-white"
      style={{
        borderBottom: '1px solid var(--color-border-light)',
        paddingTop: 'clamp(3rem, 5vw, 4.5rem)',
        paddingBottom: 'clamp(3rem, 5vw, 4.5rem)',
      }}
    >
      <div className="container">
        <div
          style={{
            backgroundColor: 'var(--color-cream)',
            border: '1px solid var(--color-border-light)',
            borderRadius: 'var(--radius-xl)',
            padding: 'clamp(2rem, 4vw, 3.5rem)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            alignItems: 'center',
            gap: '2.5rem',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                backgroundColor: 'var(--color-light-green)',
                padding: '0.3rem 0.8rem',
                borderRadius: 'var(--radius-full)',
                color: 'var(--color-accent-green-dark)',
                fontSize: '0.75rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: '1rem',
              }}
            >
              <Sparkles size={14} color="var(--color-accent-green)" />
              <span>THE FUNDEMICS PROMISE</span>
            </div>

            <h2
              style={{
                fontSize: 'var(--text-h2)',
                fontWeight: 800,
                color: 'var(--color-primary-navy)',
                lineHeight: 1.2,
                marginBottom: '1rem',
              }}
            >
              Strong foundations for Classes I to XII.
            </h2>

            <p
              style={{
                fontSize: 'var(--text-body)',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.7,
                maxWidth: '540px',
                marginBottom: '1.75rem',
              }}
            >
              Fundemics Tutorials guides students through ICSE, ISC, and CBSE with personalized attention and a focus on real understanding. Your better tomorrow begins with a single enquiry.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <Button variant="green" size="md" href="/queries" icon={<ArrowRight size={16} />}>
                Enquire
              </Button>
              <Button variant="outline-navy" size="md" href="/vision">
                Our Vision
              </Button>
            </div>
          </div>

          <div
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid var(--color-border-subtle)',
              borderRadius: 'var(--radius-lg)',
              padding: '2rem',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'var(--color-light-green)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <BookOpen size={22} color="var(--color-accent-green-dark)" />
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--color-primary-navy)', fontWeight: 800 }}>
                  Personalized Guidance
                </h3>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                  A student who is known will always go further
                </span>
              </div>
            </div>

            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              We eliminate the intimidation factor in difficult subjects. Whether tackling ICSE science or senior ISC mathematics, students receive step-by-step clarity from educators who genuinely invest in their growth.
            </p>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '1rem',
                borderTop: '1px solid var(--color-border-subtle)',
                fontSize: '0.825rem',
                color: 'var(--color-primary-navy)',
                fontWeight: 700,
              }}
            >
              <span>ICSE • ISC • CBSE</span>
              <span style={{ color: 'var(--color-accent-green)' }}>Admissions Open →</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
