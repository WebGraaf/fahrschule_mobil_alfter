import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Car } from 'lucide-react';
import { HeroStartseite } from '../components/HeroStartseite';
import { TextGalerieStapel } from '../components/TextGalerieStapel';
import { KlassenUebersichtGridSpotlight } from '../components/KlassenUebersichtGridSpotlight';
import VorherNacherBildVergleich from '../components/VorherNacherBildVergleich';
import { StandorteUebersicht } from '../components/StandorteUebersicht';
import BannerAnmelden from '../components/BannerAnmelden';
import { SplitMediaText } from '../components/SplitMediaText';
import { SplitMediaTextInvert } from '../components/SplitMediaTextInvert';
import { FAQ } from '../components/FAQ';

const Home: React.FC = () => {
  // Daten für TextGalerieStapel
  const galleryImages = [
    {
      src: '/kunde_bilder_download/Fahrschulwagen_Sven_Bergheim.webp',
      alt: 'Fahrschulwagen Sven Bergheim'
    },
    {
      src: '/kunde_bilder_download/Fahrschule_Bergheim_von_aussen.webp',
      alt: 'Fahrschule von außen'
    },
    {
      src: '/kunde_bilder_download/Fahrschule_Bergheim_von_innen.webp',
      alt: 'Fahrschule von innen'
    }
  ];

  // Daten für StandorteUebersicht
  const locations = [
    {
      label: 'Alfter',
      address: 'Pelzstraße 14, 53347 Alfter',
      phone: ['02222 928693', '0163 8880180'],
      hours: 'Öffnungszeiten Büro\nMo 18:30–20:30\nDo 18:30–20:30\nSa 12:30–14:30',
      mapSrc: 'https://maps.google.com/maps?q=Pelzstraße%2014,%2053347%20Alfter&t=&z=15&ie=UTF8&iwloc=&output=embed'
    }
  ];

  // Daten für FAQ
  const faqs = [
    {
      question: 'Wie melde ich mich für den Führerschein an?',
      answer: 'Sie können sich bequem online über unsere Website anmelden oder persönlich bei uns vorbeikommen. Wir beraten Sie gerne zu den nächsten Schritten.'
    },
    {
      question: 'Welche Voraussetzungen brauche ich für Klasse B?',
      answer: 'Sie müssen mindestens 17 Jahre alt sein, einen gültigen Personalausweis oder Reisepass haben und die theoretische Prüfung bestehen.'
    },
    {
      question: 'Wie läuft die praktische Ausbildung ab?',
      answer: 'Die praktische Ausbildung umfasst Fahrstunden mit unserem erfahrenen Fahrlehrer. Wir legen Wert auf individuelle Betreuung und sicheres Fahren.'
    },
    {
      question: 'Bieten Sie auch Theorieunterricht an?',
      answer: 'Ja, wir bieten umfassenden Theorieunterricht an, um Sie optimal auf die theoretische Prüfung vorzubereiten.'
    }
  ];

  return (
    <div>
      <Helmet>
        <title>Fahrschule Mobil Inh. Sven Bergheim - Startseite</title>
        <meta name="description" content="Willkommen bei Fahrschule Mobil Inh. Sven Bergheim. Wir machen dich mobil! Erfahre mehr über unsere Führerscheinkurse, unseren modernen Fuhrpark und melde dich noch heute an." />
        <meta name="keywords" content="Fahrschule, Führerschein, Fahrausbildung, Auto, Fahrschule Mobil, Sven Bergheim, Alfter" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Fahrschule Mobil - Sicher zum Führerschein" />
        <meta property="og:description" content="Starte deine Fahrausbildung bei Fahrschule Mobil Inh. Sven Bergheim. Moderne Fahrzeuge, erfahrene Fahrlehrer und hohe Erfolgsquoten." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://default-seite-vorlage.vercel.app/" />
        <meta property="og:image" content="https://default-seite-vorlage.vercel.app/kunde_bilder_download/Fahrschule_Bergheim_von_aussen.webp" />
        <link rel="canonical" href="https://default-seite-vorlage.vercel.app/" />
      </Helmet>
      <HeroStartseite
        title="Fahren lernen. Freiheit leben."
        subtitle="Fahrschule mobil"
        description="Willkommen bei Fahrschule Mobil – Ihrem vertrauensvollen Partner für eine sichere und moderne Fahrausbildung in Alfter."
        buttonText="Jetzt anmelden"
        buttonLink="/anmelden"
        logoSrc="/default_images/logo_default.webp"
        logoAlt="Fahrschule Logo"
      />

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <TextGalerieStapel
            title="Unsere Fahrschule"
            description="Bei Fahrschule Mobil erwartet Sie eine moderne und professionelle Fahrausbildung. Unser erfahrener Inhaber Sven Bergheim und sein Team sorgen für eine individuelle Betreuung. In unseren hellen und einladenden Räumlichkeiten in Alfter finden Sie die ideale Umgebung für Ihren Lernprozess. Wir legen Wert auf Sicherheit und Qualität in jeder Fahrstunde. Lassen Sie sich von unserer Leidenschaft für das Fahren anstecken."
            images={galleryImages}
            imagePosition="left"
          />
        </div>
      </section>

      <KlassenUebersichtGridSpotlight
        features={[
          {
            icon: Car,
            title: 'Klasse B',
            description: 'Führerschein für PKW bis 3,5 Tonnen. Der beliebteste Führerschein.',
            link: '/fuehrerscheine/klasse-b',
            spotlightColor: 'primary',
          },
        ]}
      />

      <VorherNacherBildVergleich
        beforeImage="/kunde_bilder_download/Fahrschule_Bergheim_von_aussen.webp"
        afterImage="/kunde_bilder_download/Fahrschule_Bergheim_von_innen.webp"
        beforeLabel=""
        afterLabel=""
      />

      <StandorteUebersicht
        title="Unser Standort"
        subtitle=""
        locations={locations}
      />

      <BannerAnmelden />

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <SplitMediaText
          imageSrc="/kunde_bilder_download/Fahrlehrer_Sven_Bergheim_2.webp"
          imageAlt="Fahrlehrer Sven Bergheim"
          title="Professionelle Fahrausbildung"
          description="Unser erfahrener Inhaber Sven Bergheim und sein Team bieten Ihnen eine professionelle Fahrausbildung. Mit modernen Methoden und individueller Betreuung führen wir Sie sicher zum Führerschein. Vertrauen Sie auf unsere langjährige Erfahrung und Expertise."
          imagePosition="left"
        />
      </div>

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <SplitMediaTextInvert
          imageSrc="/kunde_bilder_download/Fahrschulwagen_Sven_Bergheim.webp"
          imageAlt="Moderner Fuhrpark"
          title="Topmoderner Fuhrpark"
          description="Unser Fahrzeugpark umfasst moderne und sichere Fahrzeuge für Ihre Ausbildung. Alle Fahrzeuge sind perfekt gewartet und entsprechen den höchsten Sicherheitsstandards. Erfahren Sie mehr über unsere topmoderne Ausstattung."
          imagePosition="right"
        />
      </div>

      <FAQ
        title="Häufig gestellte Fragen"
        faqs={faqs}
      />

      <BannerAnmelden />
    </div>
  );
};

export default Home;
