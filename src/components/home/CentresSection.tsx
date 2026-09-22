import React from 'react';
import { branchesData } from '../../data/branches';
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';

export const CentresSection: React.FC = () => {
  const mainCampus = branchesData.find((b) => b.isPrimary) || branchesData[0];
  const otherBranches = branchesData.filter((b) => !b.isPrimary);

  return (
    <section
      id="centres"
      style={{
        backgroundColor: 'var(--surface-ivory)',  /* Warm ivory — editorial / locations */
        paddingTop: 'clamp(5rem, 9vw, 8rem)',
        paddingBottom: 'clamp(5rem, 9vw, 8rem)',
        borderBottom: '1px solid var(--surface-ivory-border)',
        position: 'relative',
      }}
      aria-label="Our Centres in Lucknow"
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '780px', marginBottom: 'clamp(3rem, 6vw, 4.5rem)' }}>
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.78rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.18em',
              color: '#1B6B44',
              display: 'block',
              marginBottom: '0.85rem',
            }}
          >
            LUCKNOW CAMPUSES
          </span>

          <h2
            style={{
              fontFamily: "'Newsreader', Georgia, serif",
              fontSize: 'clamp(2.6rem, 5vw, 4.2rem)',
              fontWeight: 600,
              color: '#10172B',
              lineHeight: 1.08,
              letterSpacing: '-0.025em',
              margin: '0 0 1rem 0',
            }}
          >
            Our Centres
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1.05rem, 1.5vw, 1.2rem)',
              color: '#555149',
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            Accessible, disciplined academic environments across Lucknow. Walk in during office hours or connect directly with our admissions counselling desk.
          </p>
        </div>

        {/* Main Campus Feature + Branch Directory Split */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(2.5rem, 5vw, 4.5rem)',
            alignItems: 'stretch',
          }}
        >
          {/* Main Campus Feature Box */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              overflow: 'hidden',
              border: '1px solid #E2DCD2',
              boxShadow: '0 12px 36px rgba(16, 23, 43, 0.06)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            {/* Campus Architectural Header Treatment */}
            <div
              style={{
                width: '100%',
                height: '200px',
                position: 'relative',
                backgroundColor: '#0C1424',
                background: 'radial-gradient(ellipse at 50% 30%, #1E284A 0%, #0C1424 85%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem',
                textAlign: 'center',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              {/* Subtle Grid Pattern */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `
                    linear-gradient(to right, rgba(255, 255, 255, 0.025) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(255, 255, 255, 0.025) 1px, transparent 1px)
                  `,
                  backgroundSize: '24px 24px',
                  opacity: 0.7,
                  pointerEvents: 'none',
                }}
                aria-hidden="true"
              />

              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(43, 176, 111, 0.12)',
                  border: '1.5px solid rgba(43, 176, 111, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#2BB06F',
                  marginBottom: '0.85rem',
                  position: 'relative',
                  zIndex: 1,
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25)',
                }}
              >
                <MapPin size={26} strokeWidth={1.8} />
              </div>

              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: '#2BB06F',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                TRIVENI NAGAR · MAIN CAMPUS
              </span>

              <div
                style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: '14px',
                  backgroundColor: '#10172B',
                  color: '#FFFFFF',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  padding: '3px 9px',
                  borderRadius: '4px',
                  textTransform: 'uppercase',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                Flagship Centre
              </div>
            </div>

            {/* Campus Details */}
            <div style={{ padding: 'clamp(1.5rem, 3vw, 2.25rem)', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h3
                  style={{
                    fontFamily: "'Newsreader', Georgia, serif",
                    fontSize: '1.75rem',
                    fontWeight: 600,
                    color: '#10172B',
                    margin: '0 0 0.85rem 0',
                    lineHeight: 1.2,
                  }}
                >
                  {mainCampus.name}
                </h3>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', marginBottom: '0.75rem' }}>
                  <MapPin size={18} color="#1B6B44" style={{ marginTop: '3px', flexShrink: 0 }} />
                  <div style={{ fontSize: '0.94rem', color: '#10172B', lineHeight: 1.5 }}>
                    <div>{mainCampus.addressLine1}, {mainCampus.addressLine2}</div>
                    <div style={{ color: '#706A60', fontSize: '0.85rem', marginTop: '2px' }}>
                      Landmark: <strong style={{ color: '#10172B' }}>{mainCampus.landmark}</strong>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.75rem' }}>
                  <Phone size={16} color="#1B6B44" style={{ flexShrink: 0 }} />
                  <a
                    href="tel:7617018888"
                    style={{ fontSize: '0.94rem', color: '#10172B', fontWeight: 600, textDecoration: 'none' }}
                  >
                    {mainCampus.phone}
                  </a>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <Clock size={16} color="#706A60" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '0.84rem', color: '#706A60' }}>
                    {mainCampus.hours}
                  </span>
                </div>
              </div>

              {/* Get Directions Link */}
              <div style={{ marginTop: '1.75rem', paddingTop: '1.25rem', borderTop: '1px solid #EBE5DA' }}>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${mainCampus.mapEmbedQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    color: '#10172B',
                    fontWeight: 700,
                    fontSize: '0.88rem',
                    textDecoration: 'none',
                    borderBottom: '1px solid #10172B',
                    paddingBottom: '2px',
                  }}
                  className="centre-directions-link"
                >
                  <span>View on Google Maps</span>
                  <ExternalLink size={14} color="#1B6B44" />
                </a>
              </div>
            </div>
          </div>

          {/* Secondary Branches List */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '1.5rem' }}>
            {otherBranches.map((branch) => (
              <div
                key={branch.id}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  padding: '1.5rem 1.75rem',
                  border: '1px solid #E2DCD2',
                  boxShadow: '0 4px 16px rgba(16, 23, 43, 0.04)',
                }}
              >
                <div
                  style={{
                    display: 'inline-block',
                    backgroundColor: 'var(--surface-ivory-muted)',
                    color: '#706A60',
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    padding: '2px 7px',
                    borderRadius: '4px',
                    textTransform: 'uppercase',
                    marginBottom: '0.6rem',
                  }}
                >
                  Branch Centre
                </div>

                <h3
                  style={{
                    fontFamily: "'Newsreader', Georgia, serif",
                    fontSize: '1.45rem',
                    fontWeight: 600,
                    color: '#10172B',
                    margin: '0 0 0.65rem 0',
                  }}
                >
                  {branch.name}
                </h3>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem', marginBottom: '0.55rem' }}>
                  <MapPin size={16} color="#1B6B44" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <div style={{ fontSize: '0.88rem', color: '#555149', lineHeight: 1.45 }}>
                    <div>{branch.addressLine1}, {branch.addressLine2}</div>
                    {branch.landmark && (
                      <div style={{ color: '#706A60', fontSize: '0.8rem', marginTop: '1px' }}>
                        Landmark: {branch.landmark}
                      </div>
                    )}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', marginBottom: '0.75rem' }}>
                  <Phone size={14} color="#1B6B44" style={{ flexShrink: 0 }} />
                  <a
                    href="tel:7617018888"
                    style={{ fontSize: '0.88rem', color: '#10172B', fontWeight: 600, textDecoration: 'none' }}
                  >
                    {branch.phone}
                  </a>
                </div>

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${branch.mapEmbedQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    color: '#10172B',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    textDecoration: 'none',
                    borderBottom: '1px solid #1B6B44',
                    paddingBottom: '2px',
                  }}
                  className="centre-directions-link"
                >
                  <span>Directions</span>
                  <ExternalLink size={12} color="#1B6B44" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .centre-directions-link:hover {
          color: #1B6B44 !important;
        }
      `}</style>
    </section>
  );
};
