
import React, { useState } from 'react';
import { DONATION_TIERS } from '../constants';
import '../types'; // Ensure global JSX augmentation is loaded

type CheckoutStep = 'amount' | 'details' | 'payment' | 'success';

const Donate: React.FC = () => {
  const [step, setStep] = useState<CheckoutStep>('amount');
  const [selectedTier, setSelectedTier] = useState<string>(DONATION_TIERS[1].id);
  const [isMonthly, setIsMonthly] = useState(false);
  const [customAmount, setCustomAmount] = useState('');
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });

  const currentAmount = customAmount || DONATION_TIERS.find(t => t.id === selectedTier)?.amount || '0';

  return (
    <div className="pt-52 md:pt-64 pb-24 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {step !== 'success' && (
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h1 className="text-5xl font-heading font-bold text-navy mb-6">Invest in Wholeness.</h1>
            <p className="text-xl text-navy/70 leading-relaxed">
              Your contribution funds clinical-spiritual training, global outreach, and the restoration of souls across continents.
            </p>
          </div>
        )}

        {step === 'success' ? (
          <div className="max-w-2xl mx-auto text-center py-20 bg-white rounded-[4rem] shadow-2xl border border-teal/20 animate-bounce-in">
            <div className="w-24 h-24 bg-teal text-white rounded-full flex items-center justify-center text-4xl mx-auto mb-8 shadow-xl">✓</div>
            <h2 className="text-4xl font-heading font-bold text-navy mb-4">Contribution Received.</h2>
            <p className="text-xl text-navy/60 mb-10 px-8">
              Thank you for your gift. Together, we are building a bridge to healing.
            </p>
            <button 
              onClick={() => { 
                setStep('amount'); 
                setFormData({firstName: '', lastName: '', email: '', phone: ''}); 
                setCustomAmount(''); 
              }}
              className="text-forest font-bold underline hover:text-teal transition"
            >
              Make another donation
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-navy/5 relative overflow-hidden">
              <div className="flex justify-between mb-12 relative">
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-sand -translate-y-1/2 -z-10"></div>
                {['Amount', 'Details', 'Payment'].map((label, i) => {
                  const s = ['amount', 'details', 'payment'][i];
                  const isActive = step === s;
                  const isPast = ['amount', 'details', 'payment'].indexOf(step) > i;
                  return (
                    <div key={label} className="flex flex-col items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 ${isActive ? 'bg-teal text-navy scale-125 shadow-lg' : isPast ? 'bg-forest text-white' : 'bg-sand text-navy/30'}`}>
                        {isPast ? '✓' : i + 1}
                      </div>
                      <span className={`text-[10px] font-black uppercase tracking-widest mt-3 ${isActive ? 'text-navy' : 'text-navy/30'}`}>{label}</span>
                    </div>
                  );
                })}
              </div>

              {step === 'amount' && (
                <div className="animate-fade-in space-y-8">
                  <div className="flex bg-sand p-1.5 rounded-2xl mb-10 max-w-[320px] mx-auto shadow-inner">
                    <button onClick={() => setIsMonthly(false)} className={`flex-1 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${!isMonthly ? 'bg-forest text-sand shadow-lg' : 'text-navy/40 hover:text-navy'}`}>One-time</button>
                    <button onClick={() => setIsMonthly(true)} className={`flex-1 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${isMonthly ? 'bg-forest text-sand shadow-lg' : 'text-navy/40 hover:text-navy'}`}>Monthly</button>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {DONATION_TIERS.map((tier) => (
                      <button 
                        key={tier.id}
                        onClick={() => { setSelectedTier(tier.id); setCustomAmount(''); }}
                        className={`p-6 rounded-3xl border-2 transition-all text-left group ${selectedTier === tier.id && !customAmount ? 'border-teal bg-teal/5 shadow-md' : 'border-sand hover:border-teal/30 hover:bg-sand/30'}`}
                      >
                        <p className={`text-2xl font-black mb-1 transition-colors ${selectedTier === tier.id && !customAmount ? 'text-navy' : 'text-navy/30 group-hover:text-navy/60'}`}>${tier.amount}</p>
                        <p className="text-[10px] font-black uppercase tracking-widest opacity-40">{tier.label}</p>
                      </button>
                    ))}
                  </div>

                  <div className="pt-4">
                    <label className="block text-[10px] font-black text-navy/40 uppercase tracking-widest mb-3">Or enter a custom amount</label>
                    <div className="relative">
                      <span className="absolute left-6 top-1/2 -translate-y-1/2 text-2xl font-black text-navy/20">$</span>
                      <input 
                        type="number" 
                        placeholder="0.00" 
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        className="w-full pl-12 pr-6 py-6 bg-sand rounded-3xl text-2xl font-black focus:ring-2 ring-teal outline-none transition-shadow" 
                      />
                    </div>
                  </div>

                  <button 
                    onClick={() => setStep('details')}
                    disabled={!currentAmount || currentAmount === '0'}
                    className="w-full bg-navy text-sand font-black py-6 rounded-3xl shadow-xl hover:bg-forest transition-all transform hover:scale-[1.01] active:scale-95 flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Continue to Details
                    <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </button>
                </div>
              )}

              {step === 'details' && (
                <div className="animate-fade-in space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-navy/40">First Name</label>
                      <input type="text" value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})} className="w-full bg-sand px-6 py-4 rounded-2xl outline-none focus:ring-1 ring-forest" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-navy/40">Last Name</label>
                      <input type="text" value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})} className="w-full bg-sand px-6 py-4 rounded-2xl outline-none focus:ring-1 ring-forest" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-navy/40">Email for Receipt</label>
                    <input type="email" placeholder="name@email.com" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-sand px-6 py-4 rounded-2xl outline-none focus:ring-1 ring-forest" />
                  </div>
                  <div className="pt-10 flex gap-4">
                    <button onClick={() => setStep('amount')} className="flex-1 py-5 rounded-2xl font-bold text-navy/40 hover:text-navy transition">Back</button>
                    <button onClick={() => setStep('payment')} disabled={!formData.firstName || !formData.email} className="flex-[2] bg-navy text-sand font-black py-5 rounded-2xl shadow-xl hover:bg-forest transition disabled:opacity-50">Proceed to Payment</button>
                  </div>
                </div>
              )}

              {step === 'payment' && (
                <div className="animate-fade-in space-y-8">
                  <div className="bg-sand/50 p-6 rounded-2xl flex items-center justify-between border border-navy/5">
                    <div>
                      <p className="text-[10px] font-black uppercase text-navy/30 tracking-widest">Selected Gift</p>
                      <p className="text-2xl font-black text-navy">${currentAmount}<span className="text-xs font-normal opacity-40 ml-1">{isMonthly ? '/ month' : ' once'}</span></p>
                    </div>
                    <button onClick={() => setStep('amount')} className="text-[10px] font-black uppercase text-teal border-b border-teal">Change</button>
                  </div>

                  <div className="space-y-6">
                    <p className="text-[10px] font-black uppercase tracking-widest text-navy/40 text-center mb-4">Complete Your Secure Payment</p>
                    
                    <div className="flex justify-center">
                      <stripe-buy-button
                        buy-button-id="buy_btn_1T0r3cPKLrZqnz5O6WZajqXO"
                        publishable-key="pk_live_51RW9VEPKLrZqnz5OhFz218TWCwngrDGHVd28wwg2PosJV4Wchf32VQaVtfAqDtOXDsDwbA33QUBhn6n7F2jSIqNL00ObFxHYVR"
                      >
                      </stripe-buy-button>
                    </div>

                    <p className="text-[10px] font-medium text-navy/40 text-center leading-relaxed px-4 pt-4">
                      Please use the secure Stripe button above to complete your contribution. 
                    </p>
                  </div>

                  <div className="flex flex-col items-center gap-4 pt-4">
                    <div className="flex items-center gap-2 text-navy/30">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path></svg>
                      <span className="text-[10px] font-black uppercase tracking-widest">Bank-grade 256-bit SSL Security</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-12 lg:sticky lg:top-48">
              <div className="p-10 bg-forest text-sand rounded-[3rem] relative overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <h3 className="text-2xl font-heading font-bold mb-6">Your Gift is the Catalyst.</h3>
                <p className="opacity-80 leading-relaxed mb-8 text-lg font-light">
                  Your donation is immediately deployed to provide scholarships for clinical training and build local mental health infrastructure in high-need regions.
                </p>
                <div className="bg-white/10 p-6 rounded-2xl border border-white/10">
                  <p className="text-xs font-black uppercase tracking-widest mb-2 text-teal">Audited Transparency</p>
                  <p className="text-sm font-medium">92% of every dollar goes directly toward program delivery and global outreach.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Donate;
