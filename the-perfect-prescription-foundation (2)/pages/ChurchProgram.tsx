import React from 'react';
import { Link } from 'react-router-dom';

const ChurchProgram: React.FC = () => {
  const handleDownloadBrochure = () => {
    window.open('https://drive.google.com/file/d/1SHc02-om-VjjfcZcH1Ebip78hxI6bRl-/view?usp=sharing', '_blank');
  };

  const steps = [
    { title: "Review Current Ministry", text: "We evaluate existing counseling services, identifying strengths and areas for improvement with actionable feedback." },
    { title: "Tailored MH Department", text: "Structured ministry design incorporating marriage and family, youth, premarital, and spiritual guidance." },
    { title: "Innovative Programming", text: "One-day conferences (MHE) aimed at breaking stigmas and empowering your congregation." },
    { title: "Training & Mentorship", text: "Integrating trained mental wellness coaches for shadowing and hands-on learning for your leaders." },
    { title: "Technology Support", text: "Implementation of EMR systems that comply with healthcare regulations and data security." },
    { title: "Clinical Networks", text: "Establishing partnerships with licensed professionals for expert collaboration and referrals." }
  ];

  return (
    <div className="bg-sand min-h-screen">
      {/* Editorial Hero */}
      <section className="relative pt-44 pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 z-10 space-y-8">
            <div className="inline-flex items-center space-x-3 px-4 py-1.5 bg-forest/5 rounded-full border border-forest/10">
              <span className="w-2 h-2 bg-teal rounded-full animate-pulse"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-navy/60">The Perfect Prescription Foundation</span>
            </div>
            <h1 className="text-7xl lg:text-[140px] font-heading font-black text-navy leading-[0.8] tracking-tighter">
              THE MENTAL <br/>
              <span className="text-teal italic">HEALTH PACKAGE.</span>
            </h1>
            <p className="text-xl lg:text-3xl text-navy/70 leading-relaxed font-light max-w-2xl">
              "Equilibrium must first be achieved for a person to reach their highest level of greatness."
            </p>
            <div className="flex flex-col sm:flex-row gap-6 pt-8">
              <button 
                onClick={handleDownloadBrochure}
                className="bg-navy text-sand font-black px-12 py-6 rounded-2xl shadow-2xl hover:bg-forest transition-all transform hover:scale-105 text-xl flex items-center justify-center"
              >
                Download Full Brochure
              </button>
              <Link to="/programs/church/audit" className="bg-white border-2 border-navy/5 text-navy font-black px-12 py-6 rounded-2xl shadow-lg hover:bg-sand transition-all transform hover:scale-105 text-xl text-center">
                Start Setup Audit
              </Link>
            </div>
          </div>
          <div className="hidden lg:block lg:col-span-4 relative h-full">
            <div className="absolute -top-20 right-0 w-[500px] h-[700px] bg-teal/10 rounded-full blur-[120px] -z-10"></div>
            <div className="relative rounded-[4rem] overflow-hidden shadow-2xl rotate-3 border-[16px] border-white bg-white">
              <img 
                src="https://images.unsplash.com/photo-1544531585-9847b68c8c86?q=80&w=2070&auto=format&fit=crop" 
                alt="A specialist woman leading a mental health seminar for church pastoral staff" 
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Scriptural Integration: Mark 5:5 Moment */}
      <section className="py-40 bg-white relative px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <span className="text-[300px] font-serif text-sand absolute -top-40 -left-12 select-none pointer-events-none opacity-50 z-0">“</span>
              <div className="relative z-10 space-y-12">
                <blockquote className="text-4xl lg:text-6xl font-serif italic text-navy leading-tight tracking-tight">
                  And always, night and day, he was in the mountains and in the tombs, <span className="text-forest underline decoration-teal/30 decoration-8 underline-offset-4">crying out and cutting himself</span> with stones.
                </blockquote>
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-px bg-forest/20"></div>
                  <p className="text-forest font-black text-2xl uppercase tracking-widest">— MARK 5:5</p>
                </div>
              </div>
            </div>
            <div className="bg-sand/30 p-12 lg:p-20 rounded-[5rem] border border-navy/5 shadow-inner">
              <h3 className="text-3xl font-heading font-black text-navy mb-8 italic">Restoration vs. Deliverance.</h3>
              <p className="text-xl text-navy/60 leading-relaxed font-light mb-10">
                In Mark 5, we witness the transformative deliverance of a man whose spirit was liberated. Yet, true restoration requires more than mere freedom—the soul itself must be healed to achieve a state of equilibrium.
              </p>
              <div className="p-8 bg-white/80 rounded-4xl border border-navy/5 italic text-navy leading-relaxed text-lg">
                "Lasting wholeness is only attained when the deeper wounds of the soul are addressed through clinical and spiritual alignment."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Full Meaning Section */}
      <section className="py-40 px-6 bg-navy text-sand relative overflow-hidden">
        <div className="absolute inset-0 bg-forest opacity-10 pointer-events-none"></div>
        <div className="max-w-5xl mx-auto text-center space-y-16">
          <div className="inline-block px-4 py-1.5 bg-white/10 rounded font-black text-[10px] uppercase tracking-widest">Theology of Wholeness</div>
          <h2 className="text-4xl lg:text-7xl font-heading font-black italic tracking-tighter leading-[0.9]">
            Saving the <span className="text-teal">Whole Person.</span>
          </h2>
          <blockquote className="text-3xl lg:text-5xl font-serif italic leading-relaxed opacity-90 max-w-4xl mx-auto">
            "For God so loved the world... that whosoever believeth in him should not perish, but have everlasting life."
          </blockquote>
          <div className="flex flex-col items-center">
            <p className="text-teal font-black text-2xl tracking-tighter mb-12">— JOHN 3:14-17</p>
            <div className="bg-white/5 border border-white/10 p-12 rounded-[4rem] backdrop-blur-md max-w-2xl">
              <p className="text-xl font-light leading-relaxed opacity-80">
                In this context, the word <span className="text-teal font-bold italic">saved</span> refers to the full salvation—the <span className="underline decoration-teal decoration-2 underline-offset-4">saving of the whole person</span>: body, mind, soul, and spirit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation: Plug & Play Cards */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-24">
            <div className="max-w-2xl space-y-6">
              <h2 className="text-5xl lg:text-7xl font-heading font-black text-navy leading-tight tracking-tighter">Turnkey <br/><span className="text-forest italic underline decoration-teal/30 decoration-[12px] underline-offset-8">Implementation.</span></h2>
              <p className="text-xl text-navy/50 font-light">Our model is designed to integrate seamlessly into your existing rhythm without disruption.</p>
            </div>
            <Link to="/programs/church/audit" className="bg-navy text-sand font-black px-12 py-5 rounded-2xl shadow-xl hover:bg-forest transition-all">
              Begin System Audit
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="group bg-white p-12 rounded-[4rem] border border-navy/5 shadow-sm hover:shadow-2xl transition-all duration-700 flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 bg-sand text-navy rounded-3xl flex items-center justify-center font-black text-2xl mb-10 group-hover:bg-teal group-hover:text-navy transition-colors">
                    0{i+1}
                  </div>
                  <h4 className="text-2xl font-heading font-bold text-navy mb-4 italic leading-tight">{step.title}</h4>
                  <p className="text-navy/50 leading-relaxed font-light">{step.text}</p>
                </div>
                <div className="pt-8 mt-8 border-t border-navy/5">
                  <span className="text-[10px] font-black uppercase tracking-widest text-navy/20">PPrX Blueprint Phase</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Hub: Partnership Highlight */}
      <section className="py-40 px-6 bg-white shadow-2xl rounded-[6rem] mx-4 border border-navy/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-7 space-y-12">
            <h2 className="text-5xl lg:text-8xl font-heading font-black text-navy leading-[0.8] tracking-tighter">
              Your Ministry <br/><span className="text-forest italic underline decoration-teal/30 decoration-[12px] underline-offset-8">Resource Hub.</span>
            </h2>
            <div className="space-y-8">
              <div className="p-10 bg-sand/30 rounded-[3rem] border border-navy/5">
                <p className="text-2xl text-navy/70 font-light leading-relaxed">
                  We equip churches with our transformative toolkit <span className="text-forest font-bold">completely free of charge.</span> Gain access to sermon companions, small group guides, and clinical referral databases.
                </p>
              </div>
              <div className="flex flex-wrap gap-8">
                <Link to="/partner" className="bg-forest text-sand font-black px-12 py-6 rounded-2xl shadow-xl hover:bg-navy transition-all transform hover:scale-105 text-xl flex items-center">
                  Partner With Us
                  <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 grid grid-cols-1 gap-6">
            {[
              { i: "📄", t: "Sermon Companion", d: "Theological frameworks for sensitive topics." },
              { i: "📘", t: "Small Group Guide", d: "Structured guides for safe dialogue." },
              { i: "📍", t: "Referral Database", d: "Verified clinical professional maps." }
            ].map((hub, idx) => (
              <div key={idx} className="p-8 bg-sand/10 rounded-3xl border border-navy/5 flex items-center space-x-6 hover:bg-white hover:shadow-xl transition-all">
                <div className="text-4xl">{hub.i}</div>
                <div>
                  <h4 className="font-bold text-navy">{hub.t}</h4>
                  <p className="text-xs text-navy/40">{hub.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Immersive Section */}
      <section className="py-48 px-6 text-center relative overflow-hidden bg-navy rounded-t-[6rem] mt-32">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 grayscale pointer-events-none">
          <img src="https://images.unsplash.com/photo-1542332213-31f87348057f?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Background" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10 space-y-16">
          <h2 className="text-6xl lg:text-[100px] font-heading font-black text-sand leading-[0.8] tracking-tighter">
            "Balanced from <br/><span className="text-teal italic">the inside out.</span>"
          </h2>
          <p className="text-2xl text-sand opacity-70 font-light max-w-2xl mx-auto">
            The Mental Health Package contains the full blueprint for ministry transformation. Download it now to share with your leadership.
          </p>
          <div className="flex justify-center">
            <button 
              onClick={handleDownloadBrochure}
              className="bg-teal text-navy font-black px-16 py-8 rounded-3xl shadow-2xl hover:bg-white transition-all transform hover:scale-105 text-2xl"
            >
              Download The Mental Health Package
            </button>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 1.2s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default ChurchProgram;