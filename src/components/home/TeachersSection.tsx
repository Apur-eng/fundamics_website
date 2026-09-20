import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from '../../context/RouterContext';

interface FacultyMember {
  number: string;
  name: string;
  credentials: string;
  institution: string;
  specialization: string;
  experience: string;
  bio: string;
  image: string;
  imageAlt: string;
  isPrimary?: boolean;
}

const facultyMembers: FacultyMember[] = [
  {
    number: '01',
    name: 'Mayank Aggarwal',
    credentials: 'Founder & Director',
    institution: 'Fundemics Tutorials',
    specialization: 'Head of Physics & Mathematics',
    experience: 'Founder & Director',
    bio: 'Leads the academic direction of Fundemics Tutorials, with responsibility for Physics and Mathematics and the institute’s broader teaching standards.',
    image: '/assets/mayank_aggarwal.jpeg',
    imageAlt: 'Mayank Aggarwal, Founder & Director, Head of Physics & Mathematics at Fundemics Tutorials Lucknow',
    isPrimary: true,
  },
  {
    number: '02',
    name: 'Manish K. Verma',
    credentials: 'Co-Founder · B.Tech, M.Tech',
    institution: 'IIT Dhanbad',
    specialization: 'Physics & Advanced Sciences',
    experience: 'Co-Founder',
    bio: 'Alumnus of Indian Institute of Technology (IIT Dhanbad). Co-founder and senior mentor specializing in breaking down complex physical phenomena and mathematical models into crystal-clear intuitive frameworks.',
    image: '/assets/manish_k_verma.jpeg',
    imageAlt: 'Manish K. Verma, Co-Founder, B.Tech, M.Tech IIT Dhanbad at Fundemics Tutorials Lucknow',
    isPrimary: false,
  },
];

