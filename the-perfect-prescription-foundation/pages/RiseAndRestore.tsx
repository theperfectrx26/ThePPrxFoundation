import React from 'react';
import { Link } from 'react-router-dom';

const RiseAndRestore: React.FC = () => {
  return (
    <div className="pt-64 md:pt-72 pb-24 bg-sand/20">
      {/* Summit Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden rounded-[4rem] mx-4 lg:mx-8 shadow-2xl">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop" 
            alt="Diverse group of women laughing and encouraging each other" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/60 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center w-full">
          <div className="max-w-4xl mx-auto py-16">
            <div className="inline-block px-6 py-2 bg-teal/20 text-teal border border-teal/30 rounded-full font-black text-[10px] sm:text-xs mb-10 uppercase tracking-[0.4em] animate-fade-in shadow-xl">
              Global Women Empowerment Conference 2027
            </div>
            <h1 className="text-white font-heading font-black text-6xl lg:text-[120px] leading-[0.85] mb-10 tracking-tighter">
              Rise & <span className="text-teal italic">Restore.</span>
            </h1>
            <p className="text-sand font-black text-xl lg:text-3xl uppercase tracking-[0.25em] mb-12 opacity-90">
              Her Healing. Her Power. Her Voice.
            </p>
            <p className="text-sand/80 text-xl lg:text-2xl leading-relaxed mb-16 max-w-3xl mx-auto font-light">
              A soul-centered summit for high-functioning women ready to stop building success on a broken soul and start walking in generational freedom.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 pb-8">
              <div className="px-10 py-5 bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl">
                <p className="text-sand font-black uppercase tracking-[0.2em] text-sm">Registration starts in 2027</p>
              </div>
              <Link to="/programs/rise-restore/speak" className="bg-teal text-navy font-black px-12 py-6 rounded-2xl shadow-2xl hover:bg-white transition-all transform hover:scale-105 text-center text-xl">
                Apply to Speak
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Founder's Story: The Breaking */}
      <section id="about-summit" className="pt-16 pb-40 px-6 bg-white rounded-[6rem] mt-6 mx-4 shadow-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <div className="inline-block px-4 py-1.5 bg-forest/5 text-forest rounded font-black text-[10px] uppercase tracking-widest">
              From the Founder
            </div>
            <h2 className="text-5xl lg:text-7xl font-heading font-black text-navy leading-[1.1] tracking-tighter">
              Success Without Identity <br/><span className="text-forest italic">Will Always Collapse.</span>
            </h2>
            <div className="space-y-8 text-xl text-navy/60 leading-relaxed font-light">
              <p>
                "I grew up as a first-generation child, carrying both expectation and pain. Every degree, every accolade, every new title became another mask I wore to prove I was enough."
              </p>
              <p className="italic border-l-8 border-teal pl-8 font-medium text-navy bg-sand/30 py-8 rounded-r-3xl">
                "Eventually, I became popular for my gift in healing. I was making more money than ever. On the outside, it looked like success. But then came the breaking. Persecution. Betrayal."
              </p>
              <p>
                In that breaking, I realized that success cannot heal you. Only soul-healing can. The <strong>Chi Method™</strong> was born from the ashes of that experience to ensure no woman has to suffer in silence while succeeding in public.
              </p>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-8 bg-teal/5 blur-[100px] rounded-full"></div>
            <img 
              src="https://static.wixstatic.com/media/e6a8e2_4444c97b76f5432d9caa014a85aad02b~mv2.jpeg/v1/crop/x_0,y_119,w_1884,h_1810/fill/w_1884,h_1810,al_c,q_90,enc_avif,quality_auto/IMG_D26B2480E24A-1.jpeg" 
              className="rounded-[4rem] shadow-2xl grayscale hover:grayscale-0 transition duration-1000 aspect-[4/5] object-cover relative z-10 border-[12px] border-white" 
              alt="Dr. Maxine Chi Chi Okafor" 
            />
            <div className="absolute -bottom-10 -left-10 bg-navy p-10 rounded-[3rem] shadow-2xl z-20 max-w-sm hidden md:block">
              <p className="text-teal font-black text-2xl mb-2">Dr. Maxine Chi Chi Okafor</p>
              <p className="text-sand/50 text-xs font-black uppercase tracking-widest">DNP, PMHNP, FNP & Global Leader</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Chi Method™ - Framework of the Summit */}
      <section className="py-40 px-6 bg-navy text-sand rounded-[7rem] mt-32 mx-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-32 space-y-8">
            <h2 className="text-5xl lg:text-8xl font-heading font-black mb-6 tracking-tighter">The <span className="text-teal italic">Chi Method.</span></h2>
            <p className="text-2xl opacity-60 max-w-3xl mx-auto font-light">
              Our summit framework is built on four pillars of integration. When these four are aligned, you don't just function—you thrive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { title: "Spiritual", icon: "✨", text: "Realigning with truth and identity beyond labels. Reconnecting to your spirit to find who you truly are." },
              { title: "Mental", icon: "🧠", text: "Renewing the mind. Breaking destructive thought patterns and shifting out of self-sabotage." },
              { title: "Emotional", icon: "🌊", text: "Learning to regulate emotions, process grief, and release trauma so you can live free." },
              { title: "Physical", icon: "🌱", text: "Honoring the body with rest and movement. Your body sustains your divine purpose." }
            ].map((pillar, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-12 rounded-[3.5rem] hover:bg-white/10 transition group text-center">
                <div className="text-6xl mb-10 group-hover:scale-110 transition duration-300">{pillar.icon}</div>
                <h3 className="text-3xl font-heading font-black mb-6 text-teal italic">{pillar.title}</h3>
                <p className="opacity-60 leading-relaxed text-lg font-light">{pillar.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call for Speakers Section */}
      <section id="speakers" className="py-40 px-6 bg-white rounded-[7rem] mt-32 mx-4 shadow-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute inset-0 bg-forest/5 blur-[120px] rounded-full"></div>
            <img 
              src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=2070&auto=format&fit=crop" 
              alt="Woman speaking with conviction" 
              className="rounded-[4rem] shadow-2xl relative z-10 w-full h-[650px] object-cover"
            />
          </div>
          <div className="order-1 lg:order-2 space-y-12">
            <div className="inline-block px-4 py-1.5 bg-teal/10 text-teal rounded font-black text-[10px] uppercase tracking-widest">Call for Visionaries</div>
            <h2 className="text-5xl lg:text-7xl font-heading font-black text-navy leading-[1.1] tracking-tighter">
              Join Our <br/><span className="text-forest italic underline decoration-teal decoration-[12px] underline-offset-8">Speaking Faculty.</span>
            </h2>
            <p className="text-2xl text-navy/60 leading-relaxed font-light">
              We are seeking global voices in psychiatry, theology, leadership, and soul-care to join the Rise & Restore 2027 stage. If your work bridges clinical wisdom and spiritual depth, we want to hear from you.
            </p>
            <div className="space-y-8 pb-8">
               {[
                 { t: "Subject Matter Experts", d: "Leading voices in mental health and spiritual formation." },
                 { t: "Authentic Storytellers", d: "High-impact leaders with transformative restoration journeys." },
                 { t: "Interactive Facilitators", d: "Experts in creating deep communal experiences." }
               ].map((item, i) => (
                 <div key={i} className="flex items-start space-x-6">
                    <div className="w-1.5 h-1.5 bg-teal rounded-full mt-3 shrink-0"></div>
                    <div>
                      <h4 className="text-xl font-bold text-navy mb-1">{item.t}</h4>
                      <p className="text-navy/50 text-sm">{item.d}</p>
                    </div>
                 </div>
               ))}
            </div>
            <Link to="/programs/rise-restore/speak" className="inline-block bg-navy text-sand font-black px-12 py-6 rounded-2xl shadow-xl hover:bg-forest transition-all transform hover:scale-105 text-xl">
              Apply to Join Faculty
            </Link>
          </div>
        </div>
      </section>

      {/* Pathways to Transformation */}
      <section className="py-40 px-6">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <h2 className="text-5xl lg:text-7xl font-heading font-black text-navy leading-tight tracking-tighter">Wholeness Isn't a Dream. <br/><span className="text-teal italic">It's a Decision.</span></h2>
          <p className="text-2xl text-navy/60 mb-20 max-w-3xl mx-auto font-light">
            Go deeper after the summit. Choose the transformational pathway that aligns with your current season of growth.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="group bg-white p-14 rounded-[4rem] shadow-xl hover:shadow-2xl transition-all duration-500 border border-navy/5 text-left flex flex-col hover:-translate-y-2">
              <h3 className="text-3xl font-heading font-black text-navy mb-6 italic">The PPrX Clinic</h3>
              <p className="text-lg text-navy/60 mb-12 flex-grow leading-relaxed font-light">
                The Perfect Prescription Clinic is where therapy, psychiatry, and holistic medical care meet clinical excellence for those ready for professional restoration.
              </p>
              <a href="https://www.theperfectrx.com" target="_blank" rel="noopener noreferrer" className="w-full bg-navy text-white font-black py-6 rounded-2xl text-center shadow-lg hover:bg-forest transition-all text-xl">
                Inquire for Care
              </a>
            </div>

            <div className="group bg-white p-14 rounded-[4rem] shadow-xl hover:shadow-2xl transition-all duration-500 border border-navy/5 text-left flex flex-col hover:-translate-y-2">
              <h3 className="text-3xl font-heading font-black text-navy mb-6 italic">Wellness Coaching</h3>
              <p className="text-lg text-navy/60 mb-12 flex-grow leading-relaxed font-light">
                A soul-centered journey blending neuroscience, emotional intelligence, and faith. Designed for the woman ready to ignite transformation in every area of life.
              </p>
              <a href="https://www.gcmwc.org" target="_blank" rel="noopener noreferrer" className="w-full bg-forest text-sand font-black py-6 rounded-2xl text-center shadow-lg hover:bg-navy transition-all text-xl">
                Explore Coaching
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Footer-like section */}
      <section className="py-40 bg-forest text-sand text-center px-6 rounded-[7rem] mx-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-navy pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10 space-y-16">
          <h2 className="text-5xl lg:text-[100px] font-heading font-black leading-[0.85] tracking-tighter italic">Ready to <br/><span className="text-teal underline decoration-white/20 underline-offset-8">Rise?</span></h2>
          <p className="text-2xl opacity-80 mb-16 font-light max-w-2xl mx-auto">
            Join the movement of women restoring their power and finding their voice. Sign up to receive summit updates and early registration access.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-10 max-w-xl mx-auto mb-16">
             <p className="text-sand font-black uppercase tracking-[0.3em] text-lg mb-4">Registration starts in 2027</p>
             <p className="text-sand/60 text-sm italic">Enter your email below to be the first to know when tickets go live.</p>
          </div>

          <form className="flex flex-col sm:flex-row gap-6 max-w-xl mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-10 py-6 rounded-3xl bg-white/10 border border-white/30 text-white placeholder:text-white/40 focus:outline-none focus:ring-4 ring-teal transition-all text-lg"
            />
            <button type="button" className="bg-teal text-navy font-black px-12 py-6 rounded-3xl hover:bg-white transition-all transform hover:scale-105 shadow-2xl text-lg">
              Notify Me
            </button>
          </form>
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

export default RiseAndRestore;