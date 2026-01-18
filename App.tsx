
import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Reports from './pages/Reports';
import Publications from './pages/Publications';
import PublicationDetail from './pages/PublicationDetail';
import ReportForm from './pages/ReportForm';
import Contact from './pages/Contact';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profil" element={<Profile />} />
          <Route path="/laporan" element={<Reports />} />
          <Route path="/publikasi" element={<Publications />} />
          <Route path="/publikasi/:id" element={<PublicationDetail />} />
          <Route path="/lapor-aman" element={<ReportForm />} />
          <Route path="/kontak" element={<Contact />} />
          {/* Default fallback */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
