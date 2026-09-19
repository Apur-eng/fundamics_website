import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const VerificationNotice: React.FC = () => {
  return (
    <section
      className="verification-notice-section"
      style={{
        padding: '3rem 0',
        backgroundColor: '#FAF8F5',
        borderTop: '1px solid #EAE3D5',
        borderBottom: '1px solid #EAE3D5',
      }}
      aria-label="Verification and Record Maintenance Notice"
    >
      <div className="container" style={{ maxWidth: '840px', textAlign: 'center' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: '#1B6B44',
            marginBottom: '0.65rem',
          }}
        >
          <ShieldCheck size={18} strokeWidth={2.4} />
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.78rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.18em',
            }}
          >
            VERIFIED RESULTS
          </span>
        </div>

        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.96rem',
            color: '#555149',
            lineHeight: 1.6,
            margin: '0 auto',
            maxWidth: '640px',
          }}
        >
          Student achievements displayed on this page are maintained as part of the institute’s academic records.
        </p>
      </div>
    </section>
  );
};
