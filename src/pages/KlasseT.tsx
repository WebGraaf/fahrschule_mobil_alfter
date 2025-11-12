import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Section } from '../components/LayoutComponents';
import { useScrollReveal } from '../hooks/useScrollReveal';

const KlasseT: React.FC = () => {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollReveal();

  return (
    <div className="bg-page-bg">
      <Helmet>
        <title>Führerschein Klasse T - Fahrschule Mobil Inh. Sven Bergheim</title>
        <meta name="description" content="Fahrschule Mobil Inh. Sven Bergheim in Alfter bietet Führerscheine für Pkw an." />
        <meta name="robots" content="index, follow" />
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
              Land- und Forstwirtschaftliche Führerscheine
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


export default KlasseT;