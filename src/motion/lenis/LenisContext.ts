import { createContext } from 'react';
import type Lenis from 'lenis';

export interface LenisContextValue {
  lenis: Lenis | null;
  scrollTo: (
    target: number | string | HTMLElement,
    options?: Parameters<Lenis['scrollTo']>[1]
  ) => void;
}

export const LenisContext = createContext<LenisContextValue>({
  lenis: null,
  scrollTo: () => {},
});

let globalLenisInstance: Lenis | null = null;

export const setGlobalLenis = (instance: Lenis | null) => {
  globalLenisInstance = instance;
};

export const getLenis = (): Lenis | null => globalLenisInstance;
