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
              Verander je lichaam met 20 geheime smoothies. <span className="italic text-lime-600">Bewezen, simpel en effectief!</span>
            </h1>
            <p className="text-xl text-stone-800 font-medium mb-4 max-w-2xl mx-auto">
              Reset je lichaam, voel je licht en vol energie en verlies die lastige kilo’s – zonder honger!
            </p>
            <p className="text-lg text-stone-600 mb-8 leading-relaxed max-w-xl mx-auto">
              Ontdek 20 heerlijke smoothies die écht werken. Speciaal samengesteld om je lichaam te ontgiften, je metabolisme te stimuleren en je energie een boost te geven.
            </p>
            
            <div className="flex items-center justify-center mb-10">
              <a href="https://portomedia.nl/checkout/smoothiedetox" className="flex items-center gap-2 bg-lime-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-lime-600 transition-all shadow-lg shadow-lime-200 hover:shadow-lime-300 transform hover:-translate-y-1">
                Ja, ik wil starten! <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            <div className="flex items-center justify-center gap-4 text-sm text-stone-500">
              <div className="flex -space-x-2">
                 <div className="w-8 h-8 rounded-full border-2 border-white bg-lime-100 flex items-center justify-center text-lime-700 text-xs font-bold">JD</div>
                 <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center text-blue-700 text-xs font-bold">MK</div>
                 <div className="w-8 h-8 rounded-full border-2 border-white bg-orange-100 flex items-center justify-center text-orange-700 text-xs font-bold">AS</div>
              </div>
              <p>Al door 1.200+ vrouwen gedownload</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 bg-stone-50 border-y border-stone-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-serif text-stone-900 mb-8">
            Al door 1.200+ vrouwen gedownload met verbluffende resultaten:
          </h3>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
             <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 italic text-stone-600">
               “Ik voel me lichter en energieker dan ooit!”
             </div>
             <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 italic text-stone-600">
               “De eerste kilo’s vielen er binnen een week al af!”
             </div>
          </div>
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

      {/* Logic Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-medium mb-4 text-stone-900">Waarom dit wél werkt (Het is geen magie, het is biologie)</h2>
            <p className="text-lg text-stone-600 leading-relaxed">
              De meeste diëten falen omdat ze gebaseerd zijn op <em>minder</em> eten. Je lichaam gaat in de spaarstand en je metabolisme vertraagt. De Smoothie Detox doet precies het tegenovergestelde.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="bg-lime-100 p-3 rounded-xl flex-shrink-0 mt-1">
                <Droplets className="w-6 h-6 text-lime-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">1. Rust voor je spijsvertering = Meer energie</h3>
                <p className="text-stone-600 leading-relaxed">
                  Vast voedsel verteren kost je lichaam enorm veel energie. Door je ontbijt of lunch te vervangen door een smoothie, geef je je spijsvertering rust. Die bespaarde energie gebruikt je lichaam direct voor herstel en vetverbranding.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="bg-orange-100 p-3 rounded-xl flex-shrink-0 mt-1">
                <Leaf className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">2. Maximale opname van voedingsstoffen</h3>
                <p className="text-stone-600 leading-relaxed">
                  Omdat de ingrediënten al geblend zijn, worden vitamines en mineralen razendsnel opgenomen in je bloedbaan. Je voelt letterlijk binnen enkele minuten een energieboost, in plaats van de bekende 'after-dinner dip'.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="bg-blue-100 p-3 rounded-xl flex-shrink-0 mt-1">
                <Heart className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">3. Stabiele bloedsuikerspiegel (Weg met snaaitrek!)</h3>
                <p className="text-stone-600 leading-relaxed">
                  De specifieke combinaties van vezels, vetten en eiwitten in deze recepten houden je bloedsuikerspiegel stabiel. Hierdoor verdwijnt je snaaitrek als sneeuw voor de zon en is het makkelijk vol te houden.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-medium mb-4">Waarom duizenden vrouwen al resultaat zien</h2>
          </div>

          <div className="space-y-4">
            {[
              "Geen ingewikkelde diëten of uren in de keuken",
              "100% natuurlijke ingrediënten, zonder toevoegingen of suikers",
              "Ondersteunt je lever en nieren bij het afvoeren van afvalstoffen",
              "Verlies gewicht op een gezonde, natuurlijke manier",
              "Slechts 5 minuten per dag – makkelijk vol te houden"
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl bg-stone-50 border border-stone-100 hover:border-lime-200 transition-colors">
                <div className="bg-lime-100 p-2 rounded-full flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-lime-600" />
                </div>
                <p className="text-stone-800 font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section className="py-20 px-6 bg-lime-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-lime-200/20 blur-3xl rounded-full transform scale-90 translate-y-4"></div>
              <img 
                src="https://i.ibb.co/kVsSZ55x/grok-image-966a5c19-a89a-4cfa-a8bc-adc4c0007baf-removebg-preview-1.png" 
                alt="Smoothie Detox Receptenboek" 
                className="relative w-full max-w-xl h-auto drop-shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-serif font-medium mb-6">Wat je krijgt met het Smoothie Detox Receptenboek</h2>
            <ul className="space-y-4">
              {[
                "20 unieke smoothie recepten die je helpen afvallen én ontgiften",
                "Boodschappenlijstjes voor elke week, zodat je nooit hoeft te puzzelen",
                "Tips voor de beste blenders en hoe je elke smoothie perfect maakt",
                "Voedingswaarden per smoothie, zodat je precies weet wat je binnenkrijgt",
                "Direct te downloaden als PDF, zodat je meteen kunt starten"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-stone-700">
                  <CheckCircle className="w-5 h-5 text-lime-600 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <a href="https://portomedia.nl/checkout/smoothiedetox" className="inline-block bg-stone-900 text-white px-8 py-3 rounded-xl font-medium hover:bg-stone-800 transition-colors">
                Ja, ik wil starten!
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
              "Wil je je energiek en fit voelen zonder honger te lijden?",
              "Wil je die laatste hardnekkige kilo’s eindelijk kwijtraken?",
              "Wil je een simpele methode die maar 5 minuten per dag kost?"
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
             <p className="text-stone-500 mb-6 font-medium">Als je 3x JA zegt… start dan nu!</p>
             <p className="text-stone-800 font-bold text-xl mb-6">Start vandaag met afvallen en voel je fantastisch</p>
             <p className="text-stone-600 mb-6">Klik op de knop hieronder en begin direct met je detox:</p>
             <a href="https://portomedia.nl/checkout/smoothiedetox" className="w-full bg-lime-500 text-white px-8 py-4 rounded-2xl font-bold text-xl hover:bg-lime-600 transition-all shadow-lg shadow-lime-200 hover:shadow-lime-300 transform hover:-translate-y-1 flex items-center justify-center gap-2">
               Ja, ik wil starten! <ArrowRight className="w-6 h-6" />
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
            &copy; 2026 De Smoothie Detox – Alle rechten voorbehouden
          </div>
        </div>
      </footer>
    </div>
  );
}
