import React, { useState } from 'react';
import { siteConfig, getWhatsAppUrl } from '../../data/siteConfig';

/**
 * Premium, unobtrusive floating WhatsApp button.
 * Uses Fundemics green with safe-area compliance and accessible labelling.
 */
export const WhatsAppFloatingButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <aside
      aria-label="Contact via WhatsApp"
      style={{
        position: 'fixed',
        bottom: 'calc(1.35rem + env(safe-area-inset-bottom, 0px))',
        right: 'calc(1.35rem + env(safe-area-inset-right, 0px))',
        zIndex: 990,
        display: 'flex',
        alignItems: 'center',
        gap: '0.65rem',
        pointerEvents: 'auto',
      }}
    >
      {/* Subtle Tooltip Label on Hover (Desktop) */}
      <span
        className="whatsapp-tooltip"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '0.78rem',
          fontWeight: 700,
          letterSpacing: '0.04em',
          backgroundColor: '#10172B',
          color: '#FFFFFF',
          padding: '0.35rem 0.75rem',
          borderRadius: '999px',
          boxShadow: '0 4px 14px rgba(0, 0, 0, 0.25)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          opacity: isHovered ? 1 : 0,
          transform: isHovered ? 'translateX(0)' : 'translateX(6px)',
          transition: 'opacity 200ms ease, transform 200ms ease',
        }}
      >
        Chat with Admissions
      </span>

      {/* Action Button */}
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat with Fundemics Tutorials on WhatsApp at ${siteConfig.whatsapp.display}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="whatsapp-float-btn"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          backgroundColor: '#1B6B44',
          color: '#FFFFFF',
          boxShadow: isHovered
            ? '0 10px 25px rgba(27, 107, 68, 0.45), 0 0 0 3px rgba(230, 170, 50, 0.35)'
            : '0 6px 18px rgba(16, 23, 43, 0.25), 0 2px 8px rgba(27, 107, 68, 0.35)',
          border: '1.5px solid rgba(255, 255, 255, 0.25)',
          textDecoration: 'none',
          cursor: 'pointer',
          transform: isHovered ? 'scale(1.08)' : 'scale(1)',
          transition: 'transform 220ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 220ms ease, background-color 220ms ease',
          WebkitTapHighlightColor: 'transparent',
          position: 'relative',
        }}
      >
        {/* Crisp WhatsApp SVG Icon */}
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.477 2 12C2 13.82 2.487 15.53 3.336 17.006L2.1 21.5L6.726 20.292C8.16 21.366 9.98 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM8.6 7.6C8.42 7.15 8.24 7.14 8.01 7.13C7.83 7.12 7.62 7.12 7.42 7.12C7.21 7.12 6.87 7.2 6.58 7.51C6.3 7.82 5.5 8.57 5.5 10.1C5.5 11.63 6.62 13.1 6.77 13.31C6.93 13.51 8.94 16.76 12.11 18C14.49 18.93 15.22 18.66 15.75 18.6C16.48 18.52 17.7 17.8 17.96 17.06C18.22 16.32 18.22 15.68 18.14 15.55C18.06 15.42 17.85 15.35 17.55 15.2C17.24 15.05 15.74 14.31 15.46 14.21C15.18 14.11 14.98 14.06 14.77 14.36C14.57 14.67 13.98 15.36 13.8 15.57C13.62 15.77 13.44 15.8 13.14 15.65C12.83 15.5 11.85 15.18 10.69 14.15C9.79 13.34 9.18 12.35 9.03 12.04C8.88 11.73 9.01 11.57 9.17 11.41C9.31 11.27 9.48 11.05 9.63 10.87C9.78 10.69 9.84 10.56 9.94 10.36C10.04 10.16 9.99 9.98 9.91 9.83C9.84 9.68 9.25 8.16 8.99 7.56L8.6 7.6Z"
            fill="#FFFFFF"
          />
        </svg>

        {/* Small gold indicator pip for visual harmony */}
        <span
          style={{
            position: 'absolute',
            top: '2px',
            right: '2px',
            width: '11px',
            height: '11px',
            borderRadius: '50%',
            backgroundColor: '#FFBA08',
            border: '2px solid #1B6B44',
          }}
          aria-hidden="true"
        />
      </a>

      {/* Responsive adjustments */}
      <style>{`
        @media (max-width: 640px) {
          .whatsapp-tooltip {
            display: none !important;
          }
          .whatsapp-float-btn {
            width: 46px !important;
            height: 46px !important;
          }
        }
      `}</style>
    </aside>
  );
};
