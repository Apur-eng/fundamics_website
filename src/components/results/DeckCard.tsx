import React from 'react';
import type { RankerRecord } from '../../data/rankersData';
import { Award, School } from 'lucide-react';

interface DeckCardProps {
  student: RankerRecord;
  continuousOffset: number; // relative continuous cyclic offset: 0 = center, -1 = left medium, +1 = right medium, etc.
  isSwiping?: boolean;
  prefersReducedMotion?: boolean;
  onClick: () => void;
  isMobile: boolean;
  isTablet: boolean;
}

// Continuous interpolation keypoint helper
function getCardTransform(u: number, isMobile: boolean, isTablet: boolean) {
  let keypoints: [number, number, number, number][]; // [u, translateX, scale, opacity]

  if (isMobile) {
    keypoints = [
      [-3, -480, 0.60, 0.40],
      [-2, -320, 0.72, 0.60],
      [-1, -170, 0.86, 0.88],
      [0, 0, 1.0, 1.0],
      [1, 170, 0.86, 0.88],
      [2, 320, 0.72, 0.60],
      [3, 480, 0.60, 0.40],
    ];
  } else if (isTablet) {
    keypoints = [
      [-4, -760, 0.55, 0.50],
      [-3, -570, 0.64, 0.55],
      [-2, -390, 0.74, 0.65],
      [-1, -220, 0.86, 0.85],
      [0, 0, 1.0, 1.0],
      [1, 220, 0.86, 0.85],
      [2, 390, 0.74, 0.65],
      [3, 570, 0.64, 0.55],
      [4, 760, 0.55, 0.50],
    ];
  } else {
    // Desktop layout
    keypoints = [
      [-4, -980, 0.55, 0.50],
      [-3, -750, 0.64, 0.55],
      [-2, -510, 0.75, 0.65],
      [-1, -280, 0.88, 0.85],
      [0, 0, 1.0, 1.0],
      [1, 280, 0.88, 0.85],
      [2, 510, 0.75, 0.65],
      [3, 750, 0.64, 0.55],
      [4, 980, 0.55, 0.50],
    ];
  }

  // Handle beyond boundaries
  if (u <= keypoints[0][0]) {
    const k0 = keypoints[0];
    const diff = u - k0[0];
    return {
      translateX: k0[1] + diff * 220,
      scale: k0[2],
      opacity: 0,
    };
  }

  const last = keypoints[keypoints.length - 1];
  if (u >= last[0]) {
    const diff = u - last[0];
    return {
      translateX: last[1] + diff * 220,
      scale: last[2],
      opacity: 0,
    };
  }

  // Piecewise linear interpolation between keypoints
  for (let i = 0; i < keypoints.length - 1; i++) {
    const kA = keypoints[i];
    const kB = keypoints[i + 1];
    if (u >= kA[0] && u <= kB[0]) {
      const t = (u - kA[0]) / (kB[0] - kA[0]);
      return {
        translateX: kA[1] + t * (kB[1] - kA[1]),
        scale: kA[2] + t * (kB[2] - kA[2]),
        opacity: Math.max(0, Math.min(1, kA[3] + t * (kB[3] - kA[3]))),
      };
    }
  }

  return { translateX: 0, scale: 1, opacity: 1 };
}

