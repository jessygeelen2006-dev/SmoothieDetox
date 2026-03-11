import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-stone-50 py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-stone-100">
        <Link to="/" className="inline-flex items-center gap-2 text-stone-500 hover:text-stone-900 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Terug naar home
        </Link>
        <h1 className="text-3xl font-serif font-medium mb-8 text-stone-900">Privacy Beleid</h1>
        <div className="prose prose-stone max-w-none text-stone-600 space-y-6">
          <p>Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL')}</p>
          
          <p>Bij De Smoothie Detox (Portomedia) hechten wij veel waarde aan uw privacy. In dit privacybeleid leggen wij uit welke persoonsgegevens wij verzamelen en hoe wij hiermee omgaan.</p>
          
          <h2 className="text-xl font-bold text-stone-900 mt-8 mb-4">1. Gegevens die wij verzamelen</h2>
          <p>Wanneer u een aankoop doet, verzamelen wij de volgende gegevens:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Voor- en achternaam</li>
            <li>E-mailadres</li>
            <li>Betaalgegevens (verwerkt via onze betaalprovider Mollie)</li>
          </ul>
          
          <h2 className="text-xl font-bold text-stone-900 mt-8 mb-4">2. Doel van de verwerking</h2>
          <p>Wij gebruiken uw gegevens uitsluitend voor de volgende doeleinden:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Het afhandelen van uw betaling en het leveren van de digitale producten.</li>
            <li>Om u te kunnen e-mailen indien dit nodig is om onze dienstverlening uit te kunnen voeren.</li>
            <li>Om u de mogelijkheid te bieden een account aan te maken.</li>
          </ul>
          
          <h2 className="text-xl font-bold text-stone-900 mt-8 mb-4">3. Gegevens delen met derden</h2>
          <p>Wij verkopen uw gegevens niet aan derden en verstrekken deze uitsluitend indien dit nodig is voor de uitvoering van onze overeenkomst met u of om te voldoen aan een wettelijke verplichting. Met bedrijven die uw gegevens verwerken in onze opdracht (zoals Mollie), sluiten wij een verwerkersovereenkomst.</p>
          
          <h2 className="text-xl font-bold text-stone-900 mt-8 mb-4">4. Gegevens inzien, aanpassen of verwijderen</h2>
          <p>U heeft het recht om uw persoonsgegevens in te zien, te corrigeren of te verwijderen. U kunt een verzoek hiertoe sturen naar info@portomedia.nl. Wij zullen zo snel mogelijk, maar binnen vier weken, op uw verzoek reageren.</p>
          
          <h2 className="text-xl font-bold text-stone-900 mt-8 mb-4">5. Beveiliging</h2>
          <p>Wij nemen de bescherming van uw gegevens serieus en nemen passende maatregelen om misbruik, verlies, onbevoegde toegang, ongewenste openbaarmaking en ongeoorloofde wijziging tegen te gaan.</p>
        </div>
      </div>
    </div>
  );
}
