import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import Work from './components/Work';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  // Initialize IntersectionObserver reveal on scroll
  useScrollReveal();

  return (
    <div className="site-wrapper">
      {/* Top Editorial Navigation */}
      <Navbar />

      {/* Main Content Flow */}
      <main id="main-content">
        <Hero />
        <Ticker />
        <Work />
        <About />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
