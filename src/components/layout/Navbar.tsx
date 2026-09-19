import React, { useState, useEffect } from 'react';
import { Logo } from '../common/Logo';
import { Button } from '../common/Button';
import { mainNavItems } from '../../data/navigation';
import { Link, useRouter } from '../../context/RouterContext';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export const Navbar: React.FC = () => {
  const { currentPath } = useRouter();
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

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

          {/* Mobile Menu Hamburger Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }} className="mobile-toggle">
            <Button
              variant="green"
              size="sm"
              href="/queries"
              style={{ padding: '0.35rem 0.8rem', fontSize: '0.8rem' }}
            >
              Enquire
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.45rem',
                color: '#FFFFFF',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
              }}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
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

          <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
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
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.9rem' }}>
                <a href={siteConfig.phones.primary} style={{ color: '#FFFFFF', fontWeight: 700 }}>
                  📞 {siteConfig.phones.displayPrimary}
                </a>
                <a href={siteConfig.phones.secondary} style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  📞 {siteConfig.phones.displaySecondary}
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
