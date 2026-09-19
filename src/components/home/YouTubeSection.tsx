import React from 'react';
import { siteConfig } from '../../data/siteConfig';
import { YoutubeIcon } from '../common/SocialIcons';
import { QrCode, PlayCircle, Clock, BookOpen, ExternalLink } from 'lucide-react';

export const YouTubeSection: React.FC = () => {
  return (
    <section
      className="section section-white"
      style={{ borderBottom: '1px solid var(--color-border-light)' }}
    >
      <div className="container">
        <div
          style={{
            backgroundColor: 'var(--color-soft-blue)',
            border: '1px solid var(--color-soft-blue-border)',
            borderRadius: 'var(--radius-xl)',
            padding: 'clamp(2.5rem, 5vw, 4rem)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            alignItems: 'center',
            gap: 'clamp(2.5rem, 5vw, 4rem)',
          }}
        >
          {/* Left Text Block */}
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--color-soft-blue-border)',
                padding: '0.4rem 0.9rem',
                borderRadius: 'var(--radius-full)',
                marginBottom: '1.25rem',
              }}
            >
              <YoutubeIcon size={16} color="#DC2626" />
              <span style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--color-primary-navy)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                DIGITAL STUDY RESOURCES
              </span>
            </div>

            <h2
              className="headline-editorial"
              style={{
                fontSize: 'var(--text-h2)',
                color: 'var(--color-primary-navy)',
                lineHeight: 1.2,
                marginBottom: '1rem',
              }}
            >
              Study at Your Convenience.
            </h2>

            <p
              style={{
                fontSize: '1.05rem',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.65,
                marginBottom: '1.75rem',
              }}
            >
              As featured in the official Fundemics Tutorials brochure, our students receive access to recorded classroom reviews, problem walkthroughs, and key board derivations—empowering steady revision from home.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.925rem', color: 'var(--color-text-primary)' }}>
                <PlayCircle size={18} color="var(--color-accent-green)" style={{ flexShrink: 0 }} />
                <span>Concept revisions & numerical derivations recorded by faculty.</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.925rem', color: 'var(--color-text-primary)' }}>
                <Clock size={18} color="var(--color-accent-green)" style={{ flexShrink: 0 }} />
                <span>Self-paced learning matching your school revision schedule.</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.925rem', color: 'var(--color-text-primary)' }}>
                <BookOpen size={18} color="var(--color-accent-green)" style={{ flexShrink: 0 }} />
                <span>Step-by-step solutions for previous years' board questions.</span>
              </div>
            </div>

            <div>
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-navy btn-md"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <YoutubeIcon size={18} color="#FFFFFF" />
                <span>Subscribe on YouTube</span>
                <ExternalLink size={14} />
              </a>
              <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>
                (Official channel URL to be linked upon institute release)
              </span>
            </div>
          </div>

          {/* Right Visual: Authentic Brochure QR Card Frame */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-xl)',
                padding: '2.25rem 2rem',
                textAlign: 'center',
                maxWidth: '330px',
                width: '100%',
                boxShadow: 'var(--shadow-card)',
                border: '2px solid var(--color-soft-blue-border)',
              }}
            >
              <div
                style={{
                  backgroundColor: 'var(--color-primary-navy)',
                  color: '#FFFFFF',
                  padding: '0.45rem 1rem',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  marginBottom: '1.25rem',
                }}
              >
                SCAN QR CODE TO SUBSCRIBE
              </div>

              {/* QR Code Container */}
              <div
                style={{
                  width: '180px',
                  height: '180px',
                  margin: '0 auto 1.25rem auto',
                  border: '2px dashed var(--color-primary-navy)',
                  borderRadius: 'var(--radius-lg)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'var(--color-ivory)',
                  gap: '0.5rem',
                }}
              >
                <QrCode size={105} color="var(--color-primary-navy)" />
                <span style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>
                  [OFFICIAL BROCHURE QR]
                </span>
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: '1.05rem',
                  color: 'var(--color-primary-navy)',
                  letterSpacing: '0.02em',
                }}
              >
                STUDY AT YOUR CONVENIENCE!
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-accent-green)', fontWeight: 700, marginTop: '4px' }}>
                Fundemics Tutorials Digital Learning
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
