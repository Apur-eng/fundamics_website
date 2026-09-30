import React, { useRef, useEffect, useState, useMemo, useCallback } from 'react';
import { rankersData, type RankerRecord } from '../../data/rankersData';

export interface EditorialResultsRailProps {
  /** Optional custom student list. Defaults to all verified canonical rankers with overallPercentage */
  students?: RankerRecord[];
  /** Stable ID of currently featured student in main carousel */
  activeStudentId?: string;
  /** Callback fired when a student in the rail is selected */
  onSelectStudent: (studentId: string) => void;
  /** Section eyebrow label */
  eyebrowLabel?: string;
}

/**
 * Format academic session / year into concise, elegant editorial notation:
 * e.g. "2025–26" -> "'25–26", "2024–25" -> "'24–25", "2026" -> "'26"
 */
function formatSession(s: string): string {
  if (!s) return '';
  // Convert 2025–26 or 2025-26 -> '25–26
  const sessionMatch = s.match(/20(\d\d)[–-](\d\d)/);
  if (sessionMatch) {
    return `'${sessionMatch[1]}–${sessionMatch[2]}`;
  }
  // Convert 2026 -> '26
  const yearMatch = s.match(/20(\d\d)/);
  if (yearMatch) {
    return `'${yearMatch[1]}`;
  }
  return s;
}

