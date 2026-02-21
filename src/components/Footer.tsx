import React from 'react';
import { motion } from 'motion/react';
import { Linkedin, Mail, ArrowUpRight, Phone } from 'lucide-react';
import { CONTACT } from '../constants';

export default function Footer() {
  return (
    <footer id="contact" className="py-32 bg-stone-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-32">
          <div>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tight mb-12 serif">
              LET'S BUILD <br />
              <span className="text-emerald-500 italic">THE FUTURE</span>.
            </h2>
            <p className="text-stone-400 text-xl max-w-md mb-12 serif italic">
              Currently based in Auckland and available for strategic leadership roles in Data & AI on a global scale.
            </p>
            <div className="flex gap-6">
              <a 
                href={CONTACT.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-16 h-16 rounded-full border border-stone-800 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500"
              >
                <Linkedin size={28} />
              </a>
              <a 
                href={`mailto:${CONTACT.email}`}
                className="w-16 h-16 rounded-full border border-stone-800 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500"
              >
                <Mail size={28} />
              </a>
              <a 
                href={`tel:${CONTACT.phone}`}
                className="w-16 h-16 rounded-full border border-stone-800 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500"
              >
                <Phone size={28} />
              </a>
            </div>
          </div>
          
          <div className="space-y-16">
            <div>
              <div className="text-stone-500 font-mono text-xs tracking-[0.3em] uppercase mb-6">Direct Contact</div>
              <div className="space-y-6">
                <a href={`mailto:${CONTACT.email}`} className="text-3xl md:text-5xl font-medium hover:text-emerald-500 transition-colors flex items-center gap-6 serif">
                  {CONTACT.email} <ArrowUpRight size={32} className="text-stone-700" />
                </a>
                <a href={`tel:${CONTACT.phone}`} className="text-3xl md:text-5xl font-medium hover:text-emerald-500 transition-colors flex items-center gap-6 serif">
                  {CONTACT.phone} <ArrowUpRight size={32} className="text-stone-700" />
                </a>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-12">
              <div>
                <div className="text-stone-500 font-mono text-xs tracking-[0.3em] uppercase mb-4">Location</div>
                <div className="text-xl serif italic">{CONTACT.location}</div>
              </div>
              <div>
                <div className="text-stone-500 font-mono text-xs tracking-[0.3em] uppercase mb-4">Availability</div>
                <div className="text-xl serif italic">{CONTACT.availability}</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-16 border-t border-stone-900 flex flex-col md:flex-row justify-between items-center gap-8 text-stone-500 text-sm font-mono tracking-widest uppercase">
          <div>© 2026 {CONTACT.name} • Data & AI Leadership</div>
          <div className="flex gap-12">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
