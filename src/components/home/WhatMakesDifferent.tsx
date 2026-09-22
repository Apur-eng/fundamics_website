import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useLenis } from '../../motion/lenis';

interface Differentiator {
  number: string;
  title: string;
  sentence: string;
}

const differentiators: Differentiator[] = [
  {
    number: '01',
    title: 'Personalized Attention',
    sentence:
      'Small batches ensure every student receives dedicated one-on-one doubt clearance and active faculty mentorship.',
  },
  {
    number: '02',
    title: 'Regular Testing',
    sentence:
      'Weekly chapter checkpoints, cumulative unit reviews, and authentic board-pattern simulation exams.',
  },
  {
    number: '03',
    title: 'Student LMS Portal',
    sentence:
      '24/7 digital access to curated chapter notes, assignment tracking, revision materials, and attendance records.',
  },
  {
    number: '04',
    title: 'Regular Attendance Tracking',
    sentence:
      'Instant parental updates and disciplined session tracking to cultivate an unbroken routine of academic excellence.',
  },
  {
    number: '05',
    title: 'Results & Performance Tracking',
    sentence:
      'Continuous academic monitoring that helps students, teachers, and parents understand progress and identify areas for improvement.',
  },
];

// Vertical step height (distance between each pillar) in pixels — tightened for a cohesive editorial timeline
const STEP_HEIGHT = 82;
// Node vertical offset from top of each pillar row to align with the heading baseline
const NODE_OFFSET_Y = 12;

