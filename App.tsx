
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
import WorkDetail from './pages/WorkDetail';
import InspirationalFigures from './pages/InspirationalFigures';
import FigureDetail from './pages/FigureDetail';
import Partners from './pages/Partners';
import Agenda from './pages/Agenda';
import Policies from './pages/Policies';
import RecommendationForm from './pages/RecommendationForm';
import AgendaDetail from './pages/AgendaDetail';

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
          <Route path="/tokoh" element={<InspirationalFigures />} />
          <Route path="/tokoh/:id" element={<FigureDetail />} />
          <Route path="/tokoh/rekomendasi" element={<RecommendationForm />} />
          <Route path="/jaringan" element={<Partners />} />
          
          <Route path="/karya/:category" element={<WorkDetail />} />
          
          <Route path="/publikasi" element={<Publications />} />
          <Route path="/publikasi/:id" element={<PublicationDetail />} />
          <Route path="/laporan" element={<Reports />} />
          
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/agenda/:id" element={<AgendaDetail />} />
          <Route path="/etika" element={<Policies />} />
          
          <Route path="/lapor-aman" element={<ReportForm />} />
          <Route path="/kontak" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
