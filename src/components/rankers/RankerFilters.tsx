import React from 'react';
import type { BoardType } from '../../data/rankersData';

interface RankerFiltersProps {
  selectedBoard: 'ALL' | BoardType;
  onSelectBoard: (board: 'ALL' | BoardType) => void;
  selectedClass: string;
  onSelectClass: (cls: string) => void;
  selectedYear: string;
  onSelectYear: (year: string) => void;
  availableClasses: string[];
  availableYears: string[];
}

const BOARDS: ('ALL' | BoardType)[] = ['ALL', 'ICSE', 'ISC', 'CBSE', 'UP BOARD'];

export const RankerFilters: React.FC<RankerFiltersProps> = ({
  selectedBoard,
  onSelectBoard,
  selectedClass,
  onSelectClass,
  selectedYear,
  onSelectYear,
  availableClasses,
  availableYears,
}) => {
  return (
    <nav
      id="rankers-filter-nav"
      aria-label="Filter results by board"
      style={{
        backgroundColor: '#FAF8F5',
        borderBottom: '1px solid #EAE3D5',
        padding: '1.25rem 0',
        position: 'sticky',
        top: '72px',
        zIndex: 20,
        backdropFilter: 'blur(8px)',
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: '1240px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.25rem',
        }}
      >
        {/* Left: View Results By + Editorial Text Navigation */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 'clamp(1rem, 2.5vw, 2.25rem)',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.72rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.18em',
              color: '#8A8274',
              flexShrink: 0,
            }}
          >
            VIEW RESULTS BY
          </span>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 'clamp(1.2rem, 2.2vw, 2rem)',
            }}
            role="tablist"
          >
            {BOARDS.map((board) => {
              const isActive = selectedBoard === board;

              return (
                <button
                  key={board}
                  onClick={() => onSelectBoard(board)}
                  role="tab"
                  aria-selected={isActive}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: '0.4rem 0',
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.90rem',
                    fontWeight: isActive ? 800 : 600,
                    color: isActive ? '#10172B' : '#7A7468',
                    cursor: 'pointer',
                    position: 'relative',
                    letterSpacing: '0.04em',
                    transition: 'color 200ms ease',
                  }}
                  className="editorial-filter-btn"
                >
                  {board}

                  {/* Animated Green Underline */}
                  <span
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '2.5px',
                      backgroundColor: '#1B6B44',
                      borderRadius: '2px',
                      transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                      transformOrigin: 'left center',
                      transition: 'transform 250ms cubic-bezier(0.2, 0.9, 0.3, 1)',
                    }}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Optional Subtle Secondary Filters (Class & Year) */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
          }}
        >
          {/* Class Filter */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span style={{ fontSize: '0.74rem', color: '#8A8274', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Class:
            </span>
            <select
              value={selectedClass}
              onChange={(e) => onSelectClass(e.target.value)}
              aria-label="Filter by class"
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #DFD9CE',
                borderRadius: '6px',
                padding: '0.35rem 0.65rem',
                fontSize: '0.82rem',
                color: '#10172B',
                fontWeight: 600,
                cursor: 'pointer',
                outline: 'none',
              }}
            >
              <option value="ALL">All Classes</option>
              {availableClasses.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          {/* Session / Year Filter */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span style={{ fontSize: '0.74rem', color: '#8A8274', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Session:
            </span>
            <select
              value={selectedYear}
              onChange={(e) => onSelectYear(e.target.value)}
              aria-label="Filter by academic session"
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #DFD9CE',
                borderRadius: '6px',
                padding: '0.35rem 0.65rem',
                fontSize: '0.82rem',
                color: '#10172B',
                fontWeight: 600,
                cursor: 'pointer',
                outline: 'none',
              }}
            >
              <option value="ALL">All Sessions</option>
              {availableYears.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <style>{`
        .editorial-filter-btn:hover {
          color: #10172B !important;
        }
      `}</style>
    </nav>
  );
};
