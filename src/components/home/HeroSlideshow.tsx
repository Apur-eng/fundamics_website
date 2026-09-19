import React, { useState, useEffect } from 'react';
import { Button } from '../common/Button';
import { ArrowRight, ChevronDown } from 'lucide-react';

interface SlideItem {
  id: number;
  image: string;
  alt: string;
}

const slides: SlideItem[] = [
  {
    id: 1,
    image: '/assets/hero_classroom.jpg',
    alt: 'Students attentively learning in classroom at Fundemics Tutorials',
  },
  {
    id: 2,
    image: '/assets/mentorship.jpg',
    alt: 'Teacher mentoring student with personalized academic guidance',
  },
  {
    id: 3,
    image: '/assets/about_vision.jpg',
    alt: 'Secondary students studying collaboratively with books',
  },
  {
    id: 4,
    image: '/assets/campus_center.jpg',
    alt: 'Academic classroom environment and campus at Fundemics Lucknow',
  },
];

export const HeroSlideshow: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  // Auto-advance slides every 6.5 seconds with slow, elegant crossfade
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const scrollToCourses = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById('courses');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      style={{
        position: 'relative',
        height: '100vh',
        minHeight: '620px',
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#10172B',
      }}
      aria-label="Hero Introduction"
    >
      {/* Background Slideshow with Slow Crossfades */}
      {slides.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.id}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: isActive ? 1 : 0,
              transition: 'opacity 1800ms cubic-bezier(0.4, 0, 0.2, 1)',
              zIndex: 1,
              pointerEvents: 'none',
            }}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center 35%',
                transform: isActive ? 'scale(1.03)' : 'scale(1)',
                transition: 'transform 7000ms ease-out',
              }}
            />
          </div>
        );
      })}

      {/* Cinematic Dark Overlay Scrim (Zero glassmorphism, pure photographic contrast) */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            linear-gradient(180deg, 
              rgba(16, 23, 43, 0.58) 0%, 
              rgba(16, 23, 43, 0.65) 45%, 
              rgba(16, 23, 43, 0.88) 100%
            )
          `,
          zIndex: 2,
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />

      {/* Minimal Hero Center Content */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 3,
          textAlign: 'center',
          maxWidth: '920px',
          paddingTop: '3rem',
        }}
      >
        {/* 1. Small Eyebrow */}
        <p
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(0.75rem, 1.2vw, 0.875rem)',
            fontWeight: 700,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'rgba(255, 255, 255, 0.92)',
            marginBottom: '1.25rem',
          }}
        >
          CLASSES I–XII &nbsp;·&nbsp; ICSE &nbsp;·&nbsp; ISC &nbsp;·&nbsp; CBSE
        </p>

        {/* 2. Large Editorial Headline */}
        <h1
          style={{
            fontFamily: "'Newsreader', Georgia, serif",
            fontWeight: 500,
            fontSize: 'clamp(2.75rem, 6.8vw + 0.5rem, 5.5rem)',
            lineHeight: 1.08,
            color: '#FFFFFF',
            letterSpacing: '-0.025em',
            marginBottom: '1.25rem',
            textShadow: '0 4px 28px rgba(0, 0, 0, 0.45)',
          }}
        >
          Educating for a Better Tomorrow.
        </h1>

        {/* 3. Short Supporting Line */}
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(1.05rem, 1.9vw, 1.35rem)',
            color: 'rgba(255, 255, 255, 0.88)',
            fontWeight: 400,
            maxWidth: '620px',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: 1.5,
            marginBottom: '2.5rem',
            textShadow: '0 2px 12px rgba(0, 0, 0, 0.35)',
          }}
        >
          Strong foundations. Personal attention. Better learning.
        </p>

        {/* 4. Two Clean Action Buttons */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '1.25rem',
          }}
        >
          <a
            href="#courses"
            onClick={scrollToCourses}
            className="btn btn-hero-primary btn-lg"
            style={{
              gap: '0.5rem',
              display: 'inline-flex',
              alignItems: 'center',
            }}
          >
            <span>Explore Courses</span>
            <ArrowRight size={17} />
          </a>

          <Button
            variant="outline-white"
            size="lg"
            href="/queries"
          >
            Send a Query
          </Button>
        </div>
      </div>

      {/* Subtle Bottom Slide Controls / Thin Indicators */}
      <div
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: 0,
          right: 0,
          zIndex: 3,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.65rem',
        }}
        role="tablist"
        aria-label="Hero Slideshow Controls"
      >
        {slides.map((slide, idx) => {
          const isActive = idx === currentSlide;
          return (
            <button
              key={slide.id}
              onClick={() => setCurrentSlide(idx)}
              role="tab"
              aria-selected={isActive}
              aria-label={`Go to slide ${idx + 1}`}
              style={{
                width: isActive ? '36px' : '10px',
                height: '4px',
                borderRadius: '2px',
                backgroundColor: isActive ? 'var(--color-accent-green)' : 'rgba(255, 255, 255, 0.35)',
                transition: 'all 400ms ease',
                padding: 0,
                cursor: 'pointer',
              }}
            />
          );
        })}
      </div>

      {/* Subtle Scroll Down Indicator */}
      <a
        href="#featured-students"
        aria-label="Scroll to featured student toppers"
        style={{
          position: 'absolute',
          bottom: '1rem',
          right: 'clamp(1rem, 4vw, 3rem)',
          zIndex: 3,
          color: 'rgba(255, 255, 255, 0.65)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          fontSize: '0.75rem',
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          fontWeight: 600,
          transition: 'color var(--transition-fast)',
        }}
        className="hero-scroll-cue"
      >
        <span>Scroll</span>
        <ChevronDown size={15} />
      </a>
    </section>
  );
};
