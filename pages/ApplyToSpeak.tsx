import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ApplyToSpeak: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    credentials: '',
    email: '',
    phone: '',
    expertise: 'Mental Health',
    sessionTitle: '',
    abstract: '',
    bio: '',
    videoLink: '',
    motivation: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (submitted) {
    return (
      <div className="pt-64 pb-44 px-4 bg-sand/20 min-h-screen flex items-center justify-center">
        <div className="max-w-2xl w-full bg-white p-12 lg:p-20 rounded-[4rem] shadow-2xl text-center border border-teal/20 animate-fade-in">
          <div className="w-24 h-24 bg-navy text-teal rounded-full flex items-center justify-center text-4xl mx-auto mb-10 shadow-xl">✓</div>
          <h2 className="text-4xl lg:text-5xl font-heading font-black text-navy mb-6">Application Submitted.</h2>
          <p className="text-xl text-navy/60 mb-12 font-light leading-relaxed">
            Your voice is valuable. Our faculty selection committee will review your proposal for the Rise & Restore 2027 stage. Expect a response via email within 10-14 business days.
          </p>
          <Link to="/programs/rise-restore" className="inline-block text-forest font-black uppercase tracking-widest text-sm border-b-2 border-forest pb-1 hover:text-navy transition-all">
            Back to Summit Overview
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
          <Link to="/programs/rise-restore" className="inline-flex items-center text-navy/40 hover:text-navy transition font-black uppercase tracking-widest text-xs">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"></path></svg>
            Back to Rise & Restore
          </Link>
          
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-7xl font-heading font-black text-navy leading-tight tracking-tighter">
              Call for <br/><span className="text-forest italic">Visionaries.</span>
            </h1>
            <p className="text-xl text-navy/60 font-light leading-relaxed">
              We are curating a faculty of high-impact leaders, clinicians, and spiritual architects for the 2027 stage. If your message bridges the gap between deep healing and generational power, we want to hear from you.
            </p>
          </div>

          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop" 
              alt="Diverse professional woman speaking" 
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-navy/40 flex items-end p-10">
              <p className="text-white font-heading font-bold italic text-2xl">"Your story is the bridge others are waiting to cross."</p>
            </div>
          </div>

          <div className="bg-navy p-10 rounded-[3rem] text-sand shadow-xl">
             <h4 className="text-teal font-black uppercase tracking-widest text-xs mb-6">The Selection Process</h4>
             <div className="space-y-6">
                {[
                  { n: "1", t: "Review", d: "Committee reviews alignment with the Chi Method™ framework." },
                  { n: "2", t: "Interview", d: "Candidate virtual interview with our Faculty Leads." },
                  { n: "3", t: "Onboarding", d: "Speaker confirmation and media kit preparation." }
                ].map((item) => (
                  <div key={item.n} className="flex gap-4">
                    <span className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0">{item.n}</span>
                    <div>
                      <p className="font-bold text-teal">{item.t}</p>
                      <p className="text-xs opacity-60">{item.d}</p>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </div>

        {/* Application Form */}
        <div className="bg-white p-10 md:p-16 rounded-[4rem] shadow-2xl border border-navy/5">
          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="space-y-8">
               <h3 className="text-2xl font-heading font-bold text-navy border-b border-sand pb-4 italic">The Identity.</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-navy/40">Full Name</label>
                    <input required type="text" placeholder="Your Name" className="w-full bg-sand px-6 py-4 rounded-2xl outline-none focus:ring-1 ring-forest transition-shadow" value={formData.fullName} onChange={e => setFormData({...formData, fullName: e.target.value})} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-navy/40">Professional Credentials</label>
                    <input required type="text" placeholder="e.g., PhD, MD, PMHNP" className="w-full bg-sand px-6 py-4 rounded-2xl outline-none focus:ring-1 ring-forest transition-shadow" value={formData.credentials} onChange={e => setFormData({...formData, credentials: e.target.value})} />
                  </div>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-navy/40">Email Address</label>
                    <input required type="email" placeholder="name@email.com" className="w-full bg-sand px-6 py-4 rounded-2xl outline-none focus:ring-1 ring-forest transition-shadow" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-navy/40">Primary Area of Expertise</label>
                    <select className="w-full bg-sand px-6 py-4 rounded-2xl outline-none focus:ring-1 ring-forest appearance-none cursor-pointer" value={formData.expertise} onChange={e => setFormData({...formData, expertise: e.target.value})}>
                      <option>Mental Health & Psychiatry</option>
                      <option>Theology & Spiritual Formation</option>
                      <option>High-Performance Leadership</option>
                      <option>Community Advocacy</option>
                      <option>Emotional Intelligence</option>
                    </select>
                  </div>
               </div>
            </div>

            <div className="space-y-8">
               <h3 className="text-2xl font-heading font-bold text-navy border-b border-sand pb-4 italic">The Message.</h3>
               <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-navy/40">Proposed Session Title</label>
                  <input required type="text" placeholder="What is the core theme of your talk?" className="w-full bg-sand px-6 py-4 rounded-2xl outline-none focus:ring-1 ring-forest transition-shadow" value={formData.sessionTitle} onChange={e => setFormData({...formData, sessionTitle: e.target.value})} />
               </div>
               <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-navy/40">Session Abstract</label>
                  <textarea required rows={4} placeholder="Summarize your message and its transformational outcome for our women." className="w-full bg-sand px-6 py-4 rounded-2xl outline-none focus:ring-1 ring-forest resize-none transition-shadow" value={formData.abstract} onChange={e => setFormData({...formData, abstract: e.target.value})}></textarea>
               </div>
               <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-navy/40">Speaker Bio (Short)</label>
                  <textarea required rows={3} placeholder="Tell us about your work and impact." className="w-full bg-sand px-6 py-4 rounded-2xl outline-none focus:ring-1 ring-forest resize-none transition-shadow" value={formData.bio} onChange={e => setFormData({...formData, bio: e.target.value})}></textarea>
               </div>
               <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-navy/40">Link to Speaking Sample (Video/Audio)</label>
                  <input required type="url" placeholder="YouTube, Vimeo, or Website Link" className="w-full bg-sand px-6 py-4 rounded-2xl outline-none focus:ring-1 ring-forest transition-shadow" value={formData.videoLink} onChange={e => setFormData({...formData, videoLink: e.target.value})} />
               </div>
               <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-navy/40">Why Rise & Restore 2027?</label>
                  <textarea required rows={3} placeholder="How does your vision align with our mission of soul-deep success?" className="w-full bg-sand px-6 py-4 rounded-2xl outline-none focus:ring-1 ring-forest resize-none transition-shadow" value={formData.motivation} onChange={e => setFormData({...formData, motivation: e.target.value})}></textarea>
               </div>
            </div>

            <button type="submit" className="w-full bg-navy text-sand font-black py-6 rounded-2xl shadow-xl hover:bg-forest transition-all transform hover:scale-[1.01] active:scale-95 text-xl">
              Turn In Application
            </button>
          </form>
        </div>
      </div>
      
      <style>{`
        @keyframes fade-in { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fade-in 1s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default ApplyToSpeak;