import { motion } from 'motion/react';
import { Leaf, Droplets, Heart, CheckCircle, ArrowRight, AlertCircle, Clock, ShieldCheck, Gift, Star, Zap } from 'lucide-react';

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

      {/* Hero Section (The Hook) */}
      <section className="pt-28 md:pt-32 pb-12 md:pb-20 px-4 md:px-6 bg-gradient-to-b from-stone-100 to-stone-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-800 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider mb-6">
              <Clock className="w-4 h-4" /> Groep start 14 maart - Beperkt plek
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-medium leading-[1.1] mb-6 text-stone-900">
              Voel Je Weer Thuis In Je Eigen Lichaam: <span className="text-primary-600 italic">Reset Je Metabolisme</span> In 7 Dagen
            </h1>
            <p className="text-lg sm:text-xl text-stone-600 font-medium mb-8 max-w-2xl mx-auto leading-relaxed">
              Zonder hongerdiëten, zonder uren in de sportschool, en zonder je favoriete eten voor altijd op te geven. Ontdek de simpele methode om een hardnekkig opgeblazen buik en vermoeidheid aan te pakken.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a href="/checkout" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-primary-600 transition-all shadow-lg shadow-primary-200 hover:shadow-primary-300 transform hover:-translate-y-1">
                Ja, ik doe mee op 14 maart <ArrowRight className="w-5 h-5" />
              </a>
              <p className="text-sm text-stone-500 flex items-center justify-center gap-1">
                <ShieldCheck className="w-4 h-4" /> 100% Resultaat Garantie
              </p>
            </div>

            {/* Social Proof Teaser */}
            <div className="flex justify-center gap-4 sm:gap-6 md:gap-12 mb-10">
              <div className="w-36 sm:w-48 md:w-56 bg-white p-2 md:p-3 rounded-2xl shadow-lg rotate-[-2deg] hover:rotate-0 transition-transform duration-300 border border-stone-100">
                <div className="aspect-[3/4] rounded-xl overflow-hidden mb-3">
                  <img 
                    src="https://i.ibb.co/kgH4cV5V/a982e86c-6a36-44a8-8fff-4db40e8f2545.jpg" 
                    alt="Resultaat 1" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="text-[10px] sm:text-xs font-bold text-stone-400 uppercase tracking-wider text-center">Na 7 Dagen</p>
              </div>
              <div className="w-36 sm:w-48 md:w-56 bg-white p-2 md:p-3 rounded-2xl shadow-lg rotate-[2deg] hover:rotate-0 transition-transform duration-300 border border-stone-100">
                <div className="aspect-[3/4] rounded-xl overflow-hidden mb-3">
                  <img 
                    src="https://i.ibb.co/qMfFds89/9bd31f2e-e644-4eb5-9fe2-fa212c4bed84.jpg" 
                    alt="Resultaat 2" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="text-[10px] sm:text-xs font-bold text-stone-400 uppercase tracking-wider text-center">Na 7 Dagen</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem & Agitation (PAS) */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl sm:text-3xl font-serif font-medium mb-8 md:mb-10 text-stone-900 text-center">
            Klinkt dit pijnlijk herkenbaar?
          </h2>
          
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="bg-red-100 p-2 rounded-full text-red-600 mt-1 flex-shrink-0">
                <AlertCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-stone-900 mb-2">Je doet alles "goed", maar ziet geen resultaat</h3>
                <p className="text-stone-600 leading-relaxed text-sm sm:text-base">Je let op je porties, je probeert gezond te eten, en je drinkt voldoende water. Toch lijkt die weegschaal muurvast te staan en voelt je kleding strak aan.</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="bg-red-100 p-2 rounded-full text-red-600 mt-1 flex-shrink-0">
                <AlertCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-stone-900 mb-2">De beruchte "opgeblazen buik"</h3>
                <p className="text-stone-600 leading-relaxed text-sm sm:text-base">Aan het begin van de dag gaat het nog wel, maar naarmate de dag vordert, zwelt je buik op. Het is oncomfortabel, frustrerend en het maakt je onzeker.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-red-100 p-2 rounded-full text-red-600 mt-1 flex-shrink-0">
                <AlertCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-stone-900 mb-2">Constante vermoeidheid & sugar cravings</h3>
                <p className="text-stone-600 leading-relaxed text-sm sm:text-base">Rond 15:00 uur stort je in. Je hebt koffie of suiker nodig om de dag door te komen. Je wordt moe wakker, zelfs na 8 uur slaap.</p>
              </div>
            </div>
          </div>

          <div className="mt-10 md:mt-12 bg-stone-100 p-6 md:p-8 rounded-2xl md:rounded-3xl border border-stone-200">
            <h3 className="text-xl sm:text-2xl font-serif font-medium mb-3 md:mb-4 text-stone-900">Het is niet jouw schuld.</h3>
            <p className="text-base sm:text-lg text-stone-700 leading-relaxed">
              Jarenlang hebben we geleerd dat we "minder moeten eten en meer moeten bewegen". Maar als je spijsvertering overbelast is en je metabolisme vastzit in de suikerverbrandings-stand, werkt geen enkel dieet. Je vecht dan letterlijk tegen je eigen biologie.
            </p>
          </div>
        </div>
      </section>

      {/* Solution (The Unique Mechanism) */}
      <section className="py-16 md:py-20 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-medium mb-4 md:mb-6">
              De Oplossing: <span className="text-primary-400 italic">Digestive Rest</span> & Metabolische Reset
            </h2>
            <p className="text-lg sm:text-xl text-stone-300 max-w-2xl mx-auto">
              Ontwikkeld door Dr. Roy de Jong. Geen magie, gewoon keiharde biologie.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
            <div className="space-y-8 order-2 md:order-1">
              <div className="flex gap-4">
                <div className="bg-stone-800 p-3 rounded-xl text-primary-400 h-fit flex-shrink-0">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">1. Spijsverteringsrust</h3>
                  <p className="text-stone-400 leading-relaxed text-sm sm:text-base">
                    Door 7 dagen lang specifieke, vloeibare voeding (smoothies) te consumeren, hoeft je maag-darmstelsel nauwelijks moeite te doen. Dit geeft je lichaam de energie terug die normaal naar vertering gaat, waardoor ontstekingen en een opgeblazen gevoel verdwijnen.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-stone-800 p-3 rounded-xl text-primary-400 h-fit flex-shrink-0">
                  <Droplets className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">2. De Vetverbrandings-Switch</h3>
                  <p className="text-stone-400 leading-relaxed text-sm sm:text-base">
                    De recepten zijn zó samengesteld dat ze je bloedsuikerspiegel stabiliseren. Je lichaam wordt gedwongen om over te schakelen van suikerverbranding naar het aanspreken van opgeslagen vetreserves.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative order-1 md:order-2 px-6 md:px-0">
              <div className="absolute inset-0 bg-primary-500/20 blur-3xl rounded-full"></div>
              <img 
                src="https://i.ibb.co/kVsSZ55x/grok-image-966a5c19-a89a-4cfa-a8bc-adc4c0007baf-removebg-preview-1.png" 
                alt="Smoothie Detox Receptenboek" 
                className="relative z-10 w-full max-w-sm mx-auto h-auto drop-shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Value Stacking (Justifying the Price) */}
      <section className="py-16 md:py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-medium mb-4 md:mb-6 text-stone-900">
              Wat je precies krijgt als je vandaag instapt
            </h2>
            <p className="text-base sm:text-lg text-stone-600">Alles wat je nodig hebt voor gegarandeerd resultaat, zonder het giswerk.</p>
          </div>

          <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl border border-stone-100 overflow-hidden">
            <div className="p-6 md:p-10 space-y-6">
              
              {/* Item 1 */}
              <div className="flex items-start gap-3 sm:gap-4 pb-6 border-b border-stone-100">
                <div className="bg-primary-100 p-2 sm:p-3 rounded-xl text-primary-600 mt-1 flex-shrink-0">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-1 sm:mb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-stone-900">Het 7-Dagen Reset Protocol</h3>
                    <span className="text-stone-400 line-through text-xs sm:text-sm mt-1 sm:mt-0">Waarde €97</span>
                  </div>
                  <p className="text-stone-600 text-sm sm:text-base">Het complete, stap-voor-stap schema met de exacte, vullende smoothie-recepten die je metabolisme herstarten. Geen honger, wel resultaat.</p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start gap-3 sm:gap-4 pb-6 border-b border-stone-100">
                <div className="bg-primary-100 p-2 sm:p-3 rounded-xl text-primary-600 mt-1 flex-shrink-0">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-1 sm:mb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-stone-900">Kant-en-klare Boodschappenlijsten</h3>
                    <span className="text-stone-400 line-through text-xs sm:text-sm mt-1 sm:mt-0">Waarde €27</span>
                  </div>
                  <p className="text-stone-600 text-sm sm:text-base">Bespaar tijd en geld in de supermarkt. Je weet precies wat je moet halen voor de hele week. Alle ingrediënten zijn gewoon bij de lokale supermarkt te vinden.</p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start gap-3 sm:gap-4 pb-6 border-b border-stone-100">
                <div className="bg-primary-100 p-2 sm:p-3 rounded-xl text-primary-600 mt-1 flex-shrink-0">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-1 sm:mb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-stone-900">De 'Na De Reset' Handleiding</h3>
                    <span className="text-stone-400 line-through text-xs sm:text-sm mt-1 sm:mt-0">Waarde €47</span>
                  </div>
                  <p className="text-stone-600 text-sm sm:text-base">Het grootste probleem met diëten is het jojo-effect. Met deze gids leer je precies hoe je na de 7 dagen je resultaat behoudt en weer normaal, gezond kunt eten.</p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-primary-100 p-2 sm:p-3 rounded-xl text-primary-600 mt-1 flex-shrink-0">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-1 sm:mb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-stone-900">Dagelijkse Begeleiding & Motivatie</h3>
                    <span className="text-stone-400 line-through text-xs sm:text-sm mt-1 sm:mt-0">Waarde €47</span>
                  </div>
                  <p className="text-stone-600 text-sm sm:text-base">Je doet dit niet alleen. Elke dag van de challenge krijg je precies te horen wat je kunt verwachten, wat er in je lichaam gebeurt en hoe je gemotiveerd blijft.</p>
                </div>
              </div>

            </div>
            
            <div className="bg-stone-900 p-6 sm:p-8 md:p-10 text-white text-center">
              <div className="mb-4">
                <span className="text-stone-400 text-base sm:text-lg">Totale Waarde: <span className="line-through">€218,00</span></span>
              </div>
              <div className="mb-6 sm:mb-8">
                <span className="text-stone-300 text-lg sm:text-xl">Jouw Investering Vandaag:</span>
                <div className="text-5xl sm:text-6xl font-bold text-primary-400 mt-2">€97</div>
              </div>
              <a href="/checkout" className="inline-flex items-center justify-center gap-2 w-full md:w-auto bg-primary-500 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold text-lg sm:text-xl hover:bg-primary-600 transition-all shadow-lg shadow-primary-500/30 transform hover:-translate-y-1">
                Ja, ik wil direct toegang <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <div className="mt-6 flex items-center justify-center gap-2 text-xs sm:text-sm text-stone-400">
                <ShieldCheck className="w-4 h-4" /> 14 Dagen 'Niet Goed, Geld Terug' Garantie
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 md:py-20 bg-white border-y border-stone-100">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <div className="flex justify-center mb-4 md:mb-6 text-yellow-400">
            <Star className="w-5 h-5 md:w-6 md:h-6 fill-current" />
            <Star className="w-5 h-5 md:w-6 md:h-6 fill-current" />
            <Star className="w-5 h-5 md:w-6 md:h-6 fill-current" />
            <Star className="w-5 h-5 md:w-6 md:h-6 fill-current" />
            <Star className="w-5 h-5 md:w-6 md:h-6 fill-current" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-medium mb-8 md:mb-12 text-stone-900">Meer dan 1.200 vrouwen gingen je voor</h2>
          
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
            {[
              "Mijn buik voelde na 4 dagen al lichter. Eindelijk een methode die niet voelt als uithongeren.",
              "Ik had veel minder cravings. De smoothies zijn verrassend vullend en lekker.",
              "Eindelijk iets wat simpel te volgen is. Geen ingewikkelde recepten of uren in de keuken.",
              "Ik voelde me energieker en mijn kleding zit weer comfortabel. Een absolute aanrader!"
            ].map((quote, i) => (
              <div key={i} className="bg-stone-50 p-6 md:p-8 rounded-2xl shadow-sm border border-stone-100 italic text-stone-600 text-left relative">
                <span className="absolute top-2 left-3 md:top-4 md:left-4 text-4xl text-stone-200 font-serif">"</span>
                <p className="relative z-10 pt-4 text-sm md:text-base">{quote}</p>
              </div>
            ))}
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
