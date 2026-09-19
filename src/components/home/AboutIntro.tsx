import React from 'react';
import { Button } from '../common/Button';
import { ArrowRight, Check, Compass } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export const AboutIntro: React.FC = () => {
  return (
    <section
      className="section section-ivory"
      style={{ borderBottom: '1px solid var(--color-border-light)' }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            alignItems: 'center',
            gap: 'clamp(2.5rem, 6vw, 4.5rem)',
          }}
        >
          {/* Left Column: Editorial Storytelling */}
          <div>
            <span className="badge badge-navy" style={{ marginBottom: '1rem' }}>
              ABOUT / OUR VISION
            </span>

            <h2
              className="headline-editorial"
              style={{
                fontSize: 'var(--text-h2)',
                color: 'var(--color-primary-navy)',
                marginBottom: '1.25rem',
                lineHeight: 1.2,
              }}
            >
              A Coaching Institute Built on Attention.
            </h2>

            <p
              style={{
                fontSize: '1.08rem',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.7,
                marginBottom: '1rem',
              }}
            >
              Fundemics Tutorials was founded in Lucknow for students who need more than a crowded lecture hall. We created a disciplined learning space where every question is heard, every homework error is analyzed, and every learner's work is genuinely seen.
            </p>

            <p
              style={{
                fontSize: '0.95rem',
                color: 'var(--color-text-muted)',
                lineHeight: 1.65,
                marginBottom: '1.75rem',
              }}
            >
              Since {siteConfig.sinceYear}, our mission has guided learners from Classes I to XII across ICSE, ISC, and CBSE syllabi. We bridge foundational understanding with high-level board preparation, giving young minds the analytical confidence to excel.
            </p>

            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2.25rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.925rem', color: 'var(--color-text-secondary)' }}>
                <Check size={18} color="var(--color-accent-green)" style={{ flexShrink: 0 }} />
                <span>Small batch sizes ensuring daily teacher-student interaction.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.925rem', color: 'var(--color-text-secondary)' }}>
                <Check size={18} color="var(--color-accent-green)" style={{ flexShrink: 0 }} />
                <span>Honest, continuous evaluation without high-pressure tactics.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.925rem', color: 'var(--color-text-secondary)' }}>
                <Check size={18} color="var(--color-accent-green)" style={{ flexShrink: 0 }} />
                <span>Dedicated morning & evening batches with safe transport conveyance.</span>
              </li>
            </ul>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <Button variant="navy" size="md" href="/vision" icon={<ArrowRight size={16} />}>
                Read Our Story & Values
              </Button>
              <Button variant="outline-navy" size="md" href="/teachers">
                Meet the Faculty
              </Button>
            </div>
          </div>

          {/* Right Column: Editorial Library Study Photography */}
          <div style={{ position: 'relative' }}>
            <div className="image-frame" style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden' }}>
              <img
                src="/assets/about_vision.jpg"
                alt="Students studying collaboratively in academic library at Fundemics Tutorials in Lucknow"
                style={{
                  width: '100%',
                  height: 'clamp(360px, 50vh, 500px)',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>

            {/* Floating Editorial Badge */}
            <div
              style={{
                position: 'absolute',
                bottom: '-20px',
                left: '20px',
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-lg)',
                padding: '1.25rem 1.5rem',
                boxShadow: 'var(--shadow-lg)',
                border: '1px solid var(--color-border-subtle)',
                maxWidth: '290px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary-navy)', fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                <Compass size={16} color="var(--color-accent-green)" /> Founded in Lucknow
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', fontWeight: 600, lineHeight: 1.4 }}>
                10+ years dedicated to building solid foundations for Classes I–XII.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
