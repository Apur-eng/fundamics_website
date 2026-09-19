import React from 'react';
import type { BoardType, RankerRecord } from '../../data/rankersData';

interface RankerHeroProps {
  selectedBoard?: 'ALL' | BoardType;
  totalCount?: number;
  topScorer?: RankerRecord | null;
  ninetyPlusCount?: number;
}

export const RankerHero: React.FC<RankerHeroProps> = ({
  selectedBoard = 'ALL',
  totalCount = 11,
  topScorer = null,
  ninetyPlusCount = 7,
}) => {
  const displayScore = topScorer
    ? topScorer.overallPercentage !== null && topScorer.overallPercentage !== undefined
      ? `${topScorer.overallPercentage}%`
      : `${topScorer.percentage}%`
    : '96%';
  const displayClass = topScorer
    ? `${(topScorer.className || topScorer.class).toUpperCase()} · ${topScorer.board}`
    : 'CLASS XII · ISC';
  const displayTopName = topScorer
    ? `${displayScore} (${topScorer.name.split(' ')[0]})`
    : '96% (Anshika)';
  const displayTag =
    selectedBoard === 'ISC'
      ? 'ISC MERIT ARCHIVE'
      : selectedBoard === 'ICSE'
      ? 'ICSE BATCH RESULTS'
      : selectedBoard === 'ALL'
      ? 'ICSE & ISC MERIT REGISTRY'
      : `${selectedBoard} RESULTS`;

  return (
    <section
      className="ranker-hero-section"
      style={{
        backgroundColor: '#10172B',
        color: '#FAF8F5',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 'clamp(5.25rem, 7.5vw, 6.5rem)',
        paddingBottom: 'clamp(2.25rem, 3.5vw, 3rem)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      }}
      aria-label="Our Rankers Hero"
    >
      {/* Subtle Architectural Ambient Geometry */}
      <div
        style={{
          position: 'absolute',
          top: '-20%',
          right: '-8%',
          width: '560px',
          height: '560px',
          borderRadius: '50%',
          border: '1px solid rgba(255, 255, 255, 0.035)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-25%',
          left: '25%',
          width: '420px',
          height: '420px',
          borderRadius: '50%',
          border: '1px solid rgba(255, 255, 255, 0.025)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ maxWidth: '1240px', position: 'relative', zIndex: 2 }}>
        <div className="ranker-hero-grid">
          {/* LEFT: Editorial Heading & Context */}
          <div className="ranker-hero-left">
            {/* Small Eyebrow */}
            <div
              className="hero-anim-heading"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                marginBottom: '0.85rem',
              }}
            >
              <span
                style={{
                  width: '20px',
                  height: '2px',
                  backgroundColor: '#238455',
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

            {/* Controlled Heading */}
            <h1
              className="hero-anim-heading ranker-hero-title"
              style={{
                fontFamily: "'Newsreader', Georgia, serif",
                fontWeight: 600,
                color: '#FAF8F5',
                lineHeight: 1.08,
                letterSpacing: '-0.025em',
                margin: '0 0 1rem 0',
              }}
            >
              Where hard work
              <br />
              becomes achievement.
            </h1>

            {/* Supporting Copy */}
            <p
              className="hero-anim-paragraph ranker-hero-desc"
              style={{
                fontFamily: 'var(--font-sans)',
                color: 'rgba(250, 248, 245, 0.82)',
                lineHeight: 1.62,
                margin: 0,
                maxWidth: '540px',
              }}
            >
              A celebration of students who turned consistency, discipline, and focused learning into
              academic achievement.
            </p>
          </div>

          {/* RIGHT: Dynamic Academic Result Composition (Updates on Filter Changes) */}
          <div className="ranker-hero-visual-wrap hero-anim-visual">
            <div
              className="editorial-result-panel"
              key={`panel-${selectedBoard}`}
              style={{
                backgroundColor: '#FAF8F5',
                color: '#10172B',
                borderRadius: '12px',
                border: '1px solid #E2DDD3',
                padding: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                boxShadow: '0 18px 40px -10px rgba(0, 0, 0, 0.45)',
                position: 'relative',
                boxSizing: 'border-box',
                width: '100%',
                transition: 'all 300ms ease',
              }}
            >
              {/* Panel Header */}
              <div className="editorial-panel-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: '#1B6B44',
                      display: 'inline-block',
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.70rem',
                      fontWeight: 800,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: '#1B6B44',
                    }}
                  >
                    VERIFIED BATCH RESULTS
                  </span>
                </div>

                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.62rem',
                    fontWeight: 750,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: '#1B6B44',
                    backgroundColor: '#E6F4EA',
                    padding: '0.2rem 0.5rem',
                    borderRadius: '4px',
                    alignSelf: 'flex-start',
                  }}
                >
                  {displayTag}
                </span>
              </div>

              {/* Large Percentage Showcase */}
              <div style={{ textAlign: 'center', padding: '0.35rem 0 0.85rem 0' }}>
                <div
                  className="hero-score-number"
                  style={{
                    fontFamily: "'Newsreader', Georgia, serif",
                    fontSize: 'clamp(3.2rem, 4.5vw, 4.2rem)',
                    fontWeight: 700,
                    color: '#10172B',
                    lineHeight: 0.95,
                    letterSpacing: '-0.03em',
                    display: 'inline-block',
                    position: 'relative',
                  }}
                >
                  {displayScore}
                  <div
                    style={{
                      height: '3px',
                      backgroundColor: '#E6AA32',
                      borderRadius: '2px',
                      width: '100%',
                      marginTop: '4px',
                    }}
                  />
                </div>

                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.76rem',
                    fontWeight: 750,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#555149',
                    marginTop: '0.6rem',
                  }}
                >
                  TOP PUBLISHED SCORE · {displayClass}
                </div>
              </div>

              {/* Thin Divider Line */}
              <div
                style={{
                  height: '1px',
                  backgroundColor: '#EDE7DB',
                  marginBottom: '0.85rem',
                }}
              />

              {/* Dynamic Batch Performance Highlights */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '0.86rem',
                  }}
                >
                  <span style={{ color: '#555149', fontWeight: 500 }}>Top Individual Score</span>
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 800,
                      color: '#10172B',
                      fontSize: '0.96rem',
                    }}
                  >
                    {displayTopName}
                  </span>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '0.86rem',
                  }}
                >
                  <span style={{ color: '#555149', fontWeight: 500 }}>Students with 90%+</span>
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 800,
                      color: '#1B6B44',
                      fontSize: '0.96rem',
                    }}
                  >
                    {ninetyPlusCount} {ninetyPlusCount === 1 ? 'Achiever' : 'Achievers'}
                  </span>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '0.86rem',
                  }}
                >
                  <span style={{ color: '#555149', fontWeight: 500 }}>Published Results</span>
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 800,
                      color: '#10172B',
                      fontSize: '0.96rem',
                    }}
                  >
                    {totalCount} {totalCount === 1 ? 'Student' : 'Students'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .ranker-hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.25fr) minmax(300px, 0.95fr);
          align-items: center;
          gap: clamp(2rem, 4.5vw, 4rem);
        }

        .editorial-panel-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid #EDE7DB;
          margin-bottom: 1rem;
        }

        .ranker-hero-title {
          font-size: clamp(2.35rem, 4.2vw, 3.9rem);
        }

        .ranker-hero-desc {
          font-size: clamp(1rem, 1.22vw, 1.15rem);
        }

        @keyframes heroFadeUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-anim-heading {
          animation: heroFadeUp 600ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .hero-anim-paragraph {
          animation: heroFadeUp 600ms cubic-bezier(0.16, 1, 0.3, 1) 120ms forwards;
          opacity: 0;
        }

        .hero-anim-visual {
          animation: heroFadeUp 650ms cubic-bezier(0.16, 1, 0.3, 1) 180ms forwards;
          opacity: 0;
        }

        @media (max-width: 960px) {
          .ranker-hero-grid {
            display: flex !important;
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 2rem !important;
          }
          .ranker-hero-title {
            font-size: clamp(2.1rem, 6.5vw, 2.75rem) !important;
          }
          .ranker-hero-desc {
            font-size: 1rem !important;
          }
          .ranker-hero-visual-wrap {
            max-width: 100% !important;
            width: 100% !important;
          }
          .editorial-panel-header {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 0.35rem !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-anim-heading,
          .hero-anim-paragraph,
          .hero-anim-visual {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
};
