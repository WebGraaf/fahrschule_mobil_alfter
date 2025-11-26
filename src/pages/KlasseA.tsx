import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Section } from '../components/LayoutComponents';
import { useScrollReveal } from '../hooks/useScrollReveal';

const KlasseA: React.FC = () => {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollReveal();

  return (
    <div className="bg-page-bg">
      <Helmet>
        <title>Führerschein Klasse A - Fahrschule Mobil Inh. Sven Bergheim</title>
        <meta name="description" content="Fahrschule Mobil Inh. Sven Bergheim in Alfter bietet Führerscheine für Motorräder (Klasse A) an. Professionelle Ausbildung mit erfahrenen Fahrlehrern." />
        <meta name="keywords" content="Führerschein Klasse A, Motorradführerschein, Fahrschule, Fahrausbildung, Fahrschule Mobil, Sven Bergheim, Alfter" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Führerschein Klasse A - Fahrschule Mobil Inh. Sven Bergheim" />
        <meta property="og:description" content="Starte deine Motorradausbildung bei Fahrschule Mobil Inh. Sven Bergheim. Sichere und professionelle Fahrausbildung in Alfter." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fahrschule-mobil.com/fuehrerscheine/klasse-a" />
        <meta property="og:image" content="https://fahrschule-mobil.com/default_images/Klasse_A_Default.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Führerschein Klasse A - Fahrschule Mobil Inh. Sven Bergheim" />
        <meta name="twitter:description" content="Starte deine Motorradausbildung bei Fahrschule Mobil Inh. Sven Bergheim. Sichere und professionelle Fahrausbildung in Alfter." />
        <meta name="twitter:image" content="https://fahrschule-mobil.com/default_images/Klasse_A_Default.webp" />
        <link rel="canonical" href="https://fahrschule-mobil.com/fuehrerscheine/klasse-a" />
      </Helmet>
      <Section background="card-bg" padding="xl" className="pb-0">
        <Container>
          <div
            ref={headerRef as React.RefObject<HTMLDivElement>}
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
            }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-text-heading text-center mb-6">
              Motorrad-Führerscheine
            </h1>
            <p className="text-lg text-text-body text-center max-w-3xl mx-auto leading-relaxed">
              Fahrschule Mobil Inh. Sven Bergheim in Alfter bietet Führerscheine für Pkw an.
            </p>
          </div>
        </Container>
      </Section>
    </div>
  );
};


export default KlasseA;
