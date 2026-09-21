import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

interface MethodStage {
  number: string;
  principle: string;
  title: string;
  label?: string;
  description: string;
  image: string;
  caption: string;
}

const METHODS: MethodStage[] = [
  {
    number: '01',
    principle: 'ATTENTION',
    title: 'Small Batches',
    description:
      'More attention. More interaction. Every student gets room to ask, understand and improve.',
    image: '/assets/mentorship.jpg',
    caption: 'A classroom built around participation, not just attendance.',
  },
  {
    number: '02',
    principle: 'DIRECTION',
    title: 'Board-Focused Learning',
    label: 'ICSE · ISC · CBSE · STATE BOARD',
    description:
      'Academic support structured around the board and class students actually follow.',
    image: '/assets/hero_classroom.jpg',
    caption: 'Curriculum and instruction aligned directly to school board syllabi.',
  },
  {
    number: '03',
    principle: 'MEASUREMENT',
    title: 'Continuous Assessment',
    description:
      'Regular testing and performance tracking help identify strengths, gaps and areas that need more attention.',
    image: '/assets/about_vision.jpg',
    caption: 'Regular checkpoints and testing that track real academic growth.',
  },
  {
    number: '04',
    principle: 'CONTINUITY',
    title: 'Beyond the Classroom',
    description:
      'LMS access, revision material, attendance tracking and academic support extend learning beyond the classroom.',
    image: '/assets/achievers.jpg',
    caption: 'Curated revision resources and academic guidance extending beyond class hours.',
  },
];

const MOBILE_PANEL_CONFIG = [
  {
    bg: '#F8F4EA', // Stage 01: Warm Ivory
    border: '1px solid rgba(215, 203, 185, 0.75)',
    shadow: '0 -3px 12px rgba(16, 23, 43, 0.02), 0 8px 24px -6px rgba(16, 23, 43, 0.04)',
    imageVariant: 'full' as const, // Flush edge-to-edge
  },
  {
    bg: '#EDF3EC', // Stage 02: Very Pale Sage / Light Green
    border: '1px solid rgba(195, 215, 195, 0.8)',
    shadow: '0 -4px 16px rgba(16, 23, 43, 0.03), 0 8px 24px -6px rgba(16, 23, 43, 0.05)',
    imageVariant: 'inset' as const, // Inset with subtle padding
  },
  {
    bg: '#F8F4EA', // Stage 03: Warm Ivory
    border: '1px solid rgba(215, 203, 185, 0.75)',
    shadow: '0 -4px 16px rgba(16, 23, 43, 0.03), 0 8px 24px -6px rgba(16, 23, 43, 0.05)',
    imageVariant: 'full' as const, // Flush edge-to-edge
  },
  {
    bg: '#F5EEDC', // Stage 04: Very Pale Cream / Soft Gold
    border: '1px solid rgba(225, 210, 185, 0.8)',
    shadow: '0 -4px 16px rgba(16, 23, 43, 0.03), 0 8px 24px -6px rgba(16, 23, 43, 0.05)',
    imageVariant: 'inset' as const, // Inset with subtle padding
  },
];

