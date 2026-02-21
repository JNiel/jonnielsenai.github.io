import React from 'react';
import { motion } from 'motion/react';
import { SKILLS } from '../constants';

export default function Skills() {
  return (
    <section id="skills" className="py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-stone-900 mb-8 serif">
              TECHNICAL <span className="text-stone-400 italic">STACK</span>
            </h2>
            <p className="text-stone-600 text-xl serif">
              Comprehensive expertise across the modern data stack, from infrastructure to visualization and predictive modeling.
            </p>
          </div>
          <div className="text-stone-300 font-mono text-xs tracking-[0.3em] uppercase">
            [ 03 / SKILLS ]
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SKILLS.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 rounded-[32px] bg-white border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold text-stone-900 serif">{category.category}</h3>
                <span className={`text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full ${
                  category.level === 'Advanced' ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' : 'bg-stone-50 text-stone-600 border border-stone-100'
                }`}>
                  {category.level}
                </span>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map(skill => (
                  <span 
                    key={skill}
                    className="px-4 py-2 rounded-xl bg-stone-50 text-stone-700 text-sm font-medium border border-stone-100 hover:bg-emerald-50 hover:border-emerald-100 hover:text-emerald-700 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
