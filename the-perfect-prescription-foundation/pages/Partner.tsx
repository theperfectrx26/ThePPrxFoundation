import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Partner: React.FC = () => {
  const [selectedLane, setSelectedLane] = useState<string>('mhe');
  const [isMonthly, setIsMonthly] = useState<boolean>(true);

  // SEO & Schema Setup
  useEffect(() => {
    document.title = "Partner With Us | The Perfect Prescription Foundation";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", "Fund mental wellness infrastructure. Sponsor students, bring programs to your church, and support global initiatives bridging faith and mental health.");

    const schemaData = {
      "@context": "https://schema.org",
      "@type": "NGO",
      "name": "The Perfect Prescription Foundation",
      "description": "A global nonprofit bridging faith and mental wellness through professional training, community programs, and spiritual restoration.",
      "url": "https://theperfectrx.com/partner",
      "logo": "https://theperfectrx.com/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-323-568-1700",
        "contactType": "Partnership Support",
        "email": "support@theperfectrx.com"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) document.head.removeChild(existingScript);
    };
  }, []);

  const navItems = [
    { name: 'Impact Selection', id: 'lanes' },
    { name: 'Inquire', id: 'partner-form' },
  ];

  const impactLanes = [
    { id: 'mhe', title: 'Mental Health Experience', funds: 'Multi-sensory community events.', serves: 'Regional cities and congregations.', outcome: 'Normalizing help-seeking at scale.', icon: '🧠', color: 'teal' },
    { id: 'scholarships', title: 'Scholarships Fund', funds: 'Tuition support for underserved attendees.', serves: 'Students and community volunteers.', outcome: 'Increased accessibility and equitable care.', icon: '🎓', color: 'forest' },
    { id: 'refuge', title: 'Refuge City', funds: 'Infrastructure and safe-space sites.', serves: 'Communities in high-need regions.', outcome: 'Permanent hubs for clinical-spiritual care.', icon: '🏠', color: 'navy' },
    { id: 'rise', title: 'Rise & Restore', funds: 'Women-centered restoration programs.', serves: 'High-functioning women in leadership.', outcome: 'Generational freedom from trauma.', icon: '✨', color: 'amber' },
    { id: 'coach', title: 'Wellness Coaching', funds: 'Professional certification for new coaches.', serves: 'Emerging wellness leaders.', outcome: 'More qualified responders in the field.', icon: '🤝', color: 'forest' },
    { id: 'forty', title: '40 Days & 40 Nights', funds: 'Spiritual formation and outreach.', serves: 'Global spiritual seekers.', outcome: 'Deep emotional and spiritual renewal.', icon: '⛰️', color: 'teal' },
  ];

  const currentLane = impactLanes.find(l => l.id === selectedLane) || impactLanes[0];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 160; // Offset for sticky headers
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-sand text-navy font-sans selection:bg-teal selection:text-white scroll-smooth pt-52 md:pt-64">
      {/* Sticky Sub-Nav with precisely balanced space from main nav */}
      <nav className="fixed top-40 left-0 right-0 z-40 bg-white/95 border-b border-navy/10 hidden lg:block shadow-sm">
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <span className="font-heading font-bold text-navy text-sm tracking-tight uppercase italic">Partnership Hub</span>
          </div>
          <div className="flex space-x-12">
            {navItems.map((item) => (
              <button 
                key={item.name} 
                onClick={() => scrollToSection(item.id)} 
                className="text-[11px] font-black uppercase tracking-widest text-navy/40 hover:text-forest transition-colors"
              >
                {item.name}
              </button>
            ))}
          </div>
          <div className="w-32"></div> {/* Spacer to keep nav items centered */}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pb-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block px-4 py-1.5 bg-forest/5 text-forest rounded-full font-black text-[10px] tracking-widest uppercase">
              Faith & Wellness Infrastructure
            </div>
            <h1 className="text-5xl lg:text-8xl font-heading font-black text-navy leading-[1.0] tracking-tighter">
              Build the <br/>
              <span className="text-forest italic underline decoration-teal/30 decoration-[8px] underline-offset-8">Systems</span> <br/>
              of Care.
            </h1>
            <p className="text-xl lg:text-2xl text-navy/70 leading-relaxed max-w-xl font-light">
              Real restoration requires professional infrastructure. Your partnership funds the training, facilities, and programs that bridge the gap.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button 
                onClick={() => scrollToSection('lanes')}
                className="bg-navy text-sand font-black px-12 py-5 rounded-2xl shadow-xl hover:bg-forest transition-all transform hover:scale-105 text-center text-lg"
              >
                Choose Your Impact
              </button>
              <Link to="/why-partner" className="bg-white border-2 border-navy/5 text-navy font-black px-12 py-5 rounded-2xl hover:bg-sand transition-all text-center text-lg">
                Why Partner?
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[16/10] bg-navy/5 rounded-[4rem] overflow-hidden shadow-2xl border-[16px] border-white">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" 
                alt="Collaborative community session" 
                className="w-full h-full object-cover grayscale opacity-80"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-[3rem] shadow-2xl border border-navy/5 max-w-xs hidden lg:block">
              <p className="text-xs font-black text-forest uppercase tracking-widest mb-2">The Mission</p>
              <p className="text-navy font-medium leading-relaxed italic text-sm">"To dismantle the wall between clinical excellence and spiritual restoration."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Selection Section */}
      <section id="lanes" className="py-32 px-4 bg-white scroll-mt-64">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <div className="inline-block px-4 py-1.5 bg-teal/10 text-teal rounded-full font-black text-[10px] tracking-widest uppercase">The Selector</div>
            <h2 className="text-4xl lg:text-7xl font-heading font-black text-navy tracking-tighter italic">Choose Your <span className="text-forest">Focus.</span></h2>
            <p className="text-navy/40 max-w-2xl mx-auto font-medium">Click a lane to see how your partnership fuels specific outcomes.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {impactLanes.map((lane) => (
                <button 
                  key={lane.id}
                  onClick={() => setSelectedLane(lane.id)}
                  className={`relative p-10 rounded-[3rem] border-2 text-left transition-all duration-500 overflow-hidden group ${selectedLane === lane.id ? 'border-teal bg-teal/5 shadow-2xl scale-[1.02]' : 'border-navy/5 bg-sand/20 hover:border-teal/30'}`}
                >
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-4xl group-hover:scale-110 transition-transform">{lane.icon}</span>
                    <div className={`w-3 h-3 rounded-full transition-all duration-500 ${selectedLane === lane.id ? 'bg-teal scale-150 animate-pulse' : 'bg-navy/10'}`}></div>
                  </div>
                  <h4 className={`text-2xl font-bold mb-4 transition-colors ${selectedLane === lane.id ? 'text-navy' : 'text-navy/40'}`}>
                    {lane.title}
                  </h4>
                  <p className={`text-sm leading-relaxed transition-opacity duration-500 ${selectedLane === lane.id ? 'opacity-70' : 'opacity-20'}`}>
                    {lane.funds}
                  </p>
                </button>
              ))}
            </div>

            <div className="lg:col-span-4 lg:sticky lg:top-64">
              <div className="bg-navy text-sand p-12 rounded-[4rem] shadow-2xl border border-white/10 relative overflow-hidden animate-fade-in">
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal/10 blur-3xl rounded-full"></div>
                
                <h3 className="text-xs font-black uppercase text-teal tracking-[0.4em] mb-10 border-b border-white/10 pb-4">Partner Commitment</h3>
                
                <div className="space-y-8 mb-12">
                  <div className="flex items-center space-x-6">
                    <div className="text-5xl">{currentLane.icon}</div>
                    <h4 className="text-2xl font-heading font-bold text-teal leading-tight italic">{currentLane.title}</h4>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <p className="text-[10px] font-black uppercase text-white/30 tracking-widest mb-1">Impact Lane Goal</p>
                      <p className="text-lg font-light opacity-80 leading-relaxed">{currentLane.outcome}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 pt-8 border-t border-white/10">
                  <div id="donate" className="flex justify-center scroll-mt-64">
                    <stripe-buy-button
                      buy-button-id="buy_btn_1T0r3cPKLrZqnz5O6WZajqXO"
                      publishable-key="pk_live_51RW9VEPKLrZqnz5OhFz218TWCwngrDGHVd28wwg2PosJV4Wchf32VQaVtfAqDtOXDsDwbA33QUBhn6n7F2jSIqNL00ObFxHYVR"
                    >
                    </stripe-buy-button>
                  </div>
                  <p className="text-[10px] text-center opacity-30 font-bold uppercase tracking-widest">Secure Global Contribution</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Inquiry Form */}
      <section id="partner-form" className="py-32 px-4 bg-sand/20 scroll-mt-64">
        <div className="max-w-4xl mx-auto bg-white p-12 lg:p-24 rounded-[4rem] shadow-2xl border border-navy/5">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-heading font-black text-navy italic">Formalize <span className="text-forest underline decoration-teal/30 decoration-[8px] underline-offset-8">Partnership.</span></h2>
            <p className="text-navy/40 font-light">For churches, businesses, and organizations seeking integrated systems.</p>
          </div>
          
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-navy/40 tracking-widest">Full Name</label>
              <input required type="text" className="w-full bg-sand px-6 py-4 rounded-2xl outline-none focus:ring-1 ring-forest" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-navy/40 tracking-widest">Organization</label>
              <input required type="text" className="w-full bg-sand px-6 py-4 rounded-2xl outline-none focus:ring-1 ring-forest" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-navy/40 tracking-widest">Email Address</label>
              <input required type="email" className="w-full bg-sand px-6 py-4 rounded-2xl outline-none focus:ring-1 ring-forest" />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-[10px] font-black uppercase text-navy/40 tracking-widest">Partnership Intent</label>
              <textarea rows={4} className="w-full bg-sand px-6 py-4 rounded-2xl outline-none focus:ring-1 ring-forest resize-none"></textarea>
            </div>
            <button type="submit" className="md:col-span-2 bg-navy text-sand font-black py-6 rounded-2xl shadow-xl hover:bg-forest transition-all text-xl uppercase tracking-widest">
              Request Intake Call
            </button>
          </form>
        </div>
      </section>

      <footer className="py-40 px-6 bg-navy text-sand text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 space-y-16">
          <h2 className="text-5xl lg:text-[110px] font-heading font-black leading-[0.8] tracking-tighter">Success is <br/><span className="text-teal italic underline decoration-white/10 underline-offset-8">Soul Deep.</span></h2>
          <button onClick={() => scrollToSection('lanes')} className="bg-teal text-navy font-black px-16 py-8 rounded-3xl shadow-2xl hover:bg-white transition-all transform hover:scale-105 text-2xl uppercase tracking-tighter">
            Start Your Partnership
          </button>
          <p className="text-[10px] opacity-30 font-bold uppercase tracking-[0.4em]">© 2024 The Perfect Prescription Foundation</p>
        </div>
      </footer>
    </div>
  );
};

export default Partner;