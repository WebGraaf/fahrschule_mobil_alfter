import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function EinfachePreisliste() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title
      gsap.fromTo(".price-title",
        { opacity: 0, y: -30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate price items
      gsap.fromTo(".price-item",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const prices = [
    { name: 'Anmeldung', price: '200,-€' },
    { name: 'Lehrmaterial', price: '50,-€' },
    { name: 'Jede Fahrstunde', price: '60,-€' },
    { name: 'Praktische Prüfung', price: '200,-€' }
  ];

  return (
    <section ref={sectionRef} className="py-16 bg-page">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="price-title text-4xl font-bold text-text-heading mb-4">
            Unsere Preise
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          {prices.map((item, index) => (
            <div key={index} className="price-item bg-white rounded-xl shadow-lg p-8 text-center border border-default hover:shadow-xl transition-shadow min-h-[140px] flex flex-col justify-center w-full sm:w-[225px] lg:w-[250px]">
              <h3 className="text-xl font-semibold text-text-heading mb-2">{item.name}</h3>
              <p className="text-3xl font-bold text-primary-600">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}