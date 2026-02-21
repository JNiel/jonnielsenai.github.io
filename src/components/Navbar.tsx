import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { CONTACT } from '../constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'AI Expertise', href: '#ai-expertise' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Insights', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/90 backdrop-blur-xl border-b border-stone-100 py-4 shadow-sm' : 'bg-transparent py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold tracking-tighter text-stone-900 serif">
          JON<span className="text-emerald-600">NIELSEN</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map(link => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-stone-500 hover:text-emerald-600 transition-colors tracking-wide uppercase"
            >
              {link.name}
            </a>
          ))}
          <a 
            href={`tel:${CONTACT.phone}`}
            className="px-6 py-2.5 bg-stone-900 text-white text-sm font-semibold rounded-full hover:bg-emerald-600 transition-all shadow-lg shadow-stone-200"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-stone-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-white border-b border-stone-100 p-8 md:hidden shadow-2xl"
        >
          <div className="flex flex-col gap-6">
            {navLinks.map(link => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-xl font-medium text-stone-600 hover:text-emerald-600 serif"
              >
                {link.name}
              </a>
            ))}
            <a 
              href={`tel:${CONTACT.phone}`}
              onClick={() => setIsOpen(false)}
              className="w-full py-4 bg-stone-900 text-white text-center font-bold rounded-2xl"
            >
              Hire Me: {CONTACT.phone}
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
