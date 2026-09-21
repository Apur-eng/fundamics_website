import React, { useState, useEffect } from 'react';
import { Award, ShieldCheck, Eye, ExternalLink, X, FileText, CheckCircle2 } from 'lucide-react';

interface CertificateItem {
  id: string;
  title: string;
  category: string;
  authority: string;
  image: string;
  pdf: string;
  highlights: string[];
}

const certificates: CertificateItem[] = [
  {
    id: 'iso-9001',
    title: 'ISO 9001:2015',
    category: 'Quality Management Systems',
    authority: 'ISO India Assessment Bureau (Member of IQSB UK)',
    image: '/assets/fundamics_iso_page_1.png',
    pdf: '/assets/fundamics_iso.pdf',
    highlights: ['Certified for Quality Coaching & Education', 'Certified: 07 Dec 2023 – 06 Dec 2026'],
  },
  {
    id: 'incorporation',
    title: 'Certificate of Incorporation',
    category: 'Legal Registration & Corporate Entity',
    authority: 'Ministry of Corporate Affairs, Government of India',
    image: '/assets/fundamics_certification_page_1.png',
    pdf: '/assets/fundamics_certification.pdf',
    highlights: ['Registered LLP Entity (AAQ-5455)', 'Incorporated under LLP Act, 2008'],
  },
];

