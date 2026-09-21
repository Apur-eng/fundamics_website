import React, { useMemo } from 'react';
import { BookOpen, GraduationCap, ArrowRight } from 'lucide-react';
import { rankersData, type BoardType, type RankerRecord } from '../../data/rankersData';

interface RankerHeroProps {
  selectedBoard?: 'ALL' | BoardType;
  selectedYear?: string;
  totalCount?: number;
  topScorer?: RankerRecord | null;
  ninetyPlusCount?: number;
}

/**
 * Editorial Laurel Medallion SVG matching the visual reference inspiration
 */
const LaurelMedallion: React.FC = () => (
  <svg
    width="34"
    height="34"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ flexShrink: 0 }}
    aria-hidden="true"
  >
    {/* Left branch */}
    <path
      d="M11 25C9 22 8.5 17.5 10 12.8C10.5 10.8 11.5 9 13 7"
      stroke="#C59A27"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M9.5 21C8 19.5 7.5 17.5 8 15.5C9.5 16 10.5 17.5 10 19.5"
      fill="#D4AF37"
      opacity="0.88"
    />
    <path
      d="M8.8 16.5C7.5 15 7.2 13 8 11C9.5 11.5 10.2 13 9.8 15"
      fill="#D4AF37"
      opacity="0.88"
    />
    <path
      d="M9.5 11.5C8.5 10 8.5 8 9.5 6.5C10.8 7.3 11.2 9 10.5 10.7"
      fill="#D4AF37"
      opacity="0.88"
    />
    <path
      d="M11.5 7.5C11 6.2 11.5 4.5 12.8 3.5C13.8 4.5 13.8 6.2 12.8 7.5"
      fill="#D4AF37"
      opacity="0.88"
    />

    {/* Right branch */}
    <path
      d="M25 25C27 22 27.5 17.5 26 12.8C25.5 10.8 24.5 9 23 7"
      stroke="#C59A27"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M26.5 21C28 19.5 28.5 17.5 28 15.5C26.5 16 25.5 17.5 26 19.5"
      fill="#D4AF37"
      opacity="0.88"
    />
    <path
      d="M27.2 16.5C28.5 15 28.8 13 28 11C26.5 11.5 25.8 13 26.2 15"
      fill="#D4AF37"
      opacity="0.88"
    />
    <path
      d="M26.5 11.5C27.5 10 27.5 8 26.5 6.5C25.2 7.3 24.8 9 25.5 10.7"
      fill="#D4AF37"
      opacity="0.88"
    />
    <path
      d="M24.5 7.5C25 6.2 24.5 4.5 23.2 3.5C22.2 4.5 22.2 6.2 23.2 7.5"
      fill="#D4AF37"
      opacity="0.88"
    />

    {/* Center 5-point star */}
    <path
      d="M18 11.5L19.3 15.1L23.1 15.3L20 17.6L21.1 21.3L18 19L14.9 21.3L16 17.6L12.9 15.3L16.7 15.1L18 11.5Z"
      fill="#C59A27"
    />
    {/* Knot accent */}
    <path
      d="M15.5 25.5C17 24.8 19 24.8 20.5 25.5C21.5 26 22.5 27.5 23 29C21.8 28.2 20.5 27.8 18 27.8C15.5 27.8 14.2 28.2 13 29C13.5 27.5 14.5 26 15.5 25.5Z"
      fill="#B8860B"
    />
  </svg>
);

