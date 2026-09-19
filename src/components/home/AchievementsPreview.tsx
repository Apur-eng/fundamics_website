import React from 'react';
import { Button } from '../common/Button';
import { rankersData } from '../../data/rankers';
import { ArrowRight, Trophy } from 'lucide-react';

export const AchievementsPreview: React.FC = () => {
  const topRankers = rankersData.slice(0, 3);

  return (
    <section
      className="section section-white"
      style={{ borderBottom: '1px solid var(--color-border-light)' }}
    >
      <div className="container">
        {/* Section Eyebrow & Title */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto clamp(2.5rem, 5vw, 4rem) auto' }}>
          <span className="badge badge-navy" style={{ marginBottom: '1rem' }}>
            STUDENT ACHIEVEMENTS
          </span>
          <h2
            className="headline-editorial"
            style={{
              fontSize: 'var(--text-h2)',
              color: 'var(--color-primary-navy)',
              lineHeight: 1.2,
              marginBottom: '1rem',
            }}
          >
            Celebrating Board Distinctions & Academic Merit.
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>
            Results are the natural byproduct of rigorous fundamentals, steady practice, and patient guidance. Year after year, Fundemics students achieve top percentile scores across ICSE, ISC, and CBSE examinations in Lucknow.
          </p>
        </div>

        {/* Asymmetric Image-Led Split Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            alignItems: 'center',
            gap: 'clamp(2.5rem, 6vw, 4.5rem)',
            marginBottom: '3rem',
          }}
        >
          {/* Left: Editorial Photography with Overlaid Board Scores */}
          <div style={{ position: 'relative' }}>
            <div className="image-frame" style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden' }}>
              <img
                src="/assets/achievers.jpg"
                alt="High school boy and girl students with textbooks celebrating board distinction at Fundemics Tutorials in Lucknow"
                style={{
                  width: '100%',
                  height: 'clamp(380px, 52vh, 520px)',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>

            {/* Overlaid Score Badge 1 (Top Left) */}
            <div
              style={{
                position: 'absolute',
                top: '24px',
                left: '24px',
                backgroundColor: 'rgba(27, 33, 82, 0.88)',
                backdropFilter: 'blur(10px)',
                color: '#FFFFFF',
                padding: '0.85rem 1.25rem',
                borderRadius: 'var(--radius-md)',
                boxShadow: 'var(--shadow-lg)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
            >
              <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-hero-accent)', lineHeight: 1 }}>
                98.4%
              </div>
              <div style={{ fontSize: '0.725rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', opacity: 0.9, marginTop: '2px' }}>
                ICSE Top Percentile
              </div>
            </div>

            {/* Overlaid Score Badge 2 (Bottom Right) */}
            <div
              style={{
                position: 'absolute',
                bottom: '-20px',
                right: '20px',
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-lg)',
                padding: '1.25rem 1.5rem',
                boxShadow: 'var(--shadow-lg)',
                border: '1px solid var(--color-border-subtle)',
                maxWidth: '280px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-accent-green)', fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                <Trophy size={16} /> Board Examination Merit
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', fontWeight: 600, lineHeight: 1.4 }}>
                100+ Rankers guided with consistent 90%+ scores in Lucknow.
              </p>
            </div>
          </div>

          {/* Right: Pedagogy for Board Success & Featured Rankers */}
          <div>
            <h3
              style={{
                fontSize: '1.45rem',
                fontWeight: 800,
                color: 'var(--color-primary-navy)',
                marginBottom: '1rem',
                lineHeight: 1.3,
              }}
            >
              The Foundation Behind the Distinctions.
            </h3>

            <p style={{ fontSize: '0.975rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: '1.75rem' }}>
              We do not believe in last-minute cram sessions. High board marks are built through structured topic mastery, weekly chapter revisions, and learning how examiners award marks for clear step-by-step solutions.
            </p>

            {/* Featured Student Achievements Snippets */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.25rem' }}>
              {topRankers.map((ranker) => (
                <div
                  key={ranker.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1rem 1.25rem',
                    backgroundColor: 'var(--color-ivory)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--color-border-subtle)',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-accent-green)', letterSpacing: '0.04em' }}>
                        {ranker.board} • {ranker.class}
                      </span>
                      <span style={{ opacity: 0.4 }}>•</span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                        {ranker.achievement}
                      </span>
                    </div>
                    <div style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--color-primary-navy)' }}>
                      {ranker.name}
                    </div>
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--color-primary-navy)' }}>
                      {ranker.percentage}%
                    </div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>
                      Verified Result
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Button
              variant="navy"
              size="lg"
              href="/rankers"
              icon={<ArrowRight size={18} />}
            >
              View Full Rankers & Achievers List
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
