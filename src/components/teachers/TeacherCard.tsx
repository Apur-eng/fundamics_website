import React from 'react';
import type { TeacherItem } from '../../types';
import { GraduationCap, Clock, Award, ShieldCheck, Sparkles } from 'lucide-react';

interface TeacherCardProps {
  teacher: TeacherItem;
}

const getInitials = (name: string): string => {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

export const TeacherCard: React.FC<TeacherCardProps> = ({ teacher }) => {
  const isHOD = teacher.designation === 'HOD' || teacher.name.toLowerCase().includes('mayank aggarwal');

  return (
    <div
      className="faculty-profile-card surface-card surface-card-interactive"
      style={{
        padding: '1.75rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '16px',
        border: isHOD ? '2px solid #2BB06F' : '1px solid #EBE5DA',
        borderTop: isHOD ? '5px solid #2BB06F' : '4px solid #10172B',
        backgroundColor: '#FFFFFF',
        boxShadow: isHOD
          ? '0 12px 32px rgba(43, 176, 111, 0.12), 0 2px 8px rgba(16, 23, 43, 0.04)'
          : '0 4px 16px rgba(16, 23, 43, 0.04)',
        transition: 'all 240ms cubic-bezier(0.16, 1, 0.3, 1)',
        position: 'relative',
      }}
    >
      <div>
        {/* Top Badges (Category & HOD) */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.5rem',
            marginBottom: '1.25rem',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.72rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: '#1B6B44',
              backgroundColor: 'rgba(43, 176, 111, 0.1)',
              padding: '0.2rem 0.6rem',
              borderRadius: '999px',
              border: '1px solid rgba(43, 176, 111, 0.25)',
            }}
          >
            {teacher.category}
          </span>

          {isHOD && (
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.74rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: '#FFFFFF',
                backgroundColor: '#1B6B44',
                padding: '0.25rem 0.7rem',
                borderRadius: '6px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                boxShadow: '0 2px 8px rgba(27, 107, 68, 0.35)',
              }}
            >
              <Sparkles size={12} color="#FAF8F5" />
              <span>HOD</span>
            </span>
          )}
        </div>

        {/* Header: Avatar & Credentials */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.1rem', marginBottom: '1.2rem' }}>
          {/* Portrait Monogram / Headshot */}
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              backgroundColor: isHOD ? '#0C1424' : '#10172B',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: '1.15rem',
              flexShrink: 0,
              boxShadow: '0 4px 14px rgba(16, 23, 43, 0.12)',
              border: isHOD ? '2.5px solid #2BB06F' : '2px solid #EBE5DA',
              overflow: 'hidden',
            }}
          >
            {teacher.image ? (
              <img
                src={teacher.image}
                alt={teacher.name}
                style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }}
              />
            ) : (
              <span style={{ letterSpacing: '0.04em', color: '#2BB06F' }}>
                {getInitials(teacher.name)}
              </span>
            )}
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', flexWrap: 'wrap' }}>
              <h3
                style={{
                  fontFamily: "'Newsreader', Georgia, serif",
                  fontSize: '1.3rem',
                  fontWeight: 600,
                  color: '#10172B',
                  margin: 0,
                  lineHeight: 1.2,
                }}
              >
                {teacher.name}
              </h3>
              {isHOD && (
                <span
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    color: '#2BB06F',
                    border: '1px solid #2BB06F',
                    padding: '1px 5px',
                    borderRadius: '4px',
                  }}
                >
                  HOD
                </span>
              )}
            </div>

            <div
              style={{
                fontSize: '0.84rem',
                fontWeight: 700,
                color: '#1B6B44',
                marginTop: '2px',
              }}
            >
              {teacher.qualification}
            </div>

            {teacher.experience && (
              <div
                style={{
                  fontSize: '0.75rem',
                  color: '#706A60',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  marginTop: '2px',
                  fontWeight: 500,
                }}
              >
                <Clock size={12} color="#1B6B44" />
                <span>{teacher.experience}</span>
              </div>
            )}
          </div>
        </div>

        {/* Classes & Batches Band */}
        <div
          style={{
            backgroundColor: '#FAF8F5',
            padding: '0.65rem 0.9rem',
            borderRadius: '8px',
            marginBottom: '0.9rem',
            border: '1px solid #ECE6DA',
          }}
        >
          <div style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#8A8274', marginBottom: '0.2rem' }}>
            Classes &amp; Coverage
          </div>
          <div style={{ fontSize: '0.82rem', fontWeight: 650, color: '#10172B' }}>
            {teacher.classes}
          </div>
        </div>

        {/* Subject Chips */}
        {teacher.subjects && teacher.subjects.length > 0 && (
          <div style={{ marginBottom: '1rem' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
              {teacher.subjects.map((sub, idx) => (
                <span
                  key={idx}
                  style={{
                    fontSize: '0.75rem',
                    backgroundColor: '#F3EFE6',
                    color: '#10172B',
                    padding: '0.2rem 0.55rem',
                    borderRadius: '4px',
                    fontWeight: 600,
                  }}
                >
                  {sub}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Biography */}
        <p
          style={{
            fontSize: '0.86rem',
            color: '#555149',
            lineHeight: 1.6,
            margin: 0,
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
            borderTop: '1px solid #EBE5DA',
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            fontSize: '0.72rem',
            color: '#1B6B44',
            fontWeight: 650,
          }}
        >
          <ShieldCheck size={14} color="#2BB06F" />
          <span>Verified Fundemics Academic Faculty</span>
        </div>
      )}
    </div>
  );
};
