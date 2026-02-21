import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Briefcase, ChevronRight, Globe, GraduationCap } from 'lucide-react';
import { CONTACT } from '../constants';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 bg-[#FDFCFB] overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-stone-50/50 -skew-x-12 transform origin-top-right z-0"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 text-sm font-semibold mb-10 border border-emerald-100 shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Based in Auckland • Available Globally
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-6"
            >
              <h2 className="text-2xl md:text-3xl font-medium text-stone-500 serif italic mb-2">
                {CONTACT.name}
              </h2>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-stone-900 mb-8 leading-[0.9]">
                Data <br />
                <span className="text-emerald-600">& AI Strategy</span>
              </h1>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-stone-600 max-w-2xl mb-12 leading-relaxed serif"
            >
              A pragmatic leader bridging the gap between <span className="text-stone-900 font-semibold italic">complex architecture</span> and <span className="text-stone-900 font-semibold italic">executive strategy</span>. I specialize in building high-performing teams through hands-on mentorship and technical excellence.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-8 items-center"
            >
              <a 
                href="#contact" 
                className="px-10 py-5 bg-stone-900 text-white rounded-full font-bold hover:bg-emerald-600 transition-all flex items-center gap-3 shadow-xl shadow-stone-200"
              >
                Get in touch <ChevronRight size={20} />
              </a>
              
              <div className="flex gap-8">
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 text-stone-500 font-bold text-xs uppercase tracking-widest mb-1">
                    <Globe size={14} /> Availability
                  </div>
                  <div className="text-stone-900 font-medium">{CONTACT.availability}</div>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 text-stone-500 font-bold text-xs uppercase tracking-widest mb-1">
                    <GraduationCap size={14} /> Approach
                  </div>
                  <div className="text-stone-900 font-medium">Hands-on & Mentorship</div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:col-span-4 hidden lg:block">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, type: 'spring', damping: 20 }}
              className="relative aspect-[4/5] rounded-[40px] bg-stone-100 overflow-hidden border-[12px] border-white shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700"
            >
              <img 
                src="https://picsum.photos/seed/jon/800/1000" 
                alt={CONTACT.name} 
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-emerald-900/10 mix-blend-multiply"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
