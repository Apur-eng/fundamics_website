import React, { useState, useMemo } from 'react';
import type { RankerRecord } from '../../data/rankersData';
import { StudentImage } from './StudentImage';
import { ArrowRight, School, Calendar, BookOpen } from 'lucide-react';

interface IscAchievementArchiveProps {
  rankers: RankerRecord[];
  onSelectRanker: (ranker: RankerRecord) => void;
}

const ARCHIVE_YEARS = ['2026', '2025', '2024', '2023', '2022', '2021', '2019'] as const;

export const IscAchievementArchive: React.FC<IscAchievementArchiveProps> = ({
  rankers,
  onSelectRanker,
}) => {
  const [selectedArchiveYear, setSelectedArchiveYear] = useState<string>('2026');

  // Filter ISC candidates for the archive
  const yearRecords = useMemo(() => {
    return rankers.filter((r) => {
      if (r.board !== 'ISC') return false;
      if (selectedArchiveYear === '2025') {
        return r.batch === 2025 || r.year === '2024–25' || r.year === '2025';
      }
      return r.year === selectedArchiveYear || r.batch?.toString() === selectedArchiveYear;
    });
  }, [rankers, selectedArchiveYear]);

  // Year record counts
  const yearCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    ARCHIVE_YEARS.forEach((y) => {
      counts[y] = rankers.filter((r) => {
        if (r.board !== 'ISC') return false;
        if (y === '2025') {
          return r.batch === 2025 || r.year === '2024–25' || r.year === '2025';
        }
        return r.year === y || r.batch?.toString() === y;
      }).length;
    });
    return counts;
  }, [rankers]);

  return (
    <section
      id="isc-archive-section"
      className="isc-archive-section editorial-scroll-reveal"
      style={{
        backgroundColor: '#10172B',
        color: '#FAF8F5',
        paddingTop: 'clamp(4.5rem, 8vw, 6.5rem)',
        paddingBottom: 'clamp(4.5rem, 8vw, 7rem)',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      }}
      aria-label="ISC Achievement Archive"
    >
      {/* Background Architectural Geometry */}
      <div
        style={{
          position: 'absolute',
          top: '-15%',
          right: '-10%',
          width: '680px',
          height: '680px',
          borderRadius: '50%',
          border: '1px solid rgba(230, 170, 50, 0.06)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-20%',
          left: '-5%',
          width: '540px',
          height: '540px',
          borderRadius: '50%',
          border: '1px solid rgba(255, 255, 255, 0.03)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ maxWidth: '1240px', position: 'relative', zIndex: 2 }}>
        {/* Section Header */}
        <div style={{ marginBottom: '3.5rem', maxWidth: '780px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              marginBottom: '0.6rem',
            }}
          >
            <span
              style={{
                width: '24px',
                height: '2px',
                backgroundColor: '#E6AA32',
                display: 'inline-block',
                borderRadius: '1px',
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.76rem',
                fontWeight: 800,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#E6AA32',
              }}
            >
              HISTORICAL REGISTRY · 2019–2026
            </span>
          </div>

          <h2
            style={{
              fontFamily: "'Newsreader', Georgia, serif",
              fontSize: 'clamp(2.3rem, 4.2vw, 3.4rem)',
              fontWeight: 600,
              color: '#FAF8F5',
              margin: '0 0 0.75rem 0',
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
            }}
          >
            ISC ACHIEVEMENT ARCHIVE
          </h2>

          <p
            style={{
              fontFamily: "'Newsreader', Georgia, serif",
              fontStyle: 'italic',
              fontSize: 'clamp(1.15rem, 1.8vw, 1.35rem)',
              color: '#D4CEBF',
              margin: 0,
              lineHeight: 1.5,
            }}
          >
            “Recognising academic achievements across the years.”
          </p>
        </div>

        {/* Two-Column Archive Ledger Layout */}
        <div
          className="archive-ledger-container"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(240px, 300px) 1fr',
            gap: 'clamp(2rem, 4vw, 3.5rem)',
            alignItems: 'start',
          }}
        >
          {/* LEFT: Archival Year Timeline Selector */}
          <div
            className="archive-year-timeline"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              borderRadius: '16px',
              padding: '1.75rem 1.5rem',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(8px)',
              position: 'sticky',
              top: '120px',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.72rem',
                fontWeight: 800,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#8A92A6',
                marginBottom: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
              }}
            >
              <Calendar size={14} color="#E6AA32" />
              <span>Select Academic Year</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {ARCHIVE_YEARS.map((yr) => {
                const isSelected = selectedArchiveYear === yr;
                const count = yearCounts[yr] || 0;

                return (
                  <button
                    key={yr}
                    type="button"
                    onClick={() => setSelectedArchiveYear(yr)}
                    className="archive-year-nav-item"
                    style={{
                      background: isSelected ? 'rgba(230, 170, 50, 0.12)' : 'transparent',
                      border: isSelected
                        ? '1px solid rgba(230, 170, 50, 0.35)'
                        : '1px solid transparent',
                      borderRadius: '10px',
                      padding: '0.85rem 1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 220ms ease',
                      width: '100%',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span
                        style={{
                          fontFamily: "'Newsreader', Georgia, serif",
                          fontSize: '1.45rem',
                          fontWeight: isSelected ? 700 : 500,
                          color: isSelected ? '#E6AA32' : '#C7C2B6',
                          lineHeight: 1,
                        }}
                      >
                        {yr}
                      </span>
                      {/* Architectural connector line */}
                      <span
                        style={{
                          display: 'inline-block',
                          width: isSelected ? '40px' : '22px',
                          height: '1px',
                          backgroundColor: isSelected ? '#E6AA32' : 'rgba(255, 255, 255, 0.15)',
                          transition: 'width 250ms ease, background-color 250ms ease',
                        }}
                      />
                    </div>

                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        color: isSelected ? '#FAF8F5' : '#8A92A6',
                        backgroundColor: isSelected
                          ? 'rgba(230, 170, 50, 0.25)'
                          : 'rgba(255, 255, 255, 0.05)',
                        padding: '0.2rem 0.55rem',
                        borderRadius: '9999px',
                      }}
                    >
                      {count} {count === 1 ? 'Scholar' : 'Scholars'}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Curated Archival Record Ledger for the Selected Year */}
          <div className="archive-ledger-content">
            <div
              style={{
                display: 'flex',
                alignItems: 'baseline',
                justifyContent: 'space-between',
                borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
                paddingBottom: '1rem',
                marginBottom: '2rem',
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.74rem',
                    fontWeight: 800,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: '#E6AA32',
                  }}
                >
                  ACADEMIC SESSION
                </span>
                <h3
                  style={{
                    fontFamily: "'Newsreader', Georgia, serif",
                    fontSize: '2.2rem',
                    fontWeight: 600,
                    color: '#FAF8F5',
                    margin: '0.2rem 0 0 0',
                    lineHeight: 1,
                  }}
                >
                  {selectedArchiveYear === '2025' ? 'Session 2024–25 (Batch 2025)' : `Batch ${selectedArchiveYear}`}
                </h3>
              </div>

              <span style={{ fontSize: '0.86rem', color: '#9CA3AF', fontWeight: 500 }}>
                {yearRecords.length} Verified ISC {yearRecords.length === 1 ? 'Record' : 'Records'}
              </span>
            </div>

            {/* Candidate Records */}
            {yearRecords.length === 0 ? (
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  borderRadius: '14px',
                  padding: '3rem 2rem',
                  textAlign: 'center',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                }}
              >
                <BookOpen size={28} color="#8A92A6" style={{ margin: '0 auto 0.75rem auto' }} />
                <p style={{ color: '#D4CEBF', margin: 0 }}>
                  Records for this session are being digitized and verified.
                </p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {yearRecords.map((scholar) => {
                  const hasOverall = scholar.overallPercentage !== null && scholar.overallPercentage !== undefined;

                  return (
                    <div
                      key={scholar.id}
                      onClick={() => onSelectRanker(scholar)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          onSelectRanker(scholar);
                        }
                      }}
                      className="archive-scholar-ledger-card"
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: '14px',
                        padding: '1.5rem',
                        display: 'grid',
                        gridTemplateColumns: '96px 1fr auto',
                        gap: '1.5rem',
                        alignItems: 'center',
                        cursor: 'pointer',
                        transition: 'all 240ms cubic-bezier(0.16, 1, 0.3, 1)',
                      }}
                    >
                      {/* Student Photograph */}
                      <div
                        style={{
                          width: '96px',
                          height: '96px',
                          borderRadius: '10px',
                          overflow: 'hidden',
                          backgroundColor: 'rgba(255, 255, 255, 0.08)',
                          flexShrink: 0,
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                        }}
                      >
                        <StudentImage
                          src={scholar.image}
                          alt={scholar.name}
                          aspectRatio="1 / 1"
                          label="PHOTO"
                          style={{ width: '100%', height: '100%' }}
                        />
                      </div>

                      {/* Details & Academic Profile */}
                      <div>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.65rem',
                            flexWrap: 'wrap',
                            marginBottom: '0.35rem',
                          }}
                        >
                          <span
                            style={{
                              fontFamily: 'var(--font-display)',
                              fontSize: '0.68rem',
                              fontWeight: 800,
                              letterSpacing: '0.12em',
                              textTransform: 'uppercase',
                              color: '#E6AA32',
                            }}
                          >
                            {scholar.board} · {scholar.className || scholar.class}
                          </span>
                          {scholar.uid && (
                            <span
                              style={{
                                fontSize: '0.72rem',
                                color: '#9CA3AF',
                                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                                padding: '0.15rem 0.45rem',
                                borderRadius: '4px',
                                fontFamily: 'monospace',
                              }}
                            >
                              UID: {scholar.uid}
                            </span>
                          )}
                        </div>

                        <h4
                          style={{
                            fontFamily: "'Newsreader', Georgia, serif",
                            fontSize: '1.55rem',
                            fontWeight: 600,
                            color: '#FFFFFF',
                            margin: '0 0 0.45rem 0',
                            letterSpacing: '-0.01em',
                            lineHeight: 1.2,
                          }}
                        >
                          {scholar.name}
                        </h4>

                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.45rem',
                            color: '#C7C2B6',
                            fontSize: '0.85rem',
                            marginBottom: '0.75rem',
                          }}
                        >
                          <School size={14} color="#1B6B44" style={{ flexShrink: 0 }} />
                          <span>{scholar.school}</span>
                          {scholar.location && (
                            <>
                              <span style={{ opacity: 0.4 }}>•</span>
                              <span>{scholar.location}</span>
                            </>
                          )}
                        </div>

                        {/* Subject Achievement List */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                          {hasOverall && (
                            <span
                              style={{
                                backgroundColor: 'rgba(230, 170, 50, 0.18)',
                                border: '1px solid rgba(230, 170, 50, 0.4)',
                                color: '#E6AA32',
                                padding: '0.25rem 0.65rem',
                                borderRadius: '6px',
                                fontSize: '0.80rem',
                                fontWeight: 750,
                              }}
                            >
                              Overall: {scholar.overallPercentage}%
                            </span>
                          )}

                          {scholar.subjectResults?.map((sub) => (
                            <span
                              key={sub.subject}
                              style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                color: '#FAF8F5',
                                padding: '0.25rem 0.6rem',
                                borderRadius: '6px',
                                fontSize: '0.78rem',
                                fontWeight: 600,
                              }}
                            >
                              {sub.subject}:{' '}
                              <strong style={{ color: '#FFFFFF', fontWeight: 700 }}>
                                {sub.percentage}%
                              </strong>
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Right-aligned Scorecard CTA */}
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'flex-end',
                          justifyContent: 'center',
                          gap: '0.5rem',
                        }}
                      >
                        <div
                          className="archive-card-arrow-btn"
                          style={{
                            width: '38px',
                            height: '38px',
                            borderRadius: '50%',
                            backgroundColor: 'rgba(255, 255, 255, 0.06)',
                            border: '1px solid rgba(255, 255, 255, 0.12)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#FAF8F5',
                            transition: 'all 200ms ease',
                          }}
                        >
                          <ArrowRight size={16} strokeWidth={2.4} />
                        </div>
                        <span
                          style={{
                            fontSize: '0.68rem',
                            color: '#8A92A6',
                            fontWeight: 700,
                            letterSpacing: '0.06em',
                            textTransform: 'uppercase',
                          }}
                        >
                          Details
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .archive-scholar-ledger-card:hover {
          background-color: rgba(255, 255, 255, 0.08) !important;
          border-color: rgba(230, 170, 50, 0.4) !important;
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.35);
        }
        .archive-scholar-ledger-card:hover .archive-card-arrow-btn {
          background-color: #E6AA32 !important;
          color: #10172B !important;
          border-color: #E6AA32 !important;
          transform: translateX(3px);
        }
        .archive-year-nav-item:hover {
          background-color: rgba(255, 255, 255, 0.06) !important;
        }
        @media (max-width: 860px) {
          .archive-ledger-container {
            grid-templateColumns: 1fr !important;
          }
          .archive-year-timeline {
            position: relative !important;
            top: 0 !important;
          }
          .archive-scholar-ledger-card {
            grid-template-columns: 80px 1fr !important;
          }
          .archive-scholar-ledger-card > div:last-child {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};
