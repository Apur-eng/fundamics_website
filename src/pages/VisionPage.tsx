import React from 'react';
import { CTASection } from '../components/common/CTASection';
import { siteConfig } from '../data/siteConfig';
import { BookOpen, Compass, HeartHandshake, Lightbulb, Target, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '../components/common/Button';

export const VisionPage: React.FC = () => {
  return (
    <div className="vision-page animate-fade-in">
      {/* Cinematic Hero Header with Photography */}
      <section
        style={{
          position: 'relative',
          paddingTop: 'clamp(5rem, 8vw, 7rem)',
          paddingBottom: 'clamp(4rem, 7vw, 6rem)',
          backgroundImage: `
            linear-gradient(180deg, rgba(17, 21, 56, 0.82) 0%, rgba(17, 21, 56, 0.94) 100%),
            url('/assets/about_vision.jpg')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
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
            <Compass size={15} color="var(--color-hero-accent)" />
            <span>FOUNDATION & PURPOSE • SINCE 2014</span>
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
            Our Vision & Educational Philosophy
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
            Education is not merely about clearing the next school exam. It is about igniting intellectual curiosity, cultivating disciplined inquiry, and equipping learners with analytical stamina for life.
          </p>
        </div>
      </section>

      {/* Large Typography Quote & Storytelling Section */}
      <section className="section section-ivory" style={{ borderBottom: '1px solid var(--color-border-light)' }}>
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <span className="badge badge-navy" style={{ marginBottom: '1.5rem' }}>
            THE PHILOSOPHY BEHIND THE NAME
          </span>

          <h2
            className="tagline-serif"
            style={{
              fontSize: 'clamp(1.75rem, 3.5vw, 2.6rem)',
              color: 'var(--color-primary-navy)',
              lineHeight: 1.35,
              marginBottom: '1.75rem',
              fontWeight: 600,
            }}
          >
            "A child whose fundamentals are crystal clear can conquer any syllabus, any examination, and any future challenge."
          </h2>

          <p
            style={{
              fontSize: '1.15rem',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.8,
              marginBottom: '1.5rem',
            }}
          >
            In an era where coaching is increasingly industrialized into crowded halls and robotic rote-memorization, Fundemics Tutorials was established in Lucknow to restore genuine craftsmanship to teaching.
          </p>

          <p
            style={{
              fontSize: '1.05rem',
              color: 'var(--color-text-muted)',
              lineHeight: 1.75,
            }}
          >
            We believe that every complex mathematical theorem or scientific principle has an intuitive derivation. When an educator takes the time to reveal that inner logic, fear vanishes—and academic enthusiasm takes its place.
          </p>
        </div>
      </section>

      {/* Split Storytelling Section with Mentorship Photography */}
      <section className="section section-white" style={{ borderBottom: '1px solid var(--color-border-light)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: 'clamp(2.5rem, 6vw, 4.5rem)',
              alignItems: 'center',
            }}
          >
            {/* Image Column */}
            <div style={{ position: 'relative' }}>
              <div className="image-frame" style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden' }}>
                <img
                  src="/assets/mentorship.jpg"
                  alt="Personalized one-on-one academic mentoring session at Fundemics Tutorials in Lucknow"
                  style={{
                    width: '100%',
                    height: 'clamp(360px, 50vh, 500px)',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </div>

              <div
                style={{
                  position: 'absolute',
                  bottom: '-20px',
                  right: '20px',
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.25rem 1.5rem',
                  boxShadow: 'var(--shadow-lg)',
                  border: '1px solid var(--color-border-subtle)',
                  maxWidth: '280px',
                }}
              >
                <div style={{ fontWeight: 800, color: 'var(--color-primary-navy)', fontSize: '0.85rem', marginBottom: '0.25rem' }}>
                  A Decade of Trust in Lucknow
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', lineHeight: 1.4 }}>
                  Nurturing school learners from early grades through senior secondary board distinction.
                </div>
              </div>
            </div>

            {/* Narrative Column */}
            <div>
              <span className="badge badge-green" style={{ marginBottom: '1rem' }}>
                OUR DUAL MANDATE
              </span>

              <h2
                className="headline-editorial"
                style={{
                  fontSize: 'var(--text-h2)',
                  color: 'var(--color-primary-navy)',
                  marginBottom: '1.25rem',
                  lineHeight: 1.25,
                }}
              >
                Vision & Mission Working in Unison.
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
                <div style={{ padding: '1.5rem', backgroundColor: 'var(--color-ivory)', borderRadius: 'var(--radius-lg)', borderLeft: '4px solid var(--color-primary-navy)' }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-primary-navy)', marginBottom: '0.4rem' }}>
                    Our Vision
                  </h3>
                  <p style={{ fontSize: '0.925rem', color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>
                    To be Lucknow's foremost benchmark for foundational mastery—where students build fearless intellectual confidence, logical precision, and habits of disciplined thought that serve them long past their board exams.
                  </p>
                </div>

                <div style={{ padding: '1.5rem', backgroundColor: 'var(--color-ivory)', borderRadius: 'var(--radius-lg)', borderLeft: '4px solid var(--color-accent-green)' }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-accent-green-dark)', marginBottom: '0.4rem' }}>
                    Our Mission
                  </h3>
                  <p style={{ fontSize: '0.925rem', color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>
                    To provide personalized, high-caliber instruction across ICSE, ISC, and CBSE syllabi by deploying experienced IIT and engineering educators in small, highly interactive classrooms.
                  </p>
                </div>
              </div>

              <Button variant="navy" size="md" href="/teachers" icon={<ArrowRight size={16} />}>
                Meet the Faculty Mentors
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 6 Core Pedagogical Principles */}
      <section className="section section-ivory" style={{ borderBottom: '1px solid var(--color-border-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto clamp(2.5rem, 5vw, 4rem) auto' }}>
            <span className="badge badge-navy" style={{ marginBottom: '1rem' }}>
              THE PEDAGOGICAL PILLARS
            </span>
            <h2
              className="headline-editorial"
              style={{ fontSize: 'var(--text-h2)', color: 'var(--color-primary-navy)', lineHeight: 1.2, marginBottom: '0.75rem' }}
            >
              The 6 Principles of Fundemics Teaching
            </h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem' }}>
              Six foundational tenets that guide every lecture, weekly checkpoint test, and mentorship discussion across our Lucknow classrooms.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '1.75rem',
            }}
          >
            {[
              {
                title: '1. Strong Fundamentals First',
                desc: 'Every complex formula is built on elementary rules. We spend dedicated time ensuring basic arithmetic, definitions, and physical laws are deeply understood.',
                icon: <BookOpen size={20} color="var(--color-accent-green-dark)" />,
              },
              {
                title: '2. Conceptual Derivations',
                desc: 'Instead of memorizing static formulas, students learn where laws originate. Understanding the derivation demystifies science and mathematics.',
                icon: <Lightbulb size={20} color="var(--color-accent-green-dark)" />,
              },
              {
                title: '3. Consistent, Timed Practice',
                desc: 'Excellence is a daily habit. Regular homework routines and weekly evaluation checkpoint tests help students steadily build stamina and speed.',
                icon: <CheckCircle2 size={20} color="var(--color-accent-green-dark)" />,
              },
              {
                title: '4. Individual Attention',
                desc: 'No two learners share the exact same hurdles. We maintain disciplined batch sizes so our faculty knows each student by name, pace, and specific weaknesses.',
                icon: <HeartHandshake size={20} color="var(--color-accent-green-dark)" />,
              },
              {
                title: '5. Academic Discipline',
                desc: 'Punctuality, structured note-taking, and continuous revision are instilled as core character habits that pay lifelong dividends.',
                icon: <Target size={20} color="var(--color-accent-green-dark)" />,
              },
              {
                title: '6. Fearless Confidence',
                desc: 'We cultivate an open classroom atmosphere where asking questions and challenging personal doubts is celebrated every single day.',
                icon: <Compass size={20} color="var(--color-accent-green-dark)" />,
              },
            ].map((pillar, idx) => (
              <div
                key={idx}
                style={{
                  padding: '2rem',
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-border-light)',
                  boxShadow: 'var(--shadow-sm)',
                  borderTop: '3px solid var(--color-primary-navy)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
                  {pillar.icon}
                  <h3 style={{ fontSize: '1.15rem', color: 'var(--color-primary-navy)', fontWeight: 800 }}>
                    {pillar.title}
                  </h3>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brochure Tagline Signature Closing */}
      <section
        style={{
          backgroundColor: 'var(--color-dark-navy)',
          color: '#FFFFFF',
          padding: 'clamp(4.5rem, 7vw, 6rem) 0',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <div className="container-narrow">
          <p style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-accent-green)', fontWeight: 800, marginBottom: '1rem' }}>
            THE FUNDEMICS PROMISE
          </p>
          <h2
            className="tagline-serif"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.25rem)',
              color: '#FFFFFF',
              lineHeight: 1.25,
              marginBottom: '1.25rem',
            }}
          >
            "{siteConfig.tagline}"
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.85)', maxWidth: '640px', margin: '0 auto', lineHeight: 1.65 }}>
            Every lesson taught today is an investment in tomorrow’s scholars, doctors, engineers, and thoughtful leaders.
          </p>
        </div>
      </section>

      {/* Final Call to Action */}
      <CTASection
        title="Experience the Fundemics Difference."
        subtitle="Book an academic counseling consultation or inquire about batch availability across our Lucknow centers."
        primaryButtonText="Send a Query"
        primaryButtonHref="/queries"
      />
    </div>
  );
};
