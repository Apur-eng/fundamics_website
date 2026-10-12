import React, { useState, useEffect, useRef, useMemo } from 'react';
import { rankersData, type RankerRecord } from '../../data/rankersData';
import { AchieverCard } from './AchieverCard';
import { ChevronLeft, ChevronRight, ArrowRight, Pause, Play, Sparkles } from 'lucide-react';
import { Link } from '../../context/RouterContext';
import { EditorialResultsRail } from './EditorialResultsRail';

export interface RankerCarouselProps {
  students?: RankerRecord[];
  onSelectStudent?: (student: RankerRecord) => void;
  showBottomCta?: boolean;
  showEditorialRail?: boolean;
  autoPlayInterval?: number;
}

export const RankerCarousel: React.FC<RankerCarouselProps> = ({
  students,
  onSelectStudent,
  showBottomCta = true,
  showEditorialRail = false,
}) => {
  // ─── 1. CANONICAL STUDENT DATASET ───
  const sortedRankers = useMemo(() => {
    if (students && students.length > 0) {
      return students;
    }
    return rankersData
      .filter((r) => r.overallPercentage !== null && r.overallPercentage !== undefined && !r.isPlaceholder)
      .sort((a, b) => (b.overallPercentage ?? 0) - (a.overallPercentage ?? 0));
  }, [students]);

  const total = sortedRankers.length;

  // Currently spotlighted student
  const [selectedStudentId, setSelectedStudentId] = useState<string>('');
  const activeStudentId =
    selectedStudentId && sortedRankers.some((s) => s.id === selectedStudentId)
      ? selectedStudentId
      : sortedRankers[0]?.id || '';

  // Viewport measurements
  const [viewportWidth, setViewportWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 1440
  );

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = viewportWidth < 640;
  const isTablet = viewportWidth >= 640 && viewportWidth < 1024;

  // Responsive card dimensions
  const cardWidth = isMobile ? 290 : isTablet ? 310 : 335;
  const cardGap = isMobile ? 16 : isTablet ? 20 : 22;
  const cardStep = cardWidth + cardGap;

  // ─── 2. CONTINUOUS FLOW TIMING (ALLEN STYLE) ───
  // Calculate flow duration: ~3.0s per student card ensures serene, legible gliding
  const flowDuration = useMemo(() => {
    return Math.max(50, Math.round(total * 3.0));
  }, [total]);

  // Manual pause toggle
  const [isManualPaused, setIsManualPaused] = useState<boolean>(false);

  // Manual nudge offset (for Prev/Next controls and drag interaction)
  const [manualOffset, setManualOffset] = useState<number>(0);

  // ─── 3. REDUCED MOTION PREFERENCE ───
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(() =>
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  // ─── 4. TOUCH & MOUSE INTERACTION (DRAGGING) ───
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragDelta, setDragDelta] = useState<number>(0);
  const dragStartXRef = useRef<number>(0);
  const dragStartYRef = useRef<number>(0);
  const isPointerDownRef = useRef<boolean>(false);
  const hasMovedRef = useRef<boolean>(false);
  const directionDeterminedRef = useRef<boolean>(false);
  const isHorizontalGestureRef = useRef<boolean>(false);

  const startDrag = (clientX: number, clientY: number) => {
    isPointerDownRef.current = true;
    dragStartXRef.current = clientX;
    dragStartYRef.current = clientY;
    hasMovedRef.current = false;
    directionDeterminedRef.current = false;
    isHorizontalGestureRef.current = false;
    setDragDelta(0);
  };

  const moveDrag = (clientX: number, clientY: number) => {
    if (!isPointerDownRef.current) return;
    const dx = clientX - dragStartXRef.current;
    const dy = clientY - dragStartYRef.current;
    const absX = Math.abs(dx);
    const absY = Math.abs(dy);

    if (!directionDeterminedRef.current) {
      if (absX > 8 && absX > absY) {
        directionDeterminedRef.current = true;
        isHorizontalGestureRef.current = true;
        setIsDragging(true);
        hasMovedRef.current = true;
      } else if (absY > 8) {
        directionDeterminedRef.current = true;
        isHorizontalGestureRef.current = false;
        isPointerDownRef.current = false;
        setIsDragging(false);
        return;
      }
    }

    if (isHorizontalGestureRef.current) {
      setDragDelta(dx);
    }
  };

  const endDrag = () => {
    if (!isPointerDownRef.current && !isDragging) return;
    isPointerDownRef.current = false;

    if (isDragging) {
      setManualOffset((prev) => prev + dragDelta);
      setDragDelta(0);
      setIsDragging(false);
    }

    window.setTimeout(() => {
      hasMovedRef.current = false;
    }, 150);
  };

  // Nudge controls
  const handleNudgeNext = () => {
    setManualOffset((prev) => prev - cardStep);
  };

  const handleNudgePrev = () => {
    setManualOffset((prev) => prev + cardStep);
  };

  // Card click handler
  const handleCardClick = (student: RankerRecord) => {
    if (hasMovedRef.current || isDragging) return;

    setSelectedStudentId(student.id);

    if (onSelectStudent) {
      onSelectStudent(student);
    }
  };

  // Toggle manual pause
  const togglePlayPause = () => {
    setIsManualPaused((prev) => !prev);
  };

  // Duplicated list for seamless infinite loop (Group A & Group B)
  const displayItems = useMemo(() => {
    return [...sortedRankers, ...sortedRankers];
  }, [sortedRankers]);

  if (total === 0) {
    return (
      <div
        style={{
          width: '100%',
          padding: '4rem 1.5rem',
          textAlign: 'center',
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          border: '1px solid rgba(16, 23, 43, 0.08)',
          maxWidth: '600px',
          margin: '0 auto',
        }}
      >
        <p style={{ color: '#555149', fontSize: '1.05rem', margin: 0 }}>
          No student achievement records currently available.
        </p>
      </div>
    );
  }

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Student Achievers Flow Showcase"
      className="fundamics-flow-container"
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        userSelect: 'none',
        WebkitUserSelect: 'none',
      }}
    >
      {/* ─── TOP CONTROLS & STATUS BAR ─── */}
      <div
        style={{
          width: '100%',
          maxWidth: '1280px',
          padding: isMobile ? '0 1rem 1.25rem' : '0 1.5rem 1.75rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 10,
        }}
      >
        {/* Status Tag */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: '#EEF2FB',
              color: '#202A57',
              padding: '0.35rem 0.85rem',
              borderRadius: '9999px',
              border: '1px solid #D5E0F5',
              fontSize: isMobile ? '0.74rem' : '0.80rem',
              fontWeight: 700,
              letterSpacing: '0.04em',
            }}
          >
            <Sparkles size={13} color="#C89B3C" />
            <span>
              {total} Verified Achievers · Auto Flow
            </span>
          </div>
          <span
            style={{
              fontSize: '0.75rem',
              color: '#717D96',
              display: isMobile ? 'none' : 'inline',
            }}
          >
            (Hover any card to pause & inspect)
          </span>
        </div>

        {/* Action Controls: Pause/Play + Nudge Prev/Next */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          {/* Pause / Play Toggle Button */}
          <button
            type="button"
            onClick={togglePlayPause}
            aria-label={isManualPaused ? 'Resume auto-flow movement' : 'Pause auto-flow movement'}
            className="flow-control-btn"
            style={{
              width: isMobile ? '38px' : '42px',
              height: isMobile ? '38px' : '42px',
              borderRadius: '50%',
              backgroundColor: '#FFFFFF',
              border: '1px solid rgba(16, 23, 43, 0.12)',
              boxShadow: '0 2px 8px rgba(16, 23, 43, 0.06)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#202A57',
              transition: 'all 200ms ease',
              outline: 'none',
            }}
          >
            {isManualPaused ? <Play size={16} fill="#202A57" /> : <Pause size={16} fill="#202A57" />}
          </button>

          {/* Previous Arrow Button */}
          <button
            type="button"
            onClick={handleNudgePrev}
            aria-label="Shift cards backward"
            className="flow-control-btn"
            style={{
              width: isMobile ? '38px' : '42px',
              height: isMobile ? '38px' : '42px',
              borderRadius: '50%',
              backgroundColor: '#FFFFFF',
              border: '1px solid rgba(16, 23, 43, 0.12)',
              boxShadow: '0 2px 8px rgba(16, 23, 43, 0.06)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#10172B',
              transition: 'all 200ms ease',
              outline: 'none',
            }}
          >
            <ChevronLeft size={isMobile ? 18 : 20} strokeWidth={2.4} />
          </button>

          {/* Next Arrow Button */}
          <button
            type="button"
            onClick={handleNudgeNext}
            aria-label="Shift cards forward"
            className="flow-control-btn"
            style={{
              width: isMobile ? '38px' : '42px',
              height: isMobile ? '38px' : '42px',
              borderRadius: '50%',
              backgroundColor: '#FFFFFF',
              border: '1px solid rgba(16, 23, 43, 0.12)',
              boxShadow: '0 2px 8px rgba(16, 23, 43, 0.06)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#10172B',
              transition: 'all 200ms ease',
              outline: 'none',
            }}
          >
            <ChevronRight size={isMobile ? 18 : 20} strokeWidth={2.4} />
          </button>
        </div>
      </div>

      {/* ─── CONTINUOUS FLOW VIEWPORT ─── */}
      <div
        className="allen-flowing-viewport"
        style={{
          width: '100%',
          overflow: 'hidden',
          position: 'relative',
          padding: isMobile ? '0.75rem 0 1.25rem' : '1.25rem 0 1.75rem',
          cursor: isDragging ? 'grabbing' : 'grab',
          touchAction: 'pan-y',
        }}
        onMouseDown={(e) => {
          if (e.button === 0) startDrag(e.clientX, e.clientY);
        }}
        onMouseMove={(e) => moveDrag(e.clientX, e.clientY)}
        onMouseUp={endDrag}
        onTouchStart={(e) => {
          const t = e.touches[0];
          if (t) startDrag(t.clientX, t.clientY);
        }}
        onTouchMove={(e) => {
          const t = e.touches[0];
          if (t) moveDrag(t.clientX, t.clientY);
        }}
        onTouchEnd={endDrag}
        onTouchCancel={endDrag}
      >
        {/* Soft edge fade masks (matching ALLEN's edge appearance) */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            width: isMobile ? '40px' : '80px',
            background: 'linear-gradient(to right, #F8FAFC 25%, transparent 100%)',
            zIndex: 6,
            pointerEvents: 'none',
          }}
          aria-hidden="true"
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            width: isMobile ? '40px' : '80px',
            background: 'linear-gradient(to left, #F8FAFC 25%, transparent 100%)',
            zIndex: 6,
            pointerEvents: 'none',
          }}
          aria-hidden="true"
        />

        {/* Outer offset wrapper for manual nudging / dragging */}
        <div
          style={{
            transform: `translate3d(${manualOffset + dragDelta}px, 0, 0)`,
            transition: isDragging ? 'none' : 'transform 400ms cubic-bezier(0.16, 1, 0.3, 1)',
            willChange: 'transform',
          }}
        >
          {/* Continuous GPU-Flow Marquee Track */}
          <div
            className={`allen-flowing-track ${isManualPaused || prefersReducedMotion ? 'is-paused' : ''}`}
            style={{
              display: 'flex',
              gap: `${cardGap}px`,
              width: 'max-content',
              animationDuration: `${flowDuration}s`,
              animationPlayState: isManualPaused || isDragging || prefersReducedMotion ? 'paused' : 'running',
              willChange: 'transform',
            }}
          >
            {displayItems.map((student, idx) => {
              const isDuplicate = idx >= total;
              const isActive = student.id === activeStudentId;

              return (
                <div
                  key={`${student.id}-${idx}`}
                  style={{ flexShrink: 0 }}
                  aria-hidden={isDuplicate ? 'true' : undefined}
                >
                  <AchieverCard
                    student={student}
                    isActive={isActive}
                    width={cardWidth}
                    isMobile={isMobile}
                    isTablet={isTablet}
                    onClick={() => handleCardClick(student)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ─── OPTIONAL EDITORIAL RAIL ─── */}
      {showEditorialRail && (
        <EditorialResultsRail
          activeStudentId={activeStudentId}
          onSelectStudent={(studentId) => {
            setSelectedStudentId(studentId);
          }}
        />
      )}

      {/* ─── BOTTOM CTA: VIEW ALL RANKERS ─── */}
      {showBottomCta && (
        <div style={{ marginTop: '2.5rem', textAlign: 'center', zIndex: 10 }}>
          <Link
            href="/rankers"
            className="btn-navy-pill"
            style={{
              backgroundColor: '#10172B',
              color: '#FFFFFF',
              padding: '0.95rem 2.4rem',
              borderRadius: '9999px',
              fontWeight: 600,
              fontSize: '0.95rem',
              letterSpacing: '0.02em',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.65rem',
              textDecoration: 'none',
              boxShadow: '0 8px 24px rgba(16, 23, 43, 0.18)',
              transition: 'all 250ms ease',
              outline: 'none',
            }}
          >
            <span>View All Rankers</span>
            <ArrowRight size={18} color="#C89B3C" />
          </Link>
        </div>
      )}

      {/* ─── SCOPED KEYFRAME ANIMATIONS & STYLES ─── */}
      <style>{`
        /* Continuous GPU Marquee Flow Keyframe */
        @keyframes allenStyleGlide {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        .allen-flowing-track {
          animation-name: allenStyleGlide;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        /* Seamless pause on hover so visitors can effortlessly inspect any card */
        .allen-flowing-viewport:hover .allen-flowing-track {
          animation-play-state: paused !important;
        }

        .allen-flowing-track.is-paused {
          animation-play-state: paused !important;
        }

        /* Buttons */
        .flow-control-btn:hover {
          background-color: #202A57 !important;
          color: #FFFFFF !important;
          border-color: #202A57 !important;
          transform: scale(1.06);
          box-shadow: 0 4px 14px rgba(32, 42, 87, 0.22) !important;
        }

        .flow-control-btn:focus-visible {
          outline: 2px solid #202A57 !important;
          outline-offset: 2px !important;
        }

        .btn-navy-pill:hover {
          background-color: #202A57 !important;
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(16, 23, 43, 0.26) !important;
        }

        .btn-navy-pill:focus-visible {
          outline: 2px solid #202A57 !important;
          outline-offset: 3px !important;
        }

        /* Reduced motion accessibility */
        @media (prefers-reduced-motion: reduce) {
          .allen-flowing-track {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
};
