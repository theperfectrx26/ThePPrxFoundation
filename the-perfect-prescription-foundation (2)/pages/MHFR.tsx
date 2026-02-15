
import React, { useState } from 'react';
import SEOHelmet from '../components/SEOHelmet';

const MHFR: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    role: '',
    email: '',
    phone: '',
    location: '',
    audienceType: 'Workplace',
    attendees: '',
    format: 'On-site',
    timeframe: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const courseSchema = {
    "@type": "Course",
    "name": "Mental Health First Responder (MHFR) Certification",
    "description": "An 8-hour professional certification training equipping non-clinical community leaders to recognize, stabilize, and refer mental health risks.",
    "provider": {
      "@type": "Organization",
      "name": "The Perfect Prescription Foundation",
      "url": "https://theperfectrx.com"
    },
    "courseCode": "MHFR-PPRX-2024",
    "educationalLevel": "Professional/Intermediate",
    "occupationalCredentialAwarded": "Certified Mental Health First Responder",
    "timeRequired": "PT8H",
    "offers": {
      "@type": "Offer",
      "price": "50.00",
      "priceCurrency": "USD"
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToRequest = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    const element = document.getElementById('request');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navItems = [
    { name: 'Need', href: '#problem' },
    { name: 'Scope', href: '#scope' },
    { name: 'Curriculum', href: '#curriculum' },
    { name: 'Steps', href: '#process' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];

  const clientTestimonials = [
    {
      group: "Corporate Business",
      logo: "🏢",
      text: "The MHFR training transformed our HR approach. Our managers now lead with empathy and a clear protocol for employee wellness that prioritizes the person over policy.",
      author: "Senior HR Director, Tech Solutions"
    },
    {
      group: "Church Ministry",
      logo: "⛪",
      text: "Our deacons feel much more confident in their roles. We no longer wait for a crisis to intervene; we recognize the patterns early and have a clear map for clinical referral.",
      author: "Executive Pastor, Grace Fellowship"
    },
    {
      group: "Community Organization",
      logo: "🤝",
      text: "In our underserved neighborhoods, having certified responders has created a safety net that simply didn't exist before. Competency is the greatest form of compassion.",
      author: "Program Lead, Urban Restoration Project"
    }
  ];

  return (
    <div className="bg-sand text-navy font-sans selection:bg-teal selection:text-white">
      <SEOHelmet 
        title="Mental Health First Responder (MHFR) Certification"
        description="Earn your MHFR certification. An 8-hour professional training for pastors, HR leads, and community mentors to recognize early warning signs and coordinate safe care."
        schema={courseSchema}
      />

      {/* Professional Sub-Nav */}
      <nav className="fixed top-24 left-0 right-0 z-40 bg-white/95 border-b border-navy/10 hidden lg:block shadow-sm">
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-8 bg-forest"></div>
            <span className="font-heading font-bold text-navy text-sm tracking-tight uppercase">MHFR PROTOCOL</span>
          </div>
          <div className="flex space-x-12">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="text-[11px] font-bold uppercase tracking-widest text-navy/60 hover:text-forest transition">
                {item.name}
              </a>
            ))}
          </div>
          <button 
            onClick={() => scrollToRequest()} 
            className="bg-forest text-sand text-[11px] font-bold px-8 py-2.5 rounded hover:bg-navy transition-colors uppercase tracking-widest"
          >
            REQUEST TRAINING
          </button>
        </div>
      </nav>

      {/* Hero: Direct & Credible */}
      <section className="relative pt-36 lg:pt-48 pb-24 px-4 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-block border-l-4 border-teal pl-4 py-1">
              <span className="text-[11px] font-bold text-navy/50 uppercase tracking-[0.2em]">Clinical-Spiritual Integration</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-heading font-bold text-navy leading-[1.1] tracking-tight">
              Mental Health <br/>
              <span className="text-forest">First Responder.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-navy/70 leading-relaxed max-w-2xl font-light">
              An 8-hour certification equipping leaders to recognize risk early, respond with clinical wisdom, and coordinate professional referral.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button 
                onClick={() => scrollToRequest()} 
                className="bg-forest text-sand font-black px-12 py-6 rounded-2xl shadow-xl hover:bg-navy transition-all transform hover:scale-105 text-center text-xl"
              >
                Request Training Now
              </button>
            </div>
            <div className="pt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 opacity-60">
              <div className="text-[10px] font-bold uppercase tracking-widest flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-teal mr-3"></div>
                8-Hour Training
              </div>
              <div className="text-[10px] font-bold uppercase tracking-widest flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-teal mr-3"></div>
                Certification Provided
              </div>
              <div className="text-[10px] font-bold uppercase tracking-widest flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-teal mr-3"></div>
                Community Centered
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] bg-sand rounded-[3rem] overflow-hidden shadow-2xl grayscale border-[12px] border-white hover:grayscale-0 transition-all duration-1000">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                alt="Dr. Okafor leading a professional MHFR certification seminar" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section id="problem" className="py-24 px-4 bg-navy text-sand">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-20 space-y-6">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold leading-tight">Closing the gap between <br/><span className="text-teal">Concern and Care.</span></h2>
            <p className="text-lg opacity-60 leading-relaxed">
              Most communities identify mental health warning signs months before a crisis, yet leaders often hesitate due to a lack of training or fear of liability. This silence allows outcomes to worsen.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Early Withdrawal", text: "Recognizing a sudden drop in participation and engagement." },
              { title: "Grief & Loss", text: "Navigating the behavioral shifts that follow a significant loss." },
              { title: "High-Functioning Stress", text: "Identifying burnout and anxiety cues in top performers." },
              { title: "Crisis Prevention", text: "Stabilizing immediate distress while securing professional care." }
            ].map((card, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-teal/50 transition-colors">
                <h4 className="font-bold text-lg mb-4">{card.title}</h4>
                <p className="text-sm opacity-50 leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 max-w-2xl mx-auto space-y-6">
            <h2 className="text-4xl lg:text-6xl font-heading font-bold text-navy tracking-tight italic">Course Curriculum.</h2>
            <p className="text-lg text-navy/50 font-light">An intensive 8-hour experience covering the full spectrum of community response.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
              { id: "01", title: "Recognizing Warning Signs", desc: "Understanding the physiological and behavioral cues of anxiety, depression, and severe distress." },
              { id: "02", title: "Active Stabilization", desc: "Verbal de-escalation techniques and psychological first-aid for immediate stabilization." },
              { id: "03", title: "Clinical Triage & Mapping", desc: "Developing a local database of licensed clinics, specialists, and crisis centers." },
              { id: "04", title: "Professional Boundaries", desc: "Understanding the limits of lay response to ensure safety for both responder and individual." }
            ].map((item, i) => (
              <div key={i} className="flex gap-8 p-10 bg-sand/30 rounded-[3rem] border border-navy/5 hover:bg-white hover:shadow-xl transition-all">
                <span className="text-3xl font-heading font-black text-forest/20">{item.id}</span>
                <div>
                  <h4 className="text-2xl font-bold text-navy mb-4">{item.title}</h4>
                  <p className="text-navy/60 leading-relaxed font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Form Section */}
      <section id="request" className="py-32 px-4 bg-navy scroll-mt-40">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="text-sand space-y-12">
            <h2 className="text-5xl font-heading font-bold mb-8 leading-tight">Inquire for <br/>Community Training.</h2>
            <p className="text-xl opacity-60 font-light max-w-lg">
              We provide MHFR training for churches, corporate HR teams, and nonprofit leadership groups globally.
            </p>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-1.5 h-1.5 bg-teal rounded-full"></div>
                <p className="text-lg font-bold">Minimum 10 Attendees</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-1.5 h-1.5 bg-teal rounded-full"></div>
                <p className="text-lg font-bold">Digital or On-site Delivery</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-1.5 h-1.5 bg-teal rounded-full"></div>
                <p className="text-lg font-bold">Standard Certification Issued</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 lg:p-14 rounded-[3rem] shadow-2xl relative text-navy">
            {submitted ? (
              <div className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-[3rem] flex flex-col items-center justify-center text-center p-10 z-10">
                <div className="w-20 h-20 bg-forest text-sand rounded-full flex items-center justify-center text-4xl mb-6 shadow-xl">✓</div>
                <h3 className="text-2xl font-heading font-bold text-navy mb-4">Inquiry Received.</h3>
                <p className="text-navy/60 font-light">A training coordinator will contact you via email to discuss scheduling and logistics.</p>
                <button onClick={() => setSubmitted(false)} className="mt-8 text-forest font-bold underline">Submit another request</button>
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-navy/40 tracking-widest">Your Name</label>
                  <input required type="text" className="w-full bg-sand px-6 py-4 rounded-2xl outline-none focus:ring-1 ring-forest" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-navy/40 tracking-widest">Organization</label>
                  <input required type="text" className="w-full bg-sand px-6 py-4 rounded-2xl outline-none focus:ring-1 ring-forest" value={formData.organization} onChange={e => setFormData({...formData, organization: e.target.value})} />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-navy/40 tracking-widest">Email Address</label>
                  <input required type="email" className="w-full bg-sand px-6 py-4 rounded-2xl outline-none focus:ring-1 ring-forest" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-navy/40 tracking-widest">Audience Type</label>
                  <select className="w-full bg-sand px-6 py-4 rounded-2xl outline-none focus:ring-1 ring-forest" value={formData.audienceType} onChange={e => setFormData({...formData, audienceType: e.target.value})}>
                    <option>Church Leadership</option>
                    <option>Corporate / Workplace</option>
                    <option>Campus / University</option>
                    <option>Community NGO</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-navy/40 tracking-widest">Additional Details / Goals</label>
                <textarea rows={4} className="w-full bg-sand px-6 py-4 rounded-2xl outline-none focus:ring-1 ring-forest resize-none" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
              </div>
              <button type="submit" className="w-full bg-navy text-sand font-bold py-5 rounded-2xl shadow-xl hover:bg-forest transition transform hover:scale-[1.01] active:scale-95 text-lg">
                Submit Training Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MHFR;
