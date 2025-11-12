import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Section } from '../components/LayoutComponents';
import { TeamBilder } from '../components/TeamBilder';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LogoDefault = '/default_images/logo_default.webp';
const PlatzhalterGruppenbildTeam = '/default_images/Platzhalter_Gruppenbild_Team.webp';
const PlatzhalterFahrschule = '/default_images/Platzhalter_Fahrschule.webp';
const PlatzhalterTeammitglied = '/default_images/Platzhalter_Teammitglied.webp';

const SplitMediaTextCopy: React.FC<{
  imageSrc: string;
  imageAlt?: string;
  title: string;
  description: string;
  imagePosition?: 'left' | 'right';
  variant?: 'default' | 'muted' | 'outline';
  className?: string;
}> = ({
  imageSrc,
  imageAlt = '',
  title,
  description,
  imagePosition = 'left',
  variant = 'default',
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(containerRef.current,
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const variantClasses = {
    default: 'bg-card-bg border border-card-border',
    muted: 'bg-card-bg border border-card-border',
    outline: 'bg-card-bg border border-card-border',
  };

  return (
    <div
      ref={containerRef}
      className={`rounded-xl overflow-hidden py-0 px-0 ${variantClasses[variant]} ${className}`}
    >
      <div
        className={`flex flex-col md:flex-row gap-8 ${
          imagePosition === 'right' ? 'md:flex-row-reverse' : ''
        }`}
      >
        <div className="md:w-1/2">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="md:w-1/2 flex flex-col justify-center p-8 text-left">
          <h3 className="text-3xl font-bold text-text-heading mb-4">{title}</h3>
          <p className="text-text-body leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

const UeberUns: React.FC = () => {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { elementRef: teamHeaderRef, isVisible: teamHeaderVisible } = useScrollReveal();

  const teamMembers1 = [
    {
      imageSrc: '/kunde_bilder_download/Fahrlehrer_Sven_Bergheim_2.webp',
      imageAlt: 'Sven Bergheim - Inhaber',
      title: 'Sven Bergheim',
      description: 'Inhaber',
    },
  ];

  return (
    <div className="bg-page-bg">
      <Helmet>
        <title>Über Uns - Fahrschule Mobil Inh. Sven Bergheim</title>
        <meta name="description" content="Lerne das Team und die Geschichte von Fahrschule Mobil Inh. Sven Bergheim kennen. Erfahre mehr über unsere Mission, unsere Werte und warum wir die richtige Wahl für deine Fahrausbildung in Alfter sind." />
        <meta name="keywords" content="Über uns, Fahrschule, Team, Geschichte, Mission, Werte, Fahrschule Mobil, Sven Bergheim, Alfter" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Über Uns - Fahrschule Mobil Inh. Sven Bergheim" />
        <meta property="og:description" content="Wir sind Fahrschule Mobil Inh. Sven Bergheim – lerne uns und unsere Philosophie kennen." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://default-seite-vorlage.vercel.app/ueber-uns" />
        <meta property="og:image" content="https://default-seite-vorlage.vercel.app/default_images/Platzhalter_Gruppenbild_Team.webp" />
        <link rel="canonical" href="https://default-seite-vorlage.vercel.app/ueber-uns" />
      </Helmet>
      <Section background="card-bg" padding="xl">
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
              Über uns
            </h1>
            <p className="text-lg text-text-body leading-relaxed mb-4">
              Entdecke die Fahrschule Mobil in Alfter, wo dein Weg zum Führerschein beginnt. Wir bieten eine persönliche und moderne Fahrausbildung, die dich sicher auf die Straße bringt.
            </p>
            <p className="text-lg text-text-body leading-relaxed">
              Mit erfahrenen Fahrlehrern und einer freundlichen Atmosphäre machen wir das Lernen zu einem positiven Erlebnis.
            </p>
          </div>
        </Container>
      </Section>

      <Section background="page-bg" padding="lg">
        <Container>
          <SplitMediaTextCopy
            imageSrc={LogoDefault}
            imageAlt="Unsere Mission"
            title="Unsere Mission"
            description="Unsere Mission ist es, jeden Fahrschüler zu einem sicheren und selbstbewussten Fahrer zu machen. Mit erfahrenen Lehrern und modernen Methoden unterstützen wir dich auf deinem Weg zur Mobilität."
            imagePosition="left"
            variant="muted"
          />
        </Container>
      </Section>

      <Section background="page-bg" padding="lg">
        <Container>
          <SplitMediaTextCopy
            imageSrc="/kunde_bilder_download/Fahrschule_Bergheim_von_innen.webp"
            imageAlt="Unsere Philosophie"
            title="Unsere Philosophie"
            description="Bei Fahrschule Mobil legen wir Wert auf eine freundliche und individuelle Betreuung. Unsere Philosophie basiert auf Vertrauen, Geduld und praxisnaher Ausbildung, um dir den besten Start ins Autofahren zu ermöglichen."
            imagePosition="right"
            variant="outline"
          />
        </Container>
      </Section>

      <Section background="page-bg" padding="xl">
        <Container>
          <div
            ref={teamHeaderRef as React.RefObject<HTMLDivElement>}
            className="text-center mb-12"
            style={{
              opacity: teamHeaderVisible ? 1 : 0,
              transform: teamHeaderVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
            }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-4">
              Unser Team
            </h2>
            <p className="text-lg text-text-body max-w-2xl mx-auto">
              Lerne die Menschen kennen, die dich auf deinem Weg zum Führerschein begleiten. Unser Team besteht aus erfahrenen, geduldigen und freundlichen Fahrlehrern.
            </p>
          </div>

          <div className="space-y-8">
            <TeamBilder teams={teamMembers1} variant="default" />
          </div>
        </Container>
      </Section>

      <Section background="card-bg" padding="lg">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-text-heading mb-4">
              Werde Teil unserer Familie
            </h2>
            <p className="text-lg text-text-body mb-8">
              Tausende zufriedene Fahrschüler haben bereits bei uns ihren Führerschein gemacht. Jetzt bist du an der Reihe! Melde dich noch heute an und starte deine Fahrt in die Zukunft.
            </p>
            <a
              href="/anmelden"
              className="inline-block bg-btn-solid-bg text-btn-solid-fg px-8 py-4 rounded-lg font-semibold hover:bg-btn-solid-hover transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Jetzt anmelden
            </a>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default UeberUns;
