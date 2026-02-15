import React from 'react';
import { Link } from 'react-router-dom';

const SOS: React.FC = () => {
  const curriculumPoints = [
    { 
      id: "01", 
      title: "Soul wounds & Behavioral Shaping", 
      desc: "Identify what shaped you and what broke you. We uncover the subconscious roots of the patterns that repeat in your life."
    },
    { 
      id: "02", 
      title: "Agreements & Subconscious Beliefs", 
      desc: "Break the inner vows and silent lies currently running your life. Silence the voice of the past that dictates your present."
    },
    { 
      id: "03", 
      title: "Forgiveness as Technology", 
      desc: "Moving beyond 'trying' to forgive. We teach the spiritual and emotional mechanics of true release as a functional tool for freedom."
    },
    { 
      id: "04", 
      title: "Identity & Renewing the Mind", 
      desc: "Dismantling performance-based worth. Rebuilding an inner core that is unshakeable and defined by truth, not trauma."
    },
    { 
      id: "05", 
      title: "Healing Family Dynamics", 
      desc: "Breaking cycles that have plagued your family for years. Step into a legacy of clear-thinking obedience and purpose."
    },
    { 
      id: "06", 
      title: "Emotional Freedom & Prayer", 
      desc: "Achieving deep emotional release through trauma-informed prayer and practical biblical principles."
    }
  ];

  const faqs = [
    { 
      q: "Is this therapy?", 
      a: "No. S.O.S. is a faith-based healing and formation program. It is educational and spiritual in nature, integrating psychological intelligence with spiritual authority." 
    },
    { 
      q: "Do I have to be a Christian?", 
      a: "You do not have to 'perform Christianity' to attend. You do, however, need to be open to biblical truth and spiritual growth as the core foundation of our curriculum." 
    },
    { 
      q: "Is it confidential?", 
      a: "Absolutely. We protect privacy and create a safe, high-trust environment. All participants are expected to honor the confidentiality of the cohort." 
    },
    { 
      q: "How do I join?", 
      a: "Submit an application via the link below. Applications are reviewed to protect the learning environment. If accepted, you’ll receive next steps and cohort details." 
    }
  ];

  return (
    <div className="pt-44 md:pt-48 pb-24 overflow-x-hidden bg-sand/20 selection:bg-forest selection:text-sand">
      {/* 1. HERO: EMOTIONAL RESONANCE */}
      <section className="relative px-4 mb-32 text-center lg:text-left">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10 animate-fade-in-up">
            <div className="inline-flex items-center space-x-3 px-6 py-2 bg-lavender/60 rounded-full border border-navy/5 shadow-sm">
              <span className="w-2.5 h-2.5 bg-forest rounded-full"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-navy/70">A 6-Week Soul Restoration</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-heading font-black text-navy leading-[1.1] tracking-tighter">
              Heal the soul.<br/>
              Renew the mind.<br/>
              <span className="text-forest italic">Live aligned.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-navy/60 leading-relaxed font-light max-w-2xl">
              School of the Spirit (S.O.S.) is for those who are tired of surviving and ready to become whole. We bridge the gap between clinical wisdom and spiritual authority.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <Link to="/programs/sos/apply" className="bg-navy text-sand font-black px-10 py-5 rounded-2xl shadow-xl hover:bg-forest transition-all transform hover:scale-105 active:scale-95 text-center text-lg">
                Join September 2026 Cohort
              </Link>
              <Link to="/partner" className="bg-white border-2 border-navy/5 text-navy font-bold px-10 py-5 rounded-2xl hover:bg-sand transition-all text-center text-lg shadow-sm">
                Sponsor a Student
              </Link>
            </div>
          </div>
          
          <div className="relative group animate-fade-in">
            <div className="absolute -inset-10 bg-forest/5 blur-[120px] rounded-full -z-10 transition-all duration-1000"></div>
            <div className="relative rounded-[4rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)] border-[12px] border-white transform hover:rotate-1 transition-all duration-700">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" 
                alt="Diverse group of leaders" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-navy/20"></div>
              <div className="absolute bottom-10 left-10 right-10 text-white">
                <p className="text-3xl font-heading font-bold italic leading-tight">"Success is built on a whole soul."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CLINICAL IMPACT & OUTCOMES */}
      <section className="py-24 px-4 bg-white rounded-[5rem] mb-32 relative overflow-hidden shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div className="inline-block px-4 py-1.5 bg-forest text-sand text-[10px] font-bold uppercase tracking-widest rounded-lg">PROVEN OUTCOMES</div>
              <h2 className="text-4xl lg:text-5xl font-heading font-black text-navy leading-tight">Measured <br/><span className="text-forest italic">Transformation.</span></h2>
              <p className="text-xl text-navy/60 leading-relaxed font-light">
                We utilize clinical PHQ-9 (Depression) and GAD-7 (Anxiety) screenings to measure progress. Our program significantly reduces symptoms among graduates, with many transitioning from severe distress to mild or no symptoms.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="bg-sand/30 p-8 rounded-3xl border border-navy/5">
                  <p className="text-4xl font-heading font-black text-forest mb-2">100%</p>
                  <p className="text-xs font-black uppercase tracking-widest text-navy/40">Symptom Reduction Reported</p>
                </div>
                <div className="bg-sand/30 p-8 rounded-3xl border border-navy/5">
                  <p className="text-4xl font-heading font-black text-forest mb-2">12/12</p>
                  <p className="text-xs font-black uppercase tracking-widest text-navy/40">Successful Graduates</p>
                </div>
              </div>
              <p className="text-lg text-navy/60 font-light italic">
                Graduates now serve as Mental Wellness Coaches supporting underserved communities, BIPOC groups, and local churches.
              </p>
            </div>
            <div className="relative">
              <div className="bg-navy text-sand p-12 lg:p-16 rounded-[4rem] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-teal/10 blur-[80px] rounded-full"></div>
                <h3 className="text-2xl font-heading font-bold mb-8 text-teal italic">Pro Bono Impact</h3>
                <p className="text-lg opacity-70 leading-relaxed mb-10 font-light">
                  Our certified coaches provide counseling and stabilization support globally, continuing the mission of bridge-building.
                </p>
                <ul className="space-y-5">
                   {["Underserved Communities", "BIPOC Groups", "Local Churches", "Global Crisis Support"].map((item, i) => (
                     <li key={i} className="flex items-center space-x-4">
                        <span className="w-1.5 h-1.5 bg-teal rounded-full"></span>
                        <span className="text-lg font-bold">{item}</span>
                     </li>
                   ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE CURRICULUM: LISTED FOR READABILITY */}
      <section className="py-32 px-4 mb-32">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl lg:text-7xl font-heading font-black text-navy leading-[1.1] tracking-tighter mb-8">
              The <span className="text-forest italic">Curriculum.</span>
            </h2>
            <p className="text-2xl text-navy/40 font-light mx-auto italic">
              A strategy for soul restoration, divided into six core modules.
            </p>
          </div>

          <div className="space-y-12">
            {curriculumPoints.map((point, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-8 items-start p-10 bg-white rounded-[3rem] border border-navy/5 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-4xl font-heading font-black text-forest/20 leading-none">{point.id}</span>
                <div>
                  <h4 className="text-2xl font-heading font-bold text-navy mb-4 tracking-tight">{point.title}</h4>
                  <p className="text-lg text-navy/60 leading-relaxed font-light">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WEEKLY ACTIVITIES: CLEAN LAYOUT */}
      <section className="py-32 px-4 bg-navy text-sand rounded-[5rem] mb-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-teal italic tracking-tighter">Holistic Rhythms.</h2>
            <p className="text-xl opacity-60 font-light max-w-2xl mx-auto mt-6">Restoration requires engagement across the spirit, soul, and body.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Weekly Mentorship", desc: "One-on-one and group guidance sessions for clinical-spiritual breakthrough." },
              { title: "Saturday Fitness", desc: "Intentional training designed to process stress and build physical resilience." },
              { title: "Nutrition Plans", desc: "Personalized nutritional guidance to support cognitive and emotional health." },
              { title: "Friday Prayer", desc: "Collective prayer sessions to anchor the soul and establish spiritual authority." }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-4xl hover:bg-white/10 transition group text-center">
                <h3 className="text-2xl font-heading font-bold mb-4 text-teal">{item.title}</h3>
                <p className="opacity-60 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. JOSHUA TREE RETREAT */}
      <section className="py-32 px-4 bg-white rounded-[6rem] shadow-sm mb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative group">
            <div className="absolute -inset-10 bg-forest/5 blur-[120px] rounded-full -z-10"></div>
            <div className="relative rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-white">
              <img 
                src="https://images.unsplash.com/photo-1542332213-31f87348057f?q=80&w=2070&auto=format&fit=crop" 
                alt="Joshua Tree Landscape with diverse students" 
                className="w-full h-[700px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-12 left-12 right-12 text-white">
                <p className="text-sm font-black uppercase tracking-[0.4em] mb-4 text-teal">The Culmination</p>
                <h3 className="text-4xl font-heading font-bold italic leading-tight">Joshua Tree Retreat.</h3>
              </div>
            </div>
          </div>
          <div className="space-y-12">
            <h2 className="text-4xl lg:text-5xl font-heading font-black text-navy leading-tight">3 Days in the <span className="text-forest italic underline decoration-teal decoration-8 underline-offset-8">Desert.</span></h2>
            <p className="text-xl text-navy/60 leading-relaxed font-light">
              The program ends with a 3-day healing retreat in Joshua Tree—a sacred space for final release and communal restoration.
            </p>
            <div className="space-y-8">
               {[
                 { t: "Daily Modules", d: "Structured teaching and meditations within the desert's quiet landscape." },
                 { t: "Mindful Hiking", d: "Connecting body and soul through hiking and grounding exercises." },
                 { t: "Campfire Forgiveness", d: "A closing ceremony where participants write and release letters of forgiveness." }
               ].map((item, i) => (
                 <div key={i} className="flex items-start space-x-6">
                    <div className="w-1.5 h-1.5 bg-forest rounded-full mt-3 shrink-0"></div>
                    <div>
                      <h4 className="text-xl font-bold text-navy mb-2">{item.t}</h4>
                      <p className="text-navy/50 text-sm">{item.d}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. JOIN OUR NEXT COHORT: SEPTEMBER 2026 */}
      <section className="py-32 px-4 bg-forest text-sand rounded-[7rem] mb-12 relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="inline-block px-6 py-2 bg-white/10 rounded-full border border-white/20 font-black text-xs uppercase tracking-[0.5em]">
            Cohort Open: September 2026
          </div>
          <h2 className="text-5xl lg:text-7xl font-heading font-black leading-[1.1] tracking-tighter">Join the <span className="text-teal italic">Next Journey.</span></h2>
          <p className="text-2xl opacity-70 font-light italic leading-relaxed">
            Limited spots available for this intensive restoration container.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left py-12">
             <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] text-center">
                <p className="text-xs font-black uppercase tracking-widest text-teal mb-4">Investment</p>
                <p className="text-4xl font-heading font-black">$500</p>
                <p className="text-[10px] opacity-40 mt-2">Inclusive of all materials</p>
             </div>
             <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] text-center">
                <p className="text-xs font-black uppercase tracking-widest text-teal mb-4">Graduation</p>
                <p className="text-3xl font-heading font-bold leading-tight">Crossing Jackets</p>
                <p className="text-[10px] opacity-40 mt-2">Exclusive for finishers</p>
             </div>
             <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] text-center">
                <p className="text-xs font-black uppercase tracking-widest text-teal mb-4">Experience</p>
                <p className="text-3xl font-heading font-bold leading-tight">3-Day Retreat</p>
                <p className="text-[10px] opacity-40 mt-2">Joshua Tree Experience</p>
             </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-10">
            <Link to="/programs/sos/apply" className="bg-teal text-navy font-black px-12 py-7 rounded-[2rem] text-center shadow-2xl hover:bg-white transition-all transform hover:scale-105 text-2xl">
              Apply Now
            </Link>
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section className="py-24 px-4 mb-32">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-navy text-center mb-16 italic">Program Logistics.</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group p-8 bg-white border border-navy/5 rounded-[2.5rem] open:shadow-xl transition-all duration-500">
                <summary className="font-bold text-navy text-xl list-none cursor-pointer flex justify-between items-center select-none">
                  {faq.q}
                  <span className="text-forest transition-transform group-open:rotate-45 font-light text-4xl leading-none">+</span>
                </summary>
                <p className="mt-8 text-navy/50 leading-relaxed text-lg border-t border-sand pt-8 animate-fade-in font-light">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out forwards; }
        .animate-fade-in { animation: fade-in-up 1.5s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default SOS;