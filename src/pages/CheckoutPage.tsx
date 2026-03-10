import { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Lock, CheckCircle, ArrowRight, CreditCard, Loader2 } from 'lucide-react';

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState('ideal');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      method: paymentMethod,
    };

    try {
      const response = await fetch('/api/create-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      let result;
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.indexOf("application/json") !== -1) {
        result = await response.json();
      } else {
        const text = await response.text();
        throw new Error(`Server fout (${response.status} ${response.statusText}): ${text || 'Geen inhoud'}`);
      }

      if (!response.ok) {
        throw new Error(result.error || 'Er is iets misgegaan bij het aanmaken van de betaling.');
      }

      if (result.checkoutUrl) {
        window.location.href = result.checkoutUrl;
      } else {
        throw new Error('Geen checkout URL ontvangen van de server.');
      }
    } catch (err: any) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800 selection:bg-primary-200 py-12">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header - Minimal */}
        <div className="flex justify-center mb-12">
          <img 
            src="https://i.ibb.co/ZpBRMcdB/logo.jpg" 
            alt="Smoothie Detox" 
            className="h-12 w-auto"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="grid md:grid-cols-12 gap-12 items-start">
          
          {/* Left Column - Checkout Form */}
          <div className="md:col-span-7 bg-white p-8 rounded-3xl shadow-sm border border-stone-100">
            <h1 className="text-2xl font-serif font-medium mb-6 text-stone-900">Rond je aanmelding af</h1>
            
            {error && (
              <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-xl border border-red-100 text-sm">
                {error}
              </div>
            )}

            <form className="space-y-8" onSubmit={handleSubmit}>
              {/* Contact Info */}
              <section>
                <h2 className="text-lg font-bold text-stone-900 mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center text-sm">1</span>
                  Jouw gegevens
                </h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1">Voornaam</label>
                      <input type="text" name="firstName" className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all" placeholder="Bijv. Sarah" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1">Achternaam</label>
                      <input type="text" name="lastName" className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all" placeholder="Bijv. de Vries" required />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1">E-mailadres</label>
                    <input type="email" name="email" className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all" placeholder="Waar mogen we het schema heen sturen?" required />
                  </div>
                </div>
              </section>

              {/* Payment Method */}
              <section>
                <h2 className="text-lg font-bold text-stone-900 mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center text-sm">2</span>
                  Kies je betaalmethode
                </h2>
                <div className="space-y-3">
                  <label className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${paymentMethod === 'ideal' ? 'border-primary-500 bg-primary-50' : 'border-stone-200 hover:border-stone-300'}`}>
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'ideal' ? 'border-primary-500' : 'border-stone-300'}`}>
                        {paymentMethod === 'ideal' && <div className="w-2.5 h-2.5 rounded-full bg-primary-500" />}
                      </div>
                      <input type="radio" name="paymentMethod" value="ideal" className="hidden" checked={paymentMethod === 'ideal'} onChange={() => setPaymentMethod('ideal')} />
                      <span className="font-medium text-stone-900">iDEAL</span>
                    </div>
                    <img src="https://d1twnm33rljaon.cloudfront.net/iDEAL_Wero_Lockup_Yellow_Horizontal_RGB.png" alt="iDEAL" className="h-6 object-contain" />
                  </label>

                  <label className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${paymentMethod === 'bancontact' ? 'border-primary-500 bg-primary-50' : 'border-stone-200 hover:border-stone-300'}`}>
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'bancontact' ? 'border-primary-500' : 'border-stone-300'}`}>
                        {paymentMethod === 'bancontact' && <div className="w-2.5 h-2.5 rounded-full bg-primary-500" />}
                      </div>
                      <input type="radio" name="paymentMethod" value="bancontact" className="hidden" checked={paymentMethod === 'bancontact'} onChange={() => setPaymentMethod('bancontact')} />
                      <span className="font-medium text-stone-900">Bancontact</span>
                    </div>
                    <img src="https://www.pyroservice.eu/cdn/shop/files/6.webp?v=1765380994&width=1445" alt="Bancontact" className="h-6 object-contain" />
                  </label>
                </div>
              </section>

              {/* Submit Button */}
              <div className="pt-4">
                <button type="submit" disabled={isLoading} className="w-full flex items-center justify-center gap-2 bg-primary-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-primary-600 transition-all shadow-lg shadow-primary-200 hover:shadow-primary-300 transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none">
                  {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Lock className="w-5 h-5" />} 
                  {isLoading ? 'Bezig met laden...' : 'Veilig Afrekenen'}
                </button>
                <p className="text-center text-sm text-stone-500 mt-4 flex items-center justify-center gap-1">
                  <ShieldCheck className="w-4 h-4" /> Je betaling wordt veilig verwerkt
                </p>
              </div>
            </form>
          </div>

          {/* Right Column - Order Summary & Trust */}
          <div className="md:col-span-5 space-y-6">
            
            {/* Summary Card */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-stone-100">
              <h3 className="text-lg font-bold text-stone-900 mb-4">Jouw Bestelling</h3>
              
              <div className="flex gap-4 mb-6">
                <div className="w-20 h-24 bg-stone-100 rounded-lg overflow-hidden flex-shrink-0">
                  <img 
                    src="https://i.ibb.co/kVsSZ55x/grok-image-966a5c19-a89a-4cfa-a8bc-adc4c0007baf-removebg-preview-1.png" 
                    alt="Smoothie Detox" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900">7-Daagse Smoothie Challenge</h4>
                  <p className="text-sm text-stone-500 mt-1">Start: 14 maart</p>
                  <p className="text-sm text-stone-500">Digitaal programma (direct toegang)</p>
                </div>
              </div>

              <div className="border-t border-stone-100 pt-4 space-y-2">
                <div className="flex justify-between text-stone-600">
                  <span>Subtotaal</span>
                  <span>€ 37,00</span>
                </div>
                <div className="flex justify-between font-bold text-lg text-stone-900 pt-2 border-t border-stone-100">
                  <span>Totaal</span>
                  <span>€ 37,00</span>
                </div>
              </div>
            </div>

            {/* Trust & Guarantee */}
            <div className="bg-stone-900 text-white p-6 rounded-3xl shadow-sm">
              <div className="flex items-start gap-4">
                <div className="bg-stone-800 p-3 rounded-full text-primary-400 flex-shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">14 Dagen Bedenktijd</h4>
                  <p className="text-stone-400 text-sm leading-relaxed">
                    Je kunt altijd nog van gedachten veranderen. Ben je toch niet tevreden of is het niet wat je zocht? Stuur ons binnen 14 dagen een mailtje en je krijgt direct je aankoopbedrag terug. Zonder gedoe.
                  </p>
                </div>
              </div>
            </div>

            {/* Authority / Social Proof */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-stone-100">
              <div className="flex items-center gap-3 mb-3">
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
                <div className="flex text-yellow-400">
                  {"★★★★★".split("").map((star, i) => <span key={i}>{star}</span>)}
                </div>
              </div>
              <p className="text-sm text-stone-600 italic">
                "Al meer dan 1.200 vrouwen gingen je voor en hebben hun metabolisme succesvol gereset met deze methode van Dr. Roy de Jong."
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
