import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Section } from '../components/LayoutComponents';

const Impressum: React.FC = () => {
  return (
    <div className="bg-page-bg">
      <Helmet>
        <title>Impressum - Fahrschule Mobil Inh. Sven Bergheim</title>
        <meta name="description" content="Impressum und rechtliche Hinweise für Fahrschule Mobil Inh. Sven Bergheim. Hier finden Sie unsere Kontaktdaten, Angaben zum Unternehmen und weitere rechtliche Informationen." />
        <meta name="keywords" content="Impressum, Fahrschule, Rechtliche Hinweise, Kontakt, Fahrschule Mobil, Sven Bergheim, Alfter" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Impressum - Fahrschule Mobil Inh. Sven Bergheim" />
        <meta property="og:description" content="Rechtliche Informationen und Impressum der Fahrschule Mobil Inh. Sven Bergheim in Alfter." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fahrschule-mobil.com/impressum" />
        <meta property="og:image" content="https://fahrschule-mobil.com/default_images/logo_default.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Impressum - Fahrschule Mobil Inh. Sven Bergheim" />
        <meta name="twitter:description" content="Rechtliche Informationen und Impressum der Fahrschule Mobil Inh. Sven Bergheim in Alfter." />
        <meta name="twitter:image" content="https://fahrschule-mobil.com/default_images/logo_default.webp" />
        <link rel="canonical" href="https://fahrschule-mobil.com/impressum" />
      </Helmet>
      <Section background="card-bg" padding="xl">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-text-heading mb-8">Impressum</h1>

            <div className="space-y-8 text-text-body">
              <div>
                <h2 className="text-2xl font-semibold text-text-heading mb-3">
                  Angaben gemäß § 5 TMG
                </h2>
                <p className="mb-2">Fahrschule Mobil Inh. Sven Bergheim</p>
                <p className="mb-2">Pelzstraße 14</p>
                <p className="mb-2">53347 Alfter</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-text-heading mb-3">
                  Vertreten durch
                </h2>
                <p>Sven Bergheim</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-text-heading mb-3">
                  Kontakt
                </h2>
                <p className="mb-2">Telefon: <a href="tel:+491638880180">0163 8880180</a></p>
              </div>


              <div>
                <h2 className="text-2xl font-semibold text-text-heading mb-3">
                  Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
                </h2>
                <p className="mb-2">Sven Bergheim</p>
                <p className="mb-2">Pelzstraße 14</p>
                <p>53347 Alfter</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-text-heading mb-3">
                  Haftungsausschluss
                </h2>

                <h3 className="text-xl font-semibold text-text-heading mb-2 mt-4">
                  Haftung für Inhalte
                </h3>
                <p className="mb-4 leading-relaxed">
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
                  allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                  verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
                  zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>

                <h3 className="text-xl font-semibold text-text-heading mb-2 mt-4">
                  Haftung für Links
                </h3>
                <p className="mb-4 leading-relaxed">
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
                  Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
                  verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                </p>

                <h3 className="text-xl font-semibold text-text-heading mb-2 mt-4">
                  Urheberrecht
                </h3>
                <p className="leading-relaxed">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
                  Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
                  Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
              </div>

              <div className="pt-8 border-t border-border-divider">
                <p className="text-sm text-text-muted">
                  Stand: November 2025
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default Impressum;
