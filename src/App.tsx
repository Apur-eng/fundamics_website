import React, { useEffect } from 'react';
import { RouterProvider, useRouter } from './context/RouterContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { RankersPage } from './pages/RankersPage';
import { VisionPage } from './pages/VisionPage';
import { TeachersPage } from './pages/TeachersPage';
import { QueriesPage } from './pages/QueriesPage';

const PageContent: React.FC = () => {
  const { currentPath } = useRouter();

  // Dynamic SEO Page Title & Meta based on current route
  useEffect(() => {
    switch (currentPath) {
      case '/rankers':
        document.title = 'Our Rankers | Fundemics Tutorials Lucknow';
        break;
      case '/vision':
        document.title = 'Our Vision & Philosophy | Fundemics Tutorials';
        break;
      case '/teachers':
        document.title = 'Meet the Teachers | Fundemics Tutorials Lucknow';
        break;
      case '/queries':
        document.title = 'Contact & Admissions Enquiry | Fundemics Tutorials';
        break;
      default:
        document.title = 'Fundemics Tutorials | Quality Education in Lucknow | Classes I–XII';
        break;
    }
  }, [currentPath]);

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
    </div>
  );
};

export function App() {
  return (
    <RouterProvider>
      <PageContent />
    </RouterProvider>
  );
}

export default App;
