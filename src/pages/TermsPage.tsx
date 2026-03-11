import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-stone-50 py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-stone-100">
        <Link to="/" className="inline-flex items-center gap-2 text-stone-500 hover:text-stone-900 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Terug naar home
        </Link>
        <h1 className="text-3xl font-serif font-medium mb-8 text-stone-900">Algemene Voorwaarden</h1>
        <div className="prose prose-stone max-w-none text-stone-600 space-y-6">
          <p>Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL')}</p>
          
          <h2 className="text-xl font-bold text-stone-900 mt-8 mb-4">1. Toepasselijkheid</h2>
          <p>Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, overeenkomsten en leveringen van De Smoothie Detox (Portomedia).</p>
          
          <h2 className="text-xl font-bold text-stone-900 mt-8 mb-4">2. Producten en Diensten</h2>
          <p>De Smoothie Detox biedt digitale producten aan (zoals e-books, schema's en handleidingen). Na betaling krijgt u direct toegang tot de digitale inhoud.</p>
          
          <h2 className="text-xl font-bold text-stone-900 mt-8 mb-4">3. Prijzen en Betaling</h2>
          <p>Alle vermelde prijzen zijn inclusief BTW. Betaling dient vooraf te geschieden via de aangeboden betaalmethoden (zoals iDEAL of Bancontact).</p>
          
          <h2 className="text-xl font-bold text-stone-900 mt-8 mb-4">4. Herroepingsrecht en Garantie</h2>
          <p>Wij bieden een 14 dagen 'Niet Goed, Geld Terug' garantie. Binnen deze termijn kunt u zonder opgave van redenen uw aankoopbedrag terugvragen door een e-mail te sturen naar info@portomedia.nl.</p>
          
          <h2 className="text-xl font-bold text-stone-900 mt-8 mb-4">5. Aansprakelijkheid</h2>
          <p>De informatie en schema's in onze producten zijn bedoeld voor educatieve doeleinden en vervangen geen medisch advies. Raadpleeg bij gezondheidsklachten altijd een arts.</p>
          
          <h2 className="text-xl font-bold text-stone-900 mt-8 mb-4">6. Intellectueel Eigendom</h2>
          <p>Alle rechten van intellectuele eigendom op de geleverde digitale producten berusten bij De Smoothie Detox. Het is niet toegestaan de producten te kopiëren, verspreiden of commercieel te exploiteren zonder voorafgaande schriftelijke toestemming.</p>
        </div>
      </div>
    </div>
  );
}
