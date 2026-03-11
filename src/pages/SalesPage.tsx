import { motion } from 'motion/react';
import { ArrowRight, CheckCircle, Zap } from 'lucide-react';

export default function SalesPage() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800 selection:bg-primary-200 flex flex-col">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-stone-100 sticky top-0 z-50">
        <div className="max-w-md mx-auto px-4 py-3 flex justify-center items-center">
          <img 
            src="https://i.ibb.co/ZpBRMcdB/logo.jpg" 
            alt="SmoothieBijbel" 
            className="h-8 w-auto"
            referrerPolicy="no-referrer"
          />
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-8 max-w-md mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full flex flex-col items-center text-center"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-100 text-red-800 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            <Zap className="w-3.5 h-3.5" /> Tijdelijke TikTok Deal
          </div>
          
          <h1 className="text-4xl font-serif font-bold leading-tight mb-2 text-stone-900">
            De SmoothieBijbel
          </h1>
          <p className="text-lg text-stone-600 mb-8">
            100 heerlijke recepten voor een platte buik vóór de zomer.
          </p>

          <div className="relative w-full max-w-[280px] mx-auto mb-8">
            <div className="absolute inset-0 bg-primary-200/50 blur-2xl rounded-full transform scale-90 translate-y-4 -z-10"></div>
            <img 
              src="https://i.ibb.co/kVsSZ55x/grok-image-966a5c19-a89a-4cfa-a8bc-adc4c0007baf-removebg-preview-1.png" 
              alt="SmoothieBijbel" 
              className="w-full h-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-300"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="bg-white w-full p-6 rounded-3xl shadow-sm border border-stone-100 mb-8 text-left">
            <ul className="space-y-3">
              {[
                "100 vetverbrandende recepten",
                "Klaar in minder dan 5 minuten",
                "Ingrediënten uit de supermarkt",
                "Direct digitaal in je mailbox"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-stone-700 font-medium">
                  <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-stone-400 line-through text-xl">€29,95</span>
              <span className="text-4xl font-bold text-stone-900">€9,95</span>
            </div>
            <a href="/checkout" className="w-full flex items-center justify-center gap-2 bg-primary-500 text-white px-8 py-4 rounded-2xl font-bold text-xl hover:bg-primary-600 transition-all shadow-lg shadow-primary-500/30 transform hover:-translate-y-1 active:scale-95">
              Download Direct <ArrowRight className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-8 px-4 mt-auto">
        <div className="max-w-md mx-auto flex flex-col items-center text-center gap-4">
          <div className="flex gap-4 text-xs">
            <a href="/algemene-voorwaarden" className="hover:text-white transition-colors">Voorwaarden</a>
            <a href="/privacy-beleid" className="hover:text-white transition-colors">Privacy</a>
            <a href="mailto:info@portomedia.nl" className="hover:text-white transition-colors">Contact</a>
          </div>
          <div className="text-xs opacity-60">
            &copy; {new Date().getFullYear()} SmoothieBijbel.
          </div>
        </div>
      </footer>
    </div>
  );
}
