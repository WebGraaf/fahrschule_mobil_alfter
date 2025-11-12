import { useState, useEffect } from 'react';
import { useConsent } from '../hooks/useConsent';

type ConsentBannerProps = {
  isVisible: boolean;
  onAccept: () => void;
  onDecline: () => void;
  onOpenSettings: () => void;
};

export const ConsentBanner = ({ isVisible, onAccept, onDecline, onOpenSettings }: ConsentBannerProps) => {
  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card-bg p-4 shadow-lg border-t border-card-border">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <p className="text-text-body mb-4 md:mb-0 md:mr-4">
          Diese Website verwendet Google Maps, um Kartenmaterial anzuzeigen. Wenn Sie zustimmen, werden personenbezogene Daten (z.B. Ihre IP-Adresse) an Google in die USA übertragen.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={onDecline}
            className="px-4 py-2 rounded-md bg-secondary-200 text-secondary-800 hover:bg-secondary-300"
          >
            Nur Notwendige
          </button>
          <button
            onClick={onOpenSettings}
            className="px-4 py-2 rounded-md text-btn-outline-fg border border-btn-outline-border hover:bg-gray-100"
          >
            Anpassen
          </button>
          <button
            onClick={onAccept}
            className="px-4 py-2 rounded-md bg-btn-solid-bg text-btn-solid-fg hover:bg-btn-solid-hover"
          >
            Alle Akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
};