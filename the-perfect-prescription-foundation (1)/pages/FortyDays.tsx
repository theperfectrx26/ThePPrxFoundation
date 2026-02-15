import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGE_ASSETS } from '../constants';

const FortyDays: React.FC = () => {
  return (
    <div className="pt-44 md:pt-48 pb-24 overflow-x-hidden bg-sand/20">
      {/* 1. MINISTRY HISTORY & IDENTITY (TOP) */}
      <section className="relative px-4 mb-24 text-center">
        <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
          <div className="inline-flex items-center space-x-3 mb-4 px-4 py-1.5 bg-forest/5 rounded-full border border-forest/10">
            <span className="w-2 h-2 bg-teal rounded-full animate-pulse"></span>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-navy/60">Founded in 2022</span>
          </div>
          <h1 className="text-6xl lg:text-[110px] font-heading font-black text-navy leading-[0.85] tracking-tighter mb-10">
            40 Days x 40 Nights <br/>
            <span className="text-forest italic">Ministry.</span>
          </h1>
          <p className="text-xl lg:text-3xl text-navy/60 leading-relaxed font-light max-w-4xl mx-auto">
            Established in 2022, 40 Days x 40 Nights Ministry is a global spiritual outreach and restoration initiative. We bridge the gap between heavy clinical needs and deep spiritual hunger, providing a safe haven for the broken and a roadmap for the lost.
          </p>
          <div className="pt-4 flex justify-center gap-12">
            <div className="text-center">
              <p className="text-4xl font-heading font-black text-forest tracking-tighter">2022</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-navy/30">Year of Origin</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-heading font-black text-forest tracking-tighter">Global</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-navy/30">Reach & Scope</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRACK RECORD: PAST EVENTS */}
      <section className="py-32 px-4 bg-white rounded-[4rem] shadow-sm mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-1.5 bg-forest/5 text-forest text-[10px] font-black uppercase tracking-widest rounded-lg mb-6">OUR JOURNEY SO FAR</div>
            <h2 className="text-4xl lg:text-7xl font-heading font-bold text-navy mb-8 tracking-tighter">History of <span className="text-forest italic">Impact.</span></h2>
            <p className="text-xl text-navy/50 leading-relaxed font-light">
              We have been on the front lines testing our models of sanctuary and restoration through direct community engagement since our inception.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Surrendered Event */}
            <div className="group bg-sand/30 p-10 rounded-[3rem] border border-navy/5 flex flex-col hover:shadow-2xl transition-all duration-700">
              <div className="text-4xl mb-8 group-hover:scale-110 transition duration-500">🙏</div>
              <h4 className="text-2xl font-bold text-navy mb-4">Surrendered Event</h4>
              <p className="text-sm opacity-60 leading-relaxed mb-8 flex-grow">
                A monthly event supporting mental health awareness and healing through group prayer, testimonials, and therapeutic discussions. On 12/14/24, we served the Santa Monica community with holiday worship music, providing direct support to local families.
              </p>
              <div className="pt-6 border-t border-navy/10 flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-navy/40">
                <span className="text-forest">Monthly</span>
              </div>
            </div>

            {/* Transfiguration Fitness */}
            <div className="group bg-sand/30 p-10 rounded-[3rem] border border-navy/5 flex flex-col hover:shadow-2xl transition-all duration-700">
              <div className="text-4xl mb-8 group-hover:scale-110 transition duration-500">🥊</div>
              <h4 className="text-2xl font-bold text-navy mb-4">Transfiguration Fitness</h4>
              <p className="text-sm opacity-60 leading-relaxed mb-8 flex-grow">
                Held every first Saturday, this wellness-focused event addresses the importance of physical health in mental wellness. Includes boxing with professional coaches and community hikes across California.
              </p>
              <div className="pt-6 border-t border-navy/10 flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-navy/40">
                <span className="text-forest">1st Saturdays</span>
              </div>
            </div>

            {/* Drive and Pray */}
            <div className="group bg-navy text-sand p-10 rounded-[3rem] flex flex-col hover:shadow-2xl transition-all duration-700">
              <div className="text-4xl mb-8 group-hover:scale-110 transition duration-500">🚗</div>
              <h4 className="text-2xl font-bold text-teal mb-4">Drive and Pray</h4>
              <p className="text-sm opacity-60 leading-relaxed mb-8 flex-grow">
                A community initiative combining essential item distribution with prayer and mental health support. Since 2022, we have provided pro-bono therapy pathways through our clinical partners in Los Angeles.
              </p>
              <div className="pt-6 border-t border-white/10 flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-white/40">
                <span>L.A. Outreach</span>
                <span className="text-teal">Est. 2022</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE NEED (IMO STATE CRISIS) */}
      <section className="mb-40 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-navy/5 rounded-[4rem] rotate-2 group-hover:rotate-0 transition duration-700"></div>
              {/* Changed image to better represent Nigerian community */}
              <img 
                src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=2071&auto=format&fit=crop" 
                className="rounded-[3rem] shadow-2xl relative z-10 w-full h-[600px] object-cover grayscale group-hover:grayscale-0 transition duration-1000" 
                alt="Nigerian children in the community"
              />
              <div className="absolute bottom-8 right-8 bg-amber text-navy p-8 rounded-2xl shadow-2xl z-20 max-w-xs">
                <p className="text-3xl font-heading font-black mb-2">21.8%</p>
                <p className="text-xs font-bold uppercase tracking-widest leading-relaxed">
                  Prevalence of Mkpuru Mmiri (Meth) use in South-East Nigeria.
                </p>
              </div>
            </div>
            <div className="space-y-10">
              <h2 className="text-4xl lg:text-6xl font-heading font-bold text-navy leading-tight">A Cry from the <br/><span className="text-forest">Eastern Heartland.</span></h2>
              <div className="space-y-6 text-lg text-navy/60 leading-relaxed font-light">
                <p>
                  Imo State stands at a critical threshold. The epidemic of <strong>Mkpuru Mmiri</strong> is ravaging our youth, while our <strong>widows</strong> walk in silent grief, our <strong>motherless babies</strong> yearn for stability, and the <strong>homeless</strong> search for a place of dignity. 
                </p>
                <p>
                  This crisis demands more than just awareness; it demands a permanent sanctuary of restoration. We are answering that call by building a sanctuary where the forgotten are finally seen and the broken are finally made whole.
                </p>
                <p className="font-bold text-navy">
                  Imo is the birthplace of our most ambitious mission yet: The City of Refuge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE VISION: ESTABLISHING THE CITY OF REFUGE (INTEGRATED) */}
      <section className="py-40 px-4 bg-navy text-sand relative overflow-hidden rounded-t-[5rem]">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-teal/5 -skew-x-12 translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24 max-w-4xl mx-auto">
            <div className="inline-flex flex-col items-center">
              <div className="inline-block px-4 py-1.5 bg-teal text-navy text-[10px] font-black uppercase tracking-widest rounded-lg mb-6">NEW INITIATIVE 2026</div>
              <h2 className="text-5xl lg:text-8xl font-heading font-black mb-8 leading-[0.85] tracking-tighter">
                Establishing the <br/><span className="text-teal italic">City of Refuge.</span>
              </h2>
              <p className="text-xl lg:text-2xl opacity-60 leading-relaxed font-light italic">
                "We are building a sanctuary where the forgotten become foundations for the future."
              </p>
            </div>
          </div>

          {/* VISIONARY BLUEPRINT MASTER CONTAINER */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-24">
            <div className="lg:col-span-7 space-y-12">
              <div className="bg-white/5 border border-white/10 rounded-[4rem] p-8 lg:p-16 relative overflow-hidden group">
                <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #80CBC4 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-heading font-bold text-teal mb-12 flex items-center">
                    <span className="w-8 h-8 bg-teal text-navy rounded-lg flex items-center justify-center text-sm mr-4">01</span>
                    Architectural Blueprint
                  </h3>
                  
                  {/* SVG Blueprint Illustration */}
                  <div className="w-full h-auto mb-16 px-4">
                    <svg viewBox="0 0 800 500" className="w-full h-auto text-teal stroke-current fill-none stroke-[1.5]">
                      <rect x="50" y="50" width="700" height="400" rx="40" strokeDasharray="10 10" opacity="0.3" />
                      <g className="hover:opacity-100 opacity-60 transition duration-500 cursor-help">
                        <rect x="100" y="100" width="250" height="200" rx="10" />
                        <text x="110" y="130" className="text-[10px] font-black fill-teal stroke-none uppercase">Residential Rehab</text>
                        <text x="110" y="150" className="text-[8px] fill-teal/60 stroke-none uppercase tracking-widest">500+ Bed Capacity</text>
                      </g>
                      <g className="hover:opacity-100 opacity-60 transition duration-500 cursor-help">
                        <rect x="450" y="100" width="250" height="120" rx="10" />
                        <text x="460" y="130" className="text-[10px] font-black fill-teal stroke-none uppercase">City of Refuge Hotel</text>
                        <text x="460" y="150" className="text-[8px] fill-teal/60 stroke-none uppercase tracking-widest">Hospitality Training</text>
                      </g>
                      <g className="hover:opacity-100 opacity-60 transition duration-500 cursor-help">
                        <rect x="450" y="250" width="250" height="150" rx="10" />
                        <text x="460" y="280" className="text-[10px] font-black fill-teal stroke-none uppercase">Outpatient Clinic</text>
                        <text x="460" y="300" className="text-[8px] fill-teal/60 stroke-none uppercase tracking-widest">Mental Health Access</text>
                      </g>
                      <g className="hover:opacity-100 opacity-60 transition duration-500 cursor-help">
                        <rect x="100" y="330" width="320" height="70" rx="10" />
                        <text x="110" y="355" className="text-[10px] font-black fill-teal stroke-none uppercase">Agricultural Farm</text>
                        <text x="110" y="375" className="text-[8px] fill-teal/60 stroke-none uppercase tracking-widest">Vocational Skills & Food</text>
                      </g>
                      <circle cx="400" cy="225" r="40" strokeDasharray="5 5" />
                      <text x="365" y="230" className="text-[8px] font-black fill-teal stroke-none uppercase">Sanctuary</text>
                    </svg>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-teal flex items-center">
                         <span className="text-2xl mr-3">🏩</span> Vocational Hotel
                      </h4>
                      <p className="text-sm opacity-60 leading-relaxed">
                        A social enterprise partially staffed by program graduates, providing hospitality training and sustainable income to fund the sanctuary's mission.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-teal flex items-center">
                         <span className="text-2xl mr-3">🐄</span> Agricultural Farm
                      </h4>
                      <p className="text-sm opacity-60 leading-relaxed">
                        Modern organic farming teaching self-reliance and ensuring the City of Refuge remains food-secure through local produce.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* PROJECT INFORMATION: INTEGRATED BELOW BLUEPRINT */}
              <div className="bg-white/5 border border-white/10 rounded-[4rem] p-8 lg:p-16">
                <div className="space-y-12">
                  <div>
                    <h3 className="text-3xl font-heading font-bold text-teal mb-6">A Global Sanctuary Model</h3>
                    <p className="text-lg opacity-70 leading-relaxed">
                      The City of Refuge is modeled after world-class restoration centers, adapting proven strategies to the unique clinical and cultural needs of Imo State. This is not a temporary shelter; it is a comprehensive ecosystem designed for the long-term transformation of the human soul.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <p className="text-teal font-bold flex items-center"><span className="w-2 h-2 bg-teal rounded-full mr-3"></span> 500-Bed Facility</p>
                      <p className="text-sm opacity-50">Massive capacity to address the scale of the addiction and homelessness crisis.</p>
                    </div>
                    <div className="space-y-3">
                      <p className="text-teal font-bold flex items-center"><span className="w-2 h-2 bg-teal rounded-full mr-3"></span> On-Site Clinic</p>
                      <p className="text-sm opacity-50">Professional medical and psychiatric oversight for stabilization and detox.</p>
                    </div>
                    <div className="space-y-3">
                      <p className="text-teal font-bold flex items-center"><span className="w-2 h-2 bg-teal rounded-full mr-3"></span> Job Placement</p>
                      <p className="text-sm opacity-50">Graduates are placed in vocational roles through our hotel and agricultural partners.</p>
                    </div>
                    <div className="space-y-3">
                      <p className="text-teal font-bold flex items-center"><span className="w-2 h-2 bg-teal rounded-full mr-3"></span> Spiritual Center</p>
                      <p className="text-sm opacity-50">A non-denominational sanctuary for deep spiritual identity work and prayer.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RESCUE THE FORGOTTEN LIST (SIDEBAR) */}
            <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-48">
              <div className="bg-forest p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
                <h3 className="text-2xl font-heading font-bold mb-8 text-teal italic border-b border-white/10 pb-4">Rescue the Forgotten.</h3>
                <div className="space-y-8 mb-10 overflow-y-auto max-h-[600px] pr-4 custom-scrollbar">
                  {[
                    { icon: "🕊️", label: "Human Trafficking", desc: "Security and sanctuary for survivors to heal, reclaim identity, and find safe passage." },
                    { icon: "🧸", label: "Foster Care", desc: "Nurturing family environments and transitional support for youth in broken systems." },
                    { icon: "🎯", label: "Drug Abuse Recovery", desc: "Intensive spiritual-clinical rehab to break the grip of the Mkpuru Mmiri and addiction crisis." },
                    { icon: "🧠", label: "Mental Health Disorders", desc: "Compassionate, long-term psychiatric support for those neglected and abandoned by society." },
                    { icon: "🤱", label: "Motherless Babies", desc: "Dignified safe haven and clinical care for infants without families." },
                    { icon: "🖤", label: "Widows' Sanctuary", desc: "Spiritual restoration and vocational empowerment for women navigating the isolation of grief." },
                    { icon: "🏠", label: "The Homeless", desc: "Housing-first models that restore stability, dignity, and personal value." }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start space-x-4 group/item">
                      <span className="text-3xl bg-white/5 p-3 rounded-2xl group-hover/item:bg-teal group-hover/item:text-navy transition-all duration-300">{item.icon}</span>
                      <div>
                        <p className="font-bold text-white text-lg">{item.label}</p>
                        <p className="text-xs opacity-60 leading-relaxed font-light">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link to="/donate" className="block w-full bg-teal text-navy font-black py-5 rounded-2xl text-center shadow-xl hover:bg-white transition-all transform hover:scale-[1.02]">
                  Fund This New Vision
                </Link>
              </div>

              <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem]">
                <p className="text-xs font-black uppercase text-teal tracking-[0.2em] mb-4">Project Information</p>
                <p className="text-sm opacity-60 italic leading-relaxed">
                  The City of Refuge is more than a building—it is a comprehensive ecosystem. By addressing addiction, homelessness, and trauma simultaneously, we create a ripple effect of healing across Imo State.
                </p>
              </div>
            </div>
          </div>

          {/* FINAL CTA FOOTER */}
          <div className="max-w-3xl mx-auto text-center space-y-12">
            <h2 className="text-4xl lg:text-[100px] font-heading font-black text-white leading-[0.85] tracking-tighter italic">One Soul. <br/><span className="text-teal underline decoration-teal/30 decoration-8 underline-offset-8">One Nation.</span></h2>
            <p className="text-xl opacity-60 leading-relaxed font-light">
              We are building a legacy of restoration. Your involvement today is the catalyst for a safer, healthier tomorrow for the forgotten.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 items-center pt-8">
              <Link to="/donate" className="bg-teal text-navy font-black px-12 py-6 rounded-2xl shadow-xl hover:bg-white transition-all transform hover:scale-105 active:scale-95 text-lg">
                Support the Mission
              </Link>
              <Link to="/contact" className="text-white/40 font-black uppercase tracking-[0.2em] text-xs hover:text-white transition">
                Get Involved Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(128, 203, 196, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(128, 203, 196, 0.5);
        }
      `}</style>
    </div>
  );
};

export default FortyDays;
