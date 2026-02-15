import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ApplySOS: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    reason: '',
    currentStatus: 'Struggling with cycles',
    heardAbout: 'Social Media'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (submitted) {
    return (
      <div className="pt-64 pb-44 px-4 bg-sand/20 min-h-screen flex items-center justify-center">
        <div className="max-w-2xl w-full bg-white p-12 lg:p-20 rounded-[4rem] shadow-2xl text-center border border-teal/20 animate-fade-in">
          <div className="w-24 h-24 bg-forest text-sand rounded-full flex items-center justify-center text-4xl mx-auto mb-10 shadow-xl">✓</div>
          <h2 className="text-4xl lg:text-5xl font-heading font-black text-navy mb-6">Application Received.</h2>
          <p className="text-xl text-navy/60 mb-12 font-light leading-relaxed">
            Thank you for taking this brave step. Our cohort coordinator will review your application and contact you via email with the next steps and intake details.
          </p>
          <Link to="/programs/sos" className="inline-block text-forest font-black uppercase tracking-widest text-sm border-b-2 border-forest pb-1 hover:text-navy transition-all">
            Back to SOS Overview
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-52 pb-32 px-4 bg-sand/20 min-h-screen">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        
        {/* Context Sidebar */}
        <div className="space-y-12 lg:sticky lg:top-44">
          <Link to="/programs/sos" className="inline-flex items-center text-navy/40 hover:text-navy transition font-black uppercase tracking-widest text-xs">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"></path></svg>
            Back to Overview
          </Link>
          
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-7xl font-heading font-black text-navy leading-tight tracking-tighter">
              The Path to <br/><span className="text-forest italic">Wholeness.</span>
            </h1>
            <p className="text-xl text-navy/60 font-light leading-relaxed">
              Applying for S.O.S. is the first agreement you make with your future self. We take this process seriously to ensure our cohorts are high-trust, safe, and focused.
            </p>
          </div>

          <div className="bg-forest p-10 rounded-[3rem] text-sand shadow-xl">
             <h4 className="text-teal font-black uppercase tracking-widest text-xs mb-6">What Happens Next?</h4>
             <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0">1</span>
                  <p className="text-sm opacity-80">Our team reviews your application for program fit.</p>
                </div>
                <div className="flex gap-4">
                  <span className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0">2</span>
                  <p className="text-sm opacity-80">You'll receive an email with cohort dates and tuition/scholarship details.</p>
                </div>
                <div className="flex gap-4">
                  <span className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0">3</span>
                  <p className="text-sm opacity-80">An intake call may be scheduled to answer any clinical or spiritual questions.</p>
                </div>
             </div>
          </div>
        </div>

        {/* Application Form */}
        <div className="bg-white p-10 md:p-16 rounded-[4rem] shadow-2xl border border-navy/5">
          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="space-y-8">
               <h3 className="text-2xl font-heading font-bold text-navy border-b border-sand pb-4">Personal Information</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-navy/40">Full Name</label>
                    <input required type="text" placeholder="Your Name" className="w-full bg-sand px-6 py-4 rounded-2xl outline-none focus:ring-1 ring-forest transition-shadow" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-navy/40">Email Address</label>
                    <input required type="email" placeholder="name@email.com" className="w-full bg-sand px-6 py-4 rounded-2xl outline-none focus:ring-1 ring-forest transition-shadow" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                  </div>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-navy/40">Phone Number</label>
                    <input required type="tel" placeholder="+1 (000) 000-0000" className="w-full bg-sand px-6 py-4 rounded-2xl outline-none focus:ring-1 ring-forest transition-shadow" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-navy/40">Location (City, Country)</label>
                    <input required type="text" placeholder="Lagos, Nigeria / LA, CA" className="w-full bg-sand px-6 py-4 rounded-2xl outline-none focus:ring-1 ring-forest transition-shadow" value={formData.location} onChange={e => setFormData({...formData, location: e.target.value})} />
                  </div>
               </div>
            </div>

            <div className="space-y-8">
               <h3 className="text-2xl font-heading font-bold text-navy border-b border-sand pb-4">Spiritual & Emotional Context</h3>
               <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-navy/40">Which best describes your current season?</label>
                  <select className="w-full bg-sand px-6 py-5 rounded-2xl outline-none focus:ring-1 ring-forest appearance-none cursor-pointer" value={formData.currentStatus} onChange={e => setFormData({...formData, currentStatus: e.target.value})}>
                    <option>Feeling stuck in repetitive emotional cycles</option>
                    <option>High-functioning but privately struggling</option>
                    <option>Seeking deeper spiritual identity & clarity</option>
                    <option>Navigating trauma or significant loss</option>
                    <option>Ready to lead others and seeking wholeness first</option>
                  </select>
               </div>
               <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-navy/40">Why are you applying for S.O.S. at this time?</label>
                  <textarea required rows={5} placeholder="Be as honest as you're comfortable with. This is a safe space." className="w-full bg-sand px-6 py-5 rounded-2xl outline-none focus:ring-1 ring-forest resize-none transition-shadow" value={formData.reason} onChange={e => setFormData({...formData, reason: e.target.value})}></textarea>
               </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-5 bg-sand/50 rounded-2xl border border-navy/5">
                 <input required type="checkbox" className="mt-1 w-5 h-5 accent-forest" />
                 <p className="text-xs text-navy/60 leading-relaxed font-medium">
                    I understand that S.O.S. is a 6-week commitment requiring weekly attendance and intentional homework. I am ready to prioritize my healing.
                 </p>
              </div>
            </div>

            <button type="submit" className="w-full bg-forest text-sand font-black py-6 rounded-2xl shadow-xl hover:bg-navy transition-all transform hover:scale-[1.01] active:scale-95 text-lg">
              Submit My Application
            </button>
          </form>
        </div>
      </div>
      
      <style>{`
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        .animate-fade-in { animation: fade-in 1s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default ApplySOS;
