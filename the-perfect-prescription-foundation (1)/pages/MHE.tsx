import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGE_ASSETS } from '../constants';

const MHE: React.FC = () => {
  return (
    <div className="pt-44 md:pt-48 pb-24 px-4 bg-sand/30 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Hero Section: Global Movement */}
        <section className="relative mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in space-y-8">
              <div className="inline-flex items-center space-x-3 px-4 py-1.5 bg-teal/10 rounded-full border border-teal/20">
                <span className="w-2 h-2 bg-teal rounded-full animate-pulse"></span>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-navy/60">Global Movement</span>
              </div>
              <h1 className="text-6xl lg:text-[105px] font-heading font-black text-navy leading-[0.85] tracking-tighter">
                Restore.<br/>
                Reclaim.<br/>
                <span className="text-forest italic">Activate.</span>
              </h1>
              <p className="text-xl lg:text-2xl text-navy/70 leading-relaxed font-light max-w-xl">
                The Mental Health Experience (MHE) is a global transformative movement bridging the gap between clinical excellence and community wholeness—from California to Nigeria to Asia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/contact" className="bg-navy text-sand font-black px-12 py-5 rounded-2xl shadow-xl hover:bg-forest transition-all transform hover:scale-105 text-center">
                  Bring MHE to My Community
                </Link>
                <a href="#framework" className="bg-white border border-navy/10 text-navy font-bold px-12 py-5 rounded-2xl hover:bg-sand transition-all text-center">
                  Explore the Framework
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-teal/20 blur-[100px] rounded-full -z-10"></div>
              <div className="rounded-[4rem] overflow-hidden shadow-2xl aspect-[4/5] relative group border-8 border-white">
                <img 
                  src={IMAGE_ASSETS.hero} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-1000" 
                  alt="A diverse global community connection"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-10 left-10 right-10">
                  <p className="text-sand/60 text-xs font-black uppercase tracking-widest mb-2">The MHE Mandate</p>
                  <h3 className="text-2xl font-heading font-bold text-sand italic">"We move you from Awareness to Action to Activation."</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The 3-Part Framework: THE CORE PILLAR */}
        <section id="framework" className="mb-40 scroll-mt-32">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-7xl font-heading font-bold text-navy mb-6 tracking-tighter">The Structure.</h2>
            <p className="text-lg text-navy/50 leading-relaxed font-medium italic">
              Every MHE follows a signature 3-part framework designed to dismantle isolation and build resilience across all cultures and borders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "The Panel Discussion",
                part: "PHASE I: AWARENESS",
                focus: "Bridging the Gap",
                impact: "Raw, honest dialogue between faculty and youth. We break performance pressure and validate the lived experience.",
                icon: "🗣️",
                color: "bg-teal/10",
                textColor: "text-teal"
              },
              {
                title: "Coping Skills Toolkit",
                part: "PHASE II: ACTION",
                focus: "Real-Time Regulation",
                impact: "Tangible tools for understanding triggers, stress patterns, and internal narratives. Clinical wisdom meets practical application.",
                icon: "🛠️",
                color: "bg-forest/10",
                textColor: "text-forest"
              },
              {
                title: "The Teaching",
                part: "PHASE III: ACTIVATION",
                focus: "Awakening Purpose",
                impact: "A straight-to-the-point activation on identity and resilience. Aligning Mind, Soul, and Spirit for future leadership.",
                icon: "🚀",
                color: "bg-amber/10",
                textColor: "text-amber"
              }
            ].map((step, i) => (
              <div key={i} className="group bg-white rounded-[3rem] p-12 border border-navy/5 shadow-sm hover:shadow-2xl transition-all duration-700 flex flex-col justify-between">
                <div>
                  <div className={`w-16 h-16 ${step.color} ${step.textColor} rounded-2xl flex items-center justify-center text-3xl mb-10 group-hover:scale-110 transition duration-500`}>
                    {step.icon}
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-30 mb-2">{step.part}</p>
                  <h3 className="text-2xl font-heading font-bold text-navy mb-4 leading-tight">{step.title}</h3>
                  <div className="space-y-6 mb-12">
                    <div>
                      <p className="text-[10px] font-black uppercase text-navy/30 tracking-widest mb-1">Theme</p>
                      <p className="text-sm font-medium text-navy/70 leading-relaxed">{step.focus}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase text-navy/30 tracking-widest mb-1">Process</p>
                      <p className="text-sm font-medium text-navy/70 leading-relaxed">{step.impact}</p>
                    </div>
                  </div>
                </div>
                <div className="h-1.5 w-full bg-sand rounded-full overflow-hidden">
                  <div className={`h-full ${step.textColor.replace('text-', 'bg-')} transition-all duration-1000`} style={{ width: `${(i+1)*33}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Real-Time Regulation: CHI Method Toolkit */}
        <section className="mb-40 py-32 bg-white rounded-[5rem] px-8 lg:px-24 shadow-xl border border-navy/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal/5 blur-[100px] rounded-full"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-10 relative z-10">
              <div className="inline-block px-4 py-1.5 bg-forest text-sand text-[10px] font-bold uppercase tracking-widest rounded-lg">THE CHI METHOD™</div>
              <h2 className="text-4xl lg:text-6xl font-heading font-bold text-navy leading-tight">Coping Skills <br/><span className="text-forest underline decoration-teal decoration-8 underline-offset-8">Reimagined.</span></h2>
              
              <div className="space-y-6 text-lg text-navy/60 leading-relaxed font-light">
                <p>
                  At the heart of the MHE is the deployment of **Coping Skills** built through the **CHI Method™**—a holistic framework integrating Emotional, Spiritual, Mental, and Physical health.
                </p>
                <p>
                  We recognize that no two communities are the same. Our lessons are inherently <strong>adaptable</strong>; while the structural framework is fixed, the specific interventions we choose are built around the unique needs, traumas, and goals of your local community.
                </p>
                <p className="font-bold text-navy text-sm italic">
                  Here are just a few signature tools created by Dr. Okafor:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { t: "The Snap Back", d: "A tactile pattern-interrupt to break anxiety loops immediately.", icon: "🎯" },
                  { t: "The Identity Mirror", d: "Verbally dismantling fear-based narratives with purpose.", icon: "🪞" },
                  { t: "The EMDR Container", d: "Cognitive offloading techniques for mental clarity.", icon: "🔒" },
                  { t: "Grounding Roots", d: "Physiological techniques to anchor the spirit in the body.", icon: "🌱" }
                ].map((tool, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="text-2xl mt-1">{tool.icon}</div>
                    <div>
                      <h4 className="text-md font-bold text-navy mb-1">{tool.t}</h4>
                      <p className="text-xs text-navy/40 leading-relaxed">{tool.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-10 bg-forest/5 rounded-[4rem] rotate-2 -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1560439514-4e9645039924?q=80&w=2070&auto=format&fit=crop" 
                className="rounded-[3rem] shadow-2xl grayscale hover:grayscale-0 transition duration-1000 w-full h-[600px] object-cover" 
                alt="Black woman speaking on a large stadium stage" 
              />
              <div className="absolute -bottom-10 -right-10 bg-navy text-sand p-10 rounded-[3rem] shadow-2xl text-center max-w-xs hidden md:block border-4 border-white">
                 <p className="text-3xl font-heading font-black text-teal mb-2">Flexible</p>
                 <p className="text-xs opacity-50 font-bold uppercase tracking-widest">Community-Specific Curricula</p>
              </div>
            </div>
          </div>
        </section>

        {/* MHE Editions: Diversified & Visual */}
        <section className="mb-40">
          <div className="text-center mb-24">
            <h2 className="text-4xl lg:text-7xl font-heading font-bold text-navy mb-6 tracking-tighter">MHE <span className="text-teal italic">Editions.</span></h2>
            <p className="text-navy/50 max-w-xl mx-auto font-medium">From global crusades to campus culture, we bridge the gap wherever students, leaders, and communities gather.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Academy Edition (College/HS) */}
            <div className="bg-white p-10 rounded-[4rem] shadow-xl border border-navy/5 relative overflow-hidden group flex flex-col justify-between hover:shadow-2xl transition-all duration-500">
              <div className="absolute top-0 right-0 w-24 h-24 bg-teal/10 blur-[40px] rounded-full"></div>
              <div>
                <h3 className="text-2xl font-heading font-bold text-navy mb-6 italic">MHE: Academy</h3>
                <p className="text-navy/60 text-sm leading-relaxed mb-8">Empowering high schools and colleges. Focuses on **Identity & Leadership** development to break performance isolation among emerging leaders.</p>
                <div className="aspect-video rounded-3xl overflow-hidden mb-8 border border-navy/5">
                   <img src="https://images.unsplash.com/photo-1523240693567-510e8017ad58?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-700" alt="Diverse students in dialogue" />
                </div>
                <ul className="space-y-3 mb-8">
                  {["Identity Navigation", "Leadership Resilience", "Academic Support Pathway"].map((item, i) => (
                    <li key={i} className="text-[11px] font-bold text-navy/40 uppercase flex items-center"><span className="w-1.5 h-1.5 bg-teal mr-2 rounded-full"></span> {item}</li>
                  ))}
                </ul>
              </div>
              <Link to="/contact" className="block w-full bg-navy text-sand font-black py-5 rounded-2xl text-center hover:bg-forest transition shadow-lg">Inquire for Campus</Link>
            </div>

            {/* In-Person Edition (Community Live) */}
            <div className="bg-white p-10 rounded-[4rem] shadow-xl border border-navy/5 relative overflow-hidden group flex flex-col justify-between hover:shadow-2xl transition-all duration-500">
              <div className="absolute top-0 right-0 w-24 h-24 bg-forest/10 blur-[40px] rounded-full"></div>
              <div>
                <h3 className="text-2xl font-heading font-bold text-navy mb-6 italic">MHE: In-Person</h3>
                <p className="text-navy/60 text-sm leading-relaxed mb-8">The premiere signature experience. A high-impact multi-sensory live event for **Global Communities** ready for restoration and collective healing.</p>
                <div className="aspect-video rounded-3xl overflow-hidden mb-8 border border-navy/5">
                   <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-700" alt="Global community gathering" />
                </div>
                <ul className="space-y-3 mb-8">
                  {["Regional Crusades", "Dialogue & Restoration", "Live Activation Teaching"].map((item, i) => (
                    <li key={i} className="text-[11px] font-bold text-navy/40 uppercase flex items-center"><span className="w-1.5 h-1.5 bg-forest mr-2 rounded-full"></span> {item}</li>
                  ))}
                </ul>
              </div>
              <Link to="/contact" className="block w-full bg-forest text-sand font-black py-5 rounded-2xl text-center hover:bg-navy transition shadow-lg">Book In-Person Event</Link>
            </div>

            {/* Virtual Summit Edition */}
            <div className="bg-forest p-10 rounded-[4rem] shadow-xl text-sand relative overflow-hidden group flex flex-col justify-between hover:shadow-2xl transition-all duration-500">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 blur-[40px] rounded-full"></div>
              <div>
                <h3 className="text-2xl font-heading font-bold mb-6 italic">MHE: Virtual Summit</h3>
                <p className="text-sand/60 text-sm leading-relaxed mb-8">A **1-2 Day Digital Experience** designed for global accessibility. High engagement through breakout rooms and digital Pattern Mirror segments.</p>
                <div className="aspect-video rounded-3xl overflow-hidden mb-8 border border-white/10">
                   <img src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-700" alt="Diverse virtual connection" />
                </div>
                <ul className="space-y-3 mb-8">
                  {["Global Digital Reach", "Interactive Breakouts", "1-2 Day Focused Container"].map((item, i) => (
                    <li key={i} className="text-[11px] font-bold text-sand/30 uppercase flex items-center"><span className="w-1.5 h-1.5 bg-teal mr-2 rounded-full"></span> {item}</li>
                  ))}
                </ul>
              </div>
              <Link to="/contact" className="block w-full bg-teal text-navy font-black py-5 rounded-2xl text-center hover:bg-white transition shadow-lg">Register for Summit</Link>
            </div>
          </div>
        </section>

        {/* Global Impact Counter */}
        <section className="py-24 bg-navy text-sand rounded-[4rem] px-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
             <div className="absolute top-10 left-10 w-96 h-96 bg-teal rounded-full blur-[100px]"></div>
          </div>
          <div className="max-w-4xl mx-auto space-y-12 relative z-10">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-teal">A Borderless Vision.</h2>
            <p className="text-lg opacity-60 leading-relaxed font-light">
              MHE has attracted government officials, international media, community leaders, and students worldwide. It is a model for creating emotionally healthy communities that thrive from the inside out.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-6">
              {[
                { n: "5,000+", l: "Lives Impacted" },
                { n: "3", l: "Continents" },
                { n: "100%", l: "Success Rate" },
                { n: "15+", l: "Regions" }
              ].map((stat, i) => (
                <div key={i}>
                  <p className="text-3xl lg:text-5xl font-heading font-black text-white tracking-tighter">{stat.n}</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-teal opacity-60">{stat.l}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-40 px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-12">
            <h2 className="text-4xl lg:text-[100px] font-heading font-black text-navy leading-[0.85] tracking-tighter italic">Building Wholeness <br/><span className="text-forest underline decoration-teal decoration-8 underline-offset-8">Worldwide.</span></h2>
            <p className="text-xl text-navy/60 leading-relaxed font-light max-w-2xl mx-auto">
              We are building a culture where individuals globally can be honest, get support, and become clear-thinking leaders who live with purpose.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 items-center pt-8">
              <Link to="/contact" className="bg-forest text-sand font-black px-12 py-6 rounded-2xl shadow-xl hover:bg-navy transition-all transform hover:scale-105 active:scale-95 text-lg">
                Host an Experience
              </Link>
              <Link to="/donate" className="text-navy/40 font-black uppercase tracking-[0.2em] text-xs hover:text-navy transition">
                Donate to Fund the Work
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MHE;