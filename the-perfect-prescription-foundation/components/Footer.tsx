import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-sand py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          {/* Logo container - styled to match header exactly in font and color */}
          <div className="mb-6">
            <h2 className="text-forest font-heading font-bold text-lg md:text-xl tracking-tight leading-none whitespace-nowrap">
              THE PERFECT <span className="text-teal">PRESCRIPTION</span> <span className="text-sand md:text-forest">FOUNDATION</span>
            </h2>
          </div>
          <p className="text-sand/70 max-w-md mb-8 leading-relaxed">
            A global nonprofit dedicated to bridging faith and mental wellness. We provide whole-person restoration through education, dialogue, and community support.
          </p>
          <div className="flex space-x-6 text-sm font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-teal transition">Instagram</a>
            <a href="#" className="hover:text-teal transition">Facebook</a>
            <a href="#" className="hover:text-teal transition">LinkedIn</a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-6 text-amber">Organization</h3>
          <ul className="space-y-4 text-sand/70">
            <li><Link to="/about" className="hover:text-sand transition">Our Story</Link></li>
            <li><Link to="/partner" className="hover:text-sand transition">Partnerships</Link></li>
            <li><Link to="/contact" className="hover:text-sand transition">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-6 text-amber">Contact</h3>
          <ul className="space-y-4 text-sand/70">
            <li>
              <a href="tel:+13235681700" className="hover:text-teal transition">
                Phone: +1 323.568.1700
              </a>
            </li>
            <li>
              <a href="mailto:support@theperfectrx.com" className="hover:text-teal transition">
                Email: support@theperfectrx.com
              </a>
            </li>
            <li className="pt-4">
              <Link to="/donate" className="inline-block bg-teal/20 text-teal border border-teal/30 px-4 py-2 rounded-lg font-bold">
                Quick Donate
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-sand/10 text-center text-sand/40 text-sm">
        <p>&copy; {new Date().getFullYear()} The Perfect Prescription Foundation. All rights reserved. 501(c)(3) Nonprofit.</p>
      </div>
    </footer>
  );
};

export default Footer;