import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from '../../context/RouterContext';

export const BoardsPathwaysSection: React.FC = () => {
  const boards = [
    {
      board: 'ICSE',
      tag: 'CLASSES I – X',
      headline: 'Depth and discipline for Classes I to X.',
      description: 'Comprehensive curriculum coaching emphasizing in-depth English language proficiency, practical science conceptualization, and structured problem solving.',
      features: ['Detailed syllabus coverage', 'Rigorous language & numerical drills', 'Regular chapter checkpoints'],
    },
    {
      board: 'CBSE',
      tag: 'CLASSES I – XII',
      headline: 'Clean concepts and exact answers for Classes I to XII.',
      description: 'Systematic alignment with NCERT and CBSE examination patterns, training students for high-speed calculation, precise diagramming, and full-mark answer keys.',
      features: ['NCERT first-principles mastery', 'Timed mock test series', 'Specialized doubt clearing counters'],
    },
    {
      board: 'ISC',
      tag: 'CLASSES XI & XII',
      headline: 'Rigorous training for Classes XI and XII.',
      description: 'Advanced subject coaching for Science (PCM/PCB) streams, bridging board examination excellence with analytical preparation for higher education.',
      features: ['IIT & Engineering alumni mentors', 'Advanced numerical derivations', 'Targeted board marking rubrics'],
    },
  ];

  return (
    <section
      className="section section-white"
      style={{ borderBottom: '1px solid var(--color-border-light)' }}
    >
      <div className="container">
        <SectionHeading
          eyebrow="BOARDS"
          title="Clear academic pathways"
          subtitle="From the first day of school to the final board exam, the road should be clear. We teach Classes I to XII for ICSE, ISC, and CBSE."
          align="center"
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
            gap: '2rem',
            marginTop: '1.5rem',
          }}
        >
          {boards.map((b) => (
            <div
              key={b.board}
              className="surface-card surface-card-interactive"
              style={{
                padding: '2.5rem 2rem',
                backgroundColor: 'var(--color-cream)',
                borderRadius: 'var(--radius-xl)',
                borderTop: '5px solid var(--color-accent-green)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <span
                    style={{
                      fontSize: '1.75rem',
                      fontWeight: 800,
                      color: 'var(--color-primary-navy)',
                      fontFamily: 'var(--font-display)',
                    }}
                  >
                    {b.board}
                  </span>
                  <span className="badge badge-navy" style={{ fontSize: '0.72rem', fontWeight: 800 }}>
                    {b.tag}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: 'var(--color-primary-navy)',
                    marginBottom: '0.75rem',
                    lineHeight: 1.3,
                  }}
                >
                  {b.headline}
                </h3>

                <p
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.6,
                    marginBottom: '1.5rem',
                  }}
                >
                  {b.description}
                </p>

                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {b.features.map((feat, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: '0.85rem',
                        color: 'var(--color-text-primary)',
                      }}
                    >
                      <Check size={15} color="var(--color-accent-green)" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ borderTop: '1px solid var(--color-border-light)', paddingTop: '1rem' }}>
                <Link
                  href="/queries"
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: 'var(--color-primary-navy)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                  }}
                >
                  <span>Inquire for {b.board}</span>
                  <ArrowRight size={14} color="var(--color-accent-green)" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
