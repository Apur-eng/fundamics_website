import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { UserCheck, BookOpen, Trophy, ArrowRight } from 'lucide-react';
import { Link } from '../../context/RouterContext';

export const ThreePillarsSection: React.FC = () => {
  const pillars = [
    {
      id: 'personalized',
      tag: 'PILLAR 01',
      title: 'Personalized Learning',
      desc: "Small batches and sharp attention fit to each student's pace and gaps. We ensure no learner is lost in the crowd.",
      icon: <UserCheck size={26} color="var(--color-accent-green-dark)" />,
    },
    {
      id: 'foundations',
      tag: 'PILLAR 02',
      title: 'Strong Foundations',
      desc: 'Concepts taught from the ground up, never memorized blindly. Students master why formulas work and build analytical depth.',
      icon: <BookOpen size={26} color="var(--color-primary-navy)" />,
    },
    {
      id: 'achievement',
      tag: 'PILLAR 03',
      title: 'Academic Achievement',
      desc: 'A steady climb toward higher marks, board distinctions, and genuine self-confidence that lasts throughout life.',
      icon: <Trophy size={26} color="var(--color-accent-green-dark)" />,
    },
  ];

  return (
    <section
      className="section section-cream"
      style={{ borderBottom: '1px solid var(--color-border-light)' }}
    >
      <div className="container">
        <SectionHeading
          eyebrow="WHY"
          title="Built on three pillars"
          subtitle="Every lesson at Fundemics Tutorials rests on a simple idea. A student who is known, grounded, and challenged will always go further."
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
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="surface-card surface-card-interactive"
              style={{
                padding: '2.5rem 2rem',
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-xl)',
                borderTop: '5px solid var(--color-primary-navy)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.5rem',
                  }}
                >
                  <span
                    className="badge badge-navy"
                    style={{ fontSize: '0.72rem', letterSpacing: '0.08em', fontWeight: 800 }}
                  >
                    {pillar.tag}
                  </span>
                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--color-cream)',
                      border: '1px solid var(--color-border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {pillar.icon}
                  </div>
                </div>

                <h3
                  style={{
                    fontSize: '1.35rem',
                    fontWeight: 800,
                    color: 'var(--color-primary-navy)',
                    marginBottom: '0.75rem',
                  }}
                >
                  {pillar.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.925rem',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.65,
                  }}
                >
                  {pillar.desc}
                </p>
              </div>

              <div
                style={{
                  marginTop: '1.5rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--color-border-subtle)',
                }}
              >
                <Link
                  href="/vision"
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: 'var(--color-primary-navy)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                  }}
                >
                  <span>Explore our philosophy</span>
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
