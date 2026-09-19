import React from 'react';
import type { TeacherItem } from '../../types';
import { GraduationCap, Clock, Award } from 'lucide-react';

interface TeacherCardProps {
  teacher: TeacherItem;
}

export const TeacherCard: React.FC<TeacherCardProps> = ({ teacher }) => {
  return (
    <div
      className="surface-card surface-card-interactive"
      style={{
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderTop: '4px solid var(--color-primary-navy)',
        backgroundColor: '#FFFFFF',
      }}
    >
      <div>
        {/* Top Header: Avatar & Credentials */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', marginBottom: '1.25rem' }}>
          {/* Portrait Monogram / Headshot */}
          <div
            style={{
              width: '68px',
              height: '68px',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'var(--color-primary-navy)',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: '1.25rem',
              flexShrink: 0,
              boxShadow: 'var(--shadow-md)',
              border: '3px solid var(--color-light-green)',
            }}
          >
            {teacher.image ? (
              <img
                src={teacher.image}
                alt={teacher.name}
                style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }}
              />
            ) : (
              <GraduationCap size={32} color="var(--color-light-green)" />
            )}
          </div>

          <div>
            <h3
              style={{
                fontSize: '1.2rem',
                fontWeight: 800,
                color: 'var(--color-primary-navy)',
                marginBottom: '2px',
              }}
            >
              {teacher.name}
            </h3>
            <div
              style={{
                fontSize: '0.85rem',
                fontWeight: 700,
                color: 'var(--color-accent-green-dark)',
              }}
            >
              {teacher.qualification}
            </div>
            {teacher.experience && (
              <div
                style={{
                  fontSize: '0.75rem',
                  color: 'var(--color-text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  marginTop: '2px',
                }}
              >
                <Clock size={12} />
                <span>{teacher.experience}</span>
              </div>
            )}
          </div>
        </div>

        {/* Classes & Subjects Band */}
        <div
          style={{
            backgroundColor: 'var(--color-cream)',
            padding: '0.75rem 1rem',
            borderRadius: 'var(--radius-md)',
            marginBottom: '1rem',
            border: '1px solid var(--color-border-subtle)',
          }}
        >
          <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: '0.25rem' }}>
            Classes & Batches
          </div>
          <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-primary-navy)' }}>
            {teacher.classes}
          </div>
        </div>

        {/* Subject Chips */}
        <div style={{ marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {teacher.subjects.map((sub, idx) => (
              <span
                key={idx}
                style={{
                  fontSize: '0.78rem',
                  backgroundColor: 'rgba(37, 43, 99, 0.06)',
                  color: 'var(--color-primary-navy)',
                  padding: '0.25rem 0.65rem',
                  borderRadius: 'var(--radius-full)',
                  fontWeight: 600,
                }}
              >
                {sub}
              </span>
            ))}
          </div>
        </div>

        {/* Biography */}
        <p
          style={{
            fontSize: '0.875rem',
            color: 'var(--color-text-muted)',
            lineHeight: 1.6,
          }}
        >
          {teacher.bio}
        </p>
      </div>

      {/* Verification footer */}
      {teacher.isBrochureVerified && (
        <div
          style={{
            marginTop: '1.25rem',
            paddingTop: '0.75rem',
            borderTop: '1px solid var(--color-border-subtle)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            fontSize: '0.72rem',
            color: 'var(--color-accent-green-dark)',
            fontWeight: 600,
          }}
        >
          <Award size={13} />
          <span>Listed in Fundemics Official Brochure</span>
        </div>
      )}
    </div>
  );
};
