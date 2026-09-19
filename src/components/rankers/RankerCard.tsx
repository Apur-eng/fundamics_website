import React from 'react';
import type { RankerRecord } from '../../data/rankersData';
import { StudentImage } from './StudentImage';
import { CheckCircle2, ArrowRight, School, MapPin, Award } from 'lucide-react';

interface RankerCardProps {
  ranker: RankerRecord;
  onViewDetails?: (ranker: RankerRecord) => void;
  index?: number;
}

export const RankerCard: React.FC<RankerCardProps> = ({ ranker, onViewDetails }) => {
  const hasOverall = ranker.overallPercentage !== null && ranker.overallPercentage !== undefined;

  return (
    <div
      className="archive-ranker-card"
      onClick={() => onViewDetails?.(ranker)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onViewDetails?.(ranker);
        }
      }}
      aria-label={`View result of ${ranker.name}${hasOverall ? `, ${ranker.overallPercentage}%` : ''}`}
      style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid #E5DFD4',
        borderRadius: '14px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'transform 350ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 350ms cubic-bezier(0.16, 1, 0.3, 1), border-color 300ms ease',
        cursor: 'pointer',
        boxShadow: '0 4px 18px rgba(16, 23, 43, 0.04)',
        opacity: 1,
      }}
    >
      <div>
        {/* TOP: Real Student Image Container */}
        <div
          style={{
            position: 'relative',
            height: '250px',
            backgroundColor: '#F5F2EB',
            overflow: 'hidden',
            borderBottom: '1px solid #EFEBE4',
          }}
        >
          <div className="card-image-inner" style={{ width: '100%', height: '100%' }}>
            <StudentImage
              src={ranker.image}
              alt={ranker.name}
              aspectRatio="1 / 1"
              objectPosition="center 18%"
              label="STUDENT PHOTOGRAPH"
              style={{ height: '100%', width: '100%' }}
            />
          </div>

          {/* Board Badge */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              backgroundColor: '#10172B',
              color: '#FFFFFF',
              padding: '0.42rem 0.85rem',
              borderBottomRightRadius: '8px',
              fontSize: '0.70rem',
              fontWeight: 800,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              zIndex: 2,
              boxShadow: '0 2px 8px rgba(0,0,0,0.18)',
            }}
          >
            {ranker.board} · {ranker.className || ranker.class}
          </div>

          {/* Session / Year Tag */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              color: '#10172B',
              padding: '0.42rem 0.75rem',
              borderBottomLeftRadius: '8px',
              fontSize: '0.70rem',
              fontWeight: 750,
              letterSpacing: '0.04em',
              zIndex: 2,
              boxShadow: '0 2px 6px rgba(0, 0, 0, 0.08)',
            }}
          >
            {ranker.year}
          </div>
        </div>

        {/* Card Content Area */}
        <div style={{ padding: '1.45rem 1.45rem 1rem 1.45rem' }}>
          {/* Student Name */}
          <h4
            className="card-student-name"
            style={{
              fontFamily: "'Newsreader', Georgia, serif",
              fontSize: '1.4rem',
              fontWeight: 600,
              color: '#10172B',
              margin: '0 0 0.5rem 0',
              lineHeight: 1.2,
              letterSpacing: '-0.01em',
              transition: 'color 250ms ease',
            }}
          >
            {ranker.name}
          </h4>

          {/* UID if available */}
          {ranker.uid && (
            <div
              style={{
                fontSize: '0.72rem',
                color: '#8A8274',
                fontWeight: 600,
                letterSpacing: '0.04em',
                marginBottom: '0.6rem',
              }}
            >
              UID: {ranker.uid}
            </div>
          )}

          {/* RESULT PRESENTATION: Overall vs Subject Achievements */}
          {hasOverall ? (
            /* Documented Overall Percentage */
            <div style={{ marginBottom: '1.1rem' }}>
              <div
                className="card-percentage"
                style={{
                  fontFamily: "'Newsreader', Georgia, serif",
                  fontSize: '2.8rem',
                  fontWeight: 700,
                  color: '#10172B',
                  lineHeight: 1,
                  letterSpacing: '-0.02em',
                  display: 'inline-block',
                  position: 'relative',
                  transition: 'transform 300ms ease',
                }}
              >
                {ranker.overallPercentage}%
                <div
                  className="card-accent-line"
                  style={{
                    height: '3px',
                    backgroundColor: '#E6AA32',
                    borderRadius: '2px',
                    width: '100%',
                    marginTop: '3px',
                    transition: 'background-color 300ms ease, width 300ms ease',
                  }}
                />
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.68rem',
                  fontWeight: 750,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#1B6B44',
                  marginTop: '0.45rem',
                }}
              >
                {ranker.className || ranker.class} · OVERALL RESULT
              </div>

              {/* Subject Breakdown if available */}
              {ranker.subjectResults && ranker.subjectResults.length > 0 && (
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.35rem',
                    marginTop: '0.65rem',
                  }}
                >
                  {ranker.subjectResults.map((sub) => (
                    <span
                      key={sub.subject}
                      style={{
                        fontSize: '0.70rem',
                        fontWeight: 600,
                        backgroundColor: '#F5F2EB',
                        color: '#423D33',
                        padding: '0.2rem 0.5rem',
                        borderRadius: '4px',
                        border: '1px solid #EAE3D5',
                      }}
                    >
                      {sub.subject}: {sub.percentage}%
                    </span>
                  ))}
                </div>
              )}
            </div>
          ) : (
            /* Historical Subject Achievements (NO fake overall percentage) */
            <div style={{ marginBottom: '1.1rem' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.68rem',
                  fontWeight: 800,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: '#1B6B44',
                  marginBottom: '0.6rem',
                }}
              >
                <Award size={13} color="#1B6B44" />
                <span>SUBJECT ACHIEVEMENT</span>
              </div>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.45rem',
                }}
              >
                {ranker.subjectResults?.map((sub) => (
                  <div
                    key={sub.subject}
                    style={{
                      display: 'flex',
                      alignItems: 'baseline',
                      justifyContent: 'space-between',
                      borderBottom: '1px dashed #E5DFD4',
                      paddingBottom: '0.25rem',
                    }}
                  >
                    <span style={{ fontSize: '0.86rem', fontWeight: 600, color: '#423D33' }}>
                      {sub.subject}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Newsreader', Georgia, serif",
                        fontSize: '1.35rem',
                        fontWeight: 700,
                        color: '#10172B',
                        lineHeight: 1,
                      }}
                    >
                      {sub.percentage}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Institution & Location Breakdown */}
          <div
            style={{
              backgroundColor: '#FAF8F5',
              borderRadius: '8px',
              border: '1px solid #EFEAE0',
              padding: '0.85rem 0.95rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.45rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem' }}>
              <School size={14} color="#1B6B44" style={{ marginTop: '2px', flexShrink: 0 }} />
              <span
                style={{
                  fontSize: '0.80rem',
                  color: '#423D33',
                  fontWeight: 500,
                  lineHeight: 1.35,
                }}
              >
                {ranker.school}
              </span>
            </div>

            {ranker.location && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <MapPin size={14} color="#E6AA32" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '0.78rem', color: '#655F55', fontWeight: 500 }}>
                  {ranker.location}, Lucknow
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      <div
        style={{
          borderTop: '1px solid #F0ECE4',
          padding: '0.85rem 1.45rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#FCFAF7',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
          <CheckCircle2 size={14} color="#1B6B44" />
          <span
            style={{
              fontSize: '0.72rem',
              color: '#1B6B44',
              fontWeight: 700,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}
          >
            Verified Result
          </span>
        </div>

        <div
          className="card-cta-link"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem',
            fontSize: '0.78rem',
            fontWeight: 750,
            color: '#10172B',
            transition: 'gap 200ms ease, color 200ms ease',
          }}
        >
          <span>Scorecard</span>
          <ArrowRight size={13} strokeWidth={2.4} />
        </div>
      </div>
    </div>
  );
};
