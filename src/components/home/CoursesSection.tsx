import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from '../../context/RouterContext';

interface AcademicStage {
  title: string;
  classes: string;
}

interface BoardData {
  id: 'icse' | 'cbse' | 'up-board';
  name: string;
  classesRange: string;
  tagline: string;
  stages: AcademicStage[];
  image: string;
  imageAlt: string;
  ctaText: string;
  route: string;
}

const BOARDS: BoardData[] = [
  {
    id: 'icse',
    name: 'ICSE',
    classesRange: 'Classes I–XII',
    tagline: 'Comprehensive conceptual depth and structured analytical mastery tailored for CISCE board excellence.',
    stages: [
      { title: 'PRIMARY', classes: 'Classes I–V' },
      { title: 'MIDDLE', classes: 'Classes VI–VIII' },
      { title: 'SECONDARY', classes: 'Classes IX–X' },
      { title: 'SENIOR SECONDARY', classes: 'Classes XI–XII' },
    ],
    image: '/assets/hero_classroom.jpg',
    imageAlt: 'Engaged ICSE and ISC students in an authentic Lucknow classroom discussion at Fundemics Tutorials',
    ctaText: 'Explore ICSE',
    route: '/courses/icse',
  },
  {
    id: 'cbse',
    name: 'CBSE',
    classesRange: 'Classes I–XII',
    tagline: 'Systematic NCERT foundation combined with advanced problem-solving and board distinction focus.',
    stages: [
      { title: 'PRIMARY', classes: 'Classes I–V' },
      { title: 'MIDDLE', classes: 'Classes VI–VIII' },
      { title: 'SECONDARY', classes: 'Classes IX–X' },
      { title: 'SENIOR SECONDARY', classes: 'Classes XI–XII' },
    ],
    image: '/assets/mentorship.jpg',
    imageAlt: 'CBSE students working through conceptual derivations with faculty mentors at Fundemics Tutorials',
    ctaText: 'Explore CBSE',
    route: '/courses/cbse',
  },
  {
    id: 'up-board',
    name: 'UP BOARD',
    classesRange: 'Classes I–XII',
    tagline: 'Complete state board curriculum mastery with dedicated bilingual mentorship for high academic distinction.',
    stages: [
      { title: 'PRIMARY', classes: 'Classes I–V' },
      { title: 'MIDDLE', classes: 'Classes VI–VIII' },
      { title: 'SECONDARY', classes: 'Classes IX–X' },
      { title: 'SENIOR SECONDARY', classes: 'Classes XI–XII' },
    ],
    image: '/assets/faculty_mentor.jpg',
    imageAlt: 'UP Board students in an intensive problem-solving session with senior faculty at Fundemics Tutorials',
    ctaText: 'Explore UP Board',
    route: '/courses/up-board',
  },
];

