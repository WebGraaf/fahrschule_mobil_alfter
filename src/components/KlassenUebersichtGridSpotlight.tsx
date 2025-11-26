import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Bike, Car, Truck, Bus, Tractor } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import KartenSpotlight from './KartenSpotlight';

gsap.registerPlugin(ScrollTrigger);

interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  link: string;
  spotlightColor?: 'primary' | 'secondary' | 'brand-500' | 'status-success' | 'status-warning' | 'status-error' | 'status-info';
}

interface KlassenUebersichtGridSpotlightProps {
  title?: string;
  features?: Feature[];
}

export const KlassenUebersichtGridSpotlight: React.FC<KlassenUebersichtGridSpotlightProps> = ({
  title = "Unsere Führerscheinklassen",
  features = [
    {
      icon: Bike,
      title: 'Klasse A',
      description: 'Führerschein für Krafträder und Leichtkrafträder. Ideal für Motorradfahrer.',
      link: '/fuehrerscheine/klasse-a',
      spotlightColor: 'primary',
    },
    {
      icon: Car,
      title: 'Klasse B',
      description: 'Führerschein für PKW bis 3,5 Tonnen. Der beliebteste Führerschein.',
      link: '/fuehrerscheine/klasse-b',
      spotlightColor: 'primary',
    },
    {
      icon: Truck,
      title: 'Klasse C',
      description: 'Führerschein für LKW über 3,5 Tonnen. Für Berufskraftfahrer.',
      link: '/fuehrerscheine/klasse-c',
      spotlightColor: 'primary',
    },
    {
      icon: Bus,
      title: 'Klasse D',
      description: 'Führerschein für Omnibusse. Für Busfahrer und Reiseunternehmen.',
      link: '/fuehrerscheine/klasse-d',
      spotlightColor: 'primary',
    },
    {
      icon: Tractor,
      title: 'Klasse L',
      description: 'Führerschein für land- und forstwirtschaftliche Maschinen.',
      link: '/fuehrerscheine/klasse-l',
      spotlightColor: 'primary',
    },
    {
      icon: Tractor,
      title: 'Klasse T',
      description: 'Führerschein für land- und forstwirtschaftliche Zugmaschinen.',
      link: '/fuehrerscheine/klasse-t',
      spotlightColor: 'primary',
    },
  ],
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title words with stagger
      gsap.fromTo(".title-word-spotlight",
        { opacity: 0, y: -20, rotationX: -90 },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate cards with stagger
      gsap.fromTo(cardsRef.current.filter(Boolean),
        {
          opacity: 0,
          y: 60,
          scale: 0.8,
          rotationY: -15
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationY: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Add hover animations for cards
      cardsRef.current.filter(Boolean).forEach((card) => {
        if (!card) return;

        const hoverTl = gsap.timeline({ paused: true });

        hoverTl.to(card, {
          y: -10,
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out"
        })
        .to(card.querySelector('.card-icon'), {
          scale: 1.2,
          rotation: 5,
          duration: 0.3,
          ease: "back.out(2)"
        }, 0);

        card.addEventListener('mouseenter', () => hoverTl.play());
        card.addEventListener('mouseleave', () => hoverTl.reverse());
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-12">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <h2 className="text-3xl font-bold text-heading mb-8 text-center">
          {title.split(' ').map((word, index) => (
            <span key={index} className="title-word-spotlight inline-block mr-2">
              {word}
            </span>
          ))}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-0 md:px-0">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className=""
            >
              <KartenSpotlight
                className="hover:bg-primary-50 hover:border-primary-500 transition-all duration-300 group flex flex-col h-full p-6"
                spotlightColor={feature.spotlightColor || 'primary'}
              >
                <div className="flex-grow">
                  <div className="card-icon bg-primary-50 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-primary-200">
                    <feature.icon className="w-7 h-7 text-primary-600" />
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="card-title text-xl font-bold text-heading group-hover:text-primary-600 transition-colors">{feature.title}</h3>
                  </div>
                  <p className="text-text-body mb-4">{feature.description}</p>
                </div>
                <Link
                  to={feature.link}
                  className="inline-block w-full px-4 py-2 bg-card text-primary-600 rounded-lg hover:bg-primary-500 hover:text-white hover:border-transparent border border-primary-500 transition-colors font-semibold mt-auto text-center"
                >
                  Mehr erfahren
                </Link>
              </KartenSpotlight>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};