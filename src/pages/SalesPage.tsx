import { motion } from 'motion/react';
import { Leaf, Droplets, Heart, CheckCircle, ArrowRight, AlertCircle, Clock, ShieldCheck } from 'lucide-react';

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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-lime-100 text-lime-800 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
              <Clock className="w-4 h-4" /> Start: 6 maart
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-medium leading-[1.1] mb-6 text-stone-900">
              🚀 Reset je Metabolisme in 7 Dagen
            </h1>
            <p className="text-xl text-stone-800 font-medium mb-4 max-w-2xl mx-auto">
              Klaar voor de zomer? Doe mee aan de 7-Daagse Smoothie Challenge en voel je buik zichtbaar platter, krijg meer energie en reset je metabolisme zonder honger of ingewikkelde diëten.
            </p>
            <p className="text-lg text-stone-600 mb-8 leading-relaxed max-w-xl mx-auto">
              Let op: de deuren sluiten zodra we beginnen – geen uitstel.
            </p>
            
            <div className="flex items-center justify-center mb-10">
              <a href="https://portomedia.nl/checkout/smoothiedetox" className="flex items-center gap-2 bg-lime-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-lime-600 transition-all shadow-lg shadow-lime-200 hover:shadow-lime-300 transform hover:-translate-y-1">
                Ja, ik wil mijn plek voor 6 maart! <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Attention Section */}
      <section className="py-16 bg-white border-y border-stone-100">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-lime-50 p-8 rounded-3xl border border-lime-100">
            <h3 className="text-2xl font-bold mb-6 text-stone-900">Herken je dit?</h3>
            <div className="space-y-4 text-lg text-stone-700">
              <p>Je buik voelt vaak opgeblazen, zelfs als je “gezond” eet.</p>
              <p>Je hebt het gevoel dat je metabolisme traag is.</p>
              <p>Je bent eerlijk gezegd klaar met dure, mislukte afvalprogramma’s die niets doen.</p>
              <p className="font-bold pt-4">Dan is dit voor jou.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interest Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-medium mb-6 text-stone-900">Waarom deze challenge werkt</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto mb-8">
              Dit is geen hype, geen vage beloftes. Het is een praktisch, wetenschappelijk onderbouwd 7-daags smoothie dieet dat je metabolisme opnieuw activeert en je lichaam rust geeft.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-stone-500">
              <span className="px-4 py-2 bg-white rounded-full border border-stone-200">Geen extreme diëten</span>
              <span className="px-4 py-2 bg-white rounded-full border border-stone-200">Geen pillen</span>
              <span className="px-4 py-2 bg-white rounded-full border border-stone-200">Geen ingewikkelde theorieën</span>
            </div>
            <p className="mt-8 text-lg font-medium text-stone-800">Volg gewoon het plan en voel het verschil.</p>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-stone-100">
            <h3 className="text-2xl font-bold mb-6 text-stone-900">Waarom 7 dagen?</h3>
            <p className="text-stone-600 mb-6">Onderzoek én ervaring laten zien dat je lichaam gemiddeld 5–7 dagen nodig heeft om:</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Vochtbalans te herstellen",
                "Darmbelasting te verminderen",
                "Suikerpieken te verlagen",
                "Je metabolische ritme te stabiliseren"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-lime-500 flex-shrink-0" />
                  <span className="text-stone-700">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-stone-800 font-medium">Precies wat deze smoothies doen.</p>
            
            <div className="mt-10 text-center">
              <a href="https://portomedia.nl/checkout/smoothiedetox" className="inline-flex items-center gap-2 bg-lime-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-lime-600 transition-all shadow-lg shadow-lime-200 hover:shadow-lime-300 transform hover:-translate-y-1">
                Ja, ik wil mijn plek voor 6 maart! <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Dialogue Section (formerly 3x JA Ladder) */}
      {/* Removed as requested in the new copy structure */}

      {/* Desire / What You Get */}
      <section className="py-20 bg-lime-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
             <div className="relative w-full">
              <div className="absolute inset-0 bg-lime-200/20 blur-3xl rounded-full transform scale-90 translate-y-4"></div>
              <img 
                src="https://i.ibb.co/kVsSZ55x/grok-image-966a5c19-a89a-4cfa-a8bc-adc4c0007baf-removebg-preview-1.png" 
                alt="Smoothie Detox Receptenboek" 
                className="relative w-full h-auto drop-shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-serif font-medium mb-2 text-stone-900">Wat je krijgt</h2>
            <p className="text-stone-500 mb-8">Alles kant-en-klaar, geen gedoe:</p>
            
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-stone-900 text-white flex items-center justify-center font-bold">1</div>
                  <h3 className="text-xl font-bold text-stone-900">7 Smoothie Recepten</h3>
                </div>
                <ul className="space-y-2 pl-11">
                  <li className="flex items-start gap-2 text-stone-700"><CheckCircle className="w-4 h-4 text-lime-600 mt-1 flex-shrink-0" /> Ingrediënten gewoon uit de supermarkt</li>
                  <li className="flex items-start gap-2 text-stone-700"><CheckCircle className="w-4 h-4 text-lime-600 mt-1 flex-shrink-0" /> Speciaal samengesteld om opgeblazen gevoel te verminderen</li>
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-stone-900 text-white flex items-center justify-center font-bold">2</div>
                  <h3 className="text-xl font-bold text-stone-900">Exact Schema</h3>
                </div>
                <ul className="space-y-2 pl-11">
                  <li className="flex items-start gap-2 text-stone-700"><CheckCircle className="w-4 h-4 text-lime-600 mt-1 flex-shrink-0" /> Wanneer je de smoothies drinkt</li>
                  <li className="flex items-start gap-2 text-stone-700"><CheckCircle className="w-4 h-4 text-lime-600 mt-1 flex-shrink-0" /> Hoe je ze combineert met maaltijden</li>
                  <li className="flex items-start gap-2 text-stone-700"><CheckCircle className="w-4 h-4 text-lime-600 mt-1 flex-shrink-0" /> Dag-tot-dag planning</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-4 bg-white rounded-xl border border-lime-100 text-center">
              <p className="font-medium text-stone-800">Geen gissen, geen stress, gewoon volgen</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why it works / Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-red-500 mb-6">Waarom de meeste programma's falen</h3>
              <ul className="space-y-4">
                {[
                  "Te extreem",
                  "Geen structuur",
                  "Geen rekening met je metabolisme",
                  "Niet vol te houden"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-stone-600">
                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-lime-600 mb-6">Onze aanpak:</h3>
              <ul className="space-y-4">
                {[
                  "Kort (7 dagen)",
                  "Duidelijk & praktisch",
                  "Gericht op reset, niet restrictie"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-stone-800 font-medium">
                    <CheckCircle className="w-5 h-5 text-lime-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-2xl font-serif italic text-stone-700 mb-10">"Dit is geen quick fix. Dit is een reset voor je lichaam."</p>
            <a href="https://portomedia.nl/checkout/smoothiedetox" className="inline-flex items-center gap-2 bg-lime-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-lime-600 transition-all shadow-lg shadow-lime-200 hover:shadow-lime-300 transform hover:-translate-y-1">
              Ja, ik wil mijn plek voor 6 maart! <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-stone-50 border-y border-stone-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block bg-white px-4 py-2 rounded-full text-sm font-bold text-stone-500 mb-8 border border-stone-200">
            De vorige groep was volledig uitverkocht
          </div>
          
          <h2 className="text-3xl font-serif font-medium mb-12 text-stone-900">Echte resultaten van echte deelnemers</h2>

          <div className="flex justify-center gap-6 md:gap-12 mb-16">
            <div className="w-64 bg-white p-3 rounded-2xl shadow-lg rotate-[-2deg] hover:rotate-0 transition-transform duration-300 border border-stone-100">
              <div className="aspect-[3/4] rounded-xl overflow-hidden mb-3">
                <img 
                  src="https://i.ibb.co/kgH4cV5V/a982e86c-6a36-44a8-8fff-4db40e8f2545.jpg" 
                  alt="Resultaat 1" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-xs font-bold text-stone-400 uppercase tracking-wider text-center">Na 7 Dagen</p>
            </div>
            <div className="w-64 bg-white p-3 rounded-2xl shadow-lg rotate-[2deg] hover:rotate-0 transition-transform duration-300 border border-stone-100">
              <div className="aspect-[3/4] rounded-xl overflow-hidden mb-3">
                <img 
                  src="https://i.ibb.co/qMfFds89/9bd31f2e-e644-4eb5-9fe2-fa212c4bed84.jpg" 
                  alt="Resultaat 2" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-xs font-bold text-stone-400 uppercase tracking-wider text-center">Na 7 Dagen</p>
            </div>
          </div>

          <h3 className="text-2xl font-serif font-medium mb-8 text-stone-900">Wat deelnemers zeggen:</h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              "Mijn buik voelde na 4 dagen al lichter.",
              "Ik had veel minder cravings.",
              "Eindelijk iets wat simpel te volgen is.",
              "Ik voelde me energieker zonder honger."
            ].map((quote, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 italic text-stone-600">
                "{quote}"
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-3xl border border-stone-100 max-w-2xl mx-auto">
            <h3 className="font-bold mb-4 text-stone-900">Veel deelnemers ervaren:</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="flex items-center gap-2 text-stone-700"><CheckCircle className="w-4 h-4 text-lime-500" /> Minder opgeblazen gevoel</span>
              <span className="flex items-center gap-2 text-stone-700"><CheckCircle className="w-4 h-4 text-lime-500" /> Strakker gevoel in kleding</span>
              <span className="flex items-center gap-2 text-stone-700"><CheckCircle className="w-4 h-4 text-lime-500" /> Meer controle over hun eetpatroon</span>
            </div>
            <p className="mt-6 font-bold text-lime-700">En het allerbelangrijkste: ze houden het vol.</p>
          </div>
          
          <div className="mt-12 text-center">
            <a href="https://portomedia.nl/checkout/smoothiedetox" className="inline-flex items-center gap-2 bg-lime-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-lime-600 transition-all shadow-lg shadow-lime-200 hover:shadow-lime-300 transform hover:-translate-y-1">
              Ja, ik wil mijn plek voor 6 maart! <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Urgency & Action */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full font-bold mb-6">
              <Clock className="w-5 h-5" /> Start 6 maart – de deuren sluiten daarna
            </div>
            <h2 className="text-3xl font-serif font-medium mb-6 text-stone-900">Dit is een begeleide start, dus geen doorlopende instroom.</h2>
            <p className="text-lg text-stone-600">Wil je echt mee? Dan is dit je moment.</p>
          </div>

          <div className="bg-stone-900 text-white p-8 md:p-12 rounded-3xl shadow-xl mb-12">
            <h3 className="text-2xl font-bold mb-6">Reserveer mijn plek voor 6 maart</h3>
            <div className="space-y-4 mb-8 text-stone-300">
              <p>Over 7 dagen kun je:</p>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="bg-stone-800 p-4 rounded-xl border border-stone-700">
                  <span className="block text-xs uppercase tracking-wider text-stone-500 mb-1">Optie 1</span>
                  Nog steeds zoeken naar het volgende “wonderdieet”.
                </div>
                <div className="bg-stone-800 p-4 rounded-xl border border-stone-700 border-l-4 border-l-lime-500">
                  <span className="block text-xs uppercase tracking-wider text-lime-400 mb-1">Optie 2</span>
                  Terugkijken en blij zijn dat je je metabolisme een reset gaf.
                </div>
              </div>
            </div>
            <a href="https://portomedia.nl/checkout/smoothiedetox" className="w-full block bg-lime-500 text-white px-8 py-4 rounded-2xl font-bold text-xl hover:bg-lime-600 transition-all shadow-lg shadow-lime-900/20 hover:shadow-lime-900/40 transform hover:-translate-y-1">
              Ja, ik start 6 maart met het 7-Daagse Smoothie Dieet
            </a>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 text-stone-500 text-sm">
             <div className="flex items-center gap-2 font-bold text-stone-700">
               <ShieldCheck className="w-5 h-5" /> Risicoloos
             </div>
            <span>14 dagen garantie: voel je geen verschil? Dan krijg je je geld terug, zonder discussie.</span>
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
