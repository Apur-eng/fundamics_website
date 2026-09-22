import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { rankersData, type RankerRecord } from '../../data/rankersData';
import { DeckCard } from './DeckCard';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from '../../context/RouterContext';

export interface RankerCarouselProps {
  students?: RankerRecord[];
  onSelectStudent?: (student: RankerRecord) => void;
  showBottomCta?: boolean;
}

export const RankerCarousel: React.FC<RankerCarouselProps> = ({
  students,
  onSelectStudent,
  showBottomCta = true,
}) => {
  // Dynamically filter and sort rankers
  const sortedRankers = useMemo(() => {
    if (students && students.length > 0) {
      return students;
    }
    return rankersData
      .filter((r) => r.overallPercentage !== null && r.overallPercentage !== undefined)
      .sort((a, b) => (b.overallPercentage ?? 0) - (a.overallPercentage ?? 0));
  }, [students]);

  // Center/featured student index
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const total = sortedRankers.length;

  // Reset current index when students dataset changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [students]);

  useEffect(() => {
    if (currentIndex >= total && total > 0) {
      setCurrentIndex(0);
    }
  }, [total, currentIndex]);

  // Viewport dimensions
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 1440
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 640;
  const isTablet = windowWidth >= 640 && windowWidth < 1024;

  // Step spacing between adjacent cards (in pixels)
  const stepWidth = isMobile ? 170 : isTablet ? 220 : 290;

  // Reduced motion preference
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(() =>
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  // Autoplay Refs
  const autoplayTimerRef = useRef<number | null>(null);
  const resumeTimerRef = useRef<number | null>(null);
  const isHoveredRef = useRef<boolean>(false);

  const clearAutoplayTimers = useCallback(() => {
    if (autoplayTimerRef.current !== null) {
      window.clearInterval(autoplayTimerRef.current);
      autoplayTimerRef.current = null;
    }
    if (resumeTimerRef.current !== null) {
      window.clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }
  }, []);

  const pauseAutoplay = useCallback(() => {
    clearAutoplayTimers();
  }, [clearAutoplayTimers]);

  // ==========================================
  // UNIFIED CAROUSEL NAVIGATION CONTROLLER
  // ==========================================

  const goToNext = useCallback(() => {
    pauseAutoplay();
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total, pauseAutoplay]);

  const goToPrevious = useCallback(() => {
    pauseAutoplay();
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total, pauseAutoplay]);

  const goToIndex = useCallback((idx: number) => {
    pauseAutoplay();
    setCurrentIndex(idx);
  }, [pauseAutoplay]);

  // Resume autoplay after 4 seconds of user inactivity
  const scheduleResumeAutoplay = useCallback(() => {
    if (isHoveredRef.current) return;
    clearAutoplayTimers();
    resumeTimerRef.current = window.setTimeout(() => {
      if (isHoveredRef.current) return;
      autoplayTimerRef.current = window.setInterval(() => {
        if (!isHoveredRef.current) {
          goToNext();
        }
      }, 5000);
    }, 4000);
  }, [clearAutoplayTimers, goToNext]);

  // Start autoplay on initial mount
  useEffect(() => {
    scheduleResumeAutoplay();
    return () => clearAutoplayTimers();
  }, [scheduleResumeAutoplay, clearAutoplayTimers]);

  // Keyboard navigation (ArrowLeft / ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        document.activeElement?.tagName === 'INPUT' ||
        document.activeElement?.tagName === 'TEXTAREA'
      ) {
        return;
      }

      if (e.key === 'ArrowLeft') {
        goToPrevious();
        scheduleResumeAutoplay();
      } else if (e.key === 'ArrowRight') {
        goToNext();
        scheduleResumeAutoplay();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToPrevious, goToNext, scheduleResumeAutoplay]);

  // ==========================================
  // LAPTOP TRACKPAD TWO-FINGER GESTURE (wheel deltaX)
  // ==========================================
  const stageRef = useRef<HTMLDivElement>(null);
  const wheelDeltaXRef = useRef<number>(0);
  const wheelLockoutRef = useRef<boolean>(false);
  const wheelResetTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      const absX = Math.abs(e.deltaX);
      const absY = Math.abs(e.deltaY);

      // Only handle intentional horizontal trackpad gesture
      // (Do NOT hijack vertical page scrolling!)
      if (absX > absY && absX > 10) {
        // Prevent default browser horizontal page swipe history navigation
        e.preventDefault();

        pauseAutoplay();

        if (wheelLockoutRef.current) return;

        wheelDeltaXRef.current += e.deltaX;

        // Reset accumulation if user pauses
        if (wheelResetTimerRef.current !== null) {
          window.clearTimeout(wheelResetTimerRef.current);
        }
        wheelResetTimerRef.current = window.setTimeout(() => {
          wheelDeltaXRef.current = 0;
        }, 250);

        // Threshold to advance by one student
        if (wheelDeltaXRef.current > 30) {
          wheelDeltaXRef.current = 0;
          wheelLockoutRef.current = true;
          goToNext();
          scheduleResumeAutoplay();
          window.setTimeout(() => {
            wheelLockoutRef.current = false;
          }, 450);
        } else if (wheelDeltaXRef.current < -30) {
          wheelDeltaXRef.current = 0;
          wheelLockoutRef.current = true;
          goToPrevious();
          scheduleResumeAutoplay();
          window.setTimeout(() => {
            wheelLockoutRef.current = false;
          }, 450);
        }
      }
      // If absY >= absX, normal vertical scroll happens completely untouched!
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [goToNext, goToPrevious, pauseAutoplay, scheduleResumeAutoplay]);

  // ==========================================
  // DRAG VS CLICK / TAP COMPATIBILITY CONTROLLER
  // ==========================================
  // 8–10px threshold: movement <= 8px is treated as a CLICK/TAP
  // movement > 8px is treated as a DRAG/SWIPE, preventing accidental card selection.
  const isDraggingRef = useRef<boolean>(false);
  const hasDraggedRef = useRef<boolean>(false);
  const dragStartXRef = useRef<number>(0);
  const dragStartYRef = useRef<number>(0);
  const dragStartTimeRef = useRef<number>(0);
  const isMouseDownRef = useRef<boolean>(false);
  const touchDirectionDecidedRef = useRef<boolean>(false);
  const clearDragTimerRef = useRef<number | null>(null);

  const [touchDeltaX, setTouchDeltaX] = useState<number>(0);
  const [isSwiping, setIsSwiping] = useState<boolean>(false);

  // RAF-batched smooth drag updates (prevents 120Hz React state re-render floods)
  const pendingDeltaXRef = useRef<number>(0);
  const rafIdRef = useRef<number | null>(null);

  const updateDeltaX = useCallback((dx: number) => {
    pendingDeltaXRef.current = dx;
    if (rafIdRef.current === null) {
      rafIdRef.current = window.requestAnimationFrame(() => {
        setTouchDeltaX(pendingDeltaXRef.current);
        rafIdRef.current = null;
      });
    }
  }, []);

  const cancelPendingRaf = useCallback(() => {
    if (rafIdRef.current !== null) {
      window.cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = null;
    }
  }, []);

  useEffect(() => {
    return () => cancelPendingRaf();
  }, [cancelPendingRaf]);

  const markDragFinished = useCallback(() => {
    cancelPendingRaf();
    isDraggingRef.current = false;
    isMouseDownRef.current = false;
    touchDirectionDecidedRef.current = false;
    if (clearDragTimerRef.current !== null) {
      window.clearTimeout(clearDragTimerRef.current);
    }
    // Block synthetic clicks from dragging for 200ms
    clearDragTimerRef.current = window.setTimeout(() => {
      hasDraggedRef.current = false;
    }, 200);
  }, [cancelPendingRaf]);

  // Card click handler: pure tap/click selects card; drag is suppressed
  const handleCardClick = useCallback((idx: number) => {
    if (hasDraggedRef.current || isDraggingRef.current) {
      // Accidental click following swipe/drag suppressed!
      return;
    }
    if (idx === currentIndex && onSelectStudent && sortedRankers[idx]) {
      onSelectStudent(sortedRankers[idx]);
    } else {
      goToIndex(idx);
      scheduleResumeAutoplay();
    }
  }, [currentIndex, onSelectStudent, sortedRankers, goToIndex, scheduleResumeAutoplay]);

  // ==========================================
  // MOUSE DRAG GESTURE (Desktop)
  // ==========================================
  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.button !== 0) return; // Only primary mouse button
    pauseAutoplay();
    isMouseDownRef.current = true;
    dragStartXRef.current = e.clientX;
    dragStartYRef.current = e.clientY;
    dragStartTimeRef.current = performance.now();
    hasDraggedRef.current = false;
    isDraggingRef.current = false;
    cancelPendingRaf();
    setTouchDeltaX(0);
  };

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isMouseDownRef.current) return;
    const dx = e.clientX - dragStartXRef.current;
    const dy = e.clientY - dragStartYRef.current;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist > 12) {
      isDraggingRef.current = true;
      hasDraggedRef.current = true;
      setIsSwiping(true);
      updateDeltaX(dx);
    }
  };

  const onMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isMouseDownRef.current) return;
    cancelPendingRaf();
    if (isDraggingRef.current) {
      const dx = e.clientX - dragStartXRef.current;
      if (dx < -30) {
        goToNext();
      } else if (dx > 30) {
        goToPrevious();
      }
      setTouchDeltaX(0);
      setIsSwiping(false);
      scheduleResumeAutoplay();
    }
    markDragFinished();
  };

  const onMouseLeaveStage = () => {
    if (isMouseDownRef.current) {
      cancelPendingRaf();
      if (isDraggingRef.current) {
        const finalDelta = pendingDeltaXRef.current || touchDeltaX;
        if (finalDelta < -30) {
          goToNext();
        } else if (finalDelta > 30) {
          goToPrevious();
        }
        setTouchDeltaX(0);
        setIsSwiping(false);
        scheduleResumeAutoplay();
      }
      markDragFinished();
    }
    onMouseLeave();
  };

  // ==========================================
  // MOBILE ONE-FINGER TOUCH SWIPE (touchstart / touchmove / touchend)
  // ==========================================
  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    pauseAutoplay();
    const touch = e.touches[0];
    if (!touch) return;
    dragStartXRef.current = touch.clientX;
    dragStartYRef.current = touch.clientY;
    dragStartTimeRef.current = performance.now();
    touchDirectionDecidedRef.current = false;
    isDraggingRef.current = false;
    hasDraggedRef.current = false;
    cancelPendingRaf();
    setTouchDeltaX(0);
  };

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0];
    if (!touch) return;
    const dx = touch.clientX - dragStartXRef.current;
    const dy = touch.clientY - dragStartYRef.current;
    const absX = Math.abs(dx);
    const absY = Math.abs(dy);

    // Determine if gesture is intentionally horizontal vs vertical page scroll
    if (!touchDirectionDecidedRef.current) {
      if (absX > 10 && absX > absY) {
        touchDirectionDecidedRef.current = true;
        isDraggingRef.current = true;
        hasDraggedRef.current = true;
        setIsSwiping(true);
      } else if (absY > 10) {
        // Vertical page scroll detected: allow normal browser scrolling without hijacking
        touchDirectionDecidedRef.current = true;
        isDraggingRef.current = false;
        return;
      }
    }

    if (isDraggingRef.current) {
      updateDeltaX(dx);
    }
  };

  const onTouchEnd = () => {
    cancelPendingRaf();
    if (isDraggingRef.current) {
      const finalDeltaX = pendingDeltaXRef.current || touchDeltaX;
      const dt = performance.now() - dragStartTimeRef.current;
      const isFlick = dt < 300 && Math.abs(finalDeltaX) > 20;

      // Swiped left -> next student
      if (finalDeltaX < -30 || (isFlick && finalDeltaX < 0)) {
        goToNext();
      }
      // Swiped right -> previous student
      else if (finalDeltaX > 30 || (isFlick && finalDeltaX > 0)) {
        goToPrevious();
      }

      setTouchDeltaX(0);
      setIsSwiping(false);
      scheduleResumeAutoplay();
    }
    markDragFinished();
  };

  const onTouchCancel = () => {
    cancelPendingRaf();
    setTouchDeltaX(0);
    setIsSwiping(false);
    markDragFinished();
    scheduleResumeAutoplay();
  };

  // Hover handlers for autoplay pausing
  const onMouseEnter = () => {
    isHoveredRef.current = true;
    pauseAutoplay();
  };

  const onMouseLeave = () => {
    isHoveredRef.current = false;
    scheduleResumeAutoplay();
  };

  const formatNumber = (n: number) => String(n).padStart(2, '0');

  // Fractional live offset during mobile touch swipe
  const liveShift = isSwiping ? touchDeltaX / stepWidth : 0;

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        userSelect: 'none',
        WebkitUserSelect: 'none',
      }}
      role="region"
      aria-roledescription="carousel"
      aria-label="Student Rankers Carousel"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocusCapture={pauseAutoplay}
      onBlurCapture={scheduleResumeAutoplay}
    >
      {/* 5-Card Physical Deck Stage */}
      <div
        ref={stageRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeaveStage}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onTouchCancel={onTouchCancel}
        style={{
          width: '100%',
          maxWidth: '1440px',
          height: isMobile ? '510px' : '620px',
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
          cursor: isSwiping ? 'grabbing' : 'default',
          touchAction: 'pan-y', // Natural vertical page scrolling; horizontal swipe belongs to carousel
        }}
      >
        {/* Navigation Buttons: Desktop Only (floating on far edges so cards have 100% unobstructed tap targets!) */}
        {!isMobile && (
          <>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
                scheduleResumeAutoplay();
              }}
              aria-label="Previous student"
              className="carousel-circle-btn"
              style={{
                position: 'absolute',
                left: 'clamp(15px, 4vw, 55px)',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 35,
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                backgroundColor: '#FFFFFF',
                border: '1px solid rgba(16, 23, 43, 0.12)',
                boxShadow: '0 8px 24px rgba(16, 23, 43, 0.14)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#10172B',
                transition: 'all 250ms ease',
                outline: 'none',
                WebkitTapHighlightColor: 'transparent',
              }}
            >
              <ChevronLeft size={24} strokeWidth={2.4} />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
                scheduleResumeAutoplay();
              }}
              aria-label="Next student"
              className="carousel-circle-btn"
              style={{
                position: 'absolute',
                right: 'clamp(15px, 4vw, 55px)',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 35,
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                backgroundColor: '#FFFFFF',
                border: '1px solid rgba(16, 23, 43, 0.12)',
                boxShadow: '0 8px 24px rgba(16, 23, 43, 0.14)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#10172B',
                transition: 'all 250ms ease',
                outline: 'none',
                WebkitTapHighlightColor: 'transparent',
              }}
            >
              <ChevronRight size={24} strokeWidth={2.4} />
            </button>
          </>
        )}

        {/* All 11 Verified Cards Rendered in DOM */}
        {sortedRankers.map((student, idx) => {
          let rawOffset = (idx - currentIndex) % total;
          if (rawOffset > total / 2) rawOffset -= total;
          if (rawOffset < -total / 2) rawOffset += total;

          let continuousOffset = rawOffset + liveShift;
          if (continuousOffset > total / 2) continuousOffset -= total;
          if (continuousOffset < -total / 2) continuousOffset += total;

          return (
            <DeckCard
              key={student.id}
              student={student}
              continuousOffset={continuousOffset}
              isSwiping={isSwiping}
              prefersReducedMotion={prefersReducedMotion}
              onClick={() => handleCardClick(idx)}
              isMobile={isMobile}
              isTablet={isTablet}
            />
          );
        })}
      </div>

      {/* Counter & Progress Indicator (Directly below cards) */}
      <div
        style={{
          marginTop: '1.25rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.75rem',
          zIndex: 10,
        }}
      >
        {/* Counter: e.g. < 01 / 11 > (On mobile, flanked by buttons so cards above are 100% unobstructed!) */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: isMobile ? '1.25rem' : '0.45rem',
          }}
        >
          {isMobile && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
                scheduleResumeAutoplay();
              }}
              aria-label="Previous student"
              className="carousel-circle-btn"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                backgroundColor: '#FFFFFF',
                border: '1px solid rgba(16, 23, 43, 0.12)',
                boxShadow: '0 4px 14px rgba(16, 23, 43, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#10172B',
                outline: 'none',
                WebkitTapHighlightColor: 'transparent',
              }}
            >
              <ChevronLeft size={20} strokeWidth={2.4} />
            </button>
          )}

          <div
            style={{
              fontFamily: "'Newsreader', Georgia, serif",
              fontSize: '1.15rem',
              letterSpacing: '0.04em',
              display: 'flex',
              alignItems: 'center',
              gap: '0.45rem',
            }}
          >
            <span style={{ fontWeight: 800, color: '#10172B', fontSize: '1.35rem' }}>
              {formatNumber(currentIndex + 1)}
            </span>
            <span style={{ color: '#9CA3AF', fontWeight: 400 }}>/</span>
            <span style={{ color: '#6B7280', fontWeight: 600 }}>
              {formatNumber(total)}
            </span>
          </div>

          {isMobile && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
                scheduleResumeAutoplay();
              }}
              aria-label="Next student"
              className="carousel-circle-btn"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                backgroundColor: '#FFFFFF',
                border: '1px solid rgba(16, 23, 43, 0.12)',
                boxShadow: '0 4px 14px rgba(16, 23, 43, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#10172B',
                outline: 'none',
                WebkitTapHighlightColor: 'transparent',
              }}
            >
              <ChevronRight size={20} strokeWidth={2.4} />
            </button>
          )}
        </div>

        {/* 11 Thin Progress Bars */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: isMobile ? '4px' : '6px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            maxWidth: '90vw',
          }}
          role="tablist"
          aria-label="Student progress indicators"
        >
          {sortedRankers.map((s, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={s.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => {
                  goToIndex(idx);
                  scheduleResumeAutoplay();
                }}
                aria-label={`Jump to student ${idx + 1}: ${s.name}`}
                type="button"
                className="carousel-progress-btn"
                style={{
                  width: isActive ? (isMobile ? '24px' : '30px') : (isMobile ? '10px' : '14px'),
                  height: '3.5px',
                  borderRadius: '2px',
                  backgroundColor: isActive ? '#E6AA32' : 'rgba(16, 23, 43, 0.15)',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  transition: 'all 300ms cubic-bezier(0.16, 1, 0.3, 1)',
                  outline: 'none',
                  WebkitTapHighlightColor: 'transparent',
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Bottom Primary CTA Button */}
      {showBottomCta && (
        <div style={{ marginTop: '2rem', textAlign: 'center', zIndex: 10 }}>
          <Link
            href="/rankers"
            className="btn-navy-pill"
            style={{
              backgroundColor: '#10172B',
              color: '#FFFFFF',
              padding: '0.9rem 2.25rem',
              borderRadius: '9999px',
              fontWeight: 600,
              fontSize: '0.95rem',
              letterSpacing: '0.02em',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.65rem',
              textDecoration: 'none',
              boxShadow: '0 8px 24px rgba(16, 23, 43, 0.2)',
              transition: 'all 250ms ease',
              outline: 'none',
            }}
          >
            <span>View All Results</span>
            <ArrowRight size={17} color="#E6AA32" />
          </Link>
        </div>
      )}

      {/* Scoped CSS: Accessible focus, hover states, zero blue rectangles */}
      <style>{`
        /* Circle Navigation Buttons */
        .carousel-circle-btn {
          outline: none !important;
          -webkit-tap-highlight-color: transparent !important;
        }

        .carousel-circle-btn:focus {
          outline: none !important;
        }

        .carousel-circle-btn:focus-visible {
          outline: 2px solid #E6AA32 !important;
          outline-offset: 3px !important;
          box-shadow: 0 0 0 4px rgba(230, 170, 50, 0.25), 0 8px 24px rgba(16, 23, 43, 0.14) !important;
        }

        .carousel-circle-btn:hover {
          background-color: #10172B !important;
          color: #FFFFFF !important;
          transform: translateY(-50%) scale(1.08) !important;
          box-shadow: 0 10px 28px rgba(16, 23, 43, 0.25) !important;
        }

        /* Progress Bar Buttons */
        .carousel-progress-btn {
          outline: none !important;
          -webkit-tap-highlight-color: transparent !important;
        }

        .carousel-progress-btn:focus {
          outline: none !important;
        }

        .carousel-progress-btn:focus-visible {
          outline: 2px solid #E6AA32 !important;
          outline-offset: 2px !important;
        }

        /* Deck Card Focus */
        .carousel-deck-card:focus {
          outline: none !important;
        }

        .carousel-deck-card:focus-visible {
          outline: 2px solid #E6AA32 !important;
          outline-offset: 4px !important;
        }

        /* Bottom CTA Button */
        .btn-navy-pill:hover {
          background-color: #18223D !important;
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(16, 23, 43, 0.3) !important;
        }

        .btn-navy-pill:focus {
          outline: none !important;
        }

        .btn-navy-pill:focus-visible {
          outline: 2px solid #E6AA32 !important;
          outline-offset: 3px !important;
        }

        /* Reduced Motion */
        @media (prefers-reduced-motion: reduce) {
          .carousel-deck-card,
          .carousel-circle-btn,
          .carousel-progress-btn,
          .btn-navy-pill {
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
};
