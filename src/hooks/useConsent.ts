import { useState, useEffect, useCallback } from 'react';

const CONSENT_STORAGE_KEY = 'consent.v1';

type ConsentState = {
  externalMedia: boolean;
};

const getInitialState = (): ConsentState => {
  if (typeof window === 'undefined') {
    return { externalMedia: false };
  }
  try {
    const storedState = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (storedState) {
      return JSON.parse(storedState);
    }
  } catch (error) {
    console.error('Error reading consent state from localStorage', error);
  }
  return { externalMedia: false };
};

export const useConsent = () => {
  const [consent, setConsent] = useState<ConsentState>(getInitialState);

  useEffect(() => {
    setConsent(getInitialState());
  }, []);

  const updateConsent = useCallback((newState: Partial<ConsentState>) => {
    setConsent(prevState => {
      const updatedState = { ...prevState, ...newState };
      try {
        window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(updatedState));
      } catch (error) {
        console.error('Error writing consent state to localStorage', error);
      }
      return updatedState;
    });
  }, []);

  return { consent, updateConsent };
};