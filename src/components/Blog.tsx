import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Clock, Calendar, X } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { BLOG_POSTS } from '../constants';
import { BlogPost } from '../types';

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-stone-900 mb-8 serif">
              DATA & AI <span className="text-stone-400 italic">INSIGHTS</span>
            </h2>
            <p className="text-stone-600 text-xl serif">
              Sharing my thoughts on the intersection of technical architecture, team leadership, and the future of AI.
            </p>
          </div>
          <div className="text-stone-300 font-mono text-xs tracking-[0.3em] uppercase">
            [ 04 / BLOG ]
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {BLOG_POSTS.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedPost(post as BlogPost)}
            >
              <div className="relative aspect-[16/10] rounded-[32px] bg-stone-100 overflow-hidden mb-8">
                <img 
                  src={`https://picsum.photos/seed/${index + 10}/800/500`} 
                  alt={post.title}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 grayscale hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              
              <div className="flex items-center gap-6 text-stone-400 text-xs font-mono uppercase tracking-widest mb-4">
                <span className="flex items-center gap-2"><Calendar size={14} /> {post.date}</span>
                <span className="flex items-center gap-2"><Clock size={14} /> {post.readTime}</span>
              </div>
              
              <h3 className="text-2xl font-bold text-stone-900 mb-4 group-hover:text-emerald-600 transition-colors serif leading-tight">
                {post.title}
              </h3>
              
              <p className="text-stone-600 mb-6 line-clamp-2 serif italic">
                {post.excerpt}
              </p>
              
              <div className="inline-flex items-center gap-2 text-stone-900 font-bold text-sm uppercase tracking-wider group-hover:gap-4 transition-all">
                Read Article <ArrowUpRight size={18} className="text-emerald-600" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Blog Post Modal */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPost(null)}
              className="absolute inset-0 bg-stone-950/60 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col"
            >
              <button 
                onClick={() => setSelectedPost(null)}
                className="absolute top-8 right-8 z-10 w-12 h-12 rounded-full bg-stone-100 text-stone-900 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all shadow-sm"
              >
                <X size={24} />
              </button>

              <div className="flex-1 overflow-y-auto p-8 md:p-16">
                <div className="flex items-center gap-6 text-stone-400 text-xs font-mono uppercase tracking-widest mb-8">
                  <span className="flex items-center gap-2"><Calendar size={14} /> {selectedPost.date}</span>
                  <span className="flex items-center gap-2"><Clock size={14} /> {selectedPost.readTime}</span>
                </div>

                <div className="markdown-body prose prose-stone lg:prose-xl max-w-none">
                  <ReactMarkdown>{selectedPost.content}</ReactMarkdown>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
