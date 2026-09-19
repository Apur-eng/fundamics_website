import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { testimonialsData } from '../../data/testimonials';
import { Star } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section
      className="section section-white"
      style={{ borderBottom: '1px solid var(--color-border-light)' }}
    >
      <div className="container">
        <SectionHeading
          eyebrow="VOICES OF TRUST"
          title="What Our Students & Parents Say"
          subtitle="Real reflections from learners who transformed their conceptual clarity, academic performance, and examination confidence at Fundemics."
          align="center"
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.75rem',
            marginTop: '1.5rem',
          }}
        >
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="surface-card"
              style={{
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                backgroundColor: 'var(--color-cream)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--color-border-subtle)',
              }}
            >
              <div>
                {/* 5-Star Rating Row */}
                <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '1rem' }}>
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#F59E0B" color="#F59E0B" />
                  ))}
                </div>

                <p
                  style={{
                    fontSize: '0.925rem',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.6,
                    fontStyle: 'italic',
                    marginBottom: '1.5rem',
                  }}
                >
                  "{item.quote}"
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', borderTop: '1px solid var(--color-border-light)', paddingTop: '0.85rem' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: 'var(--color-primary-navy)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                  }}
                >
                  {item.studentName.charAt(0)}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--color-primary-navy)' }}>
                    {item.studentName}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                    {item.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
