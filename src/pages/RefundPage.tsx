import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function RefundPage() {
  return (
    <div className="min-h-screen bg-stone-50 py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-stone-100">
        <Link to="/" className="inline-flex items-center gap-2 text-stone-500 hover:text-stone-900 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Terug naar home
        </Link>
        <h1 className="text-3xl font-serif font-medium mb-8 text-stone-900">Retourbeleid</h1>
        <div className="prose prose-stone max-w-none text-stone-600 space-y-6">
          <p>Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL')}</p>
          
          <h2 className="text-xl font-bold text-stone-900 mt-8 mb-4">1. Digitale Producten</h2>
          <p>De SmoothieBijbel is een digitaal product (e-book). Omdat dit product direct na aankoop digitaal wordt geleverd en gedownload kan worden, vervalt in beginsel het wettelijke herroepingsrecht voor digitale inhoud.</p>
          
          <h2 className="text-xl font-bold text-stone-900 mt-8 mb-4">2. Uitzonderingen & Klanttevredenheid</h2>
          <p>We willen natuurlijk dat je 100% tevreden bent. Mocht je om wat voor reden dan ook niet tevreden zijn met je aankoop, neem dan binnen 14 dagen na aankoop contact met ons op via info@portomedia.nl. We bekijken dan samen naar een passende oplossing of een eventuele terugbetaling.</p>
          
          <h2 className="text-xl font-bold text-stone-900 mt-8 mb-4">3. Hoe een verzoek in te dienen</h2>
          <p>Stuur een e-mail naar info@portomedia.nl met de volgende gegevens:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Je volledige naam</li>
            <li>Het e-mailadres waarmee je de bestelling hebt geplaatst</li>
            <li>De reden waarom je niet tevreden bent</li>
          </ul>
          
          <h2 className="text-xl font-bold text-stone-900 mt-8 mb-4">4. Terugbetalingstermijn</h2>
          <p>Indien een terugbetaling wordt goedgekeurd, wordt het aankoopbedrag binnen 5 werkdagen teruggestort op de rekening waarmee de oorspronkelijke betaling is verricht.</p>
          
          <h2 className="text-xl font-bold text-stone-900 mt-8 mb-4">5. Bedrijfsgegevens</h2>
          <p>
            <strong>Portomedia</strong><br />
            Lijnbaanstraat 7<br />
            KvK: 99880725<br />
            E-mail: info@portomedia.nl
          </p>
        </div>
      </div>
    </div>
  );
}
