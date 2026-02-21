import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Cpu, Zap, Brain } from 'lucide-react';
import { AI_EXPERTISE } from '../constants';

const iconMap = {
  TrendingUp: TrendingUp,
  Cpu: Cpu,
  Zap: Zap,
  Brain: Brain,
};

export default function AIExpertise() {
  return (
    <section id="ai-expertise" className="py-32 bg-stone-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-bold tracking-tight mb-8 serif"
            >
              AI & MACHINE LEARNING <br />
              <span className="text-emerald-500 italic">EXPERTISE</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-stone-400 text-xl md:text-2xl leading-relaxed serif"
            >
              Bridging the gap between complex technical architecture and executive-level business strategy to turn data into a competitive advantage.
            </motion.p>
          </div>
          <div className="text-stone-600 font-mono text-xs tracking-[0.3em] uppercase">
            [ 01 / AI CAPABILITIES ]
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {AI_EXPERTISE.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-10 rounded-[32px] bg-stone-900 border border-stone-800 hover:border-emerald-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10"
              >
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                  <Icon size={160} />
                </div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-8 group-hover:scale-110 transition-transform duration-500">
                    <Icon size={28} />
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-6 group-hover:text-emerald-400 transition-colors serif">
                    {item.title}
                  </h3>
                  
                  <p className="text-stone-400 mb-10 text-lg leading-relaxed serif">
                    {item.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    {item.tags.map(tag => (
                      <span 
                        key={tag}
                        className="px-4 py-1.5 rounded-full bg-stone-800 text-stone-300 text-xs font-semibold border border-stone-700 uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
