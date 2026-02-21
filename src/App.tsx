/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AIExpertise from './components/AIExpertise';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Blog from './components/Blog';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FDFCFB] font-sans selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />
      <main>
        <Hero />
        <AIExpertise />
        <Experience />
        <Skills />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}
