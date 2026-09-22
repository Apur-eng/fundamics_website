import React, { useState, useEffect } from 'react';
import { Logo } from '../common/Logo';
import { Button } from '../common/Button';
import { mainNavItems } from '../../data/navigation';
import { Link, useRouter } from '../../context/RouterContext';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
import { useLenis } from '../../motion/lenis';

export const Navbar: React.FC = () => {
  const { currentPath } = useRouter();
  const { lenis } = useLenis();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [currentPath]);

  // Lock body scroll and pause Lenis when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      lenis?.stop();
    } else {
      document.body.style.overflow = '';
      lenis?.start();
    }
    return () => {
      document.body.style.overflow = '';
      lenis?.start();
    };
  }, [mobileMenuOpen, lenis]);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: isScrolled
          ? 'rgba(16, 23, 43, 0.92)'
          : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
        borderBottom: isScrolled
          ? '1px solid rgba(255, 255, 255, 0.12)'
          : '1px solid rgba(255, 255, 255, 0.08)',
        boxShadow: isScrolled ? '0 10px 30px rgba(0, 0, 0, 0.25)' : 'none',
        transition: 'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1), backdrop-filter 300ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1), border-color 300ms cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <div className="container" style={{ padding: '0.85rem var(--container-gutter)' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Brand Logo - Crisp White & Green on Dark/Hero */}
          <Link href="/" aria-label="Fundemics Tutorials Home">
            <Logo variant="light" size="md" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '2rem',
            }}
            className="desktop-nav"
          >
            {mainNavItems.map((item) => {
              const isActive = currentPath === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.9375rem',
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? '#FFFFFF' : 'rgba(255, 255, 255, 0.85)',
                    position: 'relative',
                    padding: '0.4rem 0',
                    transition: 'color var(--transition-fast)',
                    letterSpacing: '0.01em',
                  }}
                >
                  {item.label}
                  {isActive && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '2.5px',
                        backgroundColor: 'var(--color-accent-green)',
                        borderRadius: '2px',
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '0.85rem',
            }}
            className="desktop-actions"
          >
            <a
              href={siteConfig.phones.primary}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.85rem',
                fontWeight: 700,
                color: '#FFFFFF',
                padding: '0.45rem 1rem',
                borderRadius: 'var(--radius-full)',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(8px)',
                transition: 'all var(--transition-fast)',
                letterSpacing: '0.04em',
              }}
            >
              <Phone size={13} color="var(--color-hero-accent)" />
              <span>CALL US NOW</span>
            </a>

            <Button
              variant="green"
              size="sm"
              href="/queries"
              icon={<ArrowRight size={14} />}
            >
              Enquire Now
            </Button>
          </div>

          {/* Mobile Menu Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }} className="mobile-toggle">
            {/* Quick Call Icon Button on Mobile */}
            <a
              href={siteConfig.phones.primary}
              aria-label={`Call Fundemics Admissions at ${siteConfig.phones.displayPrimary}`}
              className="mobile-call-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '34px',
                height: '34px',
                borderRadius: 'var(--radius-full)',
                border: '1px solid rgba(255, 186, 8, 0.45)',
                backgroundColor: 'rgba(255, 186, 8, 0.12)',
                color: '#FFBA08',
                textDecoration: 'none',
                flexShrink: 0,
                transition: 'all 200ms ease',
              }}
            >
              <Phone size={15} color="#FFBA08" />
            </a>

            <Button
              variant="green"
              size="sm"
              href="/queries"
              className="mobile-enquire-btn"
              style={{ padding: '0.35rem 0.75rem', fontSize: '0.8rem', flexShrink: 0 }}
            >
              Enquire
            </Button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
              className="mobile-menu-toggle-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.42rem',
                color: '#FFFFFF',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                flexShrink: 0,
              }}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '70px',
            left: 0,
            right: 0,
            bottom: 0,
            height: 'calc(100vh - 70px)',
            backgroundColor: 'rgba(17, 21, 56, 0.98)',
            backdropFilter: 'blur(20px)',
            zIndex: 999,
            overflowY: 'auto',
            padding: '1.75rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            color: '#FFFFFF',
          }}
          className="animate-fade-in"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <p
              style={{
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'rgba(255, 255, 255, 0.5)',
                fontWeight: 700,
                marginBottom: '0.5rem',
              }}
            >
              Navigation
            </p>
            {mainNavItems.map((item) => {
              const isActive = currentPath === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.2rem',
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? 'var(--color-hero-accent)' : '#FFFFFF',
                    padding: '0.9rem 0',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span>{item.label}</span>
                  <ArrowRight size={16} opacity={isActive ? 1 : 0.4} />
                </Link>
              );
            })}
          </div>

          <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {/* Primary Call Action inside Mobile Menu */}
            <a
              href={siteConfig.phones.primary}
              style={{
                width: '100%',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.55rem',
                padding: '0.85rem 1.25rem',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'rgba(255, 186, 8, 0.14)',
                border: '1.5px solid #FFBA08',
                color: '#FFBA08',
                fontWeight: 800,
                fontSize: '0.98rem',
                letterSpacing: '0.04em',
                textDecoration: 'none',
              }}
            >
              <Phone size={18} color="#FFBA08" />
              <span>CALL US NOW ({siteConfig.phones.displayPrimary})</span>
            </a>

            <Button
              variant="green"
              size="lg"
              href="/queries"
              onClick={() => setMobileMenuOpen(false)}
              style={{ width: '100%' }}
              icon={<ArrowRight size={18} />}
            >
              Enquire Now
            </Button>

            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                padding: '1.25rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
              }}
            >
              <p style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-hero-accent)', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Direct Admissions Contact
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.9rem' }}>
                <a href={siteConfig.phones.primary} style={{ color: '#FFFFFF', fontWeight: 700, textDecoration: 'none' }}>
                  📞 {siteConfig.phones.displayPrimary} (Desk)
                </a>
                <a href={siteConfig.phones.secondary} style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none' }}>
                  📞 {siteConfig.phones.displaySecondary} (Direct)
                </a>
                <a
                  href={siteConfig.whatsapp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#58A846', fontWeight: 700, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.35rem' }}
                >
                  <span>💬 WhatsApp: {siteConfig.whatsapp.display}</span>
                </a>
                <span style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.6)', marginTop: '0.35rem' }}>
                  📍 Triveni Nagar • Faizullaganj • Aliganj (Lucknow)
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Media Query CSS for Desktop vs Mobile Header */}
      <style>{`
        @media (max-width: 380px) {
          .mobile-toggle {
            gap: 0.35rem !important;
          }
          .mobile-call-btn {
            width: 32px !important;
            height: 32px !important;
          }
          .mobile-enquire-btn {
            padding: 0.3rem 0.55rem !important;
            font-size: 0.75rem !important;
          }
        }
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-actions {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};