export const CertificationsSection: React.FC = () => {
  const [activeModal, setActiveModal] = useState<CertificateItem | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModal(null);
      }
    };
    if (activeModal) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModal]);

  return (
    <section
      id="certifications"
      style={{
        backgroundColor: '#FBF9F5',
        paddingTop: 'clamp(4.5rem, 8vw, 7rem)',
        paddingBottom: 'clamp(4.5rem, 8vw, 7rem)',
        borderTop: '1px solid #EAE5DC',
        borderBottom: '1px solid #EAE5DC',
        position: 'relative',
      }}
      aria-label="Certifications & Registration"
    >
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.25rem' }}>
        {/* Section Header */}
        <div style={{ maxWidth: '760px', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
            <ShieldCheck size={18} color="#1B6B44" />
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.78rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.18em',
                color: '#1B6B44',
              }}
            >
              OFFICIAL ACCREDITATION & REGISTRATION
            </span>
          </div>

          <h2
            style={{
              fontFamily: "'Newsreader', Georgia, serif",
              fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
              fontWeight: 600,
              color: '#10172B',
              lineHeight: 1.1,
              letterSpacing: '-0.025em',
              margin: '0 0 1rem 0',
            }}
          >
            Certifications & Registration
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1rem, 1.4vw, 1.15rem)',
              color: '#555149',
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            Official accreditations and legal registration documents affirming our quality management standards and corporate governance.
          </p>
        </div>

        {/* Certificates Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(2rem, 4vw, 3rem)',
            alignItems: 'stretch',
          }}
        >
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="certificate-card"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                border: '1px solid #E5E0D8',
                boxShadow: '0 10px 30px rgba(16, 23, 43, 0.05)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
              }}
            >
              {/* Document Preview Frame */}
              <div
                onClick={() => setActiveModal(cert)}
                style={{
                  position: 'relative',
                  backgroundColor: '#F3EFEA',
                  padding: '1.5rem 1.5rem 0.75rem 1.5rem',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  overflow: 'hidden',
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setActiveModal(cert)}
                aria-label={`Enlarge ${cert.title}`}
              >
                {/* Visual Sheet with paper shadow */}
                <div
                  style={{
                    width: '100%',
                    maxWidth: '380px',
                    aspectRatio: '1 / 1.35',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.12), 0 2px 6px rgba(0,0,0,0.06)',
                    border: '1px solid #E0DAD0',
                    position: 'relative',
                    transition: 'transform 0.35s ease',
                  }}
                  className="document-paper"
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top center',
                      display: 'block',
                    }}
                    loading="lazy"
                  />

                  {/* Hover Lightbox Overlay */}
                  <div
                    className="document-overlay"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundColor: 'rgba(16, 23, 43, 0.45)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      color: '#FFFFFF',
                      opacity: 0,
                      transition: 'opacity 0.25s ease',
                      backdropFilter: 'blur(2px)',
                    }}
                  >
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        backgroundColor: '#FFFFFF',
                        color: '#1B6B44',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                      }}
                    >
                      <Eye size={22} />
                    </div>
                    <span style={{ fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.02em' }}>
                      Click to Enlarge
                    </span>
                  </div>
                </div>
              </div>

              {/* Certificate Details */}
              <div
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1,
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                    <span
                      style={{
                        display: 'inline-block',
                        padding: '0.25rem 0.65rem',
                        borderRadius: '100px',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        backgroundColor: 'rgba(27, 107, 68, 0.1)',
                        color: '#1B6B44',
                      }}
                    >
                      Official Document
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.45rem',
                      fontWeight: 700,
                      color: '#10172B',
                      margin: '0 0 0.35rem 0',
                    }}
                  >
                    {cert.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.88rem',
                      color: '#605C55',
                      margin: '0 0 1rem 0',
                      lineHeight: 1.45,
                    }}
                  >
                    {cert.category} • {cert.authority}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', marginBottom: '1.5rem' }}>
                    {cert.highlights.map((point, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.84rem', color: '#35332F' }}>
                        <CheckCircle2 size={15} color="#1B6B44" style={{ flexShrink: 0 }} />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    paddingTop: '1rem',
                    borderTop: '1px solid #EFEAE2',
                  }}
                >
                  <button
                    onClick={() => setActiveModal(cert)}
                    type="button"
                    style={{
                      flex: 1,
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.45rem',
                      padding: '0.7rem 1rem',
                      borderRadius: '10px',
                      backgroundColor: '#1B6B44',
                      color: '#FFFFFF',
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'background-color 0.2s ease, transform 0.2s ease',
                    }}
                    className="view-cert-btn"
                  >
                    <Eye size={16} />
                    <span>View Certificate</span>
                  </button>

                  <a
                    href={cert.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.4rem',
                      padding: '0.7rem 1rem',
                      borderRadius: '10px',
                      backgroundColor: '#F3EFEA',
                      color: '#10172B',
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      textDecoration: 'none',
                      border: '1px solid #E2DCD2',
                      transition: 'background-color 0.2s ease',
                    }}
                    title="Open PDF original"
                  >
                    <FileText size={16} />
                    <span>PDF</span>
                    <ExternalLink size={13} style={{ opacity: 0.6 }} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Enlarged View Modal */}
      {activeModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(10, 15, 28, 0.85)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.25rem',
            animation: 'fadeIn 0.25s ease-out',
          }}
          onClick={() => setActiveModal(null)}
          role="dialog"
          aria-modal="true"
          aria-label={activeModal.title}
        >
          <div
            style={{
              position: 'relative',
              maxWidth: '850px',
              maxHeight: '92vh',
              width: '100%',
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 24px 60px rgba(0,0,0,0.4)',
              display: 'flex',
              flexDirection: 'column',
              animation: 'scaleUp 0.25s ease-out',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1rem 1.5rem',
                backgroundColor: '#10172B',
                color: '#FFFFFF',
                borderBottom: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Award size={20} color="#58A846" />
                <div>
                  <h4 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 700, color: '#FFFFFF' }}>
                    {activeModal.title}
                  </h4>
                  <p style={{ margin: 0, fontSize: '0.78rem', color: 'rgba(255,255,255,0.7)' }}>
                    {activeModal.authority}
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <a
                  href={activeModal.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.45rem 0.85rem',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(255,255,255,0.12)',
                    color: '#FFFFFF',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                    transition: 'background-color 0.2s',
                  }}
                >
                  <ExternalLink size={14} />
                  <span>Open PDF</span>
                </a>

                <button
                  onClick={() => setActiveModal(null)}
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255,255,255,0.15)',
                    border: 'none',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s',
                  }}
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Document Preview Image Scrollable Area */}
            <div
              style={{
                flex: 1,
                overflowY: 'auto',
                backgroundColor: '#2A2F3D',
                padding: '1.5rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img
                src={activeModal.image}
                alt={activeModal.title}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  maxHeight: '75vh',
                  objectFit: 'contain',
                  borderRadius: '6px',
                  boxShadow: '0 12px 36px rgba(0,0,0,0.5)',
                  backgroundColor: '#FFFFFF',
                }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Component Styles for Micro-interactions */}
      <style>{`
        .certificate-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(16, 23, 43, 0.09) !important;
          border-color: #D3CDC2 !important;
        }
        .certificate-card:hover .document-overlay {
          opacity: 1 !important;
        }
        .certificate-card:hover .document-paper {
          transform: scale(1.02);
        }
        .view-cert-btn:hover {
          background-color: #145233 !important;
          transform: translateY(-1px);
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleUp {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  );
};