export const RankerHero: React.FC<RankerHeroProps> = ({
  selectedBoard = 'ALL',
  selectedYear = 'ALL',
  totalCount,
  topScorer = null,
  ninetyPlusCount,
}) => {
  // If topScorer is explicitly provided or we find top candidate for selected board
  const activeScorer = useMemo(() => {
    if (topScorer) return topScorer;
    if (selectedBoard === 'ALL') return rankersData[0] || null;
    return rankersData.find((r) => r.board === selectedBoard) || null;
  }, [topScorer, selectedBoard]);

  const hasData = activeScorer !== null && (totalCount === undefined || totalCount > 0);

  // Real statistics derived dynamically from data
  const effectiveTotalCount =
    totalCount !== undefined
      ? totalCount
      : selectedBoard === 'ALL'
      ? rankersData.length
      : rankersData.filter((r) => r.board === selectedBoard).length;

  const effectiveNinetyPlusCount =
    ninetyPlusCount !== undefined
      ? ninetyPlusCount
      : selectedBoard === 'ALL'
      ? rankersData.filter((r) => r.percentage >= 90).length
      : rankersData.filter((r) => r.board === selectedBoard && r.percentage >= 90).length;

  const displayScore = hasData && activeScorer
    ? activeScorer.formattedPercentage || `${activeScorer.percentage}%`
    : '—';

  const scoreTypeLabel = hasData ? 'TOP SCORE' : 'NO PUBLISHED DATA';

  const displayRegistryTag =
    selectedBoard === 'ISC'
      ? 'ISC MERIT REGISTRY'
      : selectedBoard === 'CBSE'
      ? 'CBSE MERIT REGISTRY'
      : selectedBoard === 'ICSE'
      ? 'ICSE MERIT REGISTRY'
      : selectedBoard === 'ALL'
      ? 'ISC & CBSE MERIT REGISTRY'
      : `${selectedBoard} MERIT REGISTRY`;

  const studentSession = activeScorer?.session || activeScorer?.year || '2025–26';
  const displaySessionHeader = selectedYear !== 'ALL' ? selectedYear : (hasData ? (activeScorer?.session || 'ALL SESSIONS') : 'ALL SESSIONS');
  const studentSchoolDisplay = activeScorer?.school || '';

  const handleViewAllResults = (e: React.MouseEvent) => {
    e.preventDefault();
    const filterNav = document.getElementById('rankers-filter-nav') || document.getElementById('featured-achievers');
    if (filterNav) {
      const NAVBAR_HEIGHT = 72;
      const top = filterNav.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section
      className="ranker-hero-section"
      style={{
        backgroundColor: '#0C1424',
        color: '#FAF8F5',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 'clamp(5.25rem, 7.5vw, 6.5rem)',
        paddingBottom: 'clamp(2.5rem, 3.8vw, 3.25rem)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      }}
      aria-label="Our Rankers Editorial Hero"
    >
      {/* ─────────────────────────────────────────────────────────────
          1. SUBTLE ARCHITECTURAL AMBIENT GEOMETRY & BACKGROUND GRAPHICS
          ───────────────────────────────────────────────────────────── */}
      {/* Soft atmospheric radial glow behind the student portrait area */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          right: '12%',
          width: '620px',
          height: '620px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(43, 176, 111, 0.07) 0%, rgba(12, 20, 36, 0) 70%)',
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />

      {/* Large delicate oversized background circular ring */}
      <div
        style={{
          position: 'absolute',
          top: '-18%',
          right: '4%',
          width: '680px',
          height: '680px',
          borderRadius: '50%',
          border: '1px solid rgba(255, 255, 255, 0.035)',
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />

      {/* Concentric ambient orbital ring */}
      <div
        style={{
          position: 'absolute',
          top: '2%',
          right: '12%',
          width: '520px',
          height: '520px',
          borderRadius: '50%',
          border: '1px solid rgba(43, 176, 111, 0.08)',
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />

      {/* Ambient bottom-left organic ring */}
      <div
        style={{
          position: 'absolute',
          bottom: '-35%',
          left: '8%',
          width: '540px',
          height: '540px',
          borderRadius: '50%',
          border: '1px solid rgba(255, 255, 255, 0.022)',
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />

      {/* Vertical Typographic Watermark on far right edge (Understated as in reference) */}
      <div
        className="hero-watermark-col"
        style={{
          position: 'absolute',
          right: 'clamp(14px, 2vw, 26px)',
          top: '50%',
          transform: 'translateY(-50%)',
          display: 'flex',
          flexDirection: 'column',
          gap: '3.5rem',
          pointerEvents: 'none',
          userSelect: 'none',
          zIndex: 1,
        }}
        aria-hidden="true"
      >
        <div
          style={{
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
            fontFamily: 'var(--font-display)',
            fontSize: '0.62rem',
            letterSpacing: '0.26em',
            fontWeight: 700,
            color: 'rgba(255, 255, 255, 0.08)',
            textTransform: 'uppercase',
          }}
        >
          DISCIPLINE · GUIDANCE · PROGRESS · A BRIGHTER TOMORROW
        </div>
        <div
          style={{
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
            fontFamily: 'var(--font-display)',
            fontSize: '0.62rem',
            letterSpacing: '0.26em',
            fontWeight: 700,
            color: 'rgba(255, 255, 255, 0.06)',
            textTransform: 'uppercase',
          }}
        >
          REAL PEOPLE · BRIGHTER FUTURES
        </div>
      </div>

      <div
        className="container"
        style={{
          maxWidth: '1280px',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <div className="ranker-hero-grid">
          {/* ─────────────────────────────────────────────────────────────
              2. LEFT SIDE: EDITORIAL HEADLINE & VALUE PROPOSITION
              ───────────────────────────────────────────────────────────── */}
          <div className="ranker-hero-left">
            {/* Small Eyebrow with Green Bar */}
            <div
              className="hero-anim-left"
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
                OUR RANKERS
              </span>
            </div>

            {/* Large Serif Headline */}
            <h1
              className="hero-anim-left ranker-hero-title"
              style={{
                fontFamily: "'Newsreader', Georgia, serif",
                fontWeight: 600,
                color: '#FAF8F5',
                lineHeight: 1.06,
                letterSpacing: '-0.025em',
                margin: '0 0 1.15rem 0',
              }}
            >
              Where hard work
              <br />
              becomes achievement.
            </h1>

            {/* Supporting Copy */}
            <p
              className="hero-anim-left ranker-hero-desc"
              style={{
                fontFamily: 'var(--font-sans)',
                color: 'rgba(250, 248, 245, 0.82)',
                lineHeight: 1.6,
                margin: '0 0 1.85rem 0',
                maxWidth: '450px',
              }}
            >
              A celebration of students who turned consistency, discipline, and focused learning into
              academic excellence.
            </p>

            {/* Compact Understated Information Row */}
            <div
              className="hero-anim-left hero-info-row"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(195px, 1fr))',
                gap: '1.25rem 1.4rem',
                paddingTop: '0.75rem',
                marginBottom: '1.85rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                maxWidth: '470px',
              }}
            >
              {/* Item 1: Boards & Classes */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(43, 176, 111, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    border: '1px solid rgba(43, 176, 111, 0.25)',
                  }}
                >
                  <BookOpen size={19} color="#2BB06F" strokeWidth={1.8} />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.76rem',
                      fontWeight: 750,
                      color: '#FAF8F5',
                      letterSpacing: '0.04em',
                      lineHeight: 1.25,
                    }}
                  >
                    ICSE · ISC · CBSE · STATE BOARD
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.68rem',
                      fontWeight: 600,
                      color: 'rgba(250, 248, 245, 0.60)',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      marginTop: '2px',
                    }}
                  >
                    CLASSES I–XII
                  </div>
                </div>
              </div>

              {/* Item 2: Real Students / Real Results */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(43, 176, 111, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    border: '1px solid rgba(43, 176, 111, 0.25)',
                  }}
                >
                  <GraduationCap size={21} color="#2BB06F" strokeWidth={1.8} />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.76rem',
                      fontWeight: 750,
                      color: '#FAF8F5',
                      letterSpacing: '0.05em',
                      lineHeight: 1.25,
                    }}
                  >
                    REAL STUDENTS.
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.68rem',
                      fontWeight: 750,
                      color: '#2BB06F',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      marginTop: '2px',
                    }}
                  >
                    REAL RESULTS.
                  </div>
                </div>
              </div>
            </div>

            {/* Understated Motto Row */}
            <div
              className="hero-anim-left"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.85rem',
              }}
            >
              <span
                style={{
                  fontFamily: "'Caveat', cursive",
                  fontSize: 'clamp(1.35rem, 1.75vw, 1.65rem)',
                  color: '#E6AA32',
                  letterSpacing: '0.02em',
                  fontWeight: 600,
                }}
              >
                Educating for a Better Tomorrow.
              </span>
              <span
                style={{
                  width: '42px',
                  height: '1.5px',
                  backgroundColor: '#2BB06F',
                  display: 'inline-block',
                  opacity: 0.8,
                  borderRadius: '1px',
                }}
              />
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────────
              3. RIGHT SIDE: DOMINANT REAL STUDENT PORTRAIT + OVERLAPPING IVORY CARD
              ───────────────────────────────────────────────────────────── */}
          <div className="ranker-hero-right">
            {/* Layered Composition Wrapper */}
            <div className="layered-composition-wrap">
              {/* Subtle green glowing accent arc framing the top-left curve of the portrait */}
              <div
                className="hero-portrait-aura-arc"
                style={{
                  position: 'absolute',
                  top: '-16px',
                  left: '-16px',
                  width: '210px',
                  height: '210px',
                  borderRadius: '50%',
                  borderTop: '2.5px solid rgba(43, 176, 111, 0.45)',
                  borderLeft: '2.5px solid rgba(43, 176, 111, 0.35)',
                  borderRight: 'transparent',
                  borderBottom: 'transparent',
                  pointerEvents: 'none',
                  zIndex: 0,
                  filter: 'drop-shadow(0 0 12px rgba(43, 176, 111, 0.35))',
                }}
                aria-hidden="true"
              />

              {/* Angled Cursive Achievement Note floating near top-left shoulder of portrait */}
              <div
                className="hero-anim-quote hero-quote-badge"
                style={{
                  position: 'absolute',
                  top: '-28px',
                  left: '-18px',
                  zIndex: 4,
                  pointerEvents: 'none',
                  userSelect: 'none',
                  transform: 'rotate(-2.5deg)',
                }}
              >
                <span
                  style={{
                    fontFamily: "'Caveat', cursive",
                    fontSize: 'clamp(1.25rem, 1.6vw, 1.48rem)',
                    color: 'rgba(250, 248, 245, 0.94)',
                    display: 'block',
                    lineHeight: 1.18,
                    textShadow: '0 2px 10px rgba(0, 0, 0, 0.75)',
                  }}
                >
                  “Consistent learning
                  <br />
                  creates real change.”
                </span>
                <svg
                  width="72"
                  height="12"
                  viewBox="0 0 72 12"
                  fill="none"
                  style={{ marginTop: '2px', opacity: 0.9 }}
                  aria-hidden="true"
                >
                  <path
                    d="M2 9C20 3 48 3 70 8"
                    stroke="#2BB06F"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* 3A. DOMINANT REAL STUDENT PORTRAIT OR AWAITING PUBLICATION ARCH */}
              {hasData && activeScorer ? (
                <div
                  key={`photo-${activeScorer.id}`}
                  className="student-portrait-card hero-anim-photo"
                  style={{
                    position: 'relative',
                    borderRadius: '160px 160px 22px 22px',
                    overflow: 'hidden',
                    backgroundColor: '#0F1A2D',
                    border: '1.5px solid rgba(255, 255, 255, 0.14)',
                    boxShadow:
                      '0 30px 65px -15px rgba(0, 0, 0, 0.65), 0 0 0 1px rgba(43, 176, 111, 0.16)',
                    zIndex: 1,
                    flexShrink: 0,
                  }}
                >
                  <img
                    src={activeScorer.image || undefined}
                    alt={`Student Portrait: ${activeScorer.name}`}
                    className="student-portrait-img"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center 15%',
                      display: 'block',
                    }}
                  />

                  {/* Dark Editorial Gradient Overlay at Bottom */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background:
                        'linear-gradient(180deg, transparent 40%, rgba(10, 18, 33, 0.65) 68%, rgba(10, 18, 33, 0.96) 100%)',
                      pointerEvents: 'none',
                    }}
                    aria-hidden="true"
                  />

                  {/* Student Identity Information Box at bottom of portrait */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: '1.35rem 1.25rem 1.2rem 1.25rem',
                      zIndex: 2,
                    }}
                  >
                    <div
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '0.98rem',
                        fontWeight: 800,
                        color: '#FFFFFF',
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                        lineHeight: 1.2,
                        marginBottom: '0.28rem',
                      }}
                    >
                      {activeScorer.name}
                    </div>

                    <div
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.74rem',
                        fontWeight: 650,
                        color: '#2BB06F',
                        letterSpacing: '0.04em',
                        marginBottom: '0.22rem',
                      }}
                    >
                      {activeScorer.className || activeScorer.class} · {activeScorer.board} · {studentSession}
                    </div>

                    {studentSchoolDisplay && (
                      <div
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.71rem',
                          color: 'rgba(250, 248, 245, 0.78)',
                          lineHeight: 1.35,
                          fontWeight: 500,
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                        }}
                        title={studentSchoolDisplay}
                      >
                        {studentSchoolDisplay}
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div
                  key={`photo-empty-${selectedBoard}`}
                  className="student-portrait-card hero-anim-photo"
                  style={{
                    position: 'relative',
                    borderRadius: '160px 160px 22px 22px',
                    overflow: 'hidden',
                    backgroundColor: '#0F1A2D',
                    border: '1.5px solid rgba(255, 255, 255, 0.14)',
                    boxShadow:
                      '0 30px 65px -15px rgba(0, 0, 0, 0.65), 0 0 0 1px rgba(43, 176, 111, 0.16)',
                    zIndex: 1,
                    flexShrink: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '2.5rem 2rem',
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      width: '68px',
                      height: '68px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(43, 176, 111, 0.12)',
                      border: '1.5px solid rgba(43, 176, 111, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.5rem',
                      color: '#2BB06F',
                    }}
                  >
                    <BookOpen size={30} strokeWidth={1.8} />
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.76rem',
                      fontWeight: 800,
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: '#2BB06F',
                      marginBottom: '0.5rem',
                    }}
                  >
                    SESSION {selectedYear !== 'ALL' ? selectedYear : '2025–26'}
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Newsreader', Georgia, serif",
                      fontSize: '1.6rem',
                      fontWeight: 600,
                      color: '#FAF8F5',
                      margin: '0 0 0.75rem 0',
                    }}
                  >
                    {selectedBoard} Results
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.84rem',
                      color: 'rgba(250, 248, 245, 0.65)',
                      lineHeight: 1.5,
                      margin: 0,
                      maxWidth: '220px',
                    }}
                  >
                    Official board records will appear here upon verification.
                  </p>
                </div>
              )}

              {/* 3B. NARROWER, TALLER WARM IVORY RESULTS CARD (Overlapping Layer) */}
              <div
                key={`result-${selectedBoard}-${activeScorer?.id || 'none'}`}
                className="results-panel-card hero-anim-card"
                style={{
                  backgroundColor: '#FFFFFF',
                  color: '#10172B',
                  borderRadius: '20px',
                  border: '1px solid #E5E0D6',
                  padding: 'clamp(1.4rem, 2vw, 1.85rem) clamp(1.2rem, 1.6vw, 1.45rem)',
                  boxShadow:
                    '0 26px 60px -12px rgba(0, 0, 0, 0.50), 0 4px 16px rgba(0, 0, 0, 0.08)',
                  position: 'relative',
                  zIndex: 3,
                  flexShrink: 0,
                }}
              >
                {/* Header: Laurel Medallion & Session Registry */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    marginBottom: '0.85rem',
                  }}
                >
                  <LaurelMedallion />
                  <div>
                    <div
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '0.76rem',
                        fontWeight: 800,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: '#10172B',
                        lineHeight: 1.2,
                      }}
                    >
                      RESULTS · {displaySessionHeader}
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.62rem',
                        fontWeight: 750,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: '#7A6E5E',
                        marginTop: '2px',
                      }}
                    >
                      {displayRegistryTag}
                    </div>
                  </div>
                </div>

                {/* Main DOMINANT Large Score Showcase (Clean, Huge, No thick bar) */}
                <div style={{ textAlign: 'center', padding: '0.35rem 0 0.65rem 0' }}>
                  <div
                    style={{
                      fontFamily: "'Newsreader', Georgia, serif",
                      fontSize: 'clamp(4.2rem, 5.4vw, 5.6rem)',
                      fontWeight: 700,
                      color: '#10172B',
                      lineHeight: 0.88,
                      letterSpacing: '-0.04em',
                      display: 'inline-block',
                    }}
                  >
                    {displayScore}
                  </div>

                  {/* Top Score Label */}
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      letterSpacing: '0.22em',
                      textTransform: 'uppercase',
                      color: '#10172B',
                      marginTop: '0.75rem',
                    }}
                  >
                    {scoreTypeLabel}
                  </div>
                </div>

                {/* Subtle Divider Line */}
                <div
                  style={{
                    height: '1px',
                    backgroundColor: '#EAE4D7',
                    margin: '0.95rem 0 1.05rem 0',
                  }}
                  aria-hidden="true"
                />

                {/* Subordinated Dual Statistics (Reduced visual prominence) */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '0.75rem',
                    textAlign: 'center',
                  }}
                >
                  {/* Stat 1: 90%+ Scorers */}
                  <div style={{ padding: '0 0.2rem' }}>
                    <div
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.55rem',
                        fontWeight: 750,
                        color: '#10172B',
                        lineHeight: 1.1,
                      }}
                    >
                      {effectiveNinetyPlusCount}
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.67rem',
                        color: '#6B7280',
                        lineHeight: 1.3,
                        marginTop: '3px',
                        fontWeight: 500,
                      }}
                    >
                      Students
                      <br />
                      scoring 90%+
                    </div>
                  </div>

                  {/* Stat 2: Published Results */}
                  <div
                    style={{
                      padding: '0 0.2rem',
                      borderLeft: '1px solid #EAE4D7',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.55rem',
                        fontWeight: 750,
                        color: '#10172B',
                        lineHeight: 1.1,
                      }}
                    >
                      {effectiveTotalCount}
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.67rem',
                        color: '#6B7280',
                        lineHeight: 1.3,
                        marginTop: '3px',
                        fontWeight: 500,
                      }}
                    >
                      Published
                      <br />
                      results
                    </div>
                  </div>
                </div>

                {/* View All Results Action CTA Button */}
                <a
                  href="#rankers-filter-nav"
                  onClick={handleViewAllResults}
                  className="hero-view-results-btn"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    width: '100%',
                    marginTop: '1.25rem',
                    backgroundColor: '#10172B',
                    color: '#FAF8F5',
                    padding: '0.72rem 1.15rem',
                    borderRadius: '8px',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 650,
                    fontSize: '0.82rem',
                    letterSpacing: '0.02em',
                    textDecoration: 'none',
                    boxShadow: '0 2px 8px rgba(16, 23, 43, 0.12)',
                    transition:
                      'background-color 200ms ease, transform 200ms ease, box-shadow 200ms ease',
                    boxSizing: 'border-box',
                  }}
                >
                  <span>View All Results</span>
                  <ArrowRight
                    size={15}
                    className="hero-cta-arrow"
                    style={{ transition: 'transform 200ms ease' }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          4. SCOPED STYLES FOR RESPONSIVE COMPOSITION & SUBTLE ENTRANCE
          ───────────────────────────────────────────────────────────── */}
      <style>{`
        /* Desktop Asymmetric 2-column layout */
        .ranker-hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(520px, 1.25fr);
          align-items: center;
          gap: clamp(1.5rem, 3.5vw, 3.5rem);
        }

        .ranker-hero-right {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .layered-composition-wrap {
          display: flex;
          align-items: center;
          position: relative;
        }

        /* Dominant real student portrait */
        .student-portrait-card {
          width: clamp(310px, 23.5vw, 360px);
          height: clamp(430px, 32vw, 475px);
        }

        /* Narrower, taller overlapping ivory results card */
        .results-panel-card {
          width: clamp(215px, 16vw, 242px);
          margin-left: clamp(-85px, -6.2vw, -100px);
        }

        .hero-view-results-btn:hover {
          background-color: #1B6B44 !important;
          transform: translateY(-1px);
          box-shadow: 0 4px 14px rgba(27, 107, 68, 0.28) !important;
        }

        .hero-view-results-btn:hover .hero-cta-arrow {
          transform: translateX(4px);
        }

        /* Subtle Staggered Entrance Animations */
        @keyframes heroFadeUp {
          from {
            opacity: 0;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes heroPhotoEntrance {
          from {
            opacity: 0;
            transform: translateX(-16px) translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateX(0) translateY(0);
          }
        }

        @keyframes heroCardEntrance {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-anim-left {
          animation: heroFadeUp 620ms cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .hero-anim-quote {
          animation: heroFadeUp 700ms cubic-bezier(0.16, 1, 0.3, 1) 120ms both;
        }

        .hero-anim-photo {
          animation: heroPhotoEntrance 720ms cubic-bezier(0.16, 1, 0.3, 1) 100ms both;
        }

        .hero-anim-card {
          animation: heroCardEntrance 750ms cubic-bezier(0.16, 1, 0.3, 1) 220ms both;
        }

        /* Large Tablet / Medium Desktop Viewports */
        @media (max-width: 1180px) {
          .ranker-hero-grid {
            grid-template-columns: minmax(0, 1fr) minmax(460px, 1.2fr);
            gap: 2rem;
          }
          .student-portrait-card {
            width: 290px;
            height: 420px;
          }
          .results-panel-card {
            width: 220px;
            margin-left: -70px;
          }
        }

        @media (max-width: 1040px) {
          .hero-watermark-col {
            display: none !important;
          }
        }

        /* Mobile Viewports (< 960px) */
        @media (max-width: 959px) {
          .ranker-hero-grid {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            gap: 2.75rem !important;
            text-align: left;
          }

          .ranker-hero-left {
            width: 100%;
            max-width: 100% !important;
          }

          .ranker-hero-right {
            width: 100%;
            justify-content: center;
          }

          .hero-quote-badge {
            position: relative !important;
            top: 0 !important;
            left: 0 !important;
            margin-bottom: 1rem;
            text-align: center;
            transform: none !important;
          }

          .hero-portrait-aura-arc {
            display: none !important;
          }

          .layered-composition-wrap {
            flex-direction: column !important;
            align-items: center !important;
            width: 100%;
          }

          .student-portrait-card {
            width: min(100%, 320px) !important;
            height: 400px !important;
          }

          .results-panel-card {
            width: min(100%, 290px) !important;
            margin-left: 0 !important;
            margin-top: -36px !important;
          }

          .hero-watermark-col {
            display: none !important;
          }
        }

        /* Accessibility: Reduced Motion */
        @media (prefers-reduced-motion: reduce) {
          .hero-anim-left,
          .hero-anim-quote,
          .hero-anim-photo,
          .hero-anim-card {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
          .hero-view-results-btn,
          .hero-cta-arrow {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
};