export const DeckCard: React.FC<DeckCardProps> = ({
  student,
  continuousOffset,
  isSwiping = false,
  prefersReducedMotion = false,
  onClick,
  isMobile,
  isTablet,
}) => {
  const u = continuousOffset;
  const absU = Math.abs(u);
  const centerProgress = Math.max(0, 1 - absU); // 1 at center, 0 at |u| >= 1

  // Dynamic interpolated transform & opacity
  const { translateX, scale, opacity } = getCardTransform(u, isMobile, isTablet);

  // Dynamic z-index: card closest to center is always on top
  const zIndex = Math.max(1, Math.round(10 - 3 * absU));

  // Dynamic card dimensions based on center proximity
  let baseWidthCenter = 415;
  let baseHeightCenter = 570;
  let baseWidthSide = 305;
  let baseHeightSide = 495;

  if (isMobile) {
    baseWidthCenter = 280;
    baseHeightCenter = 490;
    baseWidthSide = 225;
    baseHeightSide = 430;
  } else if (isTablet) {
    baseWidthCenter = 380;
    baseHeightCenter = 540;
    baseWidthSide = 290;
    baseHeightSide = 480;
  }

  const cardWidth = Math.round(baseWidthSide + (baseWidthCenter - baseWidthSide) * centerProgress);
  const cardHeight = Math.round(baseHeightSide + (baseHeightCenter - baseHeightSide) * centerProgress);

  // Crossfade between Center Active panel and Side panel
  const centerPresentationOpacity = Math.max(0, Math.min(1, Math.pow(centerProgress, 1.25)));
  const sidePresentationOpacity = Math.max(0, Math.min(1, 1 - centerPresentationOpacity));

  // Center proximity indicator
  const isNearlyCenter = absU < 0.35;

  // Transition settings: disabled only during active touch/pointer dragging for 1:1 finger response
  const transitionStyle = isSwiping || prefersReducedMotion
    ? 'none'
    : 'transform 600ms cubic-bezier(0.16, 1, 0.3, 1), opacity 550ms ease, width 600ms cubic-bezier(0.16, 1, 0.3, 1), height 600ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 450ms ease';

  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      aria-label={
        isNearlyCenter
          ? `Active featured student: ${student.name}, ${student.percentage} percent, ${student.class} ${student.board}`
          : `View result for ${student.name}, ${student.percentage} percent, ${student.class} ${student.board}`
      }
      className={`carousel-deck-card ${isNearlyCenter ? 'is-center' : 'is-side'}`}
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: `${cardWidth}px`,
        height: `${cardHeight}px`,
        transform: `translate3d(calc(-50% + ${translateX.toFixed(2)}px), -50%, 0) scale(calc(${scale.toFixed(3)} * var(--card-scale-mult, 1)))`,
        opacity,
        zIndex,
        pointerEvents: opacity < 0.05 ? 'none' : 'auto',
        cursor: isNearlyCenter ? 'default' : 'pointer',
        transition: transitionStyle,
        userSelect: 'none',
        WebkitUserSelect: 'none',
        borderRadius: '24px',
        boxShadow: centerProgress > 0.5
          ? '0 30px 70px -12px rgba(16, 23, 43, 0.32), 0 12px 28px -6px rgba(16, 23, 43, 0.18)'
          : absU <= 1.5
          ? '0 18px 45px -8px rgba(16, 23, 43, 0.22)'
          : '0 10px 25px -6px rgba(16, 23, 43, 0.15)',
        overflow: 'hidden',
        backgroundColor: '#10172B',
      }}
    >
      {/* ─── ACTIVE CENTER CARD PRESENTATION ─── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          opacity: centerPresentationOpacity,
          pointerEvents: isNearlyCenter ? 'auto' : 'none',
          transition: isSwiping || prefersReducedMotion ? 'none' : 'opacity 350ms ease',
        }}
      >
        {/* Navy Upper Section */}
        <div
          style={{
            position: 'relative',
            height: isMobile ? '270px' : '330px',
            backgroundColor: '#10172B',
            padding: isMobile ? '1rem 1rem 0 1rem' : '1.4rem 1.4rem 0 1.4rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            flexShrink: 0,
          }}
        >
          {/* Top Meta Row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              position: 'relative',
              zIndex: 3,
            }}
          >
            {/* Left: Medal Badge + Class/Board */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <div
                style={{
                  width: isMobile ? '32px' : '38px',
                  height: isMobile ? '32px' : '38px',
                  borderRadius: '50%',
                  backgroundColor: '#E6AA32',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(230, 170, 50, 0.35)',
                  flexShrink: 0,
                }}
              >
                <Award size={isMobile ? 18 : 22} color="#10172B" strokeWidth={2.4} />
              </div>

              <div style={{ lineHeight: 1.25 }}>
                <div style={{ fontSize: isMobile ? '0.72rem' : '0.8rem', color: 'rgba(255, 255, 255, 0.85)', fontWeight: 600 }}>
                  {student.class}
                </div>
                <div style={{ fontSize: isMobile ? '0.85rem' : '0.98rem', color: '#FFFFFF', fontWeight: 800, letterSpacing: '0.04em' }}>
                  {student.board} BOARD
                </div>
              </div>
            </div>

            {/* Right: Academic Session Badge */}
            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.12)',
                border: '1px solid rgba(255, 255, 255, 0.22)',
                padding: '0.25rem 0.55rem',
                borderRadius: '6px',
                textAlign: 'right',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: isMobile ? '0.62rem' : '0.70rem',
                  fontWeight: 750,
                  color: '#FAF8F5',
                  letterSpacing: '0.06em',
                }}
              >
                SESSION {student.year}
              </div>
            </div>
          </div>

          {/* Student Portrait */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: isMobile ? '205px' : '250px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-end',
            }}
          >
            <img
              src={student.image || ''}
              alt={student.name}
              draggable={false}
              onDragStart={(e) => e.preventDefault()}
              style={{
                maxHeight: isMobile ? '210px' : '260px',
                width: 'auto',
                maxWidth: '85%',
                objectFit: 'cover',
                objectPosition: 'top center',
                display: 'block',
                filter: 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.45))',
                userSelect: 'none',
                WebkitUserSelect: 'none',
                pointerEvents: 'none',
              }}
            />
          </div>

          {/* Organic Torn-Paper Edge Transition */}
          <div
            style={{
              position: 'absolute',
              bottom: '-1px',
              left: 0,
              right: 0,
              height: '32px',
              zIndex: 4,
              overflow: 'hidden',
              pointerEvents: 'none',
            }}
          >
            <svg
              viewBox="0 0 500 40"
              preserveAspectRatio="none"
              style={{ width: '100%', height: '100%', display: 'block', fill: '#FFFFFF' }}
            >
              <path d="M0,24 Q30,12 65,22 T130,14 T195,26 T260,16 T325,28 T390,18 T455,24 T500,16 L500,40 L0,40 Z" />
            </svg>
          </div>
        </div>

        {/* White Result Bottom Panel with Staggered Result Reveal */}
        <div
          key={`center-info-${student.id}-${isNearlyCenter}`}
          style={{
            flex: 1,
            backgroundColor: '#FFFFFF',
            padding: isMobile ? '1rem 1.1rem 1.1rem 1.1rem' : '1.25rem 1.4rem 1.4rem 1.4rem',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            zIndex: 5,
          }}
        >
          {/* Result Percentage with Gold Underline (Staggered Reveal Step 1) */}
          <div className="reveal-percentage">
            <div
              style={{
                fontFamily: "'Newsreader', Georgia, serif",
                fontSize: isMobile ? '3.6rem' : '4.4rem',
                fontWeight: 700,
                color: '#10172B',
                lineHeight: 0.95,
                letterSpacing: '-0.03em',
                margin: '0 auto',
                display: 'inline-block',
                position: 'relative',
              }}
            >
              {student.formattedPercentage || `${student.percentage}%`}
              {/* Gold brush underline */}
              <svg
                width="100%"
                height="10"
                viewBox="0 0 160 10"
                fill="none"
                style={{
                  position: 'absolute',
                  bottom: '-8px',
                  left: 0,
                  right: 0,
                  display: 'block',
                }}
              >
                <path d="M3 6C45 2 110 3 157 7" stroke="#E6AA32" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </div>

            {/* Student Name (Staggered Reveal Step 2) */}
            <h3
              className="reveal-name"
              style={{
                fontFamily: "'Newsreader', Georgia, serif",
                fontSize: isMobile ? '1.4rem' : '1.65rem',
                fontWeight: 600,
                color: '#10172B',
                marginTop: isMobile ? '0.8rem' : '1.1rem',
                marginBottom: '0.2rem',
                letterSpacing: '-0.01em',
              }}
            >
              {student.name}
            </h3>

            {/* Class, Board & Session Subtitle (Staggered Reveal Step 3) */}
            <div
              className="reveal-metadata"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.74rem',
                fontWeight: 800,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#1B6B44',
              }}
            >
              {student.class.toUpperCase()} · {student.board} · {student.year}
            </div>
          </div>

          {/* Real School & Campus Info (Staggered Reveal Step 4) */}
          {student.school ? (
            <div
              className="reveal-institution"
              style={{
                backgroundColor: '#FAF8F5',
                borderRadius: '10px',
                border: '1px solid #EAE3D5',
                padding: '0.75rem 0.95rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                textAlign: 'left',
                marginTop: '0.85rem',
              }}
            >
              <School size={15} color="#1B6B44" style={{ flexShrink: 0 }} />
              <span
                style={{
                  fontSize: '0.86rem',
                  fontWeight: 600,
                  color: '#10172B',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
                title={student.school}
              >
                {student.school}
              </span>
            </div>
          ) : (
            <div style={{ minHeight: '12px', marginTop: '0.85rem' }} />
          )}
        </div>
      </div>

      {/* ─── SIDE CARD PRESENTATION (Click/Tap to view result) ─── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#10172B',
          opacity: sidePresentationOpacity,
          pointerEvents: !isNearlyCenter ? 'auto' : 'none',
          transition: isSwiping || prefersReducedMotion ? 'none' : 'opacity 350ms ease',
        }}
      >
        {/* Subtle Top Green Interactive Accent Line */}
        <div
          className="side-card-green-indicator"
          style={{
            position: 'absolute',
            top: 0,
            left: '20px',
            right: '20px',
            height: '3px',
            backgroundColor: '#1B6B44',
            borderRadius: '0 0 3px 3px',
            opacity: 0.75,
            zIndex: 10,
            transition: 'all 250ms ease',
          }}
        />

        {/* Upper 62%: Student Portrait with Navy Gradient Vignette */}
        <div
          style={{
            position: 'relative',
            height: isMobile ? '225px' : '270px',
            backgroundColor: '#10172B',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}
        >
          {/* Subtle Class & Board pill tag */}
          <div
            style={{
              position: 'absolute',
              top: '12px',
              left: '12px',
              zIndex: 3,
              backgroundColor: 'rgba(16, 23, 43, 0.75)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '6px',
              padding: '2px 8px',
              fontSize: isMobile ? '0.60rem' : '0.65rem',
              color: 'rgba(255, 255, 255, 0.9)',
              fontWeight: 600,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}
          >
            {student.class} · {student.board}
          </div>

          {/* Student Photo */}
          <img
            src={student.image || ''}
            alt={student.name}
            draggable={false}
            onDragStart={(e) => e.preventDefault()}
            className="side-card-photo"
            style={{
              height: '100%',
              width: 'auto',
              maxWidth: '90%',
              objectFit: 'cover',
              objectPosition: 'top center',
              display: 'block',
              filter: 'drop-shadow(0 6px 14px rgba(0, 0, 0, 0.5))',
              userSelect: 'none',
              WebkitUserSelect: 'none',
              pointerEvents: 'none',
              opacity: 0.9,
              transition: 'all 300ms ease',
            }}
          />

          {/* Gradient overlay at bottom of photo */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '50px',
              background: 'linear-gradient(to bottom, transparent, #10172B)',
              zIndex: 2,
            }}
          />
        </div>

        {/* Middle: White Percentage & Student Name directly on Navy */}
        <div
          style={{
            padding: isMobile ? '0 0.85rem' : '0 1.25rem',
            textAlign: 'center',
            backgroundColor: '#10172B',
          }}
        >
          {/* Large White Serif Percentage */}
          <div
            style={{
              fontFamily: "'Newsreader', Georgia, serif",
              fontSize: isMobile ? '2.35rem' : '2.85rem',
              fontWeight: 700,
              color: '#FFFFFF',
              lineHeight: 1,
              letterSpacing: '-0.02em',
              margin: '0 auto',
            }}
          >
            {student.formattedPercentage || `${student.percentage}%`}
          </div>

          {/* Student Name */}
          <h4
            style={{
              fontFamily: "'Newsreader', Georgia, serif",
              fontSize: isMobile ? '1.12rem' : '1.28rem',
              fontWeight: 600,
              color: '#FFFFFF',
              marginTop: '0.35rem',
              marginBottom: '0.15rem',
              lineHeight: 1.2,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {student.name}
          </h4>

          {/* Class & Board */}
          <p
            style={{
              fontSize: '0.74rem',
              color: 'rgba(255, 255, 255, 0.7)',
              fontWeight: 500,
              margin: '0 0 0.85rem 0',
            }}
          >
            {student.class} · {student.board} · {student.year}
          </p>
        </div>

        {/* Subtle interactive prompt at bottom of side card */}
        <div
          style={{
            padding: '0.65rem 1rem',
            textAlign: 'center',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.4rem',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.68rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'rgba(255, 255, 255, 0.65)',
            }}
          >
            {isMobile ? 'Tap to view result' : 'Click to view result'}
          </span>
          <span style={{ color: '#E6AA32', fontSize: '0.75rem', lineHeight: 1 }}>→</span>
        </div>
      </div>

      {/* Scoped CSS for Result Reveal & Side Card Interaction */}
      <style>{`
        /* Staggered Editorial Reveal Animations */
        @keyframes revealItem {
          0% {
            opacity: 0;
            transform: translateY(8px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .reveal-percentage {
          animation: revealItem 460ms cubic-bezier(0.16, 1, 0.3, 1) 0ms both;
        }

        .reveal-name {
          animation: revealItem 460ms cubic-bezier(0.16, 1, 0.3, 1) 70ms both;
        }

        .reveal-metadata {
          animation: revealItem 460ms cubic-bezier(0.16, 1, 0.3, 1) 140ms both;
        }

        .reveal-institution {
          animation: revealItem 460ms cubic-bezier(0.16, 1, 0.3, 1) 210ms both;
        }

        /* Side Card Hover & Focus States */
        .carousel-deck-card.is-side {
          --card-scale-mult: 1;
          cursor: pointer !important;
        }

        .carousel-deck-card.is-side:hover {
          --card-scale-mult: 1.02;
          filter: brightness(1.04);
          box-shadow: 0 24px 55px -6px rgba(16, 23, 43, 0.32), 0 0 0 1.5px rgba(27, 107, 68, 0.45) !important;
        }

        .carousel-deck-card.is-side:hover .side-card-photo {
          opacity: 1 !important;
          filter: drop-shadow(0 8px 18px rgba(0, 0, 0, 0.6)) !important;
        }

        .carousel-deck-card.is-side:hover .side-card-green-indicator {
          opacity: 1 !important;
          height: 4px !important;
          background-color: #1B6B44 !important;
        }

        .carousel-deck-card.is-side:active {
          --card-scale-mult: 1.03;
          box-shadow: 0 14px 35px -6px rgba(16, 23, 43, 0.38), 0 0 0 2px #1B6B44 !important;
        }

        .carousel-deck-card:focus {
          outline: none;
        }

        .carousel-deck-card:focus-visible {
          outline: 2px solid #E6AA32 !important;
          outline-offset: 4px !important;
        }

        @media (prefers-reduced-motion: reduce) {
          .reveal-percentage,
          .reveal-name,
          .reveal-metadata,
          .reveal-institution {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </div>
  );
};
