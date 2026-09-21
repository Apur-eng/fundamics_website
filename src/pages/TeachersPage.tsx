import React, { useState, useEffect } from 'react';
import { Link } from '../context/RouterContext';
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Layers,
  GraduationCap,
  Users,
} from 'lucide-react';
import { teachersData, FACULTY_CATEGORIES } from '../data/teachers';
import { TeacherCard } from '../components/teachers/TeacherCard';
import type { FacultyCategory } from '../types';

export const TeachersPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'ALL' | FacultyCategory>('ALL');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  const getCategoryCount = (cat: FacultyCategory) => {
    return teachersData.filter((t) => t.category === cat).length;
  };

  const categoriesToRender =
    activeCategory === 'ALL'
      ? FACULTY_CATEGORIES
      : FACULTY_CATEGORIES.filter((cat) => cat === activeCategory);

  return (
    <div className="faculty-page animate-fade-in" style={{ width: '100%', overflowX: 'clip' }}>
      {/* ==================================================================== */}
      {/* 1. HERO SECTION — Institutional Identity                             */}
      {/* ==================================================================== */}
      <section
        className="faculty-hero-section"
        style={{
          position: 'relative',
          backgroundColor: '#0C1424',
          color: '#FAF8F5',
          overflow: 'hidden',
          paddingTop: 'clamp(5.5rem, 8.5vw, 7.5rem)',
          paddingBottom: 'clamp(3.5rem, 5.5vw, 5rem)',
          minHeight: 'clamp(380px, 46vh, 480px)',
          display: 'flex',
          alignItems: 'center',
        }}
        aria-label="Our Faculty & Mentors Hero"
      >
        {/* Photographic Classroom Texture in Background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url('/assets/hero_classroom.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 35%',
            opacity: 0.18,
            pointerEvents: 'none',
          }}
          aria-hidden="true"
        />

        {/* Navy Linear and Radial Overlays */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to bottom, rgba(12, 20, 36, 0.65) 0%, #0C1424 80%, #0C1424 100%)',
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
              fontSize: 'clamp(2.65rem, 5vw, 4.2rem)',
              fontWeight: 600,
              color: '#FAF8F5',
              lineHeight: 1.1,
              letterSpacing: '-0.025em',
              margin: '0 auto 1.25rem auto',
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
              fontSize: 'clamp(1.02rem, 1.35vw, 1.18rem)',
              color: 'rgba(250, 248, 245, 0.86)',
              lineHeight: 1.65,
              margin: '0 auto',
              maxWidth: '700px',
            }}
          >
            Experienced educators, subject matter mentors, and academic leadership organized across dedicated pedagogical departments to help students build lasting fundamentals.
          </p>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 2. CATEGORY NAVIGATION / FILTER BAR                                  */}
      {/* ==================================================================== */}
      <nav
        className="faculty-category-nav"
        style={{
          backgroundColor: '#FAF8F5',
          borderTop: '1px solid #ECE7DE',
          borderBottom: '1px solid #ECE7DE',
          position: 'sticky',
          top: '72px',
          zIndex: 30,
          backdropFilter: 'blur(10px)',
          padding: '0.9rem 0',
        }}
        aria-label="Faculty Category Filter"
      >
        <div className="container" style={{ maxWidth: '1240px' }}>
          <div
            className="category-scroll-container"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.55rem',
              overflowX: 'auto',
              paddingBottom: '2px',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {/* "All" Tab */}
            <button
              type="button"
              onClick={() => setActiveCategory('ALL')}
              className={`category-pill-btn ${activeCategory === 'ALL' ? 'category-pill-active' : ''}`}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.82rem',
                fontWeight: activeCategory === 'ALL' ? 750 : 600,
                padding: '0.45rem 1rem',
                borderRadius: '999px',
                border: activeCategory === 'ALL' ? '1.5px solid #1B6B44' : '1px solid #E5DFD4',
                backgroundColor: activeCategory === 'ALL' ? '#1B6B44' : '#FFFFFF',
                color: activeCategory === 'ALL' ? '#FFFFFF' : '#10172B',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                transition: 'all 200ms ease',
                flexShrink: 0,
              }}
            >
              <Users size={14} />
              <span>All Faculty ({teachersData.length})</span>
            </button>

            {/* Individual Category Tabs */}
            {FACULTY_CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              const count = getCategoryCount(category);

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`category-pill-btn ${isActive ? 'category-pill-active' : ''}`}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.82rem',
                    fontWeight: isActive ? 750 : 600,
                    padding: '0.45rem 0.95rem',
                    borderRadius: '999px',
                    border: isActive ? '1.5px solid #1B6B44' : '1px solid #E5DFD4',
                    backgroundColor: isActive ? '#1B6B44' : '#FFFFFF',
                    color: isActive ? '#FFFFFF' : '#444038',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    transition: 'all 200ms ease',
                    flexShrink: 0,
                  }}
                >
                  <span>{category}</span>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      backgroundColor: isActive ? 'rgba(255, 255, 255, 0.25)' : '#F0ECE4',
                      color: isActive ? '#FFFFFF' : '#706A60',
                      padding: '0.1rem 0.45rem',
                      borderRadius: '999px',
                    }}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* ==================================================================== */}
      {/* 3. FACULTY CATEGORIES SECTIONS                                       */}
      {/* ==================================================================== */}
      <main
        style={{
          backgroundColor: '#FFFFFF',
          paddingTop: 'clamp(3.5rem, 6vw, 5.5rem)',
          paddingBottom: 'clamp(5rem, 8vw, 7.5rem)',
        }}
      >
        <div className="container" style={{ maxWidth: '1240px' }}>
          {categoriesToRender.map((category, catIdx) => {
            const facultyList = teachersData.filter((t) => t.category === category);

            return (
              <section
                key={category}
                id={`category-${category.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                style={{
                  marginBottom: catIdx === categoriesToRender.length - 1 ? 0 : 'clamp(3.5rem, 6vw, 5rem)',
                  paddingBottom: catIdx === categoriesToRender.length - 1 ? 0 : 'clamp(3rem, 5vw, 4.5rem)',
                  borderBottom: catIdx === categoriesToRender.length - 1 ? 'none' : '1px solid #ECE7DE',
                }}
              >
                {/* Category Header */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    flexWrap: 'wrap',
                    gap: '1rem',
                    marginBottom: '2rem',
                  }}
                >
                  <div>
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
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          backgroundColor: '#2BB06F',
                        }}
                      />
                      <span
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '0.74rem',
                          fontWeight: 800,
                          letterSpacing: '0.18em',
                          textTransform: 'uppercase',
                          color: '#1B6B44',
                        }}
                      >
                        DEPARTMENT {String(catIdx + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <h2
                      style={{
                        fontFamily: "'Newsreader', Georgia, serif",
                        fontSize: 'clamp(2rem, 3.2vw, 2.75rem)',
                        fontWeight: 600,
                        color: '#10172B',
                        lineHeight: 1.15,
                        margin: 0,
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {category}
                    </h2>
                  </div>

                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      color: '#706A60',
                      backgroundColor: '#FAF8F5',
                      border: '1px solid #ECE7DE',
                      padding: '0.3rem 0.8rem',
                      borderRadius: '999px',
                    }}
                  >
                    {facultyList.length} {facultyList.length === 1 ? 'Faculty Member' : 'Faculty Members'}
                  </span>
                </div>

                {/* Faculty Cards Grid */}
                <div className="faculty-category-grid">
                  {facultyList.map((teacher) => (
                    <TeacherCard key={teacher.id} teacher={teacher} />
                  ))}
                </div>
              </section>
            );
          })}

          {/* Institutional Note at Bottom */}
          <div
            style={{
              marginTop: 'clamp(3rem, 5vw, 4.5rem)',
              padding: '1.25rem 1.75rem',
              backgroundColor: '#FAF8F5',
              borderRadius: '12px',
              border: '1px solid #ECE6DA',
              textAlign: 'center',
              maxWidth: '860px',
              margin: 'clamp(3rem, 5vw, 4.5rem) auto 0 auto',
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
              Faculty batch allocations and academic schedules are coordinated across our Lucknow branches to maintain uniform teaching standards.
            </span>
          </div>
        </div>
      </main>

      {/* ==================================================================== */}
      {/* 4. FINAL CTA SECTION                                                 */}
      {/* ==================================================================== */}
      <section
        style={{
          backgroundColor: '#0C1424',
          color: '#FAF8F5',
          position: 'relative',
          overflow: 'hidden',
          padding: 'clamp(4.5rem, 7vw, 6rem) 0',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        }}
        aria-label="Learn With Fundemics CTA"
      >
        <div className="container" style={{ maxWidth: '1240px', position: 'relative', zIndex: 2 }}>
          <div className="faculty-cta-layout">
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
                  fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)',
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
                Explore our academic approach or speak with the Fundemics team about batch timings, syllabus coverage, and admissions.
              </p>
            </div>

            <div className="faculty-cta-buttons">
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

      {/* Scoped CSS */}
      <style>{`
        .faculty-category-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .category-pill-btn:hover {
          background-color: #F5EFE4 !important;
          border-color: #1B6B44 !important;
          color: #10172B !important;
        }

        .category-pill-active:hover {
          background-color: #1B6B44 !important;
          color: #FFFFFF !important;
        }

        .faculty-cta-layout {
          display: flex;
          align-items: center;
          justifyContent: space-between;
          flex-wrap: wrap;
          gap: 2.5rem;
        }

        .faculty-cta-buttons {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

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

        @media (max-width: 1024px) {
          .faculty-category-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.25rem;
          }
        }

        @media (max-width: 680px) {
          .faculty-category-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .faculty-cta-layout {
            flex-direction: column;
            align-items: flex-start;
          }

          .faculty-cta-buttons {
            flex-direction: column;
            width: 100%;
          }

          .faculty-cta-buttons a {
            width: 100%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .category-pill-btn,
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
