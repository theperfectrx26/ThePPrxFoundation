import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGE_ASSETS } from '../constants';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: "Dr. Maxine C Okafor DNP, PMHNP, FNP",
      role: "Founder",
      title: "Chief Executive Officer",
      image: "https://static.wixstatic.com/media/e6a8e2_4444c97b76f5432d9caa014a85aad02b~mv2.jpeg/v1/crop/x_0,y_119,w_1884,h_1810/fill/w_1884,h_1810,al_c,q_90,enc_avif,quality_auto/IMG_D26B2480E24A-1.jpeg",
      bio: "Visionary leader bridging clinical medicine and spiritual restoration."
    },
    {
      name: "Donald Madza",
      role: "The Perfect Prescription Foundation - Nigeria",
      title: "Director and Board Member",
      image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=1000&auto=format&fit=crop",
      bio: "A Nigerian leader dedicated to expanding mental wellness infrastructure across Africa with cultural integrity."
    },
    {
      name: "Chanda Okafor",
      role: "The Perfect Prescription Foundation - Nigeria",
      title: "Board Member",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1000&auto=format&fit=crop",
      bio: "A licensed social worker focused on community impact and sustainable program delivery in West Africa."
    },
    {
      name: "Ashley Cooper",
      role: "Global Commision of Mental Wellness Coaching",
      title: "Board Member",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop",
      bio: "Advocating for professional coaching standards in mental health."
    },
    {
      name: "Aleshia Carter",
      role: "The Perfect Prescription Foundation - USA",
      title: "Executive Assistant",
      image: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&w=1000&auto=format&fit=crop",
      bio: "A 30-year-old professional ensuring operational excellence and mission alignment in global outreach."
    },
    {
      name: "Tina Nunez",
      role: "The Perfect Prescription Foundation - USA",
      title: "Media Relations",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop",
      bio: "Spreading the message of wholeness through strategic communication."
    }
  ];

  const joinPathways = [
    {
      title: "Clinical Professionals",
      desc: "Licensed therapists, NPs, and psychiatrists looking to integrate faith-aware care.",
      cta: "Join Clinical Network",
      icon: "⚕️"
    },
    {
      title: "Spiritual Mentors",
      desc: "Pastors and lay leaders ready to serve as SOS mentors and spiritual responders.",
      cta: "Become a Mentor",
      icon: "🕊️"
    },
    {
      title: "Community Volunteers",
      desc: "Operational and Events support to keep the movement growing locally.",
      cta: "Volunteer Today",
      icon: "🤝"
    }
  ];

  return (
    <div className="pt-32 md:pt-36 pb-24 px-4 bg-sand/30 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Dynamic Hero: High Impact Typography */}
        <section className="relative mb-32">
          <div className="max-w-4xl animate-fade-in">
            <div className="inline-flex items-center space-x-3 mb-8 px-4 py-1.5 bg-forest/5 rounded-full border border-forest/10">
              <span className="w-2 h-2 bg-teal rounded-full"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-navy/60">Our Mandate</span>
            </div>
            <h1 className="text-6xl lg:text-[100px] font-heading font-black text-navy leading-[0.9] tracking-tighter mb-12">
              Success is <br/><span className="text-forest italic">Soul Deep.</span>
            </h1>
            <p className="text-xl lg:text-3xl text-navy/70 leading-relaxed font-light max-w-3xl">
              We exist to dismantle the wall between clinical excellence and spiritual restoration. We don't just treat symptoms; we restore the whole person.
            </p>
          </div>
          {/* Abstract background shape */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal/5 blur-[120px] rounded-full -z-10 translate-x-1/2 -translate-y-1/4"></div>
        </section>

        {/* Narrative Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-40">
          <div className="relative group">
            <div className="absolute -inset-6 bg-forest/5 rounded-[4rem] -rotate-2 group-hover:rotate-0 transition duration-700"></div>
            <div className="relative overflow-hidden rounded-[3rem] shadow-2xl">
              <img 
                src={IMAGE_ASSETS.aboutStory} 
                className="w-full h-[600px] object-cover grayscale group-hover:grayscale-0 transition duration-1000" 
                alt="Foundation Mission"
              />
              <div className="absolute inset-0 bg-navy/20"></div>
            </div>
          </div>
          <div className="space-y-10">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-navy leading-tight">Bridging the Gap <br/><span className="text-forest underline decoration-teal decoration-4">Since 2022.</span></h2>
            <div className="space-y-6 text-lg text-navy/60 leading-relaxed">
              <p>
                The Perfect Prescription Foundation was born in the intersection of crisis and calling. We recognized that most faith-based communities lacked clinical tools, and most clinical settings ignored the spiritual soul.
              </p>
              <p>
                From our first "Mental Health Experience" in Los Angeles to global crusades in Nigeria, we have championed a model of <strong>Faith + Professional Care</strong> that has restored thousands of high-functioning leaders and underserved families.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 pt-6">
              <div>
                <p className="text-3xl font-heading font-black text-forest tracking-tighter">5,000+</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-navy/30">Lives Impacted</p>
              </div>
              <div>
                <p className="text-3xl font-heading font-black text-forest tracking-tighter">15+</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-navy/30">Partner Regions</p>
              </div>
            </div>
          </div>
        </section>

        {/* Meet the Founder - HIGH IMPACT */}
        <section className="bg-navy rounded-[4rem] p-12 lg:p-24 shadow-2xl text-sand relative overflow-hidden mb-40">
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal/10 blur-[100px] rounded-full"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
            <div className="order-2 lg:order-1">
              <div className="inline-block px-4 py-2 bg-white/10 text-teal rounded-full font-bold text-[10px] tracking-widest mb-8">THE VISIONARY</div>
              <h2 className="text-5xl lg:text-7xl font-heading font-bold mb-6 leading-tight">Dr. Maxine <br/><span className="text-teal italic">Chi Chi</span> Okafor</h2>
              <p className="text-xl text-teal/80 font-bold mb-8 tracking-tight">DNP, PMHNP-BC, FNP-BC</p>
              
              <div className="space-y-6 text-lg text-sand/60 leading-relaxed font-light mb-10">
                <p>
                  As a dual board-certified Nurse Practitioner and a devoted leader in faith-based healing, Dr. Okafor brings a unique blend of clinical expertise and spiritual depth.
                </p>
                <p>
                  She is the visionary architect behind "The Mental Health Experience" and "The School of the Spirit," programs that have touched thousands across continents. Her work focuses on bridging the gap between medicine and the pulpit.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-12">
                <a 
                  href="https://www.drchichirx.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-teal text-navy font-black px-10 py-4 rounded-xl shadow-xl hover:bg-white transition-all transform hover:scale-105"
                >
                  Learn more about her
                </a>
                
                <div className="flex items-center space-x-5">
                  <a href="https://www.instagram.com/drchichirx" target="_blank" rel="noopener noreferrer" className="text-sand/40 hover:text-teal transition-colors">Instagram</a>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src={IMAGE_ASSETS.founder} 
                className="rounded-3xl shadow-2xl w-full h-[600px] object-cover" 
                alt="Dr. Maxine Okafor" 
              />
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-40">
           <div className="text-center mb-20">
              <h2 className="text-4xl font-heading font-bold text-navy mb-4">Our Global Board & Leadership</h2>
              <p className="text-navy/50 max-w-xl mx-auto">Diverse experts united by a single mission: bridging the gap between clinical and spiritual care.</p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {teamMembers.map((member, i) => (
                <div key={i} className="group">
                   <div className="relative overflow-hidden rounded-2xl mb-6 aspect-square bg-navy/5">
                      <img src={member.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-700" alt={member.name} />
                   </div>
                   <h4 className="text-xl font-bold text-navy mb-1">{member.name}</h4>
                   <p className="text-teal font-bold text-xs uppercase tracking-widest mb-4">{member.title}</p>
                   <p className="text-navy/60 text-sm leading-relaxed">{member.bio}</p>
                </div>
              ))}
           </div>
        </section>

        {/* Join Us Section */}
        <section className="bg-white rounded-[4rem] p-12 lg:p-24 shadow-xl border border-navy/5">
           <div className="text-center mb-16">
              <h2 className="text-4xl font-heading font-bold text-navy mb-4">Join the Movement</h2>
              <p className="text-navy/60">We are always looking for partners and visionaries to help expand the bridge.</p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {joinPathways.map((path, i) => (
                <div key={i} className="p-10 bg-sand/30 rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-500">
                   <div className="text-4xl mb-6">{path.icon}</div>
                   <h4 className="text-xl font-bold text-navy mb-4">{path.title}</h4>
                   <p className="text-navy/60 text-sm mb-8 leading-relaxed">{path.desc}</p>
                   <Link to="/contact" className="text-teal font-bold hover:underline">{path.cta} →</Link>
                </div>
              ))}
           </div>
        </section>
      </div>
    </div>
  );
};

export default About;