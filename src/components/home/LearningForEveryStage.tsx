import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from '../../context/RouterContext';

interface AcademicStage {
  number: string;
  title: string;
  classes: string;
  tagline: string;
  subjects: string;
  image: string;
  imageAlt: string;
  position: 'photo-top' | 'photo-bottom';
}

const stages: AcademicStage[] = [
  {
    number: '01',
    title: 'PRIMARY',
    classes: 'Classes I–V',
    tagline: 'Building curiosity, confidence and strong academic foundations.',
    subjects: 'Mathematics · Science · English · Social Studies',
    image: '/assets/student_diya.jpg',
    imageAlt: 'Primary student developing foundational curiosity and reading at Fundemics Tutorials',
    position: 'photo-top',
  },
  {
    number: '02',
    title: 'MIDDLE SCHOOL',
    classes: 'Classes VI–VIII',
    tagline: 'Transitioning from basics to analytical problem solving and formula proofs.',
    subjects: 'Mathematics · Physics · Chemistry · Biology · English',
    image: '/assets/student_aarav.jpg',
    imageAlt: 'Middle school student working on conceptual derivations at Fundemics Tutorials',
    position: 'photo-bottom',
  },
  {
    number: '03',
    title: 'SECONDARY',
    classes: 'Classes IX–X',
    tagline: 'Comprehensive board examination mastery and timed numerical precision.',
    subjects: 'Mathematics · Physics · Chemistry · Biology · English',
    image: '/assets/student_rohan.jpg',
    imageAlt: 'Secondary student preparing for board examination distinction at Fundemics Tutorials',
    position: 'photo-top',
  },
  {
    number: '04',
    title: 'SENIOR SECONDARY',
    classes: 'Classes XI–XII',
    tagline: 'Deep conceptual depth in Science & Commerce with dual board and entrance focus.',
    subjects: 'Physics · Chemistry · Mathematics · Biology · Economics',
    image: '/assets/student_ananya.jpg',
    imageAlt: 'Senior secondary student solving advanced numerical derivations at Fundemics Tutorials',
    position: 'photo-bottom',
  },
];