export const CoursesSection: React.FC = () => {
  const [activeBoardId, setActiveBoardId] = useState<'icse' | 'cbse' | 'up-board'>('icse');

  const activeBoard = BOARDS.find((b) => b.id === activeBoardId) || BOARDS[0];

  return (
    <section
      id="courses"
      className="academic-spectrum-section"
      style={{
        backgroundColor: 'var(--surface-blue)',  /* Pale academic blue — learning / boards */
        position: 'relative',
        paddingTop: 'clamp(4.5rem, 8vw, 7.5rem)',
        paddingBottom: 'clamp(5rem, 9vw, 8rem)',
        overflow: 'hidden',
        borderBottom: '1px solid var(--surface-blue-border)',
      }}
      aria-label="Learning for Every Stage — Choose Your Board"
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* ==================================================================== */}
        {/* SECTION HEADER                                                       */}
        {/* ==================================================================== */}
        <div style={{ maxWidth: '780px', marginBottom: 'clamp(2.5rem, 5vw, 3.5rem)' }}>
          {/* Eyebrow */}
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
              Classes I–XII
            </span>
          </div>

          {/* Main Heading */}
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
            Learning for Every Stage
          </h2>

          {/* Supporting Copy */}
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1.05rem, 1.4vw, 1.22rem)',
              color: '#555149',
              lineHeight: 1.55,
              margin: 0,
            }}
          >
            Choose your board. Find your academic path.
          </p>
        </div>

        {/* ==================================================================== */}
        {/* EDITORIAL HORIZONTAL BOARD SELECTOR (TABS)                           */}
        {/* ==================================================================== */}
        <div
          role="tablist"
          aria-label="Academic Boards"
          className="board-selector-bar"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 'clamp(2rem, 4.5vw, 4rem)',
            borderBottom: '1.5px solid #E5DFD4',
            paddingBottom: '0.95rem',
            marginBottom: 'clamp(3rem, 5.5vw, 4.5rem)',
            position: 'relative',
            maxWidth: '100%',
          }}
        >
          {BOARDS.map((board) => {
            const isActive = activeBoardId === board.id;
            return (
              <button
                key={board.id}
                type="button"
                role="tab"
                id={`tab-${board.id}`}
                aria-controls={`panel-${board.id}`}
                aria-selected={isActive}
                onClick={() => setActiveBoardId(board.id)}
                className={`board-tab-btn ${isActive ? 'board-tab-active' : ''}`}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: '0.4rem 0',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  position: 'relative',
                  outline: 'none',
                }}
              >
                {/* Small Green Accent Dot */}
                <span
                  style={{
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    backgroundColor: isActive ? '#1B6B44' : 'transparent',
                    boxShadow: isActive ? '0 0 0 2px rgba(27, 107, 68, 0.2)' : 'none',
                    transition: 'all 250ms ease',
                  }}
                  aria-hidden="true"
                />

                {/* Tab Label */}
                <span
                  style={{
                    fontFamily: "'Newsreader', Georgia, serif",
                    fontSize: 'clamp(1.35rem, 1.8vw, 1.7rem)',
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? '#10172B' : '#8A8377',
                    letterSpacing: '-0.015em',
                    transition: 'color 250ms ease, font-weight 250ms ease',
                  }}
                >
                  {board.name}
                </span>

                {/* Thin Active Underline */}
                {isActive && (
                  <span
                    className="board-tab-underline"
                    style={{
                      position: 'absolute',
                      bottom: '-0.95rem',
                      left: 0,
                      right: 0,
                      height: '2.5px',
                      backgroundColor: '#1B6B44',
                      borderRadius: '2px 2px 0 0',
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* ==================================================================== */}
        {/* FEATURED ACADEMIC PANEL                                              */}
        {/* Re-mounts with animation on activeBoardId change                     */}
        {/* ==================================================================== */}
        <div
          key={activeBoard.id}
          id={`panel-${activeBoard.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeBoard.id}`}
          className="board-panel-animated board-featured-grid"
        >
          {/* LEFT / LARGE VISUAL AREA */}
          <div className="board-visual-col">
            <div
              className="board-image-frame"
              style={{
                position: 'relative',
                width: '100%',
                borderRadius: '14px',
                overflow: 'hidden',
                backgroundColor: '#10172B',
                boxShadow: '0 12px 36px rgba(16, 23, 43, 0.08), 0 2px 6px rgba(16, 23, 43, 0.04)',
                border: '1px solid #E5DFD4',
              }}
            >
              <img
                src={activeBoard.image}
                alt={activeBoard.imageAlt}
                className="board-featured-img"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 25%',
                  display: 'block',
                  transition: 'transform 600ms cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              />

              {/* Editorial Gradient Overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(16, 23, 43, 0.55) 0%, rgba(16, 23, 43, 0.05) 50%, transparent 100%)',
                  pointerEvents: 'none',
                }}
              />

              {/* Authentic Photo Tag */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '16px',
                  backgroundColor: 'rgba(16, 23, 43, 0.85)',
                  backdropFilter: 'blur(8px)',
                  padding: '0.45rem 0.9rem',
                  borderRadius: '6px',
                  color: '#FFFFFF',
                  fontSize: '0.78rem',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 500,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  letterSpacing: '0.02em',
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
                <span>Authentic Classroom Session · Lucknow</span>
              </div>
            </div>
          </div>

          {/* RIGHT / INFORMATION AREA */}
          <div className="board-info-col">
            {/* Small Board Label */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '0.4rem',
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
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.82rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.18em',
                  color: '#1B6B44',
                }}
              >
                {activeBoard.name}
              </span>
            </div>

            {/* Large Text: Classes I–XII */}
            <h3
              style={{
                fontFamily: "'Newsreader', Georgia, serif",
                fontSize: 'clamp(2.4rem, 3.8vw, 3.2rem)',
                fontWeight: 600,
                color: '#10172B',
                lineHeight: 1.1,
                letterSpacing: '-0.025em',
                margin: '0 0 0.85rem 0',
              }}
            >
              {activeBoard.classesRange}
            </h3>

            {/* Tagline */}
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(0.98rem, 1.15vw, 1.06rem)',
                color: '#555149',
                lineHeight: 1.6,
                margin: '0 0 2.2rem 0',
                maxWidth: '460px',
              }}
            >
              {activeBoard.tagline}
            </p>

            {/* Academic Stages Clean Vertical Structure with Thin Editorial Dividers */}
            <div
              className="board-stages-list"
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginBottom: '2.5rem',
                borderTop: '1px solid #EBE4D8',
              }}
            >
              {activeBoard.stages.map((stage, idx) => (
                <div
                  key={idx}
                  className="board-stage-row"
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    justifyContent: 'space-between',
                    padding: '0.95rem 0',
                    borderBottom: '1px solid #EBE4D8',
                    transition: 'padding-left 200ms ease, background-color 200ms ease',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.86rem',
                      fontWeight: 700,
                      letterSpacing: '0.12em',
                      color: '#10172B',
                      textTransform: 'uppercase',
                    }}
                  >
                    {stage.title}
                  </span>

                  <span
                    style={{
                      fontFamily: "'Newsreader', Georgia, serif",
                      fontSize: '1.08rem',
                      fontWeight: 500,
                      color: '#1B6B44',
                      letterSpacing: '0.01em',
                    }}
                  >
                    {stage.classes}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button: Explore Board */}
            <div>
              <Link
                href={activeBoard.route}
                className="board-explore-cta"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  backgroundColor: '#10172B',
                  color: '#FFFFFF',
                  padding: '0.95rem 1.85rem',
                  borderRadius: '8px',
                  fontWeight: 600,
                  fontSize: '0.96rem',
                  letterSpacing: '0.02em',
                  textDecoration: 'none',
                  boxShadow: '0 2px 8px rgba(16, 23, 43, 0.08)',
                  transition: 'background-color 200ms ease, transform 200ms ease, box-shadow 200ms ease',
                }}
              >
                <span>{activeBoard.ctaText}</span>
                <ArrowRight size={18} className="board-cta-arrow" style={{ transition: 'transform 200ms ease' }} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scoped CSS for Responsive Grid, Hover states & Transitions */}
      <style>{`
        /* Desktop & Tablet Layout */
        .board-featured-grid {
          display: grid;
          grid-template-columns: 52% 48%;
          gap: clamp(2.5rem, 5vw, 5.5rem);
          align-items: center;
        }

        .board-image-frame {
          height: clamp(360px, 34vw, 480px);
        }

        .board-tab-btn:hover span:last-of-type {
          color: #10172B !important;
        }

        .board-tab-btn:focus-visible {
          outline: 2px solid #1B6B44 !important;
          outline-offset: 4px;
          border-radius: 4px;
        }

        .board-image-frame:hover .board-featured-img {
          transform: scale(1.03);
        }

        .board-stage-row:hover {
          padding-left: 6px !important;
        }

        .board-explore-cta:hover {
          background-color: #1B6B44 !important;
          transform: translateY(-1px);
          box-shadow: 0 4px 14px rgba(27, 107, 68, 0.25) !important;
        }

        .board-explore-cta:hover .board-cta-arrow {
          transform: translateX(4px);
        }

        /* Smooth Animation on Board Switch */
        @keyframes boardPanelFadeIn {
          0% {
            opacity: 0;
            transform: translateY(12px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .board-panel-animated {
          animation: boardPanelFadeIn 450ms cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        /* Mobile Viewport (< 1024px) */
        @media (max-width: 1023px) {
          .board-featured-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }

          .board-selector-bar {
            width: 100%;
            justify-content: flex-start;
            gap: 1.8rem !important;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
          }

          .board-image-frame {
            height: clamp(260px, 58vw, 360px);
          }
        }

        /* Accessibility: Reduced Motion */
        @media (prefers-reduced-motion: reduce) {
          .board-panel-animated {
            animation: none !important;
          }
          .board-featured-img,
          .board-stage-row,
          .board-explore-cta,
          .board-cta-arrow {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
};
