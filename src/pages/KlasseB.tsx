import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Section } from '../components/LayoutComponents';
import { KlassenDetailCard } from '../components/KlassenDetailCard';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Car, Scale, Users, Truck, Link, CheckCircle, User, FileText, Calendar } from 'lucide-react';

const KlasseBImage = '/default_images/Klasse_B_Default.webp';
const KlasseBF17Image = '/default_images/Klasse_BF17_Default.webp';
const KlasseB197Image = '/default_images/Klasse_B197_Default.webp';

const KlasseB: React.FC = () => {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollReveal();

  useEffect(() => {
    if (window.location.hash) {
      const element = document.getElementById(window.location.hash.substring(1));
      if (element) {
        const headerHeight = document.querySelector('header')?.offsetHeight || 0;
        window.scrollTo({
          top: element.offsetTop - headerHeight - 20,
          behavior: 'smooth'
        });
      }
    }
  }, []);

  return (
    <div className="bg-page-bg">
      <Helmet>
        <title>Führerschein Klasse B, BF17 und B197 - Fahrschule Mobil Inh. Sven Bergheim</title>
        <meta name="description" content="Erhalte deinen Führerschein Klasse B, BF17 oder B197 für Pkw bei Fahrschule Mobil Inh. Sven Bergheim in Alfter. Professionelle Ausbildung mit erfahrenen Fahrlehrern." />
        <meta name="keywords" content="Führerschein Klasse B, BF17, B197, Pkw-Führerschein, Fahrschule Mobil, Sven Bergheim, Alfter, Fahrausbildung" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Führerschein Klasse B, BF17 und B197 - Fahrschule Mobil Inh. Sven Bergheim" />
        <meta property="og:description" content="Starte deine Ausbildung für Klasse B, BF17 oder B197 bei Fahrschule Mobil Inh. Sven Bergheim. Sichere und individuelle Fahrausbildung in Alfter." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fahrschule-mobil.com/fuehrerscheine/klasse-b" />
        <meta property="og:image" content="https://fahrschule-mobil.com/default_images/Klasse_B_Default.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Führerschein Klasse B, BF17 und B197 - Fahrschule Mobil Inh. Sven Bergheim" />
        <meta name="twitter:description" content="Starte deine Ausbildung für Klasse B, BF17 oder B197 bei Fahrschule Mobil Inh. Sven Bergheim. Sichere und individuelle Fahrausbildung in Alfter." />
        <meta name="twitter:image" content="https://fahrschule-mobil.com/default_images/Klasse_B_Default.webp" />
        <link rel="canonical" href="https://fahrschule-mobil.com/fuehrerscheine/klasse-b" />
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
              Pkw-Führerscheine
            </h1>
            <p className="text-lg text-text-body text-center max-w-3xl mx-auto leading-relaxed mb-4">
              Entdecke die Freiheit auf vier Rädern! Bei uns erhältst du eine professionelle Ausbildung für die Führerscheinklasse B, BF17 und B197.
            </p>
            <p className="text-lg text-text-body text-center max-w-3xl mx-auto leading-relaxed">
              Wir begleiten dich auf deinem Weg zum Führerschein mit erfahrenen Fahrlehrern, modernster Ausstattung und individueller Betreuung.
            </p>
          </div>
        </Container>
      </Section>

      <Section background="page-bg" padding="lg">
        <Container>
          <div id="b">
            <KlassenDetailCard
              imageSrc={KlasseBImage}
              imageAlt="Klasse B - Standard-Pkw-Führerschein"
              title="Klasse B"
              description="Der Standard-Pkw-Führerschein. Du darfst Pkw und leichte Transporter bis 3.500 kg zGG fahren – mit bis zu 8 Sitzplätzen zusätzlich zum Fahrer. Ideal für Alltag, Job und Urlaub."
              restrictions={[
                'Fahrzeug: Kfz bis 3.500 kg zGG',
                'Anhänger: bis 750 kg zGG; darüber, wenn Zuggesamtmasse ≤ 3.500 kg',
                'Sitzplätze: maximal 8 plus Fahrersitz',
                'Erste Fahrerlaubnis: Probezeit'
              ]}
              imagePosition="left"
              variant="default"
            />
          </div>
        </Container>
      </Section>

      <Section background="page-bg" padding="sm">
        <Container>
          <div className="bg-card-bg rounded-xl p-8 border border-card-border">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <InfoCard
                icon={<Car className="w-8 h-8 text-primary-500" />}
                title="Fahrzeugklasse"
                description="Pkw bis 3.500 kg zGG"
              />
              <InfoCard
                icon={<Scale className="w-8 h-8 text-primary-500" />}
                title="Gesamtmasse"
                description="Zuggesamtmasse max. 3.500 kg (mit Anhänger >750 kg)"
              />
              <InfoCard
                icon={<Users className="w-8 h-8 text-primary-500" />}
                title="Sitzplätze"
                description="8 Mitfahrer + Fahrer"
              />
              <InfoCard
                icon={<Truck className="w-8 h-8 text-primary-500" />}
                title="Anhänger klein"
                description="Bis 750 kg ohne Zusatz"
              />
            </div>
          </div>
        </Container>
      </Section>


      <Section background="page-bg" padding="lg">
        <Container>
          <div id="bf17">
            <KlassenDetailCard
              imageSrc={KlasseBF17Image}
              imageAlt="Klasse BF17 - Begleitetes Fahren ab 17"
              title="Klasse BF17 (Begleitetes Fahren ab 17)"
              description="Wie Klasse B – nur ab 17. Du fährst mit eingetragenen Begleitpersonen und sammelst sichere Praxis bis zum 18. Geburtstag."
              restrictions={[
                'Mindestalter: 17 Jahre',
                'Fahrzeug: wie Klasse B',
                'Fahren nur mit eingetragener Begleitperson (Begleitschein mitführen)',
                'Null Promille für Fahranfänger; Auslandsregelungen beachten'
              ]}
              imagePosition="left"
              variant="default"
            />
          </div>
        </Container>
      </Section>

      <Section background="page-bg" padding="sm">
        <Container>
          <div className="bg-card-bg rounded-xl p-8 border border-card-border">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <InfoCard
                icon={<Car className="w-8 h-8 text-primary-500" />}
                title="Fahrzeug"
                description="Pkw bis 3.500 kg zGG"
              />
              <InfoCard
                icon={<User className="w-8 h-8 text-primary-500" />}
                title="Begleitung"
                description="Nur mit eingetragener Begleitperson"
              />
              <InfoCard
                icon={<FileText className="w-8 h-8 text-primary-500" />}
                title="Begleitschein"
                description="Bescheinigung muss mitgeführt werden"
              />
              <InfoCard
                icon={<Calendar className="w-8 h-8 text-primary-500" />}
                title="Alter"
                description="Start ab 17 Jahren"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section background="page-bg" padding="lg">
        <Container>
          <div id="b197">
            <KlassenDetailCard
              imageSrc={KlasseB197Image}
              imageAlt="Klasse B197 - Automatik-Prüfung mit Schaltberechtigung"
              title="Klasse B197 (Automatik-Prüfung)"
              description="Die moderne Ausbildung, die Automatik und Schaltung verbindet. Du machst die Prüfung auf einem Automatikfahrzeug und darfst trotzdem Schaltwagen fahren."
              restrictions={[
                'Kombination: Pkw-Ausbildung auf Automatik und Schalter',
                'Prüfung: Praktische Prüfung auf Automatikfahrzeug',
                'Voraussetzung: Mind. 10 Fahrstunden auf Schaltwagen',
                'Eintrag: Schlüsselzahl 197 zu Klasse B'
              ]}
              imagePosition="left"
              variant="default"
            />
          </div>
        </Container>
      </Section>

      <Section background="page-bg" padding="sm">
        <Container>
          <div className="bg-card-bg rounded-xl p-8 border border-card-border">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <InfoCard
                icon={<Car className="w-8 h-8 text-primary-500" />}
                title="Kombination"
                description="Automatik und Schaltung"
              />
              <InfoCard
                icon={<Car className="w-8 h-8 text-primary-500" />}
                title="Prüfung"
                description="Auf Automatikfahrzeug"
              />
              <InfoCard
                icon={<Calendar className="w-8 h-8 text-primary-500" />}
                title="Fahrstunden"
                description="Mind. 10 auf Schaltwagen"
              />
              <InfoCard
                icon={<FileText className="w-8 h-8 text-primary-500" />}
                title="Eintrag"
                description="Schlüsselzahl 197 zu Klasse B"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section background="card-bg" padding="lg">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-text-heading mb-4">
              Bereit durchzustarten?
            </h2>
            <p className="text-lg text-text-body mb-8">
              Für Klasse B, BF17 oder B197 – wir sind für dich da! Melde dich noch heute an und starte deine Pkw-Ausbildung bei uns.
            </p>
            <a
              href="/anmelden"
              className="inline-block bg-btn-solid-bg text-btn-solid-fg px-8 py-4 rounded-lg font-semibold hover:bg-btn-solid-hover transition-colors duration-300"
            >
              Jetzt anmelden
            </a>
          </div>
        </Container>
      </Section>
    </div>
  );
};

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, description }) => {
  const { elementRef, isVisible } = useScrollReveal();

  return (
    <div
      ref={elementRef as React.RefObject<HTMLDivElement>}
      className="flex flex-col items-center text-center p-4"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
      }}
    >
      <div className="mb-3">{icon}</div>
      <h4 className="text-lg font-semibold text-text-heading mb-2">{title}</h4>
      <p className="text-text-body text-sm">{description}</p>
    </div>
  );
};

export default KlasseB;