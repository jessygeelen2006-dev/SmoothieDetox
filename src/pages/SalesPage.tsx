import { motion } from 'motion/react';
import { Leaf, Droplets, Heart, CheckCircle, ArrowRight } from 'lucide-react';

export default function SalesPage() {
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
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-3 py-1 bg-lime-100 text-lime-800 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              Nieuw Receptenboek
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-medium leading-[1.1] mb-6 text-stone-900">
              Het Smoothie Detox Plan: <span className="italic text-lime-600">Reset je lichaam & verlies gewicht.</span>
            </h1>
            <p className="text-lg text-stone-600 mb-8 leading-relaxed max-w-xl mx-auto">
              Ontdek 20 heerlijke smoothie recepten die speciaal zijn samengesteld om je te helpen afvallen en je lichaam te ontgiften.
            </p>
            
            <div className="flex items-center justify-center mb-10">
              <a href="https://portomedia.nl/checkout/smoothiedetox" className="flex items-center gap-2 bg-lime-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-lime-600 transition-all shadow-lg shadow-lime-200 hover:shadow-lime-300 transform hover:-translate-y-1">
                Start Direct Met Afvallen <ArrowRight className="w-5 h-5" />
              </a>
            </div>

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

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-medium mb-4">Waarom de Smoothie Detox?</h2>
            <p className="text-stone-500 max-w-xl mx-auto">
              Geen ingewikkelde diëten, maar simpele, voedzame recepten die je energie geven.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Droplets className="w-6 h-6 text-blue-500" />,
                title: "Ontgift je Lichaam",
                desc: "Ingrediënten die je lever en nieren ondersteunen bij het afvoeren van afvalstoffen."
              },
              {
                icon: <Heart className="w-6 h-6 text-red-500" />,
                title: "Gezond Afvallen",
                desc: "Verlies gewicht op een natuurlijke manier zonder hongergevoel."
              },
              {
                icon: <Leaf className="w-6 h-6 text-green-500" />,
                title: "100% Natuurlijk",
                desc: "Alleen pure ingrediënten. Geen toevoegingen, geen suikers."
              }
            ].map((feature, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-stone-50 border border-stone-100 hover:border-lime-200 transition-colors">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-stone-900">{feature.title}</h3>
                <p className="text-stone-600 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section className="py-20 px-6 bg-lime-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="aspect-[4/3] rounded-3xl shadow-xl rotate-2 hover:rotate-0 transition-transform duration-500 bg-white flex items-center justify-center border border-lime-100">
               <Droplets className="w-24 h-24 text-lime-200" />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-serif font-medium mb-6">Wat krijg je?</h2>
            <ul className="space-y-4">
              {[
                "20 Unieke Smoothie Recepten",
                "Boodschappenlijstjes voor elke week",
                "Tips voor de beste blenders",
                "Voedingswaarden per smoothie",
                "Direct te downloaden als PDF"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-stone-700">
                  <CheckCircle className="w-5 h-5 text-lime-600 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <a href="https://portomedia.nl/checkout/smoothiedetox" className="inline-block bg-stone-900 text-white px-8 py-3 rounded-xl font-medium hover:bg-stone-800 transition-colors">
                Bestel het receptenboek
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3x Yes Section */}
      <section className="py-20 px-6 bg-lime-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-medium mb-12 text-stone-900">Herken jij jezelf hierin?</h2>
          <div className="space-y-6 mb-12">
            {[
              "Wil jij je weer energiek en fit voelen zonder honger te lijden?",
              "Ben je klaar om die laatste hardnekkige kilo's eindelijk kwijt te raken?",
              "Zoek je een simpele methode die slechts 5 minuten per dag kost?"
            ].map((question, i) => (
              <div key={i} className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-lime-100">
                <div className="bg-lime-100 p-2 rounded-full flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-lime-600" />
                </div>
                <p className="text-lg font-medium text-stone-800 text-left">{question}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-lime-200 inline-block w-full max-w-lg">
             <p className="text-stone-500 mb-6 font-medium">Zeg je 3x JA? Start dan direct.</p>
             <a href="https://portomedia.nl/checkout/smoothiedetox" className="w-full bg-lime-500 text-white px-8 py-4 rounded-2xl font-bold text-xl hover:bg-lime-600 transition-all shadow-lg shadow-lime-200 hover:shadow-lime-300 transform hover:-translate-y-1 flex items-center justify-center gap-2">
               Ja, ik wil dit nu! <ArrowRight className="w-6 h-6" />
             </a>
          </div>
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
