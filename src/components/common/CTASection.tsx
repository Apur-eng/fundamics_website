import React from 'react';
import { Button } from './Button';
import { PhoneCall, Send, HelpCircle, CheckCircle2, MapPin, Bus } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  showPhoneCall?: boolean;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title = 'Give Your Child the Fundemics Advantage.',
  subtitle = 'Comprehensive coaching for Classes I to XII across ICSE, ISC, and CBSE boards in Lucknow. Experienced IIT & engineering faculty, personalized batch sizes, and proven board success.',
  primaryButtonText = 'Send a Query',
  primaryButtonHref = '/queries',
  secondaryButtonText,
  secondaryButtonHref,
  showPhoneCall = true,
}) => {
  return (
    <section
      style={{
        backgroundColor: 'var(--color-primary-navy)',
        color: '#FFFFFF',
        paddingTop: 'clamp(5rem, 8vw, 7rem)',
        paddingBottom: 'clamp(5rem, 8vw, 7rem)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        {/* Top Badge */}
        <div style={{ display: 'inline-flex', marginBottom: '1.25rem' }}>
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.12)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              padding: '0.45rem 1.25rem',
              borderRadius: 'var(--radius-full)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.825rem',
              fontWeight: 700,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: '#FFFFFF',
            }}
          >
            <HelpCircle size={15} color="var(--color-hero-accent)" />
            <span>Admissions Open 2026–2027 • Classes I–XII</span>
          </div>
        </div>

        {/* Large Editorial Headline */}
        <h2
          className="headline-editorial"
          style={{
            fontSize: 'var(--text-display)',
            fontWeight: 800,
            color: '#FFFFFF',
            maxWidth: '900px',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: 1.15,
            marginBottom: '1.25rem',
          }}
        >
          {title}
        </h2>

        {/* Supporting Paragraph */}
        <p
          style={{
            fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
            color: 'rgba(255, 255, 255, 0.88)',
            maxWidth: '740px',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: 1.65,
            marginBottom: '2.5rem',
          }}
        >
          {subtitle}
        </p>

        {/* Action Buttons */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.25rem',
            marginBottom: '3rem',
          }}
        >
          <Button
            variant="hero-primary"
            size="lg"
            href={primaryButtonHref}
            icon={<Send size={18} />}
          >
            {primaryButtonText}
          </Button>

          {secondaryButtonText && secondaryButtonHref && (
            <Button
              variant="outline-white"
              size="lg"
              href={secondaryButtonHref}
            >
              {secondaryButtonText}
            </Button>
          )}

          {showPhoneCall && (
            <a
              href={siteConfig.phones.primary}
              className="btn btn-outline-white btn-lg"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <PhoneCall size={18} color="var(--color-hero-accent)" />
              <span>Call: {siteConfig.phones.displayPrimary}</span>
            </a>
          )}
        </div>

        {/* Bottom Credibility Strip */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.15)',
            fontSize: '0.875rem',
            color: 'rgba(255, 255, 255, 0.75)',
          }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            <CheckCircle2 size={16} color="var(--color-hero-accent)" />
            <span>Morning & Evening Batches</span>
          </div>
          <span style={{ opacity: 0.3 }}>•</span>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            <Bus size={16} color="var(--color-hero-accent)" />
            <span>Safe Transport Facility</span>
          </div>
          <span style={{ opacity: 0.3 }}>•</span>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            <MapPin size={16} color="var(--color-hero-accent)" />
            <span>3 Campuses: Triveni Nagar • Faizullaganj • Aliganj</span>
          </div>
        </div>
      </div>
    </section>
  );
};
