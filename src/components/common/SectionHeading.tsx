import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  theme?: 'light' | 'dark';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  theme = 'light',
  className = '',
}) => {
  const isDark = theme === 'dark';
  const isCenter = align === 'center';

  return (
    <div
      className={`section-heading ${className}`}
      style={{
        textAlign: isCenter ? 'center' : 'left',
        maxWidth: isCenter ? '760px' : '680px',
        margin: isCenter ? '0 auto var(--space-10) auto' : '0 0 var(--space-8) 0',
      }}
    >
      {eyebrow && (
        <div style={{ marginBottom: '0.65rem' }}>
          <span
            className={`badge ${isDark ? 'badge-white' : 'badge-navy'}`}
            style={{
              fontSize: '0.75rem',
              letterSpacing: '0.08em',
              fontWeight: 700,
              padding: '0.35rem 0.85rem',
            }}
          >
            {eyebrow}
          </span>
        </div>
      )}
      <h2
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'var(--text-h2)',
          fontWeight: 800,
          color: isDark ? 'var(--color-surface-white)' : 'var(--color-primary-navy)',
          lineHeight: 1.2,
          marginBottom: subtitle ? '0.75rem' : '0',
          letterSpacing: '-0.025em',
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--text-body)',
            lineHeight: 1.6,
            color: isDark ? 'rgba(255, 255, 255, 0.82)' : 'var(--color-text-muted)',
            margin: '0',
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
