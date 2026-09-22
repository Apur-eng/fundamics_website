     import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from '../../context/RouterContext';

export const CmsBatchesSection: React.FC = () => {
  return (
    <section
      id="cms-batches"
      style={{
        backgroundColor: 'var(--surface-white)',  /* Pure white — visual breathing space */
        paddingTop: 'clamp(5rem, 9vw, 8rem)',
        paddingBottom: 'clamp(5rem, 9vw, 8rem)',
        borderBottom: '1px solid var(--surface-white-border)',
        position: 'relative',
      }}
      aria-label="Specialized Support for CMS Students"
    >
      <div className="container">
        {/* Large Editorial Split Layout: Pure Photography + Typography (No cards) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(2.5rem, 6vw, 5.5rem)',
            alignItems: 'center',
          }}
        >
          {/* Left: Large Classroom Photography */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 20px 50px -12px rgba(16, 23, 43, 0.15)',
                aspectRatio: '4 / 3',
                backgroundColor: '#10172B',
              }}
            >
              <img
                src="/assets/cms_focused.webp"
                alt="City Montessori School (CMS) students celebrating academic excellence and board milestones at Fundemics Tutorials Lucknow"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>

            {/* Subtle caption beneath photo */}
            <div
              style={{
                marginTop: '0.85rem',
                fontSize: '0.78rem',
                color: '#706A60',
                fontFamily: 'var(--font-sans)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: '#1B6B44',
                }}
              />
              <span>Focused small-batch session with Lucknow school scholars</span>
            </div>
          </div>

          {/* Right: Editorial Typography (No card container) */}
          <div style={{ maxWidth: '580px' }}>
            {/* Small Eyebrow */}
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.78rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.18em',
                color: '#2563EB',
                display: 'block',
                marginBottom: '0.85rem',
              }}
            >
              CITY MONTESSORI SCHOOL SPECIALIZATION
            </span>

            {/* Large Serif Heading */}
            <h2
              style={{
                fontFamily: "'Newsreader', Georgia, serif",
                fontSize: 'clamp(2.5rem, 4.8vw, 3.8rem)',
                fontWeight: 600,
                color: '#10172B',
                lineHeight: 1.1,
                letterSpacing: '-0.025em',
                margin: '0 0 1.25rem 0',
              }}
            >
              Specialized Support for CMS Students
            </h2>

            {/* Concise Explanatory Paragraph */}
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(1.05rem, 1.5vw, 1.2rem)',
                color: '#555149',
                lineHeight: 1.6,
                margin: '0 0 1.75rem 0',
              }}
            >
              City Montessori School students face an intensive academic calendar with rigorous comparative exams and comprehensive board expectations. Fundemics offers specialized batches synchronized with CMS term schedules, chapter pacing, and analytical question standards.
            </p>

            {/* Concise Verified Highlights */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.9rem',
                marginBottom: '2.25rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <CheckCircle2 size={18} color="#1B6B44" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span style={{ fontSize: '0.92rem', color: '#10172B', lineHeight: 1.45, fontWeight: 500 }}>
                  <strong>Curriculum Pacing Aligned with CMS:</strong> Chapter coverage synchronized with school term exams and unit assessments.
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <CheckCircle2 size={18} color="#1B6B44" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span style={{ fontSize: '0.92rem', color: '#10172B', lineHeight: 1.45, fontWeight: 500 }}>
                  <strong>Board & Comparative Paper Drills:</strong> Step-by-step answer formatting and timed numerical drills for ICSE & ISC standards.
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <CheckCircle2 size={18} color="#1B6B44" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span style={{ fontSize: '0.92rem', color: '#10172B', lineHeight: 1.45, fontWeight: 500 }}>
                  <strong>Dedicated Doubt-Clearing Counters:</strong> Direct access to senior mentors outside batch hours for individualized attention.
                </span>
              </div>
            </div>

            {/* Small Editorial CTA Link */}
            <Link
              href="/queries"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: '#10172B',
                fontFamily: 'var(--font-display)',
                fontSize: '0.95rem',
                fontWeight: 700,
                letterSpacing: '0.02em',
                textDecoration: 'none',
                borderBottom: '2px solid #1B6B44',
                paddingBottom: '4px',
                transition: 'all 200ms ease',
              }}
              className="cms-link-cta"
            >
              <span>Inquire About CMS Batches & Timings</span>
              <ArrowRight size={16} color="#1B6B44" />
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .cms-link-cta:hover {
          color: #1B6B44 !important;
          border-bottom-color: #10172B !important;
          transform: translateX(3px);
        }
      `}</style>
    </section>
  );
};
