import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { faqsData } from '../../data/faqs';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { Button } from '../common/Button';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      className="section section-white"
      style={{ borderBottom: '1px solid var(--color-border-light)' }}
    >
      <div className="container-narrow">
        <SectionHeading
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          title="Common Questions from Parents & Students"
          subtitle="Everything you need to know about our batch structures, curriculum pathways, and admissions process across Lucknow."
          align="center"
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
          {faqsData.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                style={{
                  border: isOpen ? '1.5px solid var(--color-primary-navy)' : '1px solid var(--color-border-light)',
                  borderRadius: 'var(--radius-lg)',
                  backgroundColor: isOpen ? 'var(--color-cream)' : '#FFFFFF',
                  overflow: 'hidden',
                  transition: 'all var(--transition-fast)',
                }}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    padding: '1.25rem 1.5rem',
                    textAlign: 'left',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <HelpCircle size={18} color={isOpen ? 'var(--color-accent-green)' : 'var(--color-primary-navy)'} style={{ flexShrink: 0 }} />
                    <span
                      style={{
                        fontSize: '1.025rem',
                        fontWeight: 700,
                        color: 'var(--color-primary-navy)',
                      }}
                    >
                      {faq.question}
                    </span>
                  </div>

                  <div
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform var(--transition-fast)',
                      flexShrink: 0,
                    }}
                  >
                    <ChevronDown size={20} color="var(--color-primary-navy)" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 1.5rem 1.25rem 3.25rem',
                      color: 'var(--color-text-secondary)',
                      fontSize: '0.925rem',
                      lineHeight: 1.65,
                      borderTop: '1px solid var(--color-border-subtle)',
                      paddingTop: '0.85rem',
                    }}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom prompt */}
        <div
          style={{
            marginTop: '2.5rem',
            textAlign: 'center',
            backgroundColor: 'var(--color-cream)',
            padding: '1.5rem',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--color-border-subtle)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.75rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, color: 'var(--color-primary-navy)', fontSize: '0.95rem' }}>
            <MessageSquare size={16} color="var(--color-accent-green)" />
            <span>Have a specific question not covered here?</span>
          </div>
          <Button variant="navy" size="sm" href="/queries">
            Contact Admissions Desk
          </Button>
        </div>
      </div>
    </section>
  );
};
