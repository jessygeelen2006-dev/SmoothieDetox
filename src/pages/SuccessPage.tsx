import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800 flex items-center justify-center py-12 px-6">
      <div className="max-w-xl w-full bg-white p-10 rounded-3xl shadow-sm border border-stone-100 text-center">
        <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10" />
        </div>
        
        <h1 className="text-3xl font-serif font-medium mb-4 text-stone-900">Bedankt voor je aanmelding!</h1>
        <p className="text-lg text-stone-600 mb-8 leading-relaxed">
          Je betaling is succesvol verwerkt. We hebben je zojuist een e-mail gestuurd met alle informatie en toegang tot het 7-Daagse Smoothie Dieet.
        </p>
        
        <div className="bg-primary-50 p-6 rounded-2xl border border-primary-100 mb-8 text-left">
          <h3 className="font-bold text-stone-900 mb-2">Wat gebeurt er nu?</h3>
          <ul className="space-y-3 text-stone-700">
            <li className="flex gap-3">
              <span className="font-bold text-primary-600">1.</span>
              <span>Check je inbox (en spamfolder) voor de welkomstmail.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-primary-600">2.</span>
              <span>Download het boodschappenlijstje.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-primary-600">3.</span>
              <span>Zet 14 maart groot in je agenda!</span>
            </li>
          </ul>
        </div>

        <Link to="/" className="inline-flex items-center gap-2 text-primary-600 font-bold hover:text-primary-700 transition-colors">
          Terug naar de homepage <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
