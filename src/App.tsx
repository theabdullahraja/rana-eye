import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import DiseaseDetailPage from './pages/DiseaseDetailPage/DiseaseDetailPage';
import HomePage from './pages/HomePage/HomePage';

function HashScrollHandler() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const id = decodeURIComponent(location.hash.slice(1));
    const target = document.getElementById(id);

    if (!target) {
      return;
    }

    const navbar = document.querySelector('.navbar') as HTMLElement | null;
    const navHeight = navbar?.getBoundingClientRect().height ?? 88;
    const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 8;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.requestAnimationFrame(() => {
      window.scrollTo({ top, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    });
  }, [location.hash, location.pathname]);

  return null;
}

function App() {
  return (
    <div className="flex flex-col min-h-dvh">
      <Navbar />
      <main className="flex-1 pt-16 lg:pt-20">
        <HashScrollHandler />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/diseases/:slug" element={<DiseaseDetailPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
