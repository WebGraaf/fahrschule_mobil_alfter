import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ConsentBanner } from './ConsentBanner';
import { ConsentSettings } from './ConsentSettings';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
};
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

import { useConsent } from '../hooks/useConsent';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const { consent, updateConsent } = useConsent();
  const [bannerVisible, setBannerVisible] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const consentGiven = localStorage.getItem('consent.v1');
      if (!consentGiven) {
        setBannerVisible(true);
      }
    }
  }, []);

  const handleAccept = () => {
    updateConsent({ externalMedia: true });
    setBannerVisible(false);
  };

  const handleDecline = () => {
    updateConsent({ externalMedia: false });
    setBannerVisible(false);
  };

  const handleOpenSettings = () => {
    setIsSettingsOpen(true);
  };
  
  const handleCloseSettings = () => {
    setIsSettingsOpen(false);
    if (!localStorage.getItem('consent.v1')) {
      setBannerVisible(true);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-page-bg">
      <Header />
      <main className="flex-grow pt-20">{children}</main>
      <footer className="bg-secondary-800 text-white py-8">
        <Container>
          <div className="flex justify-between items-center">
            <p>&copy; 2025 Führerschein Website</p>
            <div className="space-x-4">
              <button onClick={() => setIsSettingsOpen(true)} className="hover:text-primary-300">Privatsphäre</button>
              <Link to="/impressum" className="hover:text-primary-300">Impressum</Link>
            </div>
          </div>
        </Container>
      </footer>
      <ConsentBanner
        isVisible={bannerVisible}
        onAccept={handleAccept}
        onDecline={handleDecline}
        onOpenSettings={handleOpenSettings}
      />
      <ConsentSettings isOpen={isSettingsOpen} onClose={handleCloseSettings} />
    </div>
  );
};

export default Layout;