import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Car } from 'lucide-react';
import { KlassenUebersichtGridSpotlight } from '../components/KlassenUebersichtGridSpotlight';

const Fuehrerscheine: React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>Führerscheinklassen - Fahrschule Mobil Inh. Sven Bergheim</title>
        <meta name="description" content="Informiere dich über alle Führerscheinklassen, die wir anbieten. Von Auto (Klasse B) über Motorrad (Klasse A) bis LKW (Klasse C) – finde die passende Ausbildung bei Fahrschule Mobil Inh. Sven Bergheim." />
        <meta name="keywords" content="Führerscheinklassen, Fahrschule, Klasse A, Klasse B, Klasse C, Klasse D, LKW-Führerschein, Motorradführerschein, Fahrschule Mobil, Sven Bergheim" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Führerscheinklassen - Fahrschule Mobil Inh. Sven Bergheim" />
        <meta property="og:description" content="Entdecke alle Führerscheinklassen bei Fahrschule Mobil Inh. Sven Bergheim und starte deine Ausbildung." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fahrschule-mobil.com/fuehrerscheine" />
        <meta property="og:image" content="https://fahrschule-mobil.com/default_images/Klasse_B_Default.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Führerscheinklassen - Fahrschule Mobil Inh. Sven Bergheim" />
        <meta name="twitter:description" content="Entdecke alle Führerscheinklassen bei Fahrschule Mobil Inh. Sven Bergheim und starte deine Ausbildung." />
        <meta name="twitter:image" content="https://fahrschule-mobil.com/default_images/Klasse_B_Default.webp" />
        <link rel="canonical" href="https://fahrschule-mobil.com/fuehrerscheine" />
      </Helmet>
      <KlassenUebersichtGridSpotlight
        features={[
          {
            icon: Car,
            title: 'Klasse B',
            description: 'Pkw bis 3,5 t zGG / max. 8 Sitzplätze + Anhänger ≤ 750 kg',
            link: '/fuehrerscheine/klasse-b#b',
            spotlightColor: 'primary',
          },
          {
            icon: Car,
            title: 'Klasse BF17',
            description: 'Begleitetes Fahren ab 17 (Klasse B unter Aufsicht bis 18 J.)',
            link: '/fuehrerscheine/klasse-b#bf17',
            spotlightColor: 'primary',
          },
          {
            icon: Car,
            title: 'Klasse B197',
            description: 'Automatik-Prüfung mit Schaltberechtigung',
            link: '/fuehrerscheine/klasse-b#b197',
            spotlightColor: 'primary',
          },
        ]}
      />
    </div>
  );
};

export default Fuehrerscheine;