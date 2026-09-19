import React, { useState } from 'react';
import { Button } from '../common/Button';
import { Send, CheckCircle, Sparkles } from 'lucide-react';
import { useRouter } from '../../context/RouterContext';

export const QuickEnquiryBanner: React.FC = () => {
  const { navigate } = useRouter();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [targetClass, setTargetClass] = useState('Class X');
  const [board, setBoard] = useState('ICSE');
  const [isDone, setIsDone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      navigate('/queries');
      return;
    }
    setIsDone(true);
  };

  return (
    <section
      className="section-dark brochure-dots-pattern"
      style={{
        padding: 'clamp(3.5rem, 5vw, 5rem) 0',
        borderTop: '1px solid var(--color-border-navy)',
        borderBottom: '1px solid var(--color-border-navy)',
      }}
    >
      <div className="container">
        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: 'var(--radius-xl)',
            padding: 'clamp(2rem, 4vw, 3rem)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            alignItems: 'center',
            gap: '2.5rem',
          }}
        >
          {/* Left: Messaging */}
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                backgroundColor: 'rgba(88, 168, 70, 0.2)',
                border: '1px solid var(--color-accent-green)',
                padding: '0.3rem 0.8rem',
                borderRadius: 'var(--radius-full)',
                color: '#FFFFFF',
                fontSize: '0.75rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: '1rem',
              }}
            >
              <Sparkles size={14} color="var(--color-accent-green)" />
              <span>Admissions Desk</span>
            </div>

            <h2
              style={{
                fontSize: 'var(--text-h2)',
                fontWeight: 800,
                color: '#FFFFFF',
                lineHeight: 1.2,
                marginBottom: '0.75rem',
              }}
            >
              Start the Conversation.
            </h2>

            <p
              style={{
                fontSize: 'var(--text-body)',
                color: 'var(--color-text-inverse-muted)',
                lineHeight: 1.6,
                maxWidth: '480px',
              }}
            >
              Request immediate batch timing details, subject availability, or transport pickup information for your ward in Lucknow.
            </p>
          </div>

          {/* Right: Quick Capture Form */}
          <div>
            {isDone ? (
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-lg)',
                  padding: '2rem',
                  textAlign: 'center',
                }}
              >
                <CheckCircle size={36} color="var(--color-accent-green)" style={{ margin: '0 auto 0.75rem auto' }} />
                <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary-navy)', fontWeight: 800 }}>
                  We'll Contact You Shortly!
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>
                  Thank you, <strong>{name}</strong>. Our counselors will reach out on <strong>{phone}</strong> regarding {targetClass} ({board}).
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  boxShadow: 'var(--shadow-lg)',
                }}
              >
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: 'var(--color-primary-navy)', marginBottom: '0.25rem' }}>
                      Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Student / Parent"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.85rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--color-border-light)',
                        backgroundColor: 'var(--color-cream-card)',
                        fontSize: '0.875rem',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: 'var(--color-primary-navy)', marginBottom: '0.25rem' }}>
                      Mobile *
                    </label>
                    <input
                      type="tel"
                      placeholder="10-digit number"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.85rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--color-border-light)',
                        backgroundColor: 'var(--color-cream-card)',
                        fontSize: '0.875rem',
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: 'var(--color-primary-navy)', marginBottom: '0.25rem' }}>
                      Class
                    </label>
                    <select
                      value={targetClass}
                      onChange={(e) => setTargetClass(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.85rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--color-border-light)',
                        backgroundColor: 'var(--color-cream-card)',
                        fontSize: '0.875rem',
                      }}
                    >
                      <option value="Class I - V">Class I – V</option>
                      <option value="Class VI - VIII">Class VI – VIII</option>
                      <option value="Class IX - X">Class IX – X</option>
                      <option value="Class XI - XII">Class XI – XII</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: 'var(--color-primary-navy)', marginBottom: '0.25rem' }}>
                      Board
                    </label>
                    <select
                      value={board}
                      onChange={(e) => setBoard(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.85rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--color-border-light)',
                        backgroundColor: 'var(--color-cream-card)',
                        fontSize: '0.875rem',
                      }}
                    >
                      <option value="ICSE">ICSE</option>
                      <option value="ISC">ISC</option>
                      <option value="CBSE">CBSE</option>
                    </select>
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="green"
                  size="md"
                  style={{ width: '100%' }}
                  icon={<Send size={16} />}
                >
                  Request Callback
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
