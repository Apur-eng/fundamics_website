import React, { createContext, useContext, useState, useEffect } from 'react';

interface RouterContextType {
  currentPath: string;
  navigate: (path: string) => void;
}

const RouterContext = createContext<RouterContextType>({
  currentPath: '/',
  navigate: () => {},
});

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    if (path.startsWith('#') || path.startsWith('http') || path.startsWith('tel:') || path.startsWith('mailto:')) {
      window.location.href = path;
      return;
    }
    if (path.startsWith('/#')) {
      const hash = path.substring(1);
      if (window.location.pathname === '/' || window.location.pathname === '') {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          return;
        }
      } else {
        window.history.pushState({}, '', '/');
        setCurrentPath('/');
        setTimeout(() => {
          const el = document.querySelector(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
        return;
      }
    }
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = () => useContext(RouterContext);

export const Link: React.FC<{
  href: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  onClick?: () => void;
  target?: string;
  rel?: string;
}> = ({ href, className, style, children, onClick, target, rel }) => {
  const { navigate } = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (target === '_blank' || href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:')) {
      return; // normal browser behavior
    }
    e.preventDefault();
    if (onClick) onClick();
    navigate(href);
  };

  return (
    <a href={href} className={className} style={style} onClick={handleClick} target={target} rel={rel}>
      {children}
    </a>
  );
};