export const LearningForEveryStage: React.FC = () => {
  return (
    <section
      id="learning-stages"
      style={{
        backgroundColor: '#FAF8F5',
        position: 'relative',
        paddingTop: 'clamp(5rem, 9vw, 8rem)',
        paddingBottom: 'clamp(5rem, 9vw, 8rem)',
        overflow: 'hidden',
        borderBottom: '1px solid #EBE5DA',
      }}
      aria-label="Learning for Every Stage"
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Section Header */}
        <div style={{ maxWidth: '800px', marginBottom: 'clamp(3.5rem, 7vw, 5.5rem)' }}>
          {/* Eyebrow: ACADEMIC SPECTRUM */}
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
              ACADEMIC SPECTRUM
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
              ICSE · ISC · CBSE
            </span>
          </div>

          {/* Large Serif Title */}
          <h2
            style={{
              fontFamily: "'Newsreader', Georgia, serif",
              fontSize: 'clamp(2.6rem, 5vw, 4.2rem)',
              fontWeight: 600,
              color: '#10172B',
              lineHeight: 1.08,
              letterSpacing: '-0.025em',
              margin: '0 0 1rem 0',
            }}
          >
            Learning for Every Stage
          </h2>

          {/* Supporting Text */}
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1.1rem, 1.6vw, 1.28rem)',
              color: '#555149',
              lineHeight: 1.55,
              margin: 0,
              maxWidth: '680px',
            }}
          >
            From strong foundations to senior secondary excellence.
          </p>
        </div>

        {/* ========================================================
            DESKTOP DESIGN: HORIZONTAL CONNECTED ACADEMIC JOURNEY
            01 (Photo Top) ──→ 02 (Photo Bottom) ──→ 03 (Photo Top) ──→ 04 (Photo Bottom)
           ======================================================== */}
        <div className="journey-desktop-container" style={{ position: 'relative' }}>
          {/* Continuous Organic Curved SVG Path Physically Connecting the 4 Milestones */}
          <svg
            className="journey-curved-svg-path"
            viewBox="0 0 1200 480"
            fill="none"
            preserveAspectRatio="none"
            style={{
              position: 'absolute',
              top: '40px',
              left: '5%',
              right: '5%',
              width: '90%',
              height: '400px',
              pointerEvents: 'none',
              zIndex: 1,
            }}
          >
            <path
              d="M 60,240 C 200,240 220,110 380,110 C 540,110 560,240 720,240 C 880,240 900,110 1080,110"
              stroke="#D8D0C2"
              strokeWidth="2"
              strokeDasharray="4 6"
            />
            {/* Subtle emerald highlight thread */}
            <path
              d="M 60,240 C 200,240 220,110 380,110 C 540,110 560,240 720,240 C 880,240 900,110 1080,110"
              stroke="#1B6B44"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="20 180"
              opacity="0.6"
            />
          </svg>

          {/* 4 Connected Milestone Columns with Alternating Rhythms */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 'clamp(1.5rem, 2.5vw, 2.5rem)',
              position: 'relative',
              zIndex: 2,
            }}
          >
            {stages.map((stage, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <div
                  key={stage.number}
                  className="academic-stage-col"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginTop: isEven ? '65px' : '0px',
                    transition: 'transform 350ms cubic-bezier(0.2, 0.9, 0.3, 1)',
                  }}
                >
                  {/* Photo Top for stages 01 & 03 */}
                  {stage.position === 'photo-top' && (
                    <div
                      className="stage-photo-frame"
                      style={{
                        position: 'relative',
                        width: '100%',
                        height: '210px',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        marginBottom: '1.4rem',
                        backgroundColor: '#10172B',
                        boxShadow: '0 8px 24px rgba(16, 23, 43, 0.08)',
                      }}
                    >
                      <img
                        src={stage.image}
                        alt={stage.imageAlt}
                        className="stage-photo-img"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          objectPosition: 'top center',
                          display: 'block',
                          transition: 'transform 500ms cubic-bezier(0.2, 0.9, 0.3, 1)',
                        }}
                      />
                      <div
                        style={{
                          position: 'absolute',
                          inset: 0,
                          background: 'linear-gradient(to top, rgba(16, 23, 43, 0.45) 0%, transparent 60%)',
                          pointerEvents: 'none',
                        }}
                      />
                    </div>
                  )}

                  {/* Milestone Node & Numbering */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.85rem',
                      marginBottom: '0.75rem',
                    }}
                  >
                    <span
                      className="stage-number"
                      style={{
                        fontFamily: "'Newsreader', Georgia, serif",
                        fontSize: '2.75rem',
                        fontWeight: 600,
                        color: '#1B6B44',
                        lineHeight: 1,
                        letterSpacing: '-0.03em',
                        transition: 'all 300ms ease',
                      }}
                    >
                      {stage.number}
                    </span>
                    <div
                      className="stage-node-bullet"
                      style={{
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        backgroundColor: '#FFFFFF',
                        border: '3px solid #1B6B44',
                        boxShadow: '0 0 0 3px #FAF8F5',
                        transition: 'all 300ms ease',
                      }}
                    />
                    <div
                      style={{
                        height: '1px',
                        flex: 1,
                        backgroundColor: '#E5DFD4',
                      }}
                    />
                  </div>

                  {/* Stage Title + Class Range */}
                  <div style={{ marginBottom: '0.65rem' }}>
                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.2rem',
                        fontWeight: 800,
                        letterSpacing: '0.03em',
                        color: '#10172B',
                        margin: '0 0 0.3rem 0',
                      }}
                    >
                      {stage.title}
                    </h3>
                    <div
                      style={{
                        display: 'inline-block',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        color: '#8C6D23',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {stage.classes}
                    </div>
                  </div>

                  {/* Short Narrative Line */}
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.88rem',
                      lineHeight: 1.55,
                      color: '#555149',
                      margin: '0 0 1rem 0',
                    }}
                  >
                    "{stage.tagline}"
                  </p>

                  {/* Key Subjects */}
                  <div
                    style={{
                      borderTop: '1px solid #EBE5DA',
                      paddingTop: '0.75rem',
                      marginBottom: stage.position === 'photo-bottom' ? '1.4rem' : '0',
                    }}
                  >
                    <div
                      style={{
                        fontSize: '0.68rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        color: '#827C72',
                        marginBottom: '0.3rem',
                      }}
                    >
                      Subjects:
                    </div>
                    <div
                      style={{
                        fontSize: '0.76rem',
                        color: '#10172B',
                        fontWeight: 500,
                        lineHeight: 1.4,
                      }}
                    >
                      {stage.subjects}
                    </div>
                  </div>

                  {/* Photo Bottom for stages 02 & 04 (Senior destination milestone) */}
                  {stage.position === 'photo-bottom' && (
                    <div
                      className="stage-photo-frame"
                      style={{
                        position: 'relative',
                        width: '100%',
                        height: '210px',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        backgroundColor: '#10172B',
                        boxShadow: '0 8px 24px rgba(16, 23, 43, 0.08)',
                      }}
                    >
                      <img
                        src={stage.image}
                        alt={stage.imageAlt}
                        className="stage-photo-img"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          objectPosition: 'top center',
                          display: 'block',
                          transition: 'transform 500ms cubic-bezier(0.2, 0.9, 0.3, 1)',
                        }}
                      />
                      <div
                        style={{
                          position: 'absolute',
                          inset: 0,
                          background: 'linear-gradient(to top, rgba(16, 23, 43, 0.45) 0%, transparent 60%)',
                          pointerEvents: 'none',
                        }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================
            MOBILE DESIGN: VERTICAL CONNECTED ACADEMIC PATH
           ======================================================== */}
        <div className="journey-mobile-container">
          <div style={{ position: 'relative', paddingLeft: '28px' }}>
            {/* Continuous Vertical Connecting Line */}
            <div
              style={{
                position: 'absolute',
                top: '20px',
                bottom: '40px',
                left: '7px',
                width: '2px',
                backgroundColor: '#D8D0C2',
                zIndex: 1,
              }}
            />

            {/* Stages Stacked Vertically with Visible Path */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              {stages.map((stage) => (
                <div key={stage.number} style={{ position: 'relative' }}>
                  {/* Connected Node Bullet on the left line */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '8px',
                      left: '-28px',
                      width: '16px',
                      height: '16px',
                      borderRadius: '50%',
                      backgroundColor: '#1B6B44',
                      border: '3px solid #FFFFFF',
                      boxShadow: '0 0 0 2px #1B6B44',
                      zIndex: 2,
                    }}
                  />

                  {/* Stage Number & Title */}
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.65rem', marginBottom: '0.4rem' }}>
                    <span
                      style={{
                        fontFamily: "'Newsreader', Georgia, serif",
                        fontSize: '2rem',
                        fontWeight: 600,
                        color: '#1B6B44',
                        lineHeight: 1,
                      }}
                    >
                      {stage.number}
                    </span>
                    <span style={{ color: '#D4CEBF' }}>•</span>
                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.2rem',
                        fontWeight: 800,
                        color: '#10172B',
                        margin: 0,
                      }}
                    >
                      {stage.title}
                    </h3>
                  </div>

                  {/* Class Range */}
                  <div
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      color: '#8C6D23',
                      marginBottom: '0.85rem',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {stage.classes}
                  </div>

                  {/* Large Photograph */}
                  <div
                    style={{
                      width: '100%',
                      height: '160px',
                      borderRadius: '14px',
                      overflow: 'hidden',
                      marginBottom: '1rem',
                      backgroundColor: '#10172B',
                    }}
                  >
                    <img
                      src={stage.image}
                      alt={stage.imageAlt}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'top center',
                        display: 'block',
                      }}
                    />
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.9rem',
                      color: '#555149',
                      lineHeight: 1.55,
                      margin: '0 0 0.85rem 0',
                    }}
                  >
                    "{stage.tagline}"
                  </p>

                  {/* Subjects */}
                  <div
                    style={{
                      fontSize: '0.78rem',
                      color: '#10172B',
                      fontWeight: 500,
                      borderTop: '1px solid #EBE5DA',
                      paddingTop: '0.6rem',
                    }}
                  >
                    <strong style={{ color: '#706A60' }}>Subjects: </strong>
                    {stage.subjects}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section Link */}
        <div
          style={{
            marginTop: 'clamp(3rem, 6vw, 5rem)',
            paddingTop: '2rem',
            borderTop: '1px solid #EAE3D6',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.25rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <Sparkles size={16} color="#1B6B44" />
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.9rem',
                color: '#555149',
                fontWeight: 500,
              }}
            >
              Tailored curriculum pacing for ICSE, ISC & CBSE boards across Lucknow.
            </span>
          </div>

          <Link
            href="/queries"
            className="journey-cta-link"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#10172B',
              fontWeight: 700,
              fontSize: '0.92rem',
              letterSpacing: '0.02em',
              textDecoration: 'none',
              transition: 'all 200ms ease',
            }}
          >
            <span>Inquire About Admissions & Batches</span>
            <ArrowRight size={16} color="#1B6B44" />
          </Link>
        </div>
      </div>

      {/* Scoped CSS */}
      <style>{`
        .journey-desktop-container {
          display: block;
        }
        .journey-mobile-container {
          display: none;
        }

        @media (max-width: 1024px) {
          .journey-desktop-container {
            display: none !important;
          }
          .journey-mobile-container {
            display: block !important;
          }
        }

        /* Desktop Hover Interactions */
        .academic-stage-col:hover .stage-number {
          color: #15803D !important;
          transform: scale(1.08) translateY(-2px);
          text-shadow: 0 4px 14px rgba(27, 107, 68, 0.2);
        }

        .academic-stage-col:hover .stage-node-bullet {
          background-color: #1B6B44 !important;
          border-color: #E6AA32 !important;
          transform: scale(1.3);
          box-shadow: 0 0 0 5px rgba(27, 107, 68, 0.18) !important;
        }

        .academic-stage-col:hover .stage-photo-img {
          transform: scale(1.05);
        }

        .academic-stage-col:hover .stage-photo-frame {
          box-shadow: 0 14px 32px rgba(16, 23, 43, 0.12) !important;
        }

        .journey-cta-link:hover {
          color: #1B6B44 !important;
          transform: translateX(3px);
        }

        /* Reduced Motion */
        @media (prefers-reduced-motion: reduce) {
          .academic-stage-col,
          .stage-number,
          .stage-node-bullet,
          .stage-photo-img,
          .stage-photo-frame,
          .journey-cta-link {
            transition-duration: 0.01ms !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
};
