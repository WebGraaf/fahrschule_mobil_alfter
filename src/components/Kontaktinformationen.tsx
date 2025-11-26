import { Phone, Clock, MapPin } from 'lucide-react';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Kontaktinformationen() {
  const sectionRef = useRef<HTMLElement>(null);
  const contactRefs = useRef<HTMLDivElement[]>([]);

  const contactItems = [
    {
      icon: Phone,
      label: 'Telefon',
      value: '0163 8880180',
      color: 'primary'
    },
    {
      icon: Clock,
      label: 'Öffnungszeiten',
      value: 'Mo 18:30–20:30; Do 18:30–20:30; Sa 12:30–14:30 (Stand: November 2025)',
      color: 'primary'
    },
    {
      icon: MapPin,
      label: 'Adresse',
      value: 'Pelzstraße 14, 53347 Alfter',
      color: 'primary'
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate contact cards with stagger
      gsap.fromTo(contactRefs.current.filter(Boolean),
        { opacity: 0, y: 60, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Add hover effects for contact cards
      contactRefs.current.filter(Boolean).forEach((card) => {
        const hoverTl = gsap.timeline({ paused: true });

        hoverTl.to(card, {
          y: -5,
          scale: 1.02,
          duration: 0.3,
          ease: "power2.out"
        })
        .to(card.querySelector('.contact-icon'), {
          scale: 1.1,
          rotation: 5,
          duration: 0.3,
          ease: "back.out(2)"
        }, 0)
        .to(card.querySelector('.contact-gradient'), {
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out"
        }, 0);

        card.addEventListener('mouseenter', () => hoverTl.play());
        card.addEventListener('mouseleave', () => hoverTl.reverse());
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactItems.map((item, index) => {
            const Icon = item.icon;
            const colorClasses = {
              primary: 'from-primary-500 to-primary-600'
            };

            return (
              <div
                key={index}
                ref={(el) => (contactRefs.current[index] = el!)}
                className="contact-card bg-card-bg backdrop-blur-sm border border-card-border rounded-2xl p-6 hover:bg-hover-bg transition-all hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <div className={`contact-gradient w-10 h-10 rounded-xl bg-gradient-to-br ${colorClasses[item.color as keyof typeof colorClasses]} flex items-center justify-center mr-3`}>
                    <Icon className="contact-icon w-5 h-5 text-white" />
                  </div>
                  <div className="text-lg font-semibold text-text-heading">
                    {item.label}
                  </div>
                </div>
                {item.label === 'Telefon' ? (
                  <a href={`tel:${item.value.replace(/\s/g, '')}`} className="text-base text-text-body hover:text-primary-600 transition-colors">
                    {item.value}
                  </a>
                ) : (
                  <div className="text-base text-text-body">
                    {item.value}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}