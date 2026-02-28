import { useState } from 'react';
import { motion } from 'motion/react';
import { Leaf, CheckCircle, ArrowRight, Loader2, Mail } from 'lucide-react';

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
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-center items-center">
          <div className="flex items-center gap-2">
            <img 
              src="https://i.ibb.co/ZpBRMcdB/logo.jpg" 
              alt="Smoothie Detox" 
              className="h-12 w-auto"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-serif font-medium leading-[1.1] mb-4 text-stone-900">
              3 Krachtige Smoothies Die Je Vetverbranding <span className="italic text-lime-600">Direct Aanzetten.</span>
            </h1>
            <p className="text-xl text-stone-600 mb-6 max-w-lg mx-auto leading-relaxed">
              Voel je je opgeblazen of moe? <strong className="text-stone-800">Reset je metabolisme in 24 uur</strong> zonder honger te lijden.
            </p>

            <p className="text-sm font-bold text-stone-500 uppercase tracking-wider mb-4">📩 Ontvang nu gratis je recepten:</p>
            
            {status === 'success' ? (
              <div className="bg-lime-100 border border-lime-200 text-lime-800 px-6 py-4 rounded-2xl mb-6 max-w-lg mx-auto">
                <p className="font-bold flex items-center justify-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Bedankt! Check je inbox.
                </p>
                <p className="text-sm mt-1">We hebben de recepten naar je gemaild.</p>
              </div>
            ) : (
              <div className="bg-white p-2 rounded-2xl shadow-lg border border-stone-100 max-w-md mx-auto mb-6">
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-2">
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-4 w-4 text-stone-400" />
                    </div>
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Jouw e-mailadres" 
                      className="w-full pl-9 pr-4 py-3 rounded-xl border border-stone-200 bg-stone-50 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-lime-500 focus:bg-white focus:ring-0 transition-all text-sm"
                      required
                      disabled={status === 'loading'}
                    />
                  </div>
                  <button 
                    type="submit" 
                    disabled={status === 'loading'}
                    className="w-full sm:w-auto bg-stone-900 text-white px-6 py-3 rounded-xl font-medium text-sm hover:bg-stone-800 transition-colors whitespace-nowrap disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {status === 'loading' ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <>Stuur mij de recepten!</>
                    )}
                  </button>
                </form>
              </div>
            )}

            {status === 'error' && (
              <p className="text-red-500 text-sm mb-6">Er ging iets mis. Probeer het later opnieuw.</p>
            )}
            
            <div className="mt-8">
               <h3 className="text-xl font-serif text-stone-900 mb-4">
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
          </motion.div>
        </div>
      </section>



      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-12 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-2 text-white">
              <img 
                src="https://i.ibb.co/ZpBRMcdB/logo.jpg" 
                alt="Smoothie Detox" 
                className="h-10 w-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="text-sm flex flex-col items-center md:items-start gap-1">
              <a href="mailto:info@portomedia.nl" className="hover:text-white transition-colors">info@portomedia.nl</a>
              <a href="tel:0643441206" className="hover:text-white transition-colors">06-43441206</a>
              <span>KvK: 99880725</span>
            </div>
          </div>
          <div className="text-sm">
            &copy; {new Date().getFullYear()} De Smoothie Detox. Alle rechten voorbehouden.
          </div>
        </div>
      </footer>
    </div>
  );
}
