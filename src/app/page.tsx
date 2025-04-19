import React from 'react';
import Hero from '../components/Hero';
import WhatWeDo from '../components/WhatWeDo';
import Mission from '../components/Mission';
import Books from '../components/Books';
import Templates from '../components/Templates';
import About from '../components/About';
import CandleBar from '../components/CandleBar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <WhatWeDo />
      <Mission />
      <Books />
      <Templates />
      <About />
      <CandleBar />
      <Footer />
    </main>
  );
} 