import React, { useEffect } from 'react';
import { Link } from '../context/RouterContext';
import {
  ArrowRight,
  Award,
  GraduationCap,
  BookOpen,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react';

export const TeachersPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  // 15 exact faculty names from syllabus & network roster
  const facultyNetworkNames = [
    'S.N. DUBEY',
    'ABHAY P. SINGH',
    'SEJAL SINGH',
    'SIDRA KHAN',
    'RASHMI SRI',
    'HANSRAJ SHARMA',
    'MOHIT KUMAR',
    'DEVAASHISH SINGH',
    'SHASHANK GUPTA',
    'CHANDNI VERMA',
    'SATISH KUMAR',
    'SHUBH TIWARI',
    'AKSHAY BAJPAI',
    'KAVITA SINGH',
    'VIDESH KUMAR',
  ];

  return (
    <div className="teachers-page animate-fade-in" style={{ width: '100%', overflowX: 'clip' }}>
      {/* ==================================================================== */}
      {/* 1. HERO SECTION — Elegant & Spacious Institutional Hero              */}
      {/* ==================================================================== */}
      <section
        className="teachers-hero-section"
        style={{
          position: 'relative',
          backgroundColor: '#0C1424',
          color: '#FAF8F5',
          overflow: 'hidden',
          paddingTop: 'clamp(6rem, 9vw, 8.25rem)',
          paddingBottom: 'clamp(4rem, 6.5vw, 5.75rem)',
          minHeight: 'clamp(460px, 56vh, 560px)',
          display: 'flex',
          alignItems: 'center',
        }}
        aria-label="Our Faculty & Mentors Hero"
      >
        {/* Subtle Photographic Classroom Texture in Background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url('/assets/hero_classroom.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 35%',
            opacity: 0.22,
            pointerEvents: 'none',
          }}
          aria-hidden="true"
        />

        {/* Seamless Navy Linear and Radial Fades */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to bottom, rgba(12, 20, 36, 0.6) 0%, #0C1424 75%, #0C1424 100%)',
            pointerEvents: 'none',
          }}
          aria-hidden="true"
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse at center, transparent 30%, rgba(12, 20, 36, 0.85) 100%)',
            pointerEvents: 'none',
          }}
          aria-hidden="true"
        />

        {/* Ambient Architectural Geometry Rings in Background */}
        <div
          style={{
            position: 'absolute',
            top: '-25%',
            right: '8%',
            width: '640px',
            height: '640px',
            borderRadius: '50%',
            border: '1px solid rgba(255, 255, 255, 0.035)',
            pointerEvents: 'none',
          }}
          aria-hidden="true"
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-25%',
            left: '5%',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            border: '1px solid rgba(43, 176, 111, 0.06)',
            pointerEvents: 'none',
          }}
          aria-hidden="true"
        />

        <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '980px', textAlign: 'center' }}>
          {/* Eyebrow */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.65rem',
              marginBottom: '1.25rem',
            }}
          >
            <span
              style={{
                width: '24px',
                height: '2px',
                backgroundColor: '#2BB06F',
                display: 'inline-block',
                borderRadius: '1px',
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.8rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.22em',
                color: '#2BB06F',
              }}
            >
              OUR FACULTY
            </span>
            <span
              style={{
                width: '24px',
                height: '2px',
                backgroundColor: '#2BB06F',
                display: 'inline-block',
                borderRadius: '1px',
              }}
            />
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "'Newsreader', Georgia, serif",
              fontSize: 'clamp(2.85rem, 5.5vw, 4.6rem)',
              fontWeight: 600,
              color: '#FAF8F5',
              lineHeight: 1.08,
              letterSpacing: '-0.025em',
              margin: '0 auto 1.5rem auto',
              maxWidth: '820px',
            }}
          >
            The people behind
            <br />
            the classroom.
          </h1>

          {/* Supporting Text */}
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1.05rem, 1.4vw, 1.22rem)',
              color: 'rgba(250, 248, 245, 0.86)',
              lineHeight: 1.68,
              margin: '0 auto',
              maxWidth: '680px',
            }}
          >
            Experienced educators, academic leadership and a shared commitment to helping students build stronger fundamentals.
          </p>
        </div>

        {/* Soft Organic Curved Boundary into Warm Ivory Leadership Section */}
        <div
          style={{
            position: 'absolute',
            bottom: -1,
            left: 0,
            right: 0,
            width: '100%',
            overflow: 'hidden',
            lineHeight: 0,
            zIndex: 4,
            pointerEvents: 'none',
          }}
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 1440 32"
            fill="none"
            preserveAspectRatio="none"
            style={{ width: '100%', height: 'clamp(18px, 2.5vw, 28px)', display: 'block' }}
          >
            <path
              d="M0,32 L0,16 C360,3 1080,3 1440,16 L1440,32 Z"
              fill="#FAF7F2"
            />
          </svg>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 2. ACADEMIC LEADERSHIP SECTION                                       */}
      {/* ==================================================================== */}
      <section
        style={{
          backgroundColor: '#FAF7F2',
          borderBottom: '1px solid #ECE7DE',
          paddingTop: 'clamp(4rem, 6.5vw, 6rem)',
          paddingBottom: 'clamp(4.5rem, 7.5vw, 7rem)',
          position: 'relative',
        }}
        aria-label="Academic Leadership"
      >
        <div className="container" style={{ maxWidth: '1240px' }}>
          {/* Section Header */}
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto clamp(3rem, 5vw, 4.5rem) auto' }}>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.78rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                color: '#2BB06F',
                marginBottom: '0.65rem',
              }}
            >
              LEADERSHIP &amp; DIRECTION
            </div>

            <h2
              style={{
                fontFamily: "'Newsreader', Georgia, serif",
                fontSize: 'clamp(2.35rem, 4vw, 3.4rem)',
                fontWeight: 600,
                color: '#10172B',
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
                margin: '0 0 0.85rem 0',
              }}
            >
              Academic Leadership
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(1.02rem, 1.3vw, 1.12rem)',
                color: '#555149',
                lineHeight: 1.62,
                margin: 0,
              }}
            >
              Leadership that shapes the academic standard.
            </p>
          </div>

          {/* ---------------------------------------------------------------- */}
          {/* PRIMARY PROFILE: MAYANK AGGARWAL (Dominant Scale & Central Focus) */}
          {/* ---------------------------------------------------------------- */}
          <div
            className="leadership-primary-card"
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              border: '1px solid #E8E2D5',
              boxShadow: '0 16px 48px rgba(16, 23, 43, 0.06), 0 2px 8px rgba(16, 23, 43, 0.03)',
              overflow: 'hidden',
              marginBottom: 'clamp(2.5rem, 4.5vw, 4rem)',
            }}
          >
            <div className="leadership-primary-grid">
              {/* Left: Large Real Portrait */}
              <div className="primary-portrait-wrapper" style={{ position: 'relative', backgroundColor: '#0C1424' }}>
                <img
                  src="/assets/mayank_aggarwal.jpeg"
                  alt="Mayank Aggarwal, Founder & Director, Head of Physics & Mathematics at Fundemics Tutorials Lucknow"
                  style={{
                    width: '100%',
                    height: '100%',
                    minHeight: 'clamp(400px, 48vh, 520px)',
                    maxHeight: '560px',
                    objectFit: 'cover',
                    objectPosition: 'center 18%',
                    display: 'block',
                  }}
                />

                {/* Subtle Gradient Over Lower Portrait */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(to top, rgba(12, 20, 36, 0.75) 0%, rgba(12, 20, 36, 0.1) 40%, transparent 100%)',
                    pointerEvents: 'none',
                  }}
                  aria-hidden="true"
                />

                {/* Subtle Overlay Badge at Lower Edge */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '20px',
                    right: '20px',
                    backgroundColor: 'rgba(12, 20, 36, 0.88)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.14)',
                    borderRadius: '10px',
                    padding: '0.85rem 1.15rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '0.7rem',
                        fontWeight: 800,
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: '#2BB06F',
                      }}
                    >
                      INSTITUTIONAL LEADERSHIP
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.86rem',
                        fontWeight: 700,
                        color: '#FAF8F5',
                      }}
                    >
                      Fundemics Tutorials • Lucknow
                    </div>
                  </div>

                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      backgroundColor: 'rgba(43, 176, 111, 0.18)',
                      color: '#2BB06F',
                      border: '1px solid rgba(43, 176, 111, 0.35)',
                      padding: '0.25rem 0.65rem',
                      borderRadius: '999px',
                    }}
                  >
                    Founder &amp; Director
                  </span>
                </div>
              </div>

              {/* Right: Editorial Narrative & Details */}
              <div
                style={{
                  padding: 'clamp(2.25rem, 4.5vw, 3.75rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                {/* 01 / LEADERSHIP Eyebrow & Badge */}
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.65rem',
                    marginBottom: '0.65rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.78rem',
                      fontWeight: 800,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: '#2BB06F',
                    }}
                  >
                    01 / LEADERSHIP
                  </span>
                  <span style={{ color: '#D4CEBF' }}>•</span>
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      backgroundColor: 'rgba(43, 176, 111, 0.12)',
                      color: '#1B6B44',
                      border: '1px solid rgba(43, 176, 111, 0.3)',
                      padding: '0.2rem 0.65rem',
                      borderRadius: '999px',
                      textTransform: 'uppercase',
                    }}
                  >
                    FOUNDER &amp; DIRECTOR
                  </span>
                </div>

                {/* Name */}
                <h3
                  style={{
                    fontFamily: "'Newsreader', Georgia, serif",
                    fontSize: 'clamp(2.2rem, 3.6vw, 3.1rem)',
                    fontWeight: 600,
                    color: '#10172B',
                    lineHeight: 1.12,
                    letterSpacing: '-0.025em',
                    margin: '0 0 0.5rem 0',
                  }}
                >
                  MAYANK AGGARWAL
                </h3>

                {/* Subtitle / Role */}
                <div
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1.02rem',
                    fontWeight: 700,
                    color: '#10172B',
                    marginBottom: '0.25rem',
                  }}
                >
                  Founder &amp; Director, Fundemics Tutorials
                </div>

                <div
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.94rem',
                    fontWeight: 650,
                    color: '#2BB06F',
                    marginBottom: '1.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                  }}
                >
                  <BookOpen size={17} color="#2BB06F" strokeWidth={2} />
                  <span>Academic Leadership: Head of Physics &amp; Mathematics</span>
                </div>

                {/* Institutional Description with Subtle Green Vertical Accent Line */}
                <div
                  style={{
                    borderLeft: '3px solid #2BB06F',
                    paddingLeft: '1.35rem',
                    marginBottom: '2rem',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: 'clamp(1rem, 1.25vw, 1.08rem)',
                      color: '#444038',
                      lineHeight: 1.74,
                      margin: 0,
                    }}
                  >
                    Leads the academic direction of Fundemics Tutorials, with responsibility for Physics
                    and Mathematics and the institute’s broader teaching standards.
                  </p>
                </div>

                {/* Core Focus Badges */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.65rem',
                    paddingTop: '1.25rem',
                    borderTop: '1px solid #EDE8DF',
                  }}
                >
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      backgroundColor: '#FAF8F5',
                      border: '1px solid #E5E0D5',
                      padding: '0.4rem 0.85rem',
                      borderRadius: '6px',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.82rem',
                      fontWeight: 650,
                      color: '#10172B',
                    }}
                  >
                    <CheckCircle2 size={15} color="#2BB06F" />
                    <span>First-Principles Rigor</span>
                  </div>

                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      backgroundColor: '#FAF8F5',
                      border: '1px solid #E5E0D5',
                      padding: '0.4rem 0.85rem',
                      borderRadius: '6px',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.82rem',
                      fontWeight: 650,
                      color: '#10172B',
                    }}
                  >
                    <CheckCircle2 size={15} color="#2BB06F" />
                    <span>Physics &amp; Mathematics Direction</span>
                  </div>

                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      backgroundColor: '#FAF8F5',
                      border: '1px solid #E5E0D5',
                      padding: '0.4rem 0.85rem',
                      borderRadius: '6px',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.82rem',
                      fontWeight: 650,
                      color: '#10172B',
                    }}
                  >
                    <CheckCircle2 size={15} color="#2BB06F" />
                    <span>Teaching Standards Benchmark</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ---------------------------------------------------------------- */}
          {/* SECONDARY PROFILE: MANISH K. VERMA (Clearly Subordinate, Co-Founder) */}
          {/* ---------------------------------------------------------------- */}
          <div
            className="leadership-secondary-card"
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '18px',
              border: '1px solid #E8E2D5',
              boxShadow: '0 10px 32px rgba(16, 23, 43, 0.04), 0 2px 6px rgba(16, 23, 43, 0.02)',
              overflow: 'hidden',
              maxWidth: '1120px',
              margin: '0 auto',
            }}
          >
            <div className="leadership-secondary-grid">
              {/* Left: Professional Portrait (Slightly smaller than Mayank's) */}
              <div className="secondary-portrait-wrapper" style={{ position: 'relative', backgroundColor: '#0C1424' }}>
                <img
                  src="/assets/manish_k_verma.jpeg"
                  alt="Manish K. Verma, Co-Founder, B.Tech, M.Tech (IIT Dhanbad) at Fundemics Tutorials Lucknow"
                  style={{
                    width: '100%',
                    height: '100%',
                    minHeight: 'clamp(320px, 38vh, 420px)',
                    maxHeight: '460px',
                    objectFit: 'cover',
                    objectPosition: 'center 15%',
                    display: 'block',
                  }}
                />

                {/* Verified IIT Credential Pill */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '16px',
                    left: '16px',
                    backgroundColor: 'rgba(12, 20, 36, 0.92)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.16)',
                    borderRadius: '8px',
                    padding: '0.6rem 1rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    color: '#FAF8F5',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                  }}
                >
                  <Award size={15} color="#2BB06F" />
                  <span>IIT Dhanbad Alumnus</span>
                </div>
              </div>

              {/* Right: Narrative Details */}
              <div
                style={{
                  padding: 'clamp(2rem, 3.8vw, 3rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                {/* 02 / LEADERSHIP Eyebrow & Badge */}
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.65rem',
                    marginBottom: '0.5rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.78rem',
                      fontWeight: 800,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: '#2BB06F',
                    }}
                  >
                    02 / LEADERSHIP
                  </span>
                  <span style={{ color: '#D4CEBF' }}>•</span>
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      backgroundColor: 'rgba(43, 176, 111, 0.12)',
                      color: '#1B6B44',
                      border: '1px solid rgba(43, 176, 111, 0.3)',
                      padding: '0.2rem 0.65rem',
                      borderRadius: '999px',
                      textTransform: 'uppercase',
                    }}
                  >
                    CO-FOUNDER
                  </span>
                </div>

                {/* Name */}
                <h3
                  style={{
                    fontFamily: "'Newsreader', Georgia, serif",
                    fontSize: 'clamp(1.85rem, 3vw, 2.5rem)',
                    fontWeight: 600,
                    color: '#10172B',
                    lineHeight: 1.15,
                    letterSpacing: '-0.02em',
                    margin: '0 0 0.4rem 0',
                  }}
                >
                  MANISH K. VERMA
                </h3>

                {/* Subtitle / Role & Qualification */}
                <div
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.96rem',
                    fontWeight: 700,
                    color: '#10172B',
                    marginBottom: '0.25rem',
                  }}
                >
                  Co-Founder, Fundemics Tutorials
                </div>

                <div
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    color: '#1B6B44',
                    marginBottom: '1.35rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                  }}
                >
                  <GraduationCap size={16} color="#2BB06F" />
                  <span>B.Tech, M.Tech (IIT Dhanbad)</span>
                </div>

                {/* Institutional Description */}
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.94rem',
                    color: '#555149',
                    lineHeight: 1.68,
                    margin: '0 0 1.5rem 0',
                  }}
                >
                  Co-founder and senior academic mentor at Fundemics Tutorials. An alumnus of IIT Dhanbad,
                  Manish brings rigorous analytical foundations, teaching mathematics and physics with
                  deep conceptual clarity, patience, and disciplined problem-solving frameworks.
                </p>

                {/* Highlight Points */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', borderTop: '1px solid #EDE8DF', paddingTop: '1.15rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', fontSize: '0.86rem', color: '#10172B', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
                    <CheckCircle2 size={16} color="#2BB06F" />
                    <span>Key Subjects: Physics, Advanced Sciences &amp; Mathematics</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', fontSize: '0.86rem', color: '#10172B', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
                    <CheckCircle2 size={16} color="#2BB06F" />
                    <span>Board Coverage: ICSE, ISC &amp; CBSE (Classes IX – XII)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 3. FACULTY NETWORK SECTION — Editorial Typographic Wall               */}
      {/* ==================================================================== */}
      <section
        style={{
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid #ECE7DE',
          paddingTop: 'clamp(5rem, 8vw, 7.5rem)',
          paddingBottom: 'clamp(5rem, 8vw, 7.5rem)',
          position: 'relative',
        }}
        aria-label="Our Faculty Network"
      >
        <div className="container" style={{ maxWidth: '1240px' }}>
          {/* Section Header */}
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto clamp(3rem, 5.5vw, 4.5rem) auto' }}>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.78rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                color: '#2BB06F',
                marginBottom: '0.75rem',
              }}
            >
              OUR FACULTY NETWORK
            </div>

            <h2
              style={{
                fontFamily: "'Newsreader', Georgia, serif",
                fontSize: 'clamp(2.35rem, 4vw, 3.4rem)',
                fontWeight: 600,
                color: '#10172B',
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
                margin: '0 0 1.15rem 0',
              }}
            >
              Experienced educators.
              <br />
              One academic standard.
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(1rem, 1.3vw, 1.12rem)',
                color: '#555149',
                lineHeight: 1.68,
                margin: 0,
              }}
            >
              Fundemics works with a network of educators across subjects and academic levels.
              Faculty assignments may vary according to subject, batch and academic session.
            </p>
          </div>

          {/* Editorial Faculty Wall: 3-Column Typographic Layout */}
          <div className="faculty-wall-grid">
            {facultyNetworkNames.map((name, index) => {
              const formattedNumber = String(index + 1).padStart(2, '0');
              return (
                <div
                  key={name}
                  className="faculty-wall-item"
                  style={{
                    backgroundColor: '#FAF8F5',
                    border: '1px solid #EDE7DC',
                    borderRadius: '12px',
                    padding: '1.35rem 1.65rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    transition: 'all 220ms ease',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {/* Left: Number & Name */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.15rem' }}>
                    <span
                      className="faculty-item-number"
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '0.76rem',
                        fontWeight: 800,
                        letterSpacing: '0.12em',
                        color: '#2BB06F',
                        opacity: 0.9,
                        minWidth: '22px',
                        transition: 'color 200ms ease',
                      }}
                    >
                      {formattedNumber}
                    </span>

                    <span
                      className="faculty-item-name"
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.02rem',
                        fontWeight: 750,
                        letterSpacing: '0.04em',
                        color: '#10172B',
                        transition: 'color 200ms ease, transform 200ms ease',
                      }}
                    >
                      {name}
                    </span>
                  </div>

                  {/* Right: Subtle Institutional Indicator Icon / Dot */}
                  <div
                    className="faculty-item-dot"
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(43, 176, 111, 0.35)',
                      transition: 'background-color 200ms ease, transform 200ms ease',
                      flexShrink: 0,
                    }}
                    aria-hidden="true"
                  />
                </div>
              );
            })}
          </div>

          {/* Institutional Transparent Note at Bottom */}
          <div
            style={{
              marginTop: 'clamp(2.5rem, 4.5vw, 3.75rem)',
              padding: '1.25rem 1.75rem',
              backgroundColor: '#FAF8F5',
              borderRadius: '10px',
              border: '1px solid #ECE6DA',
              textAlign: 'center',
              maxWidth: '860px',
              margin: 'clamp(2.5rem, 4.5vw, 3.75rem) auto 0 auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.65rem',
            }}
          >
            <ShieldCheck size={18} color="#2BB06F" style={{ flexShrink: 0 }} />
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.86rem',
                color: '#666158',
                lineHeight: 1.55,
                fontWeight: 500,
              }}
            >
              Faculty availability and batch assignments may vary according to subject, programme and academic session.
            </span>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 4. FINAL CTA SECTION — Deep Navy Full-Width Institutional Closer     */}
      {/* ==================================================================== */}
      <section
        style={{
          backgroundColor: '#0C1424',
          color: '#FAF8F5',
          position: 'relative',
          overflow: 'hidden',
          padding: 'clamp(5rem, 7.5vw, 6.75rem) 0',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        }}
        aria-label="Learn With Fundemics CTA"
      >
        {/* Organic Background Geometry Linework */}
        <svg
          viewBox="0 0 400 300"
          fill="none"
          style={{
            position: 'absolute',
            right: '-60px',
            top: '-20%',
            height: '140%',
            width: 'auto',
            pointerEvents: 'none',
            opacity: 0.16,
          }}
          aria-hidden="true"
        >
          <path
            d="M 20 0 C 120 100, 220 200, 400 300"
            stroke="#2BB06F"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M 80 0 C 160 100, 260 200, 400 240"
            stroke="#2BB06F"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray="4 6"
          />
          <circle cx="320" cy="150" r="120" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="1" />
          <circle cx="320" cy="150" r="200" stroke="#2BB06F" strokeWidth="1" strokeDasharray="6 8" />
        </svg>

        <div className="container" style={{ maxWidth: '1240px', position: 'relative', zIndex: 2 }}>
          <div className="teachers-cta-layout">
            {/* Left Narrative */}
            <div style={{ maxWidth: '680px' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  marginBottom: '0.85rem',
                }}
              >
                <span
                  style={{
                    width: '24px',
                    height: '2px',
                    backgroundColor: '#2BB06F',
                    display: 'inline-block',
                    borderRadius: '1px',
                  }}
                />
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.78rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.2em',
                    color: '#2BB06F',
                  }}
                >
                  LEARN WITH FUNDEMICS
                </span>
              </div>

              <h2
                style={{
                  fontFamily: "'Newsreader', Georgia, serif",
                  fontSize: 'clamp(2.35rem, 4vw, 3.4rem)',
                  fontWeight: 600,
                  color: '#FAF8F5',
                  lineHeight: 1.12,
                  letterSpacing: '-0.025em',
                  margin: '0 0 1rem 0',
                }}
              >
                Good teaching starts
                <br />
                with the right people.
              </h2>

              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(1rem, 1.3vw, 1.14rem)',
                  color: 'rgba(250, 248, 245, 0.84)',
                  lineHeight: 1.64,
                  margin: 0,
                }}
              >
                Explore our academic approach or speak with the Fundemics team about the right programme for your child.
              </p>
            </div>

            {/* Right Buttons: Explore Our Approach & Enquire Now */}
            <div className="teachers-cta-buttons">
              <Link
                href="/vision"
                className="btn-primary-green"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.65rem',
                  backgroundColor: '#2BB06F',
                  color: '#FFFFFF',
                  padding: '0.95rem 2.15rem',
                  borderRadius: '999px',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  letterSpacing: '0.02em',
                  textDecoration: 'none',
                  boxShadow: '0 4px 18px rgba(43, 176, 111, 0.35)',
                  transition: 'background-color 200ms ease, transform 200ms ease, box-shadow 200ms ease',
                  whiteSpace: 'nowrap',
                }}
              >
                <span>Explore Our Approach</span>
                <ArrowRight size={17} className="btn-arrow" style={{ transition: 'transform 200ms ease' }} />
              </Link>

              <Link
                href="/queries"
                className="btn-outline-white"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.65rem',
                  backgroundColor: 'transparent',
                  color: '#FAF8F5',
                  border: '1px solid rgba(250, 248, 245, 0.32)',
                  padding: '0.95rem 2.15rem',
                  borderRadius: '999px',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  letterSpacing: '0.02em',
                  textDecoration: 'none',
                  transition: 'background-color 200ms ease, border-color 200ms ease, transform 200ms ease',
                  whiteSpace: 'nowrap',
                }}
              >
                <span>Enquire Now</span>
                <ArrowRight size={17} className="btn-arrow" style={{ transition: 'transform 200ms ease' }} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* Scoped CSS for Layout, Typography Wall, Hover Effects & Breakpoints  */}
      {/* ==================================================================== */}
      <style>{`
        /* Primary Leadership Split Layout */
        .leadership-primary-grid {
          display: grid;
          grid-template-columns: minmax(320px, 0.95fr) 1.25fr;
          align-items: stretch;
        }

        /* Secondary Leadership Split Layout */
        .leadership-secondary-grid {
          display: grid;
          grid-template-columns: minmax(280px, 0.8fr) 1.2fr;
          align-items: stretch;
        }

        /* Faculty Wall 3-Column Grid */
        .faculty-wall-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.15rem;
        }

        .faculty-wall-item:hover {
          background-color: #FFFFFF !important;
          border-color: rgba(43, 176, 111, 0.5) !important;
          box-shadow: 0 6px 20px rgba(16, 23, 43, 0.05);
          transform: translateX(4px);
        }

        .faculty-wall-item:hover .faculty-item-name {
          color: #1B6B44 !important;
        }

        .faculty-wall-item:hover .faculty-item-dot {
          background-color: #2BB06F !important;
          transform: scale(1.4);
        }

        /* CTA Section Flex */
        .teachers-cta-layout {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 2.5rem;
        }

        .teachers-cta-buttons {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        /* Button Hover Effects */
        .btn-primary-green:hover {
          background-color: #24995F !important;
          transform: translateY(-1px);
          box-shadow: 0 6px 22px rgba(43, 176, 111, 0.45) !important;
        }

        .btn-primary-green:hover .btn-arrow {
          transform: translateX(4px);
        }

        .btn-outline-white:hover {
          background-color: rgba(255, 255, 255, 0.1) !important;
          border-color: rgba(255, 255, 255, 0.65) !important;
          transform: translateY(-1px);
        }

        .btn-outline-white:hover .btn-arrow {
          transform: translateX(4px);
        }

        /* Breakpoints */
        @media (max-width: 1080px) {
          .faculty-wall-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 960px) {
          .leadership-primary-grid {
            grid-template-columns: 1fr;
          }

          .leadership-secondary-grid {
            grid-template-columns: 1fr;
          }

          .primary-portrait-wrapper img {
            min-height: 380px !important;
            max-height: 480px !important;
          }

          .secondary-portrait-wrapper img {
            min-height: 320px !important;
            max-height: 400px !important;
          }

          .teachers-cta-layout {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 640px) {
          .faculty-wall-grid {
            grid-template-columns: 1fr;
            gap: 0.85rem;
          }

          .teachers-cta-buttons {
            flex-direction: column;
            width: 100%;
          }

          .teachers-cta-buttons a {
            width: 100%;
          }
        }

        /* Accessibility: Reduced Motion */
        @media (prefers-reduced-motion: reduce) {
          .faculty-wall-item,
          .btn-primary-green,
          .btn-outline-white,
          .btn-arrow {
            transition: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </div>
  );
};
