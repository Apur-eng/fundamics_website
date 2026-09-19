import React from 'react';
import type { RankerRecord } from '../../data/rankersData';
import { StudentImage } from './StudentImage';
import { ArrowRight, Award, CheckCircle2, School, MapPin } from 'lucide-react';

interface FeaturedRankerProps {
  ranker: RankerRecord;
  onViewDetails?: (ranker: RankerRecord) => void;
}

export const FeaturedRanker: React.FC<FeaturedRankerProps> = ({ ranker, onViewDetails }) => {
  const hasOverall = ranker.overallPercentage !== null && ranker.overallPercentage !== undefined;

  return (
    <div
      className="primary-featured-ranker"
      key={ranker.id}
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '16px',
        border: '1px solid #E5DFD4',
        boxShadow: '0 16px 40px -10px rgba(16, 23, 43, 0.07)',
        overflow: 'hidden',
        display: 'grid',
        gridTemplateColumns: 'minmax(280px, 42%) 1fr',
        alignItems: 'stretch',
        transition: 'transform 300ms ease, box-shadow 300ms ease',
      }}
    >
      {/* LEFT: Large Student Image */}
      <div
        style={{
          position: 'relative',
          backgroundColor: '#F5F2EB',
          minHeight: '360px',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div className="featured-image-inner" style={{ width: '100%', height: '100%' }}>
          <StudentImage
            src={ranker.image}
            alt={ranker.name}
            aspectRatio="4 / 5"
            label="STUDENT PHOTOGRAPH"
            style={{ height: '100%', width: '100%' }}
          />
        </div>

        {/* Top badge overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            backgroundColor: '#10172B',
            color: '#FFFFFF',
            padding: '0.55rem 1rem',
            borderBottomRightRadius: '10px',
            fontSize: '0.72rem',
            fontWeight: 800,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            zIndex: 2,
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
          }}
        >
          {ranker.board} · {ranker.className || ranker.class}
        </div>

        {/* Gold Corner Achievement Accent */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: '40px',
            height: '40px',
            pointerEvents: 'none',
            zIndex: 2,
          }}
        >
          <svg viewBox="0 0 40 40" fill="none" style={{ width: '100%', height: '100%' }}>
            <polygon points="40,0 40,40 0,40" fill="#E6AA32" opacity="0.9" />
            <polygon points="40,16 40,40 16,40" fill="#10172B" />
          </svg>
        </div>
      </div>

      {/* RIGHT: High-Impact Editorial Result Showcase */}
      <div
        style={{
          padding: 'clamp(1.75rem, 3.5vw, 3rem)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          {/* Eyebrow / Session Tag */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '0.75rem',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.78rem',
                fontWeight: 800,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: '#1B6B44',
              }}
            >
              {hasOverall ? 'HIGHEST PUBLISHED RESULT' : 'DISTINGUISHED SUBJECT ACHIEVER'}
            </span>

            <span
              style={{
                fontSize: '0.82rem',
                color: '#8A8274',
                fontWeight: 600,
                letterSpacing: '0.04em',
              }}
            >
              Session {ranker.year}
            </span>
          </div>

          {/* Huge Result Percentage or Subject Display */}
          {hasOverall ? (
            <div style={{ marginBottom: '0.85rem' }}>
              <div
                className="featured-percentage-display"
                style={{
                  fontFamily: "'Newsreader', Georgia, serif",
                  fontSize: 'clamp(4.2rem, 7vw, 5.8rem)',
                  fontWeight: 700,
                  color: '#10172B',
                  lineHeight: 0.95,
                  letterSpacing: '-0.03em',
                  display: 'inline-block',
                  position: 'relative',
                }}
              >
                {ranker.overallPercentage}%
                <div
                  className="featured-gold-line"
                  style={{
                    height: '3.5px',
                    backgroundColor: '#E6AA32',
                    borderRadius: '2px',
                    width: '100%',
                    marginTop: '4px',
                    transition: 'width 300ms ease',
                  }}
                />
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#1B6B44',
                  marginTop: '0.4rem',
                }}
              >
                Certified Overall Board Result
              </div>
            </div>
          ) : (
            <div style={{ marginBottom: '1.25rem' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  color: '#1B6B44',
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.74rem',
                  fontWeight: 800,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  marginBottom: '0.75rem',
                }}
              >
                <Award size={16} />
                <span>Documented Subject Scores</span>
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                  gap: '0.65rem',
                }}
              >
                {ranker.subjectResults?.map((s) => (
                  <div
                    key={s.subject}
                    style={{
                      backgroundColor: '#FAF8F5',
                      border: '1px solid #EAE3D5',
                      borderRadius: '8px',
                      padding: '0.6rem 0.85rem',
                    }}
                  >
                    <div style={{ fontSize: '0.78rem', color: '#655F55', fontWeight: 600 }}>
                      {s.subject}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Newsreader', Georgia, serif",
                        fontSize: '1.8rem',
                        fontWeight: 700,
                        color: '#10172B',
                        lineHeight: 1,
                        marginTop: '2px',
                      }}
                    >
                      {s.percentage}%
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Student Name */}
          <h3
            className="featured-student-name"
            style={{
              fontFamily: "'Newsreader', Georgia, serif",
              fontSize: 'clamp(1.75rem, 2.5vw, 2.35rem)',
              fontWeight: 600,
              color: '#10172B',
              margin: '0 0 0.35rem 0',
              letterSpacing: '-0.015em',
            }}
          >
            {ranker.name}
          </h3>

          {/* Class & Board */}
          <p
            style={{
              fontSize: '0.98rem',
              color: '#655F55',
              fontWeight: 600,
              margin: '0 0 1.25rem 0',
            }}
          >
            {ranker.className || ranker.class} &nbsp;·&nbsp; {ranker.board} Board &nbsp;·&nbsp; {ranker.year}
            {ranker.uid ? ` · UID: ${ranker.uid}` : ''}
          </p>

          {/* Subject pills for overall achievers if available */}
          {hasOverall && ranker.subjectResults && ranker.subjectResults.length > 0 && (
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.4rem',
                marginBottom: '1.25rem',
              }}
            >
              {ranker.subjectResults.map((s) => (
                <span
                  key={s.subject}
                  style={{
                    backgroundColor: '#F5F2EB',
                    border: '1px solid #E5DFD4',
                    borderRadius: '4px',
                    padding: '0.25rem 0.6rem',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: '#10172B',
                  }}
                >
                  {s.subject}: {s.percentage}%
                </span>
              ))}
            </div>
          )}

          {/* Divider */}
          <div
            style={{
              height: '1px',
              backgroundColor: '#EDE8DE',
              marginBottom: '1.25rem',
            }}
          />

          {/* Verified School & Campus Information */}
          <div
            style={{
              backgroundColor: '#FAF8F5',
              borderRadius: '10px',
              border: '1px solid #EDE7DB',
              padding: '1.25rem 1.35rem',
              marginBottom: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
              <School size={18} color="#1B6B44" style={{ marginTop: '2px', flexShrink: 0 }} />
              <div>
                <div
                  style={{
                    fontSize: '0.7rem',
                    color: '#8A8274',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                  }}
                >
                  School / Institution
                </div>
                <div
                  style={{
                    fontSize: '1rem',
                    color: '#10172B',
                    fontWeight: 600,
                    marginTop: '2px',
                  }}
                >
                  {ranker.school}
                </div>
              </div>
            </div>

            {ranker.location && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <MapPin size={18} color="#E6AA32" style={{ flexShrink: 0 }} />
                <div>
                  <div
                    style={{
                      fontSize: '0.7rem',
                      color: '#8A8274',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                    }}
                  >
                    Campus Location
                  </div>
                  <div
                    style={{
                      fontSize: '0.94rem',
                      color: '#423D33',
                      fontWeight: 500,
                      marginTop: '2px',
                    }}
                  >
                    {ranker.location}, Lucknow
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer with Verified Result Seal + Interactive Trigger */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            paddingTop: '0.5rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
            <CheckCircle2 size={18} color="#1B6B44" />
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.78rem',
                fontWeight: 750,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: '#1B6B44',
              }}
            >
              Certified Official Result
            </span>
          </div>

          <button
            type="button"
            onClick={() => onViewDetails?.(ranker)}
            aria-label={`View detailed scorecard for ${ranker.name}`}
            className="scorecard-action-btn"
            style={{
              backgroundColor: '#10172B',
              color: '#FAF8F5',
              padding: '0.75rem 1.45rem',
              borderRadius: '9999px',
              border: 'none',
              fontFamily: 'var(--font-display)',
              fontSize: '0.84rem',
              fontWeight: 700,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(16, 23, 43, 0.15)',
              transition: 'background-color 200ms ease, transform 200ms ease',
            }}
          >
            <span>View Full Scorecard</span>
            <ArrowRight size={14} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </div>
  );
};
