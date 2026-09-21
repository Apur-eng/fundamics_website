import React from 'react';
import { Logo } from '../common/Logo';
import { footerNavItems } from '../../data/navigation';
import { siteConfig } from '../../data/siteConfig';
import { Link } from '../../context/RouterContext';
import { YoutubeIcon, FacebookIcon, InstagramIcon } from '../common/SocialIcons';
import { Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer
      style={{
        backgroundColor: '#0D1424',
        color: '#FFFFFF',
        paddingTop: 'clamp(3.5rem, 6vw, 4.5rem)',
        paddingBottom: '2rem',
        borderTop: '2px solid rgba(27, 107, 68, 0.4)',
      }}
      aria-label="Site Footer"
    >
      <div className="container">
        {/* Compact, Minimal 4-Column Editorial Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 'clamp(2rem, 4vw, 3rem)',
            marginBottom: '3rem',
          }}
        >
          {/* Col 1: Institutional Identity */}
          <div>
            <Logo variant="light" size="md" />
            <p
              style={{
                fontFamily: "'Newsreader', Georgia, serif",
                fontStyle: 'italic',
                fontSize: '1.05rem',
                color: '#E6AA32',
                marginTop: '0.85rem',
                marginBottom: '0.75rem',
              }}
            >
              "Educating for a better tomorrow..."
            </p>
            <p
              style={{
                fontSize: '0.82rem',
                color: 'rgba(255, 255, 255, 0.65)',
                lineHeight: 1.6,
                marginBottom: '1.25rem',
                maxWidth: '280px',
              }}
            >
              Concept-driven academic mentorship for Classes I through XII across ICSE, ISC, and CBSE boards in Lucknow since {siteConfig.sinceYear}.
            </p>

            {/* Social Links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Fundemics YouTube"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  color: '#FFFFFF',
                  transition: 'background-color 200ms ease',
                }}
              >
                <YoutubeIcon size={16} color="#FF4D4D" />
              </a>
              {siteConfig.social.facebook && (
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Fundemics Facebook"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    color: '#FFFFFF',
                  }}
                >
                  <FacebookIcon size={16} color="#1877F2" />
                </a>
              )}
              {siteConfig.social.instagram && (
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Fundemics Instagram"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    color: '#FFFFFF',
                  }}
                >
                  <InstagramIcon size={16} color="#E4405F" />
                </a>
              )}
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <div
              style={{
                fontSize: '0.78rem',
                color: '#FFFFFF',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                marginBottom: '1rem',
              }}
            >
              Navigation
            </div>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', padding: 0, margin: 0, listStyle: 'none' }}>
              {footerNavItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    style={{
                      fontSize: '0.84rem',
                      color: 'rgba(255, 255, 255, 0.72)',
                      textDecoration: 'none',
                      transition: 'color 200ms ease',
                    }}
                    className="footer-nav-link"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Academic Stages / Courses */}
          <div>
            <div
              style={{
                fontSize: '0.78rem',
                color: '#FFFFFF',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                marginBottom: '1rem',
              }}
            >
              Courses
            </div>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', padding: 0, margin: 0, listStyle: 'none', fontSize: '0.84rem', color: 'rgba(255, 255, 255, 0.72)' }}>
              <li>Primary (Classes I–V)</li>
              <li>Middle School (Classes VI–VIII)</li>
              <li>Secondary (Classes IX–X)</li>
              <li>Senior Secondary (Classes XI–XII)</li>
              <li>CMS Comparative Specialization</li>
            </ul>
          </div>

          {/* Col 4: Location & Direct Contact */}
          <div>
            <div
              style={{
                fontSize: '0.78rem',
                color: '#FFFFFF',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                marginBottom: '1rem',
              }}
            >
              Main Campus
            </div>
            <div style={{ fontSize: '0.84rem', color: 'rgba(255, 255, 255, 0.72)', lineHeight: 1.5, marginBottom: '0.85rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem', marginBottom: '0.35rem' }}>
                <MapPin size={15} color="#1B6B44" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span>Adarsh Puram, Triveni Nagar IIIrd, Sitapur Road, Lucknow</span>
              </div>
              <div style={{ fontSize: '0.78rem', color: 'rgba(255, 255, 255, 0.5)', paddingLeft: '1.4rem' }}>
                Opp. Lodheswar Lawn
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.86rem', color: '#FFFFFF', fontWeight: 600 }}>
              <Phone size={14} color="#1B6B44" />
              <a href="tel:7617018888" style={{ color: '#FFFFFF', textDecoration: 'none' }}>
                7617018888
              </a>
              <span>/</span>
              <a href="tel:7800001288" style={{ color: '#FFFFFF', textDecoration: 'none' }}>
                7800001288
              </a>
            </div>
          </div>
        </div>

        {/* Minimal Bottom Copyright Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '1.25rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.75rem',
            fontSize: '0.76rem',
            color: 'rgba(255, 255, 255, 0.5)',
          }}
        >
          <div>
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
          </div>
          <div>
            Educating for a better tomorrow · Lucknow, Uttar Pradesh
          </div>
        </div>
      </div>

      <style>{`
        .footer-nav-link:hover {
          color: #E6AA32 !important;
        }
      `}</style>
    </footer>
  );
};
