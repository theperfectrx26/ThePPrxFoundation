import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pt-44 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Contact Information */}
          <div className="space-y-12">
            <div>
              <h1 className="text-5xl font-heading font-bold text-navy mb-6">Let's Connect.</h1>
              <p className="text-xl text-navy/70 leading-relaxed mb-8">
                Whether you want to bring The Mental Health Experience to your city, join an SOS cohort, or simply learn more about our mission, we’re here to listen.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-teal/10 text-teal rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <div>
                  <h4 className="font-bold text-navy">Headquarters</h4>
                  <p className="text-navy/60">Los Angeles, CA, USA</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-amber/10 text-amber rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                  <h4 className="font-bold text-navy">Email Us</h4>
                  <p className="text-navy/60">support@theperfectrx.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-forest/10 text-forest rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <div>
                  <h4 className="font-bold text-navy">Call Support</h4>
                  <p className="text-navy/60">+1 323.568.1700</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-sage/30 rounded-3xl border border-forest/5">
              <h4 className="font-bold text-navy mb-2">Response Time</h4>
              <p className="text-sm text-navy/60 leading-relaxed">
                We are a small but dedicated team. Please allow 2-3 business days for a response regarding program requests or partnerships.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-12 rounded-4xl shadow-2xl border border-navy/5 relative">
            {submitted ? (
              <div className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-4xl flex flex-col items-center justify-center text-center p-8 z-10 animate-fade-in">
                <div className="w-20 h-20 bg-teal text-white rounded-full flex items-center justify-center text-4xl mb-6 shadow-xl">✓</div>
                <h3 className="text-2xl font-heading font-bold text-navy mb-4">Message Received!</h3>
                <p className="text-navy/60">Thank you for reaching out. A member of our foundation team will contact you shortly.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-forest font-bold underline"
                >
                  Send another message
                </button>
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-navy mb-2 uppercase tracking-widest text-[10px]">Full Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Enter your name" 
                    className="w-full px-6 py-4 bg-sand rounded-2xl border-none focus:ring-2 ring-teal outline-none transition" 
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-navy mb-2 uppercase tracking-widest text-[10px]">Email Address</label>
                  <input 
                    required
                    type="email" 
                    placeholder="name@email.com" 
                    className="w-full px-6 py-4 bg-sand rounded-2xl border-none focus:ring-2 ring-teal outline-none transition" 
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-navy mb-2 uppercase tracking-widest text-[10px]">Subject / Area of Interest</label>
                <select 
                  className="w-full px-6 py-4 bg-sand rounded-2xl border-none focus:ring-2 ring-teal outline-none transition appearance-none"
                  value={formState.subject}
                  onChange={(e) => setFormState({...formState, subject: e.target.value})}
                >
                  <option>General Inquiry</option>
                  <option>Bring MHE to My City</option>
                  <option>The School of the Spirit (SOS)</option>
                  <option>Church & Ministry Partnership</option>
                  <option>Donation & Transparency</option>
                  <option>Media Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-navy mb-2 uppercase tracking-widest text-[10px]">Your Message</label>
                <textarea 
                  required
                  rows={5} 
                  placeholder="Tell us a bit about how we can help..." 
                  className="w-full px-6 py-4 bg-sand rounded-2xl border-none focus:ring-2 ring-teal outline-none transition resize-none"
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-forest text-sand font-black py-5 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.01] active:scale-95 transition"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;