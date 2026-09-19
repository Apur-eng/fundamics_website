import React from 'react';
import { Button } from '../common/Button';
import { BookOpen, GraduationCap, Bus, CheckCircle2, ArrowRight } from 'lucide-react';

export const WhyFundemics: React.FC = () => {
  return (
    <section
      className="section section-white"
      style={{ borderBottom: '1px solid var(--color-border-light)' }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: 'clamp(2.5rem, 6vw, 4.5rem)',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Authentic Editorial Mentorship Photography */}
          <div style={{ position: 'relative' }}>
            <div className="image-frame" style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden' }}>
              <img
                src="/assets/mentorship.jpg"
                alt="Teacher patiently guiding a secondary student at Fundemics Tutorials in Lucknow"
                style={{
                  width: '100%',
                  height: 'clamp(360px, 50vh, 520px)',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>

            {/* Floating Trust Badge */}
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
                <CheckCircle2 size={16} /> Personal Care
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', fontWeight: 600, lineHeight: 1.4 }}>
                Small batch sizes ensure every student's doubts are answered daily.
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Value Proposition */}
          <div>
            <span className="badge badge-navy" style={{ marginBottom: '1rem' }}>
              THE FUNDEMICS ADVANTAGE
            </span>

            <h2
              className="headline-editorial"
              style={{
                fontSize: 'var(--text-h2)',
                color: 'var(--color-primary-navy)',
                marginBottom: '1rem',
                lineHeight: 1.25,
              }}
            >
              Why Families in Lucknow Trust Fundemics.
            </h2>

            <p
              style={{
                fontSize: '1.05rem',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.7,
                marginBottom: '2rem',
              }}
            >
              Education is not a commercial transaction. We provide disciplined, personalized mentorship grounded in solid fundamentals, transparent progress, and continuous care.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
              {/* Feature 1 */}
              <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--color-soft-blue)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <BookOpen size={22} color="var(--color-primary-navy)" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-primary-navy)' }}>
                    Strong Fundamentals First
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.6, marginTop: '2px' }}>
                    No blind shortcuts or rote memorization. We teach the derivations and foundational principles so students master concepts for life.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--color-light-green)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <GraduationCap size={22} color="var(--color-accent-green-dark)" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-primary-navy)' }}>
                    IIT & Engineering Alumni Faculty
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.6, marginTop: '2px' }}>
                    Our mentors include alumni from IIT Dhanbad and premier engineering programs with proven track records of board guidance.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--color-soft-blue)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Bus size={22} color="var(--color-primary-navy)" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-primary-navy)' }}>
                    Morning Batches & Safe Transport
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.6, marginTop: '2px' }}>
                    Convenient early morning batch options to fit school routines, paired with safe transport across prime Lucknow neighborhoods.
                  </p>
                </div>
              </div>
            </div>

            <Button variant="navy" size="md" href="/vision" icon={<ArrowRight size={16} />}>
              Discover Our Philosophy
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
