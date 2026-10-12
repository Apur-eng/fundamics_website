import React, { useState } from 'react';
import type { RankerRecord } from '../../data/rankersData';
import { School, Award, Sparkles, CheckCircle2 } from 'lucide-react';

export interface AchieverCardProps {
  student: RankerRecord;
  isActive: boolean;
  onClick: () => void;
  width: number;
  height?: number;
  isMobile?: boolean;
  isTablet?: boolean;
}

export const AchieverCard: React.FC<AchieverCardProps> = ({
  student,
  isActive,
  onClick,
  width,
  height,
  isMobile = false,
  isTablet = false,
}) => {
  const [imgError, setImgError] = useState(false);

  // Formatting percentage string
  const scoreDisplay =
    student.formattedPercentage ||
    (student.overallPercentage !== null && student.overallPercentage !== undefined
      ? `${student.overallPercentage}%`
      : `${student.percentage}%`);

  // Student initials for graceful fallback avatar
  const initials = student.name
    .split(' ')
    .map((n) => n[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase();

  // Primary board and class label
  const boardClassLabel = `${student.board} · ${student.className || student.class}`;
  const sessionLabel = student.session || student.year;

  // Responsive sizing adjustments
  const cardHeight = height || (isMobile ? 470 : isTablet ? 500 : 520);
  const photoHeight = isMobile ? 210 : isTablet ? 230 : 245;

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      aria-label={`${student.name}, ${scoreDisplay} overall, ${boardClassLabel}. ${isActive ? 'Currently featured' : 'Click to view details'}`}
      aria-current={isActive ? 'true' : undefined}
      className={`fundamics-achiever-card ${isActive ? 'is-active-card' : ''}`}
      style={{
        width: `${width}px`,
        height: `${cardHeight}px`,
        flexShrink: 0,
        backgroundColor: '#FFFFFF',
        borderRadius: '18px',
        border: isActive ? '2px solid #202A57' : '1px solid rgba(16, 23, 43, 0.08)',
        boxShadow: isActive
          ? '0 18px 42px -10px rgba(32, 42, 87, 0.18), 0 4px 16px rgba(16, 23, 43, 0.06)'
          : '0 4px 20px -2px rgba(16, 23, 43, 0.05)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        position: 'relative',
        cursor: 'pointer',
        transition: 'transform 350ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 350ms ease, border-color 250ms ease',
        transform: isActive ? 'translateY(-6px)' : 'translateY(0)',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        outline: 'none',
      }}
    >
      {/* ─── ACTIVE ACCENT TOP STRIP ─── */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          backgroundColor: isActive ? '#C89B3C' : 'transparent',
          zIndex: 10,
          transition: 'background-color 250ms ease',
        }}
      />

      {/* ─── 1. PHOTOGRAPH & BADGES ─── */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: `${photoHeight}px`,
          backgroundColor: '#F1F5F9',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
          flexShrink: 0,
        }}
      >
        {/* Top Floating Badges */}
        <div
          style={{
            position: 'absolute',
            top: '12px',
            left: '12px',
            right: '12px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            zIndex: 4,
            pointerEvents: 'none',
          }}
        >
          {/* Board & Class Badge */}
          <span
            style={{
              backgroundColor: '#10172B',
              color: '#FFFFFF',
              fontSize: isMobile ? '0.68rem' : '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.04em',
              padding: '0.28rem 0.65rem',
              borderRadius: '6px',
              boxShadow: '0 2px 8px rgba(16, 23, 43, 0.25)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            {boardClassLabel}
          </span>

          {/* Academic Session Badge */}
          <span
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.94)',
              backdropFilter: 'blur(6px)',
              color: '#202A57',
              border: '1px solid rgba(16, 23, 43, 0.1)',
              fontSize: isMobile ? '0.66rem' : '0.70rem',
              fontWeight: 750,
              padding: '0.24rem 0.55rem',
              borderRadius: '6px',
              boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05)',
            }}
          >
            {sessionLabel}
          </span>
        </div>

        {/* Student Image or Graceful Initials Fallback */}
        {student.image && !imgError ? (
          <img
            src={student.image}
            alt={`Photograph of ${student.name}`}
            loading="lazy"
            decoding="async"
            draggable={false}
            onError={() => setImgError(true)}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'top center',
              display: 'block',
              transition: 'transform 400ms ease',
            }}
          />
        ) : (
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#EAEFF5',
              color: '#202A57',
            }}
          >
            <div
              style={{
                width: '68px',
                height: '68px',
                borderRadius: '50%',
                backgroundColor: '#D9E3F0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: "'Newsreader', Georgia, serif",
                fontSize: '1.6rem',
                fontWeight: 700,
                color: '#202A57',
                marginBottom: '0.5rem',
              }}
            >
              {initials}
            </div>
            <span
              style={{
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#52607B',
              }}
            >
              Verified Scholar
            </span>
          </div>
        )}

        {/* Active Pill Badge at Bottom of Photo */}
        {isActive && (
          <div
            style={{
              position: 'absolute',
              bottom: '10px',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: '#202A57',
              color: '#FFFFFF',
              fontSize: '0.68rem',
              fontWeight: 750,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: '0.24rem 0.75rem',
              borderRadius: '9999px',
              boxShadow: '0 4px 12px rgba(16, 23, 43, 0.3)',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              zIndex: 3,
            }}
          >
            <Sparkles size={11} color="#C89B3C" />
            <span>Featured</span>
          </div>
        )}
      </div>

      {/* ─── 2. ACHIEVEMENT INFORMATION ─── */}
      <div
        style={{
          flex: 1,
          padding: isMobile ? '1.1rem 1.15rem 1.15rem' : '1.25rem 1.35rem 1.25rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#FFFFFF',
        }}
      >
        <div>
          {/* Overall Percentage + Label */}
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'space-between',
              marginBottom: '0.35rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
              <span
                style={{
                  fontFamily: "'Newsreader', Georgia, serif",
                  fontSize: isMobile ? '2.5rem' : '2.85rem',
                  fontWeight: 700,
                  color: '#10172B',
                  lineHeight: 1,
                  letterSpacing: '-0.03em',
                }}
              >
                {scoreDisplay}
              </span>
            </div>

            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.70rem',
                fontWeight: 800,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#2A366F',
                backgroundColor: '#EEF2FB',
                padding: '0.22rem 0.55rem',
                borderRadius: '4px',
              }}
            >
              Overall
            </span>
          </div>

          {/* Student Name */}
          <h3
            style={{
              fontFamily: "'Newsreader', Georgia, serif",
              fontSize: isMobile ? '1.22rem' : '1.35rem',
              fontWeight: 600,
              color: '#10172B',
              margin: '0 0 0.45rem 0',
              lineHeight: 1.2,
              letterSpacing: '-0.01em',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
            title={student.name}
          >
            {student.name}
          </h3>

          {/* School Name & Location */}
          {student.school && (
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '6px',
                color: '#555149',
                fontSize: isMobile ? '0.78rem' : '0.82rem',
                lineHeight: 1.35,
                marginTop: '0.2rem',
              }}
            >
              <School
                size={14}
                color="#202A57"
                style={{ flexShrink: 0, marginTop: '2px' }}
              />
              <span
                style={{
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  fontWeight: 500,
                  color: '#4B5563',
                }}
                title={`${student.school}${student.location ? `, ${student.location}` : ''}`}
              >
                {student.school}
                {student.location && (
                  <span style={{ color: '#717D96' }}> · {student.location}</span>
                )}
              </span>
            </div>
          )}

          {/* Subject Breakdown Pill Tags (When Available in Record) */}
          {student.subjectResults && student.subjectResults.length > 0 && (
            <div
              style={{
                display: 'flex',
                gap: '5px',
                flexWrap: 'wrap',
                marginTop: '0.55rem',
              }}
            >
              {student.subjectResults.slice(0, 2).map((sub) => (
                <span
                  key={sub.subject}
                  style={{
                    fontSize: '0.68rem',
                    fontWeight: 600,
                    color: '#2A366F',
                    backgroundColor: '#F3F6FC',
                    padding: '0.15rem 0.45rem',
                    borderRadius: '4px',
                    border: '1px solid #E2E8F5',
                  }}
                >
                  {sub.subject} {sub.percentage}%
                </span>
              ))}
            </div>
          )}
        </div>

        {/* ─── 3. CARD FOOTER INTERACTIVE INDICATOR ─── */}
        <div
          style={{
            marginTop: '0.75rem',
            paddingTop: '0.65rem',
            borderTop: '1px solid rgba(16, 23, 43, 0.06)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.72rem',
          }}
        >
          {isActive ? (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                color: '#202A57',
                fontWeight: 700,
              }}
            >
              <CheckCircle2 size={13} color="#202A57" />
              <span>Active Selection</span>
            </div>
          ) : (
            <span style={{ color: '#6B7280', fontWeight: 500 }}>
              Tap to focus
            </span>
          )}

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              color: isActive ? '#C89B3C' : '#9CA3AF',
              fontWeight: 700,
            }}
          >
            <Award size={13} />
            <span>Verified</span>
          </div>
        </div>
      </div>
    </div>
  );
};
