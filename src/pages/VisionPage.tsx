import React, { useEffect } from 'react';
import { SeoHead } from '../components/common/SeoHead';
import { Link } from '../context/RouterContext';
import {
  ArrowRight,
  BookOpen,
  Lightbulb,
  CheckCircle2,
  HeartHandshake,
  Target,
  Award,
  Compass,
  Users,
} from 'lucide-react';

export const VisionPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  return (
    <div className="vision-page animate-fade-in" style={{ width: '100%', overflowX: 'clip' }}>
      <SeoHead
        title="Our Vision & Philosophy | Fundemics Tutorials Lucknow"
        description="Discover the core educational philosophy of Fundemics Tutorials: conceptual depth, personalized attention, student-centric mentorship, and disciplined board examination preparation in Lucknow."
        canonicalPath="/vision"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Our Vision', path: '/vision' },
        ]}
      />
      {/* 1. HERO SECTION — Refined Cinematic Hero with Visible Classroom Photo */}
      <section
        className="vision-hero-section"
        style={{
          position: 'relative',
          backgroundColor: '#0C1424',
          color: '#FAF8F5',
          overflow: 'hidden',
          paddingTop: 'clamp(5.25rem, 7.5vw, 6.75rem)',
          paddingBottom: 'clamp(3.5rem, 5vw, 4.75rem)',
          minHeight: 'clamp(540px, 68vh, 670px)',
          display: 'flex',
          alignItems: 'center',
        }}
        aria-label="Our Vision and Philosophy Hero"
      >
        {/* Background Architectural Glow Layer */}
        <div
          className="vision-hero-bg-photo"
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            width: 'clamp(540px, 64%, 980px)',
            background: 'radial-gradient(ellipse 65% 55% at 75% 45%, rgba(32, 42, 87, 0.45) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
          aria-hidden="true"
        />

        {/* Subtle Left-to-Right Navy Overlay: dark on left for text legibility, open on right for photo */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to right, #0C1424 0%, #0C1424 38%, rgba(12, 20, 36, 0.72) 58%, rgba(12, 20, 36, 0.22) 80%, rgba(12, 20, 36, 0.06) 100%)',
            pointerEvents: 'none',
          }}
          aria-hidden="true"
        />
        {/* Subtle Vertical Vignette */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to bottom, rgba(12, 20, 36, 0.45) 0%, transparent 20%, transparent 80%, rgba(12, 20, 36, 0.55) 100%)',
            pointerEvents: 'none',
          }}
          aria-hidden="true"
        />

        {/* Ambient Architectural Geometry Rings in Background */}
        <div
          style={{
            position: 'absolute',
            top: '-20%',
            right: '12%',
            width: '680px',
            height: '680px',
            borderRadius: '50%',
            border: '1px solid rgba(255, 255, 255, 0.04)',
            pointerEvents: 'none',
          }}
          aria-hidden="true"
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-25%',
            left: '6%',
            width: '520px',
            height: '520px',
            borderRadius: '50%',
            border: '1px solid rgba(43, 176, 111, 0.07)',
            pointerEvents: 'none',
          }}
          aria-hidden="true"
        />

        {/* Far-Right Edge Understated Vertical Editorial Label */}
        <div
          className="hero-vertical-edge-label"
          style={{
            position: 'absolute',
            right: 'clamp(1rem, 2.2vw, 2.5rem)',
            top: '50%',
            transform: 'translateY(-50%) rotate(90deg)',
            transformOrigin: 'center center',
            fontFamily: 'var(--font-display)',
            fontSize: '0.66rem',
            fontWeight: 800,
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: 'rgba(250, 248, 245, 0.38)',
            userSelect: 'none',
            pointerEvents: 'none',
            whiteSpace: 'nowrap',
            zIndex: 3,
          }}
          aria-hidden="true"
        >
          OUR PHILOSOPHY
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '1280px' }}>
          <div className="vision-hero-grid">
            {/* Left Content Area: Typography and Philosophy */}
            <div className="vision-hero-left" style={{ maxWidth: '580px' }}>
              {/* Green Eyebrow with Dash and Right Accent Rule */}
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
                    fontSize: '0.78rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.2em',
                    color: '#2BB06F',
                  }}
                >
                  OUR VISION &amp; PHILOSOPHY
                </span>
                <span
                  style={{
                    width: '46px',
                    height: '1px',
                    backgroundColor: 'rgba(43, 176, 111, 0.35)',
                    display: 'inline-block',
                  }}
                />
              </div>

              {/* Grand Serif Headline */}
              <h1
                style={{
                  fontFamily: "'Newsreader', Georgia, serif",
                  fontSize: 'clamp(2.75rem, 5.2vw, 4.35rem)',
                  fontWeight: 600,
                  color: '#FAF8F5',
                  lineHeight: 1.06,
                  letterSpacing: '-0.025em',
                  margin: '0 0 1.35rem 0',
                }}
              >
                Educating for
                <br />
                a Better Tomorrow.
              </h1>

              {/* Supporting Editorial Paragraph */}
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(1rem, 1.3vw, 1.14rem)',
                  color: 'rgba(250, 248, 245, 0.86)',
                  lineHeight: 1.66,
                  margin: '0 0 2.35rem 0',
                  maxWidth: '520px',
                }}
              >
                At Fundemics, we believe education is more than exams. It is about igniting
                intellectual curiosity, cultivating discipline and building confident, compassionate
                individuals.
              </p>

              {/* Restrained Horizontal Pillar List at Bottom */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: 'clamp(0.6rem, 1.3vw, 1.1rem)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.73rem',
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'rgba(250, 248, 245, 0.65)',
                }}
              >
                <span>DISCIPLINE</span>
                <span style={{ color: '#2BB06F', opacity: 0.75 }} aria-hidden="true">·</span>
                <span>CLARITY</span>
                <span style={{ color: '#2BB06F', opacity: 0.75 }} aria-hidden="true">·</span>
                <span>CONFIDENCE</span>
                <span style={{ color: '#2BB06F', opacity: 0.75 }} aria-hidden="true">·</span>
                <span>OPPORTUNITY</span>
              </div>
            </div>

            {/* Right Side: Photography Area with Handwritten Statement */}
            <div className="vision-hero-right">
              <div
                className="hero-handwritten-badge"
                style={{
                  transform: 'rotate(-3deg)',
                  display: 'inline-block',
                  userSelect: 'none',
                  pointerEvents: 'none',
                }}
              >
                <span
                  style={{
                    fontFamily: "'Caveat', cursive",
                    fontSize: 'clamp(1.5rem, 2.1vw, 2.05rem)',
                    color: 'rgba(250, 248, 245, 0.96)',
                    display: 'block',
                    lineHeight: 1.18,
                    textShadow: '0 2px 10px rgba(0, 0, 0, 0.75), 0 0 20px rgba(12, 20, 36, 0.85)',
                  }}
                >
                  “Better
                  <br />
                  Fundamentals.
                  <br />
                  Brighter
                  <br />
                  Futures.”
                </span>
                <svg
                  width="76"
                  height="12"
                  viewBox="0 0 76 12"
                  fill="none"
                  style={{ marginTop: '4px', opacity: 0.95 }}
                  aria-hidden="true"
                >
                  <path
                    d="M2 9C22 3 52 3 74 8"
                    stroke="#2BB06F"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Soft Editorial Paper Edge / Curved Boundary into Cream Philosophy Section */}
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

      {/* 2. PHILOSOPHY QUOTE — Warm Ivory Institutional Manifesto             */}
      <section
        style={{
          backgroundColor: '#FAF7F2',
          borderBottom: '1px solid #EBE5DB',
          paddingTop: 'clamp(2.75rem, 4.5vw, 4rem)',
          paddingBottom: 'clamp(4rem, 6vw, 5.5rem)',
          position: 'relative',
        }}
        aria-label="Institutional Philosophy"
      >
        <div
          className="container"
          style={{
            maxWidth: '960px',
            textAlign: 'center',
            position: 'relative',
          }}
        >
          {/* Oversized Subtle Green Quotation Mark Accent */}
          <div
            style={{
              fontFamily: "'Newsreader', Georgia, serif",
              fontSize: 'clamp(3.5rem, 5vw, 4.5rem)',
              lineHeight: 0.5,
              color: '#2BB06F',
              opacity: 0.32,
              textAlign: 'center',
              marginBottom: '0.85rem',
              userSelect: 'none',
            }}
            aria-hidden="true"
          >
            “
          </div>

          {/* Central Philosophy Quotation — Immediate Visual Focus */}
          <blockquote
            style={{
              fontFamily: "'Newsreader', Georgia, serif",
              fontSize: 'clamp(2.1rem, 3.5vw, 3.15rem)',
              fontWeight: 600,
              color: '#10172B',
              lineHeight: 1.22,
              letterSpacing: '-0.02em',
              margin: '0 auto clamp(2rem, 3.5vw, 2.75rem) auto',
              maxWidth: '920px',
            }}
          >
            “A child whose fundamentals are crystal clear can conquer any syllabus, any examination,
            and any future challenge.”
          </blockquote>

          {/* Supporting Manifesto Copy - Paragraph 1 */}
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1rem, 1.25vw, 1.1rem)',
              color: '#555149',
              lineHeight: 1.7,
              maxWidth: '700px',
              margin: '0 auto',
            }}
          >
            In an era where coaching is increasingly industrialised into crowded halls and robotic
            rote-memorisation, Fundemics Tutorials was established in Lucknow to restore genuine
            craftsmanship to teaching.
          </p>

          {/* Tiny Green Horizontal Divider */}
          <div
            style={{
              width: '32px',
              height: '2px',
              backgroundColor: '#2BB06F',
              borderRadius: '1px',
              margin: '1.4rem auto',
              opacity: 0.85,
            }}
            aria-hidden="true"
          />

          {/* Supporting Manifesto Copy - Paragraph 2 */}
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1rem, 1.25vw, 1.1rem)',
              color: '#555149',
              lineHeight: 1.7,
              maxWidth: '720px',
              margin: '0 auto',
            }}
          >
            We believe that every complex mathematical theorem or scientific principle has an
            intuitive derivation. When an educator takes the time to reveal that inner logic, fear
            vanishes — and academic enthusiasm takes its place.
          </p>
        </div>
      </section>

      {/* 3. VISION + MISSION — Editorial Split with Authentic Mentorship Photo */}
      <section
        style={{
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid #ECE7DE',
          padding: 'clamp(5rem, 8vw, 7.5rem) 0',
          position: 'relative',
        }}
        aria-label="Vision and Mission"
      >
        <div className="container" style={{ maxWidth: '1280px' }}>
          <div className="vision-split-grid">
            {/* Left Column: Large Authentic Mentorship Image */}
            <div className="vision-split-image-col">
              <div
                style={{
                  position: 'relative',
                  borderRadius: '18px',
                  overflow: 'hidden',
                  backgroundColor: '#0C1424',
                  background: 'radial-gradient(ellipse at 50% 35%, #1C2646 0%, #0C1424 85%)',
                  boxShadow: '0 16px 42px rgba(16, 23, 43, 0.08), 0 2px 8px rgba(16, 23, 43, 0.04)',
                  border: '1px solid #EAE4D8',
                  height: 'clamp(380px, 42vw, 520px)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '2.5rem',
                  textAlign: 'center',
                }}
              >
                {/* Concentric Decorative Rings */}
                <div
                  style={{
                    position: 'absolute',
                    width: '380px',
                    height: '380px',
                    borderRadius: '50%',
                    border: '1px solid rgba(43, 176, 111, 0.08)',
                    pointerEvents: 'none',
                  }}
                  aria-hidden="true"
                />

                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(43, 176, 111, 0.12)',
                    border: '1.5px solid rgba(43, 176, 111, 0.35)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#2BB06F',
                    marginBottom: '1.25rem',
                    position: 'relative',
                    zIndex: 1,
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25)',
                  }}
                >
                  <Users size={28} strokeWidth={1.8} />
                </div>

                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.74rem',
                    fontWeight: 800,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: '#2BB06F',
                    marginBottom: '0.5rem',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  INDIVIDUAL MENTORSHIP
                </span>

                <h3
                  style={{
                    fontFamily: "'Newsreader', Georgia, serif",
                    fontSize: 'clamp(1.6rem, 2.4vw, 2.1rem)',
                    fontWeight: 600,
                    color: '#FAF8F5',
                    margin: '0 0 0.85rem 0',
                    lineHeight: 1.25,
                    maxWidth: '360px',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  Learning Tailored to Every Student.
                </h3>

                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.92rem',
                    color: 'rgba(250, 248, 245, 0.76)',
                    lineHeight: 1.6,
                    maxWidth: '340px',
                    margin: '0 0 3.5rem 0',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  Small batches, continuous doubt clarification, and structured academic tracking.
                </p>

                {/* Overlapping lower-left caption badge */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '16px',
                    left: '16px',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '8px',
                    padding: '0.75rem 1.25rem',
                    boxShadow: '0 6px 20px rgba(16, 23, 43, 0.12)',
                    border: '1px solid rgba(16, 23, 43, 0.06)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.84rem',
                      fontWeight: 700,
                      color: '#10172B',
                      letterSpacing: '0.01em',
                    }}
                  >
                    A culture of guidance, curiosity and growth.
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Vision & Mission Content Blocks */}
            <div className="vision-split-content-col">
              {/* Eyebrow */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  marginBottom: '0.75rem',
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
                  VISION &amp; MISSION
                </span>
              </div>

              {/* Large Serif Heading */}
              <h2
                style={{
                  fontFamily: "'Newsreader', Georgia, serif",
                  fontSize: 'clamp(2.35rem, 3.8vw, 3.4rem)',
                  fontWeight: 600,
                  color: '#10172B',
                  lineHeight: 1.12,
                  letterSpacing: '-0.025em',
                  margin: '0 0 2rem 0',
                }}
              >
                Working in Unison
                <br />
                for a Brighter Future.
              </h2>

              {/* Block 1: Our Vision */}
              <div
                style={{
                  backgroundColor: '#F9F7F3',
                  borderRadius: '14px',
                  border: '1px solid #ECE6DC',
                  padding: '1.45rem 1.65rem',
                  marginBottom: '1.25rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1.15rem',
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(43, 176, 111, 0.12)',
                    border: '1px solid rgba(43, 176, 111, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px',
                  }}
                >
                  <Compass size={22} color="#2BB06F" strokeWidth={1.9} />
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.12rem',
                      fontWeight: 800,
                      color: '#10172B',
                      margin: '0 0 0.35rem 0',
                    }}
                  >
                    Our Vision
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.91rem',
                      color: '#555149',
                      lineHeight: 1.62,
                      margin: 0,
                    }}
                  >
                    To be Lucknow's foremost benchmark for foundational mastery—where students build
                    subject confidence, analytical practice, and a love for disciplined thought that
                    serves them long after school ends.
                  </p>
                </div>
              </div>

              {/* Block 2: Our Mission */}
              <div
                style={{
                  backgroundColor: '#F9F7F3',
                  borderRadius: '14px',
                  border: '1px solid #ECE6DC',
                  padding: '1.45rem 1.65rem',
                  marginBottom: '2rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1.15rem',
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(43, 176, 111, 0.12)',
                    border: '1px solid rgba(43, 176, 111, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px',
                  }}
                >
                  <Users size={22} color="#2BB06F" strokeWidth={1.9} />
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.12rem',
                      fontWeight: 800,
                      color: '#10172B',
                      margin: '0 0 0.35rem 0',
                    }}
                  >
                    Our Mission
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.91rem',
                      color: '#555149',
                      lineHeight: 1.62,
                      margin: 0,
                    }}
                  >
                    To provide personalised, high-calibre instruction across ICSE, ISC, CBSE, and UP
                    Board, inspiring generations of young learners to achieve core understanding and
                    lasting self-belief.
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div>
                <Link
                  href="/teachers"
                  className="vision-faculty-cta"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.55rem',
                    backgroundColor: '#10172B',
                    color: '#FFFFFF',
                    padding: '0.85rem 1.85rem',
                    borderRadius: '8px',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 650,
                    fontSize: '0.92rem',
                    letterSpacing: '0.02em',
                    textDecoration: 'none',
                    boxShadow: '0 2px 8px rgba(16, 23, 43, 0.08)',
                    transition: 'background-color 200ms ease, transform 200ms ease',
                  }}
                >
                  <span>Meet Our Faculty Members</span>
                  <ArrowRight size={16} className="cta-arrow" style={{ transition: 'transform 200ms ease' }} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SIX PRINCIPLES — Warm Ivory Background with Compact Cards System  */}
      <section
        style={{
          backgroundColor: '#FAF7F2',
          borderBottom: '1px solid #EBE5DB',
          padding: 'clamp(5.5rem, 8.5vw, 8rem) 0',
          position: 'relative',
        }}
        aria-label="The Six Principles of Fundemics Teaching"
      >
        <div className="container" style={{ maxWidth: '1280px' }}>
          {/* Centered Section Header */}
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto clamp(3rem, 5vw, 4.25rem) auto' }}>
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
              OUR FOUNDATIONAL PILLARS
            </div>

            <h2
              style={{
                fontFamily: "'Newsreader', Georgia, serif",
                fontSize: 'clamp(2.35rem, 4vw, 3.4rem)',
                fontWeight: 600,
                color: '#10172B',
                lineHeight: 1.12,
                letterSpacing: '-0.025em',
                margin: '0 0 1rem 0',
              }}
            >
              The 6 Principles of Fundemics Teaching
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(1.02rem, 1.3vw, 1.1rem)',
                color: '#555149',
                lineHeight: 1.62,
                margin: 0,
              }}
            >
              Six foundational tenets that guide every lesson, every classroom, and every mentoring
              decision across all our centres in Lucknow.
            </p>
          </div>

          {/* 6 Compact Institutional Cards Grid (Single Row on Desktop) */}
          <div className="principles-compact-grid">
            {[
              {
                number: '01',
                title: 'Strong Fundamentals First',
                desc: 'Every concept is built from first principles with clarity and logic.',
                icon: <BookOpen size={20} color="#2BB06F" strokeWidth={1.9} />,
              },
              {
                number: '02',
                title: 'Conceptual Derivations',
                desc: 'We focus on understanding the ‘why’, not just the ‘what’.',
                icon: <Lightbulb size={20} color="#2BB06F" strokeWidth={1.9} />,
              },
              {
                number: '03',
                title: 'Consistent, Timed Practice',
                desc: 'Regular practice and structured testing build confidence.',
                icon: <Target size={20} color="#2BB06F" strokeWidth={1.9} />,
              },
              {
                number: '04',
                title: 'Individual Attention',
                desc: 'Every student receives personal guidance and support.',
                icon: <HeartHandshake size={20} color="#2BB06F" strokeWidth={1.9} />,
              },
              {
                number: '05',
                title: 'Academic Discipline',
                desc: 'A structured approach to study, revisions and assessments.',
                icon: <Award size={20} color="#2BB06F" strokeWidth={1.9} />,
              },
              {
                number: '06',
                title: 'Fearless Confidence',
                desc: 'We help students develop a growth mindset for lifelong success.',
                icon: <CheckCircle2 size={20} color="#2BB06F" strokeWidth={1.9} />,
              },
            ].map((principle) => (
              <div
                key={principle.number}
                className="principle-card"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '14px',
                  border: '1px solid #ECE7DE',
                  padding: '1.85rem 1.15rem 1.65rem 1.15rem',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  boxShadow: '0 4px 18px rgba(16, 23, 43, 0.03)',
                  transition: 'transform 250ms ease, box-shadow 250ms ease, border-color 250ms ease',
                }}
              >
                {/* Icon Container */}
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(43, 176, 111, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '0.75rem',
                  }}
                >
                  {principle.icon}
                </div>

                {/* Number Badge */}
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    color: '#2BB06F',
                    letterSpacing: '0.12em',
                    marginBottom: '0.45rem',
                  }}
                >
                  {principle.number}
                </div>

                {/* Principle Title */}
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.88rem',
                    fontWeight: 800,
                    color: '#10172B',
                    lineHeight: 1.25,
                    marginBottom: '0.65rem',
                    minHeight: '2.4em',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {principle.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.76rem',
                    color: '#666158',
                    lineHeight: 1.52,
                    fontWeight: 450,
                    margin: 0,
                  }}
                >
                  {principle.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FINAL COMMITMENT SECTION — Deep Navy Full-Width with Organic Art  */}
      <section
        style={{
          backgroundColor: '#0C1424',
          color: '#FAF8F5',
          position: 'relative',
          overflow: 'hidden',
          padding: 'clamp(4.5rem, 6.5vw, 5.85rem) 0',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        }}
        aria-label="Our Commitment Banner"
      >
        {/* Subtle Organic Wave Line Art in Deep Navy Background */}
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

        <div className="container" style={{ maxWidth: '1280px', position: 'relative', zIndex: 2 }}>
          <div className="commitment-flex-wrap">
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
                  OUR COMMITMENT
                </span>
              </div>

              <h2
                style={{
                  fontFamily: "'Newsreader', Georgia, serif",
                  fontSize: 'clamp(2.2rem, 3.8vw, 3.4rem)',
                  fontWeight: 600,
                  color: '#FAF8F5',
                  lineHeight: 1.12,
                  letterSpacing: '-0.025em',
                  margin: '0 0 0.85rem 0',
                }}
              >
                Education should build more than marks.
              </h2>

              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(1rem, 1.3vw, 1.12rem)',
                  color: 'rgba(250, 248, 245, 0.82)',
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                It should build clarity, character and the confidence to take on tomorrow.
              </p>
            </div>

            {/* Right Solid Green Pill Button */}
            <div>
              <Link
                href="/queries"
                className="commitment-cta-btn"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  backgroundColor: '#2BB06F',
                  color: '#FFFFFF',
                  padding: '0.95rem 2.25rem',
                  borderRadius: '999px',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 700,
                  fontSize: '0.96rem',
                  letterSpacing: '0.02em',
                  textDecoration: 'none',
                  boxShadow: '0 4px 18px rgba(43, 176, 111, 0.35)',
                  transition: 'background-color 200ms ease, transform 200ms ease, box-shadow 200ms ease',
                  whiteSpace: 'nowrap',
                }}
              >
                <span>Explore Our Approach</span>
                <ArrowRight size={17} className="cta-arrow" style={{ transition: 'transform 200ms ease' }} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Scoped CSS for Responsive Grid and Micro-Interactions */}
      <style>{`
        /* Hero 2-column layout */
        .vision-hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.35fr) minmax(240px, 0.85fr);
          align-items: center;
          gap: clamp(2rem, 4vw, 4.5rem);
        }

        .vision-hero-right {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        @media (max-width: 1100px) {
          .hero-vertical-edge-label {
            display: none !important;
          }
        }

        /* Split Section Grid */
        .vision-split-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(2.5rem, 5vw, 4.5rem);
          align-items: center;
        }

        /* 6 Principles Compact Row */
        .principles-compact-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: clamp(0.85rem, 1.3vw, 1.35rem);
        }

        .principle-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 28px rgba(16, 23, 43, 0.08) !important;
          border-color: rgba(43, 176, 111, 0.45) !important;
        }

        /* Commitment Banner Layout */
        .commitment-flex-wrap {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 2rem;
        }

        /* Hover States */
        .vision-faculty-cta:hover {
          background-color: #1B6B44 !important;
          transform: translateY(-1px);
        }

        .vision-faculty-cta:hover .cta-arrow {
          transform: translateX(4px);
        }

        .commitment-cta-btn:hover {
          background-color: #24995F !important;
          transform: translateY(-1px);
          box-shadow: 0 6px 22px rgba(43, 176, 111, 0.45) !important;
        }

        .commitment-cta-btn:hover .cta-arrow {
          transform: translateX(4px);
        }

        /* Responsive Breakpoints */
        @media (max-width: 1180px) {
          .principles-compact-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.25rem;
          }
        }

        @media (max-width: 960px) {
          .vision-hero-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }

          .vision-hero-right {
            justify-content: flex-start;
          }

          .vision-split-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }

        @media (max-width: 640px) {
          .principles-compact-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .commitment-flex-wrap {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        /* Accessibility: Reduced Motion */
        @media (prefers-reduced-motion: reduce) {
          .principle-card,
          .vision-faculty-cta,
          .commitment-cta-btn,
          .cta-arrow {
            transition: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </div>
  );
};