export const WhatMakesDifferent: React.FC = () => {
  const { scrollTo } = useLenis();
  // Continuous scroll progress across stages: 0.000 to 4.000
  const [stageProgress, setStageProgress] = useState<number>(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Mobile active card state for stacked depth styling
  const [activeMobileIndex, setActiveMobileIndex] = useState<number>(0);

  // Refs for tracking
  const sectionRef = useRef<HTMLElement | null>(null);
  const mobileCardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Continuous scroll tracking
  const handleScroll = useCallback(() => {
    if (window.innerWidth >= 1024) {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const NAVBAR_HEIGHT = 72;
        const scrollDistance = rect.height - (window.innerHeight - NAVBAR_HEIGHT);

        if (scrollDistance > 0) {
          // Track scroll progress once section hits the 72px navbar
          const scrolled = NAVBAR_HEIGHT - rect.top;
          const normalized = Math.max(0, Math.min(1, scrolled / scrollDistance));
          // Progress from 0.000 (stage 0) to 4.000 (stage 4)
          const continuousProgress = normalized * 4;
          setStageProgress(continuousProgress);
        }
      }
    } else {
      // Mobile view active card tracking
      const mobileTriggerY = window.innerHeight * 0.45;
      let topVisibleIdx = 0;

      mobileCardRefs.current.forEach((el, idx) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= mobileTriggerY) {
          topVisibleIdx = idx;
        }
      });

      setActiveMobileIndex(topVisibleIdx);
    }
  }, []);

  useEffect(() => {
    let ticking = false;
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

    // Asynchronous initial check to prevent synchronous setState warning in React
    const rafId = window.requestAnimationFrame(() => {
      handleScroll();
    });

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [handleScroll]);

  // Click to smoothly jump to any pillar stage
  const jumpToStage = (index: number) => {
    if (!sectionRef.current) return;
    const NAVBAR_HEIGHT = 72;
    const rect = sectionRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const sectionStart = scrollTop + rect.top - NAVBAR_HEIGHT;
    const scrollDistance = rect.height - (window.innerHeight - NAVBAR_HEIGHT);
    const targetScrollY = sectionStart + (index / 4) * scrollDistance;
    scrollTo(targetScrollY);
  };

  // The active index for discrete readouts (e.g. "03 / 05")
  const activeDiscreteIndex = hoveredIndex !== null ? hoveredIndex : Math.min(4, Math.round(stageProgress));

  // Subtle left translation: 0px at start to -22px at the end
  const leftTranslateY = - (stageProgress / 4) * 22;

  // Active indicator dot position along the vertical rail line
  const totalRailHeight = 4 * STEP_HEIGHT;
  const greenLineHeight = Math.min(totalRailHeight, Math.max(0, (stageProgress / 4) * totalRailHeight));
  const activeIndicatorTop = NODE_OFFSET_Y + (stageProgress / 4) * totalRailHeight;

  return (
    <section
      ref={sectionRef}
      id="differentiation"
      className="more-than-classes-section"
      style={{
        backgroundColor: 'var(--surface-ivory)',  /* Warm ivory — editorial storytelling */
        borderBottom: '1px solid var(--surface-ivory-border)',
        position: 'relative',
      }}
      aria-label="More Than Just Classes"
    >
      {/* DESKTOP LAYOUT (>= 1024px): Pinned Stage with Continuous Progress    */}
      <div className="diff-desktop-stage">
        <div className="container" style={{ maxWidth: '1240px' }}>
          <div className="diff-desktop-layout">
            {/* LEFT COLUMN: Anchored & subtly moving upward with the section */}
            <div
              className="diff-sticky-left"
              style={{
                transform: `translateY(${leftTranslateY}px)`,
                transition: 'transform 80ms linear',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.18em',
                  color: '#1B6B44',
                  display: 'block',
                  marginBottom: '0.75rem',
                }}
              >
                INSTITUTIONAL RIGOR & CARE
              </span>

              <h2
                style={{
                  fontFamily: "'Newsreader', Georgia, serif",
                  fontSize: 'clamp(2.6rem, 3.8vw, 3.75rem)',
                  fontWeight: 600,
                  color: '#10172B',
                  lineHeight: 1.08,
                  letterSpacing: '-0.025em',
                  margin: '0 0 1.15rem 0',
                }}
              >
                More Than Just
                <br />
                Classes.
              </h2>

              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(0.98rem, 1.12vw, 1.08rem)',
                  color: '#555149',
                  lineHeight: 1.65,
                  margin: '0 0 1.75rem 0',
                  maxWidth: '410px',
                }}
              >
                Coaching should not be an anonymous lecture hall. We build genuine academic strength
                through small batches, daily accountability, continuous testing, and transparent analytics.
              </p>

              {/* Integrated Left Progress Indicator (Quiet, Refined, Non-Competing) */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.65rem',
                  maxWidth: '360px',
                  padding: '0.65rem 0.95rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.75)',
                  borderRadius: '8px',
                  border: '1px solid #E5DFD4',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
                    <span
                      style={{
                        width: '7px',
                        height: '7px',
                        borderRadius: '50%',
                        backgroundColor: '#1B6B44',
                      }}
                    />
                    <span
                      style={{
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        color: '#10172B',
                        letterSpacing: '0.01em',
                      }}
                    >
                      5 Core Pillars of Academic Mentorship
                    </span>
                  </div>

                  {/* Progress readout */}
                  <span
                    style={{
                      fontFamily: "'Newsreader', Georgia, serif",
                      fontSize: '0.98rem',
                      fontWeight: 600,
                      color: '#1B6B44',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {differentiators[activeDiscreteIndex]?.number} / 05
                  </span>
                </div>

                {/* Subtle Single Horizontal Progress Bar */}
                <div
                  style={{
                    height: '3px',
                    borderRadius: '2px',
                    backgroundColor: '#E5DFD4',
                    overflow: 'hidden',
                    position: 'relative',
                  }}
                  aria-hidden="true"
                >
                  <div
                    style={{
                      height: '100%',
                      width: `${Math.min(100, Math.max(10, ((stageProgress + 0.15) / 4) * 100))}%`,
                      backgroundColor: '#1B6B44',
                      borderRadius: '2px',
                      transition: 'width 80ms linear',
                    }}
                  />
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Refined Editorial Academic Timeline */}
            <div className="diff-rail-stage-viewport">
              <div
                className="diff-attached-rail-container"
                style={{
                  position: 'relative',
                  paddingLeft: '32px', // Grid offset from vertical line
                }}
              >
                {/* 1. Very Thin Neutral Vertical Base Line */}
                <div
                  style={{
                    position: 'absolute',
                    left: '4px',
                    top: `${NODE_OFFSET_Y}px`,
                    height: `${totalRailHeight}px`,
                    width: '1.5px',
                    backgroundColor: '#E2DCD2',
                    zIndex: 1,
                  }}
                />

                {/* 2. Active Green Progress Segment Synchronized with Scroll */}
                <div
                  style={{
                    position: 'absolute',
                    left: '4px',
                    top: `${NODE_OFFSET_Y}px`,
                    height: `${greenLineHeight}px`,
                    width: '1.5px',
                    backgroundColor: '#1B6B44',
                    zIndex: 2,
                    transition: 'height 80ms linear',
                  }}
                />

                {/* 3. Small Stationary Circular Nodes at Each Pillar Position */}
                {differentiators.map((_, i) => {
                  const nodeY = NODE_OFFSET_Y + i * STEP_HEIGHT;
                  const isPassed = stageProgress >= i - 0.15;

                  return (
                    <div
                      key={i}
                      style={{
                        position: 'absolute',
                        left: '0px',
                        top: `${nodeY - 4.5}px`,
                        width: '9.5px',
                        height: '9.5px',
                        borderRadius: '50%',
                        backgroundColor: isPassed ? '#1B6B44' : 'var(--surface-ivory)',
                        border: isPassed ? '1.5px solid #1B6B44' : '1.5px solid #C4BDB0',
                        zIndex: 3,
                        transition: 'background-color 150ms ease, border-color 150ms ease',
                      }}
                    />
                  );
                })}

                {/* 4. Active Node in Fundemics Green with Very Subtle Outer Ring (No Neon Glow) */}
                <div
                  className="diff-traveling-active-node"
                  style={{
                    position: 'absolute',
                    left: '-1px',
                    top: `${activeIndicatorTop - 5.5}px`,
                    width: '11.5px',
                    height: '11.5px',
                    borderRadius: '50%',
                    backgroundColor: '#1B6B44',
                    border: '2px solid var(--surface-ivory)',
                    boxShadow: '0 0 0 3px rgba(27, 107, 68, 0.18)',
                    zIndex: 5,
                    pointerEvents: 'none',
                    transition: 'top 80ms linear',
                  }}
                />

                {/* 5. The 5 Pillars Sharing a Clean Vertical Grid: NODE → NUMBER → HEADING → DESCRIPTION */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {differentiators.map((item, index) => {
                    const dist = Math.abs(index - stageProgress);
                    const isHovered = hoveredIndex === index;

                    // Active threshold
                    const isActive = dist < 0.5;
                    const isNearby = dist >= 0.5 && dist < 1.5;

                    // Clear, readable color hierarchy according to instructions:
                    // ACTIVE: Number: deep navy / green, Heading: deep navy, Description: dark readable gray, slightly larger scale
                    // NEARBY INACTIVE: Number: medium gray, Heading: medium-dark gray, Description: muted gray
                    // DISTANT INACTIVE: Number: lighter gray, Heading: lighter gray, Description: subtle gray (never near-white!)
                    let numberColor = '#9A9386';
                    let headingColor = '#655F55';
                    let descColor = '#7A7469';
                    let descOpacity = 0.78;

                    if (isActive || isHovered) {
                      numberColor = '#1B6B44';
                      headingColor = '#10172B';
                      descColor = '#343028';
                      descOpacity = 1;
                    } else if (isNearby) {
                      numberColor = '#787165';
                      headingColor = '#383329';
                      descColor = '#504B42';
                      descOpacity = 0.90;
                    }

                    return (
                      <div
                        key={item.number}
                        tabIndex={0}
                        role="button"
                        aria-label={`${item.number} ${item.title}`}
                        onClick={() => jumpToStage(index)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            jumpToStage(index);
                          }
                        }}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className="diff-pillar-item"
                        style={{
                          height: index === differentiators.length - 1 ? 'auto' : `${STEP_HEIGHT}px`,
                          cursor: 'pointer',
                          transform: `translateX(${isActive ? '5px' : '0px'})`,
                          transformOrigin: 'left center',
                          transition: 'transform 180ms ease-out',
                        }}
                      >
                        {/* Header Row: Number + Heading immediately beside the timeline node */}
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'baseline',
                            gap: '8px',
                            marginBottom: '0.2rem',
                          }}
                        >
                          {/* Number: Editorial, sitting beside node */}
                          <span
                            style={{
                              fontFamily: 'var(--font-display)',
                              fontSize: isActive ? '1.18rem' : '1.02rem',
                              fontWeight: isActive ? 800 : 600,
                              color: numberColor,
                              lineHeight: 1,
                              letterSpacing: '0.02em',
                              transition: 'color 180ms ease, font-size 180ms ease',
                              display: 'inline-block',
                              minWidth: '26px',
                            }}
                          >
                            {item.number}
                          </span>

                          {/* Heading: Deep navy when active, readable medium-dark when inactive */}
                          <h3
                            style={{
                              fontFamily: 'var(--font-display)',
                              fontSize: isActive ? '1.24rem' : '1.12rem',
                              fontWeight: isActive ? 800 : 600,
                              color: headingColor,
                              margin: 0,
                              letterSpacing: '-0.01em',
                              transition: 'color 180ms ease, font-size 180ms ease',
                            }}
                          >
                            {item.title}
                          </h3>
                        </div>

                        {/* Description: Indented to align with the Heading, always clearly readable */}
                        <p
                          style={{
                            fontFamily: 'var(--font-sans)',
                            fontSize: '0.90rem',
                            color: descColor,
                            opacity: descOpacity,
                            lineHeight: 1.52,
                            margin: 0,
                            paddingLeft: '34px', // Aligns directly under Heading (26px minWidth + 8px gap)
                            maxWidth: '480px',
                            transition: 'opacity 180ms ease, color 180ms ease',
                          }}
                        >
                          {item.sentence}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE LAYOUT (< 1024px): Scroll-Driven Overlapping Card Stack      */}
      <div className="diff-mobile-layout">
        <div className="container">
          {/* Mobile Header Intro */}
          <div style={{ marginBottom: '2.25rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.74rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.18em',
                color: '#1B6B44',
                display: 'block',
                marginBottom: '0.65rem',
              }}
            >
              INSTITUTIONAL RIGOR & CARE
            </span>

            <h2
              style={{
                fontFamily: "'Newsreader', Georgia, serif",
                fontSize: 'clamp(2.3rem, 7vw, 3rem)',
                fontWeight: 600,
                color: '#10172B',
                lineHeight: 1.1,
                letterSpacing: '-0.025em',
                margin: '0 0 0.85rem 0',
              }}
            >
              More Than Just
              <br />
              Classes.
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.96rem',
                color: '#555149',
                lineHeight: 1.58,
                margin: '0 0 1.35rem 0',
              }}
            >
              Coaching should not be an anonymous lecture hall. We build genuine academic strength
              through small batches, daily accountability, continuous testing, and transparent analytics.
            </p>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.55rem',
                backgroundColor: '#FFFFFF',
                padding: '0.5rem 0.95rem',
                borderRadius: '8px',
                border: '1px solid #E5DFD4',
                fontSize: '0.78rem',
                fontWeight: 600,
                color: '#10172B',
              }}
            >
              <span
                style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  backgroundColor: '#1B6B44',
                }}
              />
              <span>5 Core Pillars of Academic Mentorship</span>
            </div>
          </div>

          {/* Sticky Scroll-Driven Overlapping Card Stack */}
          <div className="diff-mobile-card-stack" style={{ position: 'relative' }}>
            {differentiators.map((item, index) => {
              const isPast = index < activeMobileIndex;
              const isCurrent = index === activeMobileIndex;

              // Scale and opacity adjustments for physical overlapping depth without excessive fading
              let cardScale = 1;
              let cardOpacity = 1;
              if (isPast) {
                cardScale = Math.max(0.96, 1 - (activeMobileIndex - index) * 0.02);
                cardOpacity = Math.max(0.90, 1 - (activeMobileIndex - index) * 0.05);
              }

              return (
                <div
                  key={item.number}
                  ref={(el) => {
                    mobileCardRefs.current[index] = el;
                  }}
                  className="diff-mobile-stack-card"
                  style={{
                    position: 'sticky',
                    top: `calc(75px + ${index * 12}px)`,
                    zIndex: index + 1,
                    marginBottom: index === differentiators.length - 1 ? '1.5rem' : '18vh',
                    backgroundColor: '#FFFFFF',
                    border: isCurrent ? '1.5px solid #1B6B44' : '1px solid #E2DCD2',
                    borderRadius: '12px',
                    padding: '1.5rem 1.35rem',
                    boxShadow: isCurrent
                      ? '0 10px 30px rgba(16, 23, 43, 0.08), 0 2px 6px rgba(16, 23, 43, 0.04)'
                      : '0 4px 14px rgba(16, 23, 43, 0.03)',
                    transform: `scale(${cardScale})`,
                    transformOrigin: 'top center',
                    opacity: cardOpacity,
                    transition: 'transform 250ms ease, opacity 250ms ease, border-color 250ms ease',
                  }}
                >
                  {/* Top Row: Number & Progress Tag */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '0.85rem',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.8rem',
                        fontWeight: 800,
                        color: isCurrent ? '#1B6B44' : '#10172B',
                        lineHeight: 1,
                        letterSpacing: '0.02em',
                      }}
                    >
                      {item.number}
                    </span>

                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        backgroundColor: 'var(--surface-ivory)',
                        border: '1px solid var(--surface-ivory-border)',
                        padding: '0.2rem 0.6rem',
                        borderRadius: '16px',
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
                          fontFamily: "'Newsreader', Georgia, serif",
                          fontSize: '0.82rem',
                          fontWeight: 600,
                          color: '#1B6B44',
                        }}
                      >
                        {item.number} / 05
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.2rem',
                      fontWeight: 750,
                      color: '#10172B',
                      margin: '0 0 0.55rem 0',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.90rem',
                      color: '#4A463F',
                      lineHeight: 1.55,
                      margin: 0,
                    }}
                  >
                    {item.sentence}
                  </p>

                  {/* Subtle Accent Bottom Line */}
                  <div
                    style={{
                      marginTop: '1.1rem',
                      height: '2px',
                      width: '36px',
                      backgroundColor: isCurrent ? '#1B6B44' : '#E2DCD2',
                      borderRadius: '1px',
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scoped CSS for Scroll-Driven Stage, Breakpoints & Motion Safety */}
      <style>{`
        /* Desktop: Section height provides scroll distance; Stage is pinned */
        @media (min-width: 1024px) {
          .more-than-classes-section {
            height: 300vh !important; /* Tightened from 380vh for reduced scroll fatigue */
          }

          .diff-desktop-stage {
            position: sticky !important;
            top: 72px !important;
            height: calc(100vh - 72px) !important;
            display: flex !important;
            align-items: center !important;
            box-sizing: border-box !important;
            overflow: visible !important;
          }

          .diff-desktop-layout {
            display: grid;
            grid-template-columns: 44% 56%;
            gap: clamp(2.5rem, 4vw, 4.5rem);
            align-items: center;
            width: 100%;
          }

          .diff-rail-stage-viewport {
            position: relative;
            overflow: visible;
          }

          .diff-mobile-layout {
            display: none !important;
          }
        }

        /* Mobile Viewports */
        @media (max-width: 1023px) {
          .more-than-classes-section {
            height: auto !important;
            padding-top: clamp(4rem, 7vw, 5.5rem) !important;
            padding-bottom: clamp(4.5rem, 7vw, 6rem) !important;
          }

          .diff-desktop-stage {
            display: none !important;
          }

          .diff-mobile-layout {
            display: block !important;
          }
        }

        /* Focus Ring Accessibility */
        .diff-pillar-item:focus-visible {
          outline: 2px solid #1B6B44;
          outline-offset: 4px;
        }

        /* Reduced Motion Fallbacks */
        @media (prefers-reduced-motion: reduce) {
          .more-than-classes-section {
            height: auto !important;
          }
          .diff-desktop-stage {
            position: relative !important;
            height: auto !important;
          }
          .diff-sticky-left,
          .diff-traveling-active-node {
            transform: none !important;
          }
          .diff-mobile-stack-card {
            position: relative !important;
            top: auto !important;
            margin-bottom: 1.5rem !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
};