export const TeachersSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="teachers"
      style={{
        backgroundColor: 'var(--surface-white)',  /* Pure white — faculty photography backdrop */
        paddingTop: 'clamp(5rem, 8.5vw, 8rem)',
        paddingBottom: 'clamp(5rem, 8.5vw, 8rem)',
        borderBottom: '1px solid #EBE5DA',
        position: 'relative',
      }}
      aria-label="Meet the Teachers"
    >
      <div className="container">
        {/* ==================================================================== */}
        {/* SECTION HEADER                                                       */}
        {/* ==================================================================== */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '1.5rem',
            marginBottom: 'clamp(3.5rem, 6vw, 5rem)',
            borderBottom: '1px solid #EBE5DA',
            paddingBottom: 'clamp(2rem, 3.5vw, 2.75rem)',
          }}
        >
          <div style={{ maxWidth: '720px' }}>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.78rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                color: '#1B6B44',
                display: 'block',
                marginBottom: '0.85rem',
              }}
            >
              FACULTY PEDIGREE
            </span>

            <h2
              style={{
                fontFamily: "'Newsreader', Georgia, serif",
                fontSize: 'clamp(2.5rem, 4.6vw, 4rem)',
                fontWeight: 600,
                color: '#10172B',
                lineHeight: 1.08,
                letterSpacing: '-0.025em',
                margin: '0 0 1rem 0',
              }}
            >
              Meet the Teachers
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(1.05rem, 1.4vw, 1.2rem)',
                color: '#555149',
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              Who teaches your child matters most. Our mentors combine strong academic credentials with years of classroom mentorship.
            </p>
          </div>

          <Link
            href="/teachers"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              color: '#10172B',
              fontFamily: 'var(--font-display)',
              fontSize: '0.92rem',
              fontWeight: 700,
              letterSpacing: '0.02em',
              textDecoration: 'none',
              borderBottom: '2px solid #1B6B44',
              paddingBottom: '4px',
              transition: 'all 200ms ease',
            }}
            className="faculty-header-cta"
          >
            <span>Learn More About Our Mentors</span>
            <ArrowRight size={16} color="#1B6B44" className="faculty-header-arrow" style={{ transition: 'transform 200ms ease' }} />
          </Link>
        </div>

        {/* ==================================================================== */}
        {/* ASYMMETRIC TWO-PERSON EDITORIAL FACULTY SPREAD                       */}
        {/* ==================================================================== */}
        <div className="faculty-editorial-spread">
          {/* PROFILE 01 — MANISH K. VERMA (FEATURED PRIMARY) */}
          {facultyMembers[0] && (
            <div
              className="faculty-card faculty-card-primary"
              onMouseEnter={() => setHoveredIndex(0)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Editorial Image Frame */}
              <div
                className="faculty-image-container faculty-img-large"
                style={{
                  position: 'relative',
                  width: '100%',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  backgroundColor: '#10172B',
                  boxShadow: '0 12px 36px rgba(16, 23, 43, 0.08), 0 2px 8px rgba(16, 23, 43, 0.04)',
                  border: '1px solid #E5DFD4',
                  marginBottom: '1.75rem',
                }}
              >
                <img
                  src={facultyMembers[0].image}
                  alt={facultyMembers[0].imageAlt}
                  className="faculty-photo"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 20%',
                    display: 'block',
                    transition: 'transform 500ms cubic-bezier(0.16, 1, 0.3, 1)',
                    transform: hoveredIndex === 0 ? 'scale(1.025)' : 'scale(1)',
                  }}
                />

                {/* Subtle Gradient Shadow Base */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(16, 23, 43, 0.4) 0%, transparent 40%)',
                    pointerEvents: 'none',
                  }}
                />

                {/* Corner Founder Tag */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '16px',
                    left: '16px',
                    backgroundColor: 'rgba(16, 23, 43, 0.88)',
                    backdropFilter: 'blur(8px)',
                    padding: '0.45rem 0.95rem',
                    borderRadius: '6px',
                    color: '#FFFFFF',
                    fontSize: '0.78rem',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                  }}
                >
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: '#1B6B44',
                    }}
                  />
                  <span>Founder &amp; Director</span>
                </div>
              </div>

              {/* Profile Details */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {/* 01 / LEADERSHIP Eyebrow */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '0.5rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.76rem',
                      fontWeight: 700,
                      letterSpacing: '0.18em',
                      color: '#1B6B44',
                      textTransform: 'uppercase',
                    }}
                  >
                    01 / LEADERSHIP
                  </span>
                  <span style={{ color: '#D4CEBF' }}>•</span>
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.78rem',
                      color: '#706A60',
                      fontWeight: 600,
                    }}
                  >
                    FOUNDER &amp; DIRECTOR
                  </span>
                </div>

                {/* Name */}
                <h3
                  style={{
                    fontFamily: "'Newsreader', Georgia, serif",
                    fontSize: 'clamp(2rem, 3.2vw, 2.7rem)',
                    fontWeight: 600,
                    color: '#10172B',
                    lineHeight: 1.15,
                    letterSpacing: '-0.02em',
                    margin: '0 0 0.4rem 0',
                    transition: 'color 200ms ease',
                  }}
                >
                  {facultyMembers[0].name}
                </h3>

                {/* Credentials & Institution */}
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.86rem',
                    fontWeight: 700,
                    color: '#1B6B44',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    marginBottom: '0.75rem',
                  }}
                >
                  {facultyMembers[0].credentials} · {facultyMembers[0].institution}
                </div>

                {/* Specialization */}
                <div
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1.02rem',
                    fontWeight: 600,
                    color: '#10172B',
                    marginBottom: '0.65rem',
                  }}
                >
                  {facultyMembers[0].specialization}
                </div>

                {/* Short Bio */}
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.94rem',
                    color: '#555149',
                    lineHeight: 1.62,
                    margin: '0 0 1.25rem 0',
                    maxWidth: '520px',
                  }}
                >
                  {facultyMembers[0].bio}
                </p>

                {/* Subtle Animated Emerald Accent Line */}
                <div
                  style={{
                    height: '2px',
                    width: hoveredIndex === 0 ? '64px' : '36px',
                    backgroundColor: '#1B6B44',
                    borderRadius: '1px',
                    transition: 'width 300ms ease',
                  }}
                />
              </div>
            </div>
          )}

          {/* PROFILE 02 — MAYANK AGARWAL (SECONDARY OFFSET PROFILE) */}
          {facultyMembers[1] && (
            <div
              className="faculty-card faculty-card-secondary"
              onMouseEnter={() => setHoveredIndex(1)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Editorial Image Frame */}
              <div
                className="faculty-image-container faculty-img-secondary"
                style={{
                  position: 'relative',
                  width: '100%',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  backgroundColor: '#10172B',
                  boxShadow: '0 12px 36px rgba(16, 23, 43, 0.08), 0 2px 8px rgba(16, 23, 43, 0.04)',
                  border: '1px solid #E5DFD4',
                  marginBottom: '1.75rem',
                }}
              >
                <img
                  src={facultyMembers[1].image}
                  alt={facultyMembers[1].imageAlt}
                  className="faculty-photo"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 20%',
                    display: 'block',
                    transition: 'transform 500ms cubic-bezier(0.16, 1, 0.3, 1)',
                    transform: hoveredIndex === 1 ? 'scale(1.025)' : 'scale(1)',
                  }}
                />

                {/* Subtle Gradient Shadow Base */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(16, 23, 43, 0.4) 0%, transparent 40%)',
                    pointerEvents: 'none',
                  }}
                />

                {/* Corner Discipline Tag */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '16px',
                    left: '16px',
                    backgroundColor: 'rgba(16, 23, 43, 0.88)',
                    backdropFilter: 'blur(8px)',
                    padding: '0.45rem 0.95rem',
                    borderRadius: '6px',
                    color: '#FFFFFF',
                    fontSize: '0.78rem',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                  }}
                >
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: '#1B6B44',
                    }}
                  />
                  <span>Co-Founder · IIT Dhanbad Alumnus</span>
                </div>
              </div>

              {/* Profile Details */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {/* 02 / LEADERSHIP Eyebrow */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '0.5rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.76rem',
                      fontWeight: 700,
                      letterSpacing: '0.18em',
                      color: '#1B6B44',
                      textTransform: 'uppercase',
                    }}
                  >
                    02 / LEADERSHIP
                  </span>
                  <span style={{ color: '#D4CEBF' }}>•</span>
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.78rem',
                      color: '#706A60',
                      fontWeight: 600,
                    }}
                  >
                    CO-FOUNDER
                  </span>
                </div>

                {/* Name */}
                <h3
                  style={{
                    fontFamily: "'Newsreader', Georgia, serif",
                    fontSize: 'clamp(1.85rem, 2.6vw, 2.3rem)',
                    fontWeight: 600,
                    color: '#10172B',
                    lineHeight: 1.15,
                    letterSpacing: '-0.02em',
                    margin: '0 0 0.4rem 0',
                    transition: 'color 200ms ease',
                  }}
                >
                  {facultyMembers[1].name}
                </h3>

                {/* Credentials & Background */}
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.84rem',
                    fontWeight: 700,
                    color: '#1B6B44',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    marginBottom: '0.75rem',
                  }}
                >
                  {facultyMembers[1].credentials} · {facultyMembers[1].institution}
                </div>

                {/* Specialization */}
                <div
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: '#10172B',
                    marginBottom: '0.65rem',
                  }}
                >
                  {facultyMembers[1].specialization}
                </div>

                {/* Short Bio */}
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.92rem',
                    color: '#555149',
                    lineHeight: 1.62,
                    margin: '0 0 1.25rem 0',
                    maxWidth: '460px',
                  }}
                >
                  {facultyMembers[1].bio}
                </p>

                {/* Subtle Animated Emerald Accent Line */}
                <div
                  style={{
                    height: '2px',
                    width: hoveredIndex === 1 ? '64px' : '36px',
                    backgroundColor: '#1B6B44',
                    borderRadius: '1px',
                    transition: 'width 300ms ease',
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Scoped CSS for Asymmetric Spread, Hover States, & Breakpoints */}
      <style>{`
        /* Desktop Asymmetric 56% / 44% Spread */
        .faculty-editorial-spread {
          display: grid;
          grid-template-columns: 56% 44%;
          gap: clamp(2.5rem, 5vw, 5.5rem);
          align-items: start;
        }

        .faculty-img-large {
          height: clamp(380px, 35vw, 500px);
        }

        .faculty-card-secondary {
          margin-top: clamp(2.5rem, 4.5vw, 4.5rem);
        }

        .faculty-img-secondary {
          height: clamp(320px, 30vw, 420px);
        }

        .faculty-header-cta:hover {
          color: #1B6B44 !important;
        }

        .faculty-header-cta:hover .faculty-header-arrow {
          transform: translateX(4px);
        }

        /* Mobile Viewports (< 1024px) */
        @media (max-width: 1023px) {
          .faculty-editorial-spread {
            grid-template-columns: 1fr;
            gap: 3.5rem;
          }

          .faculty-card-secondary {
            margin-top: 0 !important;
            padding-top: 2rem;
            border-top: 1px solid #EBE5DA;
          }

          .faculty-img-large,
          .faculty-img-secondary {
            height: clamp(280px, 60vw, 380px);
          }
        }

        /* Accessibility: Reduced Motion */
        @media (prefers-reduced-motion: reduce) {
          .faculty-photo,
          .faculty-card div,
          .faculty-header-arrow {
            transition: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
};
