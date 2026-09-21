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
  const iconSize = size === 'sm' ? 34 : size === 'lg' ? 50 : 42;
  const iconHeight = Math.round(iconSize * (946 / 1024));
  
  const textColor = isLight ? '#FFFFFF' : '#252B63';
  const subtitleColor = isLight ? '#EAF4E7' : '#58A846';

  return (
    <div className={`logo-container ${className}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
      <img
        src="/assets/LOGO.png"
        alt="Fundemics Tutorials"
        width={iconSize}
        height={iconHeight}
        style={{
          width: `${iconSize}px`,
          height: `${iconHeight}px`,
          objectFit: 'contain',
          flexShrink: 0,
        }}
      />

      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '3px' }}>
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
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: size === 'sm' ? '0.5rem' : size === 'lg' ? '0.68rem' : '0.58rem',
              letterSpacing: '0.08em',
              color: subtitleColor,
              border: `1.2px solid ${subtitleColor}`,
              borderRadius: '3px',
              padding: '1px 3px',
              lineHeight: 1,
              marginTop: size === 'sm' ? '1px' : '2px',
              display: 'inline-block',
            }}
          >
            LLP
          </span>
        </div>
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
