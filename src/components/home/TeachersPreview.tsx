import React from 'react';
import { Button } from '../common/Button';
import { teachersData } from '../../data/teachers';
import { ArrowRight } from 'lucide-react';

export const TeachersPreview: React.FC = () => {
  const verifiedTeachers = teachersData.filter((t) => t.isBrochureVerified);

  return (
    <section
      className="section section-ivory"
      style={{ borderBottom: '1px solid var(--color-border-light)' }}
    >
      <div className="container">
        {/* Section Heading */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto clamp(2.5rem, 5vw, 4rem) auto' }}>
          <span className="badge badge-navy" style={{ marginBottom: '1rem' }}>
            MEET THE TEACHERS
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
            Mentors with Proven Academic Pedigree.
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>
            At Fundemics Tutorials, who teaches your child matters above all else. Our core faculty comprises educators from premier engineering institutions including IIT Dhanbad, dedicated to patient, first-principles instruction.
          </p>
        </div>

        {/* Asymmetric Split Layout: Large Faculty Portrait on Left, Verified Profiles on Right */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            alignItems: 'center',
            gap: 'clamp(2.5rem, 6vw, 4.5rem)',
          }}
        >
          {/* Left Column: Large Editorial Faculty Portrait */}
          <div style={{ position: 'relative' }}>
            <div className="image-frame" style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden' }}>
              <img
                src="/assets/faculty_mentor.jpg"
                alt="Manish K. Verma, M.Tech IIT Dhanbad, senior faculty mentor at Fundemics Tutorials Lucknow"
                style={{
                  width: '100%',
                  height: 'clamp(380px, 52vh, 520px)',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>

            {/* Floating Quote Box */}
            <div
              style={{
                position: 'absolute',
                bottom: '-20px',
                left: '20px',
                right: '20px',
                backgroundColor: 'rgba(255, 255, 255, 0.96)',
                backdropFilter: 'blur(10px)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.25rem 1.5rem',
                boxShadow: 'var(--shadow-lg)',
                border: '1px solid var(--color-border-subtle)',
              }}
            >
              <p
                className="tagline-serif"
                style={{
                  fontSize: '1rem',
                  color: 'var(--color-primary-navy)',
                  fontStyle: 'italic',
                  lineHeight: 1.5,
                  marginBottom: '0.4rem',
                }}
              >
                "When a student grasps the fundamental logic behind a theorem, hesitation dissolves into genuine confidence."
              </p>
              <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--color-accent-green-dark)' }}>
                Manish K. Verma • M.Tech (IIT Dhanbad)
              </div>
            </div>
          </div>

          {/* Right Column: Clean Verified Faculty Profiles */}
          <div>
            <h3
              style={{
                fontSize: '1.4rem',
                fontWeight: 800,
                color: 'var(--color-primary-navy)',
                marginBottom: '1.25rem',
                lineHeight: 1.3,
              }}
            >
              Verified Core Faculty Team
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.25rem' }}>
              {verifiedTeachers.map((teacher) => (
                <div
                  key={teacher.id}
                  style={{
                    padding: '1.25rem 1.5rem',
                    backgroundColor: '#FFFFFF',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--color-border-light)',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.4rem' }}>
                    <div>
                      <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-primary-navy)' }}>
                        {teacher.name}
                      </h4>
                      <div style={{ fontSize: '0.825rem', fontWeight: 700, color: 'var(--color-accent-green)', marginTop: '2px' }}>
                        {teacher.qualification}
                      </div>
                    </div>

                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        backgroundColor: 'var(--color-soft-blue)',
                        color: 'var(--color-primary-navy)',
                        padding: '0.25rem 0.65rem',
                        borderRadius: 'var(--radius-full)',
                      }}
                    >
                      {teacher.experience} Exp
                    </span>
                  </div>

                  <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.55 }}>
                    {teacher.bio}
                  </p>
                </div>
              ))}
            </div>

            <Button
              variant="navy"
              size="lg"
              href="/teachers"
              icon={<ArrowRight size={18} />}
            >
              Meet Full Faculty & Credentials
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
