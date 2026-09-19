import React from 'react';
import type { RankerRecord } from '../../data/rankersData';
import { StudentImage } from './StudentImage';
import { ArrowRight, CheckCircle2, School, MapPin, Award } from 'lucide-react';

interface SecondaryRankerProps {
  ranker: RankerRecord;
  onViewDetails?: (ranker: RankerRecord) => void;
}

export const SecondaryRanker: React.FC<SecondaryRankerProps> = ({ ranker, onViewDetails }) => {
  const hasOverall = ranker.overallPercentage !== null && ranker.overallPercentage !== undefined;

  return (
    <div
      className="secondary-featured-ranker"
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '14px',
        border: '1px solid #E5DFD4',
        boxShadow: '0 10px 30px -8px rgba(16, 23, 43, 0.05)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'transform 280ms ease, box-shadow 280ms ease, border-color 280ms ease',
      }}
    >
      <div>
        {/* Top: Student Image with Board Badge */}
        <div
          style={{
            position: 'relative',
            height: '260px',
            backgroundColor: '#F5F2EB',
            overflow: 'hidden',
          }}
        >
          <div className="secondary-image-inner" style={{ width: '100%', height: '100%' }}>
            <StudentImage
              src={ranker.image}
              alt={ranker.name}
              aspectRatio="1 / 1"
              objectPosition="center 18%"
              label="STUDENT PHOTO"
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
              padding: '0.45rem 0.85rem',
              borderBottomRightRadius: '8px',
              fontSize: '0.70rem',
              fontWeight: 800,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              zIndex: 2,
              boxShadow: '0 2px 10px rgba(0,0,0,0.18)',
            }}
          >
            {ranker.board} · {ranker.className || ranker.class}
          </div>
        </div>

        {/* Content Area */}
        <div style={{ padding: '1.65rem 1.5rem 1rem 1.5rem' }}>
          {/* Prominent Percentage or Subject Achievements */}
          {hasOverall ? (
            <div style={{ marginBottom: '0.5rem' }}>
              <div
                style={{
                  fontFamily: "'Newsreader', Georgia, serif",
                  fontSize: '3rem',
                  fontWeight: 700,
                  color: '#10172B',
                  lineHeight: 1,
                  letterSpacing: '-0.02em',
                  display: 'inline-block',
                  position: 'relative',
                }}
              >
                {ranker.overallPercentage}%
                <div
                  style={{
                    height: '3px',
                    backgroundColor: '#E6AA32',
                    borderRadius: '2px',
                    width: '100%',
                    marginTop: '3px',
                  }}
                />
              </div>
              <div
                style={{
                  fontSize: '0.68rem',
                  fontWeight: 750,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#1B6B44',
                  marginTop: '0.35rem',
                }}
              >
                Overall Result
              </div>
            </div>
          ) : (
            <div style={{ marginBottom: '0.85rem' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  fontSize: '0.68rem',
                  fontWeight: 800,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#1B6B44',
                  marginBottom: '0.45rem',
                }}
              >
                <Award size={13} />
                <span>Subject Achievement</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                {ranker.subjectResults?.map((s) => (
                  <div
                    key={s.subject}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'baseline',
                      borderBottom: '1px dashed #E5DFD4',
                      paddingBottom: '0.2rem',
                    }}
                  >
                    <span style={{ fontSize: '0.82rem', fontWeight: 600, color: '#423D33' }}>
                      {s.subject}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Newsreader', Georgia, serif",
                        fontSize: '1.25rem',
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

          {/* Student Name */}
          <h4
            style={{
              fontFamily: "'Newsreader', Georgia, serif",
              fontSize: '1.45rem',
              fontWeight: 600,
              color: '#10172B',
              margin: '0 0 0.35rem 0',
              lineHeight: 1.2,
            }}
          >
            {ranker.name}
          </h4>

          {/* Session */}
          <p
            style={{
              fontSize: '0.82rem',
              color: '#8A8274',
              fontWeight: 600,
              margin: '0 0 1rem 0',
              letterSpacing: '0.02em',
            }}
          >
            Academic Session {ranker.year}
            {ranker.uid ? ` · UID: ${ranker.uid}` : ''}
          </p>

          {/* Real School & Campus Info */}
          <div
            style={{
              backgroundColor: '#FAF8F5',
              borderRadius: '8px',
              border: '1px solid #EFEAE0',
              padding: '0.85rem 1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.45rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <School size={15} color="#1B6B44" style={{ flexShrink: 0 }} />
              <span
                style={{
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  color: '#10172B',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
                title={ranker.school}
              >
                {ranker.school}
              </span>
            </div>

            {ranker.location && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MapPin size={15} color="#E6AA32" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '0.82rem', color: '#555149', fontWeight: 500 }}>
                  {ranker.location}, Lucknow
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer CTA & Verified Status */}
      <div
        style={{
          padding: '0.75rem 1.5rem 1.35rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <button
          type="button"
          onClick={() => onViewDetails?.(ranker)}
          style={{
            background: 'none',
            border: 'none',
            padding: 0,
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.35rem',
            fontSize: '0.84rem',
            fontWeight: 750,
            color: '#10172B',
            transition: 'color 200ms ease, gap 200ms ease',
          }}
          className="secondary-view-scorecard-btn"
          aria-label={`View scorecard for ${ranker.name}`}
        >
          <span>View Scorecard</span>
          <ArrowRight size={13} strokeWidth={2.4} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
          <CheckCircle2 size={14} color="#1B6B44" />
          <span
            style={{
              fontSize: '0.70rem',
              color: '#1B6B44',
              fontWeight: 700,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}
          >
            Verified
          </span>
        </div>
      </div>
    </div>
  );
};
