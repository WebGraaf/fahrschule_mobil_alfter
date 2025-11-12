import { useState, useEffect } from 'react';
import { useConsent } from '../hooks/useConsent';
import { Switch } from './ui/Switch';

type ConsentSettingsProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const ConsentSettings = ({ isOpen, onClose }: ConsentSettingsProps) => {
  const { consent, updateConsent } = useConsent();
  const [localConsent, setLocalConsent] = useState(consent.externalMedia);

  useEffect(() => {
    setLocalConsent(consent.externalMedia);
  }, [consent.externalMedia, isOpen]);

  const handleSave = () => {
    updateConsent({ externalMedia: localConsent });
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-overlay">
      <div className="bg-card-bg rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-2 text-text-heading">Datenschutzeinstellungen</h2>
        <p className="text-text-body mb-4">
          Hier können Sie anpassen, welche externen Dienste wir laden dürfen. Ihre Auswahl wird für zukünftige Besuche gespeichert.
        </p>
        <div className="flex items-center justify-between py-4 border-t border-b border-border-divider">
          <div>
            <label htmlFor="google-maps" className="font-semibold text-text-heading">
              Google Maps
            </label>
            <p className="text-sm text-text-muted">
              Erlaubt das Laden von interaktiven Karten von Google. Dabei werden Daten an Google-Server übertragen.
            </p>
          </div>
          <Switch
            id="google-maps"
            checked={localConsent}
            onCheckedChange={setLocalConsent}
          />
        </div>
        <div className="mt-6 flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md text-btn-outline-fg border border-btn-outline-border hover:bg-gray-100"
          >
            Abbrechen
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 rounded-md bg-btn-solid-bg text-btn-solid-fg hover:bg-btn-solid-hover"
          >
            Auswahl speichern
          </button>
        </div>
      </div>
    </div>
  );
};