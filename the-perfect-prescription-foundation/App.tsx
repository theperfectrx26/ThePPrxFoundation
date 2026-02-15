import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import MHE from './pages/MHE';
import SOS from './pages/SOS';
import ApplySOS from './pages/ApplySOS';
import FortyDays from './pages/FortyDays';
import ChurchProgram from './pages/ChurchProgram';
import ChurchAudit from './pages/ChurchAudit';
import Donate from './pages/Donate';
import Contact from './pages/Contact';
import RiseAndRestore from './pages/RiseAndRestore';
import ApplyToSpeak from './pages/ApplyToSpeak';
import MHFR from './pages/MHFR';
import Partner from './pages/Partner';
import WhyPartner from './pages/WhyPartner';

const App: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-teal selection:text-white">
      {/* Top Announcement Bar */}
      <div className="bg-forest text-sand text-[10px] sm:text-xs h-10 flex items-center justify-center text-center font-bold tracking-widest uppercase fixed top-0 w-full z-[60] px-4 overflow-hidden whitespace-nowrap shadow-md">
        Upcoming: The Mental Health Experience Nigeria Tour 2026 &bull; Join the Global Restoration Movement &bull; Donate Today
      </div>
      
      <Navigation />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/why-partner" element={<WhyPartner />} />
          <Route path="/programs/mhe" element={<MHE />} />
          <Route path="/programs/sos" element={<SOS />} />
          <Route path="/programs/sos/apply" element={<ApplySOS />} />
          <Route path="/programs/40d40n" element={<FortyDays />} />
          <Route path="/programs/rise-restore" element={<RiseAndRestore />} />
          <Route path="/programs/rise-restore/speak" element={<ApplyToSpeak />} />
          <Route path="/programs/church" element={<ChurchProgram />} />
          <Route path="/programs/church/audit" element={<ChurchAudit />} />
          <Route path="/programs/mhfr" element={<MHFR />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />

      {/* Optimized Sticky Mobile CTAs for Conversion */}
      <div className="md:hidden fixed bottom-8 left-4 right-4 z-[70] flex space-x-3 pointer-events-none">
        <button 
          onClick={() => navigate('/donate')} 
          className="flex-1 pointer-events-auto bg-amber text-navy font-black py-5 rounded-2xl shadow-[0_15px_40px_rgba(255,184,77,0.4)] active:scale-95 transition-all flex items-center justify-center space-x-2 border border-white/20 animate-subtle-pulse"
        >
          <span className="text-lg">❤️</span>
          <span className="uppercase tracking-widest text-[13px]">Donate</span>
        </button>
        <button 
          onClick={() => navigate('/partner')} 
          className="flex-1 pointer-events-auto bg-forest text-sand font-black py-5 rounded-2xl shadow-[0_15px_40px_rgba(47,79,79,0.3)] active:scale-95 transition-all flex items-center justify-center space-x-2 border border-white/10"
        >
          <span className="text-lg">🤝</span>
          <span className="uppercase tracking-widest text-[13px]">Partner</span>
        </button>
      </div>

      <style>{`
        @keyframes subtle-pulse {
          0% { transform: scale(1); box-shadow: 0 15px 40px rgba(255,184,77,0.4); }
          50% { transform: scale(1.03); box-shadow: 0 20px 50px rgba(255,184,77,0.5); }
          100% { transform: scale(1); box-shadow: 0 15px 40px rgba(255,184,77,0.4); }
        }
        .animate-subtle-pulse {
          animation: subtle-pulse 3s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default App;