import React, { useEffect, useState, useMemo } from 'react';
import Lenis from 'lenis';
import { useRouter } from '../../context/RouterContext';
import { useReducedMotionPreference } from '../useReducedMotionPreference';
import { LenisContext, setGlobalLenis } from './LenisContext';

export interface LenisProviderProps {
  children: React.ReactNode;
}

/**
 * Global Smooth Scroll Provider powered by Lenis
 * Direct port of Averra's smooth-scroll implementation with exact kinematic curve,
 * duration, easing, multipliers, and reduced-motion handling.
 */
export const LenisProvider: React.FC<LenisProviderProps> = ({ children }) => {
  const [lenisInstance, setLenisInstance] = useState<Lenis | null>(null);
  const { currentPath } = useRouter();
  const prefersReducedMotion = useReducedMotionPreference();

  useEffect(() => {
    // Exact Lenis instance configuration from Averra with autoRaf
    const lenis = new Lenis({
      duration: prefersReducedMotion ? 0 : 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: !prefersReducedMotion,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.5,
      autoRaf: true,
    });

    setLenisInstance(lenis);
    setGlobalLenis(lenis);

    return () => {
      lenis.destroy();
      setLenisInstance(null);
      setGlobalLenis(null);
    };
  }, [prefersReducedMotion]);

  // Handle route change scroll reset cleanly
  useEffect(() => {
    if (lenisInstance) {
      lenisInstance.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [currentPath, lenisInstance]);

  const scrollTo = useMemo(() => {
    return (
      target: number | string | HTMLElement,
      options?: Parameters<Lenis['scrollTo']>[1]
    ) => {
      if (lenisInstance) {
        lenisInstance.scrollTo(target, options);
      } else {
        if (typeof target === 'number') {
          window.scrollTo({
            top: target,
            behavior: prefersReducedMotion ? 'instant' : 'smooth',
          });
        } else if (typeof target === 'string') {
          const el = document.querySelector(target);
          el?.scrollIntoView({
            behavior: prefersReducedMotion ? 'instant' : 'smooth',
          });
        } else if (target instanceof HTMLElement) {
          target.scrollIntoView({
            behavior: prefersReducedMotion ? 'instant' : 'smooth',
          });
        }
      }
    };
  }, [lenisInstance, prefersReducedMotion]);

  return (
    <LenisContext.Provider value={{ lenis: lenisInstance, scrollTo }}>
      {children}
    </LenisContext.Provider>
  );
};
