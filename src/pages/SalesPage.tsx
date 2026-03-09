import { motion } from 'motion/react';
import { Leaf, Droplets, Heart, CheckCircle, ArrowRight, AlertCircle, Clock, ShieldCheck } from 'lucide-react';

export default function SalesPage() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800 selection:bg-primary-200">
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
              <Clock className="w-4 h-4" /> Start: 14 maart
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-medium leading-[1.1] mb-6 text-stone-900">
              🚀 Reset je Metabolisme in 7 Dagen
            </h1>
            <p className="text-xl text-stone-800 font-medium mb-4 max-w-2xl mx-auto">
              Hoe zou het zijn om je deze zomer geweldig te voelen én er zo uit te zien? In deze 7-daagse challenge leer je hoe je je metabolisme reset voor een zichtbaar plattere buik en meer energie.
            </p>
            <p className="text-lg text-stone-600 mb-8 leading-relaxed max-w-xl mx-auto">
              Let op: de deuren sluiten zodra we beginnen – geen uitstel.
            </p>
            
            <div className="flex items-center justify-center mb-10">
              <a href="https://portomedia.nl/checkout/smoothiedetox-challenge" className="flex items-center gap-2 bg-primary-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-primary-600 transition-all shadow-lg shadow-primary-200 hover:shadow-primary-300 transform hover:-translate-y-1">
                Ja, ik wil mijn plek voor 14 maart! <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            <div className="flex justify-center gap-6 md:gap-12 mb-10">
              <div className="w-48 md:w-56 bg-white p-2 md:p-3 rounded-2xl shadow-lg rotate-[-2deg] hover:rotate-0 transition-transform duration-300 border border-stone-100">
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
              <div className="w-48 md:w-56 bg-white p-2 md:p-3 rounded-2xl shadow-lg rotate-[2deg] hover:rotate-0 transition-transform duration-300 border border-stone-100">
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
          </motion.div>
        </div>
      </section>

      {/* Attention Section */}
      <section className="py-16 bg-white border-y border-stone-100">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-primary-50 p-8 rounded-3xl border border-primary-100">
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
            <h2 className="text-3xl font-serif font-medium mb-6 text-stone-900">De logica achter deze methode</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto mb-8">
              Ontwikkeld door voedingsdeskundige Dr. Roy de Jong, die hiermee al honderden mensen heeft geholpen. Geen magie, gewoon biologie.
            </p>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-stone-100">
            <h3 className="text-2xl font-bold mb-6 text-stone-900">Hoe het werkt (simpel uitgelegd)</h3>
            <div className="space-y-4 text-stone-700 text-lg leading-relaxed">
                <p>
                    Normaal gesproken haalt je lichaam energie uit de suikers in je voeding. Zolang je die blijft eten, spreekt je lichaam je vetreserves niet aan.
                </p>
                <p>
                    Tijdens deze 7 dagen verlaag je je suikerinname drastisch. Hierdoor dwing je je lichaam om een andere energiebron te zoeken: je lichaamsvet.
                </p>
                <p>
                    Tegelijkertijd krijgen je darmen rust omdat smoothies vloeibaar zijn en makkelijk verteren. Dit zorgt ervoor dat je buik minder opgeblazen is.
                </p>
                <p className="font-bold pt-2">
                    Kortom: Minder suiker + makkelijke vertering = vetverbranding en een plattere buik.
                </p>
            </div>
            
            <div className="mt-10 text-center">
              <a href="https://portomedia.nl/checkout/smoothiedetox-challenge" className="inline-flex items-center gap-2 bg-primary-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-primary-600 transition-all shadow-lg shadow-primary-200 hover:shadow-primary-300 transform hover:-translate-y-1">
                Ja, ik wil mijn plek voor 14 maart! <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Dialogue Section (formerly 3x JA Ladder) */}
      {/* Removed as requested in the new copy structure */}

      {/* Desire / What You Get */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <div className="order-2 md:order-1 relative">
              <div className="absolute inset-0 bg-primary-100/50 blur-3xl rounded-full transform scale-90 translate-y-4 -z-10"></div>
              <div className="relative z-10 transform transition-transform duration-500 hover:scale-[1.02]">
                <img 
                  src="https://i.ibb.co/kVsSZ55x/grok-image-966a5c19-a89a-4cfa-a8bc-adc4c0007baf-removebg-preview-1.png" 
                  alt="Smoothie Detox Receptenboek" 
                  className="w-full h-auto drop-shadow-2xl rotate-1"
                  referrerPolicy="no-referrer"
                />
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-stone-100 max-w-[200px] hidden md:block">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-stone-200 border-2 border-white overflow-hidden">
                        <img src="https://i.pravatar.cc/100?img=1" alt="" className="w-full h-full object-cover" />
                      </div>
                      <div className="w-8 h-8 rounded-full bg-stone-200 border-2 border-white overflow-hidden">
                        <img src="https://i.pravatar.cc/100?img=5" alt="" className="w-full h-full object-cover" />
                      </div>
                      <div className="w-8 h-8 rounded-full bg-stone-200 border-2 border-white overflow-hidden">
                        <img src="https://i.pravatar.cc/100?img=9" alt="" className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <span className="text-xs font-bold text-stone-600">+1.200 anderen</span>
                  </div>
                  <p className="text-xs text-stone-500">Gingen je al voor</p>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4 text-stone-900 leading-tight">
                Ervaar de rust van een plan dat <span className="italic text-primary-600">écht voor je werkt</span>
              </h2>
              <p className="text-lg text-stone-600 mb-10">
                Geen stress, geen honger, alleen resultaat. Dit is hoe jouw week eruit gaat zien:
              </p>
              
              <div className="space-y-6">
                {/* Card 1 */}
                <div className="flex gap-5 p-6 bg-stone-50 rounded-2xl border border-stone-100 hover:border-primary-200 transition-colors group">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary-500 group-hover:scale-110 transition-transform">
                    <Heart className="w-6 h-6 fill-current" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-stone-900 mb-2">Elke dag een genietmomentje</h3>
                    <p className="text-stone-600 leading-relaxed">
                      Vergeet vieze detox-drankjes. Je krijgt 7 heerlijke, vullende smoothies die voelen als een traktatie, terwijl ze je lichaam van binnenuit reinigen. Gewoon met ingrediënten uit je eigen supermarkt.
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="flex gap-5 p-6 bg-stone-50 rounded-2xl border border-stone-100 hover:border-primary-200 transition-colors group">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary-500 group-hover:scale-110 transition-transform">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-stone-900 mb-2">Volledige mentale rust</h3>
                    <p className="text-stone-600 leading-relaxed">
                      Stop met piekeren over wat je wel of niet mag eten. Je krijgt een kristalhelder dag-tot-dag schema dat precies vertelt wat je moet doen. Jij hoeft alleen maar te volgen en te genieten van het resultaat.
                    </p>
                  </div>
                </div>
              </div>
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
              <h3 className="text-xl font-bold text-primary-600 mb-6">Onze aanpak:</h3>
              <ul className="space-y-4">
                {[
                  "Kort (7 dagen)",
                  "Duidelijk & praktisch",
                  "Gericht op reset, niet restrictie"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-stone-800 font-medium">
                    <CheckCircle className="w-5 h-5 text-primary-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-2xl font-serif italic text-stone-700 mb-10">"Dit is geen quick fix. Dit is een reset voor je lichaam."</p>
            <a href="https://portomedia.nl/checkout/smoothiedetox-challenge" className="inline-flex items-center gap-2 bg-primary-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-primary-600 transition-all shadow-lg shadow-primary-200 hover:shadow-primary-300 transform hover:-translate-y-1">
              Ja, ik wil mijn plek voor 14 maart! <ArrowRight className="w-5 h-5" />
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
          
          <h2 className="text-3xl font-serif font-medium mb-12 text-stone-900">Wat deelnemers zeggen:</h2>
          
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
              <span className="flex items-center gap-2 text-stone-700"><CheckCircle className="w-4 h-4 text-primary-500" /> Minder opgeblazen gevoel</span>
              <span className="flex items-center gap-2 text-stone-700"><CheckCircle className="w-4 h-4 text-primary-500" /> Strakker gevoel in kleding</span>
              <span className="flex items-center gap-2 text-stone-700"><CheckCircle className="w-4 h-4 text-primary-500" /> Meer controle over hun eetpatroon</span>
            </div>
            <p className="mt-6 font-bold text-primary-700">En het allerbelangrijkste: ze houden het vol.</p>
          </div>
          
          <div className="mt-12 text-center">
            <a href="https://portomedia.nl/checkout/smoothiedetox-challenge" className="inline-flex items-center gap-2 bg-primary-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-primary-600 transition-all shadow-lg shadow-primary-200 hover:shadow-primary-300 transform hover:-translate-y-1">
              Ja, ik wil mijn plek voor 14 maart! <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Urgency & Action */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full font-bold mb-6">
              <Clock className="w-5 h-5" /> Start 14 maart – de deuren sluiten daarna
            </div>
            <h2 className="text-3xl font-serif font-medium mb-6 text-stone-900">Dit is een begeleide start, dus geen doorlopende instroom.</h2>
            <p className="text-lg text-stone-600">Wil je echt mee? Dan is dit je moment.</p>
          </div>

          <div className="bg-stone-900 text-white p-8 md:p-12 rounded-3xl shadow-xl mb-12">
            <h3 className="text-2xl font-bold mb-6">Reserveer mijn plek voor 14 maart</h3>
            <div className="space-y-4 mb-8 text-stone-300">
              <p>Over 7 dagen kun je:</p>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="bg-stone-800 p-4 rounded-xl border border-stone-700">
                  <span className="block text-xs uppercase tracking-wider text-stone-500 mb-1">Optie 1</span>
                  Nog steeds zoeken naar het volgende “wonderdieet”.
                </div>
                <div className="bg-stone-800 p-4 rounded-xl border border-stone-700 border-l-4 border-l-primary-500">
                  <span className="block text-xs uppercase tracking-wider text-primary-400 mb-1">Optie 2</span>
                  Terugkijken en blij zijn dat je je metabolisme een reset gaf.
                </div>
              </div>
            </div>
            <a href="https://portomedia.nl/checkout/smoothiedetox-challenge" className="w-full block bg-primary-500 text-white px-8 py-4 rounded-2xl font-bold text-xl hover:bg-primary-600 transition-all shadow-lg shadow-primary-900/20 hover:shadow-primary-900/40 transform hover:-translate-y-1">
              Ja, ik start 14 maart met het 7-Daagse Smoothie Dieet
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
