import React, { useState, useMemo, useEffect, useRef } from 'react';
import { rankersData, type BoardType, type RankerRecord } from '../data/rankersData';
import { RankerHero } from '../components/rankers/RankerHero';
import { RankerFilters } from '../components/rankers/RankerFilters';
import { RankerCarousel } from '../components/results/RankerCarousel';
import { RankerCard } from '../components/rankers/RankerCard';
import { IscAchievementArchive } from '../components/rankers/IscAchievementArchive';
import { VerificationNotice } from '../components/rankers/VerificationNotice';
import { AdmissionsCTA } from '../components/rankers/AdmissionsCTA';
import { StudentImage } from '../components/rankers/StudentImage';
import { SeoHead } from '../components/common/SeoHead';
import { X, CheckCircle2, Award, BookOpen, RotateCcw, School, ShieldCheck } from 'lucide-react';

export const RankersPage: React.FC = () => {
  const [selectedBoard, setSelectedBoard] = useState<'ALL' | BoardType>('ALL');
  const [selectedClass, setSelectedClass] = useState<string>('ALL');
  const [selectedYear, setSelectedYear] = useState<string>('ALL');
  const [activeModalRanker, setActiveModalRanker] = useState<RankerRecord | null>(null);

  // References for scroll-reveal sections
  const featuredSectionRef = useRef<HTMLElement | null>(null);
  const archiveSectionRef = useRef<HTMLElement | null>(null);

  // Maintain dark header styling on Rankers page
  useEffect(() => {
    document.body.classList.add('is-rankers-page');
    return () => {
      document.body.classList.remove('is-rankers-page');
    };
  }, []);

  // Clean scroll reveal: sections are immediately visible
  useEffect(() => {
    document.querySelectorAll('.editorial-scroll-reveal').forEach((el) => {
      el.classList.add('is-revealed');
    });
  }, [selectedBoard, selectedClass, selectedYear]);

  // Available classes for active board selection
  const availableClasses = useMemo(() => {
    const classes = new Set<string>();
    const sourceData =
      selectedBoard === 'ALL'
        ? rankersData
        : rankersData.filter((r) => r.board === selectedBoard);
    sourceData.forEach((r) => classes.add(r.className || r.class));
    return Array.from(classes).sort();
  }, [selectedBoard]);

  // Reset selectedClass if no longer valid
  useEffect(() => {
    if (selectedClass !== 'ALL' && !availableClasses.includes(selectedClass)) {
      setSelectedClass('ALL');
    }
  }, [availableClasses, selectedClass]);

  // Available years/sessions for active board selection
  const availableYears = useMemo(() => {
    const years = new Set<string>();
    const sourceData =
      selectedBoard === 'ALL'
        ? rankersData
        : rankersData.filter((r) => r.board === selectedBoard);

    sourceData.forEach((r) => {
      if (r.session) {
        years.add(r.session);
      }
      years.add(r.year);
    });

    // Custom order: sessions like '2025–26', '2024–25', then numerical reverse years
    return Array.from(years).sort((a, b) => {
      if (a === '2025–26') return -1;
      if (b === '2025–26') return 1;
      if (a === '2024–25') return -1;
      if (b === '2024–25') return 1;
      const numA = parseInt(a.slice(0, 4), 10);
      const numB = parseInt(b.slice(0, 4), 10);
      if (numA !== numB) return numB - numA;
      return b.localeCompare(a);
    });
  }, [selectedBoard]);

  // Reset selectedYear if not in available years
  useEffect(() => {
    if (selectedYear !== 'ALL' && !availableYears.includes(selectedYear)) {
      setSelectedYear('ALL');
    }
  }, [availableYears, selectedYear]);

  // Filtered dataset supporting board, class, and multi-session combinations
  const filteredRankers = useMemo(() => {
    return rankersData.filter((r) => {
      if (selectedBoard !== 'ALL' && r.board !== selectedBoard) return false;
      if (selectedClass !== 'ALL' && (r.class !== selectedClass && r.className !== selectedClass)) {
        return false;
      }
      if (selectedYear !== 'ALL') {
        const studentYear = r.session || r.year;
        const matches =
          studentYear === selectedYear ||
          r.year === selectedYear ||
          r.batch?.toString() === selectedYear ||
          (selectedYear === '2025–26' && (r.session === '2025–26' || r.year === '2025–26')) ||
          (selectedYear === '2024–25' && (r.session === '2024–25' || r.year === '2024–25' || (r.batch === 2025 && r.board === 'ISC')));
        if (!matches) return false;
      }
      return true;
    });
  }, [selectedBoard, selectedClass, selectedYear]);

  /**
   * Featured Achievers Sequence for the Carousel:
   * - When CBSE: all CBSE candidates in authentic order (all 92%, no artificial ranking).
   * - When ISC: order by percentage descending (Rudransh 98%, Anamika 97%, Urvi 96.5%, Om 96%, Neharika 95%...).
   * - When ALL: Highest ISC & overall scorers first, followed by CBSE candidates and remaining records.
   */
  const carouselStudents = useMemo(() => {
    if (filteredRankers.length === 0) return [];

    if (selectedBoard === 'CBSE') {
      return filteredRankers.filter((r) => r.board === 'CBSE');
    }

    if (selectedBoard === 'ISC') {
      return [...filteredRankers].sort((a, b) => {
        const scoreA = a.overallPercentage ?? a.percentage ?? 0;
        const scoreB = b.overallPercentage ?? b.percentage ?? 0;
        return scoreB - scoreA;
      });
    }

    // Default sorting for carousel when ALL is selected:
    const iscToppers = filteredRankers.filter(
      (r) => r.board === 'ISC' && ((r.overallPercentage ?? 0) >= 90 || r.percentage >= 90)
    ).sort((a, b) => {
      const scoreA = a.overallPercentage ?? a.percentage ?? 0;
      const scoreB = b.overallPercentage ?? b.percentage ?? 0;
      return scoreB - scoreA;
    });

    const otherToppers = filteredRankers.filter(
      (r) => r.board !== 'ISC' && !iscToppers.includes(r)
    ).sort((a, b) => {
      const scoreA = a.overallPercentage ?? a.percentage ?? 0;
      const scoreB = b.overallPercentage ?? b.percentage ?? 0;
      return scoreB - scoreA;
    });

    const remainingIsc = filteredRankers.filter(
      (r) => r.board === 'ISC' && !iscToppers.includes(r)
    );

    return [...iscToppers, ...otherToppers, ...remainingIsc];
  }, [filteredRankers, selectedBoard]);

  // Top scorer dynamically chosen from current filtered dataset
  const topHeroScorer = useMemo(() => {
    if (filteredRankers.length === 0) return null;
    if (carouselStudents.length > 0) return carouselStudents[0];
    return filteredRankers[0];
  }, [filteredRankers, carouselStudents]);

  // Dynamic 90%+ count from current filtered dataset
  const ninetyPlusCount = useMemo(() => {
    return filteredRankers.filter((r) => {
      const score = r.overallPercentage ?? r.percentage ?? 0;
      if (score >= 90) return true;
      if (r.subjectResults && r.subjectResults.some((s) => s.percentage >= 90)) return true;
      return false;
    }).length;
  }, [filteredRankers]);

  const handleResetFilters = () => {
    setSelectedBoard('ALL');
    setSelectedClass('ALL');
    setSelectedYear('ALL');
  };

  return (
    <div className="rankers-page-wrapper" style={{ backgroundColor: '#FAF8F5', minHeight: '100vh' }}>
      <SeoHead
        title="Our Rankers & Board Results | Fundemics Tutorials Lucknow"
        description="Verified student achievements, board toppers, and high scorers across ICSE, ISC, and CBSE examinations at Fundemics Tutorials Lucknow. Real results backed by disciplined mentorship."
        canonicalPath="/rankers"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Our Rankers', path: '/rankers' },
        ]}
      />
      {/* 1. EDITORIAL HERO WITH FULLY DYNAMIC FILTERED DATA */}
      <RankerHero
        selectedBoard={selectedBoard}
        selectedYear={selectedYear}
        totalCount={filteredRankers.length}
        topScorer={topHeroScorer}
        ninetyPlusCount={ninetyPlusCount}
      />

      {/* 2. RESULTS FILTER NAVIGATION (Board, Class, Multi-Session) */}
      <RankerFilters
        selectedBoard={selectedBoard}
        onSelectBoard={setSelectedBoard}
        selectedClass={selectedClass}
        onSelectClass={setSelectedClass}
        selectedYear={selectedYear}
        onSelectYear={setSelectedYear}
        availableClasses={availableClasses}
        availableYears={availableYears}
      />

      <main>
        {/* Empty state if board/session combination has no current results */}
        {filteredRankers.length === 0 ? (
          <section
            className="empty-results-section editorial-scroll-reveal is-revealed"
            style={{
              padding: 'clamp(4.5rem, 8vw, 7rem) 1.5rem',
              textAlign: 'center',
            }}
            aria-label="No Results"
          >
            <div
              style={{
                maxWidth: '560px',
                margin: '0 auto',
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                padding: '3.5rem 2.25rem',
                border: '1px solid #E5DFD4',
                boxShadow: '0 8px 30px rgba(16, 23, 43, 0.04)',
              }}
            >
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: '#F5F2EB',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.35rem auto',
                  color: '#8A8274',
                }}
              >
                <BookOpen size={30} strokeWidth={1.8} />
              </div>

              <h2
                style={{
                  fontFamily: "'Newsreader', Georgia, serif",
                  fontSize: '1.9rem',
                  fontWeight: 600,
                  color: '#10172B',
                  marginBottom: '0.75rem',
                  letterSpacing: '-0.015em',
                }}
              >
                NO RESULTS AVAILABLE
              </h2>

              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.98rem',
                  color: '#655F55',
                  lineHeight: 1.62,
                  marginBottom: '1.85rem',
                }}
              >
                Results for this board and session will appear here when published.
              </p>

              <button
                type="button"
                onClick={handleResetFilters}
                style={{
                  backgroundColor: '#10172B',
                  color: '#FFFFFF',
                  padding: '0.85rem 1.85rem',
                  borderRadius: '9999px',
                  border: 'none',
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.90rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.55rem',
                  boxShadow: '0 4px 14px rgba(16, 23, 43, 0.15)',
                }}
                className="reset-filters-btn"
              >
                <RotateCcw size={15} />
                <span>View All Results →</span>
              </button>
            </div>
          </section>
        ) : (
          <>
            {/* 3. FEATURED ACHIEVERS SECTION: CAROUSEL AS CENTERPIECE */}
            <section
              id="featured-achievers"
              ref={featuredSectionRef}
              className="featured-achievers-section editorial-scroll-reveal"
              style={{
                paddingTop: 'clamp(3.5rem, 6vw, 5rem)',
                paddingBottom: 'clamp(3rem, 5vw, 4.5rem)',
                position: 'relative',
              }}
              aria-label="Featured Achievers"
            >
              <div className="container" style={{ maxWidth: '1240px' }}>
                {/* Section Eyebrow & Title */}
                <div style={{ marginBottom: '2rem' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      marginBottom: '0.5rem',
                    }}
                  >
                    <span
                      style={{
                        width: '20px',
                        height: '2px',
                        backgroundColor: '#1B6B44',
                        display: 'inline-block',
                        borderRadius: '1px',
                      }}
                    />
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '0.78rem',
                        fontWeight: 800,
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        color: '#1B6B44',
                      }}
                    >
                      {selectedYear !== 'ALL'
                        ? `MERIT SHOWCASE · SESSION ${selectedYear}`
                        : 'MERIT SHOWCASE · ALL SESSIONS'}
                    </span>
                  </div>

                  <h2
                    style={{
                      fontFamily: "'Newsreader', Georgia, serif",
                      fontSize: 'clamp(2.1rem, 3.8vw, 3rem)',
                      fontWeight: 600,
                      color: '#10172B',
                      margin: '0 0 0.5rem 0',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    FEATURED ACHIEVERS
                  </h2>

                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '1rem',
                      color: '#655F55',
                      margin: 0,
                    }}
                  >
                    {selectedBoard === 'ISC'
                      ? 'Celebrating our highest scoring scholars in Class XII ISC Board examinations.'
                      : selectedBoard === 'CBSE'
                      ? 'Celebrating our distinguished scholars scoring 92% in Class XII CBSE examinations.'
                      : selectedBoard === 'ICSE'
                      ? 'Celebrating our highest scoring scholars in Class X ICSE Board examinations.'
                      : 'Real achievements built through disciplined study, personal mentorship, and focused learning.'}
                  </p>
                </div>

                {/* FEATURED ACHIEVER CAROUSEL CENTERPIECE */}
                <div style={{ width: '100%', margin: '0 auto' }}>
                  <RankerCarousel
                    students={carouselStudents}
                    onSelectStudent={setActiveModalRanker}
                    showBottomCta={false}
                  />
                </div>
              </div>
            </section>

            {/* 4. RESULTS ARCHIVE GRID */}
            <section
              ref={archiveSectionRef}
              className="results-archive-section editorial-scroll-reveal"
              style={{
                backgroundColor: '#F7F4EC',
                borderTop: '1px solid #EAE3D5',
                paddingTop: 'clamp(3.5rem, 6vw, 5rem)',
                paddingBottom: 'clamp(4rem, 7vw, 6rem)',
              }}
              aria-label="Results Archive"
            >
              <div className="container" style={{ maxWidth: '1240px' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '1rem',
                    marginBottom: '2.5rem',
                    paddingBottom: '1.25rem',
                    borderBottom: '1px solid #DFD9CD',
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '0.74rem',
                        fontWeight: 800,
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        color: '#8A8274',
                        marginBottom: '0.35rem',
                      }}
                    >
                      {selectedYear !== 'ALL'
                        ? `ACADEMIC ARCHIVE · SESSION ${selectedYear}`
                        : 'ACADEMIC ARCHIVE · ALL SESSIONS'}
                    </div>
                    <h3
                      style={{
                        fontFamily: "'Newsreader', Georgia, serif",
                        fontSize: 'clamp(1.9rem, 3.2vw, 2.5rem)',
                        fontWeight: 600,
                        color: '#10172B',
                        margin: 0,
                        letterSpacing: '-0.015em',
                      }}
                    >
                      {selectedBoard === 'ALL'
                        ? 'ALL RESULTS & ACHIEVEMENTS'
                        : `${selectedBoard} RESULTS`}
                    </h3>
                  </div>

                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.84rem',
                      fontWeight: 700,
                      color: '#655F55',
                    }}
                  >
                    Showing {filteredRankers.length} Verified {filteredRankers.length === 1 ? 'Record' : 'Records'}
                    {selectedBoard !== 'ALL' ? ` in ${selectedBoard}` : ''}
                    {selectedYear !== 'ALL' ? ` (${selectedYear})` : ''}
                  </div>
                </div>

                <div
                  className="archive-cards-grid"
                  key={`archive-${selectedBoard}-${selectedClass}-${selectedYear}`}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                    gap: '2rem',
                  }}
                >
                  {filteredRankers.map((ranker, index) => (
                    <RankerCard
                      key={ranker.id}
                      ranker={ranker}
                      index={index}
                      onViewDetails={setActiveModalRanker}
                    />
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        {/* 5. HISTORICAL ISC ACHIEVEMENT ARCHIVE (Preserved) */}
        <IscAchievementArchive
          rankers={rankersData}
          onSelectRanker={setActiveModalRanker}
        />

        {/* 6. VERIFIED RESULTS NOTICE */}
        <VerificationNotice />

        {/* 7. ADMISSIONS CTA */}
        <AdmissionsCTA />
      </main>

      {/* 8. STUDENT RESULT SCORECARD MODAL */}
      {activeModalRanker && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="scorecard-title"
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(16, 23, 43, 0.72)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
            zIndex: 1000,
            animation: 'fadeInModal 220ms ease',
          }}
          onClick={() => setActiveModalRanker(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              maxWidth: '560px',
              width: '100%',
              border: '1px solid #E5DFD4',
              boxShadow: '0 25px 60px rgba(16, 23, 43, 0.28)',
              overflow: 'hidden',
              position: 'relative',
              animation: 'slideUpModal 280ms cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            {/* Modal Header */}
            <div
              style={{
                backgroundColor: '#FAF8F5',
                padding: '1.25rem 1.75rem',
                borderBottom: '1px solid #EAE3D5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Award size={18} color="#1B6B44" />
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.76rem',
                    fontWeight: 800,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: '#10172B',
                  }}
                >
                  Official Result Scorecard
                </span>
              </div>

              <button
                type="button"
                onClick={() => setActiveModalRanker(null)}
                aria-label="Close dialog"
                style={{
                  background: 'none',
                  border: 'none',
                  padding: '0.35rem',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  color: '#655F55',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Content */}
            <div style={{ padding: '2rem 1.75rem' }}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '130px 1fr',
                  gap: '1.5rem',
                  marginBottom: '1.75rem',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    height: '150px',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                  }}
                >
                  <StudentImage
                    src={activeModalRanker.image}
                    alt={activeModalRanker.name}
                    label="STUDENT PHOTO"
                    style={{ height: '100%', width: '100%' }}
                  />
                </div>

                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.74rem',
                      fontWeight: 800,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: '#1B6B44',
                      marginBottom: '0.25rem',
                    }}
                  >
                    {activeModalRanker.board} · {activeModalRanker.className || activeModalRanker.class}
                  </div>

                  <h3
                    id="scorecard-title"
                    style={{
                      fontFamily: "'Newsreader', Georgia, serif",
                      fontSize: '1.75rem',
                      fontWeight: 600,
                      color: '#10172B',
                      margin: '0 0 0.5rem 0',
                    }}
                  >
                    {activeModalRanker.name}
                  </h3>

                  <div>
                    <div style={{ display: 'inline-block', position: 'relative' }}>
                      <div
                        style={{
                          fontFamily: "'Newsreader', Georgia, serif",
                          fontSize: '3.2rem',
                          fontWeight: 700,
                          color: '#10172B',
                          lineHeight: 1,
                        }}
                      >
                        {activeModalRanker.formattedPercentage ||
                          (activeModalRanker.overallPercentage !== null && activeModalRanker.overallPercentage !== undefined
                            ? `${activeModalRanker.overallPercentage}%`
                            : `${activeModalRanker.percentage}%`)}
                      </div>
                      <div
                        style={{
                          height: '3.5px',
                          backgroundColor: '#E6AA32',
                          borderRadius: '2px',
                          width: '100%',
                          marginTop: '2px',
                        }}
                      />
                    </div>
                    <div
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 750,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: '#1B6B44',
                        marginTop: '0.4rem',
                      }}
                    >
                      {activeModalRanker.overallPercentage !== null
                        ? `Certified Result · Session ${activeModalRanker.session || activeModalRanker.year}`
                        : `Documented Subject Achievement · Session ${activeModalRanker.session || activeModalRanker.year}`}
                    </div>
                  </div>
                </div>
              </div>

              {/* Subject Results Breakdown if present */}
              {activeModalRanker.subjectResults && activeModalRanker.subjectResults.length > 0 && (
                <div
                  style={{
                    backgroundColor: '#FAF8F5',
                    borderRadius: '10px',
                    border: '1px solid #EAE3D5',
                    padding: '1.15rem 1.25rem',
                    marginBottom: '1.25rem',
                  }}
                >
                  <div
                    style={{
                      fontSize: '0.70rem',
                      color: '#8A8274',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                      marginBottom: '0.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                    }}
                  >
                    <Award size={13} color="#1B6B44" />
                    <span>Documented Subject Scores</span>
                  </div>

                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns:
                        activeModalRanker.subjectResults.length > 2 ? 'repeat(2, 1fr)' : '1fr',
                      gap: '0.65rem',
                    }}
                  >
                    {activeModalRanker.subjectResults.map((s) => (
                      <div
                        key={s.subject}
                        style={{
                          backgroundColor: '#FFFFFF',
                          border: '1px solid #E8E2D6',
                          borderRadius: '8px',
                          padding: '0.55rem 0.85rem',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <span style={{ fontSize: '0.84rem', fontWeight: 600, color: '#332E27' }}>
                          {s.subject}
                        </span>
                        <span
                          style={{
                            fontFamily: "'Newsreader', Georgia, serif",
                            fontSize: '1.35rem',
                            fontWeight: 700,
                            color: '#10172B',
                          }}
                        >
                          {s.percentage}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Verified School Information */}
              <div
                style={{
                  backgroundColor: '#FAF8F5',
                  borderRadius: '10px',
                  border: '1px solid #EAE3D5',
                  padding: '1.25rem 1.35rem',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.85rem',
                }}
              >
                {activeModalRanker.school ? (
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                    <School size={17} color="#1B6B44" style={{ marginTop: '2px', flexShrink: 0 }} />
                    <div>
                      <div
                        style={{
                          fontSize: '0.70rem',
                          color: '#8A8274',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                        }}
                      >
                        School / Institution
                      </div>
                      <div
                        style={{
                          fontSize: '0.95rem',
                          color: '#10172B',
                          fontWeight: 600,
                          marginTop: '2px',
                        }}
                      >
                        {activeModalRanker.school}
                        {activeModalRanker.location ? `, ${activeModalRanker.location}` : ''}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div style={{ fontSize: '0.82rem', color: '#655F55', fontStyle: 'italic' }}>
                    School not specified on official document
                  </div>
                )}

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <ShieldCheck size={17} color="#1B6B44" style={{ flexShrink: 0 }} />
                  <div>
                    <div
                      style={{
                        fontSize: '0.70rem',
                        color: '#8A8274',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                      }}
                    >
                      Academic Record Status
                    </div>
                    <div
                      style={{
                        fontSize: '0.90rem',
                        color: '#1B6B44',
                        fontWeight: 700,
                        marginTop: '2px',
                      }}
                    >
                      Certified Official Record · {activeModalRanker.className || activeModalRanker.class} · Session {activeModalRanker.session || activeModalRanker.year}
                    </div>
                  </div>
                </div>
              </div>

              {/* Verified Record Seal Footer */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '0.76rem',
                  color: '#655F55',
                  paddingTop: '0.5rem',
                  borderTop: '1px solid #EFEAE0',
                }}
              >
                <span>Fundemics Tutorials Academic Council</span>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    color: '#1B6B44',
                    fontWeight: 700,
                  }}
                >
                  <CheckCircle2 size={15} strokeWidth={2.4} />
                  <span>Verified Record</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        body.is-rankers-page header,
        body:has(.rankers-page-wrapper) header {
          background-color: rgba(16, 23, 43, 0.98) !important;
          backdrop-filter: blur(16px) !important;
          -webkit-backdrop-filter: blur(16px) !important;
          border-bottom: 1px solid rgba(255, 255, 255, 0.12) !important;
        }
        .editorial-scroll-reveal {
          opacity: 1;
          transform: none;
        }
        .reset-filters-btn:hover {
          background-color: #1B6B44 !important;
          transform: translateY(-2px);
        }
        @keyframes fadeInModal {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUpModal {
          from { opacity: 0; transform: translateY(18px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @media (prefers-reduced-motion: reduce) {
          .editorial-scroll-reveal {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </div>
  );
};
