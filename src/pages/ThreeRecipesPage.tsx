import { useState } from 'react';
import { motion } from 'motion/react';
import { Leaf, CheckCircle, ArrowRight, Loader2 } from 'lucide-react';

export default function ThreeRecipesPage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Subscription failed');
      }

      setStatus('success');
      setEmail('');
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800 selection:bg-lime-200">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-100">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-lime-400 p-1.5 rounded-lg">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight text-stone-900">Smoothie Detox</span>
          </div>
          <button className="bg-stone-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-stone-800 transition-colors">
            Start Nu
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-3 py-1 bg-lime-100 text-lime-800 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              Gratis Recepten
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-medium leading-[1.1] mb-6 text-stone-900">
              Ontdek 3 virale smoothie recepten waarmee je <span className="italic text-lime-600">direct vet verbrandt.</span>
            </h1>
            <p className="text-lg text-stone-600 mb-8 leading-relaxed max-w-xl mx-auto">
              Krijg direct toegang tot de populairste recepten uit ons boek en start vandaag nog met het ontgiften van je lichaam.
            </p>
            
            <ul className="text-left max-w-md mx-auto mb-8 space-y-3">
              {[
                "Verlies je opgeblazen gevoel in slechts 24 uur",
                "Geen honger, wel energie: De geheime ingrediëntenmix",
                "Klaar in 5 minuten met simpele supermarkt-producten"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-stone-700">
                  <CheckCircle className="w-5 h-5 text-lime-500 flex-shrink-0 mt-0.5" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
            
            {status === 'success' ? (
              <div className="bg-lime-100 border border-lime-200 text-lime-800 px-6 py-4 rounded-2xl mb-8 max-w-lg mx-auto">
                <p className="font-bold flex items-center justify-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Bedankt! Check je inbox.
                </p>
                <p className="text-sm mt-1">We hebben de recepten naar je gemaild.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8 max-w-lg mx-auto w-full">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Vul je e-mailadres in..." 
                  className="w-full px-6 py-4 rounded-2xl border border-stone-200 bg-white text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent shadow-sm disabled:opacity-50"
                  required
                  disabled={status === 'loading'}
                />
                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-lime-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-lime-600 transition-all shadow-lg shadow-lime-200 hover:shadow-lime-300 transform hover:-translate-y-1 whitespace-nowrap disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>Ga Verder <ArrowRight className="w-5 h-5" /></>
                  )}
                </button>
              </form>
            )}
            
            {status === 'error' && (
              <p className="text-red-500 text-sm mb-6">Er ging iets mis. Probeer het later opnieuw.</p>
            )}

            <p className="text-sm text-stone-400 mb-10">Ontvang direct toegang tot de introductie.</p>

            <div className="flex items-center justify-center gap-4 text-sm text-stone-500">
              <div className="flex -space-x-2">
                 <div className="w-8 h-8 rounded-full border-2 border-white bg-lime-100 flex items-center justify-center text-lime-700 text-xs font-bold">JD</div>
                 <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center text-blue-700 text-xs font-bold">MK</div>
                 <div className="w-8 h-8 rounded-full border-2 border-white bg-orange-100 flex items-center justify-center text-orange-700 text-xs font-bold">AS</div>
              </div>
              <p>Al door 1.200+ mensen gedownload</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 bg-stone-50 border-y border-stone-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-serif text-stone-900 mb-8">
            Honderden vrouwen vielen kilo's af
          </h3>
          <div className="flex justify-center gap-4 md:gap-8">
            <div className="w-1/2 max-w-xs rounded-2xl overflow-hidden shadow-lg rotate-[-2deg] hover:rotate-0 transition-transform duration-300 bg-white p-2">
              <img 
                src="https://i.ibb.co/kgH4cV5V/a982e86c-6a36-44a8-8fff-4db40e8f2545.jpg" 
                alt="Resultaat 1" 
                className="w-full h-auto rounded-xl object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="w-1/2 max-w-xs rounded-2xl overflow-hidden shadow-lg rotate-[2deg] hover:rotate-0 transition-transform duration-300 bg-white p-2">
              <img 
                src="https://i.ibb.co/qMfFds89/9bd31f2e-e644-4eb5-9fe2-fa212c4bed84.jpg" 
                alt="Resultaat 2" 
                className="w-full h-auto rounded-xl object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-12 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-white">
            <Leaf className="w-5 h-5" />
            <span className="font-bold text-lg">Smoothie Detox</span>
          </div>
          <div className="text-sm">
            &copy; {new Date().getFullYear()} De Smoothie Detox. Alle rechten voorbehouden.
          </div>
        </div>
      </footer>
    </div>
  );
}
