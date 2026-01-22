
import React from 'react';
import { Leaf, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const socials = [
    { icon: Instagram, href: "https://www.instagram.com/cottonmark.tm?igsh=ZDlzdXRjb29qOXh4" },
    { icon: Twitter, href: "#" },
    { icon: Linkedin, href: "#" },
  ];

  return (
    <footer className="bg-stone-900 dark:bg-stone-950 text-stone-400 dark:text-stone-500 py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="bg-emerald-600 p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
                <Leaf className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-serif font-bold text-white tracking-tight">
                Cotton<span className="text-emerald-400">Mark</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Advancing the global cotton industry through precision data, scientific grading, and unwavering commitment to quality standards.
            </p>
            <div className="flex gap-4">
              {socials.map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  target={social.href.startsWith('http') ? "_blank" : undefined}
                  rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  className="hover:text-emerald-400 transition-all hover:scale-125 transform hover:-translate-y-1"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-sm">
              {['HVI Fiber Testing', 'Visual Classing', 'Certified Weighting', 'Arbitration Support'].map((link, i) => (
                <li key={i}><a href="#" className="hover:text-white transition-all hover:translate-x-2 inline-block">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              {['About CottonMark', 'Lab Locations', 'Technical Docs', 'Sustainability'].map((link, i) => (
                <li key={i}><a href="#" className="hover:text-white transition-all hover:translate-x-2 inline-block">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 group">
                <MapPin size={18} className="text-emerald-500 shrink-0 group-hover:scale-125 transition-transform" />
                <span className="group-hover:text-white transition-colors">Bangalore, India<br />Cotton District, Karnataka</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone size={18} className="text-emerald-500 shrink-0 group-hover:scale-125 transition-transform" />
                <span className="group-hover:text-white transition-colors">+91 (800) 555-GRADER</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail size={18} className="text-emerald-500 shrink-0 group-hover:scale-125 transition-transform" />
                <span className="group-hover:text-white transition-colors">contact@cottonmark.in</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-stone-800 dark:border-stone-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium uppercase tracking-widest">
          <p>&copy; 2026 CottonMark International. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
