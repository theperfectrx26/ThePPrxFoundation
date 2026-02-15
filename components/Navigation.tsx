import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Why Partner', path: '/why-partner' },
    { name: 'Partner', path: '/partner' },
  ];

  const programLinks = [
    { name: 'Mental Health Experience (MHE)', path: '/programs/mhe' },
    { name: '40 Days & 40 Nights', path: '/programs/40d40n' },
    { name: 'School of the Spirit (S.O.S)', path: '/programs/sos' },
    { name: 'Rise & Restore', path: '/programs/rise-restore' },
    { name: 'Mental Health in the Church', path: '/programs/church' },
    { name: 'MHFR Training', path: '/programs/mhfr' },
    { name: 'Mental Wellness Coaches', path: 'https://www.gcmwc.org', external: true },
  ];

  return (
    <header className="fixed top-16 left-4 right-4 z-50 bg-sand/90 backdrop-blur-lg border border-forest/10 rounded-2xl shadow-xl transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2 py-2 overflow-hidden">
            <span className="text-forest font-heading font-black text-[9px] xs:text-[11px] sm:text-sm md:text-xl tracking-tighter leading-tight uppercase">
              THE PERFECT <span className="text-teal">PRESCRIPTION</span> FOUNDATION
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`text-navy font-medium hover:text-teal transition ${location.pathname === '/' ? 'text-teal' : ''}`}>Home</Link>
            <Link to="/about" className={`text-navy font-medium hover:text-teal transition ${location.pathname === '/about' ? 'text-teal' : ''}`}>About</Link>
            <Link to="/why-partner" className={`text-navy font-medium hover:text-teal transition ${location.pathname === '/why-partner' ? 'text-teal' : ''}`}>Why Partner</Link>
            
            <div className="relative group">
              <button 
                onMouseEnter={() => setDropdownOpen(true)}
                className="flex items-center text-navy font-medium hover:text-teal transition py-4"
              >
                Programs
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              
              <div 
                onMouseLeave={() => setDropdownOpen(false)}
                className={`absolute left-0 mt-0 w-64 glass-card rounded-xl shadow-2xl p-2 transition-all duration-300 transform ${dropdownOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-4 scale-95 pointer-events-none'}`}
              >
                {programLinks.map((prog) => (
                  prog.external ? (
                    <a key={prog.name} href={prog.path} target="_blank" rel="noopener noreferrer" className="block px-4 py-3 text-sm text-navy hover:bg-sage rounded-lg transition">
                      {prog.name} ↗
                    </a>
                  ) : (
                    <Link key={prog.name} to={prog.path} className="block px-4 py-3 text-sm text-navy hover:bg-sage rounded-lg transition">
                      {prog.name}
                    </Link>
                  )
                ))}
              </div>
            </div>

            <Link to="/partner" className={`text-navy font-medium hover:text-teal transition ${location.pathname === '/partner' ? 'text-teal' : ''}`}>Partner</Link>
            <Link to="/donate" className="bg-amber hover:bg-amber/90 text-navy font-bold px-6 py-2.5 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition active:scale-95">
              Donate
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-forest focus:outline-none p-2">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 rounded-b-2xl ${isOpen ? 'max-h-screen border-t border-forest/10' : 'max-h-0'}`}>
        <div className="px-4 py-6 space-y-4 bg-sand">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} onClick={() => setIsOpen(false)} className="block text-lg font-medium text-navy">
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-forest/10">
            <p className="text-xs uppercase tracking-widest text-forest/50 font-bold mb-4">Programs</p>
            {programLinks.map((prog) => (
              prog.external ? (
                <a key={prog.name} href={prog.path} className="block py-2 text-navy/80">{prog.name} ↗</a>
              ) : (
                <Link key={prog.name} to={prog.path} onClick={() => setIsOpen(false)} className="block py-2 text-navy/80">{prog.name}</Link>
              )
            ))}
          </div>
          <Link to="/donate" onClick={() => setIsOpen(false)} className="block w-full text-center bg-amber text-navy font-bold py-4 rounded-xl shadow-lg">
            Donate Now
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navigation;