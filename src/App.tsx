import React from 'react';
import { RouterProvider, useRouter } from './context/RouterContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';

// Route-level code splitting for secondary pages
const RankersPage = React.lazy(() => import('./pages/RankersPage').then((m) => ({ default: m.RankersPage })));
const VisionPage = React.lazy(() => import('./pages/VisionPage').then((m) => ({ default: m.VisionPage })));
const TeachersPage = React.lazy(() => import('./pages/TeachersPage').then((m) => ({ default: m.TeachersPage })));
const QueriesPage = React.lazy(() => import('./pages/QueriesPage').then((m) => ({ default: m.QueriesPage })));

import { WhatsAppFloatingButton } from './components/common/WhatsAppFloatingButton';
import { LenisProvider } from './motion/lenis/LenisProvider';

const PageContent: React.FC = () => {
  const { currentPath } = useRouter();

  // Page titles and meta tags are managed dynamically by <SeoHead /> in each page component

  // Route selector with Suspense for lazy secondary pages
  const renderCurrentPage = () => {
    switch (currentPath) {
      case '/rankers':
        return (
          <React.Suspense fallback={<div style={{ minHeight: '70vh' }} />}>
            <RankersPage />
          </React.Suspense>
        );
      case '/vision':
        return (
          <React.Suspense fallback={<div style={{ minHeight: '70vh' }} />}>
            <VisionPage />
          </React.Suspense>
        );
      case '/teachers':
        return (
          <React.Suspense fallback={<div style={{ minHeight: '70vh' }} />}>
            <TeachersPage />
          </React.Suspense>
        );
      case '/queries':
        return (
          <React.Suspense fallback={<div style={{ minHeight: '70vh' }} />}>
            <QueriesPage />
          </React.Suspense>
        );
      default:
        return <HomePage />;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%' }}>
      <Navbar />
      <main style={{ flex: '1 0 auto' }}>
        {renderCurrentPage()}
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
};

export function App() {
  return (
    <RouterProvider>
      <LenisProvider>
        <PageContent />
      </LenisProvider>
    </RouterProvider>
  );
}

export default App;