export const WhyChooseFundemics: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeMobileStage, setActiveMobileStage] = useState<number>(0);
  const mobilePanelsRef = useRef<(HTMLElement | null)[]>([]);

  // Desktop and Mobile scroll tracking
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const isDesktop = window.innerWidth >= 1024;

      if (isDesktop && sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const NAVBAR_HEIGHT = 72;
        const scrollDistance = rect.height - window.innerHeight;

        if (scrollDistance > 0) {
          const scrolled = -rect.top + NAVBAR_HEIGHT;
          const progress = Math.max(0, Math.min(1, scrolled / scrollDistance));
          setScrollProgress(progress);

          // Map continuous scroll progress across the 4 stages (0 to 3)
          const currentStage = Math.min(3, Math.floor(progress * 4));
          setActiveIndex(currentStage);
        }
      } else if (!isDesktop) {
        // Mobile scroll tracking: evaluate which stage panel occupies central reading zone
        const triggerY = window.innerHeight * 0.48;
        let currentIdx = 0;
        mobilePanelsRef.current.forEach((el, idx) => {
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= triggerY) {
              currentIdx = idx;
            }
          }
        });
        setActiveMobileStage(currentIdx);
      }
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    // Initial check
    const rafId = window.requestAnimationFrame(handleScroll);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  // Jump smoothly to a specific stage on desktop or mobile
  const handleSelectMethod = (targetIndex: number) => {
    if (sectionRef.current && window.innerWidth >= 1024) {
      const rect = sectionRef.current.getBoundingClientRect();
      const NAVBAR_HEIGHT = 72;
      const scrollDistance = rect.height - window.innerHeight;
      // Position scroll near the center of the target stage
      const targetProgress = (targetIndex + 0.5) / 4;
      const targetScrollY = window.scrollY + rect.top - NAVBAR_HEIGHT + targetProgress * scrollDistance;
      window.scrollTo({ top: targetScrollY, behavior: 'smooth' });
    } else {
      setActiveIndex(targetIndex);
    }
  };

  const handleSelectMobileStage = (targetIndex: number) => {
    setActiveMobileStage(targetIndex);
    const targetEl = mobilePanelsRef.current[targetIndex];
    if (targetEl) {
      const NAVBAR_HEIGHT = 72;
      const top = targetEl.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT - 20;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const handleExploreCTA = () => {
    const target = document.getElementById('differentiation');
    if (target) {
      const NAVBAR_HEIGHT = 72;
      const top = target.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="why-choose-fundemics"
      className="fundemics-method-track"
      aria-label="The Fundemics Method"
      style={{
        backgroundColor: 'var(--surface-sage)',
        position: 'relative',
      }}
    >
      {/* ─────────────────────────────────────────────────────────────
          DESKTOP STICKY COMPOSITION (≥ 1024px)
          Pins as user scrolls, interpolates through 01 → 02 → 03 → 04,
          then releases cleanly into the next section.
          ───────────────────────────────────────────────────────────── */}
      <div className="fundemics-method-desktop">
        <div className="fundemics-method-sticky">
          <div className="container" style={{ maxWidth: '1240px', width: '100%' }}>
            {/* ─── Section Header ─── */}
            <div className="method-header">
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.55rem',
                  marginBottom: '0.65rem',
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
                    fontSize: '0.76rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.2em',
                    color: '#1B6B44',
                  }}
                >
                  THE FUNDEMICS METHOD
                </span>
              </div>

              <h2
                style={{
                  fontFamily: "'Newsreader', Georgia, serif",
                  fontSize: 'clamp(2.1rem, 3.2vw, 2.85rem)',
                  fontWeight: 600,
                  color: '#10172B',
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  margin: '0 0 0.45rem 0',
                }}
              >
                The difference is in how we teach.
              </h2>

              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(0.96rem, 1.15vw, 1.05rem)',
                  color: '#655F55',
                  lineHeight: 1.5,
                  margin: 0,
                }}
              >
                Focused learning. Personal attention. Continuous progress.
              </p>
            </div>

            {/* ─── Two-Column Method Showcase ─── */}
            <div className="method-grid">
              {/* LEFT: Photographic Column (Tall Editorial Aspect) */}
              <div className="method-image-col">
                <div className="method-image-frame">
                  {METHODS.map((m, idx) => (
                    <img
                      key={m.number}
                      src={m.image}
                      alt={m.title}
                      loading={idx === 0 ? 'eager' : 'lazy'}
                      className="method-stage-img"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition:
                          idx === 0
                            ? 'center 25%'
                            : idx === 1
                            ? 'center 35%'
                            : idx === 2
                            ? 'center 40%'
                            : 'center 20%',
                        opacity: activeIndex === idx ? 1 : 0,
                        transform: activeIndex === idx ? 'scale(1)' : 'scale(1.03)',
                        transition:
                          'opacity 650ms cubic-bezier(0.16, 1, 0.3, 1), transform 750ms cubic-bezier(0.16, 1, 0.3, 1)',
                        pointerEvents: activeIndex === idx ? 'auto' : 'none',
                      }}
                    />
                  ))}

                  {/* Stage Watermark Badge on Image */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '14px',
                      left: '14px',
                      backgroundColor: 'rgba(16, 23, 43, 0.86)',
                      backdropFilter: 'blur(6px)',
                      color: '#FFFFFF',
                      padding: '0.35rem 0.75rem',
                      borderRadius: '6px',
                      fontSize: '0.70rem',
                      fontWeight: 800,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      zIndex: 2,
                    }}
                  >
                    STAGE {METHODS[activeIndex].number} · {METHODS[activeIndex].principle}
                  </div>
                </div>

                {/* Editorial Caption Beneath Image */}
                <div style={{ marginTop: '0.75rem', minHeight: '1.8rem' }}>
                  <p
                    style={{
                      fontFamily: "'Newsreader', Georgia, serif",
                      fontStyle: 'italic',
                      fontSize: '0.94rem',
                      color: '#655F55',
                      margin: 0,
                      lineHeight: 1.45,
                    }}
                  >
                    {METHODS[activeIndex].caption}
                  </p>
                </div>
              </div>

              {/* RIGHT: Interactive Method Timeline */}
              <div className="method-content-col">
                {/* Background Oversized Subtle Poster Number */}
                <div
                  aria-hidden="true"
                  className="method-watermark-num"
                  style={{
                    position: 'absolute',
                    right: '5px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    fontFamily: "'Newsreader', Georgia, serif",
                    fontSize: 'clamp(140px, 15vw, 190px)',
                    fontWeight: 700,
                    color: 'rgba(16, 23, 43, 0.035)',
                    pointerEvents: 'none',
                    lineHeight: 1,
                    userSelect: 'none',
                  }}
                >
                  {METHODS[activeIndex].number}
                </div>

                {/* Top Subtle Horizontal Progress Indicator: 01 ───── 02 ───── 03 ───── 04 */}
                <div
                  className="method-progress-bar"
                  role="tablist"
                  aria-label="Fundemics Method Stages"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.85rem',
                    marginBottom: '1.75rem',
                    paddingBottom: '1rem',
                    borderBottom: '1px solid var(--surface-sage-border)',
                  }}
                >
                  {METHODS.map((m, idx) => {
                    const isPassed = activeIndex > idx;
                    const isCurrent = activeIndex === idx;

                    return (
                      <React.Fragment key={m.number}>
                        <button
                          type="button"
                          role="tab"
                          aria-selected={isCurrent}
                          aria-label={`Method Stage ${m.number}: ${m.principle}`}
                          onClick={() => handleSelectMethod(idx)}
                          className="method-step-pill"
                          style={{
                            background: 'none',
                            border: 'none',
                            padding: '0.25rem 0',
                            fontFamily: 'var(--font-display)',
                            fontSize: '0.82rem',
                            fontWeight: isCurrent ? 800 : 700,
                            letterSpacing: '0.1em',
                            color: isCurrent ? '#10172B' : isPassed ? '#1B6B44' : '#8A8274',
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.35rem',
                            transition: 'color 250ms ease',
                          }}
                        >
                          <span style={{ color: isCurrent || isPassed ? '#1B6B44' : 'inherit' }}>
                            {m.number}
                          </span>
                          <span style={{ fontSize: '0.70rem', textTransform: 'uppercase' }}>
                            {m.principle}
                          </span>
                        </button>

                        {/* Progress connecting line */}
                        {idx < METHODS.length - 1 && (
                          <div
                            style={{
                              flex: 1,
                              height: '2px',
                              backgroundColor: 'rgba(16, 23, 43, 0.08)',
                              borderRadius: '1px',
                              position: 'relative',
                              overflow: 'hidden',
                            }}
                          >
                            <div
                              style={{
                                position: 'absolute',
                                inset: 0,
                                backgroundColor: '#1B6B44',
                                transform: `scaleX(${
                                  isPassed
                                    ? 1
                                    : isCurrent
                                    ? Math.max(0, Math.min(1, (scrollProgress - idx * 0.25) / 0.25))
                                    : 0
                                })`,
                                transformOrigin: 'left center',
                                transition: 'transform 100ms linear',
                              }}
                            />
                          </div>
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>

                {/* 4 Method Items: Active Dominates, Inactive Subdued But Completely Legible */}
                <div className="method-items-container">
                  {METHODS.map((item, idx) => {
                    const isActive = activeIndex === idx;
                    const isHovered = hoveredIndex === idx;

                    return (
                      <div
                        key={item.number}
                        className={`method-timeline-row ${isActive ? 'is-active' : 'is-inactive'}`}
                        onMouseEnter={() => setHoveredIndex(idx)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        onClick={() => !isActive && handleSelectMethod(idx)}
                        style={{
                          position: 'relative',
                          paddingLeft: '1.35rem',
                          cursor: isActive ? 'default' : 'pointer',
                          marginBottom: isActive ? '1.5rem' : '0.85rem',
                          transition: 'margin 350ms cubic-bezier(0.16, 1, 0.3, 1)',
                        }}
                      >
                        {/* Active Green Vertical Accent Indicator */}
                        <div
                          style={{
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            bottom: 0,
                            width: '3px',
                            backgroundColor: '#1B6B44',
                            borderRadius: '2px',
                            opacity: isActive ? 1 : isHovered ? 0.45 : 0,
                            transform: isActive || isHovered ? 'scaleY(1)' : 'scaleY(0)',
                            transformOrigin: 'top center',
                            transition:
                              'opacity 350ms ease, transform 350ms cubic-bezier(0.16, 1, 0.3, 1)',
                          }}
                          aria-hidden="true"
                        />

                        {isActive ? (
                          /* ── ACTIVE PRINCIPLE (Large, detailed, dark navy, dominant) ── */
                          <div className="method-active-card">
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'baseline',
                                gap: '1rem',
                                marginBottom: '0.45rem',
                              }}
                            >
                              <span
                                style={{
                                  fontFamily: "'Newsreader', Georgia, serif",
                                  fontSize: 'clamp(3.4rem, 5vw, 4.4rem)',
                                  fontWeight: 700,
                                  color: '#10172B',
                                  lineHeight: 0.92,
                                  letterSpacing: '-0.03em',
                                  display: 'inline-block',
                                }}
                              >
                                {item.number}
                              </span>

                              <div>
                                <span
                                  style={{
                                    fontFamily: 'var(--font-display)',
                                    fontSize: '0.74rem',
                                    fontWeight: 800,
                                    letterSpacing: '0.2em',
                                    textTransform: 'uppercase',
                                    color: '#1B6B44',
                                    display: 'block',
                                    marginBottom: '0.15rem',
                                  }}
                                >
                                  {item.principle}
                                </span>

                                <h3
                                  style={{
                                    fontFamily: "'Newsreader', Georgia, serif",
                                    fontSize: 'clamp(1.5rem, 2vw, 1.95rem)',
                                    fontWeight: 600,
                                    color: '#10172B',
                                    margin: 0,
                                    letterSpacing: '-0.015em',
                                  }}
                                >
                                  {item.title}
                                </h3>
                              </div>
                            </div>

                            {/* Optional Board Label (02 DIRECTION) */}
                            {item.label && (
                              <div
                                style={{
                                  display: 'inline-block',
                                  fontFamily: 'var(--font-display)',
                                  fontSize: '0.72rem',
                                  fontWeight: 750,
                                  letterSpacing: '0.1em',
                                  color: '#1B6B44',
                                  backgroundColor: 'rgba(27, 107, 68, 0.09)',
                                  padding: '0.25rem 0.65rem',
                                  borderRadius: '4px',
                                  textTransform: 'uppercase',
                                  marginBottom: '0.65rem',
                                }}
                              >
                                {item.label}
                              </div>
                            )}

                            {/* Active Stage Description */}
                            <p
                              style={{
                                fontFamily: 'var(--font-sans)',
                                fontSize: 'clamp(0.96rem, 1.1vw, 1.05rem)',
                                color: '#3A3530',
                                lineHeight: 1.62,
                                margin: 0,
                                maxWidth: '520px',
                              }}
                            >
                              {item.description}
                            </p>
                          </div>
                        ) : (
                          /* ── INACTIVE PRINCIPLE (Visible, readable, subdued gray) ── */
                          <div
                            className="method-inactive-row"
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              padding: '0.45rem 0',
                              borderBottom: '1px solid rgba(16, 23, 43, 0.06)',
                              opacity: isHovered ? 0.95 : 0.62,
                              transition: 'opacity 250ms ease',
                            }}
                          >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                              <span
                                style={{
                                  fontFamily: "'Newsreader', Georgia, serif",
                                  fontSize: '1.25rem',
                                  fontWeight: 700,
                                  color: isHovered ? '#1B6B44' : '#8A8274',
                                  minWidth: '1.8rem',
                                  transition: 'color 200ms ease',
                                }}
                              >
                                {item.number}
                              </span>

                              <span
                                style={{
                                  fontFamily: 'var(--font-display)',
                                  fontSize: '0.70rem',
                                  fontWeight: 800,
                                  letterSpacing: '0.14em',
                                  textTransform: 'uppercase',
                                  color: isHovered ? '#1B6B44' : '#8A8274',
                                  transition: 'color 200ms ease',
                                }}
                              >
                                {item.principle}
                              </span>

                              <span style={{ color: 'rgba(16, 23, 43, 0.25)', fontSize: '0.8rem' }}>
                                ·
                              </span>

                              <span
                                style={{
                                  fontFamily: 'var(--font-display)',
                                  fontSize: '0.94rem',
                                  fontWeight: 700,
                                  color: isHovered ? '#10172B' : '#555149',
                                  transition: 'color 200ms ease',
                                }}
                              >
                                {item.title}
                              </span>
                            </div>

                            <span
                              style={{
                                fontFamily: 'var(--font-display)',
                                fontSize: '0.74rem',
                                fontWeight: 700,
                                color: '#1B6B44',
                                opacity: isHovered ? 1 : 0,
                                transform: isHovered ? 'translateX(0)' : 'translateX(-6px)',
                                transition: 'all 200ms ease',
                              }}
                            >
                              View Stage →
                            </span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* ─── Editorial Text CTA ─── */}
            <div
              style={{
                marginTop: '1.75rem',
                paddingTop: '1.15rem',
                borderTop: '1px solid var(--surface-sage-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.88rem',
                  color: '#8A8274',
                  margin: 0,
                  fontStyle: 'italic',
                }}
              >
                Each of these principles is lived daily across all three Fundemics centres.
              </p>

              <button
                type="button"
                onClick={handleExploreCTA}
                className="why-explore-cta"
                aria-label="Explore how we teach — scroll to More Than Just Classes section"
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.92rem',
                  fontWeight: 700,
                  color: '#10172B',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  transition: 'color 250ms ease, gap 250ms ease',
                }}
              >
                <span>Explore how we teach</span>
                <ArrowRight size={15} color="#1B6B44" strokeWidth={2.2} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          MOBILE STACKED EXPERIENCE (< 1024px)
          Per Prompt Section 16: Stacked scroll-driven narrative,
          each method with clear typography, badge, image & caption.
          ───────────────────────────────────────────────────────────── */}
      {/* ─────────────────────────────────────────────────────────────
          MOBILE EDITORIAL OVERLAPPING STACK (< 1024px)
          Designed specifically for mobile:
          - No generic cards; magazine/yearbook editorial panels
          - Subtle surface color rhythm (#F8F4EA, #EDF3EC, #F8F4EA, #F5EEDC)
          - Natural vertical scroll with 26px overlapping physical stack
          - Synchronized 01/04 progress indicator
          - Large serif chapter markers (01, 02, 03, 04)
          - Image rhythm (full width vs inset)
          - Desktop remains 100% untouched
          ───────────────────────────────────────────────────────────── */}
      <div className="fundemics-method-mobile">
        <div
          className="container"
          style={{
            paddingTop: 'clamp(2.75rem, 6vw, 3.5rem)',
            paddingBottom: 'clamp(3.5rem, 7vw, 4.5rem)',
            paddingLeft: 'clamp(1rem, 4.5vw, 1.25rem)',
            paddingRight: 'clamp(1rem, 4.5vw, 1.25rem)',
            maxWidth: '640px',
            margin: '0 auto',
          }}
        >
          {/* Mobile Section Header (Point 15) */}
          <div style={{ marginBottom: '1.75rem' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '0.65rem',
              }}
            >
              <span
                style={{
                  width: '18px',
                  height: '2px',
                  backgroundColor: '#1B6B44',
                  display: 'inline-block',
                  borderRadius: '1px',
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.74rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.18em',
                  color: '#1B6B44',
                }}
              >
                THE FUNDEMICS METHOD
              </span>
            </div>

            <h2
              style={{
                fontFamily: "'Newsreader', Georgia, serif",
                fontSize: 'clamp(2.15rem, 7.5vw, 2.7rem)',
                fontWeight: 600,
                color: '#10172B',
                lineHeight: 1.12,
                letterSpacing: '-0.02em',
                margin: '0 0 0.55rem 0',
              }}
            >
              The difference is in how we teach.
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(1.05rem, 3.8vw, 1.2rem)',
                color: '#655F55',
                lineHeight: 1.45,
                margin: 0,
              }}
            >
              Focused learning. Personal attention. Continuous progress.
            </p>
          </div>

          {/* Mobile Synchronized Progress Indicator (Point 17) */}
          <div
            className="mobile-method-progress"
            aria-label={`Method Stage Progress: ${activeMobileStage + 1} of 4`}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '1.75rem',
              padding: '0.6rem 0.85rem',
              backgroundColor: 'rgba(255, 255, 255, 0.7)',
              borderRadius: '8px',
              border: '1px solid rgba(27, 107, 68, 0.12)',
              backdropFilter: 'blur(4px)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: '#1B6B44',
                  display: 'inline-block',
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: '#1B6B44',
                }}
              >
                STAGE {METHODS[activeMobileStage].number} · {METHODS[activeMobileStage].principle}
              </span>
            </div>

            {/* Stepper pills & counter */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
              <div style={{ display: 'flex', gap: '4px' }}>
                {METHODS.map((m, i) => (
                  <button
                    key={m.number}
                    type="button"
                    onClick={() => handleSelectMobileStage(i)}
                    aria-label={`Jump to Stage ${m.number}`}
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: '4px 0',
                      cursor: 'pointer',
                    }}
                  >
                    <span
                      style={{
                        display: 'block',
                        width: activeMobileStage === i ? '18px' : '6px',
                        height: '4px',
                        borderRadius: '2px',
                        backgroundColor: activeMobileStage === i ? '#1B6B44' : 'rgba(16, 23, 43, 0.18)',
                        transition: 'all 250ms cubic-bezier(0.16, 1, 0.3, 1)',
                      }}
                    />
                  </button>
                ))}
              </div>

              <span
                style={{
                  fontFamily: "'Newsreader', Georgia, serif",
                  fontSize: '0.94rem',
                  fontWeight: 700,
                  color: '#10172B',
                  letterSpacing: '0.02em',
                }}
              >
                {METHODS[activeMobileStage].number} <span style={{ color: '#8A8274', fontWeight: 400 }}>/ 04</span>
              </span>
            </div>
          </div>

          {/* Overlapping Stacked Editorial Panels (Points 4, 12, 13, 14) */}
          <div
            className="mobile-method-stack"
            style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {METHODS.map((m, idx) => {
              const panelConfig = MOBILE_PANEL_CONFIG[idx] || MOBILE_PANEL_CONFIG[0];
              const isActive = activeMobileStage === idx;
              const isPast = activeMobileStage > idx;

              return (
                <article
                  key={m.number}
                  ref={(el) => {
                    mobilePanelsRef.current[idx] = el;
                  }}
                  className={`mobile-method-panel ${isActive ? 'is-active' : isPast ? 'is-past' : 'is-future'}`}
                  style={{
                    position: 'relative',
                    zIndex: idx + 1,
                    marginTop: idx === 0 ? 0 : '-26px', // 26px subtle physical overlap
                    backgroundColor: panelConfig.bg,
                    borderRadius: '12px',
                    border: panelConfig.border,
                    overflow: 'hidden',
                    boxShadow: panelConfig.shadow,
                    transition:
                      'transform 350ms cubic-bezier(0.16, 1, 0.3, 1), opacity 350ms ease, box-shadow 350ms ease',
                    opacity: isActive ? 1 : isPast ? 0.94 : 0.90,
                    transform: isActive
                      ? 'scale(1) translateY(0)'
                      : isPast
                      ? 'scale(0.992) translateY(-2px)'
                      : 'scale(0.985) translateY(0)',
                  }}
                >
                  {/* Image Treatment with Visual Rhythm (Points 8 & 9) */}
                  <div
                    style={
                      panelConfig.imageVariant === 'inset'
                        ? {
                            position: 'relative',
                            margin: '12px 12px 0 12px',
                            borderRadius: '8px',
                            overflow: 'hidden',
                            height: '225px',
                            backgroundColor: '#EDE7DB',
                          }
                        : {
                            position: 'relative',
                            width: '100%',
                            height: '235px',
                            backgroundColor: '#EDE7DB',
                            overflow: 'hidden',
                            borderTopLeftRadius: '11px',
                            borderTopRightRadius: '11px',
                          }
                    }
                  >
                    <img
                      src={m.image}
                      alt={m.title}
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition:
                          idx === 0
                            ? 'center 25%'
                            : idx === 1
                            ? 'center 35%'
                            : idx === 2
                            ? 'center 40%'
                            : 'center 20%',
                        display: 'block',
                      }}
                    />

                    {/* Stage Label Badge: Deep navy + warm ivory (Point 6) */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '10px',
                        left: '10px',
                        backgroundColor: '#10172B',
                        color: '#FAF8F5',
                        padding: '0.32rem 0.68rem',
                        borderRadius: '4px',
                        fontSize: '0.68rem',
                        fontWeight: 800,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.25)',
                        zIndex: 2,
                      }}
                    >
                      STAGE {m.number} · {m.principle}
                    </div>
                  </div>

                  {/* Panel Content (Points 5, 7, 18, 19) */}
                  <div
                    style={{
                      padding: '1.45rem 1.35rem 2.25rem 1.35rem',
                    }}
                  >
                    {/* Chapter Marker: Large Serif Stage Number + Title */}
                    <div style={{ marginBottom: '0.65rem' }}>
                      <div
                        style={{
                          fontFamily: "'Newsreader', Georgia, serif",
                          fontSize: 'clamp(3.2rem, 11vw, 3.8rem)',
                          fontWeight: 700,
                          color: isActive ? '#10172B' : '#555149',
                          lineHeight: 0.9,
                          letterSpacing: '-0.03em',
                          marginBottom: '0.35rem',
                          transition: 'color 300ms ease',
                        }}
                      >
                        {m.number}
                      </div>

                      <h3
                        style={{
                          fontFamily: "'Newsreader', Georgia, serif",
                          fontSize: 'clamp(1.5rem, 5.5vw, 1.85rem)',
                          fontWeight: 600,
                          color: '#10172B',
                          lineHeight: 1.15,
                          letterSpacing: '-0.015em',
                          margin: 0,
                        }}
                      >
                        {m.title}
                      </h3>
                    </div>

                    {/* Stage 02 Special Distinctive Board Line: ICSE · ISC · CBSE · UP BOARD (Point 18) */}
                    {m.label && (
                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.45rem',
                          fontFamily: 'var(--font-display)',
                          fontSize: '0.74rem',
                          fontWeight: 800,
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                          color: '#1B6B44',
                          margin: '0.15rem 0 0.85rem 0',
                        }}
                      >
                        <span>{m.label}</span>
                      </div>
                    )}

                    {/* Main Description */}
                    <p
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.96rem',
                        color: '#3A3530',
                        lineHeight: 1.62,
                        margin: '0 0 1.15rem 0',
                      }}
                    >
                      {m.description}
                    </p>

                    {/* Small Editorial Caption in Serif Italic (Point 19) */}
                    <p
                      style={{
                        fontFamily: "'Newsreader', Georgia, serif",
                        fontStyle: 'italic',
                        fontSize: '0.90rem',
                        color: '#655F55',
                        lineHeight: 1.45,
                        margin: 0,
                        paddingTop: '0.85rem',
                        borderTop: '1px solid rgba(16, 23, 43, 0.08)',
                      }}
                    >
                      {m.caption}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Section End Note & CTA (Point 14) */}
          <div
            style={{
              marginTop: '2.5rem',
              textAlign: 'center',
              paddingTop: '1.75rem',
              borderTop: '1px solid var(--surface-sage-border)',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.88rem',
                color: '#8A8274',
                fontStyle: 'italic',
                marginBottom: '1rem',
                lineHeight: 1.5,
              }}
            >
              Each of these principles is lived daily across all three Fundemics centres.
            </p>

            <button
              type="button"
              onClick={handleExploreCTA}
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                fontFamily: 'var(--font-display)',
                fontSize: '0.92rem',
                fontWeight: 700,
                color: '#10172B',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                transition: 'color 250ms ease, gap 250ms ease',
              }}
              className="why-explore-cta"
            >
              <span>Explore how we teach</span>
              <ArrowRight size={15} color="#1B6B44" strokeWidth={2.2} />
            </button>
          </div>
        </div>
      </div>

      {/* Scoped Responsive & Animation Styles */}
      <style>{`
        /* Desktop Sticky Architecture (≥ 1024px) */
        @media (min-width: 1024px) {
          .fundemics-method-track {
            height: calc(100vh + 1400px);
            position: relative;
            border-bottom: 1px solid var(--surface-sage-border);
          }

          .fundemics-method-desktop {
            display: block;
            position: relative;
            height: 100%;
          }

          .fundemics-method-sticky {
            position: sticky;
            top: 72px;
            height: calc(100vh - 72px);
            min-height: 640px;
            max-height: 860px;
            display: flex;
            align-items: center;
            overflow: hidden;
          }

          .fundemics-method-mobile {
            display: none !important;
          }

          .method-grid {
            display: grid;
            grid-template-columns: minmax(0, 42%) minmax(0, 58%);
            gap: clamp(2.5rem, 4.5vw, 4rem);
            align-items: center;
          }

          .method-image-frame {
            position: relative;
            width: 100%;
            height: clamp(380px, 46vh, 460px);
            border-radius: 12px;
            overflow: hidden;
            background-color: #E2DDD3;
            box-shadow: 0 14px 36px -10px rgba(16, 23, 43, 0.08);
          }

          .method-content-col {
            position: relative;
            padding-left: clamp(1rem, 2vw, 2rem);
            border-left: 1px solid var(--surface-sage-border);
          }
        }

        /* Mobile View (< 1024px) */
        @media (max-width: 1023px) {
          .fundemics-method-track {
            height: auto !important;
          }

          .fundemics-method-desktop {
            display: none !important;
          }

          .fundemics-method-mobile {
            display: block !important;
          }
        }

        .why-explore-cta:hover {
          color: #1B6B44 !important;
          gap: 0.75rem !important;
        }

        .method-step-pill:hover {
          color: #10172B !important;
        }

        /* Active Card animation when stage transitions */
        .method-active-card {
          animation: methodCardSlideIn 450ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes methodCardSlideIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .method-stage-img {
            transition: none !important;
          }
          .method-active-card {
            animation: none !important;
          }
          .mobile-method-panel {
            transform: none !important;
            transition: none !important;
            opacity: 1 !important;
          }
        }
      `}</style>
    </section>
  );
};
