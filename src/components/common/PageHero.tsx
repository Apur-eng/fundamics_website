import React from 'react';

interface PageHeroProps {
  badge?: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export const PageHero: React.FC<PageHeroProps> = ({
  badge,
  title,
  subtitle,
  children,
}) => {
  return (
    <section
      className="section-dark brochure-dots-pattern"
      style={{
        paddingTop: 'clamp(5rem, 8vw, 7rem)',
        paddingBottom: 'clamp(3rem, 5vw, 4.5rem)',
        borderBottom: '1px solid var(--color-border-navy)',
        position: 'relative',
      }}
    >
      <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
        {badge && (
          <div style={{ marginBottom: '1rem' }}>
            <span className="badge badge-white">
              {badge}
            </span>
          </div>
        )}
        <h1
          style={{
            fontSize: 'var(--text-h1)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            marginBottom: subtitle ? '1rem' : '0',
            maxWidth: '850px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            style={{
              fontSize: 'var(--text-body-lg)',
              color: 'var(--color-text-inverse-muted)',
              maxWidth: '680px',
              marginLeft: 'auto',
              marginRight: 'auto',
              lineHeight: 1.6,
            }}
          >
            {subtitle}
          </p>
        )}
        {children && <div style={{ marginTop: '1.5rem' }}>{children}</div>}
      </div>
    </section>
  );
};