export const EditorialResultsRail: React.FC<EditorialResultsRailProps> = ({
  students,
  activeStudentId,
  onSelectStudent,
  eyebrowLabel = 'Some names from our journey',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  // Consume canonical rankers dataset: verified overallPercentage only, sorted descending
  const canonicalStudents = useMemo(() => {
    if (students && students.length > 0) {
      return students.filter(
        (r) => r.overallPercentage !== null && r.overallPercentage !== undefined && !r.isPlaceholder
      );
    }
    return rankersData
      .filter(
        (r) => r.overallPercentage !== null && r.overallPercentage !== undefined && !r.isPlaceholder
      )
      .sort((a, b) => (b.overallPercentage ?? 0) - (a.overallPercentage ?? 0));
  }, [students]);

  // Performance optimization: Pause CSS animation when off-screen using IntersectionObserver
  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { rootMargin: '120px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Compute a slow, comfortable loop duration based on total student count
  // ~2.4 seconds per student entry ensures serene readability
  const loopDuration = useMemo(() => {
    const count = canonicalStudents.length;
    return Math.max(60, Math.round(count * 2.4));
  }, [canonicalStudents.length]);

  const handleStudentClick = useCallback(
    (id: string) => {
      onSelectStudent(id);
    },
    [onSelectStudent]
  );

  // Render a student item button
  const renderStudentItem = (student: RankerRecord, isDuplicate: boolean) => {
    const isActive = activeStudentId === student.id;
    const percentageText =
      student.formattedPercentage ||
      (student.overallPercentage !== null ? `${student.overallPercentage}%` : '');
    const sessionText = formatSession(student.session || student.year);
    const metaText = sessionText ? `${student.board} · ${sessionText}` : student.board;

    return (
      <button
        key={`${student.id}${isDuplicate ? '-dup' : ''}`}
        type="button"
        onClick={() => handleStudentClick(student.id)}
        className={`editorial-rail-item ${isActive ? 'is-active' : ''}`}
        aria-label={`${student.name}, ${percentageText}, ${student.board}, ${sessionText}. Click to view in main showcase.`}
        tabIndex={isDuplicate ? -1 : 0}
        aria-hidden={isDuplicate ? 'true' : undefined}
      >
        <span className="editorial-rail-name">{student.name}</span>
        <span className="editorial-rail-dot" aria-hidden="true">·</span>
        <span className="editorial-rail-score">{percentageText}</span>
        <span className="editorial-rail-dot" aria-hidden="true">·</span>
        <span className="editorial-rail-meta">{metaText}</span>
      </button>
    );
  };

  return (
    <aside
      ref={containerRef}
      className="editorial-results-rail-section"
      aria-label="Student Achievement Honor Stream"
      style={{
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        maxWidth: '100vw',
        position: 'relative',
        zIndex: 8,
        marginTop: 'clamp(2rem, 3.8vw, 3rem)',
        marginBottom: 'clamp(1rem, 2vw, 1.5rem)',
        overflow: 'hidden',
        userSelect: 'none',
        WebkitUserSelect: 'none',
      }}
    >
      {/* Top Academic Hairline Divider */}
      <div className="editorial-rail-divider" aria-hidden="true" />

      {/* Editorial Eyebrow Label */}
      <div className="editorial-rail-header">
        <span className="editorial-rail-eyebrow">{eyebrowLabel}</span>
        <span className="editorial-rail-arrow" aria-hidden="true">→</span>
      </div>

      {/* Continuous Scrolling Rail with Feathered Edge Masks */}
      <div
        className="editorial-rail-mask"
        style={{
          animationPlayState: isVisible ? 'running' : 'paused',
        }}
      >
        <div
          className="editorial-rail-track"
          style={{
            animationDuration: `${loopDuration}s`,
            animationPlayState: isVisible ? 'running' : 'paused',
          }}
        >
          {/* Primary Rendered Sequence (Group 1 - fully keyboard and screen-reader accessible) */}
          <div className="editorial-rail-group" role="list" aria-label="Top Achievers">
            {canonicalStudents.map((student) => (
              <React.Fragment key={student.id}>
                {renderStudentItem(student, false)}
                <span className="editorial-rail-sep" aria-hidden="true">
                  <span className="editorial-rail-diamond">◆</span>
                </span>
              </React.Fragment>
            ))}
          </div>

          {/* Visual Sequence Duplicate (Group 2 - ensures genuinely seamless 100% loop with zero jump) */}
          <div className="editorial-rail-group editorial-rail-dup-group" aria-hidden="true">
            {canonicalStudents.map((student) => (
              <React.Fragment key={`${student.id}-dup`}>
                {renderStudentItem(student, true)}
                <span className="editorial-rail-sep" aria-hidden="true">
                  <span className="editorial-rail-diamond">◆</span>
                </span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Academic Hairline Divider */}
      <div className="editorial-rail-divider" aria-hidden="true" style={{ marginTop: '0.9rem' }} />

      {/* Scoped CSS Styles */}
      <style>{`
        /* Thin Academic Gold/Ink Hairline Rule */
        .editorial-rail-divider {
          width: 100%;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(200, 155, 60, 0.12) 8%,
            rgba(200, 155, 60, 0.32) 25%,
            rgba(200, 155, 60, 0.32) 75%,
            rgba(200, 155, 60, 0.12) 92%,
            transparent 100%
          );
        }

        /* Editorial Header / Eyebrow */
        .editorial-rail-header {
          display: flex;
          align-items: center;
          justifyContent: center;
          gap: 0.55rem;
          padding: 0.95rem 1rem 0.65rem 1rem;
        }

        .editorial-rail-eyebrow {
          font-family: var(--font-display);
          font-size: 0.74rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #8B6914; /* Deep academic warm ochre */
          line-height: 1;
        }

        .editorial-rail-arrow {
          font-family: var(--font-sans);
          font-size: 0.9rem;
          font-weight: 600;
          color: #C89B3C;
          line-height: 1;
          display: inline-block;
          transform: translateY(-0.5px);
          transition: transform 250ms ease;
        }

        .editorial-results-rail-section:hover .editorial-rail-arrow {
          transform: translate(3px, -0.5px);
        }

        /* Feathered Edge Mask for Infinite Boundless Feel */
        .editorial-rail-mask {
          position: relative;
          width: 100%;
          overflow: hidden;
          padding: 0.4rem 0;
          touch-action: pan-y;
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 60px,
            black calc(100% - 60px),
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 60px,
            black calc(100% - 60px),
            transparent 100%
          );
        }

        @media (max-width: 640px) {
          .editorial-rail-mask {
            mask-image: linear-gradient(
              to right,
              transparent 0%,
              black 24px,
              black calc(100% - 24px),
              transparent 100%
            );
            -webkit-mask-image: linear-gradient(
              to right,
              transparent 0%,
              black 24px,
              black calc(100% - 24px),
              transparent 100%
            );
          }
        }

        /* Continuously Moving Track */
        .editorial-rail-track {
          display: flex;
          align-items: center;
          width: max-content;
          will-change: transform;
          animation-name: fundamicsRailGlide;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        /* Desktop Hover: Calmly pause continuous translation */
        .editorial-results-rail-section:hover .editorial-rail-track,
        .editorial-results-rail-section:focus-within .editorial-rail-track {
          animation-play-state: paused !important;
        }

        .editorial-rail-group {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        /* Individual Student Stream Item */
        .editorial-rail-item {
          display: inline-flex;
          align-items: baseline;
          gap: 0.45rem;
          background: transparent;
          border: none;
          padding: 0.35rem 0.65rem;
          border-radius: 4px;
          cursor: pointer;
          white-space: nowrap;
          text-align: left;
          text-decoration: none;
          outline: none;
          transition: background-color 200ms ease, box-shadow 200ms ease;
          -webkit-tap-highlight-color: transparent;
        }

        .editorial-rail-name {
          font-family: 'Newsreader', Georgia, serif;
          font-size: clamp(1.02rem, 1.22vw, 1.15rem);
          font-weight: 500;
          color: #10172B;
          letter-spacing: -0.015em;
          transition: color 200ms ease, text-decoration-color 200ms ease;
        }

        .editorial-rail-dot {
          font-family: var(--font-sans);
          font-size: 0.85rem;
          color: rgba(16, 23, 43, 0.28);
          font-weight: 600;
          line-height: 1;
        }

        .editorial-rail-score {
          font-family: 'Newsreader', Georgia, serif;
          font-size: clamp(1.08rem, 1.3vw, 1.22rem);
          font-weight: 700;
          color: #A2751E; /* Rich gold/bronze numeral */
          letter-spacing: -0.01em;
          font-variant-numeric: tabular-nums;
        }

        .editorial-rail-meta {
          font-family: var(--font-sans);
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #706A60;
          line-height: 1;
        }

        /* Subtle Separator Diamond */
        .editorial-rail-sep {
          display: inline-flex;
          align-items: center;
          justifyContent: center;
          padding: 0 clamp(0.75rem, 1.6vw, 1.35rem);
          color: #C89B3C;
          opacity: 0.65;
          user-select: none;
        }

        .editorial-rail-diamond {
          font-size: 0.5rem;
          line-height: 1;
          display: inline-block;
        }

        /* Desktop Hover Interaction: refined underline & prominence */
        .editorial-rail-item:hover {
          background-color: rgba(200, 155, 60, 0.1);
        }

        .editorial-rail-item:hover .editorial-rail-name {
          color: #8B6914;
          text-decoration: underline;
          text-underline-offset: 3px;
          text-decoration-thickness: 1.2px;
          text-decoration-color: #C89B3C;
        }

        .editorial-rail-item:hover .editorial-rail-score {
          color: #10172B;
        }

        /* Linked Active State: Indicates student currently spotlighted in main carousel */
        .editorial-rail-item.is-active {
          background-color: rgba(200, 155, 60, 0.16);
          box-shadow: inset 0 -2px 0 #C89B3C;
        }

        .editorial-rail-item.is-active .editorial-rail-name {
          font-weight: 700;
          color: #10172B;
        }

        .editorial-rail-item.is-active .editorial-rail-score {
          color: #8B6914;
          font-weight: 800;
        }

        /* Accessible Keyboard Focus Visible */
        .editorial-rail-item:focus {
          outline: none;
        }

        .editorial-rail-item:focus-visible {
          outline: 2px solid #C89B3C !important;
          outline-offset: 2px !important;
          background-color: rgba(200, 155, 60, 0.14) !important;
        }

        /* GPU Transform Seamless Infinite Loop Keyframe */
        @keyframes fundamicsRailGlide {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        /* Mobile Adjustments (320px - 640px) */
        @media (max-width: 640px) {
          .editorial-rail-header {
            padding: 0.75rem 0.75rem 0.45rem 0.75rem;
          }

          .editorial-rail-eyebrow {
            font-size: 0.68rem;
            letter-spacing: 0.16em;
          }

          .editorial-rail-item {
            gap: 0.35rem;
            padding: 0.28rem 0.45rem;
          }

          .editorial-rail-name {
            font-size: 0.94rem;
          }

          .editorial-rail-score {
            font-size: 1.02rem;
          }

          .editorial-rail-meta {
            font-size: 0.66rem;
            letter-spacing: 0.06em;
          }

          .editorial-rail-sep {
            padding: 0 0.65rem;
          }

          .editorial-rail-diamond {
            font-size: 0.42rem;
          }
        }

        /* Extreme compact screens (320px - 360px) */
        @media (max-width: 360px) {
          .editorial-rail-name {
            font-size: 0.88rem;
          }
          .editorial-rail-score {
            font-size: 0.96rem;
          }
          .editorial-rail-meta {
            font-size: 0.62rem;
          }
        }

        /* Accessibility: Prefers-Reduced-Motion */
        @media (prefers-reduced-motion: reduce) {
          .editorial-rail-track {
            animation: none !important;
            transform: none !important;
            width: 100% !important;
            flex-wrap: wrap !important;
            justify-content: center !important;
            gap: 0.5rem 0.75rem !important;
            padding: 0.5rem 1rem !important;
          }

          .editorial-rail-mask {
            mask-image: none !important;
            -webkit-mask-image: none !important;
            overflow: visible !important;
          }

          .editorial-rail-dup-group {
            display: none !important;
          }

          .editorial-rail-item {
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </aside>
  );
};
