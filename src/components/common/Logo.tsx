import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  showTagline = true,
  size = 'md',
  className = '',
}) => {
  const isLight = variant === 'light';
  
  // Icon dimensions
  const iconSize = size === 'sm' ? 32 : size === 'lg' ? 48 : 40;
  
  const textColor = isLight ? '#FFFFFF' : '#252B63';
  const subtitleColor = isLight ? '#EAF4E7' : '#58A846';

  return (
    <div className={`logo-container ${className}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
      {/* Dual-wing open book emblem (Navy & Green) */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
        aria-hidden="true"
      >
        {/* Left Wing / Page - Navy */}
        <path
          d="M30.5 48C20 42 10 44 4 50C6 38 12 24 30 18C26.5 28 26.5 39 30.5 48Z"
          fill={isLight ? '#FFFFFF' : '#252B63'}
        />
        {/* Right Wing / Page - Green */}
        <path
          d="M33.5 48C44 42 54 44 60 50C58 38 52 24 34 18C37.5 28 37.5 39 33.5 48Z"
          fill="#58A846"
        />
        {/* Upper Top Flight Arc - Left */}
        <path
          d="M29.5 16C18 12 9 15 4 20C7 11 17 4 30 5C28.5 9 28.5 12 29.5 16Z"
          fill={isLight ? '#E5E7EB' : '#171B45'}
        />
        {/* Upper Top Flight Arc - Right */}
        <path
          d="M34.5 16C46 12 55 15 60 20C57 11 47 4 34 5C35.5 9 35.5 12 34.5 16Z"
          fill="#499B38"
        />
      </svg>

      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: size === 'sm' ? '1.1rem' : size === 'lg' ? '1.65rem' : '1.35rem',
            letterSpacing: '0.04em',
            color: textColor,
            textTransform: 'uppercase',
          }}
        >
          Fundemics
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '2px' }}>
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: size === 'sm' ? '0.75rem' : size === 'lg' ? '1rem' : '0.85rem',
              letterSpacing: '0.12em',
              color: subtitleColor,
              textTransform: 'uppercase',
            }}
          >
            Tutorials
          </span>
          {showTagline && size !== 'sm' && (
            <span
              className="tagline-serif"
              style={{
                fontSize: '0.7rem',
                color: isLight ? '#D1D5DB' : '#666666',
                marginLeft: '4px',
                display: size === 'md' ? 'none' : 'inline',
              }}
            >
              • Educating for better tomorrow...
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
