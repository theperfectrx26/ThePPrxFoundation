import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PROGRAMS, TESTIMONIALS, DONATION_TIERS, IMAGE_ASSETS } from '../constants';
import SEOHelmet from '../components/SEOHelmet';

const Home: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const homeSchema = {
    "@type": "NGO",
    "name": "The Perfect Prescription Foundation",
    "alternateName": "PPrX Foundation",
    "url": "https://theperfectrx.com",
    "logo": "https://theperfectrx.com/logo.png",
    "description": "A global nonprofit bridging faith and mental wellness through professional training and spiritual restoration.",
    "founder": {
      "@type": "Person",
      "name": "Dr. Maxine Okafor",
      "jobTitle": "CEO & Founder",
      "honorificSuffix": "DNP, PMHNP-BC, FNP-BC"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Los Angeles",
      "addressRegion": "CA",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://www.instagram.com/drchichirx",
      "https://www.gcmwc.org"
    ]
  };

  return (
    <div className="pt-32 md:pt-36">
      <SEOHelmet 
        title="Global Faith & Mental Health Non-Profit" 
        description="Transforming souls through the intersection of clinical excellence and spiritual restoration. Discover our global programs (MHE, S.O.S.) bridging the gap in care."
        schema={homeSchema}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-8 px-4 lg:py-12" aria-labelledby="hero-heading">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-teal/10 text-teal rounded-full font-bold text-sm tracking-widest uppercase">
              Faith meets mental wellness
            </div>
            <h1 id="hero-heading" className="text-5xl lg:text-7xl font-heading font-bold text-navy leading-tight">
              Bridging Faith and <span className="text-teal">Mental Wellness</span> for Global Impact.
            </h1>
            <p className="text-xl text-navy/70 max-w-xl leading-relaxed">
              We empower individuals and communities to embrace whole-person healing through evidence-based mental health tools and spiritual restoration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/donate" className="bg-forest text-sand px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition text-center">
                Donate Now
              </Link>
              <Link to="/partner" className="bg-white border-2 border-forest text-forest px-8 py-4 rounded-full font-bold hover:bg-forest hover:text-sand transition text-center">
                Partner With Us
              </Link>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-teal/20 blur-3xl rounded-full opacity-50 group-hover:opacity-75 transition"></div>
            <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-navy/5">
              <img 
                src={IMAGE_ASSETS.hero} 
                alt="The Mental Health Experience - Nigeria tour group connection" 
                className="relative w-full h-[500px] object-cover hover:scale-105 transition duration-700"
                onError={(e) => {
                  e.currentTarget.src = IMAGE_ASSETS.heroFallback;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent pointer-events-none"></div>
              <div className="absolute bottom-6 left-6 right-6 p-6 glass-card rounded-2xl">
                <p className="text-xs font-bold text-amber uppercase tracking-widest mb-1">Spiritual Restoration</p>
                <p className="text-navy font-bold leading-tight">The Mental Health Experience Nigeria.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Impact Counter */}
      <section className="py-16 bg-forest text-sand" aria-label="Global Impact Statistics">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-heading font-bold text-teal mb-2">3+</p>
            <p className="text-sm uppercase tracking-widest opacity-70">Continents Reached</p>
          </div>
          <div>
            <p className="text-4xl font-heading font-bold text-teal mb-2">5k+</p>
            <p className="text-sm uppercase tracking-widest opacity-70">Lives Impacted</p>
          </div>
          <div>
            <p className="text-4xl font-heading font-bold text-teal mb-2">25+</p>
            <p className="text-sm uppercase tracking-widest opacity-70">Workshops Held</p>
          </div>
          <div>
            <p className="text-4xl font-heading font-bold text-teal mb-2">5+</p>
            <p className="text-sm uppercase tracking-widest opacity-70">Partner Churches</p>
          </div>
        </div>
      </section>

      {/* Program Cards */}
      <section className="py-24 px-4" aria-labelledby="programs-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 id="programs-heading" className="text-4xl font-heading font-bold text-navy">Our Core Programs</h2>
            <p className="text-navy/60 max-w-2xl mx-auto text-lg">
              Tailored initiatives designed to meet communities where they are, from the local church to global conferences.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROGRAMS.map((prog) => (
              <Link 
                key={prog.id} 
                to={prog.path}
                className="group p-8 rounded-3xl glass-card hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col justify-between"
                aria-label={`Learn more about ${prog.title}`}
              >
                <div>
                  <div className={`w-16 h-16 ${prog.color} text-white rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg group-hover:scale-110 transition`}>
                    {prog.icon}
                  </div>
                  <h3 className="text-xl font-heading font-bold text-navy mb-4">{prog.title}</h3>
                  <p className="text-navy/70 leading-relaxed mb-8">{prog.description}</p>
                </div>
                <span className="text-teal font-bold flex items-center group-hover:translate-x-2 transition">
                  Learn More <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Global Impact Narrative & Testimonial Carousel */}
      <section className="py-24 px-4 overflow-hidden bg-white" aria-labelledby="narrative-heading">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           <div className="space-y-12">
              <div>
                <h2 id="narrative-heading" className="text-4xl font-heading font-bold mb-6 text-navy">A Truly Global Narrative</h2>
                <p className="text-lg text-navy/70 leading-relaxed max-w-xl">
                  Starting in Los Angeles and expanding to Lagos, Nigeria, our mission knows no borders. We are bridging the gap between clinical excellence and cultural spirituality.
                </p>
              </div>
              <div className="space-y-6">
                 {[
                   { year: '2022', event: '40 Days X 40 Nights Ministry is Birthed' },
                   { year: '2023', event: 'Foundation Launch in Los Angeles, CA' },
                   { year: '2023', event: 'First "Mental Health Experience" in Los Angeles California' },
                   { year: '2024', event: 'MHE Nigeria in Lagos Nigeria' },
                   { year: '2024', event: 'Global Launch of The School of the Spirit & Retreat' },
                   { year: '2025', event: 'Global Expansion & Mental Wellness Coaching Begins' },
                 ].map((item, i) => (
                   <div key={i} className="flex items-start space-x-6">
                      <div className="bg-teal text-navy font-bold py-1 px-3 rounded-lg text-sm min-w-[70px] text-center">{item.year}</div>
                      <div className="text-navy font-medium border-l-2 border-teal/20 pl-6 pb-6 leading-snug">{item.event}</div>
                   </div>
                 ))}
              </div>
           </div>

           <div className="relative h-full flex flex-col justify-center">
              <div className="aspect-square bg-forest rounded-full opacity-5 absolute -top-10 -right-10 blur-3xl"></div>
              
              <div className="relative z-10 space-y-8 animate-fade-in">
                <article className="relative overflow-hidden rounded-[3rem] shadow-2xl h-[600px] group bg-navy">
                  <img 
                    src={IMAGE_ASSETS.communityRestoration} 
                    className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 transition duration-1000" 
                    alt="Community restoration and collective healing session" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent"></div>
                  
                  <div className="absolute inset-0 flex flex-col justify-center p-12 text-center">
                    <div className="mb-8">
                      <span className="text-6xl text-teal opacity-50 font-serif" aria-hidden="true">“</span>
                      <div className="min-h-[200px] flex items-center justify-center px-4">
                        <p className="text-2xl md:text-3xl font-serif italic text-white leading-relaxed transition-all duration-700">
                          {TESTIMONIALS[activeTestimonial].quote}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-px w-16 bg-teal mx-auto mb-4"></div>
                      <h4 className="font-heading font-bold text-white text-xl">{TESTIMONIALS[activeTestimonial].name}</h4>
                      <p className="text-teal font-medium uppercase tracking-[0.2em] text-xs">
                        {TESTIMONIALS[activeTestimonial].role} &bull; {TESTIMONIALS[activeTestimonial].location}
                      </p>
                    </div>
                  </div>

                  {/* Carousel Controls */}
                  <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3">
                    {TESTIMONIALS.map((_, i) => (
                      <button 
                        key={i} 
                        onClick={() => setActiveTestimonial(i)}
                        aria-label={`View testimonial ${i + 1}`}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${activeTestimonial === i ? 'bg-teal w-8' : 'bg-white/30 hover:bg-white/60'}`}
                      />
                    ))}
                  </div>
                </article>
              </div>
           </div>
        </div>
      </section>

      {/* Ways to Help */}
      <section className="py-24 px-4" aria-labelledby="cta-heading">
        <div className="max-w-7xl mx-auto bg-navy rounded-5xl p-12 lg:p-20 text-center text-sand relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
          <h2 id="cta-heading" className="text-4xl lg:text-5xl font-heading font-bold mb-6">Will You Help Us Build The Bridge?</h2>
          <p className="text-xl opacity-80 mb-12 max-w-2xl mx-auto">
            Your support provides the resources needed to train leaders, host experiences, and provide care for those in need.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
             {DONATION_TIERS.slice(0, 3).map((tier) => (
               <div key={tier.id} className="bg-white/5 border border-white/10 p-8 rounded-3xl text-left hover:bg-white/10 transition">
                  <p className="text-teal font-bold mb-2">${tier.amount}</p>
                  <p className="text-xl font-bold mb-4">{tier.label}</p>
                  <p className="text-sm opacity-60 leading-relaxed">{tier.impact}</p>
               </div>
             ))}
          </div>
          <Link to="/donate" className="inline-block bg-amber text-navy px-12 py-5 rounded-full font-black shadow-2xl hover:scale-105 transition">
            Donate Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;