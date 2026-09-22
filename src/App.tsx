import React from 'react';
import { RouterProvider, useRouter } from './context/RouterContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { RankersPage } from './pages/RankersPage';
import { VisionPage } from './pages/VisionPage';
import { TeachersPage } from './pages/TeachersPage';
import { QueriesPage } from './pages/QueriesPage';

import { WhatsAppFloatingButton } from './components/common/WhatsAppFloatingButton';
import { LenisProvider } from './motion/lenis/LenisProvider';

const PageContent: React.FC = () => {
  const { currentPath } = useRouter();

  // Page titles and meta tags are managed dynamically by <SeoHead /> in each page component

  // Route selector
  const renderCurrentPage = () => {
    switch (currentPath) {
      case '/rankers':
        return <RankersPage />;
      case '/vision':
        return <VisionPage />;
      case '/teachers':
        return <TeachersPage />;
      case '/queries':
        return <QueriesPage />;
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
