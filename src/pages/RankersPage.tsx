import React, { useState, useMemo, useEffect, useRef } from 'react';
import { rankersData, type BoardType, type RankerRecord } from '../data/rankersData';
import { RankerHero } from '../components/rankers/RankerHero';
import { RankerFilters } from '../components/rankers/RankerFilters';
import { FeaturedRanker } from '../components/rankers/FeaturedRanker';
import { SecondaryRanker } from '../components/rankers/SecondaryRanker';
import { RankerCard } from '../components/rankers/RankerCard';
import { IscAchievementArchive } from '../components/rankers/IscAchievementArchive';
import { VerificationNotice } from '../components/rankers/VerificationNotice';
import { AdmissionsCTA } from '../components/rankers/AdmissionsCTA';
import { StudentImage } from '../components/rankers/StudentImage';
import { X, CheckCircle2, Award, BookOpen, RotateCcw, School, MapPin, ShieldCheck, Hash } from 'lucide-react';

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
    // Ensure all sections are revealed immediately
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

  // Available years for active board selection
  const availableYears = useMemo(() => {
    const years = new Set<string>();
    const sourceData =
      selectedBoard === 'ALL'
        ? rankersData
        : rankersData.filter((r) => r.board === selectedBoard);

    sourceData.forEach((r) => {
      years.add(r.year);
      if (r.batch) {
        years.add(r.batch.toString());
      }
    });

    // Custom order: sessions like '2025–26', '2024–25', then numerical reverse years
    return Array.from(years).sort((a, b) => {
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

  // Filtered dataset with robust year/session matching
  const filteredRankers = useMemo(() => {
    return rankersData.filter((r) => {
      if (selectedBoard !== 'ALL' && r.board !== selectedBoard) return false;
      if (selectedClass !== 'ALL' && (r.className || r.class) !== selectedClass) return false;

      if (selectedYear !== 'ALL') {
        const matches =
          r.year === selectedYear ||
          r.batch?.toString() === selectedYear ||
          (selectedYear === '2025' && (r.batch === 2025 || r.year === '2024–25')) ||
          (selectedYear === '2024–25' && (r.batch === 2025 || r.year === '2024–25'));
        if (!matches) return false;
      }

      return true;
    });
  }, [selectedBoard, selectedClass, selectedYear]);

  // Dynamic Featured and Archive Partition Logic
  // CRITICAL RULE: Only students with overallPercentage !== null participate in overall ranking
  const { primaryFeatured, secondaryFeatured, archiveList, isTiedSecondary, onlySubjectAchievements } = useMemo(() => {
    if (filteredRankers.length === 0) {
      return {
        primaryFeatured: null,
        secondaryFeatured: [],
        archiveList: [],
        isTiedSecondary: false,
        onlySubjectAchievements: false,
      };
    }

    const overallStudents = filteredRankers.filter(
      (r) => r.overallPercentage !== null && r.overallPercentage !== undefined
    );
    const subjectOnlyStudents = filteredRankers.filter((r) => r.overallPercentage === null);

    // If ALL matching students are historical subject-only candidates (e.g. ISC 2026, 2024, etc.)
    if (overallStudents.length === 0) {
      return {
        primaryFeatured: subjectOnlyStudents[0] || null,
        secondaryFeatured: subjectOnlyStudents.slice(1, 3),
        archiveList: subjectOnlyStudents,
        isTiedSecondary: false,
        onlySubjectAchievements: true,
      };
    }

    // Sort overall students descending by official overallPercentage
    const sortedOverall = [...overallStudents].sort(
      (a, b) => (b.overallPercentage ?? 0) - (a.overallPercentage ?? 0)
    );

    const primary = sortedOverall[0];
    const remainingOverall = sortedOverall.slice(1);

    let secondary: RankerRecord[] = [];
    let isTied = false;

    if (selectedBoard === 'ICSE') {
      // Tied 90% achievers or top next cohort
      if (remainingOverall.length > 0) {
        const nextScore = remainingOverall[0].overallPercentage;
        secondary = remainingOverall.filter((r) => r.overallPercentage === nextScore);
        isTied = secondary.length > 1;
        if (!isTied) {
          secondary = remainingOverall.slice(0, 3);
        }
      }
    } else if (selectedBoard === 'ISC') {
      secondary = remainingOverall.slice(0, 2);
    } else {
      secondary = remainingOverall.slice(0, 3);
    }

    // Archive list contains all filtered records (overall sorted first, then subject-only)
    const combinedArchive = [...sortedOverall, ...subjectOnlyStudents];

    return {
      primaryFeatured: primary,
      secondaryFeatured: secondary,
      archiveList: combinedArchive,
      isTiedSecondary: isTied,
      onlySubjectAchievements: false,
    };
  }, [filteredRankers, selectedBoard]);

  const handleResetFilters = () => {
    setSelectedBoard('ALL');
    setSelectedClass('ALL');
    setSelectedYear('ALL');
  };

  const ninetyPlusCount = useMemo(() => {
    return filteredRankers.filter(
      (r) => (r.overallPercentage ?? 0) >= 90 || (r.subjectResults?.some((s) => s.percentage >= 90) ?? false)
    ).length;
  }, [filteredRankers]);

  return (
    <div className="rankers-page-wrapper" style={{ backgroundColor: '#FAF8F5', minHeight: '100vh' }}>
      {/* 1. EDITORIAL HERO */}
      <RankerHero
        selectedBoard={selectedBoard}
        totalCount={filteredRankers.length}
        topScorer={primaryFeatured}
        ninetyPlusCount={ninetyPlusCount}
      />

      {/* 2. RESULTS FILTER NAVIGATION */}
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
        {/* Empty state if board has no current results */}
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
                Results for this board will appear here when published.
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
            {/* 3. FEATURED ACHIEVERS SECTION */}
            {primaryFeatured && (
              <section
                ref={featuredSectionRef}
                className="featured-achievers-section editorial-scroll-reveal"
                style={{
                  paddingTop: 'clamp(3.5rem, 6vw, 5rem)',
                  paddingBottom: 'clamp(3.5rem, 6vw, 5rem)',
                  position: 'relative',
                }}
                aria-label="Featured Achievers"
              >
                <div className="container" style={{ maxWidth: '1240px' }}>
                  {/* Section Eyebrow & Title */}
                  <div style={{ marginBottom: '2.5rem' }}>
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
                        {onlySubjectAchievements ? 'HISTORICAL MERIT SHOWCASE' : 'MERIT SHOWCASE'}
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
                      {onlySubjectAchievements
                        ? 'Distinguished board scholars with verified subject-specific achievements.'
                        : selectedBoard === 'ISC'
                        ? 'Celebrating our highest scoring scholars in Class XII ISC Board examinations.'
                        : selectedBoard === 'ICSE'
                        ? 'Celebrating our highest scoring scholars in Class X ICSE Board examinations.'
                        : 'Real achievements built through disciplined study, personal mentorship, and focused learning.'}
                    </p>
                  </div>

                  {/* Primary Featured Student Card */}
                  <div
                    key={`featured-${primaryFeatured.id}`}
                    style={{ marginBottom: secondaryFeatured.length > 0 ? '2.5rem' : 0 }}
                  >
                    <FeaturedRanker
                      ranker={primaryFeatured}
                      onViewDetails={setActiveModalRanker}
                    />
                  </div>

                  {/* Secondary Featured Students */}
                  {secondaryFeatured.length > 0 && (
                    <div style={{ marginTop: '2.75rem' }}>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.6rem',
                          marginBottom: '1.25rem',
                        }}
                      >
                        <span
                          style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: '0.74rem',
                            fontWeight: 800,
                            letterSpacing: '0.14em',
                            textTransform: 'uppercase',
                            color: '#8A8274',
                          }}
                        >
                          {isTiedSecondary
                            ? `TIED HIGH MERIT ACHIEVERS · ${secondaryFeatured[0].overallPercentage}%`
                            : onlySubjectAchievements
                            ? 'ADDITIONAL NOTABLE SCHOLARS'
                            : 'DISTINGUISHED MERIT ACHIEVERS'}
                        </span>
                        <div style={{ height: '1px', flex: 1, backgroundColor: '#E5DFD4' }} />
                      </div>

                      <div
                        key={`sec-grid-${selectedBoard}-${selectedYear}`}
                        style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                          gap: '2rem',
                        }}
                      >
                        {secondaryFeatured.map((secRanker) => (
                          <SecondaryRanker
                            key={secRanker.id}
                            ranker={secRanker}
                            onViewDetails={setActiveModalRanker}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </section>
            )}

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
                      ACADEMIC ARCHIVE
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
                      {selectedBoard === 'ALL' ? 'ALL RESULTS & ACHIEVEMENTS' : `${selectedBoard} RESULTS`}
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
                    Showing {archiveList.length} Verified {archiveList.length === 1 ? 'Record' : 'Records'}
                    {selectedBoard !== 'ALL' ? ` in ${selectedBoard}` : ''}
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
                  {archiveList.map((ranker, index) => (
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

        {/* 5. DEDICATED HISTORICAL ISC ACHIEVEMENT ARCHIVE SECTION */}
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
              maxWidth: '580px',
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

                  {/* If Overall Percentage exists */}
                  {activeModalRanker.overallPercentage !== null ? (
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
                          {activeModalRanker.overallPercentage}%
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
                        Certified Overall Result
                      </div>
                    </div>
                  ) : (
                    <div>
                      <span
                        style={{
                          display: 'inline-block',
                          backgroundColor: '#EBF4ED',
                          color: '#1B6B44',
                          padding: '0.35rem 0.75rem',
                          borderRadius: '6px',
                          fontSize: '0.76rem',
                          fontWeight: 800,
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                        }}
                      >
                        Documented Subject Achievements
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Subject Results Breakdown */}
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
                    <span>Subject-Wise Score Breakdown</span>
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

              {/* Verified Institutional Details */}
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
                      School & Board
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
                    </div>
                  </div>
                </div>

                {activeModalRanker.uid && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <Hash size={17} color="#1B6B44" style={{ flexShrink: 0 }} />
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
                        Board Candidate UID
                      </div>
                      <div
                        style={{
                          fontSize: '0.92rem',
                          color: '#10172B',
                          fontWeight: 600,
                          marginTop: '2px',
                          fontFamily: 'monospace',
                        }}
                      >
                        {activeModalRanker.uid}
                      </div>
                    </div>
                  </div>
                )}

                {activeModalRanker.location && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <MapPin size={17} color="#E6AA32" style={{ flexShrink: 0 }} />
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
                        Campus Location
                      </div>
                      <div
                        style={{
                          fontSize: '0.92rem',
                          color: '#423D33',
                          fontWeight: 500,
                          marginTop: '2px',
                        }}
                      >
                        {activeModalRanker.location}, Lucknow
                      </div>
                    </div>
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
                      Certified Official Record · Session {activeModalRanker.year}
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
