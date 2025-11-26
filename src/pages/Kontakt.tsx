import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Section } from '../components/LayoutComponents';
import { Kontaktinformationen } from '../components/Kontaktinformationen';
import { StandorteUebersicht } from '../components/StandorteUebersicht';
import { useScrollReveal } from '../hooks/useScrollReveal';

const LogoDefault = '/default_images/logo_default.webp';

const BannerAnmeldenCopy: React.FC = () => {
  const { elementRef, isVisible } = useScrollReveal();

  return (
    <section
      ref={elementRef as React.RefObject<HTMLElement>}
      className="py-8"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
      }}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <div className="bg-card-bg rounded-2xl p-8 md:p-12 text-card-fg border border-card-border shadow-lg">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1 lg:w-7/10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-4">
                Bereit für deinen Führerschein?
              </h2>
              <p className="text-lg text-text-body mb-8">
                Starte jetzt deine Fahrschulausbildung bei uns. Professionelle Ausbildung, flexible Termine und erfahrene Fahrlehrer. Wir warten auf dich!
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/anmelden"
                  className="px-8 py-4 bg-btn-solid-bg text-btn-solid-fg rounded-lg font-semibold hover:bg-btn-solid-hover transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Jetzt Anmelden
                </a>
              </div>
            </div>
            <div className="flex-shrink-0 lg:w-3/10 flex justify-center">
              <img
                src={LogoDefault}
                alt="Logo"
                className="max-w-full h-auto max-h-32"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Kontakt: React.FC = () => {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollReveal();

  // Daten für StandorteUebersicht - exakt von Startseite kopiert
  const locations = [
    {
      label: 'Alfter',
      address: 'Pelzstraße 14, 53347 Alfter',
      phone: ['0163 8880180'],
      hours: 'Öffnungszeiten Büro\nMo 18:30–20:30\nDo 18:30–20:30\nSa 12:30–14:30',
      mapSrc: 'https://maps.google.com/maps?q=Pelzstraße%2014,%2053347%20Alfter&t=&z=15&ie=UTF8&iwloc=&output=embed'
    }
  ];

  return (
    <div className="bg-page-bg">
      <Helmet>
        <title>Kontakt - Fahrschule Mobil Inh. Sven Bergheim</title>
        <meta name="description" content="Nimm Kontakt mit uns auf. Hier findest du unsere Adressen, Telefonnummern und Öffnungszeiten. Wir von Fahrschule Mobil Inh. Sven Bergheim freuen uns auf deine Nachricht." />
        <meta name="keywords" content="Kontakt, Fahrschule, Adresse, Telefon, Öffnungszeiten, Fahrschule Mobil, Sven Bergheim, Alfter" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Kontakt - Fahrschule Mobil Inh. Sven Bergheim" />
        <meta property="og:description" content="Fragen zur Ausbildung oder Anmeldung? Kontaktiere uns – wir helfen dir gerne weiter." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fahrschule-mobil.com/kontakt" />
        <meta property="og:image" content="https://fahrschule-mobil.com/kunde_bilder_download/Fahrschule_Bergheim_von_aussen.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kontakt - Fahrschule Mobil Inh. Sven Bergheim" />
        <meta name="twitter:description" content="Fragen zur Ausbildung oder Anmeldung? Kontaktiere uns – wir helfen dir gerne weiter." />
        <meta name="twitter:image" content="https://fahrschule-mobil.com/kunde_bilder_download/Fahrschule_Bergheim_von_aussen.webp" />
        <link rel="canonical" href="https://fahrschule-mobil.com/kontakt" />
      </Helmet>
      <Section background="card-bg" padding="" className="py-8 md:pt-12">
        <Container>
          <div
            ref={headerRef as React.RefObject<HTMLDivElement>}
            className="text-center max-w-3xl mx-auto"
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
            }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-text-heading mb-6">
              Kontaktiere uns
            </h1>
            <p className="text-lg text-text-body leading-relaxed mb-4">
              Du hast Fragen zu deiner Fahrausbildung oder möchtest dich anmelden? Wir sind für dich da! Ruf uns einfach an unter <a href="tel:+491638880180" className="text-primary-600 hover:underline">0163 8880180</a>.
            </p>
            <p className="text-lg text-text-body leading-relaxed mb-4">
              Besuche uns in unserer Fahrschule in Alfter: Pelzstraße 14, 53347 Alfter.
            </p>
            <p className="text-lg text-text-body leading-relaxed">
              Unsere Öffnungszeiten: Mo 18:30–20:30; Do 18:30–20:30; Sa 12:30–14:30 (Stand: November 2025). Wir freuen uns auf dich!
            </p>
          </div>
        </Container>
      </Section>

      <Section background="page-bg" padding="md">
        <Container>
          <Kontaktinformationen />
        </Container>
      </Section>

      <Section background="page-bg" padding="md">
        <Container>
          <StandorteUebersicht
            title="Unser Standort"
            subtitle=""
            locations={locations}
          />
        </Container>
      </Section>

      <Section background="page-bg" padding="md">
        <Container>
          <BannerAnmeldenCopy />
        </Container>
      </Section>
    </div>
  );
};

export default Kontakt;
