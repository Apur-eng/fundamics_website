import { useContext } from 'react';
import { LenisContext, type LenisContextValue } from './LenisContext';

/**
 * Hook to access the global Lenis smooth scroll instance and scrollTo helper.
 * Direct port of Averra: src/motion/lenis/useLenis.ts
 */
export function useLenis(): LenisContextValue {
  return useContext(LenisContext);
}
