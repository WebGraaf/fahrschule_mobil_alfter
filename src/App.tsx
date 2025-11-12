import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Fuehrerscheine from './pages/Fuehrerscheine';
import KlasseB from './pages/KlasseB';
import Anmelden from './pages/Anmelden';
import UeberUns from './pages/UeberUns';
import Kontakt from './pages/Kontakt';
import Impressum from './pages/Impressum';
import NotFound from './pages/NotFound';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fuehrerscheine" element={<Fuehrerscheine />} />
          <Route path="/fuehrerscheine/klasse-b" element={<KlasseB />} />
          <Route path="/anmelden" element={<Anmelden />} />
          <Route path="/ueber-uns" element={<UeberUns />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
