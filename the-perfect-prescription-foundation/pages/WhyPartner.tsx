import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const WhyPartner: React.FC = () => {
  useEffect(() => {
    document.title = "Why Partner | The Perfect Prescription Foundation";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-52 md:pt-60 pb-24 px-4 bg-sand/30 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Hero */}
        <section className="relative mb-32">
          <div className="max-w-4xl animate-fade-in">
            <div className="inline-flex items-center space-x-3 mb-8 px-4 py-1.5 bg-forest/5 rounded-full border border-forest/10">
              <span className="w-2 h-2 bg-teal rounded-full"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-navy/60">The Mandate</span>
            </div>
            <h1 className="text-6xl lg:text-[110px] font-heading font-black text-navy leading-[0.85] tracking-tighter mb-12">
              Closing the Gap <br/><span className="text-forest italic">For Good.</span>
            </h1>
            <p className="text-xl lg:text-3xl text-navy/70 leading-relaxed font-light max-w-3xl">
              Partnering with PPrX isn't just a donation; it's a systemic investment into the infrastructure of global mental wellness and spiritual restoration.
            </p>
          </div>
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal/5 blur-[120px] rounded-full -z-10 translate-x-1/2 -translate-y-1/4"></div>
        </section>

        {/* The Crisis Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start mb-40">
          <div className="space-y-12">
            <h2 className="text-4xl lg:text-6xl font-heading font-black text-navy leading-none tracking-tighter italic">
              The Crisis of <br/><span className="text-forest">Fragmented Care.</span>
            </h2>
            <div className="space-y-6 text-xl text-navy/60 leading-relaxed font-light">
              <p>
                For decades, the church has offered spiritual hope without clinical tools, while the medical world has offered clinical solutions while ignoring the soul.
              </p>
              <p>
                This fragmentation leaves millions in a "Care Gap"—too "spiritual" for secular clinics and too "struggling" for traditional pulpits. The result is chronic isolation, untreated trauma, and a global mental health epidemic.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-12 pt-12 border-t border-navy/5">
              <div>
                <p className="text-5xl font-heading font-black text-teal tracking-tighter">1 in 4</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-navy/30">Adults face mental struggles</p>
              </div>
              <div>
                <p className="text-5xl font-heading font-black text-teal tracking-tighter">62%</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-navy/30">Leaders feel ill-equipped</p>
              </div>
            </div>
          </div>
          <div className="bg-navy rounded-[4rem] p-12 lg:p-20 text-sand shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal/5 blur-[100px] rounded-full"></div>
            <h3 className="text-2xl font-heading font-bold text-teal mb-8 italic">The PPrX Bridge Solution.</h3>
            <div className="space-y-10">
              {[
                { t: "Evidence-Based Spirituality", d: "Integrating neuroscience with biblical principles for holistic brain-soul health." },
                { t: "Clinical-Spiritual Triage", d: "Training lay leaders to recognize risks and coordinate warm professional handoffs." },
                { t: "Global Infrastructure", d: "Building 'City of Refuge'—permanent hubs of care in underserved regions." }
              ].map((point, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-10 h-10 rounded-2xl bg-teal/20 flex items-center justify-center text-teal font-black text-xs shrink-0">{i+1}</div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{point.t}</h4>
                    <p className="text-sm opacity-50 leading-relaxed font-light">{point.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Impact Vectors */}
        <section className="mb-40">
          <div className="text-center mb-24 max-w-3xl mx-auto">
             <h2 className="text-4xl lg:text-7xl font-heading font-black text-navy mb-8 tracking-tighter italic">Three Vectors <br/>of Change.</h2>
             <p className="text-xl text-navy/40 leading-relaxed font-light">Your partnership activates three distinct pathways of transformation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Direct Intervention", text: "Funding the Mental Health Experience and S.O.S. programs that restore individuals immediately.", icon: "🚀" },
              { title: "Leader Capacity", text: "Providing MHFR training to pastors, HR leads, and campus mentors to build a safety net.", icon: "🛡️" },
              { title: "Systemic Future", text: "Investing in permanent clinics and 'Refuge Cities' that stabilize whole regions.", icon: "🏛️" }
            ].map((card, i) => (
              <div key={i} className="bg-white p-12 rounded-[3.5rem] border border-navy/5 shadow-sm hover:shadow-2xl transition-all duration-700">
                <div className="text-5xl mb-8">{card.icon}</div>
                <h4 className="font-bold text-2xl mb-4 text-navy italic">{card.title}</h4>
                <p className="text-lg text-navy/50 leading-relaxed font-light">{card.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Global Partnership CTA */}
        <section className="bg-forest rounded-[5rem] p-12 lg:p-24 text-sand text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
          <div className="max-w-3xl mx-auto relative z-10 space-y-12">
            <h2 className="text-5xl lg:text-7xl font-heading font-black leading-tight tracking-tighter">Success is Soul Deep. <br/><span className="text-teal italic">Join the Movement.</span></h2>
            <p className="text-xl opacity-70 leading-relaxed font-light">
              We are looking for strategic partners—churches, businesses, and individuals—ready to build the bridge. Together, we can rewrite the narrative of mental health globally.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
              <Link to="/partner" className="bg-teal text-navy font-black px-12 py-6 rounded-2xl shadow-xl hover:bg-white transition-all transform hover:scale-105 text-xl">
                Become a Partner
              </Link>
              <Link to="/contact" className="bg-white/10 border border-white/20 text-white font-black px-12 py-6 rounded-2xl hover:bg-white/20 transition-all text-xl">
                Request an Intake Call
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WhyPartner;