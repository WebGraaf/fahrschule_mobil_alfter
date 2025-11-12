import React from 'react';
import { Helmet } from 'react-helmet-async';
import { KlassenUebersicht } from '../components/KlassenUebersicht';

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
        <meta property="og:url" content="https://default-seite-vorlage.vercel.app/fuehrerscheine" />
        <meta property="og:image" content="https://default-seite-vorlage.vercel.app/default_images/Klasse_B_Default.webp" />
        <link rel="canonical" href="https://default-seite-vorlage.vercel.app/fuehrerscheine" />
      </Helmet>
      <KlassenUebersicht
        tabs={[
          {
            label: 'Klasse B',
            title: 'Führerschein Klasse B',
            content: 'Die Klasse B berechtigt zum Führen von Kraftfahrzeugen mit einer zulässigen Gesamtmasse von nicht mehr als 3.500 kg und nicht mehr als 8 Sitzplätzen außer dem Fahrersitz. Dazu gehören PKW, Wohnmobile und leichte LKW.',
            link: '/fuehrerscheine/klasse-b',
            subclasses: [
              { code: 'BF17', description: 'Begleitetes Fahren ab 17 (Klasse B unter Aufsicht bis 18 J.)' },
              { code: 'B', description: 'Pkw bis 3,5 t zGG / max. 8 Sitzplätze + Anhänger ≤ 750 kg' }
            ]
          }
        ]}
      />
    </div>
  );
};

export default Fuehrerscheine;