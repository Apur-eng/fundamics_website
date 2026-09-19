import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { academicTiers } from '../../data/courses';
import { Button } from '../common/Button';
import { Check, ArrowRight, ChevronRight } from 'lucide-react';

export const AcademicCoverage: React.FC = () => {
  const [activeTierId, setActiveTierId] = useState<string>(academicTiers[2].id); // Secondary default

  const activeTier = academicTiers.find((t) => t.id === activeTierId) || academicTiers[2];

  return (
    <section
      id="academic-coverage"
      className="section section-ivory"
      style={{ borderBottom: '1px solid var(--color-border-light)' }}
    >
      <div className="container">
        <SectionHeading
          eyebrow="ACADEMIC COVERAGE"
          title="Comprehensive Curriculum for Classes I to XII"
          subtitle="Tailored pedagogical pathways designed specifically for ICSE, ISC, and CBSE syllabi in Lucknow. Building depth from elementary years to board distinctions."
          align="center"
        />

        {/* Asymmetric Split Layout: Navigation Selectors on Left, Detailed Visual Feature on Right */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(2rem, 5vw, 3.5rem)',
            alignItems: 'stretch',
            marginTop: '2.5rem',
          }}
        >
          {/* Left: Interactive Class Tier List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ fontSize: '0.825rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-muted)', marginBottom: '0.25rem' }}>
              Select Class Grouping
            </div>

            {academicTiers.map((tier) => {
              const isSelected = tier.id === activeTierId;
              return (
                <div
                  key={tier.id}
                  onClick={() => setActiveTierId(tier.id)}
                  style={{
                    padding: '1.35rem 1.65rem',
                    backgroundColor: isSelected ? 'var(--color-primary-navy)' : '#FFFFFF',
                    color: isSelected ? '#FFFFFF' : 'var(--color-text-primary)',
                    borderRadius: 'var(--radius-lg)',
                    border: isSelected ? '1.5px solid var(--color-primary-navy)' : '1px solid var(--color-border-light)',
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    boxShadow: isSelected ? 'var(--shadow-md)' : 'var(--shadow-sm)',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span
                        style={{
                          fontSize: '0.8rem',
                          fontWeight: 800,
                          color: isSelected ? 'var(--color-hero-accent)' : 'var(--color-accent-green)',
                          letterSpacing: '0.05em',
                        }}
                      >
                        {tier.classes}
                      </span>
                      <span style={{ opacity: 0.4 }}>•</span>
                      <span style={{ fontSize: '0.75rem', opacity: isSelected ? 0.85 : 0.6 }}>
                        {tier.boards.join(', ')}
                      </span>
                    </div>

                    <h3
                      style={{
                        fontSize: '1.15rem',
                        fontWeight: 700,
                        color: isSelected ? '#FFFFFF' : 'var(--color-primary-navy)',
                      }}
                    >
                      {tier.name}
                    </h3>
                  </div>

                  <ChevronRight size={20} color={isSelected ? 'var(--color-hero-accent)' : 'var(--color-text-light)'} />
                </div>
              );
            })}
          </div>

          {/* Right: Rich Detail Showcase for Selected Tier */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid var(--color-border-light)',
              borderRadius: 'var(--radius-xl)',
              padding: 'clamp(2rem, 4vw, 3rem)',
              boxShadow: 'var(--shadow-card)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div>
                  <span className="badge badge-navy" style={{ marginBottom: '0.5rem' }}>
                    {activeTier.classes}
                  </span>
                  <h3
                    style={{
                      fontSize: '1.75rem',
                      fontWeight: 800,
                      color: 'var(--color-primary-navy)',
                      lineHeight: 1.2,
                    }}
                  >
                    {activeTier.name}
                  </h3>
                </div>

                <div style={{ display: 'flex', gap: '0.4rem' }}>
                  {activeTier.boards.map((b) => (
                    <span
                      key={b}
                      className="badge badge-green"
                    >
                      {b} Board
                    </span>
                  ))}
                </div>
              </div>

              <p
                style={{
                  fontSize: '1.05rem',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.65,
                  marginBottom: '1.75rem',
                }}
              >
                {activeTier.description}
              </p>

              {/* Key Subjects */}
              <div style={{ marginBottom: '1.75rem' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-text-muted)', display: 'block', marginBottom: '0.5rem' }}>
                  Core Curriculum Subjects
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {activeTier.subjects.map((sub) => (
                    <span
                      key={sub}
                      style={{
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        backgroundColor: 'var(--color-ivory)',
                        color: 'var(--color-primary-navy)',
                        padding: '0.35rem 0.85rem',
                        borderRadius: 'var(--radius-full)',
                        border: '1px solid var(--color-border-subtle)',
                      }}
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              </div>

              {/* Academic Highlights */}
              <div style={{ marginBottom: '2rem' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-text-muted)', display: 'block', marginBottom: '0.5rem' }}>
                  Mentorship Highlights
                </span>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {activeTier.highlights.map((item, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.6rem',
                        fontSize: '0.925rem',
                        color: 'var(--color-text-secondary)',
                      }}
                    >
                      <Check size={16} color="var(--color-accent-green)" style={{ flexShrink: 0 }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Enquire Link */}
            <div style={{ paddingTop: '1.5rem', borderTop: '1px solid var(--color-border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
              <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                Morning and Evening Batches available
              </div>
              <Button variant="green" size="md" href="/queries" icon={<ArrowRight size={16} />}>
                Enquire for {activeTier.classes}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
