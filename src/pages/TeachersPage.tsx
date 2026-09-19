import React from 'react';
import { teachersData } from '../data/teachers';
import { CTASection } from '../components/common/CTASection';
import { GraduationCap, CheckCircle2, Award } from 'lucide-react';
import { Button } from '../components/common/Button';

export const TeachersPage: React.FC = () => {
  const leadTeacher = teachersData.find((t) => t.name.includes('Manish')) || teachersData[0];
  const otherTeachers = teachersData.filter((t) => !t.name.includes('Manish'));

  return (
    <div className="teachers-page animate-fade-in">
      {/* Editorial Hero Header with Photography */}
      <section
        style={{
          position: 'relative',
          paddingTop: 'clamp(5rem, 8vw, 7rem)',
          paddingBottom: 'clamp(4rem, 7vw, 6rem)',
          backgroundImage: `
            linear-gradient(180deg, rgba(17, 21, 56, 0.85) 0%, rgba(17, 21, 56, 0.95) 100%),
            url('/assets/hero_classroom.jpg')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center 35%',
          color: '#FFFFFF',
          textAlign: 'center',
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '880px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: 'rgba(255, 255, 255, 0.12)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              padding: '0.45rem 1.25rem',
              borderRadius: 'var(--radius-full)',
              marginBottom: '1.5rem',
              fontSize: '0.825rem',
              fontWeight: 700,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}
          >
            <GraduationCap size={15} color="var(--color-hero-accent)" />
            <span>ACADEMIC PEDIGREE & PASSION</span>
          </div>

          <h1
            className="headline-editorial"
            style={{
              fontSize: 'var(--text-display)',
              fontWeight: 800,
              color: '#FFFFFF',
              lineHeight: 1.15,
              marginBottom: '1.25rem',
            }}
          >
            Meet the Faculty & Mentors
          </h1>

          <p
            style={{
              fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
              color: 'rgba(255, 255, 255, 0.9)',
              lineHeight: 1.65,
              maxWidth: '740px',
              margin: '0 auto',
            }}
          >
            Dedicated educators with premier engineering pedigrees from institutions like IIT Dhanbad, committed to transforming classroom hesitation into verified board mastery.
          </p>
        </div>
      </section>

      {/* Featured Lead Faculty Spotlight (Large Portrait + In-depth Profile) */}
      <section className="section section-ivory" style={{ borderBottom: '1px solid var(--color-border-light)' }}>
        <div className="container">
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid var(--color-border-light)',
              padding: 'clamp(2rem, 5vw, 3.5rem)',
              boxShadow: 'var(--shadow-card)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'clamp(2rem, 5vw, 4rem)',
              alignItems: 'center',
            }}
          >
            {/* Left: Large Portrait */}
            <div style={{ position: 'relative' }}>
              <div className="image-frame" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
                <img
                  src="/assets/faculty_mentor.jpg"
                  alt="Manish K. Verma, M.Tech IIT Dhanbad, Lead Faculty at Fundemics Tutorials Lucknow"
                  style={{
                    width: '100%',
                    height: 'clamp(360px, 48vh, 480px)',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </div>

              <div
                style={{
                  position: 'absolute',
                  bottom: '-15px',
                  right: '15px',
                  backgroundColor: 'var(--color-primary-navy)',
                  color: '#FFFFFF',
                  padding: '0.6rem 1.2rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  boxShadow: 'var(--shadow-md)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                }}
              >
                <Award size={16} color="var(--color-hero-accent)" />
                <span>IIT Dhanbad Alumnus</span>
              </div>
            </div>

            {/* Right: In-Depth Profile */}
            <div>
              <span className="badge badge-navy" style={{ marginBottom: '0.75rem' }}>
                FOUNDER & LEAD MENTOR
              </span>

              <h2
                style={{
                  fontSize: 'var(--text-h2)',
                  fontWeight: 800,
                  color: 'var(--color-primary-navy)',
                  marginBottom: '0.35rem',
                }}
              >
                {leadTeacher.name}
              </h2>

              <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-accent-green-dark)', marginBottom: '1.25rem' }}>
                {leadTeacher.qualification}
              </div>

              <p style={{ fontSize: '1rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                {leadTeacher.bio} An alumnus of IIT Dhanbad, Manish Sir brings rigorous analytical foundations, teaching mathematics and physics with infectious energy and deep patience.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.925rem', color: 'var(--color-text-primary)' }}>
                  <CheckCircle2 size={18} color="var(--color-accent-green)" />
                  <span>Classes Taught: {leadTeacher.classes} (ICSE, ISC & CBSE)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.925rem', color: 'var(--color-text-primary)' }}>
                  <CheckCircle2 size={18} color="var(--color-accent-green)" />
                  <span>Key Subjects: {leadTeacher.subjects.join(', ')}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.925rem', color: 'var(--color-text-primary)' }}>
                  <CheckCircle2 size={18} color="var(--color-accent-green)" />
                  <span>Teaching Experience: {leadTeacher.experience} of Board Guidance in Lucknow</span>
                </div>
              </div>

              <Button variant="navy" size="md" href="/queries">
                Inquire for Batches with Manish Sir
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Other Faculty Members Section */}
      <section className="section section-white" style={{ borderBottom: '1px solid var(--color-border-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto clamp(2.5rem, 5vw, 3.5rem) auto' }}>
            <span className="badge badge-navy" style={{ marginBottom: '1rem' }}>
              SUBJECT SPECIALISTS
            </span>
            <h2
              className="headline-editorial"
              style={{ fontSize: 'var(--text-h2)', color: 'var(--color-primary-navy)', lineHeight: 1.2, marginBottom: '0.75rem' }}
            >
              Our Complete Faculty Team
            </h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem' }}>
              Every subject at Fundemics is guided by dedicated specialists who combine engineering logic with approachable, clear explanations.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem',
              marginBottom: '3.5rem',
            }}
          >
            {otherTeachers.map((teacher) => (
              <div
                key={teacher.id}
                style={{
                  padding: '2rem',
                  backgroundColor: 'var(--color-ivory)',
                  borderRadius: 'var(--radius-xl)',
                  border: '1px solid var(--color-border-light)',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        backgroundColor: '#FFFFFF',
                        border: '1px solid var(--color-border-subtle)',
                        color: 'var(--color-primary-navy)',
                        padding: '0.3rem 0.75rem',
                        borderRadius: 'var(--radius-full)',
                      }}
                    >
                      {teacher.experience} Exp
                    </span>

                    <span style={{ fontSize: '0.8rem', color: 'var(--color-accent-green-dark)', fontWeight: 700 }}>
                      {teacher.qualification}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--color-primary-navy)', marginBottom: '0.85rem' }}>
                    {teacher.name}
                  </h3>

                  <p style={{ fontSize: '0.925rem', color: 'var(--color-text-secondary)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                    {teacher.bio}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                    {teacher.subjects.map((sub) => (
                      <span
                        key={sub}
                        style={{
                          fontSize: '0.78rem',
                          fontWeight: 600,
                          backgroundColor: '#FFFFFF',
                          color: 'var(--color-primary-navy)',
                          padding: '0.25rem 0.65rem',
                          borderRadius: 'var(--radius-sm)',
                          border: '1px solid var(--color-border-subtle)',
                        }}
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ borderTop: '1px solid var(--color-border-subtle)', paddingTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                  <CheckCircle2 size={15} color="var(--color-accent-green)" />
                  <span>Classes: {teacher.classes}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Institutional Note */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px dashed var(--color-border-light)',
              borderRadius: 'var(--radius-md)',
              padding: '1.25rem',
              textAlign: 'center',
              fontSize: '0.85rem',
              color: 'var(--color-text-muted)',
              maxWidth: '740px',
              margin: '0 auto',
            }}
          >
            <strong>Faculty Profile Verification:</strong> Core credentials (IIT Dhanbad, B.Tech, MBA) are reflected directly from the Fundemics Tutorials official brochure. Detailed curriculum vitae and subject assignments are maintained by the academic office.
          </div>
        </div>
      </section>

      {/* Large CTA */}
      <CTASection
        title="Have Questions About Our Faculty or Classes?"
        subtitle="Speak directly with our academic coordinators to arrange a center visit or attend an introductory counseling session."
        primaryButtonText="Contact Faculty Office"
        primaryButtonHref="/queries"
      />
    </div>
  );
};
