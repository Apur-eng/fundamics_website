import React from 'react';
import type { RankerRecord } from '../../data/rankersData';
import { StudentImage } from './StudentImage';
import { CheckCircle2, ArrowRight, School } from 'lucide-react';

interface RankerCardProps {
  ranker: RankerRecord;
  onViewDetails?: (ranker: RankerRecord) => void;
  index?: number;
}

export const RankerCard: React.FC<RankerCardProps> = ({ ranker, onViewDetails }) => {
  const displayPercentage = ranker.formattedPercentage || `${ranker.percentage}%`;
  const sessionLabel = ranker.session || ranker.year || '2025–26';
  const classLabel = ranker.class || ranker.className || 'Class XII';

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
      aria-label={`View result of ${ranker.name}, ${displayPercentage}`}
      style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid #E5DFD4',
        borderRadius: '14px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition:
          'transform 350ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 350ms cubic-bezier(0.16, 1, 0.3, 1), border-color 300ms ease',
        cursor: 'pointer',
        boxShadow: '0 4px 18px rgba(16, 23, 43, 0.04)',
        opacity: 1,
      }}
    >
      <div>
        {/* 1. STUDENT PHOTOGRAPH */}
        <div
          style={{
            position: 'relative',
            height: '260px',
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
            {ranker.board} · {classLabel}
          </div>

          {/* Session Tag */}
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
            {sessionLabel}
          </div>
        </div>

        {/* Card Content Area with Strict Visual Hierarchy:
            PERCENTAGE
            Student Name
            Class / Board
            School
        */}
        <div style={{ padding: '1.45rem 1.45rem 1.15rem 1.45rem' }}>
          {/* 1. PERCENTAGE (Dominant Visual Element) */}
          <div style={{ marginBottom: '0.85rem' }}>
            <div
              className="card-percentage"
              style={{
                fontFamily: "'Newsreader', Georgia, serif",
                fontSize: '2.9rem',
                fontWeight: 700,
                color: '#10172B',
                lineHeight: 1,
                letterSpacing: '-0.025em',
                display: 'inline-block',
                position: 'relative',
              }}
            >
              {displayPercentage}
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
          </div>

          {/* 2. STUDENT NAME */}
          <h4
            className="card-student-name"
            style={{
              fontFamily: "'Newsreader', Georgia, serif",
              fontSize: '1.45rem',
              fontWeight: 600,
              color: '#10172B',
              margin: '0 0 0.35rem 0',
              lineHeight: 1.2,
              letterSpacing: '-0.01em',
              transition: 'color 250ms ease',
            }}
          >
            {ranker.name}
          </h4>

          {/* 3. CLASS / BOARD / SESSION */}
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.72rem',
              fontWeight: 800,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#1B6B44',
              marginBottom: ranker.school ? '0.95rem' : '0.45rem',
            }}
          >
            {classLabel} &nbsp;·&nbsp; {ranker.board} &nbsp;·&nbsp; {sessionLabel}
          </div>

          {/* 4. SCHOOL (Omitted if not specified on poster) */}
          {ranker.school ? (
            <div
              style={{
                backgroundColor: '#FAF8F5',
                borderRadius: '8px',
                border: '1px solid #EFEAE0',
                padding: '0.75rem 0.9rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.5rem',
              }}
            >
              <School size={15} color="#1B6B44" style={{ marginTop: '2px', flexShrink: 0 }} />
              <span
                style={{
                  fontSize: '0.82rem',
                  color: '#423D33',
                  fontWeight: 500,
                  lineHeight: 1.35,
                }}
              >
                {ranker.school}
              </span>
            </div>
          ) : (
            <div style={{ minHeight: '8px' }} />
          )}
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
