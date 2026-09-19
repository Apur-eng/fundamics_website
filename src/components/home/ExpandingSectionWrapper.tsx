import React, { useState, useEffect, useRef, useCallback } from 'react';

interface ExpandingSectionWrapperProps {
  children: React.ReactNode;
}

export const ExpandingSectionWrapper: React.FC<ExpandingSectionWrapperProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 1440
  );
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(() =>
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 640;
  const isTablet = windowWidth >= 640 && windowWidth < 1024;

  // Continuous scroll progress calculation: 0 = entering viewport, 1 = fully expanded
  const updateScrollProgress = useCallback(() => {
    if (!containerRef.current || prefersReducedMotion) {
      setProgress(1);
      return;
    }

    const rect = containerRef.current.getBoundingClientRect();
    const vh = window.innerHeight;

    // Begin expansion when top of section enters lower viewport (88% of screen)
    const startTrigger = vh * 0.90;
    // Reach full expansion when top of section reaches upper reading zone (20% of screen)
    const endTrigger = isMobile ? vh * 0.16 : vh * 0.22;
    const scrollRange = startTrigger - endTrigger;

    if (scrollRange <= 0) {
      setProgress(1);
      return;
    }

    const rawProgress = (startTrigger - rect.top) / scrollRange;
    const clampedProgress = Math.max(0, Math.min(1, rawProgress));

    setProgress(clampedProgress);
  }, [isMobile, prefersReducedMotion]);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateScrollProgress();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    // Initial measurement
    updateScrollProgress();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [updateScrollProgress]);

  // Smooth visual easing: gentle acceleration into a smooth, settled landing
  const easeOutQuad = (t: number) => {
    return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
  };

  const eased = prefersReducedMotion ? 1 : easeOutQuad(progress);

  // Responsive interpolation targets
  // Desktop: 90vw -> 100vw, radius 34px -> 0px, scale 0.98 -> 1.0, top margin 32px -> 0px
  // Tablet: 94vw -> 100vw, radius 26px -> 0px, scale 0.985 -> 1.0, top margin 24px -> 0px
  // Mobile: 94vw -> 100vw, radius 22px -> 0px, scale 0.99 -> 1.0, top margin 16px -> 0px
  const initialWidthVw = isMobile ? 94 : isTablet ? 94 : 90;
  const initialRadiusPx = isMobile ? 22 : isTablet ? 26 : 34;
  const initialScale = isMobile ? 0.99 : isTablet ? 0.985 : 0.98;
  const initialTopMarginPx = isMobile ? 18 : isTablet ? 26 : 36;

  const currentWidthVw = initialWidthVw + (100 - initialWidthVw) * eased;
  const currentRadiusPx = Math.round(initialRadiusPx * (1 - eased));
  const currentScale = initialScale + (1 - initialScale) * eased;
  const currentTopMarginPx = Math.round(initialTopMarginPx * (1 - eased));
  const currentShadowAlpha = 0.12 * (1 - eased);

  // When fully entered (eased === 1), panel becomes fully flush and releases any clipping
  const isFullyEntered = eased >= 0.999;

  return (
    <div
      ref={containerRef}
      className="expanding-section-boundary"
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: 'var(--surface-ivory)', // Matches previous section ("More Than Just Classes") canvas
        overflowX: 'clip',
        paddingTop: isFullyEntered ? '0px' : `${currentTopMarginPx}px`,
        paddingBottom: isFullyEntered ? '0px' : `${Math.round(currentTopMarginPx * 0.75)}px`,
        transition: 'padding 50ms linear',
      }}
    >
      <div
        className="expanding-section-panel"
        style={{
          width: isFullyEntered ? '100%' : `${currentWidthVw.toFixed(2)}vw`,
          maxWidth: isFullyEntered ? '100%' : '1440px',
          margin: '0 auto',
          borderRadius: isFullyEntered ? '0px' : `${currentRadiusPx}px`,
          transform: isFullyEntered ? 'none' : `scaleY(${currentScale.toFixed(4)})`,
          transformOrigin: 'top center',
          boxShadow: isFullyEntered
            ? 'none'
            : `0 24px 60px -15px rgba(16, 23, 43, ${currentShadowAlpha.toFixed(3)}), 0 0 0 1px rgba(16, 23, 43, ${(0.05 * (1 - eased)).toFixed(3)})`,
          overflow: isFullyEntered ? 'visible' : 'hidden',
          backgroundColor: 'var(--surface-sage)', // The Fundemics Method soft sage background
          willChange: isFullyEntered ? 'auto' : 'width, border-radius, transform',
        }}
      >
        <div
          className="expanding-section-content"
          style={{
            width: '100%',
            opacity: isFullyEntered ? 1 : 0.94 + 0.06 * eased,
            transform: isFullyEntered ? 'none' : `translateY(${(16 * (1 - eased)).toFixed(1)}px)`,
            willChange: isFullyEntered ? 'auto' : 'opacity, transform',
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
