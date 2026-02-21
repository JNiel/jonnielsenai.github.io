import React from 'react';
import { motion } from 'motion/react';
import { EXPERIENCE } from '../constants';

export default function Experience() {
  return (
    <section id="experience" className="py-32 bg-[#FDFCFB]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-stone-900 mb-8 serif">
              PROFESSIONAL <span className="text-stone-400 italic">JOURNEY</span>
            </h2>
            <p className="text-stone-600 text-xl serif">
              A decade of building high-performing data functions from the ground up in high-growth European scale-ups.
            </p>
          </div>
          <div className="text-stone-300 font-mono text-xs tracking-[0.3em] uppercase">
            [ 02 / EXPERIENCE ]
          </div>
        </div>

        <div className="space-y-20">
          {EXPERIENCE.map((job, index) => (
            <motion.div
              key={`${job.company}-${job.title}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-12 pb-20 border-b border-stone-100 last:border-0"
            >
              <div className="lg:col-span-4">
                <div className="sticky top-32">
                  <div className="text-emerald-600 font-mono text-xs font-bold tracking-widest uppercase mb-4">{job.period}</div>
                  <h3 className="text-3xl font-bold text-stone-900 mb-2 serif">{job.title}</h3>
                  <div className="text-xl text-stone-500 font-medium serif italic">{job.company}</div>
                </div>
              </div>
              
              <div className="lg:col-span-8">
                <p className="text-stone-700 text-xl mb-10 leading-relaxed serif">
                  {job.description}
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {job.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-4 text-stone-600 text-base leading-relaxed serif">
                      <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
