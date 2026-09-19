import React from 'react';
import { branchesData } from '../../data/branches';
import { MapPin, Clock, ArrowRight, Bus } from 'lucide-react';
import { Link } from '../../context/RouterContext';

export const LocationsSection: React.FC = () => {
  return (
    <section
      className="section section-ivory"
      style={{ borderBottom: '1px solid var(--color-border-light)' }}
    >
      <div className="container">
        {/* Section Heading */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto clamp(2.5rem, 5vw, 4rem) auto' }}>
          <span className="badge badge-navy" style={{ marginBottom: '1rem' }}>
            OUR LOCATIONS
          </span>
          <h2
            className="headline-editorial"
            style={{
              fontSize: 'var(--text-h2)',
              color: 'var(--color-primary-navy)',
              lineHeight: 1.2,
              marginBottom: '1rem',
            }}
          >
            Accessible Learning Centers Across Lucknow.
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>
            With centers in Triveni Nagar, Faizullaganj, and Aliganj, plus dedicated morning transport routes, quality coaching is always within safe, easy reach for your family.
          </p>
        </div>

        {/* Split Layout: Image on Left, Location Details on Right */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            alignItems: 'stretch',
            gap: 'clamp(2.5rem, 6vw, 4.5rem)',
          }}
        >
          {/* Left: Exterior & Center Photography */}
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
            <div className="image-frame" style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', height: '100%', minHeight: '380px' }}>
              <img
                src="/assets/campus_center.jpg"
                alt="Fundemics Tutorials main center entrance with students in Lucknow"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>

            {/* Floating Transport & Campus Badge */}
            <div
              style={{
                position: 'absolute',
                bottom: '-20px',
                left: '20px',
                right: '20px',
                backgroundColor: 'rgba(255, 255, 255, 0.96)',
                backdropFilter: 'blur(10px)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.25rem 1.5rem',
                boxShadow: 'var(--shadow-lg)',
                border: '1px solid var(--color-border-subtle)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary-navy)', fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                <Bus size={16} color="var(--color-accent-green)" /> Safe Student Conveyance
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', fontWeight: 600, lineHeight: 1.4 }}>
                Dedicated morning van routes covering Sitapur Road, Keshav Nagar, Aliganj, and neighboring sectors.
              </p>
            </div>
          </div>

          {/* Right: The 3 Campus Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {branchesData.map((branch) => (
              <div
                key={branch.id}
                style={{
                  padding: '1.5rem',
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-lg)',
                  border: branch.isPrimary
                    ? '1.5px solid var(--color-primary-navy)'
                    : '1px solid var(--color-border-light)',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-primary-navy)' }}>
                    {branch.name}
                  </h3>
                  {branch.isPrimary && (
                    <span className="badge badge-green" style={{ fontSize: '0.7rem' }}>
                      Main Campus
                    </span>
                  )}
                </div>

                <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start' }}>
                  <MapPin size={16} color="var(--color-accent-green)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <div style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                    <div>{branch.addressLine1}, {branch.addressLine2}, Lucknow - {branch.pincode}</div>
                    {branch.landmark && (
                      <div style={{ fontSize: '0.78rem', color: 'var(--color-accent-green-dark)', fontWeight: 600, marginTop: '2px' }}>
                        Landmark: {branch.landmark}
                      </div>
                    )}
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', borderTop: '1px solid var(--color-border-subtle)', paddingTop: '0.75rem', marginTop: '0.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>
                    <Clock size={14} />
                    <span>{branch.hours}</span>
                  </div>

                  <Link
                    href="/queries"
                    style={{
                      fontSize: '0.825rem',
                      fontWeight: 700,
                      color: 'var(--color-primary-navy)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                    }}
                  >
                    <span>Inquire About Center</span>
                    <ArrowRight size={13} color="var(--color-accent-green)" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
